import { FetchWrapper } from '../helpers/fetch-wrappers';

export const dataService = {
    getData,
  
  };

const baseUrl = `https://admin.naxa.com.np/api/projects?format=json`;

function getData(data) {
    return FetchWrapper.getData(baseUrl, data);
  }