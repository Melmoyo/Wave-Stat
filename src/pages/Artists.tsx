import SearchBar from "../components/SearchBar";
import {
  
  Funnel,
  ArrowBigDown,
  ArrowBigUp,
  Check
} from "lucide-react";
import { useAllArtist } from "../hooks/useAllArtists";
import { formatNumber } from "../utils/formatter";
import {useState} from "react";
const Artist = () => {
  const { artists } = useAllArtist();
  const [searchValue, setSearchValue]=useState<string>("");
  const [sortFilter, setSortFilter]= useState(false);
  const [filter,setFilter]=useState(false);
const [isSelected, setisSelected]= useState("Listeners");
  return (
    
  <div className="  min-h-screen p-8" >

    <div className="grid grid-cols-1 gap-8">

      <div>
      <h1 className="text-5xl mb-2">Artists</h1>
      <p className="text-xl mb-8 text-gray-200">Browse & analyze all tracked kpop artists</p>
      </div>
      
      <div className="flex justify-between items-center relative">
      <SearchBar className="w-96" searchValue={searchValue} setSearchValue={setSearchValue}/>
      {/*Filter*/}
      <div className="flex ml-auto gap-2">
      <button className="flex rounded-lg  border border-white px-2 py-1 w-20 items-center hover:bg-teal" ><Funnel size={20} className="mr-1" />Label</button>
      <button onClick={()=>setSortFilter(!sortFilter)} className="rounded-lg  border border-white px-2 py-1 w-25 items-center hover:bg-teal">Sort: {isSelected}</button>
     {sortFilter &&(
       <div className="absolute top-12 right-12 bg-card p-4 rounded-lg">
        <ul>
          <li onClick={()=>setisSelected("listeners")} className="hover:bg-teal flex items-center p-2 rounded-lg cursor-pointer"><Check size={18} className={`mr-2 ${isSelected==='Listeners'? 'visible':'invisible'} `}/>Monthly listeners</li>
      
      <li  onClick={()=>setisSelected("Followers")} className="hover:bg-teal flex items-center p-2 rounded-lg cursor-pointer"> <Check size={18} className={`mr-2 ${isSelected==='Followers'? 'visible':'invisible'} `}/>Followers </li>
      <li  onClick={()=>setisSelected("Engagement")} className="hover:bg-teal flex items-center p-2 rounded-lg cursor-pointer"> <Check size={18} className={`mr-2 ${isSelected==='Engagement'? 'visible':'invisible'} `}/>Engagement Rate</li>
      <li  onClick={()=>setisSelected("Name")} className="hover:bg-teal flex items-center p-2 rounded-lg cursor-pointer"> <Check size={18} className={`mr-2 ${isSelected==='Name'? 'visible':'invisible' }`}/>Name </li></ul></div>
     )
}
      <button onClick={()=>setFilter(!filter)}className="flex rounded-lg  border border-white h-10 w-10 items-center justify-center hover:bg-teal">{ filter ? (<ArrowBigDown size={20} />):(<ArrowBigUp size={20} />)}</button>
      </div>
      </div>

      {/*Table*/}
      <div className="overflow-x-auto">
        <table className="w-full bg-card rounded-lg text-xl font-body ">
          <thead className="border-b border-white/20">
            <tr className="text-gray-200 ">
              <th className=" px-4 py-4 ">Rank</th>
              <th className="px-4 py-4 text-left">Artist</th>
              <th className="px-4 py-4 ">Label</th>
              <th className="px-4 py-4">Monthly Listeners</th>
              <th className="px-4 py-4">Followers</th>
              <th className="px-4 py-4">Engagement</th>
              <th className="px-4 py-4">Growth</th>
              </tr>
            </thead>
            <tbody>
              {artists.map((artist, index)=>(
              <tr key={artist.name} className="hover:bg-background/20 border-b border-white/20" >
                <td className="px-4 py-4 text-center text-gray-200">
                 #{index+1}
                  </td>
                 
                  <td className="px-4 py-4  font-semibold flex items-center justify-left gap-2 ">
                   <div className="bg-pink/40 text-pink rounded-full w-8 h-8 flex justify-center items-center"> {artist.name.slice(0,1)}</div><div>{artist.name}</div>
                  </td>
                  
                  <td className="px-4 py-4 text-center text-gray-200  ">
                    {artist.name}
                  </td>
                  <td className="px-4 py-4 text-center">
                    {formatNumber(artist.listeners)}
                  </td>
                  <td className="px-4 py-4 text-center">
                    {artist.name}
                  </td>
                  <td className="px-4 py-3 text-center text-pink">
                    {artist.name}
                  </td>
                  <td className="px-4 py-4 text-center text-green-400">
                    {artist.name}
                  </td>
                </tr>
                ))}
              </tbody>
          </table>
        </div>
      <div className="text-gray-200 text-center">Showing {artists.length} of {artists.length}</div>
      </div>

      
    </div>
    
  )
  
};

export default Artist;
