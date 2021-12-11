import { useMemo, useState, useEffect } from "react";
import { Streamer } from "../types/streamer";
import { getRandomNumber } from "../utils";
import STREAMERS_DATA from "../streamers.json";

export const useStreamers = () => {
  const [streamers, setStreamer] = useState<Streamer[]>(STREAMERS_DATA);

  const sortedData = useMemo(() => {
    return streamers.sort((a, b) => (a.score > b.score ? -1 : 1));
  }, [streamers]);

  useEffect(() => {
    const timer = setInterval(() => {
      setStreamer((streamers) => {
        return streamers.map((streamer) =>
          Object.assign(streamer, { score: getRandomNumber() })
        );
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return { streamers: sortedData };
};
