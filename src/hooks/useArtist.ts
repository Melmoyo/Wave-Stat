import { useState, useEffect } from "react";

import { fetchArtist } from "../api/lastfm";
const artistNames = ["BTS", "BLACKPINK", "TWICE", "Stray Kids", "SEVENTEEN", "ITZY"]
export const useArtist = (name: string) => {
  const [artist, setArtist] = useState<Artist | null>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchArtist(name);
        if (data) {
          setArtist(data);
        }
      } catch (err) {
        setError("Error" + err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [name]);
  return { artist, loading, error };
};
