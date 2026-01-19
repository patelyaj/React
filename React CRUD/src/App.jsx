import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Form from "./components/Form";
function App() {
  const [data, setdata] = useState([]);
  const [showform, setshowform] = useState(false);

  useEffect(() => {
    try {
      const api = async () => {
        const product = await axios.get("https://fakestoreapi.com/products");
        console.log(product.data);
        setdata(product.data);
      };
      api();
    } catch (error) {
      console.log(error);
    }
  }, []);


  const showformtoggle = () => {
    setshowform(true);
  };

  const handleEditClick = (data)=> {
    prewritten(data);    
    setshowform(true);
  }
  const prewritten = () => {

  }
//   add
  const addProduct = async(data) => {

    const productWithUniqueId = { ...data, id: Date.now() };
    
    setdata((prev)=>{
        return [...prev,productWithUniqueId];
    })
  };
  
  const editProduct = (data) => {
    // axios.put(`https://fakestoreapi.com/products/${data.id}`,data);
  
  
  };





//   delete
  const deleteProduct = (id) => {
    // // 1. Tell the API to delete it
    axios.delete(`https://fakestoreapi.com/products/${id}`)
    .then(() => console.log("Deleted on server"))
    .catch(err => console.log("API delete failed", err));

    // 
    let updated = data.filter((i)=>{
        return id !== i.id
    });
    console.log("delete called",updated);
    setdata(updated);
  };

  return (
    <>
      <div>
        <button className="addbtn" onClick={showformtoggle} >
          Add new
        </button>

        <div className="form-container">
          {showform ? (
            // <div className="form-overlay">
            <Form setshowform={setshowform} addProduct={addProduct} />
          ) : // </div>
          null}
        </div>
        {
          <div className="outer-container">
            {data.map((item) => {
              console.log("index = ", item.id);
              console.log("item = ", item);
              return <Card data={item} deleteProduct={deleteProduct} editProduct={editProduct} key={item.id}/>;
            })}
          </div>
        }
      </div>
    </>
  );
}

export default App;
