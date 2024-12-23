import { Component } from "react";
import './stylesComponent/Footer.css';
import instagramLogo from './instagram_icon.png';
import TikTokLogo from './tiktok.png'

export default class Footer extends Component {
    render() {
        return (
            <>
                <div className="footer-container">
                    <div className="base-information-container">
                        <h1>&lt;Yan /&gt;</h1>
                        <h4>phone-number: +33 7 80 37 10 43</h4>
                        <h4>email: windows02@internet.ru</h4>
                        <h4>city: Paris</h4>
                    </div>
                    <div className="SocilaMedias-container">
                        <h2>Social Medias</h2>
                        <a href="https://www.instagram.com/yan.product?igsh=MWo5N3N0NTVscXJiOA%3D%3D&utm_source=qr"
                            target="_blank" rel="noopener noreferrer">
                            <img src={instagramLogo} alt="Instagram Logo" />
                        </a>
                        <br />
                        <a href='https://www.tiktok.com/@yan_products?_t=ZN-8sF9vwoUFLL&_r=1'
                        target="_blank" rel="noopener noreferrer"
                        >
                            <img src={TikTokLogo} alt="Instagram Logo" />
                        </a>
                    </div>
                </div>
            </>
        );
    }
}
