import '../../../src/style.css';
import { Link, useParams } from 'react-router-dom';
import Card from "/src/components/Card"
import Review from "/src/components/Review"
import MovieCard from "/src/components/Moviecard"
import SideCard from "/src/components/SideCard";
import Loader from '../../components/Loader.jsx';
import Navbar from '../../components/header/Navbar';
import React, { useState, useEffect } from 'react';

const Search = () => {
    const { id } = useParams();

    const [pages, setPages] = useState(1);
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activePage, setActivePage] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api-aniwatch.onrender.com/anime/search?q=${id}&page=${pages}`);
                // console.log(`https://api-aniwatch.onrender.com/anime/search/suggest?q=${id}`)
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const json = await response.json();
                setData(json);
                const no = data ? data.totalPages : 1;
                setPages(no);
                setIsLoading(false);
            } catch (error) {
                console.error(error.message);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return <Loader />;
    }
    if (error) {
        return <div>Error: {error}</div>;
    }

    const handlePageClick = async (page) => {
        if (page > pages) {
            page = 1
        }
        if (page < 1) {
            page = pages;
        }
        
        try {
            const response = await fetch(`https://api-aniwatch.onrender.com/anime/search?q=${id}&page=${page}`);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const json = await response.json();
            setData(json);
            setActivePage(page);
            setIsLoading(false);
        } catch (error) {
            console.error(error.message);
            setIsLoading(false);
        }
    };

    const cards = data ? data.animes.map((item) => (
        <Link to={`/show/${item.id}`} key={item.id}>
            <MovieCard
                key={item.id}
                id={item.id}
                name={item.name}
                poster={item.poster}
                rating={item.rating}
                episodes={item.episodes.sub}
                type={item?.type}
                duration={item.duration}
            />
        </Link>
    )) : null;


    const popularCard = data && data.mostPopularAnimes ? data.mostPopularAnimes.map((item) => (
        <SideCard
            key={item.id}
            name={item.name}
            poster={item.poster}
            rate={item.type}
            episode={item.episodes.sub}
        />
    )) : null;

    return (<>
        <Navbar />
        <div className="bg-slate-900 h-screen w-screen overflow-hidden scrollbar-hide">
            <div className="u-non-blurred w-screen pt-20 h-full overflow-x-hidden relative scrollbar-hide">

                <div className="text-3xl px-8 font-bold text-slate-400">
                    SHOWING SEARCH RESULT FOR : {id.toUpperCase()}
                </div>
                <div className="mx-4 flex w-screen h-max  min-h-[30rem]">
                    <div className="w-full flex h-full overflow-hidden">

                        <div className="relative flex w-full gap-3 flex-wrap py-4 overflow-x-scroll scrollbar-hide">
                            {cards}
                        </div>

                        <div className="w-[18%] px-2 overflow-hidden">
                            {data && data.mostPopularAnimes && data.mostPopularAnimes.length > 0 ? (<><p className="font-bold text-slate-300 text-lg mt-2 mx-2">MOST POPULAR</p>
                                <div className="mt-6 relative flex w-full gap-2 flex-wrap overflow-scroll scrollbar-hide">
                                    {popularCard}
                                </div>
                            </>
                            ) : null}
                        </div>

                    </div>

                </div>
                {/* <div className="w-screen flex justify-center gap-[1px] border-4 border-white cursor-default">
                    <i class="ri-skip-left-fill text-2xl text-purple-400" onClick={() => handlePageClick(1)}></i>
                    <i class="ri-arrow-left-s-fill text-2xl text-purple-400" onClick={() => handlePageClick(activePage - 1)}></i>
                    <div className="border border-emerald-700 flex flex-wrap gap-1 max-w-[70%]">
                    {[...Array(pages).keys()].map((page) => (
                        <div className={`page w-8 h-8 pt-1 text-sm text-center font-bold rounded-lg ${activePage === page + 1 ? 'bg-gray-400' : 'bg-purple-400'}`}
                            key={page}
                            onClick={() => handlePageClick(page + 1)}>
                            {page + 1}
                        </div>
                    ))}
                    </div>
                    <i class="ri-arrow-right-s-fill text-2xl text-purple-400" onClick={() => handlePageClick( activePage + 1)}></i>
                    <i class="ri-skip-right-fill text-2xl text-purple-400" onClick={() => handlePageClick(pages)}></i>
                </div> */}


                {data ? (
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                ) : (
                    'Loading...'
                )}
            </div>
        </div>
    </>
    )
}

export default Search;