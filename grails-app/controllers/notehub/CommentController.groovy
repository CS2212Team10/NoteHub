package notehub


import grails.rest.*
import grails.converters.*

/**
 * Controller for comment - creates, deletes, and shows comments
 * @author Emma Henriksen-Willis
 */
class CommentController extends RestfulController{
	static responseFormats = ['json']

    /**
     * Constructor for comment controller
     */
    CommentController(){
        super(Comment)
    }


    /**
     * Default get action for comment
     * Accessed at /comment/
     * @params id       Id of comment
     * @return      Renders comment, 404 or 400
     */
    def index(){
        if(params.id == null){
            render(status: 400)
            return
        }

        try {
            this.renderComment(Long.parseLong(params.id.toString()))
        } catch (NumberFormatException e){
            render(status:400)
            return
        }

    }

    /**
     * Show get action for comment(alternate to index) - method renders a json representation of a comment
     * Accessed at /comment/id
     * @params id   Id of comment
     * @return      Renders post, 404, or 400
     */
    def show(){
        if(params.id == null){
            render(status: 400)
            return
        }
        try {
            this.renderComment(Long.parseLong(params.id.toString()))
        } catch (NumberFormatException e){
            render(status:400)
            return
        }
    }

    /**
     * Helper method for show and index - renders a given comment
     * @param id    Id of comment
     * @return      Renders comment or 404
     */
    private renderComment(long id){
        def comment = Comment.findById(id)
        if (comment == null) {
            render(status: 404) //id not found
            return
        }
        // render json
        render (comment as JSON)
    }

    /**
     * Default POST action for comments
     * Accessed at /comment/
     * Provide JSON with author id, post id, and content (encoded in base64) fields
     * @return      Renders 200 or 400
     */
    def save(){
        //validate data
        if(request.JSON.author == null || request.JSON.post == null || request.JSON.content == null){
            render(status: 400)
            return
        }

        Long authorId
        Long postId
        String content

        // get JSON data
        try {
            authorId = Long.parseLong(request.JSON.author.toString())
            postId = Long.parseLong(request.JSON.post.toString())
            content = request.JSON.content.toString()
        } catch (NumberFormatException e) {
            render(status: 400)
            return
        }

        def author = User.findById(authorId)
        def post = Post.findById(postId)
        if(author == null || post == null){
            render(status: 404)
            return
        }
        def comment = new Comment(content)
        comment.setAuthor(author)
        comment.setPost(post)
        author.addToComments(comment)
        post.addToComments(comment)

        //validate new comment
        if (!comment.validate()){
            render (status: 400)
            return
        }
        comment.save()
        author.save(flush: true)
        post.save(flush: true)
        render(status: 200)
    }

    /**
     * Default DELETE action for comment
     * Accessed at /comment/id
     * @param id    Id of comment
     * @return      Renders 400, 404 or 200
     */
    def delete(){
        if (params.id == null){
            render (status: 400) //id doesn't exist
            return
        }

        def comment
        try {
            comment = Comment.findById(Long.parseLong(params.id))
        } catch (NumberFormatException e){
            render(status:400)
            return
        }

        if (comment == null){
            render (status: 404) //post not found
            return
        }
        comment.delete(flush: true)
        render (status: 200)
    }
}
