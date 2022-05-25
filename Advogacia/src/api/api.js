import axios from 'axios';
const instance =  axios.create({

 baseURL:ENV[API_URL]

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
