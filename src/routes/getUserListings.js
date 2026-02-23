import { db } from "../database";

export const getUserListingsRoute = {
    method: 'GET',
    path: '/api/users/{id}/listings',
    handler: async (request, h) => {
        const userId = request.params.id;
        const [rows] = await db.query('SELECT * FROM listing WHERE user_id = ?', [userId]);
        return rows;
    }
}