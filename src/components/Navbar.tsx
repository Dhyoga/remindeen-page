'use client';

import Image from 'next/image';

const NAV_LINKS = [
  { href: '#fitur', label: 'Fitur' },
  { href: '#tema', label: 'Tema' },
  { href: '#feedback', label: 'Masukan' },
];

export default function Navbar() {
  return (
    <header className='sticky top-0 z-20 border-b border-stone-200/70 bg-stone-50/80 backdrop-blur-md'>
      <div className='mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8'>
        <a href='#' className='flex items-center gap-2'>
          <Image src='/logo.png' alt='Logo' className='rounded-full object-cover' width={32} height={32} />
          <span className='text-lg font-semibold tracking-tight text-stone-900'>
            Remindeen
          </span>
        </a>

        <nav className='hidden items-center gap-8 md:flex'>
          {NAV_LINKS.map((link) => (
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
    </header>
  );
}
