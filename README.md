# compare-objectid

> A simple way to compare MongoDB ObjectID

## Install

```
$ npm install --save https://github.com/nepente/compare-objectid.git
```


## Usage

```js
var ObjectID = require('mongodb').ObjectID;

// ObjectID -> ObjectID -> Boolean
var compareObjectID = require('compare-objectid');

var objID = new ObjectID();
var stringObjID = objID.toString();

compareObjectID(objID, stringObjID); // => true
compareObjectID(stringObjID, objID); // => true

var partial = compareObjectID(objID); // => function(ObjectID)
partial(stringObjID); // => true
```
