import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { useEffect, useState } from "react";

const calculatePercentageDifference = (a, b) => {
  const difference = b - a;
  const percentageDifference = (difference / Math.abs(a)) * 100;

  if (difference > 0) {
    return `+${percentageDifference.toFixed(2)}%`;
  } else if (difference < 0) {
    return `${percentageDifference.toFixed(2)}%`;
  } else {
    return "0%";
  }
};

export default function ListingItem({ listing }) {
  const PYTHON_API_URL = import.meta.env.VITE_PYTHON_API_URL;
  const currentPrice = listing.offer
    ? listing.discountPrice
    : listing.regularPrice;
  const [predictedPrice, setPredictedPrice] = useState(currentPrice);

  useEffect(() => {
    const fetchPrediction = async () => {
      try {
        const res = await fetch(`${PYTHON_API_URL}/predict_price/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            area: listing.living_area,
            bedrooms: listing.bedrooms,
            bathrooms: listing.bathrooms,
            furnishing: listing.furnished,
            parking: listing.parking,
          }),
        });
        const data = await res.json();
        if (data.success === false) {
          return;
        }
        setPredictedPrice(Math.round(data["predicted_price"]));
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchPrediction();
  }, []);

  return (
    <div className="bg-zinc-800 shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]">
      <Link to={`/listing/${listing._id}`}>
        <img
          src={
            listing.imageUrls[0] ||
            "https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/Sales_Blog/real-estate-business-compressor.jpg?width=595&height=400&name=real-estate-business-compressor.jpg"
          }
          alt="listing cover"
          className="h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300"
        />
        <div className="p-3 flex flex-col gap-2 w-full">
          <p className="truncate text-lg font-semibold text-slate-300">
            {listing.name}
          </p>
          <div className="flex items-center gap-1">
            <MdLocationOn className="h-4 w-4 text-green-600" />
            <p className="text-sm text-gray-400 truncate w-full">
              {listing.address}
            </p>
          </div>
          <p className="text-sm text-gray-400 line-clamp-2">
            {listing.description}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <p className="text-sm text-slate-300">Best Value at:</p>
              <p className="text-slate-200 font-semibold ">
                ₹ &nbsp;
                {predictedPrice.toLocaleString("en-IN")}
                {listing.type === "rent" && " / month"}
              </p>
            </div>
            <div className="flex flex-col">
              <p>
                {calculatePercentageDifference(predictedPrice, currentPrice)}
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-sm text-slate-300">Price:</p>
              <p
                className={`${
                  predictedPrice - currentPrice > 0
                    ? "text-green-500"
                    : predictedPrice - currentPrice < 0
                    ? "text-red-500"
                    : "text-slate-200"
                } font-semibold`}
              >
                ₹ &nbsp;
                {currentPrice.toLocaleString("en-IN")}
                {listing.type === "rent" && " / month"}
              </p>
            </div>
          </div>
          <div className="text-slate-300 flex gap-4">
            <div className="font-bold text-xs">
              {listing.bedrooms > 1
                ? `${listing.bedrooms} beds `
                : `${listing.bedrooms} bed `}
            </div>
            <div className="font-bold text-xs">
              {listing.bathrooms > 1
                ? `${listing.bathrooms} baths `
                : `${listing.bathrooms} bath `}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
