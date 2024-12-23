import './screensStyles/about.css';
import choosingLogo from './choosing.png';
import applyLogo from './apply.png';
import payLogo from './pay.png';
import getLogo from './get.png';
import Footer from "../components/Footer.jsx";

function About(){
    let products = ['Landing page creating', 'Server creating', 'UX/UI creating', 'Microsystems creating'];

    return (
        <>
            <div className='container'>
                <h2>Who are we?</h2>
                <div className='subContainer1'>
                    <p>We offer tailored IT solutions for your business. Additionally, we provide a wide range of
                        products available for purchase.</p>
                    <ol>
                        {products.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ol>

                    <p>
                        Beyond these offerings, we are here to assist you.<br />
                        You can count on us for support.
                    </p>

            </div>
                <div className='subContainer2'>
                    <h2>How {"it's"} work</h2>
                    <div id='sbc'>
                        <div>
                            <div>
                                <img src={choosingLogo}/>
                            </div>
                            <p>You should<br /> choose any<br /> product</p>
                        </div>

                        <div>
                        <div>

                            <img src={applyLogo}/>

                        </div>
                            <p>You should <br /> apply for<br /> project</p>
                            </div>

                        <div>
                        <div>

                            <img src={payLogo}/>

                        </div>
                            <p>You should <br /> pay for <br /> project </p>
                            </div>
                        <div>
                        <div>
                            <img src={getLogo}/>
                        </div>
                            <p>You will get<br /> your project</p>
                            </div>
                    </div>
                </div>
            </div>
            <div className='line'></div>
            <div className='container3'>
                <p>My name is Aleks Poghosyan, and I am the creator of YAN.<br />
                Why did I create this page? Before I learned programming,<br />
                 I had a dream of starting a business. However, I didn’t know how to create my own landing page, <br />
                 and at that time, there weren’t any products like YAN to help with that.<br />
                After gaining programming skills, I decided to create a project that would help <br />
                 others build a part of their own business with ease. Today,<br />
                  over 20 talented programmers are working on my project, making this vision a reality.
                </p>
            </div>
            <div className='line'></div>
            <Footer/>
        </>
    )
}

export default About;