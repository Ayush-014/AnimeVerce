import React from 'react';

const MovieCard = ({ name, poster, rating, duration, episodes, type}) => {
  return (
    <div className="relative flex flex-col w-full max-w-64 h-max-full items-center rounded-lg p-2 m-2 shadow-md hover:scale-110   group">
      <div className="relative">
          <img src={poster} alt={name} className="w-52 h-72 object-cover rounded-lg" />
          <div className="card absolute top-4 left-8 z-10">
            <div className="character relative">
              <img src={poster} alt={name} className="w-32 z-10 h-48 object-cover rounded-lg" />
              <i className="ri-play-circle-fill text-white text-4xl absolute top-20 left-12 z-20"></i>
          </div>
          </div>
          {duration ? ( <div className="w-max p-1 rounded-lg italic font-semibold text-white text-sm absolute bottom-4 right-4 backdrop-blur-xl">
                  {duration}  </div>
                  ) : null}
          
      {rating ? ( <div className="border border-black w-max m-1 p-1 rounded-lg text-white font-bold text-sm absolute left-1 top-1 duration-500 opacity-0 group-hover:backdrop-blur-2xl group-hover:opacity-100  group-hover:duration-100">
          {rating}</div>
                  ) : null}
      {type ? ( <div className="border border-black w-max m-1 p-1 rounded-lg text-white font-bold text-sm absolute right-1 top-1 duration-500 opacity-0 group-hover:backdrop-blur-2xl group-hover:opacity-100  group-hover:duration-100">
          {type}</div>
                  ) : null}
      </div>
      <div className="card bg-slate-400 w-full h-max text-center m-1 p-1 rounded-lg font-bold text-sm">{name}</div>
      
      {episodes ? ( <div className="w-full text-center p-1 rounded-lg italic font-semibold text-sm duration-1000 opacity-0 group-hover:backdrop-blur-3xl group-hover:opacity-100 group-hover:duration-100">
          {episodes} Episodes  </div>
                  ) : null}
      

    </div>
  );
};

export default MovieCard;
