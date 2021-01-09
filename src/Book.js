import React from 'react'

const Book = ({img, title, author}) => {

const clickHandler = (e) => {
  console.log(e.target);
  console.log(e);
  alert('hello');
};
const complexEcample = (author) => {
  console.log(author);
};

  return (
    <article className='book' onMouseOver={ () => {console.log(title)}}>
      <img src={img} alt=""/>
      <h1 onClick={() => {console.log(title);}}>{title}</h1>
      <h4 onClick={()=>complexEcample(author)}>{author}</h4>
      <button type='button' onClick={clickHandler}>Click me</button>
    </article>
  );
};

export default Book
