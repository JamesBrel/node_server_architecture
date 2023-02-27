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

import helloRoutes from "../logic/routes/hello.routes.js"

const connection = ( _app ) => {
    _app.use( helloRoutes.router )
}

export default {connection}
