import { useState, useEffect } from "react";
import type { Artist } from "../types/artist";
import { fetchArtist } from "../api/lastfm";

const artistNames = ["BTS", "BLACKPINK", "TWICE", "Stray Kids", "SEVENTEEN", "ITZY"];
export const useAllArtist = () => {
  
  const [artists, setArtists] = useState<Artist[]>([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await Promise.allSettled(
          artistNames.map((name) => fetchArtist(name)),
        );
        const successful = data
          .filter((r) => r.status === "fulfilled")
          .map((r) => (r as PromiseFulfilledResult<Artist>).value);
        setArtists(successful);
      } catch (err) {
        setError("Error" + err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return { artists, loading, error };
};
