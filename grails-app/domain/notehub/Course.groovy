package notehub

//import org.grails.web.json.JSONObject

/**
 * A class that represents a group in NoteHub
 * @author Yusra Al-Sharafi
 */
class Course extends UserGroup{

    /**
     * Constructor for Courses to create a new Course
     * @param name          Name of group
     * @param description   Description of group
     * @param creator       Creator or first member of group
     */
    Course(String name, String description, User creator) {
        super(name,description,creator)
    }

    static hasMany = [circles: Circle]

    static constraints = {
        circles(nullable: true)
    }

    static mapping = {
        circles(cascade: "all-delete-orphan")
    }

}

