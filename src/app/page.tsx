import { getAds } from "../actions/getAds";
import { LoadMore } from "@/components/load-more-ads";
import { Ads } from "@/components/ads";

const NUMBER_OF_ADS_TO_FETCH = 20;
export default async function AdsPage() {
  const adsData = await getAds(1, NUMBER_OF_ADS_TO_FETCH);
  console.log(adsData?.data.docs);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <Ads ads={adsData?.data?.docs ?? []} />
      <div className="mt-4">
        <LoadMore />
      </div>
    </div>
  );
}
