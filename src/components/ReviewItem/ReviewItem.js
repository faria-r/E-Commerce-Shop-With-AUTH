import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTrash } from '@fortawesome/free-solid-svg-icons';
import './review.css'

const ReviewItem = ({product,handleRemoveItem}) => {
    const {name, price, id,quantity,img,shipping} = product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='review-details-container'>
                <div className='review-details'>
                    <p>{name}</p>
                    <p>Price:${price}</p>
                    <p>Quantity:{quantity}</p>
                    <p>Shipping:${shipping}</p>
                </div>
                <div className="delete-container">
                    <button onClick={()=>handleRemoveItem(id)} className='btn-delete'>
                    <FontAwesomeIcon className='delet-icon' icon={faTrash}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;