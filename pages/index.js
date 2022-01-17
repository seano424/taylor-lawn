import { useEffect, useState } from 'react'
import { getContent, getTestimonials } from '../lib/api'
import Layout from '../components/Layout'
import Jumbotron from '../components/Jumbotron'
import About from '../components/About'
import Gallery from '../components/Gallery'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import Services from '../components/Services'
import { scrollTo } from '../utils/scrollTo'

export default function Home({ content, testimonials }) {
  const banner = content.find((item) => item._type === 'banner')
  const about = content.find((item) => item._type === 'about')
  const gallery = content.find((item) => item._type === 'gallery')

  const [y, setY] = useState(null);
  const [showScroll, setShowScroll] = useState(false);

  const handleNavigation = (e) => {
    const window = e.currentTarget;
    if (y > window.scrollY) {
      window.scrollY === 0 && setShowScroll(false)
    } else if (y < window.scrollY) {
      window.scrollY > 257 && setShowScroll(true)
    }
    setY(window.scrollY);
  };

  useEffect(() => {
    setY(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", (e) => handleNavigation(e));

    return () => { // return a cleanup function to unregister our function since its gonna run multiple times
      window.removeEventListener("scroll", (e) => handleNavigation(e));
    };
  }, [y]);

  return (
    <Layout>
      {showScroll && (
        <div aria-label='scroll to the top' onClick={() => scrollTo('top')} className='fixed right-10 bottom-10 bg-white cursor-pointer z-50 border-8 rounded-full'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
          </svg>
        </div>
      )}
      <Jumbotron banner={banner} />
      {/* CTA Section */}
      <About about={about} />
      <Services />
      {/* Services */}
      <Gallery gallery={gallery} />
      <Testimonials limit={3} testimonials={testimonials} />
      <Contact />
      <Footer />
    </Layout>
  )
}

export async function getStaticProps({ preview = false }) {
  const content = await getContent(preview)
  const testimonials = await getTestimonials(preview)
  return {
    props: { content: content, testimonials },
    revalidate: 1,
  }
}
