
import { useAllArtist } from "../hooks/useAllArtists";


export const useTopTracks=()=>{
      const { artists, error, loading } = useAllArtist();
    
    
//     if (loading) {
//     return <div>Loading</div>;
//   }
   const topTracks = artists?.flatMap(artist => artist.tracks)
    .sort((a, b) => b.playcount - a.playcount)
    .slice(0, 10) ??[]

  return { topTracks, loading, error,artists }
}
  
