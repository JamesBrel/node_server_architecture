/***
 * Project: Yoogo,
 * author: blutec
 * description: This File is the main index.
 * createdAt: 08/02/2023
 * updatedAt:
 */

import express from "express"
import dotenv from "dotenv"
import server from "./src/connections/server.connect.js"
import apis from "./src/connections/apis.connect.js"
import database from "./src/connections/db.connect.js"
dotenv.config( {path: "./src/configs/.env"} )
const app = express()


// connection
server.connection( app ).then( () => {
    apis.connection( app )
    database.connection()
} )

// export for the test
export default app

