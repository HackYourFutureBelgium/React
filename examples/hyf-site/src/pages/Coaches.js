import React, { Component } from "react";
import Block from "../components/Block";

class Coaches extends Component {
  render() {
    return (
      <main className="page">
        <h1 className="page__title">Want to become coach??</h1>
        <div className="page__body">
          <p>
            HackYourFuture was founded in 2015 in Amsterdam, with the aim to
            enable refugees to build digital skills for a career in web
            development, facilitate the integration of newcomers, and address
            the shortage of qualified workforce in the IT sector. Since 2015,
            HackYourFuture coding schools have also opened in Copenhagen and
            Malmö.
          </p>
        </div>
        <div className="page__blocks">
          <Block title="FREE COFFEE" body="Excellent coffee" />
          <Block title="UNLIMITTED GRATITUDE" body="We love our students" />
          <Block title="WATER BOTTLE" body="DO IT FOR THE WATER BOTTLE" />
        </div>
      </main>
    );
  }
}

export default Coaches;
