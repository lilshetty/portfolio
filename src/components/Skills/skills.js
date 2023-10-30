import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

function Skills() {
  return (
    <section id="skills">
        <span className="skillTitle">What I Do</span>
        <span className="skillDesc">I am Skilled and aspiring Web Developer, Data Scientist and Security Analyst</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Web Developer</h2>
                    <p>Demo Text</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Data Scientist</h2>
                    <p>Demo Text</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Security Analyst</h2>
                    <p>Demo Text</p>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Skills;
