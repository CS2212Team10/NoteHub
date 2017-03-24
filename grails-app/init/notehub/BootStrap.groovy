package notehub

class BootStrap {

    def init = { servletContext ->
        // create default role
        def userRole = Role.findOrSaveByAuthority("ROLE_USER")

        // create first user
        def testUser = new User("Bob")
        def testAccount = new Account("bob@bob.com", "password")
        testAccount.setUser(testUser)
        testUser.setAccount(testAccount)

        testAccount.save()
        testUser.save()
        // set role
        AccountRole.create(testAccount, userRole, true)

        // create default group
        def testUserGroup = new Course("Default Group", "Default Group", testUser)
        testUserGroup.save()

        // create 100 profiles
        for (i in (1..10)) {
            testUser = new User("TestUser ${i}")

            testAccount = new Account("TestUser${i}@test.com", "password")
            testAccount.setUser(testUser)
            testUser.setAccount(testAccount)
            testUserGroup.addToUsers(testUser)
            testAccount.save()
            testUser.save()
            AccountRole.create(testAccount, userRole, true)

            // create 100 posts
            for (j in (1..10)) {
                def testPost = new Post("TestPost ${i * j}", "TestPost ${i * j} content")

                testPost.setGroup(testUserGroup)
                testPost.setAuthor(testUser)
                testPost.save()
            }


            // create 50 stars
            for (j in (1..5)) {
                def starId = (Long) (Math.random() * (i * 100))
                def testStar = new UserStar(testUser, Post.findById(starId))
                if (testStar.validate()) {
                    testStar.save(failOnError: true)
                }

            }

            def group = new Course("bob", "bob", User.findById(2))
            group.save(flush: true)
        }
    }
    def destroy = {
    }
}
