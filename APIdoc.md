# API Documentation

---

## Authentication
Action | HTTP Request| Address | Possible Responses | JSON Sent With Request
--- | --- | --- | --- | ---
Create User | POST | /api/login | <ul><li>401</li> <li>`{"email":"user@ema.il", "roles":"listOfRoles","token_type":"Bearer", "access_token":"token", "expires_in":"timeBeforeExpires", "refresh_token":"token" }`</li> </ul> | `{"email":"user@ema.il", "password":"userPassword"}`

## User
Action | HTTP Request | Address | Possible Responses | JSON Sent With Request
--- | --- | --- | --- | ---
Create User | POST | /api/user/ | <ul><li>400</li> <li>200</li></ul> | `{"name":"userName","email":"user@ema.il","password":"userPassword","picture":"userPictureInBase64"}`
Get User | GET | /api/user/userID | <ul><li>400</li> <li>404</li> <li>`{"id":"userID","name":"userName","picture":"userPictureInBase64","circles":"listOfUserGroupIds,"posts":"listOfPostIDs","stars":"listOfStarIds"}`</li></ul> | None
Get User | GET | /api/user/?id=userID | <ul><li>400</li> <li>404</li> <li>`{"id":"userID","name":"userName","picture":"userPictureInBase64","circles":"listOfUserGroupIds,"posts":"listOfPostIDs","stars":"listOfStarIds"}`</li></ul> | None
Get User from Token | GET | /api/user/ | <ul><li>400</li> <li>404</li> <li>`{"id":"userID","name":"userName","picture":"userPictureInBase64","circles":"listOfUserGroupIds,"Posts":"listOfPostIDs","stars":"listOfStarIds"}`</li></ul> | None
Delete User | DELETE | /api/user/UserID | <ul><li>400</li> <li>404</li> <li>200</li></ul> | None

## User Group
Action | HTTP Request | Address | Possible Responses | JSON Sent With Request
--- | --- | --- | --- | ---
Create User Group | POST | /api/userGroup/ | <ul><li>400</li> <li>200</li></ul> | `{"name":"userGroupName","description":"userGroupDescription"}`
Get User Group | GET | /api/userGroup/userGroupID | <ul><li>400</li> <li>404</li> <li>401</li> <li>`{"id":"userGroupID","name":"userGroupName","users":"listOfUserIDs","posts":"listOfPostIDs"}`</li></ul> | None
Get User Group | GET | /api/userGroup/?id=userGroupID | <ul><li>400</li> <li>404</li> <li>401</li> <li>`{"id":"userGroupID","name":"userGroupName","users":"listOfUserIDs","posts":"listOfPostIDs"}`</li></ul> | None
Delete User Group | DELETE | /api/userGroup/userGroupID | <ul><li>400</li> <li>404</li> <li>401</li> <li>200</li></ul> | None

## Post
Action | HTTP Request | Address | Possible Responses | JSON Sent With Request
--- | --- | --- | --- | ---
Create Post | POST | /api/post/ | <ul><li>400</li> <li>200</li> <li>401</li></ul> | `{"title":"postTitle","content":"contentInBase64","group":"userGroupId"}`
Get Post | GET | /api/post/postID | <ul><li>400</li> <li>404</li> <li>401</li><li>`{"id":"postId","title":"postTitle","author":"authorUserId","group":"userGroupId","content":"contentInBase64","time":"timeOfPost","stars":"listOfStarIds"}`</li></ul> | None
Get Post | GET | /api/post/?id=postID | <ul><li>400</li> <li>404</li> <li>401</li><li>`{"id":"postId","title":"postTitle","author":"authorUserId","group":"userGroupId","content":"contentInBase64","time":"timeOfPost","stars":"listOfStarIds"}`</li></ul> | None
Delete Post | DELETE | /api/post/postID | <ul><li>400</li> <li>404</li> <li>200</li></ul> | None


## User Star
Action | HTTP Request | Address | Possible Responses | JSON Sent With Request
--- | --- | --- | --- | ---
Create User Star | POST | /api/userStar/ | <ul><li>400</li> <li>401</li> <li>`{"id":"userStarID","post":"postID","time":"timeOfUserStar","user":"userId"}`</li></ul> | `{"post":"postId"}`
Get User Star | GET | /api/userStar/userStarID | <ul><li>400</li> <li>404</li> <li>401</li><li>`{"id":"userStarID","author":"authorUserId","user":"userId","time":"timeOfUserStar"}`</li></ul> | None
Get User Star | GET | /api/userStar/?id=userStarID | <ul><li>400</li> <li>404</li> <li>401</li><li>`{"id":"userStarID","author":"authorUserId","user":"userId","time":"timeOfUserStar"}`</li></ul> | None
Delete User Star | DELETE | /api/userStar/userStarID | <ul><li>400</li> <li>404</li> <li>401</li> <li>200</li></ul> | None