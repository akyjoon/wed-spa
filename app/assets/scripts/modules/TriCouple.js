class TriCouple {
  constructor() {
    this.wedCouple = document.querySelector('.wed-couple');
    this.coupleButton = document.querySelector('#couple');
    this.wedCoupleBride = document.querySelector(".wed-couple-bride");
    this.wedCoupleBrideImg = document.querySelector(".wed-couple-bride-img");
    this.wedCoupleGroom = document.querySelector(".wed-couple-groom");
    this.wedCoupleGroomImg = document.querySelector(".wed-couple-groom-img");
    this.wedCoupleNewlyweds = document.querySelectorAll(".wed-couple-newlyweds");

  // Detect initial Viewport
    this.initialWindowWidth = window.innerWidth;
    this.initialWindowHeight = window.innerHeight;
    this.diagonal = Math.sqrt(Math.pow(this.initialWindowWidth, 2) + Math.pow(this.initialWindowHeight, 2));

// Calculate sinus
    this.sineX = this.initialWindowWidth / this.diagonal

// Calculate angle for rotation
    this.sinDegree = Math.asin(this.sineX) * (180 / Math.PI);

    //set break point media query
    this. breakMax = 992;

    //Initiate methods
    this.styleInit();
    this.responsive();

  };


  //SET HEIGHT
  setHeight() {
    this.wedCoupleNewlyweds.forEach((partner) => {
      partner.style.height = this.diagonal + 'px';
    })

  };
  //POSITION TO LEFT & RIGHT
  setPosition(){
    this.wedCoupleBride.style.left = -this.initialWindowWidth + 'px';
    this.wedCoupleBrideImg.style.left = this.initialWindowWidth + 'px';
    this.wedCoupleGroom.style.right = -this.initialWindowWidth + 'px';
    this.wedCoupleGroomImg.style.right = this.initialWindowWidth + 'px';
  };

  rotate(){
      this.wedCoupleBride.style.transform = "rotate(" + (this.sinDegree) + "deg)";
      this.wedCoupleBride.style.webkitTransform = "rotate(" + (this.sinDegree) + "deg)"; //web-kit
      this.wedCoupleBrideImg.style.transform = "rotate(" + -this.sinDegree + "deg)";
      this.wedCoupleBrideImg.style.webkitTransform = "rotate(" + -this.sinDegree + "deg)"; //web-kit
      this.wedCoupleGroom.style.transform = "rotate(" + (this.sinDegree) + "deg)";
      this.wedCoupleGroom.style.webkitTransform = "rotate(" + (this.sinDegree) + "deg)"; //web-kit
      this.wedCoupleGroomImg.style.transform = "rotate(" + -this.sinDegree + "deg)";
      this.wedCoupleGroomImg.style.webkitTransform = "rotate(" + -this.sinDegree + "deg)"; //web-kit
  };

  horizon() {
      //set height
      this.wedCoupleNewlyweds[0].style.height = 50 + 'vh';
      this.wedCoupleNewlyweds[1].style.height = 50 + 'vh';

      //reset position
      this.wedCoupleBride.style.left = '';
      this.wedCoupleBrideImg.style.left = '';
      this.wedCoupleGroom.style.right = '';
      this.wedCoupleGroomImg.style.right = '';


      //reset rotation
      this.wedCoupleBride.style.transform = '';
      this.wedCoupleBride.style.webkitTransform = ''; //web-kit
      this.wedCoupleBrideImg.style.transform = '';
      this.wedCoupleBrideImg.style.webkitTransform = ''; //web-kit
      this.wedCoupleGroom.style.transform = '';
      this.wedCoupleGroom.style.webkitTransform = ''; //web-kit
      this.wedCoupleGroomImg.style.transform = '';
      this.wedCoupleGroomImg.style.webkitTransform = ''; //web-kit
  };
  //initialize styling on Start
  styleInit() {
    if(this.initialWindowWidth >= this.breakMax) {
      this.setHeight();
      this.setPosition();
      this.rotate();
    } else if (this.initialWindowWidth < this.breakMax) {
      this.horizon();
    };
  }

  //make it responsive
  responsive() {
    var _this = this;
    window.addEventListener("resize", function() {
      // Detect initial Viewport
        _this.initialWindowWidth = window.innerWidth;
        _this.initialWindowHeight = window.innerHeight;
        _this.diagonal = Math.sqrt(Math.pow(_this.initialWindowWidth, 2) + Math.pow(_this.initialWindowHeight, 2));

    // Calculate sinus
        _this.sineX = _this.initialWindowWidth / _this.diagonal

    // Calculate angle for rotation
        _this.sinDegree = Math.asin(_this.sineX) * (180 / Math.PI);
        _this.styleInit();

    })
  }


}


export default TriCouple;
