import './screensStyles/module.css';
import { useState } from 'react';

function Window({ closeModal }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [textarea, setTextarea] = useState('Write down a description of the products you want');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [file, setFile] = useState(null);
  const [price, setPrice] = useState(0);

  // Fetch products
  function getProductName(event) {
    event.preventDefault();
    setLoading(true);
    setError(null);

    fetch('http://127.0.0.1:5000/products')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
        console.error('Error fetching products:', error);
      });
  }

  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault();

    const product = document.querySelector('select').value;
    const description = textarea;
    const clientName = name;
    const clientEmail = email;
    const phoneNumber = phone;
    const priceValue = price;

    if (!product || !description || !clientEmail || !clientName || !phoneNumber) {
      alert('Please complete all fields.');
      return;
    }

    const formData = new FormData();
    formData.append('name', clientName);
    formData.append('email', clientEmail);
    formData.append('telephone', phoneNumber);
    formData.append('product', product);
    formData.append('description', description);
    formData.append('file', file);
    formData.append('price', priceValue);

    fetch('http://127.0.0.1:5000/setClients', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then(() => {
        alert('We will contact you in 48 hours');
        resetForm();  
      })
      .catch(() => alert('Something went wrong.'));
  }

  function resetForm() {
    setTextarea('Write down a description of the products you want');
    setName('');
    setEmail('');
    setPhone('');
    setFile(null);
    setPrice(0);
  }

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={closeModal}>
          X
        </button>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <button className="fetch-btn" onClick={getProductName}>
            Choose Product
          </button>
          {loading && <p>Loading products...</p>}
          {error && <p className="error-message">Error: {error}</p>}
          <select>
            {products.map((product, index) => (
              <option key={index} value={product.name}>
                {product.name}
              </option>
            ))}
          </select>
          <textarea value={textarea} onChange={(e) => setTextarea(e.target.value)} />
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="phone-number"
            type="number"
            placeholder="Phone number (compulsory)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          <input
            type="number"
            placeholder="Price you can pay"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <button type="submit">Apply</button>
        </form>
      </div>
    </div>
  );
}

export default Window;
