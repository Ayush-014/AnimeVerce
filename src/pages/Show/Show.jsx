import '../../../src/style.css'
import { useParams } from 'react-router-dom';
import Card from "/src/components/Card"
import Review from "/src/components/Review"
import MovieCard from "/src/components/Moviecard"
import SideCard from "/src/components/SideCard"
import Navbar from '../../components/header/Navbar';

import React, { useState, useEffect } from 'react';

const Show = () => {
    const { id } = useParams();
    
    const [data, setData] = useState(null);
    const [showRecommended, setShowRecommended] = useState(true);
    const toggleContent = () => {
        setShowRecommended((prev) => !prev);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api-aniwatch.onrender.com/anime/info?id=attack-on-titan-112`);
                const json = await response.json();
                setData(json);
                console.log(name)
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
        <Navbar />
        <div className="background bg-slate-900 h-screen w-screen overflow-hidden scrollbar-hide">
            {/* <div className="w-max absolute top-20 right-24 border-2 border-white">
                <img src="https://cdn.noitatnemucod.net/thumbnail/300x400/100/debf027d032c6d40b91fab16b2ff9bd4.jpg" 
                     className="h-72 w-52" />
            </div> */}
            <div className="u-non-blurred w-screen h-full overflow-x-hidden relative scrollbar-hide">
                <div className="pl-8 mb-2 flex gap-16 static h-[61%] w-screen mt-[18%] flex-col flex-wrap overflow-x-scroll scrollbar-hide">
                    <div className="absolute h-max bottom-0 ">
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
                        <div className="text-white m-2 w-[80%] text-sm italic backdrop-blur-lg"> {data?.anime?.info?.description} </div>

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

                

                {data && data.seasons && data.seasons.length > 0 ? (<><p className="relative font-bold text-slate-300 text-lg mt-8 mx-2">SEASONS</p>
                <div className="px-3 py-4 flex flex-col flex-wrap w-screen h-56 gap-3 border border-gray-500 rounded-lg overflow-hidden overflow-x-scroll scrollbar-hide">
                    {seasonCard}
                </div></>
        ) : null}

                <div className="mt-8 mx-4 flex w-screen h-max  min-h-[30rem]">
                    <div className="w-full h-full overflow-hidden">
                    <button  className="mt-2 rounded-lg overflow-hidden">
                        <div className="flex">
                        <div className={`py-2 px-4 mb-0  font-bold text-sm ${showRecommended ? 'bg-slate-400' : 'blurr'}`} onClick={showRecommended ? null : toggleContent}>Recommended</div>
                        <div className={`py-2 px-4 mb-0 font-bold text-sm ${showRecommended ? 'blurr' : 'bg-slate-400'}`} onClick={showRecommended ? toggleContent : null}>Related</div>
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
                    <div className="relative flex w-full flex-wrap py-4 overflow-x-scroll scrollbar-hide">
                        {cards}
                    </div>
                    </div>

                    <div className="w-[18%] px-2 overflow-hidden">
                    {data && data.mostPopularAnimes && data.mostPopularAnimes.length > 0 ? (<><p className="font-bold text-slate-300 text-lg mt-2 mx-2">MOST POPULAR</p>
                        <div className="mt-6 relative flex w-full gap-2 flex-wrap overflow-scroll scrollbar-hide">
                            {popularCard}
                        </div></>
        ) : null}
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

export default Show;