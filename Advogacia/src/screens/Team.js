import React, { useState, useContext } from 'react'
import {Context as TeamContext} from '../reducers/TeamContext'
import './css/Team.css'
import TimeComponent from '../components/TimeComponent'

const Team = () => {
  const {getTeam,state} = useContext(TeamContext)
  return (<TimeComponent array={state.team}funcaoGet={getTeam} values=''setValues='' admin={false}/>)
}

export default Team