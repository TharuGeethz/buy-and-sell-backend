import { db } from "../database";
import Boom from "@hapi/boom";

export const updateListingRoute = {
    method: 'PUT',
    path: '/api/listings/{id}',
    handler: async (req, h) => {
        const { name, description, price, user_id } = req.payload;
        const id = req.params.id;

        const [result] = await db.query("UPDATE listing SET name = ?, description = ?, price=?, user_id=? WHERE id=?",
            [name, description, price, user_id, id]
        );

        if (result.affectedRows !== 1)
            throw Boom.notFound(`Listing with id ${id} not found`);

        const [rows] = await db.query("SELECT * FROM listing WHERE id=?", [id]);

        return h.response(rows[0]).code(200);
    }
}