/***
 * Project: <project_name>,
 * author: <author_name>
 * description: <descript_file>
 * createdAt: <dd/mm/yyyy> at <h:mm am or pm>
 * updatedAt: <dd/mm/yyyy> at <h:mm am or pm>
 */


/// Remove the comment tags, in order to use the file ,
/// note: the comment text at up, you must leave, like that , because
/// it is the cni of the file

// import mongoose from "mongoose"
// import nameApp from "../utils/constants/string.const.js"


const connection = () => {
    mongoose
        .set( "strictQuery", true )
        .connect( process.env.DB, {useNewUrlParser: true, useUnifiedTopology: true} )
        .then( ( database ) => {
            console.log(
                `${nameApp}'s Database Connected on ${database.connection.host} 🔥`
            )
        } )
        .catch( ( err ) => {
            console.error( err )
            process.exit( 1 )
        } )
}

export default {connection}
