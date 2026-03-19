import StatCard from "../components/StatCard";
import { useTopTracks } from "../hooks/useTopTracks";
import { formatNumber } from "../utils/formatter";
import SearchBar from "../components/SearchBar";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Cell,
  Tooltip, 
  Rectangle,
  ResponsiveContainer,
} from "recharts";
import {
 Music,
 Play,
 Clock4,
 TrendingUp, Search,
 ChevronDown,
  Check
} from "lucide-react";
import {useState} from "react";

const ArtistDetail = () => {
    const colors = ["#ff4d8d", "#a78bfa", "#2dd4bf", "#fbbf24", "#64748b"];
  const { topTracks, error, loading , artists} = useTopTracks();
    const [searchValue, setSearchValue]=useState("");
    const [sortFilter, setSortFilter]= useState(false);
  const [filter,setFilter]=useState(false);
const [isSelected, setisSelected]= useState("Most Streamed");
    const totalListeners = artists.reduce(
    (acc, artist) => acc + artist.listeners,
    0,
  );
  console.log(topTracks);
  const totalPlayCount= artists.reduce((acc,artist)=> acc + artist.playcount,0,);
  const averageListeners = totalListeners / artists.length;

  return (<>
  <div className="  min-h-screen p-8">
    <div className="grid grid-cols-1 gap-8">
      <div>
    <div>
       <h1 className="text-5xl mb-2">Top Tracks</h1>
      <p className="text-xl mb-8 text-gray-200">Browse and analyze the most sreamed K-pop tracks</p>
      </div>
      <div className="grid grid-cols-4 gap-4 items-stretch">
        <StatCard  label="Total Tracks"
            value={`${artists.length} `}
            icon={<Music className="bg-pink/10 rounded-lg text-pink" size={30}/>}
           
           />
        <StatCard label="Total Streams"
            value={`${formatNumber(totalPlayCount)} `}
            icon={<Play className="bg-green-400/20  rounded-lg text-green-400" size={30}/>}
            
           />
        <StatCard label="Avg. Streams"
            value={`${formatNumber(averageListeners)} `}
               icon={<TrendingUp className="bg-purple/10  rounded-lg text-purple" size={30} />}
         
           
            />
        <StatCard  
   label="#1 Track"
            icon={<Clock4  size={30}/>}
            value={`${topTracks[0]?.name} `}
      />
        </div>
        </div>

        <div>
          <ResponsiveContainer width="100%" height={600}>
            <BarChart responsive data={topTracks}  layout="vertical" >
               <XAxis   type="number" datakey="artist" tickFormatter={(value) => formatNumber(value)}/>
              <YAxis type="category" dataKey="name" width={100}/>
              <Tooltip  cursor={{ fillOpacity: 0.5 }} 
                     formatter={(value:number)=> formatNumber(value)} 
                     contentStyle={{backgroundColor:"#0a0a0f", borderRadius:"8px", color:"white"}} 
                     labelStyle={{color:"white"}} 
                     itemStyle={{color:"white"}}
                     
                    />
              <Bar dataKey="playcount" width="80%" nameKey="artist">{topTracks.map((track, index) => (
    <Cell key={track.name} fill={colors[index % colors.length]}/>))}</Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
   

     <div className="flex justify-around items-center relative">
      
    <SearchBar className="w-full" searchValue={searchValue} setSearchValue={setSearchValue}/>
    {/*Filter*/}
      <div className="flex ml-auto gap-2">
     
      <button onClick={()=>setSortFilter(!sortFilter)} 
      className="rounded-lg border  border-gray-100/10 text-white border-1/2 px-2 py-1 w-40 items-center hover:bg-teal flex items-center justify-between bg-card">{isSelected}<ChevronDown size={20}/></button>
     {sortFilter &&(
       <div className="absolute top-12 right-0 bg-card p-2 rounded-lg">
        <ul>
          <li onClick={()=>setisSelected("Most Streamed")} 
          className="hover:bg-teal flex items-center p-2 rounded-lg cursor-pointer gap-2">Most Streamed
          <Check size={18} className={`mr-2 text-gray-100/20 ${isSelected==='Most Streamed'? 'visible':'invisible'} `}/></li>
      
      <li  onClick={()=>setisSelected("Track Name")} 
      className="hover:bg-teal flex items-center p-2 rounded-lg cursor-pointer gap-2"> Track Name
      <Check size={18} className={`mr-2 text-gray-100/20 ${isSelected==='Track Name'? 'visible':'invisible'} `}/> </li>
      <li  onClick={()=>setisSelected("Artist Name")} 
      className="hover:bg-teal flex items-center p-2 rounded-lg cursor-pointer  gap-2"> Artist Name
      <Check size={18} className={`mr-2 text-gray-100/20 ${isSelected==='Artist Name'? 'visible':'invisible'} `}/></li>
     </ul>
      </div>
     )
     
}
      
      </div>
      </div>
       </div>


{/*Table*/}
       <div className=" overflow-x-auto  ">
        <table className=" w-full bg-card rounded-lg text-xl font-body ">
          <thead className="border-b border-white/20">
            <tr className="border-b text-gray-200 ">
              <th  className=" px-4 py-4 text-center">#</th>
              <th  className=" px-4 py-4 text-left">Track</th>
              <th  className=" px-4 py-4 text-center">Artist</th>
              <th  className=" px-4 py-4 text-center">PlayCount</th>
              <th  className=" px-4 py-4 text-center">Share</th>
              </tr>
            </thead>
            <tbody className="">
              {topTracks.map((track, index)=>(
              <tr key={name} className="hover:bg-background/20 border-b border-white/20 ">
                <td className=" px-4 py-4 text-center">{index+1}</td>
              
             
                <td className=" px-4 py-4 text-left"> 
                  <div className="flex gap-2 items-center justify-left">
                    <span className="block shrink-0  w-1 h-8 bg-teal rounded-lg "></span><span>{track.name}</span></div></td>
                
              
                <td className=" px-4 py-4 text-center">{track.artist}</td>
               
             
               <td className=" px-4 py-4 text-center">{formatNumber(track.playcount)}</td>
               
                <td className=" px-4 py-4 text-center">{formatNumber(track.playcount)}</td>
                
                </tr>
              ))
}
              </tbody>

        </table>
        </div>
    </div>
  
  </>
  )
};

export default ArtistDetail;
