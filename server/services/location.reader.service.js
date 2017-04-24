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
    const publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1BSiHZZxiYlshSZgDW5bw-LFAdoNc01joeBNE9lzWidQ/pubhtml?gid=0&single=true';
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
