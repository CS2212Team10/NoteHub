package notehub

import grails.rest.*
import grails.converters.*

/**
 * Controls the creation and retrieval of a User group (ie. Circle)
 * @author Yusra Al-Sharafi
 */
class UserGroupController extends RestfulController{
	static responseFormats = ['json']

    UserGroupController(){
        super(UserGroup)
    }

    /**
     *  Default GET action for userGroup
     *  Accessed at /userGroup/
     *  @params id   Id of userGroup
     *  @return      Renders userGroup, 404 or 400
     */
    def index() {
        //User group not found
        if(params.id == null){
            render(status:400)
            return
        }

        def userGroup = UserGroup.findById(params.id)

        //Content not found
        if(userGroup == null){
            render(status:404)
            return
        }

        render(userGroup as JSON)
    }

    /**
     *  Default SAVE action for userGroup
     *  Accessed at /userGroup/
     *  Provide JSON with name, description, and a the Creator user's id
     *  @return      Renders 200, 404, or 400
     */
    def save(){

        String name = request.JSON.name
        String description = request.JSON.description
        Long creatorId = Long.parseLong(request.JSON.creator.toString())

        if(name == null || description == null || creatorId == null){
            render(status:400)
            return
        }

        //find creator by Id
        User creator = User.findById(creatorId)

        //creator not found
        if(creator == null){
            render(status:404)
            return
        }

        def newUserGroup = new UserGroup(name, description, creator)

        //Ensuring validity of data
        if(!newUserGroup.validate()){
            render(status: 400)
            return
        }

        //Save creator user and new user group
        creator.save(flush:true)
        newUserGroup.save()
        render(status:200)
    }

    /**
     *  Default DELETE action for userGroup
     *  Accessed at /userGroup/id
     *  @param id    Id of userGroup
     *  @return      Renders 400, 404 or 200
     */
    def delete(){
        //Id  doesn't exist
        if(params.id == null){
            render(status:400)
            return
        }

        def userGroup = UserGroup.findById(params.id)

        if(userGroup == null){
            render(status:404)
            return
        }

        //Removes users from the UserGroup
        userGroup.getUsers().each {userGroup.removeFromUsers(it)}

        //Deletes User Group
        userGroup.delete(flush:true)
        render(status:200)
    }

    /**
     *  The GET action for userGroup
     *  Accessed at /userGroup/id
     *  @param id    Id of userGroup
     *  @return      Renders 400, 404 or 200
     */
    def show(){
        //User group not found
        if(params.id == null){
            render(status:400)
            return
        }

        def userGroup = UserGroup.findById(params.id)

        //Content not found
        if(userGroup == null){
            render(status:404)
            return
        }

        //Ensuring validity of data
        if(params.id == null){
            render(status:400)
            return
        }

        render(userGroup as JSON)
    }

}