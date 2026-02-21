import Boom from "@hapi/boom";
import { fakeListings } from "./fake-data";

export const getAllListingsRoute = {
    method: 'GET',
    path: '/api/listings',
    handler: (req, res) => {
        if (!fakeListings) throw Boom.unauthorized('Unauthorized!')
        return fakeListings;
    }
}