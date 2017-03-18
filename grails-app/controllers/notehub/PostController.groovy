package notehub


import grails.rest.*
import grails.converters.*

/**
 * Controller for post - creates, deletes, and shows posts
 * @author Emma Henriksen-Willis
 */
class PostController extends RestfulController {
	static responseFormats = ['json']

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
     * @return      Renders post, 404 or 400
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
     * @return      Renders post, 404, or 400
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
     * @return      Renders post or 404
     */
    private renderPost(long id){
        def post = Post.findById(id)
        if (post == null) {
            render(status: 404) //id not found
            return
        }
        // render json
        render (post as JSON)
    }

    /**
     * Default POST action for posts
     * Accessed at /post/
     * Provide JSON with title, author id, group id, and content (encoded in base64) fields
     * @return      Renders 200 or 400
     */
    def save(){
        //validate data
        if(request.JSON.title == null || request.JSON.author == null || request.JSON.group == null || request.JSON.content == null){
            render(status: 400)
            return
        }

        String title
        Long authorId
        Long groupId
        String content


        // get JSON data
        try {
            title = request.JSON.title
            authorId = Long.parseLong(request.JSON.author.toString())
            //Default group, id = 1
            groupId = 1
            content = request.JSON.content.toString()
        } catch (NumberFormatException e) {
            render(status: 400)
            return
        }



        def author = User.findById(authorId)
        def group = UserGroup.findById(groupId)
        if(author == null || group == null){
            render(status: 404)
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
        post.delete(flush: true)
        render (status: 200)
    }

}
