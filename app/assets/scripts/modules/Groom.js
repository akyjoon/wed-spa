
class Groomsmen {
  constructor() {
    //Start constructor.
    //--1.  Template.
    this.template = function() {
      return /*html*/`
      <div class="groomsmen">
        <div class="groomsmen-col-1 groomsmen-1">
          <div class="groomsmen-quote groomsmen-quote-1">
            <blockquote>${this.groomsmen1.message}</blockquote>
          </div>
          <div class=groomsmen-name>
            <h3 class="groomsmen-name-first-name">${this.groomsmen1.fName} ${this.groomsmen1.lName}</h3>
          </div>
          <div class="groomsmen-social">
            <a href="${this.groomsmen4.facebook}">${this.facebookIcon}</a>
            <a href="${this.groomsmen4.twitter}">${this.twitterIcon}</a>
            <a href="${this.groomsmen4.instagram}">${this.instagramIcon}</a>
            <a href="${this.groomsmen4.google}">${this.googleIcon}</a>
          </div>
        </div>
        <div class="groomsmen-col-1 groomsmen-2">
          <div class="groomsmen-quote groomsmen-quote-2">
            <blockquote>${this.groomsmen2.message}</blockquote>
          </div>
          <div class=groomsmen-name>
            <h3 class="groomsmen-name-first-name">${this.groomsmen2.fName} ${this.groomsmen2.lName}</h3>
          </div>
          <div class="groomsmen-social">
            <a href="${this.groomsmen4.facebook}">${this.facebookIcon}</a>
            <a href="${this.groomsmen4.twitter}">${this.twitterIcon}</a>
            <a href="${this.groomsmen4.instagram}">${this.instagramIcon}</a>
            <a href="${this.groomsmen4.google}">${this.googleIcon}</a>
          </div>
        </div>
        <div class="groomsmen-col-1 groomsmen-3">
          <div class="groomsmen-quote groomsmen-quote-3">
            <blockquote>${this.groomsmen3.message}</blockquote>
          </div>
          <div class=groomsmen-name>
            <h3 class="groomsmen-name-first-name">${this.groomsmen3.fName} ${this.groomsmen3.lName}</h3>
          </div>
          <div class="groomsmen-social">
            <a href="${this.groomsmen4.facebook}">${this.facebookIcon}</a>
            <a href="${this.groomsmen4.twitter}">${this.twitterIcon}</a>
            <a href="${this.groomsmen4.instagram}">${this.instagramIcon}</a>
            <a href="${this.groomsmen4.google}">${this.googleIcon}</a>
          </div>
        </div>
        <div class="groomsmen-col-1 groomsmen-4">
          <div class="groomsmen-quote groomsmen-quote-4">
            <blockquote>${this.groomsmen4.message}</blockquote>
          </div>
          <div class=groomsmen-name>
            <h3 class="groomsmen-name-first-name">${this.groomsmen4.fName} ${this.groomsmen4.lName}</h3>
          </div>
          <div class="groomsmen-social">
            <a href="${this.groomsmen4.facebook}">${this.facebookIcon}</a>
            <a href="${this.groomsmen4.twitter}">${this.twitterIcon}</a>
            <a href="${this.groomsmen4.instagram}">${this.instagramIcon}</a>
            <a href="${this.groomsmen4.google}">${this.googleIcon}</a>
          </div>
        </div>
      </div>
      `
    }

    //--2. Groom info.
    this.groomsmen1 = {
      fName: 'John',
      lName: 'Doe',
      message: 'Congratulations! You two look beautiful each other. Be happy forever.',
      facebook:'http://www.facebook.com',
      twitter: 'http://www.twitter.com',
      instagram: 'http://www.instagram.com',
      google: 'http://www.google.com'
    };
    this.groomsmen2 = {
      fName: 'Danny',
      lName: 'Doe',
      message: 'Congratulations! You two look beautiful each other. Be happy forever.',
      facebook:'http://www.facebook.com',
      twitter: 'http://www.twitter.com',
      instagram: 'http://www.instagram.com',
      google: 'http://www.google.com'
    };
    this.groomsmen3 = {
      fName: 'Shaun',
      lName: 'Doe',
      message: 'Congratulations! You two look beautiful each other. Be happy forever.',
      facebook:'http://www.facebook.com',
      twitter: 'http://www.twitter.com',
      instagram: 'http://www.instagram.com',
      google: 'http://www.google.com'
    };
    this.groomsmen4 = {
      fName: 'Carol',
      lName: 'Doe',
      message: 'Congratulations! You two look beautiful each other. Be happy forever.',
      facebook:'http://www.facebook.com',
      twitter: 'http://www.twitter.com',
      instagram: 'http://www.instagram.com',
      google: 'http://www.google.com'
    };

    //--3. Icons
    this.facebookIcon = '<i class="fab fa-facebook-f"></i>'
    this.twitterIcon = '<i class="fab fa-twitter"></i>'
    this.instagramIcon = '<i class="fab fa-instagram"></i>'
    this.googleIcon = '<i class="fab fa-google"></i>'

    //--Initiate methods.

    //--End methods initiation
    //End of constructor
  };
  //Declare methods.

  //--1.
  loadGroomTemplate() {

  }
  //End methods declaration.
}

export default Groomsmen;
