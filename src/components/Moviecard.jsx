import React, { useState, useEffect } from 'react';

const MovieCard = ({ id, name, poster, rating, duration, episodes, type }) => {
  
  const [data, setData] = useState(null);
  const [content, setcontent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [ShowData, setShowData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch(`https://api-aniwatch.onrender.com/anime/info?id=${id}`);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const json = await response.json();
            setShowData(json?.anime?.info?.description);
            setData(json);
            // setShowData(data?.anime?.info?.description);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
        }
    };

    fetchData();
}, []);

// const handlePageClick = async (animeId) => {
//   try {
//       console.log("caught before")
//       const response = await fetch(`https://api-aniwatch.onrender.com/anime/info?id=${animeId}`);
//       if (!response.ok) {
//           throw new Error('Failed to fetch data');
//       }
//       const json = await response.json();
//       setData(json);
//       setShowData(data?.anime?.info?.description);
//       console.log("set to ok")
//       setIsLoading(false);
//       console.log("caught after")
//   } catch (error) {
//       console.error(error.message);
//       setIsLoading(false);
//   }
// };
// if (isLoading) {
//   return <Loader />;
// }
// if (error) {
//   return <div>Error: {error}</div>;
// }

  return (<>
    <div className="relative flex flex-col w-48 border border-purple-800 max-w-64 h-70 items-center rounded-lg p-2 mx-2 my-2 shadow-md hover:scale-110 group">
      <div className="relative">
        <img 
            src={poster} 
            alt={name} 
            className="w-44 h-60 object-cover rounded-lg group-hover:brightness-50 z-10" 
        />
        <div className="card absolute border border-purple-200 top-4 -left-3 z-10 scale-75">
          <div className="character ml-6 border border-purple-900 relative">
            <img src={poster} alt={name} className="w-[90%] z-10 h-52 object-cover rounded-lg" />
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
      <div className="bg-slate-700 w-full h-max p-1 m-1 rounded-lg font-bold text-sm truncate">{name}</div>

      {episodes ? (<div className="w-full text-center p-1 rounded-lg italic text-white font-semibold text-sm duration-1000 opacity-0 group-hover:backdrop-blur-3xl group-hover:opacity-100 group-hover:duration-100">
        {episodes} {episodes > 0 ? "Episodes" : null}  </div>
      ) : null}
      
      {/* <div className="absolute w-64 h-64 border -top-20 blurr z-50 opacity-0 hover:opacity-100">  
        {ShowData ? {ShowData} : null }
    </div> */}

    {ShowData ? (<div className="absolute rounded-lg w-64 h-min max-h-64 border -top-[80%] backdrop-blur-[180px] text-xs font-bold text-gray-900 p-8 overflow-hidden opacity-0 group-hover:opacity-100 hover:opacity-0">
        {ShowData}  </div>
      ) : null
      // ( <div className="absolute rounded-lg w-64 h-min max-h-64 border -top-[80%] backdrop-blur-[180px] text-lg font-serif font-bold text-white p-8 overflow-hidden opacity-0 group-hover:opacity-100 hover:opacity-0">
      //     Will Be Fetched Shortly  
      // </div> )
    }
    </div>
    {/* {data ? (
      <pre>{JSON.stringify(data, null, 2)}</pre>
  ) : (
      'Loading...'
  )} */}
    </>
  );
};

export default MovieCard;
// hidden group-hover:block hover:opacity-0
