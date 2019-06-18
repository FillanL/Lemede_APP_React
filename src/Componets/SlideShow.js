import React, { Component } from "react";

import Flickity from "react-flickity-component";
import 'flickity/dist/flickity.min.css';
import "../CssContainer/SliderShow.css";

const imgs = [
  "https://images.unsplash.com/photo-1481931715705-36f5f79f1f3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9",
  "https://images.unsplash.com/photo-1517260739337-6799d239ce83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9",
  "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9"
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
          <img src={imgs[0]} alt="Q#"  />
          <img src={imgs[1]} alt="342"/>
          <img src={imgs[2]} alt="324" />
        </Flickity>
        <button onClick={this.myCustomNext}>My custom next button</button>
      </>
    );
  }
}
export default Carousel;
