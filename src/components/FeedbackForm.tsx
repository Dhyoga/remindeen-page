'use client';

import { useState, type FormEvent } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

type Errors = {
  name?: string;
  email?: string;
  message?: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function FeedbackForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>('idle');

  function validate(): Errors {
    const next: Errors = {};
    if (!name.trim()) next.name = 'Nama wajib diisi.';
    if (!email.trim()) {
      next.email = 'Email wajib diisi.';
    } else if (!EMAIL_PATTERN.test(email.trim())) {
      next.email = 'Format email tidak valid.';
    }
    if (!message.trim()) next.message = 'Pesan tidak boleh kosong.';
    else if (message.trim().length < 10)
      next.message = 'Ceritakan sedikit lebih detail (minimal 10 karakter).';
    return next;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus('loading');
    try {
      await new Promise((resolve) => setTimeout(resolve, 900));
      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className='flex flex-col items-center gap-3 rounded-2xl border border-stone-200 bg-white p-8 text-center'>
        <span className='flex h-12 w-12 items-center justify-center rounded-full bg-teal-50 text-teal-700'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth={1.5}
            strokeLinecap='round'
            strokeLinejoin='round'
            className='h-6 w-6'
          >
            <path d='M20 6 9 17l-5-5' />
          </svg>
        </span>
        <h3 className='text-lg font-semibold text-stone-900'>
          Terima kasih atas masukanmu
        </h3>
        <p className='max-w-sm text-sm leading-relaxed text-stone-600'>
          Pesanmu sudah kami terima dan akan jadi bahan pertimbangan untuk
          pengembangan Remindeen selanjutnya.
        </p>
        <button
          type='button'
          onClick={() => setStatus('idle')}
          className='mt-2 text-sm font-semibold text-teal-700 transition-colors hover:text-teal-800'
        >
          Kirim masukan lain
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className='flex flex-col gap-5 rounded-2xl border border-stone-200 bg-white p-6 sm:p-8'
    >
      <div className='flex flex-col gap-2'>
        <label htmlFor='name' className='text-sm font-medium text-stone-900'>
          Nama
        </label>
        <input
          id='name'
          type='text'
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder='Nama kamu'
          className={`rounded-lg border bg-stone-50 px-4 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-600/30 ${
            errors.name ? 'border-rose-400' : 'border-stone-200 focus:border-teal-600'
          }`}
        />
        {errors.name && <p className='text-sm text-rose-600'>{errors.name}</p>}
      </div>

      <div className='flex flex-col gap-2'>
        <label htmlFor='email' className='text-sm font-medium text-stone-900'>
          Email
        </label>
        <input
          id='email'
          type='email'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder='nama@email.com'
          className={`rounded-lg border bg-stone-50 px-4 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-600/30 ${
            errors.email ? 'border-rose-400' : 'border-stone-200 focus:border-teal-600'
          }`}
        />
        {errors.email && <p className='text-sm text-rose-600'>{errors.email}</p>}
      </div>

      <div className='flex flex-col gap-2'>
        <label htmlFor='message' className='text-sm font-medium text-stone-900'>
          Pesan
        </label>
        <textarea
          id='message'
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder='Ceritakan saran, kritik, atau bug yang kamu temukan'
          rows={4}
          className={`resize-none rounded-lg border bg-stone-50 px-4 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-600/30 ${
            errors.message ? 'border-rose-400' : 'border-stone-200 focus:border-teal-600'
          }`}
        />
        {errors.message && <p className='text-sm text-rose-600'>{errors.message}</p>}
      </div>

      {status === 'error' && (
        <p className='text-sm text-rose-600'>
          Gagal mengirim masukan. Silakan coba lagi sebentar.
        </p>
      )}

      <button
        type='submit'
        disabled={status === 'loading'}
        className='inline-flex items-center justify-center rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-teal-700 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60'
      >
        {status === 'loading' ? 'Mengirim...' : 'Kirim Masukan'}
      </button>
    </form>
  );
}
