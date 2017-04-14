import LocationReader from '../services/location.reader.service';

const Api = {
  configure: (router) => {
    router.get('/api/locations', async (ctx) => {
      await new LocationReader().get()
        .then((data) => {
          ctx.body = data;
        });
    });
  },
};

export default Api;
