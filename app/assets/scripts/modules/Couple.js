import TriCouple from './TriCouple';
import Message from './Message';

class Couple {
  constructor() {
//Start of HTML Template
    this.template =/*html*/ `
      <div class="message-popup"></div>
      <div class="wed-couple container">
          <div class="wed-couple-newlyweds wed-couple-bride">
            <div class="wed-couple-newlyweds-img wed-couple-bride-img">
              <div class="wed-couple-name-row row">
                <div class="wed-couple-desc wed-couple-name wed-couple-name-bride col-md-auto">
                  <h1>Klaudia Kim</h1>
                </div>
                <div class="wed-couple-desc wed-couple-position wed-couple-position-bride col-md-auto">
                  <span>The Bride</span>
                </div>
              </div>
              <div class="wed-couple-newlyweds-message wed-couple-newlyweds-message-bride">
                <span>Message from the Bride</span>
              </div>

            </div>
          </div>
          <div class="wed-couple-newlyweds wed-couple-groom">
            <div class="wed-couple-newlyweds-img wed-couple-groom-img">
              <div class="wed-couple-name-row row">
                <div class="wed-couple-desc wed-couple-name wed-couple-name-groom col-md-auto">
                  <h1>Angelo Kim</h1>
                </div>
                <div class="wed-couple-desc wed-couple-position wed-couple-position-groom col-md-auto">
                  <span>The Groom</span>
                </div>
              </div>

              <div class="wed-couple-newlyweds-message wed-couple-newlyweds-message-groom">
                <span>Message from the Groom</span>
              </div>

            </div>
          </div>
      </div>
    `;
// End of HTML Template
//DOM declaration
  this.spa = document.querySelector(".wed-spa");
  this.coupleButton = document.querySelector('#couple');
  this.homeSection = document.querySelector(".wed-home");

  //initialize methods
  this.loadCouple();

  };
// End Constructor

// Start methods
// 1. Load couple template on coupleButton click
loadCouple() {
  var _this = this;
  this.coupleButton.addEventListener("click", function() {
    _this.homeSection.classList.remove('wed-front');
    _this.spa.innerHTML = _this.template;
    var triCouple = new TriCouple;
    var brideMessage = new Message('Klaudia', 'Kim', 'bride');
    var groomMessage = new Message('Angelo', 'Kim', 'groom');
    brideMessage.showMessage();
    groomMessage.showMessage();
  });
};

// 2. Load message box on messageButton Click









}


export default Couple;
