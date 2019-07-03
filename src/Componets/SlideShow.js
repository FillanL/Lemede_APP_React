import React, { Component } from "react";

import Flickity from "react-flickity-component";
import 'flickity/dist/flickity.min.css';
import "../CssContainer/SliderShow.css";

const imgs = [
  "https://images.unsplash.com/photo-1515853911371-3cbbc2cb44ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1530910417612-701222d79f2f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60","https://images.unsplash.com/photo-1535284366524-b78118e721ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
];

// import Flickity from 'react-flickity-component'

class Carousel extends Component {
  componentDidMount = () => {
    // You can register events in componentDidMount hook
    this.flkty.on("settle", () => {
      console.log(`current index is ${this.flkty.selectedIndex}`);
    });
  };

  myCustomNext = () => {

    this.flkty.next();
  };

  render() {
    return (
      <>
        <Flickity className="why" flickityRef={c => (this.flkty = c)}>
          <img className="fitting" src={imgs[0]} alt="Q#"  />
          <img className="fitting" src={imgs[1]} alt="342"/>
          <img className="fitting" src={imgs[2]} alt="324" />
          <img className="fitting" src={imgs[3]} alt="34" />
        </Flickity>
        {/* <button onClick={this.myCustomNext}>My custom next button</button> */}
      </>
    );
  }
}
export default Carousel;
