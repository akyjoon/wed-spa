import Home from './modules/Home';
import Navigation from './modules/Navigation';
var navigation = new Navigation();
// import Couple from './modules/Couple';
// import Message from './modules/Message';

//Load Home on window.laod
var home = new Home();

window.addEventListener("load", function() {
  navigation.loadHomeOnLoad();
})
//End of home
