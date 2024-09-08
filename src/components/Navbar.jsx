import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => { const handleIconClick = (url) => {
  window.open(url, "_blank");
}
  return (
    <nav className="mb-20 flex items-centre justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <h4 className="mx-2 w-10 font-semibold">RS</h4>
      </div>
      <div className="m-8 flex items-center justify-centre gap-4 text-2xl">

   
        <FaLinkedin size={30} 
        style={{ margin: '10px', cursor: 'pointer' }} 
        onClick={() => handleIconClick('https://www.linkedin.com/in/raj-sawant-15a989214')}/>
        <FaGithub size={30} 
        style={{ margin: '10px', cursor: 'pointer' }} 
        onClick={() => handleIconClick('https://github.com/rajsawant27')}/>
        <FaInstagram size={30} 
        style={{ margin: '10px', cursor: 'pointer' }} 
        onClick={() => handleIconClick('https://www.instagram.com/raj_sawant_03/')}/>
        <FaSquareXTwitter />
      </div>
    </nav>
  );
}

export default Navbar;