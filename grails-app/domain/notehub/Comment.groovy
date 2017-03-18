package notehub

import org.grails.web.json.JSONObject

/**
 * Class representing a comment on a post
 * @author Emma Henriksen-Willis
 */
class Comment {

    /**
     * Constructor for Comment
     * @param title     Title of post
     * @param content   Content of post
     */
    Comment(String content) {
        this.setTime(new Date())
        this.setContent(content)
    }

    Date time
    String content

    static hasOne = [author: User, post: Post]

    static constraints = {
        time(nullable: false)
        content(nullable: false)
        author(nullable: false)
        post(nullable: false)
    }

    /**
     * Checks if a given Account has access (current user is author of the post or has access to the post)
     * @param a Account to check
     * @return  Whether a Account has access of not
     */
    boolean hasAccess(Account a){
        return (this.getAuthorId() == a.getUserId()) || this.getPost().hasAccess(a)
    }

    @Override
    String toString() {
        JSONObject json = new JSONObject()
        json.put("id", this.getId().toString())
        return json.toString()
    }
}
