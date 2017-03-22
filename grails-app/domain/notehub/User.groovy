package notehub

/**
 * A class that represents a user in NoteHub
 * @author Cameron Nicolle
 */
class User {

    /**
     * Constructor for User
     * @param name      Name of user
     * @param picture   Profile picture in base 64
     */
    User(String name) {
        this.setName(name)
    }

    String name


    static hasMany = [circles: UserGroup, posts: Post, stars: UserStar]
    static hasOne = [account: Account]
    static belongsTo = [Account]

    static constraints = {
        name(nullable: false, blank: false)
        circles(nullable: true)
        posts(nullable: true)
        stars(nullable: true)
        account(nullable: false)
    }

    static mapping = {
        posts(cascade: "all-delete-orphan")
        stars(cascade: "all-delete-orphan")
    }

    @Override
    String toString(){
        return this.getName()
    }
}
