class Message {
  constructor(fName, lName, position) {
    this.fName = fName;
    this.lName = lName;
    this.position = position;

    this.template = /*html*/`
    <div class="message">
        <div class="message-close">x</div>
        <h1>My name is ${this.fName} ${this.lName}, ${this.position}</h1>
    </div>`

    this.messageButtons = document.querySelectorAll('.wed-couple-newlyweds-message');
    this.messagePopup = document.querySelector('.message-popup');

    //Initiate Methods

  }

  //declare methods
  showMessage() {
    var _this = this;
    this.messageButtons.forEach(function(message) {
      message.addEventListener('click', function() {
      if (message.classList.contains(`wed-couple-newlyweds-message-${_this.position}`)) {
        _this.messagePopup.innerHTML = _this.template;
      }
    })})
  }


//End of class. Don't add anything below this line.
}

export default Message;
