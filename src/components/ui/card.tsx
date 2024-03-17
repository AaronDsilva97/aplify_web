"use client";

import { formatDistanceToNow } from "date-fns";
import { Card } from "flowbite-react";
import Link from "next/link";

interface CardComponentProps {
  imgAlt: string;
  imgSrc: string;
  title: string;
  description: string;
  price: string;
  location: string;
  createdAt: number;
  id: string;
}

function CardComponent({
  id,
  imgAlt,
  imgSrc,
  title,
  price,
  description,
  location,
  createdAt,
}: CardComponentProps) {
  const date = createdAt ? new Date(createdAt) : new Date();
  const agoString = formatDistanceToNow(date, { addSuffix: true });
  return (
    <Link href={`/ad/${id}`}>
      <Card className="max-w-sm">
        <div style={{ height: "200px", overflow: "hidden" }}>
          <img
            src={imgSrc}
            alt={imgAlt}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </div>

        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900 dark:text-white">
            ₹{price}
          </span>

          <div className="text-xs"> {agoString}</div>
        </div>

        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-1">
          {title}
        </h5>

        <div className="text-gray-500 overflow-hidden text-ellipsis line-clamp-1">
          {description}
        </div>

        <span className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path d="M12 2c-4.418 0-8 3.582-8 8 0 6.307 7.444 13.05 7.722 13.348a1 1 0 0 0 1.556 0c.278-.298 7.722-7.041 7.722-13.348 0-4.418-3.582-8-8-8zm0 11.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
          <span className="ml-1 text-xs">{location}</span>
        </span>
      </Card>
    </Link>
  );
}

export default CardComponent;
