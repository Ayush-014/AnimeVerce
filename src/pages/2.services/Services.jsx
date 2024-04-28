import '/home/kartik/E/vs/React/route/route/src/style.css'
import Card from "./Card"
import Review from "./Review"
import MovieCard from "./Moviecard"
import SideCard from "./SideCard"

import React, { useState, useEffect } from 'react';

const Services = () => {
    const [data, setData] = useState(null);
    const [showRecommended, setShowRecommended] = useState(true);
    const toggleContent = () => {
        setShowRecommended((prev) => !prev);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://api-aniwatch.onrender.com/anime/info?id=attack-on-titan-112");
                const json = await response.json();
                setData(json);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);
    // const [popular, setPopular] = useState(null);
    // const [epi, setEpi] = useState(null);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch("https://api-aniwatch.onrender.com/anime/episodes/attack-on-titan-112");
    //             const json = await response.json();
    //             setEpi(json);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };

    //     fetchData();
    // }, []);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch("https://api-aniwatch.onrender.com/anime/most-popular?page=2");
    //             const json = await response.json();
    //             setPopular(json);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };

    //     fetchData();
    // }, []);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch("https://api-aniwatch.onrender.com/anime/info?id=attack-on-titan-112");
    //             const json = await response.json();
    //             setData(json);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };

    //     fetchData();
    // }, []);

    const seasonCard = data && data.seasons ? data.seasons.map((item) => (
        <Card id={item.id} name={item.name} image={item.poster} />
    )) : null;

    const popularCard = data && data.mostPopularAnimes ? data.mostPopularAnimes.map((item) => (
        <SideCard
            key={item.id}
            name={item.name}
            poster={item.poster}
            rate={item.type}
            episode={item.episodes.sub}
        // duration={item.duration}
        />
    )) : null;

    // const relatedCard = data && data.relatedAnimes ? data.relatedAnimes.map((item) => (
    //     <MovieCard
    //         key={item.id}
    //         name={item.name}
    //         poster={item.poster}
    //         rating={item.type}
    //         episodes={item.episodes.sub}
    //     duration={item.duration}
    //     />
    // )) : null;

    // const recommendedCard = data && data.recommendedAnimes ? data.recommendedAnimes.map((item) => (
    //     <MovieCard
    //         key={item.id}
    //         name={item.name}
    //         poster={item.poster}
    //         rating={item.rating}
    //         episodes={item.episodes.sub}
    //         type={item.type}
    //         duration={item.duration}
    //     />
    // )) : null;

    const cardList = showRecommended ? data?.recommendedAnimes : data?.relatedAnimes;

    const cards = cardList ? cardList.map((item) => (
        <MovieCard
            key={item.id}
            name={item.name}
            poster={item.poster}
            rating={item.rating}
            episodes={item.episodes.sub}
            type={item.type}
            duration={item.duration}
        />
    )) : null;

    // const popularCard = popular && popular.animes ? popular.animes.map((item) => (
    //     <MovieCard
    //         key={item.id}
    //         name={item.name}
    //         poster={item.poster}
    //         rating={item.rating}
    //         episodes={item.episodes.sub}
    //         duration={item.duration}
    //     />
    // )) : null;

    return (<>
        <div className="bg-slate-600 h-screen w-screen overflow-hidden scrollbar-hide">
            <div className="w-screen h-full overflow-x-hidden relative scrollbar-hide">
                <div className="pl-8 mb-2 flex gap-16 static h-[61%] w-screen mt-[18%] flex-col flex-wrap overflow-x-scroll scrollbar-hide">
                    <div className="h-full">
                        <div className="font-bold text-green-300 m-2">#1 Most Popular</div>
                        <div className="text-4xl font-bold text-white m-2">{data?.anime?.info?.name}
                            <span className="text-2xl"> ( {data?.anime?.moreInfo?.japanese} )</span>
                        </div>
                        <div className="m-2 flex gap-8">
                            <div>
                                <i class="ri-star-fill text-yellow-200"></i>
                                <i class="ri-star-fill text-yellow-200"></i>
                                <i class="ri-star-fill text-yellow-200"></i>
                            </div>

                            <div className="flex gap-1">
                                <div className="bg-green-400 p-1 ml-8 rounded-l-lg"><i class="ri-play-circle-fill"></i>{data?.anime?.info?.stats?.type}</div>
                                <div className="bg-green-300 p-1 border border-green-400">{data?.anime?.info?.stats?.quality}</div>
                                <div className="bg-green-400 p-1 rounded-r-lg"><i class="ri-calendar-fill"></i>{data?.anime?.moreInfo?.premiered}</div>
                            </div>
                            {/* {data ? (
                            <pre>{JSON.stringify(data, null, 2)}</pre>
                        ) : (
                            'Loading...'
                        )} */}
                            {/* {popular ? (
                            <pre>{JSON.stringify(popular, null, 2)}</pre>
                        ) : (
                            'Loading...'
                        )} */}
                            {/* {epi ? (
                            <pre>{JSON.stringify(epi, null, 2)}</pre>
                        ) : (
                            'Loading...'
                        )} */}
                        </div>
                        <div className="text-white m-2 text-sm italic backdrop-blur-lg"> {data?.anime?.info?.description} </div>

                        <div className="m-2 my-5 flex gap-2">
                            <a href="#" className="flex p-2 px-3 text-white font-bold bg-green-300 border rounded-lg hover:scale-105 group">
                                <div> Watch Now </div>
                                <i class="ri-play-large-fill ml-2 group-hover:scale-125"></i>
                            </a>
                            <a href="#" className="flex p-2 px-3 text-white font-bold border border-green-300 rounded-lg hover:scale-105 group">
                                <div> Trailer</div>
                                <i class="ri-play-circle-line ml-2 group-hover:scale-110"></i>
                            </a>
                            <div className="flex p-2 px-3 text-white font-bold bg-green-300 rounded-lg hover:scale-105 group">
                                <div>Wishlist</div>
                                <i class="ri-add-line ml-1 group-hover:scale-125"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <p className="relative font-bold text-slate-300 text-lg mt-8 mx-2">SEASONS</p>
                <div className="px-3 py-4 flex flex-col flex-wrap w-screen h-56 gap-3 border border-gray-500 rounded-lg overflow-hidden overflow-x-scroll scrollbar-hide blurr">
                    {seasonCard}
                </div>

                <div className="mt-8 flex w-screen h-max  min-h-[30rem] ">
                    <div className="w-full  border border-slate-400 overflow-hidden">
                    <button  className="m-2">
                        <div className="border border-black flex">
                        <div className={`border border-black py-2 px-4 mb-0 rounded-lg font-bold text-sm ${showRecommended ? 'bg-slate-400' : 'bg-slate-600'}`} onClick={showRecommended ? null : toggleContent}>Recommended</div>
                        <div className={`border border-black py-2 px-4 mb-0 rounded-lg font-bold text-sm ${showRecommended ? 'bg-slate-600' : 'bg-slate-400'}`} onClick={showRecommended ? toggleContent : null}>Related</div>
                        </div>
                        {/* {showRecommended ? (<div className="border border-black flex">
                            <div className="border border-black py-2 px-4 mb-0 bg-slate-900 rounded-lg font-bold text-sm">Recommended</div>
                            <div className="border border-black py-2 px-4 mb-0 bg-slate-300 rounded-lg font-bold text-sm">Related</div>
                        </div>) : 
                        (<div className="border border-black flex">
                        <div className="border border-black py-2 px-4 mb-0 bg-slate-300 rounded-lg font-bold text-sm">Recommended</div>
                        <div className="border border-black py-2 px-4 mb-0 bg-slate-900 rounded-lg font-bold text-sm">Related</div>
                    </div>)
                    } */}
                    </button>
                    <div className="relative flex w-full border flex-wrap py-4 overflow-x-scroll scrollbar-hide">
                        {cards}
                    </div>
                    </div>
                    <div className="w-[18%] border px-2 border-slate-700 overflow-hidden">
                        <p className="font-bold text-slate-300 text-lg mt-2 mx-2">MOST POPULAR</p>
                        <div className="mt-6 relative flex w-full gap-2 flex-wrap overflow-scroll scrollbar-hide">
                            {popularCard}
                        </div>
                    </div>
                </div>

                {/* <p className="relative font-bold text-slate-300 text-lg mt-8 mx-2">RECOMMENDED ANIMES</p>
                    <div className="relative flex flex-col w-screen h-[72%] flex-wrap border border-purple-300 py-4 overflow-y-hidden overflow-scroll scrollbar-hide">
                        {recommendedCard}
                    </div> */}

                {/* <p className="relative font-bold text-slate-300 text-lg mt-8 mx-2">MOST POPULAR</p>
                    <div className="relative flex flex-col w-screen h-[72%] flex-wrap border border-purple-300 py-4 overflow-y-hidden overflow-scroll scrollbar-hide">
                        {popularCard}
                    </div> */}
                <div>
                    <Review />
                </div>
            </div>
        </div>
    </>
    )
}

export default Services;