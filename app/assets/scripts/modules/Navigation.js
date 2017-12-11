import Home from './Home';
import Couple from './Couple';
class Navigation {
  constructor() {
    this.couple = new Couple();
    this.spa = document.querySelector(".wed-spa");

    this.homeButton = document.querySelector('#home');
    this.coupleButton = document.querySelector('#couple');
    this.bridesmaidButton = document.querySelector('#bridesmaid');
    this.groomsmenButton = document.querySelector('#groomsmen');
    this.eventsButton = document.querySelector('#events');
    this.storyButton = document.querySelector('#story');
    this.rsvpButton = document.querySelector('#rsvp');

    this.loadHome();
    this.loadCouple();

  };
// 1. Load home.
  loadHome() {
    var _this = this;
    this.homeButton.addEventListener("click", function() {
      var home = new Home();
      _this.spa.innerHTML = home.template;
    })
  };

// 2. Load Couple.
  loadCouple() {
    var _this = this;
    this.coupleButton.addEventListener("click", function() {
      _this.couple.loadCoupleTempStyle();
    })
  };

// 3. Load Bridesmaid.
  loadBridesmaid() {
    var _this = this;
    this.bridesmaidButton.addEventListener("click", function() {
      _this.bridesmaid.loadBridesmaidTemplate();
    })
  }
}

export default Navigation;
