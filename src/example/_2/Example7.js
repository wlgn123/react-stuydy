import React from 'react'
import './Example7.css';

export default function Example7() {
  const name = '리액트';

  // react에서는 클래스를 지정할 때
  // class 프로퍼티가 아니라 className 에 지정한다.
  return (
    <div className="react"> {name} </div>
  )
}