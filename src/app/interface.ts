export interface ICountry {
    id: number,
    name: string
}

export interface IState {
    id: number,
    name: string,
    countryId: number
}

export interface ICity {
    id: number,
    name: string,
    stateId: number
}

export interface ISelectVal {
    text: string;
    type: string;
}