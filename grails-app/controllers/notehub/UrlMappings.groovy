package notehub

class UrlMappings {

    static mappings = {
        delete "/api/$controller/$id(.$format)?"(action:"delete")
        delete "/api/$controller(.$format)?"(action:"delete")
        get "/api/$controller(.$format)?"(action:"index")
        get "/api/$controller/$id(.$format)?"(action:"show")
        post "/api/$controller(.$format)?"(action:"save")
        put "/api/$controller/$id(.$format)?"(action:"update")
        patch "/api/$controller/$id(.$format)?"(action:"patch")

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
    }
}
