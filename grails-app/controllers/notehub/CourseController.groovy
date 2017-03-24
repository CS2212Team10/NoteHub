package notehub

import grails.plugin.springsecurity.annotation.Secured
import grails.rest.*
import grails.converters.*

/**
 * Controls the creation and retrieval of a Course (User Group)
 * @author Yusra Al-Sharafi
 */
@Secured(['ROLE_USER'])
class CourseController extends RestfulController{
    static responseFormats = ['json']
    def springSecurityService

    CourseController(){
        super(Course)
    }

    /**
     *  Default GET action for Course
     *  Accessed at /course/
     *  @params id   Id of course
     *  @return      Renders course, 404, 401 or 400
     */
    def index() {
        //User group not found
        if(params.id == null){
            render(status:400)
            return
        }

        def course
        try {
            course = Course.findById(Long.parseLong(params.id.toString()))
        } catch (NumberFormatException e){
            render(status:400)
            return
        }

        //Content not found
        if(course == null){
            render(status:404)
            return
        }

        // Does not have access
        if (!course.hasAccess(this.springSecurityService.currentUser)){
            render(status: 401)
            return
        }

        render(course as JSON)
    }

    /**
     *  Default SAVE action for Course
     *  Accessed at /course/
     *  Provide JSON with name and description
     *  @return      Renders 200 or 400
     */
    def save(){
        //validate data
        if(request.JSON.name == null || request.JSON.description == null){
            render(status:400)
            return
        }

        String name
        String description

        // get JSON data
        try {
            name = request.JSON.name
            description = request.JSON.description
        } catch (NumberFormatException e) {
            render(status: 400)
            return
        }

        //find creator
        Account creatorAccount = this.springSecurityService.currentUser
        User creator = creatorAccount.getUser()

        def newCourse = new Course(name, description, creator)

        //Ensuring validity of data
        if(!newCourse.validate()){
            render(status: 400)
            return
        }

        //Save creator user and new course
        creator.save(flush:true)
        newCourse.save()
        render(status:200)
    }

    /**
     *  Default DELETE action for Course
     *  Accessed at /course/id
     *  @param id    Id of course
     *  @return      Renders 400, 404, 401 or 200
     */
    def delete(){
        //Id  doesn't exist
        if(params.id == null){
            render(status:400)
            return
        }

        def course
        try {
            course = Course.findById(Long.parseLong(params.id.toString()))
        } catch (NumberFormatException e){
            render(status:400)
            return
        }

        if(course == null){
            render(status:404)
            return
        }

        // Does not have access
        if (!course.hasAccess(this.springSecurityService.currentUser)){
            render(status: 401)
            return
        }

        //Removes users from the course
        course.getUsers().each {course.removeFromUsers(it)
        it.save(flush: true)}
        // removes users from each circle
        course.getCircles().each {
            Circle circleToDelete = it
            it.getUsers().each {circleToDelete.removeFromUsers(it)}}

        //Deletes User Group
        course.delete(flush:true)
        render(status:200)
    }

    /**
     *  The GET action for Course
     *  Accessed at /course/id
     *  @param id    Id of course
     *  @return      Renders 400, 404, 401 or 200
     */
    def show(){
        //Course not found
        if(params.id == null){
            render(status:400)
            return
        }

        def course
        try {
            course = Course.findById(Long.parseLong(params.id.toString()))
        } catch (NumberFormatException e){
            render(status:400)
            return
        }

        //Content not found
        if(course == null){
            render(status:404)
            return
        }

        // Does not have access
        if (!course.hasAccess(this.springSecurityService.currentUser)){
            render(status: 401)
            return
        }

        render(course as JSON)
    }

    /**
     * The PATCH action for Course to enable users to join a the Course
     *  Accessed at /course/id
     *  @param id    Id of course
     *  @return      Renders 400, 404 or 200
     */
    def patch(){
        //Id  doesn't exist
        if(params.id == null) {
            render(status: 400)
            return
        }

        Course course
        try{
            course = Course.findById(Long.parseLong(params.id.toString()))
        }catch (NumberFormatException e){
            render(status:400)
            return
        }

        if(course==null){
            render(status:404)
            return
        }

        //find creator
        Account getThisUser = this.springSecurityService.currentUser
        User user = getThisUser.getUser()

        if(user==null){
            render(status:404)
            return
        }

        course.addToUsers(user)



        user.save(flush:true)
        course.save(flush:true)
        render(status:200)
    }

}
