package notehub

import grails.plugin.springsecurity.annotation.Secured
import grails.rest.*
import grails.converters.*

/**
 * Controls the creation and retrieval of a User group (ie. Circle)
 * @author Yusra Al-Sharafi
 */
@Secured(['ROLE_USER'])
class CircleController extends RestfulController{
    static responseFormats = ['json']
    def springSecurityService

    CircleController(){
        super(Circle)
    }

    /**
     *  Default GET action for circle
     *  Accessed at /circle/
     *  @params id   Id of circle
     *  @return      Renders circle, 404, 401 or 400
     */
    def index() {
        //User group not found
        if(params.id == null){
            render(status:400)
            return
        }

        def circle
        try {
            circle = Circle.findById(Long.parseLong(params.id.toString()))
        } catch (NumberFormatException e){
            render(status:400)
            return
        }

        //Content not found
        if(circle == null){
            render(status:404)
            return
        }

        // Does not have access
        if (!circle.hasAccess(this.springSecurityService.currentUser)){
            render(status: 401)
            return
        }

        render(circle as JSON)
    }

    /**
     *  Default SAVE action for Circle
     *  Accessed at /circle/
     *  Provide JSON with name, description, and course (ID)
     *  @return      Renders 200, 404, or 400
     */
    def save(){
        //validate data
        if(request.JSON.name == null || request.JSON.description == null || request.JSON.course == null){
            render(status:400)
            return
        }

        String name
        String description
        Course course

        // get JSON data
        try {
            name = request.JSON.name
            description = request.JSON.description
            course = Course.findById(Long.parseLong(request.JSON.course.toString()))
        } catch (NumberFormatException e) {
            render(status: 400)
            return
        }

        //Find the Creator Account
        Account creatorAccount = this.springSecurityService.currentUser
        User creator = creatorAccount.getUser()

        //Add new Circle to Course
        def newCircle = new Circle(name, description, creator)
        course.addToCircles(newCircle)

        //Ensuring validity of data
        if(!newCircle.validate()){
            render(status: 400)
            return
        }

        //Save creator user, new circle, and new course
        creator.save(flush:true)
        newCircle.save()
        course.save(flush:true)
        render(status:200)
    }

    /**
     *  Default DELETE action for circle
     *  Accessed at /circle/id
     *  @param id    Id of circle
     *  @return      Renders 400, 404, 401 or 200
     */
    def delete(){
        //Id  doesn't exist
        if(params.id == null){
            render(status:400)
            return
        }

        def circle
        try {
            circle = Circle.findById(Long.parseLong(params.id.toString()))
        } catch (NumberFormatException e){
            render(status:400)
            return
        }

        if(circle == null){
            render(status:404)
            return
        }

        // Does not have access
        if (!circle.hasAccess(this.springSecurityService.currentUser)){
            render(status: 401)
            return
        }

        //Removes users from the Circle
        circle.getUsers().each {circle.removeFromUsers(it)}

        //Deletes User Group
        circle.delete(flush:true)
        render(status:200)
    }

    /**
     *  The GET action for Circle
     *  Accessed at /circle/id
     *  @param id    Id of circle
     *  @return      Renders 400, 404, 401 or 200
     */
    def show(){
        //User group not found
        if(params.id == null){
            render(status:400)
            return
        }

        def circle
        try {
            circle = Circle.findById(Long.parseLong(params.id.toString()))
        } catch (NumberFormatException e){
            render(status:400)
            return
        }

        //Content not found
        if(circle == null){
            render(status:404)
            return
        }

        // Does not have access
        if (!circle.hasAccess(this.springSecurityService.currentUser)){
            render(status: 401)
            return
        }

        render(circle as JSON)
    }

    /**
     * The PATCH action for Circle to enable users to join a the Circle
     *  Accessed at /circle/id
     *  @param id    Id of circle
     *  @return      Renders 400, 404 or 200
     */
    def patch(){
        //url param id - user sends patch request to be added to the group
        //Id  doesn't exist
        if(params.id == null) {
            render(status: 400)
            return
        }

        Circle circle
        try{
            circle = Circle.findById(Long.parseLong(params.id.toString()))
        }catch (NumberFormatException e){
            render(status:400)
            return
        }

        if(circle==null){
            render(status:404)
            return
        }

        Course course
        course = circle.getCourse()

        //find creator
        Account getThisUser = this.springSecurityService.currentUser
        User user = getThisUser.getUser()

        if(user==null){
            render(status:404)
            return
        }

        if(!course.hasAccess(this.springSecurityService.currentUser)){
            render(status:401)
            return
        }
        //post method, get user. Call circle.addUser (could be wrong, double check), then save both the user and the circle
        circle.addToUsers(user)



        user.save(flush:true)
        circle.save(flush:true)
        render(status:200)
    }

}
