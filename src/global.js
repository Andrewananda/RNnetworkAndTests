import Axios from 'axios';
export default function handleApi(apiEndPoint, successCallback, errorCallback) {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'multipart/form-data',
  };

  Axios({
    method: 'GET',
    url: apiEndPoint,
  })
    .then(function (response) {
      successCallback(response.data);
    })
    .catch(function (error) {
      errorCallback(error.message);
    });
}
