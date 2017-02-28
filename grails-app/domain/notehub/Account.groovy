package notehub

/**
 * A class that represents a user's account in NoteHub
 * @author Cameron Nicolle
 */
class Account {

    /**
     * Constructor for Account which also creates a User
     * @param email     Email of account
     * @param password  Password for account
     * @param name      Name of user
     */
    Account(String email, String password, String name) {
        this.setEmail(email)
        this.setPassword(password)
        this.setUser(name)
    }

    /**
     * Constructor for Account
     * @param email     Email of account
     * @param password  Password for account
     */
    Account(String email, String password) {
        this.setEmail(email)
        this.setPassword(password)
    }

    String email
    String password

    static hasOne = [user: User]

    static constraints = {
        email(nullable: false, blank: false, email: true, unique: true)
        password(nullable: false, blank: false)
        user(nullable: false)
    }

    @Override
    String toString(){
        return this.getUser().toString()
    }
}
