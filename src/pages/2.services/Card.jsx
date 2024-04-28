import React from 'react';

function Card({ name, date, image, rate, episode, link }) {
  return (
    <a
      href={link}
      className="p-4 bg-[#8990D4] rounded-sm flex items-center gap-7 shadow-sm hover:shadow-md hover:bg-white transition-all duration-300 ease-in-out group overflow-hidden w-full md:w-[420px]"
    >
      <figure className="w-[50%] h-40 flex justify-center items-center rounded-2xl group-hover:rounded-full border-4 border-orange-400 bg-gray-100 overflow-hidden transition-all duration-500 group-hover:scale-150 group-hover:translate-x-[130%]">
        <img className=" w-full h-full mx-auto cover" src={image} alt={name} />
      </figure>

      <div className="text-white text-left group-hover:text-[#65738B] group-hover:translate-x-[-115%] transition-all duration-300 ease-in-out">
        <h2 className="text-xl font-bold w-full max-w-44">{name}</h2>
        <p className="text-lg font-semibold italic group-hover:hidden">
          {rate ? `Rated: ${rate}` : "" }
        </p>
        <p className="text-lg font-semibold italic group-hover:hidden">
          {episode ? `Episode: ${episode}` : "" }
        </p>
        <p className="text-md font-semibold group-hover:hidden">
          {date}
        </p>
      </div>
    </a>
  );
}

export default Card;
