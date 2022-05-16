import { useState, useRef } from 'react';
import useSWR from 'swr';
import { trackGoal } from 'fathom-client';

import fetcher from '@lib/fetcher';
import { Form, FormState, Subscribers } from '@lib/types';
import SuccessMessage from 'components/SuccessMessage';
import ErrorMessage from 'components/ErrorMessage';
import LoadingSpinner from 'components/LoadingSpinner';

export default function NewSubscribe() {
  const [form, setForm] = useState<FormState>({ state: Form.Initial });
  const inputEl = useRef(null);
  const { data } = useSWR<Subscribers>('/api/subscribe', fetcher);
  const subscriberCount = new Number(data?.count);

  const subscribe = async (e) => {
    e.preventDefault();
    setForm({ state: Form.Loading });

    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl.current.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    const { error } = await res.json();
    if (error) {
      setForm({
        state: Form.Error,
        message: error
      });
      return;
    }

    trackGoal('CVVIH01V', 0);
    inputEl.current.value = '';
    setForm({
      state: Form.Success,
      message: `Thanks for signing up!`
    });
  };

  return (
    <div id="skip" className='bg-white'>
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:py-32 lg:px-8 lg:flex lg:items-center">
              <div className="lg:w-0 lg:flex-1">
                <h2 className="text-3xl font-extrabold text-gigz-pink sm:text-4xl">
                What to be part of the test team?
                </h2>
                <p className="mt-3 max-w-3xl text-lg text-slate-800">
                Gigz is still in a phase of desing and development. We would love to have you sign up to our newsletter where we&rsquo;ll be sending out updates on progress and even some articles on music.
                </p>
              </div>
              <div className='mt-8 lg:mt-0 lg:ml-8'>
              <form onSubmit={subscribe} className="mt-12 sm:mx-auto sm:max-w-lg sm:flex">
                <div className="min-w-0 flex-1">
                  <label htmlFor="cta-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    ref={inputEl}
                    aria-label="Email for signup"
                    placeholder="youremail@email.com"
                    type="email"
                    autoComplete="email"
                    required
                    className="w-full px-5 py-3 border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-1 focus:ring-gigz-pink focus:border-gigz-pink sm:max-w-xs rounded-md"
                  />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-3">
                  <button
                    type="submit"
                    className="block w-full rounded-md border border-transparent px-5 py-3 bg-gigz-pink text-base font-bold text-white shadow hover:bg-gigz-purple focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gigz-pink sm:px-10"
                  >
                    {form.state === Form.Loading ? <LoadingSpinner /> : 'Subscribe'}
                  </button>
                </div>
              </form>
              {form.state === Form.Error ? (
                <ErrorMessage>{form.message}</ErrorMessage>
              ) : form.state === Form.Success ? (
                <SuccessMessage>{form.message}</SuccessMessage>
              ) : (
                <p className="text-sm text-center pt-4 text-white">
                  {`${
                    subscriberCount > 0 ? subscriberCount.toLocaleString() : '-'
                  } subscribers – `}
                </p>
              )}
              </div>
            </div>
      </div>
  );
}