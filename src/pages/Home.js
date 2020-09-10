import React, { Component } from "react";
import Hero from "../components/Hero";
import Sale from "../components/Sale";
import SaleDetail from "../components/SaleDetail";
import Suscription from "../components/Suscription";
import About from "../components/About";
import Calendar from "../components/Calendar";
import Cereals from "../components/Cereals";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Hero />
        <Sale />
        <SaleDetail />
        <Calendar />
        <Suscription />
        <About />
        <Cereals />
      </>
    );
  }
}

export default Home;
