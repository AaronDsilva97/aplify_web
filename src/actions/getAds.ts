"use server";

import { AdResponse } from "@/types/AdsResponse";

export async function getAds(
  page = 1,
  limit = 20,
  latitude = 20.5937,
  longitude = 78.9629,
  category = "all",
  cache: RequestCache = "default"
) {
  try {
    const res = await fetch(
      "https://api.aplify.in/advertisements/searchAndFilter",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          latitude: latitude,
          longitude: longitude,
          page: page,
          limit: limit,
          category: category,
        }),
        cache: cache,
      }
    );

    if (!res.ok) {
      throw new Error("Something went wrong");
    }

    return res.json() as Promise<AdResponse>;
  } catch (error) {
    console.log(error);
  }
}
