var RecordStore = function(name, city) {
  this.name = name;
  this.city = city;
  this.records = [];
  this.balance = 0;
}

RecordStore.prototype = {
  addRecord: function(record) {
    this.records.push(record);
  },
  findRecordByArtist: function(artist) {
    return this.records.filter(function(record) {
      return record.artist === artist;
    });
  },
  displayRecords: function() {
    return this.records;
  },
  sellRecord: function(price) {
    return this.records.pop(function(record) {
      var newBalance = record.price;
  }.bind(this));
  this.balance += newBalance;
  }
}

module.exports = RecordStore;