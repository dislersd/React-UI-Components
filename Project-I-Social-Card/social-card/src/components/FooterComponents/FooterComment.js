import React from 'react';

const FooterComment = () => {
  return (
    <div>
      <i className='far fa-comment'></i>
      <div>
        <form action="">
          <input className='comment-box' type="text" placeholder="Type Comment..." />
        </form>
      </div>
    </div>
  );
}

export default FooterComment;
