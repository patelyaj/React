import React, { useEffect, useState } from "react";
import "./Form.css";
import axios from "axios";
function Form({ setshowform, addProduct, editData, updateProduct, setEditData}) {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
    rating: { rate: 0, count: 0 },
  });

  useEffect(()=>{
    if (editData) {
      setFormData(editData);
    }
    
  },[editData]);

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
    setshowform(false);
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
              onClick={() => {setshowform(false); if (editData) {setEditData(null)}}}
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

export default Form;
