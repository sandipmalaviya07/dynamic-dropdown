import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  getCountries() {
    return [
      { id: 1, name: "India" },
      { id: 2, name: "Australia" },
      { id: 3, name: "USA" },
    ]
  }

  getStates() {
    return [
      { id: 1, countryId: 1, name: 'Gujarat' },
      { id: 2, countryId: 1, name: 'Maharashtra' },
      { id: 4, countryId: 1, name: 'Rajasthan' },


      { id: 5, countryId: 2, name: 'South Australia' },
      { id: 6, countryId: 2, name: 'Victoria' },

      { id: 8, countryId: 3, name: 'Texas' },
      { id: 9, countryId: 3, name: 'California' },
      { id: 10, countryId: 3, name: 'Florida' },

    ];
  }

  getCity() {
    return [
      { id: 1, stateId: 1, name: 'Ahmedabad' },
      { id: 2, stateId: 1, name: 'Vadodara' },

      { id: 3, stateId: 2, name: 'Mumbai' },
      { id: 4, stateId: 2, name: 'Pune' },

      { id: 3, stateId: 4, name: 'Jaipur' },
      { id: 4, stateId: 4, name: 'Udaipur' },


      { id: 3, stateId: 5, name: 'Dunstan' },
      { id: 4, stateId: 5, name: 'Mitchell' },

      { id: 3, stateId: 6, name: 'Altona' },
      { id: 4, stateId: 6, name: 'Euroa' },


      { id: 5, stateId: 9, name: 'Los Angeles' },
      { id: 6, stateId: 9, name: 'San Diego' },

      { id: 7, stateId: 8, name: 'Dallas' },
      { id: 8, stateId: 8, name: 'Austin' },

      { id: 3, stateId: 10, name: 'Riviera Beach' },
      { id: 4, stateId: 10, name: 'South Bay' },

    ];
  }


}
