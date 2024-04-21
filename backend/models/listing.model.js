import mongoose from "mongoose";

const listingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    regularPrice: {
      type: Number,
      required: true,
    },
    discountPrice: {
      type: Number,
      required: true,
    },
    bathrooms: {
      type: Number,
      required: true,
    },
    bedrooms: {
      type: Number,
      required: true,
    },
    no_of_floors: {
      type: Number,
      required: true,
    },
    basement_area: {
      type: Number,
      required: true,
    },
    living_area: {
      type: Number,
      required: true,
    },
    lot_area: {
      type: Number,
      required: true,
    },
    no_of_views: {
      type: Number,
      required: true,
    },
    waterfront_present: {
      type: Number,
      required: true,
    },
    built_year: {
      type: Number,
      required: true,
    },
    condition_of_house: {
      type: Number,
      required: true,
    },
    schools_nearby: {
      type: Number,
      required: true,
    },
    distance_from_airport: {
      type: Number,
      required: true,
    },
    furnished: {
      type: Boolean,
      required: true,
    },
    parking: {
      type: Boolean,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    offer: {
      type: Boolean,
      required: true,
    },
    imageUrls: {
      type: Array,
      required: true,
    },
    userRef: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Listing = mongoose.model("Listing", listingSchema);

export default Listing;
