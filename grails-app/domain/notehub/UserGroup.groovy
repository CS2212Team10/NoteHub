package notehub

import org.grails.web.json.JSONObject

/**
 * A class that represents a group in NoteHub
 * @author Cameron Nicolle
 */
class UserGroup {

    /**
     * Constructor for UserGroup
     * @param name          Name of group
     * @param description   Description of group
     * @param creator       Creator or first member of group
     */
    UserGroup(String name, String description, User creator) {
        this.setName(name)
        this.setDescription(description)
        this.addToUsers(creator)
    }

    String name
    String description

    static hasMany = [users: User, posts: Post]
    static belongsTo = [User]


    static constraints = {
        name(nullable: false, blank: false)
        description(nullable: false)
        users(nullable: false)
        posts(nullable: true)
    }

    @Override
    String toString() {
        JSONObject json = new JSONObject()
        json.put("id", this.getId().toString())
        return json.toString()
    }
}
