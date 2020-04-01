import React from 'react'; // 리액트를 불러오는 구문

function App() {
  const name = "리액트";

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
    </>
  );
}

export default App;
