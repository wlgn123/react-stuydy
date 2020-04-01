import React from 'react'; // 리액트를 불러오는 구문

function App() {
  // 삼항연산자 테스트
  const name = "리액트";
  
  // undefined 테스트
  const test1 = undefined;

  function _undefinedTest() {
    // 값이 undefined일 수 있는 경우에는 || 연산자로 undefined처리가 가능하다.
    return test1 || "값이 undefined 입니다";
  }
  
  return (
    <>
      <div>
        {name === '리액트' ? (
          <h1> 리액트 입니다만</h1>
        ) : (
          <h2>리액트가 아닙니다만.</h2>
        )}
        
        {name === '리액트' && <h1>리액트입니다만2</h1>}

        {name === '리액트' ? <h1>리액트입니다만3</h1> : null}
      </div>

      <div>
        {_undefinedTest()}
      </div>
    </>
  );
}

export default App;
