import { useState, useEffect } from 'react';
import Footer from '../components/Footer.jsx';
import './screensStyles/products.css';
import Window from './ModuleWindow.jsx';

function Products() {
    const [products, setProducts] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        setIsModalOpen(true); 
    }

    function closeModal() {
        setIsModalOpen(false); 
    }

    useEffect(() => {
        fetch('http://127.0.0.1:5000/products')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                return response.json();
            })
            .then(data => {
                setProducts(data);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, []);

    return (
        <>
        <div className="main-container">
            {products.length > 0 ? (
                products.map((item, index) => (
                    <div key={index} className="product-card">
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        <button onClick={handleSubmit}>apply</button>
                    </div>
                ))
            ) : (
                <p>Loading products...</p>
            )}
        </div>

        {isModalOpen && <Window closeModal={closeModal} />}

        <Footer />
        </>
    );
}

export default Products;
