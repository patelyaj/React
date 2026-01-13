import React, { useState } from 'react';

function Form() {

    const [formdata,setformdata] = useState({}); 
    return (
        <div>
            <form action="" onSubmit={}>
                <label htmlFor="title">title</label>
                <input type="text" id='title' className='title' />
                <br />
                <label htmlFor="price"> price</label>
                <input type="number" id='price' className='price'/>
                <br />
                <label htmlFor="description">description</label>
                <input type="text" id='description'/>
                <br />
                <label htmlFor="category">category</label>
                <input type="text" id='category' className='category'/>
                <br />
                <label htmlFor="image">image-url</label>
                <input type="text" id='image' className='image-url'/>
                <br />
                <label htmlFor="rating-rate">rating-rate</label>
                <input type="text" id='rating-rate' className='rating-rate' />
                <br />
                <label htmlFor="rating-count">rating-count</label>
                <input type="number" id='rating-count' className='rating-count'/>
                
            </form>
        </div>
    );
}

export default Form;