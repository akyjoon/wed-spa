class Message {
  constructor() {
    this.fName = '';
    this.lName = '';
    this.position = '';
    this.message = '';
    this.img = '';

    this.bride = {
      fName: 'Klaudia',
      lName: 'Kim',
      position: 'bride',
      message: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. ',
      img: '../assets/images/bride2.jpg'
    };

    this.groom = {
      fName: 'Angelo',
      lName: 'Kim',
      position: 'groom',
      message: 'Rorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. ',
      img: '../assets/images/bride3.jpg'
    };

    this.template = function() {
      return /*html*/`
      <div class="message message-show">
        <div class="message-img">
          <img src="${this.img}" />
        </div>
        <div class="message-close">x</div>
        <div class="message-desc">
          <h1>
            My name is ${this.fName} ${this.lName}, ${this.position}
          </h1>
          <p>${this.message}</p>
        </div>
      </div>`;
    }

    this.elements = function() {
      let messageButtons  = document.querySelectorAll('.wed-couple-newlyweds-message');
      let messagePopup    = document.querySelector('.message-popup');
      let messageClose    = document.querySelector('.message-close');
      let messageDiv      = document.querySelector('.message');
      return {
        messageButtons: messageButtons,
        messagePopup: messagePopup,
        messageClose: messageClose,
        messageDiv: messageDiv
      };
    };


    //Initiate Methods

    //End of Methods.
  }

  //declare methods
  // 1. show message on click.
  showMessage() {
    var _this = this;
    let els = new this.elements();
    let mB = els.messageButtons;
    let mP = els.messagePopup;
    let mD = els.messageDiv;
    mB.forEach(function(message) {
      message.onclick = function() {
      if (message.classList.contains(`wed-couple-newlyweds-message-bride`)) {
        console.log('bride')
        _this.fName = _this.bride.fName;
        _this.lName = _this.bride.lName;
        _this.position = _this.bride.position;
        _this.message = _this.bride.message;
        _this.img = _this.bride.img;
        console.log(_this.fName);
        mP.innerHTML = _this.template();
      } else {
        console.log('groom')
        _this.fName = _this.groom.fName;
        _this.lName = _this.groom.lName;
        _this.position = _this.groom.position;
        _this.message = _this.groom.message;
        _this.img = _this.groom.img;
        console.log(_this.fName);
        mP.innerHTML = _this.template();

      }
      let mC = els.messageClose;
      _this.closeMessage();
    }
  });
};

  // 2. close message.
  closeMessage() {
    let els = new this.elements();
    let mC = els.messageClose;
    let mD = els.messageDiv;
    mC.addEventListener("click", function() {
      console.log('close message')
      mD.style.display = 'none';
    })
  }


//End of class. Don't add anything below this line.
}

export default Message;
