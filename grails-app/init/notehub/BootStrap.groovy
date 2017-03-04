package notehub

class BootStrap {

    def init = { servletContext ->
        // create first user
        def testUser = new User("Bob","AAA")
        def testAccount = new Account("bob@bob.com", "password")
        testAccount.setUser(testUser)
        testUser.setAccount(testAccount)

        testAccount.save()
        testUser.save()

        // create default group
        def testUserGroup = new UserGroup("Default Group", "Default Group", testUser)
        testUserGroup.save()

        // create 100 profiles
        for (i in (1..100)) {
            testUser = new User("TestUser ${i}", "TestUser${i}Picture")

            testAccount = new Account("TestUser${i}@test.com", "password")
            testAccount.setUser(testUser)
            testUser.setAccount(testAccount)
            testUserGroup.addToUsers(testUser)
            testAccount.save()
            testUser.save()

            // create 100 posts
            for (j in (1..100)) {
                def testPost = new Post("TestPost ${i * j}", "TestPost ${i * j} content")

                testPost.setGroup(testUserGroup)
                testPost.setAuthor(testUser)
                testPost.save()
            }

            // create 50 stars
            for (j in (1..50)) {
                def starId = (Long) (Math.random() * (i * 100))
                def testStar = new UserStar(testUser, Post.findById(starId))
                if (testStar.validate()) {
                    testStar.save(failOnError: true)
                }

            }
        }
    }
    def destroy = {
    }
}
