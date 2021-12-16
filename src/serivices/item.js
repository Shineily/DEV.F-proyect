const { default: axios } = require('axios');

const options = {
    method: 'GET',
    url: `https://ecomerce-master.herokuapp.com/api/v1/item`,
    headers: {},
  };

export function response(){

    return axios.get(options.url)

}
export function responseItem(id){
  const url = `https://ecomerce-master.herokuapp.com/api/v1/item/${id}`

  return axios.get(url)

}

