import React from 'react';
import Carousel from './components/Carousel';
import InfoPara from './components/InfoPara';
import Hero from './components/Hero';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import Accordion from './components/Accordion';


const carouselData = [
  {
    image: "../public/images/sisters.jpg",
    title: "The Twitches",
    description: "Alex and Camryn"
  },
  {
    image: "../public/images/necklaces.jpg",
    title: "Sun & Moon Necklaces",
    description: "Alex and Camyrn's necklaces, representing Alex's powers of the moon and Camryn's powers of the Sun."
  },
  {
    image: "../public/images/darkness.jpeg",
    title: "The Darkness",
    description: "The main enemy in the Twitches series, the darkness is an evil and fearsome foe."
  }
];

const accordionData = [
  {
    title: "Separated at Birth",
    content: "The twitches were separated at birth and adobpted by two different families. However, they meet on their 21st birthday."
  },
  {
    title: "Big Bad Thantos",
    content: "Thantos is a powerful wizard who owns a multi-million dollar corporation and has power in both the human world and Coventry. Jealous of the power the twins held, he attempted to kill them several times following their father's death and removal to the human world, but failed each time."
  },
  {
    title: "Sun & Moon Powers",
    content: "Alex can cast spells, has telekinesis, cryokinesis, telepathy, can see people's emotions, can see into the future, and has a heightened sense of smell and hearing. Camryn can cast spells, can sense people's emotions, has telepathy, clairvoyance, premonition, pyrokinesis, has hyperactive sight, and can blind people temporarily."
  },
  {
    title: "Personalities",
    content: "Alex is a very independent and strong-willed 21-year-old witch. Despite her seemingly cold and hardcore persona, Alex is a very smart, kind and warm-hearted young woman who cares deeply about her family and friends. Camryn is a very charming and free-spirited 21-year-old witch, who is excessively fascinated by the forces of her witchcraft."
  }
];

function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header 
        backgroundPic="banner.png"
      />
      <main className="flex-grow p-4 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <section className="md:w-2/5">
            <Carousel items={carouselData} />
          </section>
          <section className="md:w-3/5">
            <InfoPara />
          </section>
        </div>
        <Hero />
        {accordionData.map((item, index) => (
                  <Accordion
                  key={index}
                  title={item.title}
                  content={item.content}
                />
        ))}

      </main>
      <Footer />
    </div>
  );
}

export default App;
