import React from 'react'

export default function Example6() {
  const name = '리액트';
  // 리액트에서 DOM 요소에 스타일을 적용할 때는 객체 형태로 넣어야한다.
  // 또한 스타일 이름은 '-' 로 연결된 단어들을 카멜표기법으로 작성해야한다.
  // ex) background-color => backgroundColor
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '48px',
    fontweight: 'bold',
    padding: 16
  }

  return (
    <div style={style}> {name} </div>
  )
}