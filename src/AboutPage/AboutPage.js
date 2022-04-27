import React from 'react';
import './image.png';
import './AboutPage.css';

function AboutPage() {
    return (
        <div>
          <div className="about-section">
            <h1>About Us Page</h1>
            <p>Some text about who we are and what we do.</p>
            <p>Resize the browser window to see that this page is responsive by the way.</p>
          </div>
          <h2 style={{textAlign: 'center'}}>Our Team</h2>
          <div className="row">
            <div className="column">
              <div className="card">
                <img src="#" alt="Arem" style={{width: '50%'}} />
                <div className="container">
                  <h2>Martins Arem</h2>
                  <p className="title">CEO &amp; Founder</p>
                  <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                  <p>jane@example.com</p>
                  <p><button className="button">Contact</button></p>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <img src="#" alt="King" style={{width: '50%'}} />
                <div className="container">
                  <h2>King David</h2>
                  <p className="title">Art Director</p>
                  <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                  <p>mike@example.com</p>
                  <p><button className="button">Contact</button></p>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <img src="#" alt="Martins" style={{width: '50%'}} />
                <div className="container">
                  <h2>Martins Arem</h2>
                  <p className="title">Designer</p>
                  <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                  <p>mart@example.com</p>
                  <p><button className="button">Contact</button></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  

export default AboutPage