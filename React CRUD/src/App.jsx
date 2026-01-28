import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Form from "./components/Form";
function App() {
  const [data, setdata] = useState([]);
  const [showform, setshowform] = useState(false);
// if the data is there in edit it means it user has clicked edit 
// if hook data is null than i tmeans user has clicked add
  const [editData,setEditData] = useState(null);
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
    setEditData(null);
    setshowform(true);
  };

  const handleEditClick = (data) => {
    setEditData(data);
    setshowform(true);
  };

  const updateProduct = (updatedata)=>{
    const newdata = data.map((prev)=>{
      if(updatedata.id == prev.id){
        prev = updatedata;
      }
      return prev;
    })
    setdata(newdata);
    setEditData(null);
  }

  //   add
  const addProduct = async (data) => {
    const productWithUniqueId = { ...data, id: Date.now() };
    setdata((prev) => {
      return [...prev, productWithUniqueId];
    });
  };

  //   delete
  const deleteProduct = (id) => {
    // // 1. Tell the API to delete it
    axios
      .delete(`https://fakestoreapi.com/products/${id}`)
      .then(() => console.log("Deleted on server"))
      .catch((err) => console.log("API delete failed", err));

    //
    let updated = data.filter((i) => {
      return id !== i.id;
    });
    console.log("delete called", updated);
    setdata(updated);
  };

  return (
    <>
      <div>
        <button className="addbtn" onClick={showformtoggle}>
          Add new
        </button>

        <div className="form-container">
          {showform ? (
            // <div className="form-overlay">
            <Form setshowform={setshowform} addProduct={addProduct} editData={editData} updateProduct={updateProduct} setEditData={setEditData}/>
          ) : // </div>
          null}
        </div>
        {
          <div className="outer-container">
            {data.map((item) => {
              console.log("index = ", item.id);
              console.log("item = ", item);
              return (
                <Card
                  data={item}
                  deleteProduct={deleteProduct}
                  handleEditClick={handleEditClick}
                  key={item.id}
                />
              );
            })}
          </div>
        }
      </div>
    </>
  );
}

export default App;
