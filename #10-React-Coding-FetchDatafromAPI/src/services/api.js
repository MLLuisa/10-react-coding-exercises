const callToApi = () => {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
      .then((response) => response.json())
      .then((response) => {
        return response;
      });
  };
  
  export default callToApi;