import TriCouple from './TriCouple';
import Message from './Message';

class Couple {
  constructor() {

    this.groom = new Message('Angelo', 'Kim', 'groom');
    this.bride = new Message('Klaudia', 'Kim', 'bride');

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
//End of DOM declaration.

//initialize methods.

//End methods.

  };
//------------------------------End Constructor

// Start methods
//1. Inject html template
injectTemplate() {
  this.spa.innerHTML = this.template;
}
//2. Inject couple style
injectStyle() {
  var triCouple = new TriCouple;
}
//3. Load template and style.
loadCoupleTempStyle() {
  this.injectTemplate();
  this.injectStyle();
  this.bride.showMessage();
  this.groom.showMessage();



}

};



export default Couple;
