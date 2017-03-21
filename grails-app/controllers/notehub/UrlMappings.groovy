package notehub

class UrlMappings {

    static mappings = {
        delete "/$controller/$id(.$format)?"(action:"delete")
        get "/$controller(.$format)?"(action:"index")
        get "/$controller/$id(.$format)?"(action:"show")
        post "/$controller(.$format)?"(action:"save")
        put "/$controller/$id(.$format)?"(action:"update")
        patch "/$controller/$id(.$format)?"(action:"patch")

        "/"(view: '/index')
        "/create-post" (view: '/createPost')
        "500"(view: '/error')
        "404"(view: '/notFound')
        "/class"(view: '/class')
        "/home"(view: '/home')
        "/document"(view: '/docViewPage')
        "/mainPage"(view: '/mainPage')
        "/signUp"(view: '/signUp')
        "/signIn"(view: '/signIn')
        "/test"(view: '/test')
        "/create-circle"(view: '/createCircle')
    }
}
