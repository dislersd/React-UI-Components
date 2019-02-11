import React from 'react';
import FooterComment from './FooterComment';
import './Footer.css'
import FooterReShare from './FooterReShare';
import FooterLike from './FooterLike';
import FooterEmail from './FooterEmail';

const FooterContainer = () => {
  return (
    <div className='footer-container'>
      <div className="comment"><FooterComment /></div>
      <div className="reShare"><FooterReShare /></div>
      <div className="like"><FooterLike /></div>
      <div className='email'><FooterEmail /></div>
    </div>
  );
}

export default FooterContainer;

