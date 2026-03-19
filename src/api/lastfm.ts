import type { Artist } from "../types/artist";
export const fetchArtist = async (name: string): Promise<Artist | null> => {
  const infoUrl = `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${name}&api_key=${import.meta.env.VITE_LASTFM_API_KEY}&format=json`;
  const tracksUrl = `https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${name}&api_key=${import.meta.env.VITE_LASTFM_API_KEY}&format=json`;

  const results = await Promise.allSettled([fetch(infoUrl), fetch(tracksUrl)]);
  let infoData;
  let tracksData;

  if (results[0].status === "fulfilled") {
    infoData = await results[0].value.json();
  }
  if (results[1].status === "fulfilled") {
    tracksData = await results[1].value.json();
  }
  if (!infoData || !tracksData ) return null;
  return {
    name: infoData.artist.name,
    listeners: Number(infoData.artist.stats.listeners),
    playcount: Number(infoData.artist.stats.playcount),
    image: infoData.artist.image.find(
      (imag: { "#text": string; size: string }) => imag.size === "large",
    )?.["#text"],
    tags: infoData.artist.tags.tag.map(
      (t: { name: string; url: string }) => t.name,
    ),
    tracks: tracksData.toptracks.track.map(
      (tr: { name: string; playcount: number;artist: { name: string }  }) => ({
        name: tr.name,
        playcount: Number(tr.playcount),
        artist: tr.artist.name
      }),
    ),
   
  };
};
