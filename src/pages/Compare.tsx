import { useAllArtist } from "../hooks/useAllArtists";
import { formatNumber } from "../utils/formatter";
import {
 X,
 Plus,
 ChevronDown
} from "lucide-react";
import {useState} from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,

  Cell,
  Tooltip, 

  ResponsiveContainer,
} from "recharts";
const Compare = () => {
    const { artists} = useAllArtist();
    const [addArtist, setAddArtist] = useState(false);
    const [selectedArtist,setSelectedArtist]=useState<string[]>([]);
    const colors = ["#ff4d8d", "#a78bfa", "#2dd4bf", "#fbbf24", "#64748b"];
    const handleSelect=(sa:string)=>{
      if(selectedArtist.length>=4) return;
      setSelectedArtist([...selectedArtist, sa]);
      setAddArtist(!addArtist);

     
    }
 
    const handleRemove=((sa:string)=>{
      setSelectedArtist(selectedArtist.filter((i)=> i !== sa))

    })
    

  return (
  <>
  <div className=" min-h-screen p-8">
    <div>
       <h1 className="text-5xl mb-2">Compare</h1>
      <p className="text-xl mb-8 text-gray-200">Side-by-side comparison of up to 4 artists</p>
      </div>
      {/*Buttons*/}
      <div className="flex gap-x-8 ml-auto ">
        {selectedArtist.map((sa:string, index)=>(
    <button 
    style={{ borderColor: colors[index % colors.length],backgroundColor: `${colors[index % colors.length]}10`}} 
    key={sa} className="flex items-center rounded-3xl border  w-40 p-2 justify-between">
      <div 
      style={{borderColor: colors[index % colors.length], 
        backgroundColor: `${colors[index % colors.length]}80`}}  
        className=" rounded-full w-2 h-2 flex p-4 justify-center items-center mr-2">{sa.slice(0,1)}</div>{sa}
        <X size={20} onClick={()=>handleRemove(sa)} className="mx-auto"/></button>
        ))}
    
        <div className="relative">
          { selectedArtist.length<4 &&(
        <button  onClick={()=>setAddArtist(!addArtist)} className="flex items-center rounded-lg border border-white w-30 p-2 hover:bg-teal"><Plus size={20}/>Add Artist<ChevronDown size={20}/></button>
          )}
          {/*Dropdown */}
       {addArtist &&( <div className="overflow-y-auto absolute top-12 right-0 fixed -mx-2  bg-card  rounded-lg z-50">
          <ul>
             {artists.filter(artist => !selectedArtist.includes(artist.name)).map((artist, index) => (
            <li onClick={()=>handleSelect(`${artist.name}`)}
            
             className="hover:bg-teal rounded-lg w-auto cursor-pointer p-2 flex gap-2"
             key={artist.name}>
              <div 
              style={{ backgroundColor: colors[index % colors.length]}}
              className=" rounded-full w-4 h-4 flex p-4 justify-center items-center">
                 {artist.name.slice(0,1)}</div><div  style={{  color: colors[index % colors.length] }}>{artist.name}</div></li>
            ))
}
          </ul>
        </div>
       )}
        </div>

        
        </div>
         {/*Monthly Listeners*/}
         {selectedArtist.length > 0 && (
        <div className="  mt-4 p-8 grid grid-cols-2 gap-20">
          
              <div className=" p-4 rounded-lg bg-card">
                 <h2 className="text-white/70 uppercase mb-4 text-md font-mono font-semibold">
                Monthly Listeners
              </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart responsive data={selectedArtist.map((sa:string)=>artists.find(a=>a.name===sa)?? {})}  layout="vertical" >
             
              <XAxis   type="number" tickFormatter={(value) => formatNumber(value)}/>
              <YAxis type="category" dataKey="name" width={100}/>
              <Tooltip cursor={{ fillOpacity: 0.5 }} formatter={(value) => Number(value).toLocaleString()} contentStyle={{backgroundColor:"#0a0a0f", borderRadius:"8px", color:"white"}} labelStyle={{color:"white"}} itemStyle={{color:"white"}}/>
              <Bar dataKey="listeners" width="20%"  >{selectedArtist.map((_, index) => (
    <Cell key={index} fill={colors[index % colors.length]} />
  ))}</Bar>
              </BarChart>
            </ResponsiveContainer>
            </div>

            {/*PlayCount */}
            <div className=" p-4 rounded-lg bg-card">
              <h2 className="text-white/70 uppercase mb-4 text-md font-mono font-semibold ">
              PlayCount
              </h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart responsive data={selectedArtist.map((sa:string)=>artists.find(a=>a.name===sa)?? {})}  layout="vertical">
        
                    <XAxis type="number" tickFormatter={(value) => formatNumber(value)}/>
                    <YAxis type="category" dataKey="name" width={100}/>
                     <Tooltip 
                     cursor={{ fillOpacity: 0.5 }} 
                     formatter={(value) => Number(value).toLocaleString()}
                     contentStyle={{backgroundColor:"#0a0a0f", borderRadius:"8px", color:"white"}} 
                     labelStyle={{color:"white"}} 
                     itemStyle={{color:"white"}}/>
                    <Bar 
                    dataKey="playcount" 
                    width="30%"  >{selectedArtist.map((_, index) => (
    <Cell key={index} fill={colors[index % colors.length]} />
  ))}</Bar>
                   
                  </BarChart>
                </ResponsiveContainer>
              </div>
            
          </div>
        )}
    </div>
      </div>
        
  </>
  )
};

export default Compare;
