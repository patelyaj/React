import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Form from "./components/Form";
function App() {
  const [data, setdata] = useState([]);
  const [showform,setshowform] = useState(false);
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
  },[]);

  const showformtoggle = ()=>{
    setshowform(true);
  }
  const addProduct = ()=>{

  }
  return (
    <>
    <div>
        <button className="addbtn" onClick={showformtoggle}>Add new</button>
        {
            if(showform){
                <Form></Form>
            }
        }
      {
        <div className="outer-container">
            {data.map((item)=>{
                console.log("index = " , item.id);
                console.log("item = " , item);
                return (
                    <Card data={item} key={item.id}  />

                    // <div>
                        // {/* <p>{i.description}</p>
                        // <p>{i.category}</p> */}
                    // </div>
                )
                // console.log(i.description);
            })
            }
        </div>
      }
      </div>
    </>
  );
}

export default App;