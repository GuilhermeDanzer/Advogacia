import React,{useContext} from 'react'
import './css/Article.css'
import Button from '../components/button'

import {Context as ArticleContext} from '../reducers/ArticleContext'
import ArticleComponent from '../components/ArticleComponent'
const Article = () => {
  const {getArticle,state} = useContext(ArticleContext)

  return (

      <ArticleComponent admin={false} funcaoGet={getArticle} array={state.article} values=''setValues=''/>

  )
}


export default Article;