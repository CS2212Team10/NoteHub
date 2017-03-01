package notehub


import grails.rest.*
import grails.converters.*

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
     * @params id   id of user
     * @return      renders user, 404 or 400
     */
    def index() {
        this.renderUser(new BigInteger(params.id))
    }

    /**
     * Show get action for user
     * Accessed at /user/id
     * @params id   id of user
     * @return      renders user, 404 or 400
     */
    def show() {
        this.renderUser(new BigInteger(params.id))
    }

    /**
     * Save action for user
     * Accessed at /user/
     * Provide JSON with name, email, password and picture (encoded in base64) fields
     * @return      renders 200 or 400
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


        def newUser = new User(name, picture    )
        def newAccount = new Account(email, password)
        newUser.setAccount(newAccount)
        newAccount.setUser(newUser)

        //validate new user and account
        if (!newUser.validate()){
            render (newUser.errors.allErrors as JSON, status: 400)
            return
        }

        if (!newAccount.validate()){
            render (newAccount.errors.allErrors as JSON, status: 400)
            return
        }

        // Success
        newAccount.save()
        newUser.save()

        render (status: 200)
    }

    def delete() {

    }

    private renderUser(BigInteger id) {

        // id does not exist
        if (id == null){
            render (status: 400)
            return
        }

        def user = User.findById(id)

        // user not found
        if (user == null){
            render (status: 404)
            return
        }

        render (user as JSON)
    }

}
