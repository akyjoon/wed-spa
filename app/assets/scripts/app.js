import Home from './modules/Home';
import Couple from './modules/Couple';

//Load Home on window.laod
var home = new Home();

window.addEventListener("load", function() {
  var loader = new Home;
  loader.loadHome();
})
//End of home

//Couple instance
var couple = new Couple();
