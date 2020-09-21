import React from "react";
import { FaInstagram } from "react-icons/fa";
import {FaFacebookSquare} from 'react-icons/fa'
import './css/footer.css'
const Footer = () => {

  return (
    <footer className="footer">
      
      <div className="footer__social">
        <a target="_blank" rel='noreferrer noopener' href="https://www.instagram.com/brasil7932/">
          <FaInstagram size="30" color="#fff" />
        </a>
        <a target="_blank" rel='noreferrer noopener' href="https://www.facebook.com/DeboraBrasilAdvocacia/">
          <FaFacebookSquare size="30" color="#fff" />
        </a>
      </div>
      <p className="footer__copyright">Feito por Guilherme Danzer</p>
    </footer>
  )
}

export default Footer