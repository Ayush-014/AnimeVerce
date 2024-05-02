import React from 'react';

const MovieCard = ({ name, poster, rating, duration, episodes, type }) => {
  
//   const [data, setData] = useState(null);
//   const about = (animeId) => {
//   useEffect(() => {
//       const fetchData = async () => {
//           try {
//               const response = await fetch(`https://api-aniwatch.onrender.com/anime/info?id=${animeId}`);
//               const json = await response.json();
//               setData(json);
//           } catch (error) {
//               console.error(error);
//           }
//       };

//       fetchData();
//   }, []);
// }

  return (
    <div className="relative flex flex-col w-48 max-w-64 h-70 items-center rounded-lg p-2 mx-2 my-2 shadow-md hover:scale-110 group">
      <div className="relative">
        <img src={poster} alt={name} className="w-44 h-60 object-cover rounded-lg group-hover:brightness-50 " />
        <div className="card absolute top-4 left-8 z-10">
          <div className="character relative">
            <img src={poster} alt={name} className="w-28 z-10 h-40 object-cover rounded-lg" />
            <i className="ri-play-circle-fill text-white text-4xl absolute top-20 left-12 z-20"></i>
          </div>
        </div>
        {duration ? (<div className="w-max p-1 rounded-lg italic font-semibold text-white text-sm absolute bottom-4 right-4 backdrop-blur-xl">
          {duration}  </div>
        ) : null}

        {rating ? (<div className="border border-black w-max m-1 p-1 rounded-lg text-white font-bold text-sm absolute left-1 top-1 duration-500 opacity-0 group-hover:backdrop-blur-2xl group-hover:opacity-100  group-hover:duration-100">
          {rating}</div>
        ) : null}
        {type ? (<div className="border border-black w-max m-1 p-1 rounded-lg text-white font-bold text-sm absolute right-1 top-1 duration-500 opacity-0 group-hover:backdrop-blur-2xl group-hover:opacity-100  group-hover:duration-100">
          {type}</div>
        ) : null}
      </div>
      <div className=" bg-slate-400 w-full h-max p-1 m-1 rounded-lg font-bold text-sm truncate">{name}</div>

      {episodes ? (<div className="w-full text-center p-1 rounded-lg italic font-semibold text-sm duration-1000 opacity-0 group-hover:backdrop-blur-3xl group-hover:opacity-100 group-hover:duration-100">
        {episodes} Episodes  </div>
      ) : null}


    </div>
  );
};

export default MovieCard;
