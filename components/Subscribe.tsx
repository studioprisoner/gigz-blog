import { useState, useRef } from 'react';
import useSWR from 'swr';
import { trackGoal } from 'fathom-client';

import fetcher from '@lib/fetcher';
import { Form, FormState, Subscribers } from '@lib/types';
import SuccessMessage from 'components/SuccessMessage';
import ErrorMessage from 'components/ErrorMessage';
import LoadingSpinner from 'components/LoadingSpinner';

export default function Subscribe() {
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
    <div id="skip" className='bg-gigz-purple py-16 px-4 sm:py-24'>
      <div className="relative">
              <div className="sm:text-center">
                <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                  Get notified when we&rsquo;re launching
                </h2>
                <p className="mt-6 mx-auto max-w-2xl text-lg text-indigo-200">
                Gigz is still in a phase of desing and development. We would love to have you sign up to our newsletter and be part of testing.
                </p>
              </div>
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
                    className="block w-full border border-transparent rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
                  />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-3">
                  <button
                    type="submit"
                    className="block w-full rounded-md border border-transparent px-5 py-3 bg-gigz-pink text-base font-bold text-white shadow hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 sm:px-10"
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
  );
}