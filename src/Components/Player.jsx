import React from "react";
import {BsPlayCircle, BsPauseCircle} from "react-icons/bs";

function Player({currentSong, setCurrentSong}) {

    const handlePlayPause = () => {
        setCurrentSong(currentSong => [{...currentSong, isPlaying: !currentSong.isPlaying}]);
    }
    
return (
<div className="flex flex-wrap items-center backdrop-blur-lg sticky bottom-0 left-0 w-full border-slate-300/10  ring-white/10 ring-inset">
    {currentSong.isPlaying ? <div className="flex justify-between w-full">
        <div className="flex items-center">
            <img className="w-24 rounded-sm" src={currentSong.cover} />
            <div>
                <p className="text-white antialiased font-body pl-3">{currentSong.track}</p>
                <p className="text-white antialiased font-body pl-3 text-sm">{currentSong.artistName}</p>
            </div>
        </div>
        <div className="flex items-center pr-10 text-white subpixel-antialiased">
        {!currentSong.isPlaying ? <BsPlayCircle size={40} className="cursor-pointer" onClick={handlePlayPause}/> : <BsPauseCircle size={40} className="cursor-pointer"  onClick={handlePlayPause}/>}
        </div>
    </div> : ""}
</div>
);
}

export default Player;