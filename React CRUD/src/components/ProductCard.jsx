    import React from 'react';
    import "./ProductCard.css";
    function ProductCard({data,deleteProduct,handleEditClick   }) {
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
                        <button className='edit-btn' onClick={()=> handleEditClick(data)} >Edit</button>
                        <button className='delete-btn' onClick={() => deleteProduct(data.id)}>Delete</button>
                    </div>
                }
            </>
        );
    }

    export default ProductCard;