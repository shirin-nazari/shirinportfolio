'use client';
import React, { FormEvent, useState } from 'react';

const EmailTemplate = () => {
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
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
    if (res.ok) alert('ایمیل ارسال شد');
    else alert('خطا در ارسال');
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 max-w-md mx-auto"
    >
      <input
        type="text"
        name="name"
        placeholder="name"
        className="border p-2 rounded "
        required
      />
      <input
        type="email"
        name="email"
        placeholder="email"
        className="border p-2 rounded "
        required
      />
      <textarea
        name="message"
        placeholder="your message "
        className="border p-2 rounded"
        required
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-brand-dark-logo text-white py-2 rounded"
      >
        {loading ? 'ارسال' : 'درحال ارسال ...'}
      </button>
    </form>
  );
};

export default EmailTemplate;
