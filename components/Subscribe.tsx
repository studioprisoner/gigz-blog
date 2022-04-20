import { useState, useRef } from 'react';
import useSWR from 'swr';
import { trackGoal } from 'fathom-client';

import fetcher from 'lib/fetcher';
import { Form, FormState, Subscribers } from 'lib/types';
import SuccessMessage from 'components/SuccessMessage';
import ErrorMessage from 'components/ErrorMessage';
import LoadingSpinner from 'components/LoadingSpinner';

export default function Subscribe() {
  const [form, setForm] = useState<FormState>({ state: Form.Initial });
  const inputEl = useRef(null);
  const { data } = useSWR<Subscribers>('/api/subscribers', fetcher);
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
    <div className="rounded my-8 w-full">
      <p className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100">
        Enter your email address to join the wait list for testing.
      </p>
      <form className="relative my-4" onSubmit={subscribe}>
        <input
          ref={inputEl}
          aria-label="Email for signup"
          placeholder="youremail@email.com"
          type="email"
          autoComplete="email"
          required
          className="px-4 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border-gray-300 rounded-md text-gray-600 pr-32"
        />
        <button
          className="flex items-center justify-center absolute right-1 top-1 px-4 pt-1 font-epilogue font-bold h-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded w-28"
          type="submit"
        >
          {form.state === Form.Loading ? <LoadingSpinner /> : 'Subscribe'}
        </button>
      </form>
      <p className='text-gray-600 dark:text-white text-sm my-6 leading-4 antialiased'>Signing up, will also subscribe you to my newsletter. We value your privacy and will not be sharing your email address with any outside parties.</p>
      {form.state === Form.Error ? (
        <ErrorMessage>{form.message}</ErrorMessage>
      ) : form.state === Form.Success ? (
        <SuccessMessage>{form.message}</SuccessMessage>
      ) : (
        <p className="text-sm text-gray-800 dark:text-gray-200">
          {`${
            subscriberCount > 0 ? subscriberCount.toLocaleString() : '-'
          } subscribers – `}
        </p>
      )}
    </div>
  );
}