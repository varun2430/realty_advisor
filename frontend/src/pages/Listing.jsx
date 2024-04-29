import { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { useSelector } from "react-redux";
import { Navigation } from "swiper/modules";
import "swiper/css/bundle";
import {
  FaBath,
  FaBed,
  FaChair,
  FaMapMarkerAlt,
  FaParking,
  FaRuler,
  FaShare,
} from "react-icons/fa";
import Contact from "../components/Contact";

// https://sabe.io/blog/javascript-format-numbers-commas#:~:text=The%20best%20way%20to%20format,format%20the%20number%20with%20commas.

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

export default function Listing() {
  const NODE_API_URL = import.meta.env.VITE_NODE_API_URL;
  SwiperCore.use([Navigation]);
  const location = useLocation();
  const [listing, setListing] = useState(location.state?.listing);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [copied, setCopied] = useState(false);
  const [contact, setContact] = useState(false);
  const params = useParams();
  const { currentUser } = useSelector((state) => state.user);

  return (
    <main>
      {loading && <p className="text-center my-7 text-2xl">Loading...</p>}
      {error && (
        <p className="text-center my-7 text-2xl">Something went wrong!</p>
      )}
      {listing && !loading && !error && (
        <div>
          <Swiper navigation>
            {listing.imageUrls.map((url) => (
              <SwiperSlide key={url}>
                <div
                  className="h-[550px]"
                  style={{
                    background: `url(${url}) center no-repeat`,
                    backgroundSize: "cover",
                  }}
                ></div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="fixed top-[13%] right-[3%] z-10 border rounded-full w-12 h-12 flex justify-center items-center bg-slate-100 cursor-pointer">
            <FaShare
              className="text-slate-500"
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                setCopied(true);
                setTimeout(() => {
                  setCopied(false);
                }, 2000);
              }}
            />
          </div>
          {copied && (
            <p className="fixed top-[23%] right-[5%] z-10 rounded-md bg-slate-100 p-2">
              Link copied!
            </p>
          )}
          <div className="flex flex-col max-w-4xl mx-auto p-3 my-7 gap-4">
            <p className="text-2xl text-slate-300 font-semibold">
              {listing.name}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <p className="text-md text-slate-300">Best Value at:</p>
                <p className=" text-xl text-slate-200 font-semibold">
                  ₹ &nbsp;
                  {listing.predictedPrice.toLocaleString("en-IN")}
                  {listing.type === "rent" && " / month"}
                </p>
              </div>
              <div className="flex flex-col">
                <p className=" text-lg text-slate-400">
                  {calculatePercentageDifference(
                    listing.predictedPrice,
                    listing.currentPrice
                  )}
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-md text-slate-300">Price:</p>
                <p
                  className={` text-xl ${
                    listing.predictedPrice - listing.currentPrice > 0
                      ? "text-green-500"
                      : listing.predictedPrice - listing.currentPrice < 0
                      ? "text-red-500"
                      : "text-slate-200"
                  } font-semibold`}
                >
                  ₹ &nbsp;
                  {listing.currentPrice.toLocaleString("en-IN")}
                  {listing.type === "rent" && " / month"}
                </p>
              </div>
            </div>
            <p className="flex items-center gap-2 text-gray-400  text-sm">
              <FaMapMarkerAlt className="text-green-600" />
              {listing.address}
            </p>
            <div className="flex gap-4">
              <p className="bg-red-900 w-full max-w-[200px] text-white text-center p-1 rounded-md">
                {listing.type === "rent" ? "For Rent" : "For Sale"}
              </p>
              {listing.offer && (
                <p className="bg-green-900 w-full max-w-[200px] text-white text-center p-1 rounded-md">
                  ${+listing.regularPrice - +listing.discountPrice} OFF
                </p>
              )}
            </div>
            <p className="text-gray-400">
              <span className="font-semibold text-gray-300">
                Description -{" "}
              </span>
              {listing.description}
            </p>
            <ul className="text-green-500 font-semibold text-sm flex flex-wrap items-center gap-4 sm:gap-6">
              <li className="flex items-center gap-1 whitespace-nowrap ">
                <FaBed className="text-lg" />
                {listing.bedrooms > 1
                  ? `${listing.bedrooms} beds `
                  : `${listing.bedrooms} bed `}
              </li>
              <li className="flex items-center gap-1 whitespace-nowrap ">
                <FaBath className="text-lg" />
                {listing.bathrooms > 1
                  ? `${listing.bathrooms} baths `
                  : `${listing.bathrooms} bath `}
              </li>
              <li className="flex items-center gap-1 whitespace-nowrap ">
                <FaRuler className="text-lg" />
                {`${listing.living_area} sq. ft `}
              </li>
              <li className="flex items-center gap-1 whitespace-nowrap ">
                <FaParking className="text-lg" />
                {listing.parking ? "Parking spot" : "No Parking"}
              </li>
              <li className="flex items-center gap-1 whitespace-nowrap ">
                <FaChair className="text-lg" />
                {listing.furnished ? "Furnished" : "Unfurnished"}
              </li>
            </ul>
            {currentUser && listing.userRef !== currentUser._id && !contact && (
              <button
                onClick={() => setContact(true)}
                className="bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 p-3"
              >
                Contact landlord
              </button>
            )}
            {contact && <Contact listing={listing} />}
          </div>
        </div>
      )}
    </main>
  );
}
