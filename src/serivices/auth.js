const { default: axios } = require('axios');

const options = {
    method: 'POST',
    body: {
        "email": "danylo@gmail.com",
        "password": "gatito123"
    },
    url: `https://ecomerce-master.herokuapp.com/api/v1/login`,
    headers: {},
  };

export function response(email, password){


    const body = {
        email,
        password
    }

    console.log(body)

    return axios.post(options.url, body)

}
export function responseRegiter(first_name,
    last_name,
    birth_date,
    gender,
    email, 
    password ){


    const body = {
        first_name,
        last_name,
        birth_date,
        gender,
        email, 
        password 
    }

    const url= `https://ecomerce-master.herokuapp.com/api/v1/signup`

    console.log(body)

    return axios.post(url, body)

}