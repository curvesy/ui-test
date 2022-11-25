import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Quote from "../components/Quote";
import Features from "../components/Feature";
import Feactures from "../components/Feactures";
export default function Home() {
	return (
		<div className="">
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="">
				<Navbar />
				<div className=" h-screen mt-12">
					<Hero />
				</div>
				<div className=" bg-[#F3EDE7] mt-24">
					<Feactures />
				</div>

				<div className=" bg-[#F3EDE7] mt-24">
					<Quote />
				</div>
				<div className="2xl:container 2xl:mx-auto 2xl:px-0 py-3 px-10">
					<Features />
				</div>
			</div>
		</div>
	);
}