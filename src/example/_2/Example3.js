import React from 'react'; // 리액트를 불러오는 구문

// 삼항 연산자 테스트 3
export default function Example3() {
  const name = '리액트';

  return (
    <div>
      {name === '리액트' ? <h1>리액트입니다만3</h1> : null}
    </div>
  );
}
