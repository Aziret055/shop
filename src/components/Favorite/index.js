import React from "react";
import { useSelector } from "react-redux";

const Favorite = () => {
  const {favorite} = useSelector(s => s)
  console.log(favorite);
  return (
    <div id="container favotite my-11">
      {
        favorite.length ? 
    <div className="container my-11 flex items-center justify-center gap-20 flex-wrap">
 {favorite.map((el) => (
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg w-[3860px]" src={el.image} alt="img" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{el.title}</h5>
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{el.price}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{el.description}</p>
    </div>
</div>

 ))}




    </div> : 
    <div className="container">

    <div class=" flex items-center p-4 mb-4 my-24 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800" role="alert">
    <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
    </svg>
    <span class="sr-only">Info</span>
    <div>
      <span class="font-medium">Info alert!</span> Change a few things up and try submitting again.
    </div>
  </div>
    </div>
    }
    </div>

  );
};

export default Favorite;
