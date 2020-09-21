import React, {useState, useEffect, useRef} from "react";
import { NavLink,Link } from "react-router-dom";
import './css/header.css'
import useWindowDimensions from '../hooks/useWindowDimensions'
import Banner from '../img/banner3.jpeg'

import MenuIcon from '@material-ui/icons/Menu';
function Header(Routes) {
  Routes = Routes.Routes

  const { width } = useWindowDimensions();
  const isMobile = width < 931;
  const [open, setOpen] = useState(false)

  const abrirMenu = () =>{
    setOpen(!open)
  }

  const refContainer = useRef()
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
        if (refContainer.current && !refContainer.current.contains(event.target)) {
            setOpen(false)
        }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
    };
}, []);

  return (
    <>
 
    <div style={{backgroundColor:'#0b1f51',display:'flex',justifyContent:'center'}}>
    <div style={{backgroundColor:'#0b1f51', width:552}}>
      <Link to='/'><img  style={{height:'auto',width:'100%'}} src={Banner} alt='banner'/></Link>
    </div>
      </div> 
     
    <nav className='header' >
      
    {isMobile?
    <div style={{width:'100%',alignContent:'center'}} ref={refContainer}>
         <MenuIcon style={{color:'#ebc765', paddingTop:10,fontSize:40}} onClick={() => abrirMenu() }/>
        { open&&(<div className="dropdown">
          {Routes.map((rotas,i)=>{
            return(
              <NavLink key={i} exact activeClassName="active"
              data-hover={rotas.navbarName}
             activeStyle={{      
              color: '#ffffff',
              backgroundColor:'#ebc765'
             }}
             className='linkText'
             to={rotas.path}>
               {rotas.navbarName}
             </NavLink>
            )
          })}
        </div>)}
    </div>
 
    :Routes.map((rotas,key)=>{
      return( 
       
      <div className='snip1135'>
    
 <NavLink exact activeClassName="active"
        data-hover={rotas.navbarName}
       activeStyle={{      
        color: '#ffffff',
       }}
       className='linkText'
       to={rotas.path}>
         {rotas.navbarName}
       </NavLink>
      </div>
      
     )
    })}
    </nav>
    </>
  );
}
export default Header;