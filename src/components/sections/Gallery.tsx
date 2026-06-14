import Image from 'next/image';
import galleryOne from '../../../public/1.png';
import galleryTwo from '../../../public/2.png';
import galleryThree from '../../../public/3.png';

const GALLERY_ITEMS = [
  { src: galleryOne, alt: 'Tema tab baru Remindeen dengan latar Masjidil Haram', span: true },
  { src: galleryTwo, alt: 'Tema tab baru Remindeen dengan latar pegunungan' },
  { src: galleryThree, alt: 'Tema tab baru Remindeen dengan latar laut' },
];

export default function Gallery() {
  return (
    <section id='tema' className='py-20 sm:py-28'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col gap-4 md:flex-row md:items-end md:justify-between'>
          <div className='max-w-xl'>
            <span className='text-sm font-semibold uppercase tracking-wide text-teal-700'>
              Tema
            </span>
            <h2 className='mt-3 text-3xl font-semibold tracking-tighter text-stone-900 md:text-5xl'>
              Pilih suasana favoritmu
            </h2>
          </div>
          <p className='max-w-sm text-base leading-relaxed text-stone-600'>
            Setiap gambar dipilih agar tetap nyaman dipandang, baik untuk fokus
            kerja maupun sekadar membuka tab baru di sela aktivitas.
          </p>
        </div>

        <div className='mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3'>
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.alt}
              className={`group relative overflow-hidden rounded-2xl border border-stone-200 ${
                item.span ? 'col-span-2 row-span-2' : ''
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                className='h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105'
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
