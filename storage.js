class Storage {
  constructor() {
    this.city;
    this.state;
    this.defaultCity = 'Miami';
    this.defaultState = 'FL';
  }
  
  getLocationData() {
    /* if(localStorage.getItem('city') === null) {
      this.city = this.defaultCity;
    } else {
      this.city = localStorage.getItem('city');
    }

    if(localStorage.getItem('state') === null) {
      this.state = this.defaultState;
    } else {
      this.state = localStorage.getItem('state');
    } */

    // My refactored code
    this.city = localStorage.getItem('city') || this.defaultCity;
    this.state = localStorage.getItem('state') || this.defaultState;

    return {
      city: this.city,
      state: this.state
    }
  }

  setLocationData(city, state) {
    localStorage.setItem('city', city);
    localStorage.setItem('state', state);
  }
}