import { fakeListings } from "./fake-data";
import Boom from "@hapi/boom";


export const getListingByIdRoute = {
    method: 'GET',
    path: '/api/listings/{id}',
    handler: (req, res) => {
        const listingId = req.params.id;
        const listing = fakeListings.find(listing => listing.id === listingId);
        if (!listing) throw Boom.notFound(`Listing doesn't exist for id ${listingId}`);
        return listing;
    }
}

