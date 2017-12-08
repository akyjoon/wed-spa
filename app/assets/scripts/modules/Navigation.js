import Home from './Home';
import Couple from './Couple';
var home = new Home();
var couple = new Couple();

class Navigation {
  constructor() {
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

  loadHome() {
    var _this = this;
    this.homeButton.addEventListener("click", function() {
      _this.spa.innerHTML = home.template;
    })
  };

  loadCouple() {
    var _this = this;
    this.coupleButton.addEventListener("click", function() {
      _this.spa.innerHTML = couple.template;
    })
  };


}

export default Navigation;
