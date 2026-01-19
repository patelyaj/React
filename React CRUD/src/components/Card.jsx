import React from 'react';
import "./Card.css"
function Card({data,deleteProduct,handleEditClick}) {
    
    return (
        <>
            {
                <div className="container">
                    <div className="category">{data.category}</div>
                    {/* <div className="img-container"> */}
                        <img src={data.image} alt="" className='img'/>
                    {/* </div> */}
                    <div className="description">{data.description}</div>
                    <div className="price">{data.price}</div>
                    <div className="title">{data.title}</div>   
                    <div className='rating-rate'>{data.rating.rate}</div>
                    <div className="rating-count">{data.rating.count}</div>
                    <button className='editbtn' onClick={()=> handleEditClick(data)} >Edit</button>
                    <button className='deletebtn' onClick={() => deleteProduct(data.id)}>delete</button>
                </div>
            }
        </>
    );
}

export default Card;