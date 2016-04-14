var expect = require('chai').expect;
var ObjectID = require('mongodb').ObjectID;
var compareObjectIDs = require('../src/compare-objectid');

describe('compareObjectIDs', function() {
  it('Deve ser \'true\' se ambos parametros forem ObjectID e iguais', function() {
    var objID1 = new ObjectID();
    var objID2 = new ObjectID(objID1.toString());

    var saoIguais = compareObjectIDs(objID1, objID2);

    expect(saoIguais).to.be.equal(true);
  });

  it('Deve ser \'false\' se ambos parametros forem ObjectID e diferentes', function() {
    var saoIguais = compareObjectIDs(new ObjectID(), new ObjectID());

    expect(saoIguais).to.be.equal(false);
  });

  it('Deve ser \'true\' se o primeiro parametro for String,' +
     'o segundo ObjectID, e iguais', function() {
    var objID1 = new ObjectID();
    var objID2 = objID1.toString();

    var saoIguais = compareObjectIDs(objID2, objID1);

    expect(saoIguais).to.be.equal(true);
  });

  it('Deve ser \'false\' se o primeiro parametro for ObjectID' +
     ', o segundo String, e diferentes', function() {
    var saoIguais = compareObjectIDs(new ObjectID(), new ObjectID().toString());
    expect(saoIguais).to.be.equal(false);
  });

  it('Deve ser \'true\' se o primeiro parametro for String' +
     ', o segundo ObjectID, e iguais', function() {
    var objID1 = new ObjectID();
    var objID2 = objID1.toString();

    var saoIguais = compareObjectIDs(objID2, objID1);

    expect(saoIguais).to.be.equal(true);
  });

  it('Deve ser \'false\' se o primeiro parametro for ObjectID' +
     ', o segundo String, e diferentes', function() {
    var saoIguais = compareObjectIDs(new ObjectID(), new ObjectID().toString());
    expect(saoIguais).to.be.equal(false);
  });

  it('Deve ser \'false\' se o primeiro parametro for null', function() {
    var saoIguais = compareObjectIDs(null, new ObjectID());
    expect(saoIguais).to.be.equal(false);
  });

  it('Deve ser \'false\' se o segundo parametro for null', function() {
    var saoIguais = compareObjectIDs(new ObjectID(), null);
    expect(saoIguais).to.be.equal(false);
  });

  it('Deve ser \'false\' se o primeiro parametro for undefined', function() {
    var saoIguais = compareObjectIDs(void 0, new ObjectID());
    expect(saoIguais).to.be.equal(false);
  });

  it('Deve ser \'false\' se o segundo parametro for undefined', function() {
    var saoIguais = compareObjectIDs(new ObjectID(), void 0);
    expect(saoIguais).to.be.equal(false);
  });

  it('Deve ser \'false\' se o primeiro parametro for Object', function() {
    var saoIguais = compareObjectIDs({}, new ObjectID());
    expect(saoIguais).to.be.equal(false);
  });

  it('Deve ser \'false\' se o segundo parametro for Object', function() {
    var saoIguais = compareObjectIDs(new ObjectID(), {});
    expect(saoIguais).to.be.equal(false);
  });

  it('Deve ser \'false\' se o primeiro parametro for Date', function() {
    var saoIguais = compareObjectIDs(new Date(), new ObjectID());
    expect(saoIguais).to.be.equal(false);
  });

  it('Deve ser \'false\' se o segundo parametro for Date', function() {
    var saoIguais = compareObjectIDs(new ObjectID(), new Date());
    expect(saoIguais).to.be.equal(false);
  });

  it('Deve retornar uma função parcialmente aplicada se' +
     ' apenas um parâmetro for fornecido', function() {
    var objID1 = new ObjectID();
    var objID2 = new ObjectID(objID1.toString());

    var saoIguais = compareObjectIDs(objID1)(objID2);

    expect(saoIguais).to.be.equal(true);
  });
});
