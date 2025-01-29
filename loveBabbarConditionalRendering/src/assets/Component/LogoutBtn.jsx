import React from 'react';

const LogoutBtn = (props) => {
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          props.updateBtn(false); // Correctly call the function with `false`
        }}
      >
        LOG OUT
      </button>
    </div>
  );
};

export default LogoutBtn;
