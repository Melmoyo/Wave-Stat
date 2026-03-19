import {
  Search
 
} from "lucide-react";


const SearchBar = ({className="", searchValue,setSearchValue, height="h-10"}:className?: string;
  searchValue: string;
  setSearchValue: (value: string) => void;
  height?: string;) => {
  
  return <>
  <div className={`${className} `}>
    <div className=" flex relative w-full">
      {!searchValue &&( <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-200"/>)}
      <input type="text" placeholder="Search artist..." className={` ${!searchValue? "pl-10": "pl-4"} rounded-lg ${height} bg-card  w-full`} value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}/>
      
      </div>
    </div>
  </>;
};

export default SearchBar;
