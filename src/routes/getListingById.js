import Boom from "@hapi/boom";
import { db } from "../database";


export const getListingByIdRoute = {
    method: 'GET',
    path: '/api/listings/{id}',
    handler: async (request, h) => {
        const listingId = request.params.id;
        const [rows] = await db.query('SELECT * FROM listing WHERE id=?', [listingId]);
        const listing = rows[0];
        if (!listing) throw Boom.notFound(`Listing doesn't exist for id ${listingId}`);
        return listing;
    }
}

