import React, { useEffect, useState, } from 'react';
import logo from "../assets/img/logo.jpeg";
import { Link } from "react-router-dom";

const DevisComponent = () => {

    const [nameFile, setNameFile] = useState("");

    const getFilename = () => {
        const fileInput = document.getElementById('attached_file');
        if(fileInput){
            fileInput.addEventListener("change", (event) => {
                setNameFile(event.target.files[0].name);
            })
        }
    }

    useEffect(() => {
        document.title = "Devis";
        getFilename();
    }, []);

    return (
        <div className="w-full md:flex">
            <div
                className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
                <div>
                    <Link to="/">
                        <img className="w-full h-full object-contain " src={logo} alt="logo" />
                    </Link>
                    {/* <h1 className="text-white font-bold text-4xl font-sans">Devis</h1>
                    <p className="text-white mt-1">The most popular peer to peer lending at SEA</p>
                    <button type="submit" className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2">Read More</button> */}
                </div>
                <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
            </div>
            <div className="flex md:w-1/2 justify-center  items-center bg-white">
                <form>
                    <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
                    <p className="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="username">FirstName</label>
                            <input id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">LastName</label>
                            <input id="emailAddress" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="password">Email</label>
                            <input id="password" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="passwordConfirmation">Telephone</label>
                            <input id="tel" type="tel" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>
                    </div>
                    <div>
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Enterprise</label>
                        <input id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                    </div>
                    <div className='flex flex-col py-2'>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Par quel service etes vous interessé? </label>
                        </div>
                        <div className='flex flex-row gap-4'>
                            <div className='flex items-center justify-center gap-x-2'>
                                <input id="web" type="checkbox" className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600" />
                                <label htmlFor="web">Web</label>
                            </div>
                            <div className='flex items-center justify-center gap-x-2'>
                                <input id="web" type="checkbox" className="block w-full px-4 py-2  text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600" />
                                <label htmlFor="web">Design</label>
                            </div>
                            <div className='flex items-center justify-center gap-x-2'>
                                <input id="web" type="checkbox" className="block w-full px-4 py-2  text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600" />
                                <label htmlFor="web">Consult</label>
                            </div>
                            <div className='flex items-center justify-center gap-x-2'>
                                <input id="web" type="checkbox" className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600" />
                                <label htmlFor="web">App</label>
                            </div>
                        </div>
                    </div>

                    <div className='py-2'>
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Votre Demande</label>
                        <textarea placeholder="Message" rows={6} className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'></textarea>
                    </div>
                    <div>
                        <span className="text-gray-700 dark:text-gray-200">Pièce jointe</span>
                        {nameFile === ""
                        ?
                        ( <label className="flex flex-col items-center px-4 py-6 mt-4 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue">
                            <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                            </svg>
                            <span className="mt-2 text-base leading-normal">Select a file</span>
                            <input type='file' accept='.doc,.docx,.pdf,.pptx' name="attached_file" id="attached_file" className="hidden" />
                        </label>)
                        :(
                        <label className="flex flex-col items-center px-4 py-6 mt-4 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue">
                            <span className="mt-2 text-base leading-normal">{nameFile}</span>
                        </label>)}
                        <span>Formats de fichiers acceptés : PDF, DOC, DOCX, PPTX</span> <br />
                        <span>Taille limite de fichier: 5Mo</span>
                    </div>
                    <div className='my-4'>
                        <input type="checkbox" className="enabled:hover:border-gray-400 disabled:opacity-75 py-1" /> I accept the
                        <a href='#policy' className='text-indigo-600'> privacy policy</a>
                    </div>
                    <div className="flex justify-end mt-6">
                        <button className='py-3 px-6 sm:w-[100%] my-4'>Send</button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default DevisComponent