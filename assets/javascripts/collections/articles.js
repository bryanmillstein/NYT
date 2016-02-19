NYT.Collections.Articles = Backbone.Collection.extend ({
  model: NYT.Models.Article,
  url: 'http://static01.nyt.com/services/json/sectionfronts/index.json',
});
