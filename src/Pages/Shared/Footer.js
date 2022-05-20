import React from 'react';
import footer from '../../assets/images/footer.png';
const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer className="p-10 mx-auto w-full" style={{
            background: `url(${footer})`,
            backgroundSize: 'cover'
        }}>
            <div className='footer text-accent'>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Emergency Checkup</a>
                    <a className="link link-hover">Monthly Checkup</a>
                    <a className="link link-hover">Weekly Checkup</a>
                    <a className="link link-hover">Deep Checkup</a>
                </div>
                <div>
                    <span className="footer-title">Oral Health</span>
                    <a className="link link-hover">Fluoride Treatment</a>
                    <a className="link link-hover">Cavity Filling</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Teath Whitening</a>
                </div>
                <div>
                    <span className="footer-title">Our Address</span>
                    <a className="link link-hover">New York - 101010 Hudson</a>
                </div>
            </div>
            <div className='text-center mt-16 text-gray-400'>
                <p>Copyright © {year} - All right reserved by E doctors portal</p>
            </div>

        </footer>
    );
};

export default Footer;