package notehub

class BootStrap {

    def init = { servletContext ->
        def testUser = new User("Bob","AAA")
        def testAccount = new Account("bob@bob.com", "bob")
        testAccount.setUser(testUser)
        testUser.setAccount(testAccount)

        testAccount.save()
        testUser.save()

        def testUserGroup = new UserGroup("Default Group", "Default Group", testUser)
        testUserGroup.addToUsers(testUser)
        def testPost = new Post("test post","abc123".decodeBase64())
        testPost.setAuthor(testUser)
        testPost.setGroup(testUserGroup)
        testUserGroup.save()
        testUser.save(flush: true)
        testPost.save()
    }
    def destroy = {
    }
}
