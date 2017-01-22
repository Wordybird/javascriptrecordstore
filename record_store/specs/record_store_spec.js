var assert = require('assert');
var RecordStore = require('../record_store');
var Record = require('../record');

describe('RecordStore', function() {

  var record_store;
  var record1;
  var record2;

  beforeEach(function() {
    record_store = new RecordStore('Ricki Music','Edinburgh');
    record1 = new Record('Led Zeppelin','When The Levee Breaks',13.50)
    record2 = new Record('Thin Lizzy','Jailbreak',15.75);
  });

  it('should have no records at start', function() {
    assert.deepEqual([], record_store.records);
  });

  it('should have a name', function() {
    assert.equal('Ricki Music', record_store.name);
  });

  it('should have a city', function() {
    assert.equal('Edinburgh', record_store.city);
  });

  it('should add an account', function() {
    record_store.addRecord(record1);
    assert.deepEqual([record1], record_store.findRecordByArtist('Led Zeppelin'));
  });
});