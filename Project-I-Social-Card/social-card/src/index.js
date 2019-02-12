import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

const icon = document.querySelector('i')
const commentBox = document.querySelector('.comment-box')

icon.addEventListener('click', () => classToggle()); 

const classToggle = () => {
commentBox.classList.toggle('show')
}