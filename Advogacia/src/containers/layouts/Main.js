import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import {Routes} from  '../../router'
export default({children})=>{
  return(
    <div style={{height:'100vh'}}>
      <Header Routes={Routes}/>
      {children}
      <Footer/>
    </div>
  )
}