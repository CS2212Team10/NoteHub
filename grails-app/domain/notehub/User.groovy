package notehub

/**
 * A class that represents a user in NoteHub
 * @author Cameron Nicolle
 */
class User {

    /**
     * Constructor for User
     * @param name  Name of user
     */
    User(String name, String picture) {
        this.setName(name)
        this.setPicture(picture)
    }

    String name
    String picture


    static hasMany = [circles: UserGroup, posts: Post, stars: UserStar, comments: Comment]
    static hasOne = [account: Account]
    static belongsTo = [Account]

    static constraints = {
        name(nullable: false, blank: false)
        picture(nullable: false)
        circles(nullable: true)
        posts(nullable: true)
        stars(nullable: true)
        account(nullable: false)
        comments(nullable: true)
    }

    static mapping = {
        posts(cascade: "all-delete-orphan")
        stars(cascade: "all-delete-orphan")
        comments(cascade: "all-delete-orphan")
    }

    @Override
    String toString(){
        return this.getName()
    }
}
