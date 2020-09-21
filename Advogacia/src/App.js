import React ,{useEffect,useContext} from 'react';
import './global.css'
import './App.css';
import { Link } from 'react-router-dom';
import './global.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import placeholder from '../src/img/placeholder2.png'
import Button from './components/button'
import {Context as AuthContext} from './reducers/AuthContext'
function App() {

  const {state,signin,signout} = useContext(AuthContext)
  useEffect(()=>{
    window.localStorage.clear()
    signout()
  },[])
  console.log(window.localStorage.getItem('token'))
  return (
    <div className="App">
      <div style={{maxWidth:'100%', margin:'auto'}}>
      {/*<Carousel style={{width:'100%',height:300}} >
  <Carousel.Item >
  <img src={banner} alt='imagem' style={{width:'100%',height:300}} />

  </Carousel.Item>
  <Carousel.Item>
  <img src={banner2} alt='imagem' style={{width:'100%',height:300}} />

  </Carousel.Item>
  </Carousel>*/}
      </div>
 <br/>
 <br/>
 <br/>
<div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', height: 'auto' }}>
       <div style={{display:'flex',width:'50%', flexWrap:'wrap'}}>
         <h4 style={{fontWeight:'bold', color:'#0b1f51'}}>Conheça o escritório Débora Brasil</h4>
      <p className='texto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor laoreet erat a sagittis. Quisque id odio vitae est fermentum vulputate sit amet quis augue. In luctus risus vel congue fermentum. Aenean ante massa.</p>
       <Link exact to='/sobre'>
        <Button text='Saiba mais' funcao={()=>true}/>
       </Link>
       
       </div>
       <div>
        <img style={{height:'auto', width:250}}src={placeholder} alt='imagem'/>
       </div>
       
</div>
<br/>
 <br/>
 <br/> <br/>
 <br/>
 <br/> <br/>
 <br/>
 <br/>

</div>
  
  );
}

export default App;
