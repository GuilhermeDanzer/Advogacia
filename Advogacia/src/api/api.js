import axios from 'axios';
const instance =  axios.create({

 //baseURL:'https://sabores-danzer.rj.r.appspot.com'
  baseURL:'https://30ab7ddb3cff.ngrok.io'

});

instance.interceptors.request.use(
  async (config) =>{
    const token =  window.localStorage.getItem('token')
    if (token){
      config.headers.Authorization = `Bearer ${token}`
      
    }
    return config;
  },
  (err) =>{
   console.log(err) 
   return Promise.reject(err) 
  }
)

export default instance;