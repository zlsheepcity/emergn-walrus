# emergn-walrus 0.0.2
Started: Nov 24, 2020 (international walrus day)  
Status: First presentation complete

## Features

Prototype screens
- https://zlsheepcity.github.io/emergn-walrus/dist/#/PageIntro

Admin Tool
- Load list
- Edit list
- Editor: create, update, delete item

## Todo

Admin Tool
- Save/Update DataBase
- Editor: change order

## Demo
https://zlsheepcity.github.io/emergn-walrus/dist/

## Code
https://github.com/zlsheepcity/emergn-walrus

- [List model](https://github.com/zlsheepcity/emergn-walrus/blob/master/src/models/EditableList.js)
- [List example](https://github.com/zlsheepcity/emergn-walrus/blob/master/src/models/ExampleList.js)


### Develop


```BASH
npm install
npm run serve
npm run build
```
[Vue CLI Configuration Reference](https://cli.vuejs.org/config/)


### Project log


```BASH
vue create walrus
cd  walrus
vue add vuetify

git init
git add .
git commit -m "Initial setup"
git remote add origin https://github.com/zlsheepcity/emergn-walrus.git
git remote -v
git push origin master

...create model  - editable list
...create screen - list editor
...publish checkpoint
```
