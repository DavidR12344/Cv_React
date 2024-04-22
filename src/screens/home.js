import React from 'react';
import '../styles/styles.css';
import profile from '../images/profil.jpg'

function Home() {
    return (
        <div>
            <header>
                <div className="container header-container">
                    <div className="flex-left">
                        <div className="banner">
                            <img src={profile} alt="Profile Image" className="profile-image" />
                            <div className="header-text">
                                <h1 className="first-name">David</h1>
                                <h2 className="last-name">Ruland</h2>
                                <h3 className="role">App developer</h3>
                            </div>
                        </div>
                        <div className="about">
                            <h1>About me</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div className="contact-info">
                            <ul>
                                <li><i className="fa fa-phone"></i> (46)XXXX</li>
                                <li><i className="fa fa-envelope"></i> david.ruland@example.com</li>
                                <li><i className="fa fa-home"></i> Malmö</li>
                                <li><i className="fa fa-linkedin"></i> linkedin.com/in/David Ruland</li>
                            </ul>
                        </div>
                        <div className="language">
                            <h2>Language</h2>
                            <ul>
                                <li>Swedish</li>
                                <li>English</li>
                            </ul>
                        </div>
                        <div className="expertise">
                            <h2>Expertise</h2>
                            <ul>
                                <li>Java</li>
                                <li>C# with XNA Game studio</li>
                                <li>C++</li>
                                <li>Unreal Engine 4 with blueprint and c++ code</li>
                                <li>Swift</li>
                                <li>SwiftUI</li>
                                <li>Kotlin</li>
                                <li>Flutter/Dart</li>
                                <li>HTML</li>
                                <li>C# Asp Net Core</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex-right">
                        <section className="experience">
                            <h2>Experience</h2>
                            <div className="job">
                                <h3>Omegapoint - Malmö</h3>
                                <p>App developer | 2020-02-18 – 2023-11-11</p>
                                <ul>
                                    <li>Developed and implemented an iOS app in Swift 4 with storyboards to Ikano Bank .
                                    </li>
                                    <li>Developed and implemented an iOS and Android app in Flutter for Lund University. </li>
                                    <li>Developed and implemented an iOS and Android app in Flutter for Lund University.</li>
                                </ul>
                                <h3>Grabbarna Grus Beach Club</h3>
                                <p>App developer/Assignment | 2019-05-01 – 2019-06-01</p>
                                <h3>ÅF</h3>
                                <p>App developer/internship | 2019-04-04 – 2019-06 </p>
                                <h3>CGI</h3>
                                <p>IT-support| 2018-2019 </p>
                            </div>
                        </section>
                        <section className="education">
                            <h2>Education</h2>
                            <h3>Bachelor's degree in Computer Science at Malmö University</h3>
                            <h3>Advanced programming for Iphone and Android at Malmö Yrkeshögskola. </h3>
                        </section>
                        <section className="skills-summary">
                            <h2>Skills Summary</h2>
                            <div className="skill">
                                <p>App developer <progress max="100" value="100"></progress> 100%</p>
                                <p>IT-support<progress max="100" value="80"></progress> 80%</p>
                            </div>
                        </section>
                    </div>
                </div>
            </header>
            <footer>
                <div className="container">
                    <p>&copy; 2024 David Ruland</p>
                </div>
            </footer>
        </div>
    );
}

export default Home;

