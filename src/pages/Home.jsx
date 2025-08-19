import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import First from '../component/First'
import Second from '../component/Second'
import Third from '../component/Third'
import Fourth from '../component/Fourth';
import Fifth from '../component/Fifth';

function Home() {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
    <div data-aos="zoom-in"><First/></div>
    <div data-aos="zoom-in"><Second/></div>
    <div data-aos="fade-up"><Third/></div>
    <div data-aos="zoom-in"><Fourth/></div>
    <div data-aos="flip-up"><Fifth/></div>
    </>

  );
}

export default Home;
