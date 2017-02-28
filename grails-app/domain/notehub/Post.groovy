package notehub

import javax.sql.rowset.serial.SerialBlob

/**
 * A class that represents a post in NoteHub
 * @author Cameron Nicolle
 */
class Post {

    /**
     * Constructor for Post
     * @param title     Title of post
     * @param content   Content of post
     * @param author    Author of post
     * @param group     Group that contains post
     */
    Post(String title, byte[] content, User author, UserGroup group) {
        this.setTitle(title)
        this.setTime(new Date())
        this.setContent(new SerialBlob(content))
        this.setAuthor(author)
        this.setGroup(group)
    }

    Date time
    String title
    SerialBlob content

    static hasOne = [author: User, group: UserGroup]
    static hasMany = [stars: UserStar]

    static constraints = {
        time(nullable: false)
        title(nullable: false)
        content(nullable: false)
        author(nullable: false)
        group(nullable: false)
        stars(nullable: true)
    }

    @Override
    String toString() {
        return this.content + " @ " + this.time.toString()
    }
}
