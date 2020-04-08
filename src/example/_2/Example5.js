import React from 'react'
// undefined 테스트2
export default function Example5() {
  /*
  JSX 안에서는 undefined는 에러는 발생하지않지만
  아무것도 render 되지 않음.
  */

  const name = undefined;

  return (
    <div>
      {name | '리액트'}
    </div>
  )
}