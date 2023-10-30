import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio5 from '../../assets/portfolio-5.png';
import Portfolio6 from '../../assets/portfolio-6.png';
const Works = () => {
  return (
    <section id='works'>
        <h2 className="worksTitle">My Projects</h2>
        <span className="worksDesc">Projects that I completed during my college days</span>
        <div className="worksImgs">
            <img src={Portfolio1} alt="Image1" className="worksImg" />
            <img src={Portfolio2} alt="Image2" className="worksImg" />
            <img src={Portfolio3} alt="Image3" className="worksImg" />
            <img src={Portfolio4} alt="Image4" className="worksImg" />
            <img src={Portfolio5} alt="Image5" className="worksImg" />
            <img src={Portfolio6} alt="Image6" className="worksImg" />
        </div>
        <button className="workBtn">See More</button>
    </section>
  );
}

export default Works;
