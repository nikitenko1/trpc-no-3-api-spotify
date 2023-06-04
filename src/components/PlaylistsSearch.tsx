import React, { useState } from "react";
import { v4 } from "uuid";
import PlaylistSearchItem from "./PlaylistSearchItem";

interface IProps {
  playlists: SpotifyApi.PlaylistObjectSimplified[] | undefined;
  title: string | undefined;
}

const PlaylistsSearch = ({ playlists, title }: IProps) => {
  const [showMore, setShowMore] = useState<boolean>(false);

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-x-2 justify-between">
        <h1 className="font-bold text-white mb-4 text-base md:text-2xl">{title}</h1>
        <button
          onClick={() => setShowMore(!showMore)}
          className="font-bold whitespace-nowrap rounded-full px-4 py-2 
          hover:-translate-y-1 ease-in-out duration-100 transition-all bg-white text-black"
        >
          {showMore ? "Show less" : "Show more"}
        </button>
      </div>
      <div
        className="grid overflow-x-scroll scrollbar-thumb-gray-800 scrollbar-thin scrollbar-track-gray-100 
         auto-cols-max grid-flow-col auto-rows-auto gap-x-2"
      >
        {playlists?.slice(0, showMore ? playlists.length : 5).map((playlist) => (
          <PlaylistSearchItem key={v4()} playlist={playlist} />
        ))}
      </div>
    </div>
  );
};

export default PlaylistsSearch;
