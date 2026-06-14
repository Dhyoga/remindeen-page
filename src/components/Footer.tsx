const FOOTER_LINKS = [
  { href: '#fitur', label: 'Fitur' },
  { href: '#tema', label: 'Tema' },
  { href: '#feedback', label: 'Masukan' },
];

export default function Footer() {
  return (
    <footer className='border-t border-stone-200 bg-stone-50'>
      <div className='mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8'>
        <div className='flex flex-col gap-10 md:flex-row md:items-start md:justify-between'>
          <div className='max-w-sm'>
            <a href='#' className='flex items-center gap-2'>
              <img src='logo.png' alt='Logo' className='h-8 w-8 rounded-full object-cover' />
              <span className='text-lg font-semibold tracking-tight text-stone-900'>
                Remindeen
              </span>
            </a>
            <p className='mt-4 text-sm leading-relaxed text-stone-600'>
              Pengingat waktu salat, ayat Al-Qur&apos;an, dan hadits pilihan
              langsung dari tab baru browser kamu.
            </p>
          </div>

          <nav className='flex flex-wrap gap-x-8 gap-y-3'>
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className='text-sm font-medium text-stone-600 transition-colors hover:text-stone-900'
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className='mt-10 flex flex-col gap-4 border-t border-stone-200 pt-6 text-sm text-stone-500 sm:flex-row sm:items-center sm:justify-between'>
          <p>&copy; {new Date().getFullYear()} Remindeen. Dibuat oleh Serdadu Code.</p>
        </div>
      </div>
    </footer>
  );
}
