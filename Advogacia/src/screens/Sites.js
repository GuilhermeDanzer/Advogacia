import React from 'react'
import Button from '../components/button'
const Sites = () => {

  const linksUteis = [
    {
      title: 'Tribunal de Justiça do Rio Grande do Sul',
      link: 'https://www.tjrs.jus.br/novo/'
    },
    {
      title: 'Justiça Federal do Rio Grande do Sul',
      link: 'https://www2.jfrs.jus.br/'
    },
    {
      title: 'Tribunal Regional do Trabalho da 4ª Região',
      link: 'https://www.trt4.jus.br/portais/trt4'
    },
    {
      title: 'Site do Instituto nacional de Seguro Social – INSS',
      link: 'https://meu.inss.gov.br/central/#/login?redirectUrl=/'
    },
    {
      title: 'Superior Tribunal de Justiça',
      link: 'https://ww2.stj.jus.br/processo/pesquisa/?aplicacao=processos.ea'
    }
    ,
    {
      title: 'Supremo Tribunal Federal',
      link: 'http://www.stf.jus.br/portal/processo/pesquisarProcesso.asp'
    }
  ]
  return (
    <div>
      <div className='divContainer'>
        <div className='firstDiv'>
          <h1>Sites</h1>
          <div>
          {linksUteis.map((element, i) => {
            return (
              <div>
                <h5 style={{display:'inline-block'}}>{element.title}</h5>   <Button text='Clique aqui'funcao={()=> window.open(element.link, "_blank")} />
              </div>

            )
          })}
          </div>
         
        </div>
      </div>
    </div>


  )
}

export default Sites
