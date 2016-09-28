import Mirage from 'ember-cli-mirage';
export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  this.urlPrefix = 'http://localhost:5050';    // make this `http://localhost:8080`, for example, if your API is on a different server
  this.namespace = 'api';    // make this `api`, for example, if your API is namespaced
  this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
    */

  this.get('/events', function() {
    return new Mirage.Response(200,
    {
      'Content-Type': 'application/json'
    },
    {
      events: [{
        "id": 123,
        "version": 1,
        "createdOn": 1470083142,
        "modifiedOn": 1470083142,
        "name": "Something happened",
        "description": "More extensive description of the event",
        "severity": 6,
        "timestamp": 1470083142,
        "tags": {
          "node": "ip-1-2-3-4",
          "source": "slack",
          "user": "john"
        }
      }]
    });
  });
}
