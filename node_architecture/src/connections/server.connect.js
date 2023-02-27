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

import nameApp from "../utils/constants/string.const.js"

const connection = async ( _app ) => {
    try {
        const port = process.env.PORT || 4300
        _app.listen( port, () =>
            console.log( `${nameApp}'s Server is running on port : http://localhost:${port}/   🔥` )
        )
    } catch ( error ) {
        console.error( error )
        process.exit( 1 )
    }
}

export default {connection}
