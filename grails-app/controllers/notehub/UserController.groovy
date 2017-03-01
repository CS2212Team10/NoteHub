package notehub


import grails.rest.*
import grails.converters.*
import org.grails.web.json.JSONObject
import sun.misc.BASE64Encoder

import javax.sql.rowset.serial.SerialBlob
import java.nio.ByteBuffer

/**
 * Controls the creation and retrieval of users
 * @author Cameron Nicolle
 */
class UserController extends RestfulController {
	static responseFormats = ['json']


    /**
     * Constructor for UserController
     */
    UserController() {
        super(User)
    }

    /**
     * Default get action for user
     * Accessed at /user/
     * @params id   Id of user
     * or
     * @params username
     * @params paw
     * @return      Renders user, 404 or 400
     */
    def index() {

        // id does not exist
        if (params.id == null){
            // check username and password
            // get params
            String email = params.email
            String password = params.password

            // params not provided
            if (email == null || password == null){
                render(status: 400)
                return
            }

            // find account
            def account = Account.findByEmailAndPassword(email, password)

            // account not found
            if (account == null){
                render(status: 404)
                return
            }

            // success
            this.renderUser(account.getUserId())
            return
        }

        this.renderUser(Long.parseLong(params.id))
    }

    /**
     * Show get action for user
     * Accessed at /user/id
     * @params id   Id of user
     * @return      Renders user, 404 or 400
     */
    def show() {

        // id does not exist
        if (params.id == null){
            render (status: 400)
            return
        }

        this.renderUser(Long.parseLong(params.id))
    }

    /**
     * Default POST action for user
     * Accessed at /user/
     * Provide JSON with name, email, password and picture (encoded in base64) fields
     * @return      Renders 200 or 400
     */
    def save() {
        // get JSON data
        String name = request.JSON.name
        String email = request.JSON.email
        String password = request.JSON.password
        byte[] picture = request.JSON.picture.toString().decodeBase64()

        // validate JSON data
        if (name == null || email == null || password == null || picture == null){
            render (status: 400)
            return
        }


        def newUser = new User(name, picture)
        def newAccount = new Account(email, password)
        newUser.setAccount(newAccount)
        newAccount.setUser(newUser)

        //validate new user and account
        if (!newUser.validate()){
            render (status: 400)
            return
        }

        if (!newAccount.validate()){
            render (status: 400)
            return
        }

        // Success
        newAccount.save()
        newUser.save()

        render (status: 200)
    }

    /**
     * Default DELETE action for user
     * Accessed at /user/id
     * @param id    Id of user
     * @return      Renders 400, 404 or 200
     */
    def delete() {
        // id does not exist
        if (params.id == null){
            render (status: 400)
            return
        }

        def user = User.findById(Long.parseLong(params.id))
        // user not found
        if (user == null){
            render (status: 404)
            return
        }

        //success
        user.getAccount().delete(flush: true)
        render (status: 200)


    }

    /**
     * Gets id from email and password
     * Accessed at /user/getID/
     * @param email     The email or the user
     * @param password  The password of the user
     * @return          The id of the user, 400 or 404
     */
    def getID() {


    }

    /**
     * Renders a given user
     * @param id    Id of user
     * @return      Renders user or 404
     */
    private renderUser(long id) {

        def user = User.findById(id)
        // user not found
        if (user == null){
            render (status: 404)
            return
        }

        // build json
        JSONObject json = new JSONObject()
        json.put("name", user.getName())
        json.put("id", user.getId())
        json.put("posts", user.getPosts())
        json.put("posts", user.getPosts())
        json.put("circles", user.getCircles())
        SerialBlob picture = user.getPicture()
        byte[] bytePicture = picture.getBytes(1, (int)picture.length())
        BASE64Encoder encoder = new BASE64Encoder()
        ByteBuffer pictureBuffer = ByteBuffer.wrap(bytePicture)

        json.put("picture", encoder.encode(pictureBuffer))
        render (json)
    }



}
