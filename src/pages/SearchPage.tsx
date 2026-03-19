import SearchBar from "../components/SearchBar";
import { formatNumber } from "../utils/formatter";
import { useAllArtist } from "../hooks/useAllArtists";
import {useState} from "react";
import {
 TrendingUp,
Users

} from "lucide-react";
const SearchPage=()=>{

    const [searchValue, setSearchValue]=useState("");
    const {    artists} = useAllArtist();
   
    return (
        <>
        <div className="  min-h-screen p-8">
            <div className="grid grid-cols-1 space-y-10">
           {/*Title*/}     
            <div>
                 <div className="text-center">
       <h1 className="text-5xl mb-2">Search</h1>
      <p className="text-xl mb-8 text-gray-200">Find arists, tracks and tags across the K-pop universe</p>
      </div>
      {/*SearchBar*/}
                <SearchBar className="w-full" height="h-14" searchValue={searchValue} setSearchValue={setSearchValue}/>
                </div>

                {/*Butons Trending*/}
                <div>
                    <p className="flex gap-2 text-gray-100 items-center mb-4"><TrendingUp size={20}/>Trending Searches</p>
                    <div className=" flex">
                        <div className="group ">
                        <button className="rounded-lg bg-card/60 w-32 h-8 border border-1 border-gray-400/10 mr-4  group-hover:border-pink"><span className="group-hover:text-pink">BTS</span></button>
                        </div>
                        <div className="group ">
                        <button className="rounded-lg bg-card/60 w-32 h-8 border border-1 border-gray-400/10 mr-4 group-hover:border-pink"><span className="group-hover:text-pink">BLACKPINK</span></button>
                        </div>
                        <div className="group">
                        <button className="rounded-lg bg-card/60 w-32 h-8 border border-1 border-gray-400/10 mr-4 group-hover:border-pink"><span className="group-hover:text-pink">TWICE</span></button>
                       </div>
                       <div className="group">
                        <button className="rounded-lg bg-card/60 w-32 h-8 border border-1 border-gray-400/10 mr-4 group-hover:border-pink"><span className="group-hover:text-pink">STRAYKIDS</span></button>
                        </div>
                        <div className="group">
                        <button className="rounded-lg bg-card/60 w-32 h-8 border border-1 border-gray-400/10 mr-4 group-hover:border-pink"><span className="group-hover:text-pink">ILLIT</span></button>
                        </div>
                        <div className="group">
                        <button className="rounded-lg bg-card/60 w-32 h-8 border border-1 border-gray-400/10 mr-4 group-hover:border-pink"><span className="group-hover:text-pink">LESSERAFIM</span></button>
                        </div>
                        </div>
                    </div>

                    {/*Top Artist*/}
                    <div>
                        <p className="text-gray-100 flex gap-2 items-center mb-4"><Users size={20}/>Top Artists</p>
                        <div className="grid grid-cols-3 gap-4 items-stretch ">
                            <div className="group">
                            <div className="rounded-lg flex gap-8 bg-card p-8 border border-card  group-hover:border-pink">
                                <div className="w-6 h-6 rounded-full flex items-center justify-center bg-pink">{artists[0]?.name.slice(0,1)}</div>
                                <div className="flex flex-col"><span className="group-hover:text-pink">{artists[0]?.name}</span><span className="text-gray-400">{formatNumber(artists[0]?.listeners)} listeners</span></div>
                           </div>
                           </div>
                           <div className="group">
                                <div className="rounded-lg flex gap-8 bg-card p-8 border border-card  group-hover:border-pink">
                                <div className="w-6 h-6 rounded-full flex items-center justify-center bg-pink">{artists[1]?.name.slice(0,1)}</div>
                                <div className="flex flex-col"><span className="group-hover:text-pink">{artists[1]?.name}</span><span className="text-gray-400">{formatNumber(artists[1]?.listeners)} listeners</span></div>
                           </div>
                           </div>
                           <div className="group">
                                <div className="rounded-lg flex gap-8 bg-card p-8 border border-card  group-hover:border-pink">
                                <div className="w-6 h-6 rounded-full flex items-center justify-center bg-pink">{artists[2]?.name.slice(0,1)}</div>
                                <div className="flex flex-col"><span className="group-hover:text-pink">{artists[2]?.name}</span><span className="text-gray-400">{formatNumber(artists[2]?.listeners)} listeners</span></div>
                           </div>
                           </div>
                           <div className="group">
                                <div className="rounded-lg flex gap-8 bg-card p-8 border border-card  group-hover:border-pink">
                                <div className="w-6 h-6 rounded-full flex items-center justify-center bg-pink">{artists[3]?.name.slice(0,1)}</div>
                                <div className="flex flex-col"><span className="group-hover:text-pink">{artists[3]?.name}</span><span className="text-gray-400">{formatNumber(artists[3]?.listeners)} listeners</span></div>
                           </div>
                           </div>
                           <div className="group">
                                <div className="rounded-lg flex gap-8 bg-card p-8 border border-card  group-hover:border-pink">
                                <div className="w-6 h-6 rounded-full flex items-center justify-center bg-pink">{artists[4]?.name.slice(0,1)}</div>
                                <div className="flex flex-col"><span className="group-hover:text-pink">{artists[4]?.name}</span><span className="text-gray-400">{formatNumber(artists[4]?.listeners)} listeners</span></div>
                           </div>
                           </div>
                           <div className="group">
                                <div className="rounded-lg flex gap-8 bg-card p-8 border border-card  group-hover:border-pink">
                                <div className="w-6 h-6 rounded-full flex items-center justify-center bg-pink ">{artists[5]?.name.slice(0,1)}</div>
                                <div className="flex flex-col"><span className="group-hover:text-pink">{artists[5]?.name}</span><span className="text-gray-400">{formatNumber(artists[5]?.listeners)} listeners</span></div>
                           </div>
                           </div>
                         
        </div>
        
                    </div>

                    {/*Last Section */}
                    <div>
                        <div className="flex  justify-around align-center  gap-15 bg-card p-8 rounded-lg">
                            <div className="text-pink font-semibold text-2xl text-center">{artists.length} <div className="text-gray-400">Artists</div></div>
                            <div className="text-teal font-semibold text-2xl text-center"> 2<div className="text-gray-400">Tracks</div></div>
                            <div className="text-gray-200 font-semibold text-2xl text-center"> 3<div className="text-gray-400">Tags</div></div>
                            </div>
                        </div>

                        
                        </div>
            </div>
        </>
    )
}
export default SearchPage;