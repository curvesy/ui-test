import React from "react";

function Hero() {
	return (
		<section className="h-full mb-8 xl:mb-24 container flex flex-row lg:mt-3rem">
			<div className="flex flex-col lg:flex-row  w-[53rem]">
				<div
					className="flex flex-col
                    items-center lg:items-start text-center  
                    lg:text-left  justify-center flex-1 2xl:pl-40 xl:pl-24 lg:pl-20"
				>
					<h1
						className=" text-4xl lg:text-[58px] font-semibold
                        leading-none mb-6"
					>
						Decenteralize
					</h1>
					<div className="flex space-x-1">
						<p className=" text-lg mb-8 h-12 w-44 p-3 bg-red-200 rounded-2xl text-center">
							Fair
						</p>
						<p className="mb-8 h-12 w-44 p-3 bg-yellow-100 rounded-2xl text-center">
							transparent
						</p>
						<p className="bg-green-400 w-44 text-center rounded-2xl h-12 p-3">
							simple
						</p>
					</div>
					<h1
						className=" text-4xl lg:text-[58px] font-semibold
                        leading-none mb-6 sm:self-center ml-[1rem] lg:mr-16 lg:ml-28"
					>
						Music Straming
					</h1>
				</div>
				<img className="w-full object-contain" src="/yoyo.png" alt="" />

				{/* Images */}
			</div>
		</section>
	);
}

export default Hero;
