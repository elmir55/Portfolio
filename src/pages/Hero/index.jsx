import React from "react";
import { Link } from 'react-router-dom'

export  function Hero() {
		return (
				<div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center text-center px-6">
						<h1 className="text-4xl sm:text-5xl font-bold">
								Hi, I'm <span className="text-blue-500">Frontend Developer</span> 👨‍💻
						</h1>
						<p className="text-lg text-gray-400 mt-3">
								I create modern, responsive, and interactive web applications.
						</p> 
						<Link to="/home"
									className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg text-lg font-medium hover:bg-blue-600 transition-all" >  
										View My Work
						</Link>
				</div>
		);

}
