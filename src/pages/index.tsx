import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Gallery from '@/components/sections/Gallery';
import FeedbackSection from '@/components/sections/FeedbackSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>Remindeen</title>
        <meta
          name='description'
          content='Remindeen mengubah tab baru browser jadi pengingat waktu salat, ayat Al-Qur&apos;an, dan hadits pilihan.'
        />
      </Head>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Gallery />
        <FeedbackSection />
      </main>
      <Footer />
    </>
  );
}
