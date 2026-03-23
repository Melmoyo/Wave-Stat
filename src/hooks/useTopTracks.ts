import {useMemo} from "react"
import { useAllArtist } from "../hooks/useAllArtists";


export const useTopTracks=()=>{
      const { artists, error, loading } = useAllArtist();
    
   const topTracks = useMemo(()=>artists?.flatMap(artist => artist.tracks)
    .sort((a, b) => b.playcount - a.playcount)
    .slice(0, 10) ??[]
,[artists])
  return { topTracks, loading, error,artists }
}
  
