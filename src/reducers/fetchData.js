import axios from "axios";
import { fetchDataRequest, fetchDataSucess, fetchDataError } from "./dataAction";

export function fetchProducts() {
  //handel network request here.
  return dispatch => {
    dispatch(fetchDataRequest());
    axios
      .get(
        "https://admin.naxa.com.np/api/projects"
      )
      .then(response => {
        dispatch(fetchDataSucess(response.data));
      })
      .catch(error => {
        dispatch(fetchDataError(error));
      });
  };
}
