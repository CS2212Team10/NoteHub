package notehub

//import org.grails.web.json.JSONObject

/**
 * A class that represents a group in NoteHub
 * @author Yusra Al-Sharafi
 */
class Circle extends UserGroup {

    /**
     * Constructor for Circle to create a new UserGroup
     * @param name          Name of group
     * @param description   Description of group
     * @param creator       Creator or first member of group
     */
    Circle(String name, String description, User creator) {
        super(name,description,creator)
    }

    static hasOne =[course:Course]

    static constraints = {
        course(nullable: false)
    }

}

