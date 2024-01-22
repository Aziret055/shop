import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Backet = () => {
  const {basket} = useSelector(s => s)
  const dispatch = useDispatch()
function delBasket(idi) {
    dispatch({type: "REMOVE" , payload : {idi}})
}
function price(el) {
    dispatch({type: "ADD_TO_BASKET" , payload : el})
}
  return (
    <div className="container">
        {
            basket.length ? 
<div class="relative overflow-x-auto mx-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product image
                </th>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                Quantity
                </th> 
                <th scope="col" class="px-6 py-3">
                Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Description
                </th>
                <th scope="col" class="px-6 py-3">
                    Delete
                </th>
            </tr>
        </thead>
        <tbody>
        {
          basket.map((el , idx) => (
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <img className="w-[130px]" src={el.image} alt="img" />
                </th>
                <td class="px-6 py-4">
                    {el.title}
                </td> 
                <div className="flex flex-col justify-center mt-9 items-center">  

                <button onClick={() => price(el)} type="button" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">+</button>

                <td class="px-6 py-4">
                    {el.quantity}
                </td>
                <button  type="button" class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">-</button>

                </div>


                <td class="px-6 py-4">
                    {el.price * el.quantity}$
                </td>
                <td class="px-6 py-4">
                    {el.description}
                </td>
                <td class="px-6 py-4">
                <button onClick={() => delBasket(idx)} class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Remove</button>
                </td>
        </tr>
         ))
        }
        </tbody>
    </table>
</div> : 
<div class="flex items-center p-4 mb-4 my-24 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800" role="alert">
  <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
  </svg>
  <span class="sr-only">Info</span>
  <div>
    <span class="font-medium">Info alert!</span> Change a few things up and try submitting again.
  </div>
</div>
}
    </div>
  );
};

export default Backet;
