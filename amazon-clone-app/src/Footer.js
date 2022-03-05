import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
        <div className="footer__box">
            <div className='footer__row'>
               
                <ul>
                <h4>Get to know us</h4>
                <br />
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Press Releases</li>
                    <li>Amazon Cares</li>
                    <li>Gift a Smile</li>
                    <li>Amazon Science</li>
                </ul>

            </div>
            <div className='footer__row'>
               
                <ul>
                <h4>Connect with Us</h4>
                <br />
                <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                    </ul>
            </div>
            <div className='footer__row'>
                
                <ul>
                <h4>Make money with Us</h4>
                <br />
                <li>Sell on Amazon</li>
                    <li>Sell under Amazon Accelerator</li>
                    <li>Amazon Global Selling</li>
                    <li>Become an Affiliate</li>
                    <li>Fulfilment by Amazon</li>
                    <li>Advertise Your Products</li>
                    </ul>
            </div>
            <div className='footer__row'>
                
                <ul>
                <h4>Let Us Help You</h4>
                <br />
                <li>COVID-19 and Amazon</li>
                    <li>Your Account</li>
                    <li>Returns Centre</li>
                    <li>100% Purchase Protection</li>
                    <li>Amazon Assistant Download</li>
                    <li>Help</li>
                    </ul>
            </div>
           
        </div>
        <br />
        <br />
        <hr />
        <br />
        <img className='footer__amazonLogo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
        <ul className='footer__countries'>
            <a href='https://www.amazon.com.au/ref=footer_au'>Australia </a>
            <a href='https://www.amazon.com.br/ref=footer_br'>Brazil </a>
            <a href='https://www.amazon.ca/ref=footer_ca'>Canada </a>
            <a href='https://www.amazon.fr/ref=footer_fr'>France </a>
            <a href='https://www.amazon.de/ref=footer_de'>Germany </a>
            <a href='https://www.amazon.it/ref=footer_it'>Italy </a>
            <a href='https://www.amazon.co.jp/ref=footer_jp'>Japan </a>
            <a href='https://www.amazon.com.mx/ref=footer_mx'>Mexico </a>
            <a href='https://www.amazon.nl/ref=footer_nl'>Netherlands </a>
            <a href='https://www.amazon.pl/ref=footer_pl'>Poland </a>
            <a href='https://www.amazon.sg/ref=footer_sg'>Singapore</a>
            <a href='https://www.amazon.es/ref=footer_es'>Spain</a>
            <a href='https://www.amazon.com.tr/ref=footer_tr'>Turkey</a>
            <a href='https://www.amazon.ae/ref=footer_ae'>United Arab Emirates</a>
            <a href='https://www.amazon.co.uk/ref=footer_uk'>United Kingdom</a>
            <a href='https://www.amazon.com/ref=footer_us'>United States</a>
        </ul>
        
    </div>
    
  )
}

export default Footer