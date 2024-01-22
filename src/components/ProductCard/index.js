import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SlBasketLoaded } from "react-icons/sl";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { FaShoppingBasket } from "react-icons/fa";

const ProductCard = ({el}) => {
    const nav = useNavigate()
    const [btn , setBtn] = useState(false)
    const dispatch = useDispatch()
    const {basket} = useSelector(s => s)
    function addBasket(el) {
        dispatch({type:"ADD_TO_BASKET" , payload : el})
    }
    function addFavorite(el) {
        dispatch({type : "ADD_TO_FAVORITE" , payload : el})
        
    }
    const [heart , setHeart] = useState(false)
    return (
        <div>
            <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <Link to={`/details/${el.id}`}>
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={el.image} alt="img"/>
    </Link>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{el.title}</h5>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><span className='text-xl font-light'>Price : </span>{el.price}<sup className='text-sm text-normal'>$</sup></h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{el.description}</p>
        <div className="flex gap-11 my-8">  


{
    btn === false ?
            <button onClick={() => {
                setBtn(true)
                addBasket(el)
            }}  class="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700"><SlBasketLoaded />
            </button>

:
<button onClick={() => nav("/backet")} type="button" class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"><FaShoppingBasket />
</button>
        }












<button onClick={() => {
    addFavorite(el)
    setHeart(!heart)
}}style={ {
    color: heart ? "red" : 'white',
}} 
class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">< FaHeart />
</button>
</div>

        </div>
</a>
        </div>
    );
};

export default ProductCard;