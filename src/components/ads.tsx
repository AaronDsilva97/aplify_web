"use client";

import Card from "@/components/ui/card";

export interface AdsProps {
  ads: any[] | null;
}

export function Ads({ ads }: AdsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {ads?.map((ad: any) => {
        return (
          <Card
            key={ad._id}
            id={ad._id}
            createdAt={ad.created_at}
            title={ad.subject}
            price={ad.price}
            description={ad.description}
            imgSrc={ad.photos[0]}
            imgAlt={ad.subject}
            location={ad.address}
          />
        );
      })}
    </div>
  );
}
