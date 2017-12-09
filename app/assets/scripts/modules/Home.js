class Home {
  constructor() {
    this.template =/*html*/ `
    <div class="wed-heading row">
        <div class="wed-heading-wrapper col">
            <h1>Angelo & Klaudia
                <br>
                <span class="std">Save the date</span>
                <span class="wed-date">22.08.2015</span>
            </h1>
        </div>
    </div>
    `;
    this.homeMenu = document.querySelector("#home");
    this.spa = document.querySelector(".wed-spa");
    this.homeSection = document.querySelector(".wed-home");
  };



  loadHome() {
    this.homeSection.classList.add('wed-front');
    this.loadTemplate();
  };


  loadTemplate() {
    this.spa.innerHTML = this.template;
  }

}
export default Home;
