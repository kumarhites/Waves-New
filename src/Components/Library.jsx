import React, { useEffect } from "react";
import {BsPlayCircle, BsPauseCircle} from 'react-icons/bs'
import Player from './Player'

function Library({ songs, setSongs, currentSong, setCurrentSong, songInfo, setSongInfo}) {
    let isPlaying = false;
    const songSelectHandler = async (song) => {
        await setCurrentSong(song && {...song, isPlaying: !isPlaying})
    }
    useEffect(() => {
        const songPlaying = songs.map((song) => {
            if(song.id === currentSong.id){
                return{
                    ...song, 
                    isPlaying: true,
                }
            }
            else{
                return{
                    ...song, 
                    isPlaying: false,
                }
            }
        })
        setSongs(songPlaying)
    },[currentSong])


    return (
        <div className="flex flex-wrap items-center justify-center">
        {songs.map((song) => (
            <div key={song.id} className="p-3 text-white font-body text-xl" onClick={ () => songSelectHandler(song)}>
            <div className="max-w-sm rounded overflow-hidden shadow-l" style={{ width: "325px" }}>
                <img src={song.cover} className="w-full" />
                <div className="py-6 flex items-center justify-between">
                    <div className="antialiased">
                        <p className="text-[1rem] text-cyan-50 text-bold">{song.track}</p>
                        <p className="text-sm font-body text-neutral-400">{song.artistName}</p>
                    </div>
                    <div className="pr-6 cursor-pointer duration-500" >
                        {!song.isPlaying ? <BsPlayCircle size={40} className="pointer-events-none"/> : <BsPauseCircle size={40} className="pointer-events-none"/>}
                    </div>
                </div>
            </div>
            </div>
        ))}
        <Player currentSong={currentSong} songInfo={songInfo} setSongInfo={setSongInfo} setCurrentSong={setCurrentSong}/>
        </div>
  );
}

export default Library;
