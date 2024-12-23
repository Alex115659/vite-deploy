import './screensStyles/index.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer.jsx';
import coworkingImage from './images/coworking.jpg';

function Home() {
    const [popularProducts, setPopularProducts] = useState([]);
    let navigate = useNavigate();

    function handleNavigate(){
        navigate('/products')
    }

    useEffect(() => {
        fetch('http://localhost:5000/popularProducts')
            .then(res => res.json())
            .then(data => setPopularProducts(data))
            .catch(error => console.error('Error fetching popular products:', error));
    }, []);

    const handleNavigateToAbout = () => {
        navigate('/about');
    };

    return (
        <div>
<div className="container1">
    <img src={coworkingImage} alt="Coworking space" className="image" />
    <div className="content">
        <h1>Yan</h1>
        <p className="description">
            We are offering to solve any IT problems.<br />
            We will help your product reach its full <br />
            potential by providing innovative web solutions, <br />
            enhancing user experiences, and ensuring smooth functionality.<br />
            From website creation to IT support, our team is <br />
            dedicated to delivering tailored services that meet<br />
            your unique needs. Whether you are launching a new product<br />
            or optimizing an existing one, we are here to make your<br />
            digital goals a reality.
        </p>
    </div>
</div>



            <div className="container2">
                <button className="navigateAbout" onClick={handleNavigateToAbout}>
                    Learn more
                </button>
            </div>
            <div className="container3">
                <h2 className='container-description'>POPULAR PRODUCTS</h2>
                <div className='container-products'>
                    {popularProducts.length > 0 ? (
                        popularProducts.map(product => (
                        <div key={product.id} className="popular-product">
                            <h4>{product.name} </h4>
                            <p onClick={handleNavigate}>click for more</p>
                         </div>
                     ))
                ) : (
                <div style={{color: 'white'}}>Loading the popular products...</div>
                )}

                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;

