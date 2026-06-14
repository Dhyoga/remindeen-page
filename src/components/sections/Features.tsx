const FEATURES = [
  {
    title: 'Waktu salat akurat',
    description:
      'Jadwal salat menyesuaikan lokasimu secara otomatis, lengkap dengan hitung mundur ke waktu berikutnya setiap kali tab baru dibuka.',
    icon: (
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
        <circle cx='12' cy='12' r='9' />
        <path d='M12 7v5l3 2' />
      </svg>
    ),
  },
  {
    title: 'Renungan harian',
    description:
      'Ayat Al-Qur\'an dan hadits pilihan tampil bergantian, memberi pengingat singkat di tengah aktivitas harianmu.',
    icon: (
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
        <path d='M4 19.5A2.5 2.5 0 0 1 6.5 17H20' />
        <path d='M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z' />
      </svg>
    ),
  },
  {
    title: 'Tema yang menenangkan',
    description:
      'Pilih dari berbagai latar pemandangan masjid dan alam yang dirancang agar tab baru terasa lebih damai.',
    icon: (
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
        <rect x='3' y='3' width='18' height='18' rx='2' />
        <circle cx='9' cy='9' r='2' />
        <path d='m21 15-5-5L5 21' />
      </svg>
    ),
  },
  {
    title: 'Ringan dan privat',
    description:
      'Berjalan langsung di browser tanpa mengirim data pribadimu ke server pihak ketiga. Cepat dibuka, tanpa gangguan.',
    icon: (
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
        <path d='M12 2 4 5v6c0 5 4 8.5 8 9.5 4-1 8-4.5 8-9.5V5l-8-3z' />
        <path d='m9 12 2 2 4-4' />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section id='fitur' className='bg-white '>
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className='max-w-2xl'>
            <span className='text-sm font-semibold uppercase tracking-wide text-teal-700'>
              Fitur
            </span>
            <h2 className='mt-3 text-3xl font-semibold tracking-tighter text-stone-900 md:text-5xl'>
              Semua yang kamu butuhkan, dalam satu tab baru
            </h2>
          </div>

          <div className='mt-12 divide-y divide-stone-200 border-t border-stone-200'>
            {FEATURES.map((feature, index) => (
              <div
                key={feature.title}
                className='grid grid-cols-1 gap-4 py-8 md:grid-cols-[2rem_1fr_2fr] md:items-start md:gap-10 animate-fade-in-up'
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <span className='flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 text-teal-700 md:h-8 md:w-8'>
                  {feature.icon}
                </span>
                <h3 className='text-lg font-semibold text-stone-900'>
                  {feature.title}
                </h3>
                <p className='max-w-[55ch] text-base leading-relaxed text-stone-600'>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
}
