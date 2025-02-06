# Folder for shared staff between web and mobile

Folder __commonLib__ is used to place all common files. 

It's duplicated in __web__ and __app__ folders and any content placed in this folder at the __common__ folder level automatically 
will be duplicated at the same __commonLib__ folder at the __web__ and __app__ level

## Running sharing things

Works in the next way
  "scripts": {
    "start": "yarn watchChanges",
    "watchChanges": "cpx \"common/commonLib/**\" \"web/src/commonLib\" --watch & cpx \"common/commonLib/**\" \"app/src/commonLib\" --watch"
  },

## Important rules

1. run `npm run start` before doing anything with common folder. Only in this case it will be copied to __web__/__app__ folders
2. not to change anything directly in commonLib folders inside __web__/__app__ folders. Changes won't be tracked by git 
and will be removed after any change at the top (commom folder) level
3. to pay attention of other developers please add comment at the top of the shared file that it's top level file 
and can be edited only at the __common__ folder level
Something like this `//!!this file should be edited only on the top level (from common/commonLib folder)`


# CommonLib folders for the web/app level are added to gitignore file at the top/repo level not to duplicate this folder three timesß on github
//common folder stuff
app/src/commonLib
web/src/commonLib



