import React, { Component } from 'react';

class Counter extends Component {
  // 생성자 메소드
  // 클래스형 컴포넌트에서는 반드시 super(props)를 호출 해야함
  constructor(props) {
    super(props);
    // state의 초기값 세팅
    this.state = {
      number: 0,
    };
  }

  render() {
    const { number } = this.state; // state를 조회할 떄는 this.state로 조회합니다.
    return (
      <div>
        <h1>{number}</h1>
        <button
          type="button"
          // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정합니다.
          onClick={() => {
            // this.setState를 사용하여 state에 새로운 값을 넣을 수 있습니다.
            this.setState({ number: number + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}
export default Counter;
