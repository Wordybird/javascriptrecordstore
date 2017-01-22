var assert = require('assert');
var Record = require('../record');

describe('Record', function() {

  var record = new Record('Led Zeppelin','When The Levee Breaks',13.50);

  it('should have an artist', function() {
    assert.equal('Led Zeppelin', record.artist);
  });

  it('should have a title', function() {
    assert.equal('When The Levee Breaks', record.title);
  });

  it('should have a price', function() {
    assert.equal(13.50, record.price);
  });
  
})