import React from "react";

function Navbar() {
	return (
		<div className="container">
			<nav className=" bg-transparent border-gray-200 px-2 sm:px-4 py-2.5 rounded mx-auto">
				<div className="container flex flex-wrap items-center justify-between mx-auto">
					<a href="https://flowbite.com/" className="flex items-center">
						<img src="/logo.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
						<span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
							Muzikie
						</span>
					</a>

					<div
						className="hidden bg-[#F3EDE7] w-full md:block md:w-auto"
						id="navbar-default"
					>
						<ul
							className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 
							md:mt-0 md:text-sm 
						    md:font-medium md:border-0"
						>
							<li>
								<a
									href="#"
									className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0"
									aria-current="page"
								>
									Home
								</a>
							</li>
							<li>
								<a
									href="#"
									className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 
									md:hover:bg-transparent md:border-0  md:p-0  "
								>
									About
								</a>
							</li>
							<li>
								<a
									href="#"
									className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent 
									md:border-0  md:p-0"
								>
									Services
								</a>
							</li>
							<li>
								<a
									href="#"
									className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 
									md:hover:bg-transparent md:border-0  md:p-0  md:dark:hover:bg-transparent"
								>
									Pricing
								</a>
							</li>
							<li>
								<a
									href="#"
									className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0
								     md:p-0 dark:text-gray-400 md:dark:hover:bg-transparent"
								>
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
