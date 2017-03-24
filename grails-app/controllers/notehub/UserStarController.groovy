package notehub

import grails.plugin.springsecurity.annotation.Secured
import grails.rest.*
import grails.converters.*


/**
 * Controller for toggling and de-toggling stars on posts
 * @author Yu Guo
 */
@Secured(['ROLE_USER'])
class UserStarController extends RestfulController{
	static responseFormats = ['json']
    def springSecurityService

    //
    UserStarController(){
        super(UserStar)
    }
    /**
     *  Default GET action for userStar
     *  Accessed at /userStar/
     *  @params id   Id of userStar
     *  @return      Renders userStar, 404, 401 or 400
     */
    def index() {
        //id not found
        if(params.id == null){
            render(status:400)
            return
        }

        //generate reference
        def userStar
        try {
            userStar = UserStar.findById(Long.parseLong(params.id.toString()))
        } catch (NumberFormatException e){
            render(status:400)
            return
        }

        //object not found
        if(userStar == null){
            render(status:404)
            return
        }

        // Does not have access
        if (!userStar.hasAccess(this.springSecurityService.currentUser)){
            render(status: 401)
            return
        }

        //render
        render(userStar as JSON)

    }
    /**
     * Show get action for userStar
     * Accessed at /userStar/id
     * @params id   Id of userStar
     * @return      Renders userStar, 404, 401 or 400
     */
    def show(){
        //id not found
        if(params.id == null){
            render(status:400)
            return
        }

        //generate reference
        def userStar
        try {
            userStar = UserStar.findById(Long.parseLong(params.id.toString()))
        } catch (NumberFormatException e){
            render(status:400)
            return
        }

        //object not found
        if(userStar == null){
            render(status:404)
            return
        }

        // Does not have access
        if (!userStar.hasAccess(this.springSecurityService.currentUser)){
            render(status: 401)
            return
        }

        render(userStar as JSON)
    }

    /**
     *  Default POST action for userStar
     *  Accessed at /userStar/
     *  Provide JSON with post's id
     *  @return      Renders 200, 404, or 400
     */
    def save(){

        // validation
        if(request.JSON.post == null){
            render(status:400)
            return
        }

        Long postId
        // get JSON data
        try {
            postId = Long.parseLong(request.JSON.post.toString())
        } catch (NumberFormatException e) {
            render(status:400)
            return
        }



        // generate reference
        Account userAccount = this.springSecurityService.currentUser
        def user = userAccount.getUser()
        def post = Post.findById(postId)

        // if object not found
        if( user == null || post == null){
            render(status:404)
            return
        }

        // Does not have access
        if (!post.hasAccess(this.springSecurityService.currentUser)){
            render(status: 401)
            return
        }

        // generate new star
        def userStar = new UserStar(user, post)

        // validate new star
        if (!userStar.validate()){
            render(status:400)
            return
        }

        // save new star
        user.save(flush:true)
        post.save(flush:true)
        userStar.save()
        render(status:200)

    }

    /**
     *  Default DELETE action for userStar
     *  Accessed at /userStar/id
     *  @param id    Id of userStar
     *  @return      Renders 400, 404 or 200
     */
    def delete(){
        // params.id does not exist
        if(params.id == null){
            render(status:400)
            return
        }

        def userStar
        try {
            userStar = UserStar.findById(Long.parseLong(params.id.toString()))
        } catch (NumberFormatException e){
            render(status:400)
            return
        }

        // not found
        if(userStar == null){
            render(status:404)
            return
        }

        // Does not have access
        if (userStar.getUserId() != this.springSecurityService.currentUser.getUserId() ){
            render(status: 401)
            return
        }

        // make the deletion
        userStar.delete(flush:true)
        render(status:200)

    }
}
