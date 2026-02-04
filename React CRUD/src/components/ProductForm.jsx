import React, { useState } from "react";
import './ProductForm.css'
import axios from "axios";
function ProductForm({ setShowForm, addProduct, editData, updateProduct, setEditData}) {
  const [formData, setFormData] = useState( editData || {
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
    rating: { rate: 0, count: 0 },
  });


  // Change Handler
  const handleChange = (e) => {
    console.log(e);
    const { name, value } = e.target;
    
    setFormData((prevdata)=>{
        return {...prevdata,[name] : value};
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
    if (editData) {
      try {
        await axios.put(`https://fakestoreapi.com/products/${formData.id}`,formData);
        
        console.log("updated in server")

          // setFormData(response.data);
      
          updateProduct(formData);
          
      } catch (error) {
          console.log("errr",error);  
      }
    }
    else{
      try {
          await axios.post("https://fakestoreapi.com/products",formData);
          
          console.log("added in server");

          // setFormData(response.data);
      
          addProduct(formData);
      
          
      } catch (error) {
          console.log("errr",error);  
      }
    }
    setShowForm(false);
  };

  return (
    <div className="form-overlay">
      <div className="form-card">
        <h2>{editData ? "Edit Product Details" : "Add New Product"}</h2>        
        <form onSubmit={handleSubmit} className="form-content">
          <div className="input-group">
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter product name (e.g., Men's Casual Shirt)"
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
                placeholder="Enter price (e.g 0.00)"
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
                placeholder="Enter category"
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
              placeholder="Enter a detailed product description....."
            ></textarea>
          </div>

          <div className="input-group">
            <label>Image URL</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="Enter url.. (e.g https://example.com/image.jpg)"
            />
          </div>

          <div className="form-actions">
            <button
              type="button"
              className="cancel-btn"
              onClick={() => {setShowForm(false); if (editData) {setEditData(null)}}}
            >
              Cancel
            </button>
            <button type="submit" className="submit-btn">
              {editData ? "update Product" : "Add Product"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductForm;