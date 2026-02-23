import { getAllListingsRoute } from "./getAllListing";
import { getListingByIdRoute } from "./getListingById";
import { addViewToListingRoute } from "./addViewToListing";
import { getUserListingsRoute } from "./getUserListings";
import { createNewListingRoute } from "./createNewListing";
import { deleteListingRoute } from "./deleteListing";
import { updateListingRoute } from "./updateListing";

export default [
    getAllListingsRoute,
    getListingByIdRoute,
    addViewToListingRoute,
    getUserListingsRoute,
    createNewListingRoute,
    deleteListingRoute,
    updateListingRoute
]