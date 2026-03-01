import { db } from "../database";
import * as admin from "firebase-admin";
import Boom from '@hapi/boom';

export const getUserListingsRoute = {
    method: 'GET',
    path: '/api/users/{id}/listings',
    handler: async (request, h) => {
        const authHeader = request.headers.authorization;

        if (!authHeader) {
            throw Boom.unauthorized('Missing Authorization header');
        }

        const token = authHeader.replace('Bearer ', '');
        const user = await admin.auth().verifyIdToken(token);
        const userId = request.params.id;

        if (user.uid !== userId) throw Boom.unauthorized('You can only access your own listings');

        const [rows] = await db.query('SELECT * FROM listing WHERE user_id = ?', [userId]);
        return rows;
    }
}