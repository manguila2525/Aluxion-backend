const axios = require('axios');
let config = {
  headers: {
    email: "ingsanchezmr@gmail.com",
    password: "Anguila2525",
    accessToken: '' 
  }
}


const Login = async() => {
  const {data} = await axios.get("https://openapi.emtmadrid.es/v2/mobilitylabs/user/login/", config)
  const Token = data.data[0].accessToken
  return config.headers.accessToken = Token
}

const getLogin = async(req,res) => {
 const data = await Login()
 console.log(data)
  res.send("T Token")
}

module.exports = {getLogin,}