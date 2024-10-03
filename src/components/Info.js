import React from 'react';
import profilePic from '../assets/1689195355793.jpeg';
import mailIcon from '../assets/mail.png';

export default function Info() {
  return (
    <div className="info-page">
      <img className="profile-pic" src={profilePic} alt="sasha" />
      <h1>Sasha</h1>
      <p className="styled-p">Frontend Developer</p>
        <div className="info-button">
          <button className="email-btn">
            <img src={mailIcon} alt="Email Icon" className="icon" />Email
          </button>
        </div>
    </div>
  );
}
