#Frontend Documentation


(in angularjs we use camelCase but html use '-'s for HTML Tags)
(changed the directives to components)
##AngularJS grails-app/assets/java-scripts/
- noteHub/notehub.js (module 'NoteHub' ng-app)
    +   home/notehub.home (module)
        *       homeController (CONTROLLER)
        *       components/circleList.js (COMPONENT<circle-list></circle-list>)
        *       templates/circleList.tgl.html (html template for component)
    +   class/notehub.class (module)
        *       classController
        *       components/noteListCircles.js (COMPONENT<note-list></note-list>)
        *       templates/noteList.tgl.html (html template for component)
    +   createPost/notehub.createPost (module)
        *       createPostController
    +   docView/notehub.docView (module)
        *       docViewController

###NOT USED (dont touch)
- /index
- /core
- /toDelete (keeping old files just in case)

##HTML
- mainPlain.gsp
    + mainPage
    + signIn
    + signUp
- main.gsp
    +   class
    +   createPost
    +   docViewPage
    +   home