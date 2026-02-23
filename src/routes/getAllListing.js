import { db } from "../database.js";

export const getAllListingsRoute = {
    method: "GET",
    path: "/api/listings",
    handler: async (request, h) => {
        /**ARRAY DESTRUCTURING... 
         * Take the rows array from the returned object and store it in a variable called rows. 
         * */
        const [rows] = await db.query("SELECT * FROM listing");
        return rows;
    },
};