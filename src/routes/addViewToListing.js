import { db } from "../database";
import Boom from "@hapi/boom";

export const addViewToListingRoute = {
    method: 'PATCH',
    path: '/api/listings/{id}/views',
    handler: async (request, h) => {
        const listingId = request.params.id;
        const [rows] = await db.query('UPDATE listing SET views = views + 1 WHERE id=?', [listingId]);
        if (rows.changedRows !== 1) throw Boom.notFound(`Couldn't change the listing with id ${listingId}`);
        const [updatedResult] = await db.query('SELECT * FROM listing WHERE id=?', [listingId]);
        return updatedResult[0];
    }
}