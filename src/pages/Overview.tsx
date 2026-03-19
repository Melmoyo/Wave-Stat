import { useAllArtist } from "../hooks/useAllArtists";
import StatCard from "../components/StatCard";
import { formatNumber } from "../utils/formatter";
import { PieChart, Pie} from 'recharts';
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
import type { BarShapeProps } from "recharts";
const Overview = () => {
  const { artists, loading } = useAllArtist();


  if (loading) {
    return <div>Loading</div>;
  }
  const totalListeners = artists.reduce(
    (acc, artist) => acc + artist.listeners,
    0,
  );
  const topArtist = artists.reduce(
    (acc, artist) => (artist.listeners > acc.listeners ? artist : acc),
    artists[0],
  );
  const mostPlayed = artists.reduce(
    (acc, artist) => (artist.playcount > acc.playcount ? artist : acc),
    artists[0],
  );
  
  const colors = ["#ff4d8d", "#a78bfa", "#2dd4bf", "#fbbf24", "#64748b"];
  const chartData = artists.map((artist) => ({
    name: artist.name,
    listeners: artist.listeners,
  }));
  const CustomRectangle = (props: BarShapeProps) => {
    return <Rectangle {...props} fill={colors[props.index]} />;
  };
  const top5Artists = [...artists]
    .sort((a, b) => b.listeners - a.listeners)
    .slice(0, 5);

    const genreCounts = artists.reduce((acc, artist) => {
  artist.tags.forEach(tag => {
    acc[tag] = (acc[tag] || 0) + 1
  })
  return acc
}, {} as Record<string, number>)
  const genreData = Object.entries(genreCounts).map(([name, value]) => ({
  name,
  value
}))
const total = genreData.reduce((acc, data) => acc + data.value, 0)
const genreDataWithPct = genreData.map(data => ({
  name: data.name,
  value: data.value,
  percentage: Math.round((data.value / total) * 100)
}))

  return (
    <>
      <div className="  min-h-screen p-8">
        <h1 className="text-5xl mb-8">Overview</h1>
        <div className="grid grid-cols-4 gap-4 items-stretch">
          <StatCard
            label="Artists Tracked"
            value={`${artists.length} `}
            border="border-t-4 border-t-pink"
            subtitle="Active in database"
            valueColor="text-pink"
          />
          <StatCard
            label="Total Listeners"
            value={formatNumber(totalListeners)}
            border="border-t-4 border-t-purple"
            subtitle="Combined monthly"
            valueColor="text-purple"
          />
          <StatCard
            label="Top Artist"
            value={topArtist?.name}
            border="border-t-4 border-t-teal"
            subtitle="Most listeners"
            valueColor="text-teal"
          />
          <StatCard
            label="Trending"
            value={mostPlayed?.name}
            border="border-t-4 border-t-amber"
            subtitle="Highest growth"
            valueColor="text-amber"
          />
        </div>

        <div className="grid grid-cols-3 gap-6 mt-4">
          <div className="col-span-2">
           <h2 className="text-white uppercase mb-4 text-sm ">
                Monthly Listeners
              </h2>
          <div  className="relative z-50 p-4 rounded-lg col-span-2  ">
            <ResponsiveContainer width="100%" height={300}>
             
              <BarChart responsive data={chartData} >
                <CartesianGrid strokeDasharray=" 4 4" />
<Tooltip cursor={{ fillOpacity: 0.5 }} 
formatter={(value) => Number(value).toLocaleString()}
contentStyle={{backgroundColor:"#0a0a0f", borderRadius:"8px", color:"white"}} 
labelStyle={{color:"white"}} 
itemStyle={{color:"white"}} />
                <XAxis dataKey="name" />
                <YAxis width="auto" />
                <Bar dataKey="listeners" width="30%" shape={CustomRectangle} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          </div>
          <div className="bg-card/20 p-8 rounded-lg max-w-sm col-span-1">
            <h2 className="text-2xl">Top 5 Artists</h2>
            <div className="w-full grid grid-cols-1">
              <ul >
                {top5Artists.map((artist, index) => (
                  <li key={artist.name} className="">
                    <div className="flex items-center gap-4 mb-4">
                    <span>{index + 1}</span>
                    <span className="flex-1">{artist.name}</span>
                    <span>{formatNumber(artist.listeners)}</span>
                    </div>
                    <div className="bg-gray-200 rounded-full">
                    <div
                      className="rounded-full w-full h-1"
                      style={{
                        width: `${(artist.listeners/top5Artists[0].listeners)*100}%`,
                        backgroundColor: colors[index],
                      }}
                    ></div>
                    </div>
                    
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-x-4">
       
           
              {/*First card*/} 
            <div className="bg-card flex gap-x-10 p-8 rounded-lg   font-mono">
              <div className="uppercase text-3xl bg-pink/20 text-pink p-4 w-20 flex justify-center items-center h-20 rounded-lg">{top5Artists[0].name.slice(0,1)}</div>
              <div>
                <div className="text-2xl ">{top5Artists[0].name}</div>
                <div className="text-xl">{formatNumber(top5Artists[0].listeners)}</div>
                <div className="flex text-lg"><div className="">{top5Artists[0].tags.slice(0,2).map((tag, i) => (
    <span key={i} className="bg-gray-400 px-2 py-1 rounded text-sm mr-4">{tag}</span>))}</div>
              </div>
              </div>
              </div>

          
                {/*Second card*/} 
           <div className="bg-card flex gap-x-10 p-8 rounded-lg  font-mono">
          <div className="uppercase text-3xl bg-purple/20 text-purple p-4 w-20 flex justify-center items-center h-20 rounded-lg">{top5Artists[1].name.slice(0,1)}</div>
 <div>
                <div className="text-2xl ">{top5Artists[1].name}</div>
                <div className="text-xl">{formatNumber(top5Artists[1].listeners)}</div>
                <div className="flex text-lg"><div className="">{top5Artists[1].tags.slice(0,2).map((tag, i) => (
    <span key={i} className="bg-gray-400 px-2 py-1 rounded text-sm mr-4">{tag}</span>))}</div></div>
              </div>
           </div>

           {/*Third card Pie Chart*/} 
           <div className="bg-card flex gap-x-10  rounded-lg  items-center font-mono ">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Tooltip contentStyle={{backgroundColor:"#0a0a0f", borderRadius:"8px", color:"white"}}/>
                <Pie data={genreData} dataKey="value" nameKey="name" outerRadius="80%" innerRadius="60%">
                 {genreData.map((_, index)=>(
                  <Cell key={index} fill={colors[index % colors.length]}/>
                 ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
<div className="m-8">
  <ul>
   {genreDataWithPct.map((data, index) => (
    <li key={data.name} className="flex items-center gap-2 text-sm mb-2">
      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: colors[index] }}/>
      <span className="flex-1 text-white/60">{data.name}</span>
      <span className="font-mono text-white/40">{data.percentage}%</span>
    </li>
   ))}
    </ul>

</div>
           </div>
           
          
    </div>
    </div>
    </>
  );
};

export default Overview;
