package notehub

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

    static constraints = {
        time(nullable: false)
        post(nullable: false)
        user(nullable: false)
    }

    @Override
    String toString() {
        return this.getUser().toString() + " * " + this.getPost().toString()
    }
}
