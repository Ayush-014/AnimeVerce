import React from 'react';

const SideCard = ({ name, poster, rate, duration, episode, link }) => {
    return (

        <a href="#">
            <div className="card group h-full">
                <div className="wrapper">
                    <img src={poster} className="cover-image h-32 w-full relative" />
                </div>
                <div className="absolute bottom-0 w-full text-center duration-500 backdrop-blur-lg text-white group-hover:duration-200 group-hover:opacity-0"> {name} </div>

                <div className="relative duration-500 opacity-0 group-hover:opacity-100 group-hover:duration-300">
                    <img src={poster} className="title h-32 w-full" />
                    
                    <i className="title ri-play-circle-fill text-white text-4xl absolute bottom-12 left-7"></i>
                    <div className='absolute backdrop-blur-sm w-max title bottom-2 left-3 flex gap-1 items-baseline'>
                        {rate ? (<div className="bg-green-400 p-1 rounded-md text-white font-bold text-xs duration-500 group-hover:backdrop-blur-2xl">
                            {rate}</div>
                        ) : null}
                        {episode ? (<div className=" m-1 flex items-baseline"> <span><i class="ri-mic-fill text-white text-xs"></i></span><div className="w-max rounded-lg text-white font-semibold text-xs duration-500 group-hover:backdrop-blur-2xl">
                            {episode}</div> </div>
                        ) : null}
                    </div>
                </div>
            </div>
        </a>



        //     <a
        //     href={link}
        //     className="mb-1 mx-1 p-1 border rounded-sm flex items-center gap-7 shadow-sm transition-all duration-300 ease-in-out group overflow-hidden w-full md:w-[400px] hover:backdrop-blur-2xl hover:bg-slate-400 hover:duration-300"
        //   >
        //     <figure className="w-[20%] h-[90%] border border-slate-600 flex justify-center items-center rounded-2xl bg-gray-100 overflow-hidden">
        //       <img className=" w-auto h-auto mx-auto cover" src={poster} alt={name} />
        //     </figure>

        //     <div className="text-white relative">
        //       <h2 className="font-semibold  w-full max-w-44">{name}</h2>
        //       <div className='flex gap-1 items-baseline'>
        //       {rate ? ( <div className="bg-green-400 p-1 rounded-md text-white font-bold text-xs duration-500 group-hover:backdrop-blur-2xl">
        //           {rate}</div>
        //                   ) : null}
        //         {episode ? (<div className=" m-1 flex items-baseline"> <span><i class="ri-mic-fill text-xs"></i></span><div className="w-max rounded-lg text-white font-semibold text-xs duration-500 group-hover:backdrop-blur-2xl">
        //           {episode}</div> </div>
        //                   ) : null}
        //       </div>
        //     </div>
        //   </a>
    );
};

export default SideCard;
