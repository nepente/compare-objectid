var ObjectID = require('mongodb').ObjectID;

function compareObjectIDs(objID1, objID2) {
  var comparableObjID1 = objID1;
  var comparableObjID2 = objID2;

  if (arguments.length === 1) {
    return compareObjectIDs.bind(null, objID1);
  }

  if (!objID1) {
    return false;
  }

  if (!objID2) {
    return false;
  }

  if (typeof(objID1) === 'string') {
    comparableObjID1 = new ObjectID(objID1);
  }

  if (typeof(objID2) === 'string') {
    comparableObjID2 = new ObjectID(objID2);
  }

  if (!(comparableObjID1 instanceof ObjectID) || !(comparableObjID2 instanceof ObjectID)) {
    return false;
  }

  return comparableObjID1.equals(comparableObjID2);
}

module.exports = compareObjectIDs;
