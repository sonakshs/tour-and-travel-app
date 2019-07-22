import React, { Component } from 'react';

import './App.css';
import './bootstrap.css';
import './site.css';
import Navbar from './Components/Navbar';
import CarouselComponent from './Components/CarouselComponent';
import ReviewSection from './Components/ReviewSection';
import Description from './Components/Description';
import Tours from './Components/Tours';
import AttractionsAndGuides from './Components/AttractionsAndGuides';
import GetawaysAndExperiences from './Components/GetawaysAndExperiences';
import ButtonsSection from './Components/ButtonsSection';
import CollapsibleFAQs from './Components/CollapsibleFAQs';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Navbar/>
          <CarouselComponent/>
          <ReviewSection/>
          <Description/>
          <Tours/>
          <AttractionsAndGuides/>
          <GetawaysAndExperiences/>
          <ButtonsSection/>
          <CollapsibleFAQs/>
          <Footer/>
        </div>

      </div>
    );
  }
}

export default App;
