import React from 'react';
import './Home.css';
import Iridescence from '../components/Iridescence'

function Home() {
  return (
    <>
    <Iridescence
    color={[0.9, 0.9, 0.9]}
    mouseReact={false}
    amplitude={0.5}
    speed={0.2}
    className="hero-background"
    />

    <section class="hero-section">
      <h1 class="hero-name">KAYLA CHEN</h1>
    </section>

    <section id="about">
      <h2>hi! my name is kayla</h2>
      <p>I'm a second-year Computer Science student at the University of Florida.</p>
    </section>

    <section id="experience">
        <li>Treasurer @ CS Kickstart</li>
        <li>Sports Coordinator @ Society of Asian Scientists and Engineers</li>
    </section>

    <section id="projects">
        <h2>below are some of the projects i've worked on so far!</h2>
        <p>i'm interested in fullstack development</p>
    </section>
    </>
  );
}

export default Home;
