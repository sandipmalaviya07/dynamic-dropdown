import { Component, OnInit } from '@angular/core';
import { ICountry, IState, ICity, ISelectVal } from '../interface';
import { CommonService } from '../common.service'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  //Get all List
  
  countryList: ICountry[] = [];
  stateListAll: IState[] = [];
  cityListAll: ICity[] = [];

  stateList: IState[] = [];
  cityList: ICity[] = [];


  selectedValues: ISelectVal[] = [];
  selectedVal: ISelectVal = <ISelectVal>{}; // set all selected values

  // for show / hide 
  isCountrySelect: boolean = true; 
  isStateSelect: boolean = false;
  isCitySelect: boolean = false;

  //Types
  typeCity: string = "City";
  typeState: string = "State";
  typeCountry: string = "Country";

  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.GetAllData();
  }

  GetAllData() {
    this.countryList = this.commonService.getCountries();
    this.stateListAll = this.commonService.getStates();
    this.cityListAll = this.commonService.getCity();
  }

  onSelect(val, selectType) {

    this.selectedVal = <ISelectVal>{};

    this.selectedVal.text = val.name;
    if (selectType == this.typeCountry) {
      this.stateList = this.stateListAll.filter(f => f.countryId == val.id); // can make DB call
      this.isCountrySelect = false;
      this.isStateSelect = true;
      this.selectedVal.type = this.typeCountry;
    }
    else if (selectType == this.typeState) {
      this.cityList = this.cityListAll.filter(f => f.stateId == val.id); // can make DB call
      this.isStateSelect = false;
      this.isCitySelect = true;
      this.selectedVal.type = this.typeState;
    }
    else if (selectType == this.typeCity) {
      this.isCitySelect = false;
      this.selectedVal.type = this.typeCity;
    }
    this.selectedValues.push(this.selectedVal);
  }

  deleteSelects(val, selectType) {

    if (selectType == this.typeCountry) {
      this.isStateSelect = false;
      this.isCitySelect = false;
      this.isCountrySelect = true;
    }
    else if (selectType == this.typeState) {
      this.isCitySelect = false;
      this.isStateSelect = true;

    }
    else if (selectType == this.typeCity) {
      this.isCitySelect = true;
    }

    // remove data from selected list
    let idx = this.selectedValues.findIndex(f => f.type == selectType);
    this.selectedValues.map((cm, i) => {
      if (i >= idx) {
        this.selectedValues.splice(i);
      }
    });
    
  }


}
