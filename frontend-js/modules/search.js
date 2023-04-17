export default class Search {
  // 1. Select DOM elements, and keep track of any useful data
  constructor() {
    this.injectHTML();
    this.headerSearchIcon = document.querySelector('.header-search-icon');
    this.overlay = document.querySelector('.search-overlay');
    this.closeIcon = document.querySelector('.close-live-search');
    this.events();
  }

  // 2. Events
  events() {
    this.closeIcon.addEventListener('click', () => this.closeOverlay());
    this.headerSearchIcon.addEventListener('click', (e) => {
      e.preventDefault();
      this.openOverlay();
    });
  }

  // 3. Methods
  openOverlay() {
    this.overlay.classList.add('search-overlay--visible');
  }

  closeOverlay() {
    this.overlay.classList.remove('search-overlay--visible');
  }

  injectHTML() {
    document.body.insertAdjacentHTML(
      'beforeend',
      `<div class="search-overlay">
        <div class="search-overlay-top shadow-sm">
          <div class="container container--narrow">
            <label for="live-search-field" class="search-overlay-icon"><i class="fas fa-search"></i></label>
            <input type="text" id="live-search-field" class="live-search-field" placeholder="What are you interested in?">
            <span class="close-live-search"><i class="fas fa-times-circle"></i></span>
          </div>
        </div>

        <div class="search-overlay-bottom">
          <div class="container container--narrow py-3">
            <div class="circle-loader"></div>
            <div class="live-search-results live-search-results--visible">
              <div class="list-group shadow-sm">
                <div class="list-group-item active"><strong>Search Results</strong> (4 items found)</div>

                <a href="#" class="list-group-item list-group-item-action">
                  <img class="avatar-tiny" src="https://gravatar.com/avatar/0584cbf60406b354386363d7c1a56638?s=128"> <strong>Example Post #1</strong>
                  <span class="text-muted small">by gravuser on 5/14/2023</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                  <img class="avatar-tiny" src="https://gravatar.com/avatar/2862dd487fef7a58c6a44afeac426a93?s=128"> <strong>Example Post #2</strong>
                  <span class="text-muted small">by elvan on 6/12/2023</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                  <img class="avatar-tiny" src="https://gravatar.com/avatar/0584cbf60406b354386363d7c1a56638?s=128"> <strong>Example Post #3</strong>
                  <span class="text-muted small">by gravuser on 7/14/2023</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                  <img class="avatar-tiny" src="https://gravatar.com/avatar/2862dd487fef7a58c6a44afeac426a93?s=128"> <strong>Example Post #4</strong>
                  <span class="text-muted small">by elvan on 8/12/2023</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>`
    );
  }
}
