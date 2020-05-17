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

MyComponent.propTypes = {
  name: PropTypes.string,
  children: PropTypes.element.isRequired,
};

export default MyComponent;
