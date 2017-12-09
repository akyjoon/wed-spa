class Message {
  constructor(fName, lName, position) {
    this.fName = fName;
    this.lName = lName;
    this.position = position;

    this.template = /*html*/`
    <div class="message message-show">
        <div class="message-close">x</div>
        <h1>
          My name is ${this.fName} ${this.lName}, ${this.position}
        </h1>
    </div>`;

    this.elements = function() {
      let messageButtons  = document.querySelectorAll('.wed-couple-newlyweds-message');
      let messagePopup    = document.querySelector('.message-popup');
      let messageClose    = document.querySelector('.message-close');
      let messageDiv = document.querySelector('.message');
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
        console.log(_this.position)
      if (message.classList.contains(`wed-couple-newlyweds-message-${_this.position}`)) {
        console.log('bride or groom?')
        mP.innerHTML = _this.template;
        let mC = els.messageClose;
      }
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
      console.log(this)
      mD.style.display = 'none';
    })
  }


//End of class. Don't add anything below this line.
}

export default Message;
