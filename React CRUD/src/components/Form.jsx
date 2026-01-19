import React, { useState } from "react";
import "./Form.css";
import axios from "axios";
function Form({ setshowform ,addProduct}) {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
    rating: { rate: 0, count: 0 },
  });

  // Unified Change Handler
  const handleChange = (e) => {
    console.log(e);
    const { name, value } = e.target;
    
    setFormData((prevdata)=>{
        return {...prevdata,[name] : value};
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
        await axios.post("https://fakestoreapi.com/products",formData)
        .then()
        .catch();
    
        addProduct(formData);
    
        setshowform(false);
    } catch (error) {
        console.log("errr");  
    }
  };

  return (
    <div className="form-overlay">
      <div className="form-card">
        <h2>Add New Product</h2>
        <form onSubmit={handleSubmit} className="form-content">
          <div className="input-group">
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="enter title"
            //   required
            />
          </div>

          <div className="input-row">
            <div className="input-group">
              <label>Price ($)</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="enter price"
                // required
              />
            </div>
            <div className="input-group">
              <label>Category</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                placeholder="enter category"
              />
            </div>
          </div>

          <div className="input-group">
            <label>Description</label>
            <textarea
              name="description"
              rows="3"
              value={formData.description}
              onChange={handleChange}
              placeholder="description.."
            ></textarea>
          </div>

          <div className="input-group">
            <label>Image URL</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="url.."
            />
          </div>

          <div className="form-actions">
            <button
              type="button"
              className="cancel-btn"
              onClick={() => setshowform(false)}
            >
              Cancel
            </button>
            <button type="submit" className="submit-btn">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
