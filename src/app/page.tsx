import React from 'react';
import BoxIdeas from './components/BoxIdeas';

const Page = () => {
  return (
    <>
    <main className='h-[105vh] flex flex-col'>
      <div className="flex items-center justify-center mt-4 mb-2">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-4">Explore ALL ideas</h1>
          </div>
      </div>
        <div className="overflow-hidden max-h-[500px] overflow-y-auto no-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[78rem] mx-auto px-4 mb-2">
              <BoxIdeas />

          </div>
        </div>
    </main>
      
    </>
  ); 
};

export default Page;
