# API Documentation

---

## User
Action | HTTP Request | Address | Possible Responses | JSON Sent With Request
--- | --- | --- | --- | ---
Create User | POST | /user/ | <ul><li>400</li> <li>200</li></ul> | `{name:"userName","email":"user@ema.il","password":"userPassword","picture":"userPictureInBase64"}`
Get User | GET | /user/userID | <ul><li>400</li> <li>404</li> <li>`{"id":"userID","name":"userName","picture":"userPictureInBase64","circles":"listOfUserGroupIds,"posts":"listOfPostIDs","stars":"listOfStarIds"}`</li></ul> | None
Get User | GET | /user/?id=userID | <ul><li>400</li> <li>404</li> <li>`{"id":"userID","name":"userName","picture":"userPictureInBase64","circles":"listOfUserGroupIds,"posts":"listOfPostIDs","stars":"listOfStarIds"}`</li></ul> | None
Get User | GET | /user/?email=user@ema.il&password=userPassword | <ul><li>400</li> <li>404</li> <li>`{"id":"userID","name":"userName","picture":"userPictureInBase64","circles":"listOfUserGroupIds,"Posts":"listOfPostIDs","stars":"listOfStarIds"}`</li></ul> | None
Delete User | DELETE | /user/UserID | <ul><li>400</li> <li>404</li> <li>200</li></ul> | None

## User Group
Action | HTTP Request | Address | Possible Responses | JSON Sent With Request
--- | --- | --- | --- | ---
Create User Group | POST | /userGroup/ | <ul><li>400</li> <li>200</li></ul> | `{name:"userGroupName","description":"userGroupDescription","creator":"fristUserID"}`
Get User Group | GET | /userGroup/userGroupID | <ul><li>400</li> <li>404</li> <li>`{"id":"userGroupID","name":"userGroupName","users":"listOfUserIDs","posts":"listOfPostIDs"}`</li></ul> | None
Get User Group | GET | /userGroup/?id=userGroupID | <ul><li>400</li> <li>404</li> <li>`{"id":"userGroupID","name":"userGroupName","users":"listOfUserIDs","posts":"listOfPostIDs"}`</li></ul> | None
Delete User Group | DELETE | /userGroup/userGroupID | <ul><li>400</li> <li>404</li> <li>200</li></ul> | None

## Post
Action | HTTP Request | Address | Possible Responses | JSON Sent With Request
--- | --- | --- | --- | ---
Create Post | POST | /post/ | <ul><li>400</li> <li>200</li></ul> | `{"group":"userGroupId","user":"userId"}`
Get Post | GET | /post/postID | <ul><li>400</li> <li>404</li> <li>`{"id":"postId","title":"postTitle","author":"authorUserId","group":"userGroupId","content":"contentInBase64","time":"timeOfPost","stars":"listOfStarIds"}`</li></ul> | None
Get Post | GET | /post/?id=postID | <ul><li>400</li> <li>404</li> <li>`{"id":"postId","title":"postTitle","author":"authorUserId","group":"userGroupId","content":"contentInBase64","time":"timeOfPost","stars":"listOfStarIds"}`</li></ul> | None
Delete Post | DELETE | /post/postID | <ul><li>400</li> <li>404</li> <li>200</li></ul> | None


## User Star
Action | HTTP Request | Address | Possible Responses | JSON Sent With Request
--- | --- | --- | --- | ---
Create User Star | POST | /userStar/ | <ul><li>400</li> <li>200</li></ul> | `{"author":"authorUserId","user":"userId"}`
Get User Star | GET | /userStar/userStarID | <ul><li>400</li> <li>404</li> <li>`{"id":"userStarID","author":"authorUserId","user":"userId","time":"timeOfUserStar"}`</li></ul> | None
Get User Star | GET | /userStar/?id=userStarID | <ul><li>400</li> <li>404</li> <li>`{"id":"userStarID","author":"authorUserId","user":"userId","time":"timeOfUserStar"}`</li></ul> | None
Delete User Star | DELETE | /userStar/userStarID | <ul><li>400</li> <li>404</li> <li>200</li></ul> | None