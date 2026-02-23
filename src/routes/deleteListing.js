import { db } from "../database";
import Boom from "@hapi/boom";

export const deleteListingRoute = {
    method: 'DELETE',
    path: '/api/listings/{id}',
    handler: async (request, h) => {
        const id = request.params.id;

        const [result] = await db.query('DELETE FROM listing WHERE id = ?', [id]);

        if (result.affectedRows !== 1) {
            throw Boom.notFound(`Listing with id ${id} not found`);
        }

        return h.response('Success!').code(204);
    }

}