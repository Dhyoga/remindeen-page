export default function About() {
  return (
    <section id='tentang' className='mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28'>
      <div className='grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16'>
        <div>
          <span className='text-sm font-semibold uppercase tracking-wide text-teal-700'>
            Tentang
          </span>
          <h2 className='mt-3 text-3xl font-semibold tracking-tighter text-stone-900 md:text-5xl'>
            Dibuat oleh Serdadu Code
          </h2>
        </div>
        <div className='space-y-4'>
          <p className='max-w-[65ch] text-base leading-relaxed text-stone-600'>
            Remindeen dikembangkan oleh Serdadu Code, tim kecil yang fokus
            membangun aplikasi sederhana namun bermanfaat untuk dipakai
            sehari-hari. Kami percaya pengingat ibadah tidak perlu rumit
            cukup hadir di tempat yang paling sering kamu lihat: tab baru
            browser.
          </p>
          <p className='max-w-[65ch] text-base leading-relaxed text-stone-600'>
            Remindeen terus dikembangkan berdasarkan masukan langsung dari
            pengguna. Jika ada fitur yang kamu rasa perlu ditambahkan, atau
            menemukan sesuatu yang kurang pas, beri tahu kami melalui formulir
            di bawah.
          </p>
        </div>
      </div>
    </section>
  );
}
