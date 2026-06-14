import Image from 'next/image';
import previewPic from '../../../public/preview.png';
import { ChromeIcon, FirefoxIcon } from '@/components/icons/BrowserIcons';

export default function Hero() {
  return (
    <section id='hero' className='relative overflow-hidden'>
      <div
        aria-hidden
        className='pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-teal-100/70 blur-3xl'
      />

      <div className='mx-auto grid max-w-7xl gap-12 px-4 pb-16 pt-14 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16 lg:px-8 lg:pb-28 lg:pt-20'>
        <div className='relative animate-fade-in-up'>
          <span className='inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-medium text-stone-500'>
            <span className='h-1.5 w-1.5 rounded-full bg-teal-600 animate-pulse-soft' />
            Ekstensi browser &middot; Gratis
          </span>

          <h1 className='mt-6 text-4xl font-semibold tracking-tighter text-stone-900 md:text-6xl md:leading-[1.05]'>
            Setiap tab baru, pengingat untuk salat tepat waktu.
          </h1>

          <p className='mt-6 max-w-[48ch] text-base leading-relaxed text-stone-600'>
            Remindeen mengubah halaman tab baru jadi pengingat waktu salat
            yang akurat sesuai lokasimu, dilengkapi ayat Al-Qur&apos;an dan
            hadits pilihan yang berganti setiap hari.
          </p>

          <div className='mt-8 flex flex-col gap-3 sm:flex-row sm:items-center'>
            <a
              href='#'
              className='inline-flex items-center justify-center gap-2.5 rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-teal-700 active:scale-[0.98]'
            >
              <ChromeIcon className='h-5 w-5' />
              Tambahkan ke Chrome
            </a>
            <a
              href='#'
              className='inline-flex items-center justify-center gap-2.5 rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-stone-700 transition-all hover:border-stone-400 active:scale-[0.98]'
            >
              <FirefoxIcon className='h-5 w-5' />
              Tambahkan ke Firefox
            </a>
          </div>
        </div>

        <div className='relative animate-fade-in-up [animation-delay:150ms]'>
          <div className='relative overflow-hidden rounded-2xl border border-stone-200 bg-stone-900 shadow-[0_30px_60px_-30px_rgba(28,25,23,0.35)]'>
            <Image
              src={previewPic}
              alt='Tampilan tab baru Remindeen dengan waktu salat dan ayat Al-Qur&apos;an'
              className='w-full'
              priority
            />
          </div>

          <div className='absolute -bottom-6 -left-6 hidden items-center gap-3 rounded-2xl border border-stone-200 bg-white px-4 py-3 shadow-[0_20px_40px_-15px_rgba(28,25,23,0.15)] sm:flex'>
            <span className='flex h-9 w-9 items-center justify-center rounded-full bg-teal-50 text-teal-700'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth={1.5}
                strokeLinecap='round'
                strokeLinejoin='round'
                className='h-5 w-5'
              >
                <circle cx='12' cy='12' r='9' />
                <path d='M12 7v5l3 2' />
              </svg>
            </span>
            <div>
              <p className='text-xs text-stone-500'>Waktu salat berikutnya</p>
              <p className='text-sm font-semibold text-stone-900'>
                Maghrib &middot; 17:59
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
