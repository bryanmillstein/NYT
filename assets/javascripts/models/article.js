NYT.Models.Article = Backbone.Model.extend ({
  // For the purposes of this sample application, our urlRoot is set to
  // the location of the given JSON object.
  urlRoot: 'http://static01.nyt.com/services/json/sectionfronts/index.json'

  // If we were incorporating a more robust RESTful API,
  // we would likely use the following to make a GET request.

  // urlRoot: '/articles'
});
