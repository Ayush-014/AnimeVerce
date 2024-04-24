import '/home/kartik/E/vs/React/route/route/src/style.css'
import Card from "./Card"
import Review from "./Review"
import HorizontalCard from "./LongCard"

const Services = () => {
    return (
        <div class="customBg h-screen w-screen overflow-hidden relative scrollbar-hide">
            <div className="overflow-scroll h-full w-full scroll-smooth">
                
                <div className="flex flex-col gap-3 mt-[15%] mx-16 mb-8">
                
                <div className="flex gap-9 font-bold mx-3 mb-4 text-slate-500 blurr w-max blurr">
                    <div className="border-2 rounded-lg p-1">
                        8.2
                        <i class="ri-star-s-fill mx-1"></i>
                    </div>
                    <div className="p-1">
                        2011-1022
                    </div>
                </div>

                    <div className="flex gap-3">
                    <a href="/" className="bg-gray-400 cursor-default self-center py-2 px-8 font-bold text-white rounded-lg hover:scale-110">
                        My List
                        <i className="ri-add-line"></i>
                    </a>
                    <a href="/" className="bg-red-500 cursor-default self-center py-2 px-8 font-bold text-white rounded-full hover:scale-110">
                        Watch
                        <i className="ri-add-circle-fill mx-1"></i>
                    </a>
                    </div>
                    <a className="bg-gray-500 cursor-pointer w-max py-2 px-8 mx-16 font-bold text-white rounded-md hover:scale-105">
                        Watchlist
                        <i class="ri-add-line"></i>
                    </a>
                </div>
            <div>
                <a href="/" className="text-slate-600 font-bold mx-3 underline text-md">Show more</a>
            </div>
            <div className="flex flex-col flex-wrap justify-center gap-6 h-[200px] px-2 overflow-scroll scrollbar-hide">
                <Card
                    name="Fullmetal Alchemist"
                    date="2011-1022"
                    logo="./fullmetal.jpg"
                    rate="4.8"
                    link="https//www.google.es"
                />
                <Card
                    name="Jujutsu Kaisen"
                    date="2011-1022"
                    logo="./itadori.jpeg"
                    rate="10.50"
                    link="https//www.google.es"
                />
                <Card
                    name="Attack On Titan"
                    date="2011-1022"
                    logo="./aot.jpeg"
                    rate="10.50"
                    link="https//www.google.es"
                />
                <Card
                    name="Black Clover"
                    date="2011-1022"
                    logo="./blackClover.jpg"
                    rate="10.50"
                    link="https//www.google.es"
                />
                <Card
                    name="One Piece"
                    date="2011-1022"
                    logo="./onePiece.jpg"
                    rate="10.50"
                    link="https//www.google.es"
                />
                <Card
                    name="Jujutsu Kaisen S2"
                    date="2011-1022"
                    logo="./5305f4c7513b35fbf9117018204edff3.jpg"
                    rate="10.50"
                    link="https//www.google.es"
                />
            </div>
            <p className="font-bold text-slate-700 text-lg mt-8 mx-2">Related Series</p>
            <div className="flex h-[80%] border border-purple-300 mt-2 mb-4 overflow-x-scroll overflow-y-hidden">
            <HorizontalCard
        title="Movie Title"
        imageUrl="/public/purple-aesthetic-train-57-1366x768.jpg"
        rating="8.5"
        year="2022"
      />
        </div> //card ends
            <div className="mt-12">
                <Review />
            </div>
            </div>
        </div>

    )
}

export default Services;