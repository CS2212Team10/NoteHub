package notehub

import javax.sql.rowset.serial.SerialBlob

/**
 * A class that represents a user in NoteHub
 * @author Cameron Nicolle
 */
class User {

    /**
     * Constructor for User
     * @param name  Name of user
     */
    User(String name, byte[] picture) {
        this.setName(name)
        this.setPicture(new SerialBlob(picture))
    }

    /**
     * Constructor for User which also creates an Account
     * @param name      Name of user
     * @param email     Email of account
     * @param password  Password of account
     */
    User(String name, byte[] picture, String email, String password) {
        this.setName(name)
        this.setPicture(new SerialBlob(picture))
        this.setAccount(new Account(email, password))
    }

    String name
    SerialBlob picture


    static hasMany = [circles: UserGroup, posts: Post, stars: UserStar]
    static hasOne = [account: Account]
    static belongsTo = [Account]

    static constraints = {
        name(nullable: false, blank: false)
        picture(nullable: false)
        circles(nullable: true)
        posts(nullable: true)
        stars(nullable: true)
        account(nullable: false)
    }

    @Override
    String toString(){
        return this.name
    }
}
