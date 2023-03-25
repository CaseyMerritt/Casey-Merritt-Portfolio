import Head from 'next/head';
import React from 'react';
import Navbar from './Navbar';
import Main from './Main';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Casey Merritt Porfoloio</title>
        <meta name="Portfolio Website" content="Casey Merritt Portfolio" />
        <link rel="icon" href="" />
      </Head>
      <Main/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}
