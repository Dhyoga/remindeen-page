import FeedbackForm from '@/components/FeedbackForm';

export default function FeedbackSection() {
  return (
    <section id='feedback' className='bg-white py-20 sm:py-28'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16 lg:items-start'>
          <div>
            <span className='text-sm font-semibold uppercase tracking-wide text-teal-700'>
              Masukan
            </span>
            <h2 className='mt-3 text-3xl font-semibold tracking-tighter text-stone-900 md:text-5xl'>
              Punya saran untuk Remindeen?
            </h2>
            <p className='mt-4 max-w-[50ch] text-base leading-relaxed text-stone-600'>
              Kami membaca setiap masukan yang masuk. Beri tahu kami fitur
              apa yang ingin kamu lihat, atau laporkan kendala yang kamu
              temui saat memakai Remindeen.
            </p>
          </div>

          <FeedbackForm />
        </div>
      </div>
    </section>
  );
}
