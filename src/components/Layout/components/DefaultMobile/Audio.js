import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useContext} from "react";
import Song from "../../../../SongContext/Song";
import './custom.css'


function Audio({src}) {
    
    const songContext = useContext(Song);
    const {hat, handleDung,handleXoay, } = songContext;
   
    return ( 
        <div>
          <AudioPlayer  
          src={src} 
          showSkipControls={false}
          showJumpControls={true}
          onPause={handleDung}
          onPlay={handleXoay}
          customVolumeControls={[]}
          customAdditionalControls={[]} 
          autoPlayAfterSrcChange={hat}
          />
        </div>
     );
}

export default Audio;