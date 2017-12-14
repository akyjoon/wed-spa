
class Bridesmaid {
  constructor() {
    //Start constructor.
    //--1. Bridesmaid Template.
    this.template = function() {
      return /*html*/`
      <div class="bridesmaid">
        <div class="bridesmaid-col-1 bridesmaid-1">
          <div class="bridesmaid-quote bridesmaid-quote-1">
            <blockquote>${this.bridesmaid1.message}</blockquote>
          </div>
          <div class=bridesmaid-name>
            <h3 class="bridesmaid-name-first-name">${this.bridesmaid1.fName} ${this.bridesmaid1.lName}</h3>
          </div>
        </div>
        <div class="bridesmaid-col-1 bridesmaid-2">
          <div class="bridesmaid-quote bridesmaid-quote-2">
            <blockquote>${this.bridesmaid2.message}</blockquote>
          </div>
          <div class=bridesmaid-name>
            <h3 class="bridesmaid-name-first-name">${this.bridesmaid2.fName} ${this.bridesmaid2.lName}</h3>
          </div>
        </div>
        <div class="bridesmaid-col-1 bridesmaid-3">
          <div class="bridesmaid-quote bridesmaid-quote-3">
            <blockquote>${this.bridesmaid3.message}</blockquote>
          </div>
          <div class=bridesmaid-name>
            <h3 class="bridesmaid-name-first-name">${this.bridesmaid3.fName} ${this.bridesmaid3.lName}</h3>
          </div>
        </div>
        <div class="bridesmaid-col-1 bridesmaid-4">
          <div class="bridesmaid-quote bridesmaid-quote-4">
            <blockquote>${this.bridesmaid4.message}</blockquote>
          </div>
          <div class=bridesmaid-name>
            <h3 class="bridesmaid-name-first-name">${this.bridesmaid4.fName} ${this.bridesmaid4.lName}</h3>
          </div>
        </div>
      </div>
      `
    }

    //--2. Bridesmaid info.
    this.bridesmaid1 = {
      fName: 'Jane',
      lName: 'Doe',
      message: 'Congratulations! You two look beautiful each other. Be happy forever.',
    };
    this.bridesmaid2 = {
      fName: 'Jena',
      lName: 'Doe',
      message: 'Congratulations! You two look beautiful each other. Be happy forever.',
    };
    this.bridesmaid3 = {
      fName: 'Clementine',
      lName: 'Doe',
      message: 'Congratulations! You two look beautiful each other. Be happy forever.',
    };
    this.bridesmaid4 = {
      fName: 'Carolina',
      lName: 'Doe',
      message: 'Congratulations! You two look beautiful each other. Be happy forever.',
    };

    //--Initiate methods.

    //--End methods initiation
    //End of constructor
  };
  //Declare methods.

  //--1.
  loadBridesmaidTemplate() {

  }
  //End methods declaration.
}

export default Bridesmaid;
