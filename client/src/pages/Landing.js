import React from "react";
import main from "../assets/images/main-alternative.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components/index";
import {Link} from 'react-router-dom'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby williamsburg affogato narwhal cold-pressed, forage drinking
            vinegar vape XOXO slow-carb echo park tacos. Cornhole portland
            vaporware yr cred knausgaard before they sold out VHS next level
            small batch. Small batch waistcoat meh cardigan, freegan drinking
            vinegar celiac YOLO normcore sustainable venmo etsy adaptogen.
            Brunch chambray messenger bag, kickstarter man braid poke
            flexitarian pug kinfolk coloring book venmo. Messenger bag lomo
            yuccie iPhone actually. Vice twee kogi cardigan, brunch whatever
            coloring book keytar banh mi meditation bitters cray.
          </p>
          <Link to='/register' className="btn btn-hero">Login/Register</Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
