import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import OverviewCounter from './components/OverviewCounter/OverviewCounter'
import BannerDetails from './components/BannerDetails/BannerDetails'
import SimpleBanner from './components/SimpleBanner/SimpleBanner'
import Blogs from './components/Blogs/Blogs'
import Footer from './components/Footer/Footer'
import AOS from "aos";
import 'aos/dist/aos.css';

const App = () => {

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);


  return (
    <div className='bg-white dark:bg-slate-900'>
      <Navbar />
      <Hero />
      <OverviewCounter />
      <BannerDetails reverse={true} />
      <BannerDetails />
      <SimpleBanner />
      <Blogs />
      <Footer />
    </div>
  )
}

export default App
