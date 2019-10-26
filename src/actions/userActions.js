const CREATE_USERS = "CREATE_USERS"
const axios = require('axios');

export const createUsers = (user) => {
  let response = axios.post('http://localhost:4000/signup', {
    name: user.name,
    email:user.email,
    password:user.password
  })
  console.log(response)
  return {
    type: CREATE_USERS,
    response: response
  }
}
