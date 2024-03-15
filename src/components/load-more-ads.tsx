"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Spinner from "@/components/ui/spinner";
import { getAds } from "@/actions/getAds";

import { Ads } from "./ads";

export function LoadMore() {
  const [ads, setAds] = useState<any[]>([]);
  const [location, setLocation] = useState({
    latitude: 20.5937,
    longitude: 78.9629,
  });
  const [page, setPage] = useState(2);

  const { ref, inView } = useInView();

  const loadMoreAds = async () => {
    const { latitude, longitude } = location;
    const newAds = (await getAds(page, 20, latitude, longitude)) ?? [];
    setAds((prevAds: any[]) => [...prevAds, ...newAds?.data?.docs]);
    if (newAds?.data?.hasNextPage) {
      setPage(newAds?.data?.nextPage);
    }
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const { latitude, longitude } = coords;
        setLocation({ latitude, longitude });
      });
    }
  }, []);

  useEffect(() => {
    if (inView) {
      loadMoreAds();
    }
  }, [inView]);

  return (
    <>
      <Ads ads={ads} />
      <div
        className="flex justify-center items-center p-4 col-span-1 sm:col-span-2 md:col-span-3"
        ref={ref}
      >
        <Spinner />
      </div>
    </>
  );
}
