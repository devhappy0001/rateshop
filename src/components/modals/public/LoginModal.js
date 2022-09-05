import React from 'react';
import ReactDOM from 'react-dom';

const ModalOverlay = (props) => {
  return (
    <div>
      <header>
        <h2>yyy</h2>
      </header>
      <div >
        <p>hhhhh</p>
      </div>
    </div>
  );
};

const LoginModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <ModalOverlay/>,
        document.getElementById('overlay-root')
      )}
    </React.Fragment>
  );
};

export default LoginModal;