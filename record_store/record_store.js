var RecordStore = function(name, city) {
  this.name = name;
  this.city = city;
  this.records = [];
}

RecordStore.prototype = {
  addRecord: function(record) {
    this.records.push(record);
  },
  findRecordByArtist: function(artist) {
    return this.records.filter(function(record) {
      return record.artist === artist;
    });
  }
}

module.exports = RecordStore;