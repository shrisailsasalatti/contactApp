import axios from "axios";
import { Dispatch } from "redux";
const REQUESTING = "REQUESTING";
const SUCCESS = "SUCCESS";
const ERROR = "ERROR";

export const GET_COVID_REQUESTING = "GET_COVID_REQUESTING";
export const GET_COVID_SUCCESS = "GET_COVID_SUCCESS";
export const GET_COVID_FAILUIRE = "GET_COVID_FAILUIRE";

export const GET_COUNTRY_REQUESTING = "GET_COUNTRY_REQUESTING";
export const GET_COUNTRY_SUCCESS = "GET_COUNTRY_SUCCESS";
export const GET_COUNTRY_FAILUIRE = "GET_COUNTRY_FAILUIRE";

export const GET_DATE_REQUESTING = "GET_DATE_REQUESTING";
export const GET_DATE_SUCCESS = "GET_DATE_SUCCESS";
export const GET_DATE_FAILUIRE = "GET_DATE_FAILUIRE";

function getCovidRequest() {
  return {
    type: GET_COVID_REQUESTING,
  };
}

function getCovidSuccess(data: any) {
  return {
    type: GET_COVID_SUCCESS,
    status: SUCCESS,
    payload: data,
  };
}

function getCovidFailure(error: any) {
  return {
    type: GET_COVID_FAILUIRE,
    status: ERROR,
    payload: error,
  };
}

export const getCovid = (url: string) => {
  return async (disptch: Dispatch) => {
    disptch(getCovidRequest());
    try {
      const response = await axios.get(url);
      const data = response.data;
      disptch(getCovidSuccess(data));
    } catch (error) {
      disptch(getCovidFailure(error.message));
    }
  };
};

function getCountryRequest() {
  return {
    type: GET_COUNTRY_REQUESTING,
  };
}

function getCountrySuccess(data2: any) {
  return {
    type: GET_COUNTRY_SUCCESS,
    status: SUCCESS,
    payload: data2,
  };
}

function getCountryFailure(error: any) {
  return {
    type: GET_COUNTRY_FAILUIRE,
    status: ERROR,
    payload: error,
  };
}
export const getCountry = (url: string) => {
  return async (disptch: Dispatch) => {
    disptch(getCountryRequest());
    try {
      const response = await axios.get(url);
      const data = response.data;
      disptch(getCountrySuccess(data));
    } catch (error) {
      disptch(getCountryFailure(error.message));
    }
  };
};

function getDateRequest() {
  return {
    type: GET_DATE_REQUESTING,
  };
}

function getDateSuccess(data3: any) {
  return {
    type: GET_DATE_SUCCESS,
    status: SUCCESS,
    payload: data3,
  };
}

function getDateFailure(error: any) {
  return {
    type: GET_DATE_FAILUIRE,
    status: ERROR,
    payload: error,
  };
}

export const getDate = (url: string) => {
  return async (disptch: Dispatch) => {
    disptch(getDateRequest());
    try {
      const response = await axios.get(url);
      const data = response.data;
      disptch(getDateSuccess(data));
    } catch (error) {
      disptch(getDateFailure(error.message));
    }
  };
};
