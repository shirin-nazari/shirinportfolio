'use client';
import React, { FormEvent, useState } from 'react';

const EmailTemplate = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'success' | 'error' | null>(null);
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const res = await fetch('/api/send', {
      method: 'POST',
      body: JSON.stringify({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
      }),
    });
    setLoading(false);
    if (res.ok) setStatus('success');
    else setStatus('error');
  };
  return (
    <div className="w-full h-full mx-auto py-20 flex flex-col items-center space-y-16">
      <h4 className="font-bold text-2xl">Contact Me</h4>
      <div className="w-full flex justify-between">
        <div></div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 max-w-lg mx-auto bg-gradient-to-r from-secondary/10 to-logo/10 rounded-2xl w-full p-12"
        >
          <input
            type="text"
            name="name"
            placeholder="name"
            className="border-2 border-brand-light p-2 rounded-md "
            required
          />
          <input
            type="email"
            name="email"
            placeholder="email"
            className="border-2 border-brand-light p-2 rounded-md "
            required
          />
          <textarea
            name="message"
            placeholder="your message "
            className="border-2 border-brand-light p-2 rounded-md"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-brand-dark-logo text-white py-2 rounded-md"
          >
            {loading ? 'Sending..' : 'Send'}
          </button>
        </form>
      </div>

      {status === 'success' && (
        <div
          className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
          role="alert"
        >
          <span className="font-medium">Success!</span> Your message has been
          sent successfully🎉
        </div>
      )}
      {status === 'error' && (
        <div
          className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
          role="alert"
        >
          <span className="font-medium">Error!</span>Something went wrong,Please
          try again.
        </div>
      )}
    </div>
  );
};

export default EmailTemplate;
