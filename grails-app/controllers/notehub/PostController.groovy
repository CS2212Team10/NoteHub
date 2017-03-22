package notehub

import grails.plugin.springsecurity.annotation.Secured
import grails.rest.*
import grails.converters.*

/**
 * Controller for post - creates, deletes, and shows posts
 * @author Emma Henriksen-Willis
 */
@Secured(['ROLE_USER'])
class PostController extends RestfulController {
	static responseFormats = ['json']
    def springSecurityService

    /**
     * Constructor for post controller
     */
    PostController(){
        super(Post)
    }


    /**
     * Default get action for post
     * Accessed at /post/
     * @params id       Id of post
     * @return      Renders post, 404, 401 or 400
     */
    def index(){
        if(params.id == null){
            render(status: 400)
            return
        }

        try {
            this.renderPost(Long.parseLong(params.id.toString()))
        } catch (NumberFormatException e){
            render(status:400)
            return
        }

    }

    /**
     * Show get action for post(alternate to index) - method renders a json representation of a post
     * Accessed at /post/id
     * @params id   Id of post
     * @return      Renders post, 404, 401 or 400
     */
    def show(){
        if(params.id == null){
            render(status: 400)
            return
        }
        try {
            this.renderPost(Long.parseLong(params.id.toString()))
        } catch (NumberFormatException e){
            render(status:400)
            return
        }
    }

    /**
     * Helper method for show and index - renders a given post
     * @param id    Id of post
     * @return      Renders post, 401 or 404
     */
    private renderPost(long id){
        def post = Post.findById(id)
        if (post == null) {
            render(status: 404) //id not found
            return
        }

        // Does not have access
        if (!post.hasAccess(this.springSecurityService.currentUser)){
            render(status: 401)
            return
        }

        // render json
        render (post as JSON)
    }

    /**
     * Default POST action for posts
     * Accessed at /post/
     * Provide JSON with title, group id, and content (encoded in base64) fields
     * @return      Renders 200 or 400
     */
    def save(){
        //validate data
        if(request.JSON.title == null || request.JSON.group == null || request.JSON.content == null){
            render(status: 400)
            return
        }

        String title
        Long groupId
        String content


        // get JSON data
        try {
            title = request.JSON.title
            groupId = Long.parseLong(request.JSON.group.toString())
            content = request.JSON.content.toString()
        } catch (NumberFormatException e) {
            render(status: 400)
            return
        }


        Account authorAccount = springSecurityService.currentUser
        def author = authorAccount.getUser()
        def group = UserGroup.findById(groupId)
        if(author == null || group == null){
            render(status: 404)
            return
        }

        // Does not have access
        if (!group.hasAccess(this.springSecurityService.currentUser)){
            render(status: 401)
            return
        }

        def post = new Post(title, content)
        post.setAuthor(author)
        post.setGroup(group)
        author.addToPosts(post)
        group.addToPosts(post)

        //validate new post
        if (!post.validate()){
            render (status: 400)
            return
        }
        post.save()
        author.save(flush: true)
        group.save(flush: true)
        render(status: 200)
    }

    /**
     * Default DELETE action for post
     * Accessed at /post/id
     * @param id    Id of post
     * @return      Renders 400, 404 or 200
     */
    def delete(){
        if (params.id == null){
            render (status: 400) //id doesn't exist
            return
        }

        def post
        try {
            post = Post.findById(Long.parseLong(params.id))
        } catch (NumberFormatException e){
            render(status:400)
            return
        }


        if (post == null){
            render (status: 404) //post not found
            return
        }

        // Does not have access
        if (post.getAuthorId() != this.springSecurityService.currentUser.getUserId() ){
            render(status: 401)
            return
        }

        post.delete(flush: true)
        render (status: 200)
    }

}
