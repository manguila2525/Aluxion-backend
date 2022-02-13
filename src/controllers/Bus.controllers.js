const axios = require('axios');

let config = {
  headers: {
    accessToken: 'f10a2e82-91ed-4517-ac68-2d251f22eb08' 
  }
}

// const Login = async() => {
//   const {data} = await axios.get("https://openapi.emtmadrid.es/v2/mobilitylabs/user/login/", config)
//   const Token = data.data[0].accessToken
//   console.log("Login")
//   return config.headers.accessToken = Token
// }

const postStop = async(req, res) => {
  try {
    const {id} = req.body
    const configParams =   {    
      "cultureInfo":"ES",      
      "Text_StopRequired_YN":"Y",       
      "Text_EstimationsRequired_YN":"Y"
}

    // console.log(id);
    const {data} = await axios.post(`https://openapi.emtmadrid.es/v2/transport/busemtmad/stops/${id}/arrives`,configParams, config)
    // console.log(data.data[0])
    res.json({
      Arrive: data.data[0].Arrive,
      StopInfo: data.data[0].StopInfo
    })
  } catch (e) {
    res.json(e)
  }
}


module.exports = {postStop}

// {

//   "cultureInfo":"??" Could be EN for english or ES for spanish
  
//   "Text_StopRequired_YN":"?", Y(es) for getting name stop or N(ot)
  
//   "Text_EstimationsRequired_YN":"?", Y(es) for data estimations to arrival Bus or N(ot)
  
//   "Text_IncidencesRequired_YN":"?", Y(es) for getting incidents related to lines in this stop s or N(ot)
  
//   "DateTime_Referenced_Incidencies_YYYYMMDD":"2021-07-16", year-month-day to reference of incidents
  
//   }