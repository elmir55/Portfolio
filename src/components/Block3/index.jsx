import React from "react";
import img1 from '../../shared/assets/hur.webp';
import img2 from '../../shared/assets/mm.jpg';
import img3 from '../../shared/assets/hh.jpg';

export function Block3() {
	const cards = [
			{
					title: "Hurghada Git",
					image: img1,
			},
			{
					title: "Macarons Shop",
					image: img2,
			},
			{
					title: "Horse Clib",
					image: img3,
			},
	];

	return (
			<div id="projects-section" className="w-full bg-[#1A0B2E] py-12">
					<div className="max-w-[1200px] mx-auto px-6 mt-20">
							<h1 className="text-5xl font-extrabold tracking-wide text-[#9B4D96] text-left mb-12">
									PROJECTS
							</h1>

							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
									{cards.map((card, index) => (
											<div
													key={index}
													className="flex flex-col items-center p-4 rounded-2xl shadow-lg transition-all duration-300 transform bg-gradient-to-br from-[#2A0944] to-[#5A189A] text-white hover:scale-105 hover:translate-y-2 hover:shadow-2xl"
											>
													<img
															src={card.image}
															alt={`Card Image ${index + 1}`}
															className="w-full h-[200px] object-cover rounded-lg"
													/>
													<h3 className="text-xl font-bold mt-4 mb-2 text-center">{card.title}</h3>

													<button className="mt-auto px-10 py-2 bg-purple-700 rounded-lg transition-all duration-300">
															Live Demo
													</button>
											</div>
									))}
							</div>
					</div>
			</div>
	);
}


