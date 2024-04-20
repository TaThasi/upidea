/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
const BoxIdeas = () => {
  return (
    <div className="card w-96 glass mt-4 hover:shadow-lg transition-shadow duration-300">
      <div className="card-body">
        <h2 className="card-title text-white">Advance Trading Tools for DRiP Vibhu</h2>
        <p className='text-white truncate overflow-ellipsis mb-2'>
          Organizing donation matching campaigns can be a complex and time-consuming process, 
          especially when reconciling matches with original donations. There is a need for a transparent, 
          easy-to-use platform that handles donation matching automatically, allowing donors to maximize their impact without the hassle of manual reconciliation. Existing fundraising platforms do not offer a seamless, crypto-powered solution that simplifies the matching process.
        </p>
        <div className="card-actions justify-between text-white flex-row items-center">
            <div className=' flex flex-row justify-center items-center gap-2'>
                <div className=' w-[35px] h-[35px] rounded-full bg-black'>
                    <img />
                </div>
                <p className=' text-white text-xl font-medium'>Ta Thai</p>
            </div>
          <button className="btn btn-primary">More!</button>
        </div>
        <div className="card-action text-white text-xs">
            <p>Web3, Startup, Farm</p>
        </div>
      </div>
    </div>
  );
};

export default BoxIdeas;
