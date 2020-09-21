import React from 'react'
import './css/Article.css'
import Button from '../components/button'
const Article = () => {

  const link = 'Artigo aberto'
  const displayAlert = (link) =>{
     alert(link)
  }
  console.log('a')
  return (
    <div>
      <div className='divContainer'>
        <div className='firstDiv'>
       <h1>Artigos</h1>
        <div className='artigos'>
          <h4>O Dano Moral na Relação de Consumo e o Princípio da Dignidade da Pessoa Humana</h4>
          <p>Resumo: Aliquam gravida tortor eget ante hendrerit, ut dignissim leo euismod. Nam hendrerit aliquam tempus. Donec elementum, diam quis dignissim egestas, justo ipsum varius magna, in imperdiet leo odio a lectus. Quisque dignissim scelerisque lorem, sagittis suscipit urna consequat sed. Maecenas aliquam a nisl consectetur consequat. Nullam molestie mauris eu purus dictum, quis malesuada urna elementum. Duis luctus ipsum vel libero sodales fermentum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer nec augue purus. Fusce id risus nec dolor consectetur mollis sit amet laoreet mauris. Donec id molestie purus, a dictum dui. Quisque id ultrices elit, at tincidunt lorem. Vivamus dictum, massa ac consectetur tincidunt, velit leo vestibulum dui, vitae ullamcorper urna lectus in urna. Nunc suscipit cursus magna non convallis. Nunc a neque quis diam tincidunt efficitur et quis arcu. Morbi ligula tellus, iaculis nec egestas quis, eleifend malesuada ex.</p>
          <div style={{display:'flex',justifyContent:'flex-end'}}>
          <Button text='Leia o artigo completo' funcao={displayAlert} values={link}/>
          </div>
          
        </div>
        <div className='artigos'>
          <h4>O Dano Moral na Relação de Consumo e o Princípio da Dignidade da Pessoa Humana</h4>
          <p>Resumo: Aliquam gravida tortor eget ante hendrerit, ut dignissim leo euismod. Nam hendrerit aliquam tempus. Donec elementum, diam quis dignissim egestas, justo ipsum varius magna, in imperdiet leo odio a lectus. Quisque dignissim scelerisque lorem, sagittis suscipit urna consequat sed. Maecenas aliquam a nisl consectetur consequat. Nullam molestie mauris eu purus dictum, quis malesuada urna elementum. Duis luctus ipsum vel libero sodales fermentum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer nec augue purus. Fusce id risus nec dolor consectetur mollis sit amet laoreet mauris. Donec id molestie purus, a dictum dui. Quisque id ultrices elit, at tincidunt lorem. Vivamus dictum, massa ac consectetur tincidunt, velit leo vestibulum dui, vitae ullamcorper urna lectus in urna. Nunc suscipit cursus magna non convallis. Nunc a neque quis diam tincidunt efficitur et quis arcu. Morbi ligula tellus, iaculis nec egestas quis, eleifend malesuada ex.</p>
          <div style={{display:'flex',justifyContent:'flex-end'}}>
          <Button text='Leia o artigo completo' funcao={displayAlert} values={link}/>
          </div>
          
        </div>
  
        </div>
      </div>
    </div>
  )
}


export default Article;