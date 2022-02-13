const axios = require('axios');
let config = {
  headers: {
    accessToken: '4e4e88fd-4418-454b-97ef-3e013ac78b4e' 
  }
}
const postStop = async(req, res) => {
  try {
    const {id} = req.body
    const configParams =   {    
    "cultureInfo":"ES",      
    "Text_StopRequired_YN":"Y",       
    "Text_EstimationsRequired_YN":"Y"
  }
    const {data} = await axios.post(`https://openapi.emtmadrid.es/v2/transport/busemtmad/stops/${id}/arrives`,configParams, config)
    res.json({
      Arrive: data.data[0].Arrive,
      StopInfo: data.data[0].StopInfo
    })
  } catch (e) {
    res.json(e)
  }
}
module.exports = {postStop}
