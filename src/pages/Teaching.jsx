import React, { useEffect, useState } from 'react'
import { SearchBox } from '../components'
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { Center } from '@mantine/core';


const CarouselSlide = ({ slide }) => {
  return (
    <div className="w-full h-full content-center">
      <p className="font-normal text-white flex justify-center content-center">{slide.text}</p>
    </div>
  );
};


const dataTobeprinted = {
  "_id": { "$oid": "6559db39be5ceb3d2af1d4a9" },
  "topic": { "$oid": "6559ccd3930cc491b6e73ff3" },
  "slides": [
    {
      "text": "Introduction\nOxygen exists in the air to an extent of 21% by volume (or 23% by weight). It is the most abundant element on earth, accounting for half the total mass of the Earth’s crust. Oxygen is mainly found in combined states as oxides, hydroxides, silicates, sulphates, carbonates, and water. Its ease of combination with other elements to form compounds shows that oxygen is a very reactive element. In this chapter, you will learn about the preparation, properties, and uses of oxygen. By the end of this chapter, you should be able to prepare a sample of oxygen gas in the laboratory, perform simple experiments to determine properties of oxygen gas, explain the properties of oxygen, list uses of oxygen in daily life, and relate some uses of oxygen to its properties",
      "imageUrl": "https://energyeducation.ca/wiki/images/5/5d/OXYGEN.png",
      "_id": { "$oid": "6559db39be5ceb3d2af1d4aa" }
    },
    {
      "text": "Oxygen can be prepared in the laboratory from either hydrogen peroxide solution or potassium chlorate salt.\n\n(i) Laboratory preparation of oxygen from hydrogen peroxide solution\nThe most common method for the preparation of oxygen in the laboratory is by decomposition of hydrogen peroxide solution. The gas is prepared by catalysing the decomposition of hydrogen peroxide with manganese (IV) oxide. At room temperature hydrogen peroxide decomposes (breaks down) very slowly. It decomposes to water and oxygen.",
      "imageUrl": "https://chem.libretexts.org/@api/deki/files/125882/Chem9_exp3.png?revision=1&size=bestfit&width=750&height=456",
      "_id": { "$oid": "6559dfdd8de1e244b8b608c5" }
    },
    {
      "text": "Oxygen can be prepared in the laboratory from either hydrogen peroxide solution or potassium chlorate salt.\n\n(i) Laboratory preparation of oxygen from hydrogen peroxide solution\nThe most common method for the preparation of oxygen in the laboratory is by decomposition of hydrogen peroxide solution. The gas is prepared by catalysing the decomposition of hydrogen peroxide with manganese (IV) oxide. At room temperature hydrogen peroxide decomposes (breaks down) very slowly. It decomposes to water and oxygen.",
      "imageUrl": "https://chem.libretexts.org/@api/deki/files/125882/Chem9_exp3.png?revision=1&size=bestfit&width=750&height=456",
      "_id": { "$oid": "6559dfdd8de1e244b8b608c5" }

    },
    {
      "text": "Oxygen can be prepared in the laboratory from either hydrogen peroxide solution or potassium chlorate salt.\n\n(i) Laboratory preparation of oxygen from hydrogen peroxide solution\nThe most common method for the preparation of oxygen in the laboratory is by decomposition of hydrogen peroxide solution. The gas is prepared by catalysing the decomposition of hydrogen peroxide with manganese (IV) oxide. At room temperature hydrogen peroxide decomposes (breaks down) very slowly. It decomposes to water and oxygen.",
      "imageUrl": "https://chem.libretexts.org/@api/deki/files/125882/Chem9_exp3.png?revision=1&size=bestfit&width=750&height=456",
      "_id": { "$oid": "6559dfdd8de1e244b8b608c5" }
      
    }
  ],
  "__v": { "$numberInt": "1" }
};

const Teaching = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3100/topicnotes/6559ccd3930cc491b6e73ff3', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const responseData = await response.json();
          setData(responseData);
          console.log(responseData?.subtopics?.[0].slides);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('An error occurred', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide > 0 ? prevSlide - 1 : dataTobeprinted.slides.length - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide < dataTobeprinted.slides.length - 1 ? prevSlide + 1 : 0));
  };

  return (
    <div>
      <div className='flex w-full h-auto flex-col-reverse md:flex-row py-4 px-2'>
        <div className='w-full md:w-[35%] flex flex-col'>
          <div className='p-1'>

            <div class="w-full max-w-sm p-1 bg-white border border-gray-200 rounded-lg shadow sm:p-3 dark:bg-gray-800 dark:border-gray-700">
              <h5 class=" text-base font-semibold text-gray-900 md:text-lg dark:text-white">
                Lesson Topics
              </h5>
              <p class="text-sm font-normal text-gray-500 dark:text-gray-400">Connect with one of our available wallet providers or create a new one.</p>
              <ul class="my-4 space-y-3">
                <li>
                  <a href="#" class="flex items-center p-1 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                    <svg aria-hidden="true" class="h-4" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M72.0998 0.600098H48.3998H24.5998H0.799805V24.4001V48.2001V49.7001V71.8001V71.9001V95.5001H24.5998V72.0001V71.9001V49.8001V48.3001V24.5001H48.3998H72.1998H95.9998V0.700104H72.0998V0.600098Z" fill="#617BFF" /><path d="M48.5 71.8002H72.1V95.6002H73C79.1 95.6002 84.9 93.2002 89.2 88.9002C93.5 84.6002 95.9 78.8002 95.9 72.7002V48.2002H48.5V71.8002Z" fill="#617BFF" /></svg>
                    <span class="flex-1 ms-3 whitespace-nowrap">MetaMask</span>
                    <span class="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">Popular</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="flex items-center p-1 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                    <svg aria-hidden="true" class="h-4" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M72.0998 0.600098H48.3998H24.5998H0.799805V24.4001V48.2001V49.7001V71.8001V71.9001V95.5001H24.5998V72.0001V71.9001V49.8001V48.3001V24.5001H48.3998H72.1998H95.9998V0.700104H72.0998V0.600098Z" fill="#617BFF" /><path d="M48.5 71.8002H72.1V95.6002H73C79.1 95.6002 84.9 93.2002 89.2 88.9002C93.5 84.6002 95.9 78.8002 95.9 72.7002V48.2002H48.5V71.8002Z" fill="#617BFF" /></svg>
                    <span class="flex-1 ms-3 whitespace-nowrap">Coinbase Wallet</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="flex items-center p-1 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                    <svg aria-hidden="true" class="h-4" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M72.0998 0.600098H48.3998H24.5998H0.799805V24.4001V48.2001V49.7001V71.8001V71.9001V95.5001H24.5998V72.0001V71.9001V49.8001V48.3001V24.5001H48.3998H72.1998H95.9998V0.700104H72.0998V0.600098Z" fill="#617BFF" /><path d="M48.5 71.8002H72.1V95.6002H73C79.1 95.6002 84.9 93.2002 89.2 88.9002C93.5 84.6002 95.9 78.8002 95.9 72.7002V48.2002H48.5V71.8002Z" fill="#617BFF" /></svg>
                    <span class="flex-1 ms-3 whitespace-nowrap">Opera Wallet</span>
                  </a>
                </li>

              </ul>
            </div>

          </div>

          <div className='p-1'>


            <img class="object-cover max-w-sm h-auto rounded-lg h-96 md:h-auto md:w-auto md:rounded-none md:rounded-lg" src="https://assets-global.website-files.com/61dc0796f359b6eeecc06eab/6385e2d2d7efad61968a6fa8_talking%20head%20video.jpg" alt="" />


          </div>

        </div>
        <div className='w-full p-1 md:w-[65%] md:h-760 '>
          <div className='border-2 rounded-lg w-full h-full content-center md:w-760 py-8 px-1 '>



            {loading ? (
              <div className='px-8'>
                <div role="status" class="max-w-sm animate-pulse">
                  <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                  <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                  <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                  <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                  <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                  <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                  <div className='p-2'></div>
                  <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                  <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                  <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                  <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                  <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                  <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                  <div className='p-2'></div>
                  <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                  <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                  <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                  <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                  <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                  <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>

                </div>

              </div>

            ) : (
              <div className="flex flex-row h-full content-center ">
                <div>
                  <FaArrowCircleLeft
                    size={24}
                    className="text-white hover:cursor-pointer m-1 h-full content-center"
                    onClick={handlePrevSlide}
                  />
                </div>
                <div className='center-text' >
                  <div>
                    <CarouselSlide slide={dataTobeprinted?.slides?.[currentSlide]} />
                  </div>
                </div>
                <div>
                  <FaArrowCircleRight
                    size={24}
                    className="text-white hover:cursor-pointer m-1 h-full content-center"
                    onClick={handleNextSlide}
                  />
                </div>
              </div>
            )
            }


          </div>
        </div>
      </div>

      <SearchBox />
    </div>
  )
}

export default Teaching