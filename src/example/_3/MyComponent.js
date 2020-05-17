import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = (props) => {
  const { name } = props;

  return (
    <div>
      안녕하세요 저의 이름은
      {` ${name} `}
      입니다만.?
    </div>
  );
};

// name props는 반드시 String타입만 받도록 지정
MyComponent.propTypes = {
  name: PropTypes.string,
};

// name props가 부모 컴포넌트에서 넘겨지지 않았을 경우, 기본값 지정
MyComponent.defaultProps = {
  name: '기본 이름',
};

export default MyComponent;
