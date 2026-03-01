import { db } from "../database";
import Boom from "@hapi/boom";

export const createNewListingRoute = {
    method: 'POST',
    path: '/api/listings',
    handler: async (request, h) => {
        const { name, description, price, user_id } = request.payload;

        const [result] = await db.query("INSERT INTO listing(name, description, price, user_id, views) VALUES (?,?,?,?,0)",
            [name, description, price, user_id]);

        if (result.insertId < 1) throw Boom.badImplementation('Could not create the listing')

        const insertedId = result.insertId;

        const [rows] = await db.query(
            "SELECT * FROM listing WHERE id = ?",
            [insertedId]
        );

        return h.response(rows[0]).code(201);
    }
}