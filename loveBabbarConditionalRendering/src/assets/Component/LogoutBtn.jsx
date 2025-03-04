import React from 'react';
import './LogoutBtn.css'

const LogoutBtn = (props) => {
  

  return (
    <>
    <div className='logout-page-css'>
      <div className='information'>
      <h1>Name:<span> Sarvajeet Singh</span></h1>
     <h2>Designation: <span>Frontend Developer</span></h2>
     <h2>Qualification: <span>B.tech(CS)</span></h2>
      <button
        type="button"
       
        onClick={() => {
          props.updateBtn(false); // Correctly call the function with `false`
        }}
      >
        LOG OUT
      </button>
      </div>
    </div></>
  );
};

export default LogoutBtn;
