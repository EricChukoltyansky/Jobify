import React from "react";
import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="jobify" className="logo" />
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
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
