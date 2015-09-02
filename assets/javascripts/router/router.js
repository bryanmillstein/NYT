NYT.Routers.Router = Backbone.Router.extend ({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "news": 'newsRequest',
    "fashion": "fashionRequest"
  },

  newsRequest: function (){
    // Make a custom ajax request using JSONP to overcome
    // same origin policy.

    $.ajax({
      url: "http://static01.nyt.com/services/json/sectionfronts/index.jsonp",
      dataType: "jsonp"

    });

    // The above ajax request is wrapped in a call back function that will
    // call the newsShow function passing in the returned data.

  },

  newsShow: function (articles) {
    var newsArticles = new NYT.Collections.Articles();

    // Add each article to the empty collection of articles.
    // This will create a model for each article preserving its original
    // attributes from the JSON object.

    articles.forEach(function (article){
      newsArticles.add(article);
    });

    var articlesView = new NYT.Views.ArticlesIndex({ collection: newsArticles });

    this._swapView(articlesView);
  },

  fashionRequest: function (){
    $.ajax({
      url: "http://static01.nyt.com/services/json/sectionfronts/fashion/index.jsonp",
      dataType: "jsonp"

    });

    // The above ajax request is wrapped in a call back function that will
    // call the fashionShow function passing in the returned data.
  },

  fashionShow: function (articles) {
    var fashionArticles = new NYT.Collections.Articles();

    // Add each article to the empty collection of articles.
    // This will create a model for each article preserving its original
    // attributes from the JSON object.

    articles.forEach(function (article){
      fashionArticles.add(article);
    });

    var articlesView = new NYT.Views.FashionIndex({ collection: fashionArticles });

    this._swapView(articlesView);
  },


  _swapView: function (view) {
  this._currentView && this._currentView.remove();
  this._currentView = view;
  this.$rootEl.html(view.render().$el);
}

});
