import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import {Link} from 'react-scroll';
import btnImg from '../../assets/hireme.png';
function Intro() {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Sathwik</span><br />Software Engineer</span>
            <p className="introPara">I'm a aspiring web developer, data scientist and security analyst.</p>
            <Link><button className="btn"><img src={btnImg} className='btnImg' alt="" />Hire Me</button></Link>
        </div>
        <img src={bg} alt="Profile" className="bg" />
    </section>
  );
}

export default Intro;
