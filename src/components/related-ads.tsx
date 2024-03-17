import { useEffect, useState } from "react";
import { AdResponse } from "@/types/AdsResponse";
import { Ads } from "./ads";
import { getAds } from "@/actions/getAds";

const RelatedAds = async (props: { category: string }) => {
  const { category } = props;
  const ads = (await getAds(
    1,
    4,
    undefined,
    undefined,
    category,
    "no-cache"
  )) as AdResponse;

  return (
    <div className="bg-gray-100 p-4">
      <h2 className="text-2xl font-bold mb-4">Related Ads</h2>

      {ads?.data?.docs ? <Ads ads={ads.data.docs} /> : <p>No ads found.</p>}
    </div>
  );
};

export default RelatedAds;
