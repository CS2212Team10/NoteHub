# API Documentation

---

## Authentication
Action | HTTP Request| Address | Possible Responses | JSON Sent With Request
--- | --- | --- | --- | ---
Create User | POST | /api/login | <ul><li>401</li> <li>`{"email":"user@ema.il", "roles":"listOfRoles","token_type":"Bearer", "access_token":"token", "expires_in":"timeBeforeExpires", "refresh_token":"token" }`</li> </ul> | `{"email":"user@ema.il", "password":"userPassword"}`

## User
Action | HTTP Request | Address | Possible Responses | JSON Sent With Request
--- | --- | --- | --- | ---
Create User | POST | /api/user/ | <ul><li>400</li> <li>200</li></ul> | `{"name":"userName","email":"user@ema.il","password":"userPassword"}`
Get User | GET | /api/user/userID | <ul><li>400</li> <li>404</li> <li>`{"id":"userID","name":"userName","circles":"listOfUserGroupIds,"posts":"listOfPostIDs","stars":"listOfStarIds"}`</li></ul> | None
Get User | GET | /api/user/?id=userID | <ul><li>400</li> <li>404</li> <li>`{"id":"userID","name":"userName","circles":"listOfUserGroupIds,"posts":"listOfPostIDs","stars":"listOfStarIds"}`</li></ul> | None
Get User from Token | GET | /api/user/ | <ul><li>400</li> <li>404</li> <li>`{"id":"userID","name":"userName","circles":"listOfUserGroupIds,"Posts":"listOfPostIDs","stars":"listOfStarIds"}`</li></ul> | None
Delete User | DELETE | /api/user/ | <ul><li>400</li> <li>404</li> <li>200</li></ul> | None

## Course
Action | HTTP Request | Address | Possible Responses | JSON Sent With Request
--- | --- | --- | --- | ---
Create Course | POST | /api/course/ | <ul><li>400</li> <li>200</li></ul> | `{"name":"courseName","description":"courseDescription"}`
Get Course | GET | /api/course/courseID | <ul><li>400</li> <li>404</li> <li>401</li> <li>`{"id":"courseID","name":"courseName","users":"listOfUserIDs","posts":"listOfPostIDs","circles":"listOfCircleIds"}`</li></ul> | None
Get Course | GET | /api/course/?id=courseID | <ul><li>400</li> <li>404</li> <li>401</li> <li>`{"id":"courseID","name":"courseName","users":"listOfUserIDs","posts":"listOfPostIDs","circles":"listOfCircleIds"}`</li></ul> | None
Add User to Course | PATCH | /api/course/courseID | <ul><li>400</li> <li>404</li> <li>401</li> <li>200</li></ul> | None
Delete Course | DELETE | /api/course/courseID | <ul><li>400</li> <li>404</li> <li>401</li> <li>200</li></ul> | None

## Circle
Action | HTTP Request | Address | Possible Responses | JSON Sent With Request
--- | --- | --- | --- | ---
Create Circle | POST | /api/circle/ | <ul><li>400</li> <li>200</li></ul> | `{"name":"circleName","description":"circleDescription"}`
Get Circle | GET | /api/circle/circleID | <ul><li>400</li> <li>404</li> <li>401</li> <li>`{"id":"circleID","name":"circleName","users":"listOfUserIDs","posts":"listOfPostIDs","course":"courseId"}`</li></ul> | None
Get Circle | GET | /api/circle/?id=circleID | <ul><li>400</li> <li>404</li> <li>401</li> <li>`{"id":"circleID","name":"circleName","users":"listOfUserIDs","posts":"listOfPostIDs","course":"courseId"}`</li></ul> | None
Add User to Circle | PATCH | /api/circle/circleID | <ul><li>400</li> <li>404</li> <li>401</li> <li>200</li></ul> | None
Delete Circle | DELETE | /api/circle/circleID | <ul><li>400</li> <li>404</li> <li>401</li> <li>200</li></ul> | None

## Post
Action | HTTP Request | Address | Possible Responses | JSON Sent With Request
--- | --- | --- | --- | ---
Create Post | POST | /api/post/ | <ul><li>400</li> <li>200</li> <li>401</li></ul> | `{"title":"postTitle","content":"contentInBase64","group":"userGroupId"}`
Get Post | GET | /api/post/postID | <ul><li>400</li> <li>404</li> <li>401</li><li>`{"id":"postId","title":"postTitle","author":"authorUserId","group":"userGroupId","content":"contentInBase64","time":"timeOfPost","stars":"listOfStarIds"}`</li></ul> | None
Get Post | GET | /api/post/?id=postID | <ul><li>400</li> <li>404</li> <li>401</li><li>`{"id":"postId","title":"postTitle","author":"authorUserId","group":"userGroupId","content":"contentInBase64","time":"timeOfPost","stars":"listOfStarIds"}`</li></ul> | None
Delete Post | DELETE | /api/post/postID | <ul><li>400</li> <li>404</li> <li>200</li></ul> | None

## Comment
Action | HTTP Request | Address | Possible Responses | JSON Sent With Request
--- | --- | --- | --- | ---
Create Comment | POST | /api/comment/ | <ul><li>400</li> <li>200</li> <li>401</li></ul> | `{"post":"postId","content":"contentInBase64"}`
Get Comment | GET | /api/comment/commentID | <ul><li>400</li> <li>404</li> <li>401</li><li>`{"id":"commentId","author":"authorUserId","content":"contentInBase64","post":"postId","time":"timeOfPost"}`</li></ul> | None
Get Comment | GET | /api/comment/?id=commentID | <ul><li>400</li> <li>404</li> <li>401</li><li>`{"id":"commentId","author":"authorUserId","content":"contentInBase64","post":"postId","time":"timeOfPost"}`</li></ul> | None
Delete Comment | DELETE | /api/comment/commentID | <ul><li>400</li> <li>404</li> <li>200</li></ul> | None


## User Star
Action | HTTP Request | Address | Possible Responses | JSON Sent With Request
--- | --- | --- | --- | ---
Create User Star | POST | /api/userStar/ | <ul><li>400</li> <li>401</li> <li>`{"id":"userStarID","post":"postID","time":"timeOfUserStar","user":"userId"}`</li></ul> | `{"post":"postId"}`
Get User Star | GET | /api/userStar/userStarID | <ul><li>400</li> <li>404</li> <li>401</li><li>`{"id":"userStarID","author":"authorUserId","user":"userId","time":"timeOfUserStar"}`</li></ul> | None
Get User Star | GET | /api/userStar/?id=userStarID | <ul><li>400</li> <li>404</li> <li>401</li><li>`{"id":"userStarID","author":"authorUserId","user":"userId","time":"timeOfUserStar"}`</li></ul> | None
Delete User Star | DELETE | /api/userStar/userStarID | <ul><li>400</li> <li>404</li> <li>401</li> <li>200</li></ul> | None