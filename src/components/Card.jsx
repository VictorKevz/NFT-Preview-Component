import React from "react";
import imageEquilibrium from "../assets/images/image-equilibrium.jpg";
import iconView from "../assets/images/icon-view.svg";
import iconEthereum from "../assets/images/icon-ethereum.svg";
import iconClock from "../assets/images/icon-clock.svg";
import imageAvater from "../assets/images/image-avatar.png";

function Card() {
  return (
    <div class="inner-container">
      <div class="item img">
        <img src={imageEquilibrium} alt="image-equilibrium" />
        <img src={iconView} alt="icon-view" class="icon-view" />
        <div class="overlay"></div>
      </div>
      <div class="item text">
        <h2>Equilibrium #3429</h2>
        <p>Our Equilibrium collection promotes balance and calm</p>
        <div class="stats-container">
          <div class="left-side">
            <img src={iconEthereum} alt="icon-ethereum" />
            <h3>0.041 ETH</h3>
          </div>
          <div class="right-side">
            <img src={iconClock} alt="icon-clock" />
            <p>3 days left</p>
          </div>
        </div>
        <div class="profile-container">
          <img src={imageAvater} alt="image-avatar" class="image-avatar" />
          <p>
            Creation of <span class="name"> Jules Wyvern</span>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Card;
