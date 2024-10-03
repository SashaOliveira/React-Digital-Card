import React from 'react';
import facebookIcon from '../assets/facebook.png';
import githubIcon from '../assets/github-sign.png';
import linkedinIcon from '../assets/linkedin.png';
import twitterIcon from '../assets/twitter-sign.png';

export default function Footer() {
  return (
    <div className="footer">
      <button>
        <img src={facebookIcon} alt="Facebook Icon" className="footer-icon" />
      </button>
      <button>
        <img src={githubIcon} alt="Github Icon" className="footer-icon" />
      </button>
      <button>
        <img src={linkedinIcon} alt="Linkedin Icon" className="footer-icon" />
      </button>
      <button>
        <img src={twitterIcon} alt="Twitter Icon" className="footer-icon" />
      </button>
    </div>
  );
}
