import Home from './modules/Home';
import Couple from './modules/Couple';
// import TriCouple from './modules/TriCouple';


var home = new Home();

window.addEventListener("load", function() {
  var loader = new Home;
  loader.loadHome();
})

var couple = new Couple();
// var triCouple = new TriCouple();
