import {React , useRef, useEffect} from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'; 
import Navbar from './Navbar'
import Landing from './Landing'
import Marque from './Marque'
import About from './about'
import Play from './play'
import Card from './card'
import Mastercard from './Mastercard'
import Display from './display'
import Footer from './footer'

function App() {

  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
      <div ref={scrollRef} data-scroll-container >
          <Navbar/>
          <Landing/>
          <Marque/>
          <About/>
          <Play/>
          <Card/>
          <Mastercard/>
          <Display/>
          <Footer/>
      </div>
  )
}

export default App