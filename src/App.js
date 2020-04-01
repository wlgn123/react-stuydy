import React from 'react'; // 리액트를 불러오는 구문

// 삼항 연산자 테스트 1
function Example1() {
  const name = "리액트";
  
  return (
    <div>
      {name === '리액트' ? (
          <h1> 리액트 입니다만</h1>
        ) : (
          <h2>리액트가 아닙니다만.</h2>
        )}
    </div>
  )
}

// 삼항 연산자 테스트 2
function Example2() {
  const name = "리액트";

  return (
    <div>
      {name === '리액트' && <h1>리액트입니다만2</h1>}
    </div>
  )
}

// 삼항 연산자 테스트 3
function Example3() {
  const name = "리액트";

  return (
    <div>
      {name === '리액트' ? <h1>리액트입니다만3</h1> : null}
    </div>
  )
}

// undefined 테스트
function Example4() {
  const test1 = undefined;
  
  return (
    test1 || "값이 undefined 입니다"
  )
}

// undefined 테스트2
function Example5() {
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

function App() {

  return (
    <>
      <Example1/>
      <Example2/>
      <Example3/>
      <Example4/>
      <Example5/>
    </>
  );
}

export default App;
