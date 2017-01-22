var assert = require('assert');
var Record = require('../record');

describe('Record', function() {

  beforeEach(function() {
    record1 = new Record('Led Zeppelin','When The Levee Breaks',13.50);
    record2 = new Record('Thin Lizzy','Jailbreak',15.75);
    record3 = new Record('Rolling Stones','Paint It Black',12.50);
  });

  it('should have an artist', function() {
    assert.equal('Led Zeppelin', record1.artist);
  });

  it('should have a title', function() {
    assert.equal('When The Levee Breaks', record1.title);
  });

  it('should have a price', function() {
    assert.equal(13.50, record1.price);
  });
  
})