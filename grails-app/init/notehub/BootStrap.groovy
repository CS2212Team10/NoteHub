package notehub

class BootStrap {

    def init = { servletContext ->
        def testUser = new User("Bob","AAA".decodeBase64())
        def testAccount = new Account("bob@bob.com", "bob")
        testAccount.setUser(testUser)
        testUser.setAccount(testAccount)

        testAccount.save()
        testUser.save()

        def testUserGroup = new UserGroup("Default Group", "Default Group", testUser)
        testUserGroup.save()
    }
    def destroy = {
    }
}
