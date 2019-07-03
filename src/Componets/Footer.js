import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../CssContainer/Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
            placeat suscipit inventore mollitia consequuntur iure ratione
            molestias distinctio incidunt eveniet eaque magni unde, quos illo ab
            architecto, rerum nihil esse.
          </p>
          <ul className="social">
            <li><FontAwesomeIcon icon={['fab', 'facebook-square']} size="lg" /></li>
            <li><FontAwesomeIcon icon={['fab', 'twitter']} size="lg" /></li>
            <li><FontAwesomeIcon icon={['fab', 'linkedin']} size="lg" /></li>
            <li><FontAwesomeIcon icon={['fab', 'instagram']} size="lg" /></li>
          </ul>
        </div>
        <div>
          <ul>
          <li>Quick Links</li>
            <li>Home</li>
            <li>create</li>
            <li>Explore</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Contact Us</li>
            <li>report bug</li>
            
          </ul>
        </div>

          <h4>
            &copy; created by: Fillan Lee &trade;
            </h4>
      </footer>
    );
  }
}
export default Footer;
