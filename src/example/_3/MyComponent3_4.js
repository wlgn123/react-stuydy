import React from 'react';
import PropTypes from 'prop-types';

/**
 * 리액트 컴포넌트를 사용할 때 컴포넌트 태그 사이의
 * 내용을 보여주는 props로 children 을 사용한다.
 */
const MyComponent = ({ name, children }) => (
  <div>
    안녕하세요, 제 이름은 {name} 입니다. <br />
    children 값은 {children}
    입니다.
  </div>
);

MyComponent.defaultProps = {
  name: '기본 이름',
};

/**
 * PropTypes 종류
 * array : 배열
 * arrayOf ( 다른 PropType) : 특정 PropType으로 이루어진 배열을 의미.
 * ex) arrayOf(PropTypes.number) 는 숫자로 이루어진 배열을 의미
 * bool: true OR false
 * func: 함수
 * number: 숫자
 * object: 객체
 * string: 문자열
 * symbol: ES6의 Symbol
 * node: 렌더링할 수 있는 모든 것
 * instanceOf(클래스): 특정 클래스의 인스턴스
 * oneOf(['dog', 'cat']): 주어진 배열 요소 중 값 하나
 * oneOfType([React.PropTypes.string, PropTypes.number]) : 주어진 배열안의 종류 중 하나
 * objectOf(React.PropTypes.number) : 객체의 모든 키 값이 인자로 주어진 PropType인 객체
 * shape({ name: PropTypes.string, num: PropTypes.number}) : 주어진 스키마를 가진 객체
 * any: 아무종류
 */
MyComponent.propTypes = {
  name: PropTypes.string,
  children: PropTypes.element.isRequired,
};

export default MyComponent;
