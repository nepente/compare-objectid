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

  if (!(objID1 instanceof ObjectID)) {
    comparableObjID1 = new ObjectID(objID1);
  }

  if (!(objID2 instanceof ObjectID)) {
    comparableObjID2 = new ObjectID(objID2);
  }

  return comparableObjID1.equals(comparableObjID2);
}

module.exports = compareObjectIDs;
