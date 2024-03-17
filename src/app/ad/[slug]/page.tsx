import { getAdDetails } from "@/actions/fetchSingleAd";
import RelatedAds from "@/components/related-ads";
import CarouselComponent from "@/components/ui/carousel";
import { formatDistanceToNow } from "date-fns";
import React from "react";

interface AdsDetailPageProps {
  params: {
    slug: string;
  };
}

const AdsDetailPage: React.FC<AdsDetailPageProps> = async ({ params }) => {
  const { slug } = params;

  const adDetail = await getAdDetails(slug);

  const ad = adDetail.result;

  const date = ad.created_at ? new Date(ad.created_at) : new Date();
  const agoString = formatDistanceToNow(date, { addSuffix: true });

  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
              <CarouselComponent images={ad?.photos} slideInterval={1000} />
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              {ad?.subject}
            </h2>
            <div className="flex flex-col md:flex-row mb-4">
              <div className="mr-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Price:{" "}
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  ₹{ad?.price}
                </span>
              </div>
            </div>

            <div>
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Description:
              </span>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                {ad?.description}
              </p>
            </div>

            <div className="mt-4">
              <div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-orange-200 text-orange-700 rounded-full">
                {ad?.category?.name}
              </div>

              <div className="ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-orange-200 text-orange-700 rounded-full">
                {ad?.sub_category?.name}
              </div>
            </div>

            <div className="mt-4">
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Address:
              </span>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                {ad?.address}
              </p>
            </div>

            <div className="mt-4">
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Created At:
              </span>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                {agoString}
              </p>
            </div>

            <div className="mt-4">
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Post Id:
              </span>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                {ad?.post_id}
              </p>
            </div>
          </div>
        </div>
        <RelatedAds category={ad?.category?._id} />
      </div>
    </div>
  );
};

export default AdsDetailPage;
