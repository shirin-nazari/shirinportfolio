import Image from 'next/image';
import React from 'react';
import movie from '@/public/movie.png';

const Projects = () => {
  return (
    <div className="mx-auto max-w-md overflow-hidden rounded-xl blur-in-2xl shadow-md md:max-w-xl">
      {/* <div className="md:flex"> */}
      <div className="md:shrink-0">
        <Image
          // className="h-48 w-full object-cover md:h-dvh md:w-full"
          className="h-48 w-full  md:h-4/6 md:w-5/6"
          src={movie}
          alt="Modern building architecture"
        />
      </div>
      <div className="p-8">
        <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
          Company retreats
        </div>
        <a
          href="#"
          className="mt-1 block text-lg leading-tight font-medium text-black hover:underline"
        >
          Incredible accommodation for your team
        </a>
        <p className="mt-2 text-gray-500">
          Looking to take your team away on a retreat to enjoy awesome food and
          take in some sunshine? We have a list of places to do just that.
        </p>
      </div>
    </div>
    // </div>
  );
};

export default Projects;
