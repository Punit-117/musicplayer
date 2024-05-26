import { createContext ,useState } from "react";

const Player = createContext();

const PlayerContext = ({children}) =>{

    const [currenttrack, setcurrenttrack] = useState(null);
    
    return(
        <Player.Provider value={{currenttrack,setcurrenttrack}}>
            {children}
        </Player.Provider>
    )
}

export {PlayerContext, Player};