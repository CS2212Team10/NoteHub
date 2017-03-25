package notehub

import org.grails.web.json.JSONObject

/**
 * A class that represents a star in NoteHub
 * @author Cameron Nicolle
 */
class UserStar {

    /**
     * Constructor for UserStar
     * @param user  User is creating the star
     * @param post  Post that is being stared
     */
    UserStar(User user, Post post) {
        this.setUser(user)
        this.setPost(post)
        this.setTime(new Date())
    }

    Date time

    static hasOne = [post: Post, user: User]

    /**
     * Checks if a given Account has access
     * @param a Account to check
     * @return  Whether a Account has access of not
     */
    boolean hasAccess(Account a){
        return (this.getUserId() == a.getUserId()) || this.getPost().hasAccess(a)
    }

    static constraints = {
        time(nullable: false)
        post(nullable: false)
        user(nullable: false)
    }

    @Override
    String toString() {
        JSONObject json = new JSONObject()
        json.put("id", this.getId().toString())
        return json.toString()
    }
}
