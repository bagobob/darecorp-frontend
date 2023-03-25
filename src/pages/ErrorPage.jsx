import React, { useEffect } from 'react';
import { useRouteError } from 'react-router-dom';
import bgError from "../assets/img/bg_error.png";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
    useEffect(() => {
        document.title = "404-Page Not Found";
      }, []);
  return (
    <div class="flex h-screen justify-center items-center">
  <div class="w-1/2">
    <img className="mx-auto"  src={bgError} alt="error" />
    <div className='flex flex-col items-center justify-center w-[100%] p-4'>
            <h1 className="py-3 text-5xl md:text-7xl font-bold">Oops!</h1>
            <p className='text-gray-700 font-bold'>Sorry, an unexpected error has occurred.</p>
            <p className='text-gray-400'>
                <i>{error.statusText || error.message}</i>
            </p>
    </div>
  </div>
</div>
    
    
  )
}

export default ErrorPage