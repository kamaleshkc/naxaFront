import { FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,} from "./dataTypes";
  
 export function fetchDataRequest() {
    return {
      type: FETCH_DATA_REQUEST,
      
    };
  }

  export function fetchDataSucess(data) {
    
    return {      
        type:FETCH_DATA_SUCCESS,
        payload:data
    
      };
  }

  export function fetchDataError(error) {
    return {
      type: FETCH_DATA_ERROR,
      payload: { error }
    };
  }