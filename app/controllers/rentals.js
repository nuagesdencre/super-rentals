import Controller from '@ember/controller';

// Controllers contain actions and properties available to the template of its corresponding route.
//   In our case we want to generate a controller called rentals.
//   Ember will know that a controller with the name of rentals will apply to the route with the same name.


export default Controller.extend({
  actions: {
    filterByCity(param) {
      if (param !== '') {
        return this.store
          .query('rental', { city: param }).then((results) => {
            return { query: param, results: results };
          });
      } else {
        return this.store
          .findAll('rental').then((results) => {
            return { query: param, results: results };
          });
      }
    }
  }
});
