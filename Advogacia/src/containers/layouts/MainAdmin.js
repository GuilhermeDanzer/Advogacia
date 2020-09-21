import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import {RoutesAdmin} from  '../../router'
export default({children})=>{
  return(
    <div>
      <Header Routes={RoutesAdmin}/>
      {children}
      <Footer/>
    </div>
  )
}