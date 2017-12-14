import Home from './Home';
import Couple from './Couple';
import Bridesmaid from './Bridesmaid';
import Groomsmen from './Groom';
class Navigation {
  constructor() {
    this.home = new Home();
    this.couple = new Couple();
    this.bridesmaid = new Bridesmaid();
    this.groomsmen = new Groomsmen();
    this.spa = document.querySelector(".wed-spa");
    this.homeSection = document.querySelector(".wed-home")

    this.homeButton = document.querySelector('#home');
    this.coupleButton = document.querySelector('#couple');
    this.bridesmaidButton = document.querySelector('#bridesmaid');
    this.groomsmenButton = document.querySelector('#groomsmen');
    this.eventsButton = document.querySelector('#events');
    this.storyButton = document.querySelector('#story');
    this.rsvpButton = document.querySelector('#rsvp');

    this.loadHome();
    this.loadCouple();
    this.loadBridesmaid();
    this.loadGroom();

  };
// 1. Load home.
  loadHomeOnLoad() {
    this.homeSection.classList.add('wed-front');
    this.spa.innerHTML = this.home.template();

  }

// 2. Load home on click
  loadHome() {
    var _this = this;
    this.homeButton.addEventListener("click", function() {
      console.log('a')
      _this.homeSection.classList.add('wed-front');
      _this.spa.innerHTML = _this.home.template();
    })
  };

// 2. Load Couple.
  loadCouple() {
    var _this = this;
    this.coupleButton.addEventListener("click", function() {
      _this.homeSection.classList.remove('wed-front');
      _this.couple.loadCoupleTempStyle();
    })
  };

// 3. Load Bridesmaid.
  loadBridesmaid() {
    var _this = this;
    this.bridesmaidButton.addEventListener("click", function() {
      _this.homeSection.classList.remove('wed-front');
      _this.spa.innerHTML = _this.bridesmaid.template();
    })
  };
  loadGroom() {
    var _this = this;
    this.groomsmenButton.addEventListener("click", function() {
      _this.homeSection.classList.remove('wed-front');
      _this.spa.innerHTML = _this.groomsmen.template();
    })
  };
}

export default Navigation;
