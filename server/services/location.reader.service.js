import Tabletop from 'tabletop';
import q from 'q';
import _ from 'lodash';

export default class LocationReader {
  get() {
    return this
      .load()
      .then(this.parse)
      .then(this.removeFutureLocations);
  }

  load() {
    const publicSpreadsheetUrl = 'https://docs.google.com/spreadsheet/pub?hl=en_US&hl=en_US&key=1ujZWyJk4CftjJtZqPINWhbtKwCBR8QMQ2d3uMoK7zvU&output=html';
    const deferred = q.defer();

    var callback = (data) => {
      deferred.resolve(data);
    };

    Tabletop.init({
      key: publicSpreadsheetUrl,
      callback: callback,
      simpleSheet: true
    });

    return deferred.promise;
  }

  parse(data) {
    return _.map(data, (x) => ({
      'lat': parseFloat(x.Lat),
      'lng': parseFloat(x.Long),
      'latLng': x.Lat + ',' + x.Long,
      'description': x.Location + ', ' + x.Country,
      'date': x.Date
    }));
  }

  removeFutureLocations(data) {
    return _.filter(data, x => new Date(x.date) <= Date.now());
  }
}
