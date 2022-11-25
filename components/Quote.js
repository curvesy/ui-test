import React from "react";

function Quote() {
	return (
		<div>
			<div className="container">
				<div className=" text-center mb-12">
					<h3 className="font-semibold text-[33px] text-[#633991] leading-10">
						I need a dollar
					</h3>
				</div>
			</div>
			<div className="container flex">
				<div className=" basis-[400px]">
					<img className=" w-full h-auto align-middle" src="aloe-blacc.jpg" alt="" />
				</div>
				<main className=" flex-1 box-border px-12">
					<article className="flex flex-col flex-nowrap h-full items-center justify-center">
						<h3 className=" font-light text-[26px] text-[#633991] font-serif leading-10">
							<b className=" text-6xl wight font-bold">“</b>
							The system just ain’t working
						</h3>
						<h3 className="font-light text-[26px] text-[#633991] font-serif leading-10">
							There must be some mistake
						</h3>
						<h3 className="font-light text-[26px] text-[#633991] font-serif leading-10">
							When the only way I could get paid
						</h3>
						<h3 className="font-light text-[26px] text-[#633991] font-serif leading-10">
							Is to change my name to Drake
							<b className=" text-6xl wight font-bold">„</b>
						</h3>
						<h4
							className=" pt-5 text-xl font-sans border-t border-t-[#757575] font-normal mt-5
						     leading-9 text-center text-[#757575]"
						>
							The most streamed single of 2013 on Spotify
							<br />
							only earned its authors $4,000 each.
						</h4>
					</article>
				</main>
			</div>
		</div>
	);
}

export default Quote;
