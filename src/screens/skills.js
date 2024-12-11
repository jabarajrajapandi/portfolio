import React, { useState } from "react";
import '../css/skills.css';

export default function Skills() {
  const [bigScreen, setBigScreen] = useState(true);

  return (
    <>
        <div className="container-fluid" id="container">
          <div className="topRow">
            <button className="mailButton">My Skills</button>
          </div>

          <div>
            <div className="treeLineFlate"></div>
          </div>

          <div>
            <div className="treeLineHeight"></div>
          </div>

          <div className="skills_tree">
                <div className="branch_group">
                  <div>HTML</div>
                  <div>Css</div>
                  <div>Javascript</div>
                  <div>React js</div>
                </div>
            <div className="branch_group">
                  <div>Node js</div>
                  <div>Express</div>
                  <div>REST API</div>
                  <div>JWT</div>
                  <div>MySql</div>
                  <div>DB Modeling</div>
                </div>
            <div className="branch_group">
                  <div>GitHub</div>
                  <div>Mac</div>
                  <div>Windows</div>
                  <div>UX/UI DESIGN</div>
                </div>
              </div>
            </div>

    </>
  );
}

