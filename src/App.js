import React from 'react'
import Header from './components/Header';
import Projects from './components/Projects';
import Hero from './components/Hero';
import Services from './components/Services';
import Review from './components/Review';
import LatestNews from './components/LatestNews';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Header />
  <Hero/>
       <Services/>
    <Review/>
   <Projects/> 
  <LatestNews/>
       <Footer/> 

    <h1>Hello World</h1>
    </>
  )
}

export default App