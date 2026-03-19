import {createContext} from "react";
import type {ReactNode} from "react";
import { useAllArtist } from "../hooks/useAllArtists";

export const StatContext=createContext<StatContextType | undefined>(undefined);
interface StatContextType{
    artists:Artist[]
    totalListeners:number
    selectedArtist:string[]
    setSelectedArtist:React.Dispatch<React.SetStateAction<string[]>>
    error: string | null
  loading: boolean
  colors:colors[]

}
export  function StatProvider({children}: {children :ReactNode}=>{
     const { artists, error, loading } = useAllArtist()
    
  const colors = ["#ff4d8d", "#a78bfa", "#2dd4bf", "#fbbf24", "#64748b"];
  const totalListeners = artists.reduce((acc, artist) => acc + artist.listeners, 0)
   const mostPlayed = artists.reduce(
    (acc, artist) => (artist.playcount > acc.playcount ? artist : acc),
    artists[0],
   )
   return (
    <StatContext.Provider value={{ artists, totalListeners, error, loading, selectedArtist, setSelectedArtist }}>
      {children}
    </StatContext.Provider>
   )

})