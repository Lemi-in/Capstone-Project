import React from 'react';
import email from '../images/email.png';
import linkedin from '../images/linkedin.png';
import Instagram from '../images/instagram.png';
import telegarm from '../images/telegram.png';

const Footer = () => {
  return (
    <footer className="flex items-center justify-center bg-gray-800 text-white py-4">
      <ul className="flex items-center space-x-4">
        <li>
          <img src={email} alt="Email" className="w-6 h-6" />
          <a href="#" className="text-gray-300 hover:text-white ml-1">Email</a>
        </li>
        <li>
          <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
          <a href="#" className="text-gray-300 hover:text-white ml-1">LinkedIn</a>
        </li>
        <li>
          <img src={Instagram} alt="Instagram" className="w-6 h-6" />
          <a href="#" className="text-gray-300 hover:text-white ml-1">Instagram</a>
        </li>
        <li>
          <img src={telegarm} alt="Telegram" className="w-6 h-6" />
          <a href="#" className="text-gray-300 hover:text-white ml-1">Telegram</a>
        </li>
      </ul>
      <h6 className="text-gray-300 ml-4">&copy; Group one 2024</h6>
    </footer>
  );
};

export default Footer;