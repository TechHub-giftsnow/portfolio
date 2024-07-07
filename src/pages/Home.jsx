import React from "react";
import hero from "../assets/hero.png";
import arrow from "../assets/arrowRight.svg";
import seo from "../assets/seo.svg";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="container mx-auto mt-10 flex">
        <div className="item-center mt-20 gap-2 leading-3">
          <h1 className="text-slate-900 text-7xl font-bold font-sans    ">
            Welcome to TechHub <br /> freelance Services
          </h1>
          <p className="text-slate-700 block mt-6 text-lg">
            Discover expert web development, design, <br /> and digital
            marketing solutions tailored to elevate your online presence.
          </p>
          <button className="border-none px-8 py-3 bg-slate-600 rounded-full mt-4">
            Hire me{" "}
            <img src={arrow} alt="arrow right" className="w-4 inline " />
          </button>
        </div>

        <div className="basis-1/2">
          <img src={hero} alt="" />
        </div>
      </div>

      {/* Service Overview section */}
      <div className=" ml-16">
        <h2 className="text-3xl font-sans font-semibold text-center mt-6  ">
          Service Overview
        </h2>
        {/* Service cards */}
        <div className="grid grid-cols-3 gap-4 mt-12">
          {/* SEO services */}
          <Link to="/service" className=" ">
            <div className="p-2 container relative shadow-lg flex flex-col hover:text-white hover:bg-sky-700 hover:fill-white transition delay-150 duration-300 ease-in-out w-80 mt-4  rounded-sm">
              {/* card icon */}
              <div className=" w-10 absolute right-52">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className=""
                  viewBox="0 0 460 512"
                >
                  <path
                    d="M220.6 130.3l-67.2 28.2V43.2L98.7 233.5l54.7-24.2v130.3l67.2-209.3zm-83.2-96.7l-1.3 4.7-15.2 52.9C80.6 106.7
                    52 145.8 52 191.5c0 52.3 34.3 95.9 83.4 105.5v53.6C57.5 340.1 0 272.4 0 191.6c0-80.5 59.8-147.2 137.4-158zm311.4 447.2c-11.2
                    11.2-23.1 12.3-28.6 10.5-5.4-1.8-27.1-19.9-60.4-44.4-33.3-24.6-33.6-35.7-43-56.7-9.4-20.9-30.4-42.6-57.5-52.4l-9.7-14.7c-24.7
                    16.9-53 26.9-81.3 28.7l2.1-6.6 15.9-49.5c46.5-11.9 80.9-54 80.9-104.2 0-54.5-38.4-102.1-96-107.1V32.3C254.4 37.4 320 106.8 320 191.6c0
                    33.6-11.2 64.7-29 90.4l14.6 9.6c9.8 27.1 31.5 48 52.4 57.4s32.2 9.7 56.8 43c24.6 33.2 42.7 54.9 44.5 60.3s.7 17.3-10.5 28.5zm-9.9-17.9c0-4.4-3.6-8-8-8s-8 3.6-8
                     8 3.6 8 8 8 8-3.6 8-8z"
                  />
                </svg>
              </div>
              {/* card title */}
              <div className=" text-wrap">
                <h3 className="text-2xl font-medium text-center mb-3 -ml-6 ">
                  SEO
                </h3>
                {/* card description */}
                <p className="text-wrap p-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus corrupti debitis, consectetur distinctio assumenda
                  voluptatum amet magni beatae excepturi perferendis odio ex
                  odit ipsum atque necessitatibus inventore, eligendi aspernatur
                  ut.
                </p>
              </div>
            </div>
          </Link>
          {/*  */}
          <Link to="/service" className=" ">
            <div className="p-2 container relative shadow-lg flex flex-col hover:text-white hover:bg-sky-700 hover:fill-white transition delay-150 duration-300 ease-in-out w-80 mt-4  rounded-sm">
              {/* card icon */}
              <div className=" w-10 absolute right-52">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className=""
                  viewBox="0 0 460 512"
                >
                  <path
                    d="M220.6 130.3l-67.2 28.2V43.2L98.7 233.5l54.7-24.2v130.3l67.2-209.3zm-83.2-96.7l-1.3 4.7-15.2 52.9C80.6 106.7
                    52 145.8 52 191.5c0 52.3 34.3 95.9 83.4 105.5v53.6C57.5 340.1 0 272.4 0 191.6c0-80.5 59.8-147.2 137.4-158zm311.4 447.2c-11.2
                    11.2-23.1 12.3-28.6 10.5-5.4-1.8-27.1-19.9-60.4-44.4-33.3-24.6-33.6-35.7-43-56.7-9.4-20.9-30.4-42.6-57.5-52.4l-9.7-14.7c-24.7
                    16.9-53 26.9-81.3 28.7l2.1-6.6 15.9-49.5c46.5-11.9 80.9-54 80.9-104.2 0-54.5-38.4-102.1-96-107.1V32.3C254.4 37.4 320 106.8 320 191.6c0
                    33.6-11.2 64.7-29 90.4l14.6 9.6c9.8 27.1 31.5 48 52.4 57.4s32.2 9.7 56.8 43c24.6 33.2 42.7 54.9 44.5 60.3s.7 17.3-10.5 28.5zm-9.9-17.9c0-4.4-3.6-8-8-8s-8 3.6-8
                     8 3.6 8 8 8 8-3.6 8-8z"
                  />
                </svg>
              </div>
              {/* card title */}
              <div className=" text-wrap">
                <h3 className="text-2xl font-medium text-center mb-3 -ml-6 ">
                  SEO
                </h3>
                {/* card description */}
                <p className="text-wrap p-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus corrupti debitis, consectetur distinctio assumenda
                  voluptatum amet magni beatae excepturi perferendis odio ex
                  odit ipsum atque necessitatibus inventore, eligendi aspernatur
                  ut.
                </p>
              </div>
            </div>
          </Link>
          <Link to="/service" className=" ">
            <div className="p-2 container relative shadow-lg flex flex-col hover:text-white hover:bg-sky-700 hover:fill-white transition delay-150 duration-300 ease-in-out w-80 mt-4  rounded-sm">
              {/* card icon */}
              <div className=" w-10 absolute right-52">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className=""
                  viewBox="0 0 460 512"
                >
                  <path
                    d="M220.6 130.3l-67.2 28.2V43.2L98.7 233.5l54.7-24.2v130.3l67.2-209.3zm-83.2-96.7l-1.3 4.7-15.2 52.9C80.6 106.7
                    52 145.8 52 191.5c0 52.3 34.3 95.9 83.4 105.5v53.6C57.5 340.1 0 272.4 0 191.6c0-80.5 59.8-147.2 137.4-158zm311.4 447.2c-11.2
                    11.2-23.1 12.3-28.6 10.5-5.4-1.8-27.1-19.9-60.4-44.4-33.3-24.6-33.6-35.7-43-56.7-9.4-20.9-30.4-42.6-57.5-52.4l-9.7-14.7c-24.7
                    16.9-53 26.9-81.3 28.7l2.1-6.6 15.9-49.5c46.5-11.9 80.9-54 80.9-104.2 0-54.5-38.4-102.1-96-107.1V32.3C254.4 37.4 320 106.8 320 191.6c0
                    33.6-11.2 64.7-29 90.4l14.6 9.6c9.8 27.1 31.5 48 52.4 57.4s32.2 9.7 56.8 43c24.6 33.2 42.7 54.9 44.5 60.3s.7 17.3-10.5 28.5zm-9.9-17.9c0-4.4-3.6-8-8-8s-8 3.6-8
                     8 3.6 8 8 8 8-3.6 8-8z"
                  />
                </svg>
              </div>
              {/* card title */}
              <div className=" text-wrap">
                <h3 className="text-2xl font-medium text-center mb-3 -ml-6 ">
                  SEO
                </h3>
                {/* card description */}
                <p className="text-wrap p-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus corrupti debitis, consectetur distinctio assumenda
                  voluptatum amet magni beatae excepturi perferendis odio ex
                  odit ipsum atque necessitatibus inventore, eligendi aspernatur
                  ut.
                </p>
              </div>
            </div>
          </Link>
          <Link to="/service" className=" ">
            <div className="p-2 container relative shadow-lg flex flex-col hover:text-white hover:bg-sky-700 hover:fill-white transition delay-150 duration-300 ease-in-out w-80 mt-4  rounded-sm">
              {/* card icon */}
              <div className=" w-10 absolute right-52">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className=""
                  viewBox="0 0 460 512"
                >
                  <path
                    d="M220.6 130.3l-67.2 28.2V43.2L98.7 233.5l54.7-24.2v130.3l67.2-209.3zm-83.2-96.7l-1.3 4.7-15.2 52.9C80.6 106.7
                    52 145.8 52 191.5c0 52.3 34.3 95.9 83.4 105.5v53.6C57.5 340.1 0 272.4 0 191.6c0-80.5 59.8-147.2 137.4-158zm311.4 447.2c-11.2
                    11.2-23.1 12.3-28.6 10.5-5.4-1.8-27.1-19.9-60.4-44.4-33.3-24.6-33.6-35.7-43-56.7-9.4-20.9-30.4-42.6-57.5-52.4l-9.7-14.7c-24.7
                    16.9-53 26.9-81.3 28.7l2.1-6.6 15.9-49.5c46.5-11.9 80.9-54 80.9-104.2 0-54.5-38.4-102.1-96-107.1V32.3C254.4 37.4 320 106.8 320 191.6c0
                    33.6-11.2 64.7-29 90.4l14.6 9.6c9.8 27.1 31.5 48 52.4 57.4s32.2 9.7 56.8 43c24.6 33.2 42.7 54.9 44.5 60.3s.7 17.3-10.5 28.5zm-9.9-17.9c0-4.4-3.6-8-8-8s-8 3.6-8
                     8 3.6 8 8 8 8-3.6 8-8z"
                  />
                </svg>
              </div>
              {/* card title */}
              <div className=" text-wrap">
                <h3 className="text-2xl font-medium text-center mb-3 -ml-6 ">
                  SEO
                </h3>
                {/* card description */}
                <p className="text-wrap p-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus corrupti debitis, consectetur distinctio assumenda
                  voluptatum amet magni beatae excepturi perferendis odio ex
                  odit ipsum atque necessitatibus inventore, eligendi aspernatur
                  ut.
                </p>
              </div>
            </div>
          </Link>
          <Link to="/service" className=" ">
            <div className="p-2 container relative shadow-lg flex flex-col hover:text-white hover:bg-sky-700 hover:fill-white transition delay-150 duration-300 ease-in-out w-80 mt-4  rounded-sm">
              {/* card icon */}
              <div className=" w-10 absolute right-52">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className=""
                  viewBox="0 0 460 512"
                >
                  <path
                    d="M220.6 130.3l-67.2 28.2V43.2L98.7 233.5l54.7-24.2v130.3l67.2-209.3zm-83.2-96.7l-1.3 4.7-15.2 52.9C80.6 106.7
                    52 145.8 52 191.5c0 52.3 34.3 95.9 83.4 105.5v53.6C57.5 340.1 0 272.4 0 191.6c0-80.5 59.8-147.2 137.4-158zm311.4 447.2c-11.2
                    11.2-23.1 12.3-28.6 10.5-5.4-1.8-27.1-19.9-60.4-44.4-33.3-24.6-33.6-35.7-43-56.7-9.4-20.9-30.4-42.6-57.5-52.4l-9.7-14.7c-24.7
                    16.9-53 26.9-81.3 28.7l2.1-6.6 15.9-49.5c46.5-11.9 80.9-54 80.9-104.2 0-54.5-38.4-102.1-96-107.1V32.3C254.4 37.4 320 106.8 320 191.6c0
                    33.6-11.2 64.7-29 90.4l14.6 9.6c9.8 27.1 31.5 48 52.4 57.4s32.2 9.7 56.8 43c24.6 33.2 42.7 54.9 44.5 60.3s.7 17.3-10.5 28.5zm-9.9-17.9c0-4.4-3.6-8-8-8s-8 3.6-8
                     8 3.6 8 8 8 8-3.6 8-8z"
                  />
                </svg>
              </div>
              {/* card title */}
              <div className=" text-wrap">
                <h3 className="text-2xl font-medium text-center mb-3 -ml-6 ">
                  SEO
                </h3>
                {/* card description */}
                <p className="text-wrap p-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus corrupti debitis, consectetur distinctio assumenda
                  voluptatum amet magni beatae excepturi perferendis odio ex
                  odit ipsum atque necessitatibus inventore, eligendi aspernatur
                  ut.
                </p>
              </div>
            </div>
          </Link>
          <Link to="/service" className=" ">
            <div className="p-2 container relative shadow-lg flex flex-col hover:text-white hover:bg-sky-700 hover:fill-white transition delay-150 duration-300 ease-in-out w-80 mt-4  rounded-sm">
              {/* card icon */}
              <div className=" w-10 absolute right-52">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className=""
                  viewBox="0 0 460 512"
                >
                  <path
                    d="M220.6 130.3l-67.2 28.2V43.2L98.7 233.5l54.7-24.2v130.3l67.2-209.3zm-83.2-96.7l-1.3 4.7-15.2 52.9C80.6 106.7
                    52 145.8 52 191.5c0 52.3 34.3 95.9 83.4 105.5v53.6C57.5 340.1 0 272.4 0 191.6c0-80.5 59.8-147.2 137.4-158zm311.4 447.2c-11.2
                    11.2-23.1 12.3-28.6 10.5-5.4-1.8-27.1-19.9-60.4-44.4-33.3-24.6-33.6-35.7-43-56.7-9.4-20.9-30.4-42.6-57.5-52.4l-9.7-14.7c-24.7
                    16.9-53 26.9-81.3 28.7l2.1-6.6 15.9-49.5c46.5-11.9 80.9-54 80.9-104.2 0-54.5-38.4-102.1-96-107.1V32.3C254.4 37.4 320 106.8 320 191.6c0
                    33.6-11.2 64.7-29 90.4l14.6 9.6c9.8 27.1 31.5 48 52.4 57.4s32.2 9.7 56.8 43c24.6 33.2 42.7 54.9 44.5 60.3s.7 17.3-10.5 28.5zm-9.9-17.9c0-4.4-3.6-8-8-8s-8 3.6-8
                     8 3.6 8 8 8 8-3.6 8-8z"
                  />
                </svg>
              </div>
              {/* card title */}
              <div className=" text-wrap">
                <h3 className="text-2xl font-medium text-center mb-3 -ml-6 ">
                  SEO
                </h3>
                {/* card description */}
                <p className="text-wrap p-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus corrupti debitis, consectetur distinctio assumenda
                  voluptatum amet magni beatae excepturi perferendis odio ex
                  odit ipsum atque necessitatibus inventore, eligendi aspernatur
                  ut.
                </p>
              </div>
            </div>
          </Link>
        
        </div>
      </div>

      {/* Portfolio section */}
      <div>
         
      </div>


    </div>

    // Service Overview section
  );
};

export default Home;
