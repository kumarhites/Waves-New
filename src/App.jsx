//styles
import "./App.css";

//components
import { useRef, useState, useEffect } from "react";
import { getSongs } from "./api/index";
import Nav from "./Components/Nav";
import Library from "./Components/Library";


function App() {
  //Ref
  const audioRef = useRef(null)
  //states
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animatioPercentage: 0,
  });

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    //calculate the percentage for slider animation
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animationPercentage = Math.round((roundedCurrent / roundedDuration) * 100)
    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration: duration,
      animationPercentage
    })
  }


  useEffect(() => {
    getSongs().then((songs) => {
      console.log(songs);
      setSongs(songs);
    });
    
  }, []);



  return (
    <div className="container mx-auto">
      <Nav />
      <Library songs={songs} setSongs={setSongs} currentSong={currentSong} setCurrentSong={setCurrentSong} songInfo={songInfo} setSongInfo={songInfo} isPlaying={isPlaying} setIsPlaying={isPlaying}/>
      <audio
        onLoadedMetadata={timeUpdateHandler}
        onTimeUpdate={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.url}
        // onEnded={songEndedHandler}
        preload="metadata"
        ></audio>
    </div>
  )
}

export default App;