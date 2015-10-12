# streamusic
stream music application

![alt tag] (https://cloud.githubusercontent.com/assets/13312530/9938380/a9848ad6-5d6d-11e5-8e14-d44548b22254.png)

#dependencies
==> NodeJS
==> Express 
==> Backbone
==> RequireJS
==> MongoDB

#streamusic-api

Method    | Endpoint                        | Usage                 | Returns
----------|---------------------------------|-----------------------|--------
  Get     |  /api/v1/user/me/tracks         |  get my tracks        |  *tracks       
  Get     |  /api/v1/user/me/profile        |  get my profile       |  profile
  Get     |  /api/v1/user/{user_id}/tracks  |  get user tracks      |  *tracks
  Get     |  /api/v1/user/{user_id}/profile |  get user profile     |  profile          
  Get     |  /api/v1/track/{track_id}       |  get track info       |  track     
  Get     |  /auth/authenticate             |  check authentication |  status     


- [ ] will control token expiration

#console
#####API
$cd streamusic/streamusic-api/
$node app.js
#####SERVE
$cd streamusic/streamusic-serve/
$node app.js
####MONGODB
collections ==> tracks, users
