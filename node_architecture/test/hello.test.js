/***
 * Project: Yoogo,
 * author: blutec
 * description: This File is the hello test file.
 * createdAt: 08/02/2023
 * updatedAt:
 */
import request from "supertest"
import app from "../index.js"

describe( "GET the Greeting [hello]", () => {

    it( "should send this response :'Hello My Developper and welcome 😁'", async () => {
        let gretter = await request( app ).get( "/hello" )
        expect( gretter.statusCode ).toBe( 200 )

    } )
} )
