import React, { Component } from "react";
import Header from "../components/Header";
import Information from "../components/Information";
import About from "../components/About";
import Cta from "../components/Cta";
import Calendar from "../components/Calendar";
import Suscription from "../components/Suscription";
import Sale from "../components/Sale";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enabledInformation: false,
      enabledSale: false,
      enabledAbout: false,
      enabledCta: false,
      enabledCalendar: false,
      enabledSuscription: false,
    };
  }

  render() {
    return (
      <>
        {/* <Header /> */}
        <div>Hero (propuesta de valor mondino)</div>
        <div>Proximo Remate (form)</div>
        <div>Detalle del Remate</div>
        <div>calendario de remates futuros (4 como màximo)</div>
        <div>Cta suscripción novedades remates </div>
        <div>Sobre Mondino</div>

        {!this.state.enabledInformation ? null : <Information />}
        {!this.state.enabledSale ? null : <Sale />}
        {!this.state.enabledAbout ? null : <About />}
        {!this.state.enabledCta ? null : <Cta />}
        {!this.state.enabledCalendar ? null : <Calendar />}
        {!this.state.enabledSuscription ? null : <Suscription />}
      </>
    );
  }
}

export default Home;
