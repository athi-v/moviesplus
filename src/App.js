import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import Popular from './components/Popular';
import Upcoming from './components/Upcoming';
import Featured from './components/Featured';
import Kids from './components/kids';
import Faq from './components/Faq';
import Footer from './components/Footer'
function App() {

  return (
    <>
  <Navbar />
  <Hero />
  <Popular />
<Featured />
  <Upcoming />
  <Kids />
  <Faq />
  <Footer />
    </>
  );
}

export default App;
