import React from 'react';
import FooterComment from './FooterComment';
import './Footer.css'
import FooterReShare from './FooterReShare';
import FooterLike from './FooterLike';
import FooterEmail from './FooterEmail';

const FooterContainer = () => {
  return (
    <div className='footer-container'>
      <FooterComment />
      <FooterReShare />
      <FooterLike />
      <FooterEmail />
    </div>
  );
}

export default FooterContainer;