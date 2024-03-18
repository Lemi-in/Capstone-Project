 import React from 'react'; 
 import git from '../images/git.jpg';
import telegarm from '../images/telegram.png';
import  '../components/foot.css'

 const Footer = () => {
    
  return (
    <footer className=" justify-between  bg-gray-800 text-white py-4 sm:flex-row">
      <h2 className='font-semibold justify-center '>Contact us:</h2>
      <ul>
        <li>
          <img src={git} alt="github" className="w-8 h-8" />
          <a href="https://github.com/Lemi-in/Capstone-Project.git" target='_blank' className="text-gray-300 hover:bg-teal-400 ml-1" id='fo'>Github</a>
        </li>
      
        <li>
          <img src={telegarm} alt="Telegram" className="w-8 h-8" />
          <a href="https://t.me/react_team1" target='_blank' className="text-gray-300 hover:bg-teal-400 ml-1" id='fo'>Telegram</a>
        </li>
   </ul>
      <h6 >&copy; Group one 2024</h6>
    </footer>
 );
}; 

 export default Footer;
