class Message {
  constructor() {
    this.fName = '';
    this.lName = '';
    this.position = '';

    this.bride = {
      fName: 'Klaudia',
      lName: 'Kim',
      position: 'bride'
    };

    this.groom = {
      fName: 'angelo',
      lName: 'Kim',
      position: 'groom'
    };

    this.template = function() {
      return /*html*/`
      <div class="message message-show">
        <div class="message-close">x</div>
        <h1>
          My name is ${this.fName} ${this.lName}, ${this.position}
        </h1>
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
        _this.fName = _this.bride.fName
        _this.lName = _this.bride.lName
        _this.position = _this.bride.position
        console.log(_this.fName)
        mP.innerHTML = _this.template();
      } else {
        console.log('groom')
        _this.fName = _this.groom.fName
        _this.lName = _this.groom.lName
        _this.position = _this.groom.position
        console.log(_this.fName)
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
