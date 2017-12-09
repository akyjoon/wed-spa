import Home from './modules/Home';
import Navigation from './modules/Navigation';
// import Couple from './modules/Couple';
// import Message from './modules/Message';

//Load Home on window.laod
var home = new Home();

window.addEventListener("load", function() {
  var loader = new Home;
  loader.loadHome();
})
//End of home
var navigation = new Navigation();
