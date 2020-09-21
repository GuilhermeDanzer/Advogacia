import React, {useState} from 'react'
import { makeStyles } from "@material-ui/core/styles";
import GavelIcon from '@material-ui/icons/Gavel';
import './css/Expertise.css'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import PeopleIcon from '@material-ui/icons/People';
import WorkIcon from '@material-ui/icons/Work';


const Expertise = () => {

  const areas = [
    {
      title:'Direito Cível',
      texto:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat, metus id gravida imperdiet, felis ligula vestibulum erat, venenatis scelerisque mi nisi non tortor. Cras tempor velit a feugiat ultricies. Etiam sed sem cursus, fermentum nunc id, semper sapien. Sed sit amet varius purus, non maximus ex. Fusce sapien ex, vehicula a metus congue, venenatis auctor ante. Integer consequat metus in accumsan luctus. In auctor imperdiet tortor, nec tempor risus malesuada a. Sed efficitur quam eget ultrices volutpat. Etiam sed ligula id arcu ornare sagittis et id neque. Nullam porta, ligula nec lobortis mattis, dui libero pulvinar ante, eget scelerisque tellus justo eu sem. Quisque accumsan rutrum justo, nec aliquet dui consectetur quis.'
    } , 
    {
      title:'Direito Consumidor',
      texto:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat, metus id gravida imperdiet, felis ligula vestibulum erat, venenatis scelerisque mi nisi non tortor. Cras tempor velit a feugiat ultricies. Etiam sed sem cursus, fermentum nunc id, semper sapien. Sed sit amet varius purus, non maximus ex. Fusce sapien ex, vehicula a metus congue, venenatis auctor ante. Integer consequat metus in accumsan luctus. In auctor imperdiet tortor, nec tempor risus malesuada a. Sed efficitur quam eget ultrices volutpat. Etiam sed ligula id arcu ornare sagittis et id neque. Nullam porta, ligula nec lobortis mattis, dui libero pulvinar ante, eget scelerisque tellus justo eu sem. Quisque accumsan rutrum justo, nec aliquet dui consectetur quis.'
    }
    , 
    {
      title:'Direito Trabalhista',
      texto:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat, metus id gravida imperdiet, felis ligula vestibulum erat, venenatis scelerisque mi nisi non tortor. Cras tempor velit a feugiat ultricies. Etiam sed sem cursus, fermentum nunc id, semper sapien. Sed sit amet varius purus, non maximus ex. Fusce sapien ex, vehicula a metus congue, venenatis auctor ante. Integer consequat metus in accumsan luctus. In auctor imperdiet tortor, nec tempor risus malesuada a. Sed efficitur quam eget ultrices volutpat. Etiam sed ligula id arcu ornare sagittis et id neque. Nullam porta, ligula nec lobortis mattis, dui libero pulvinar ante, eget scelerisque tellus justo eu sem. Quisque accumsan rutrum justo, nec aliquet dui consectetur quis.'
    }
    , 
    {
      title:'Direito Empresarial',
      texto:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat, metus id gravida imperdiet, felis ligula vestibulum erat, venenatis scelerisque mi nisi non tortor. Cras tempor velit a feugiat ultricies. Etiam sed sem cursus, fermentum nunc id, semper sapien. Sed sit amet varius purus, non maximus ex. Fusce sapien ex, vehicula a metus congue, venenatis auctor ante. Integer consequat metus in accumsan luctus. In auctor imperdiet tortor, nec tempor risus malesuada a. Sed efficitur quam eget ultrices volutpat. Etiam sed ligula id arcu ornare sagittis et id neque. Nullam porta, ligula nec lobortis mattis, dui libero pulvinar ante, eget scelerisque tellus justo eu sem. Quisque accumsan rutrum justo, nec aliquet dui consectetur quis.'
    }
    , 
    {
      title:'Direito Previdenciário',
      texto:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat, metus id gravida imperdiet, felis ligula vestibulum erat, venenatis scelerisque mi nisi non tortor. Cras tempor velit a feugiat ultricies. Etiam sed sem cursus, fermentum nunc id, semper sapien. Sed sit amet varius purus, non maximus ex. Fusce sapien ex, vehicula a metus congue, venenatis auctor ante. Integer consequat metus in accumsan luctus. In auctor imperdiet tortor, nec tempor risus malesuada a. Sed efficitur quam eget ultrices volutpat. Etiam sed ligula id arcu ornare sagittis et id neque. Nullam porta, ligula nec lobortis mattis, dui libero pulvinar ante, eget scelerisque tellus justo eu sem. Quisque accumsan rutrum justo, nec aliquet dui consectetur quis.'
    }
  ]
  
  
  

  const [state,setState] = useState(false)


  const changeText = (type) =>{
    areas.filter((tipo,index)=>{
      if (index===type){
        return setState(tipo)
      }
    })

  }
  return (
    <div>
      <div className='divContainer'>
        <div className='firstDiv'>
            <div style={{display:'flex', justifyContent:'center', flexWrap:'wrap',alignItems:'center'}}>
    
            
            <GavelIcon classes={{focused:'iconF'}} className='icon' onClick={()=>changeText(0)} style={{fontSize:40}}/>
            
            <ShoppingCartIcon className='icon' onClick={()=>changeText(1)} style={{fontSize:50}}/>
            <FavoriteIcon className='icon' onClick={()=>changeText(2)} style={{fontSize:40}}/>
            <PeopleIcon className='icon' onClick={()=>changeText(3)} style={{fontSize:50}}/>
            <AccountBalanceIcon className='icon' onClick={()=>changeText(4)} style={{fontSize:40}}/>
            <WorkIcon className='icon' onClick={()=>changeText(0)} style={{fontSize:50}}/>
            </div>
            <h2>{state.title}</h2>
            {state?null:<h2 style={{textAlign:'center'}}>Clique nos ícones para ver nossas areas de atuação</h2>}
           <div style={{textAlign:'justify'}}>
              <p>{state.texto}</p>
           </div>
            
          
        </div>
      </div>
    </div>
  )
}

export default Expertise
