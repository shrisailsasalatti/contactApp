import {
  GET_COVID_REQUESTING,
  GET_COVID_SUCCESS,
  GET_COVID_FAILUIRE,
  GET_COUNTRY_REQUESTING,
  GET_COUNTRY_SUCCESS,
  GET_COUNTRY_FAILUIRE,
  GET_DATE_REQUESTING,
  GET_DATE_SUCCESS,
  GET_DATE_FAILUIRE,
} from "../actions/covidaction.tsx";

interface DataState {
  data: any[];
  data2: any[];
  date3: any[];
  loading: boolean;
  error: any | null;
}

const initialState: DataState = {
  data: [],
  data2: [],
  date3: [],
  loading: false,
  error: null,
};

const dataReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_COVID_REQUESTING:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case GET_COVID_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case GET_COVID_FAILUIRE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case GET_COUNTRY_REQUESTING:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case GET_COUNTRY_SUCCESS:
      return {
        ...state,
        loading: false,
        data2: action.payload,
      };

    case GET_COUNTRY_FAILUIRE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case GET_DATE_REQUESTING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_DATE_SUCCESS:
      return {
        ...state,
        loading: false,
        data3: action.payload,
      };

    case GET_DATE_FAILUIRE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default dataReducer;
