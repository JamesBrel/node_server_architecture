/***
 * Project: <project_name>,
 * author: <author_name>
 * description: <descript_file>
 * createdAt: <dd/mm/yyyy> at <h:mm am or pm>
 * updatedAt: <dd/mm/yyyy> at <h:mm am or pm>
 */
import request from "supertest"
import app from "../index.js"

describe( "GET the Greeting [hello]", () => {

    it( "should send this response :'Hello My Developper and welcome 😁'", async () => {
        let gretter = await request( app ).get( "/hello" )
        expect( gretter.statusCode ).toBe( 200 )

    } )
} )
