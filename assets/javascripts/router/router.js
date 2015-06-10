NYT.Routers.Router = Backbone.Router.extend ({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "": 'homeRequest',
    "fashion": "fashionRequest"
  },

  homeRequest: function (){
    // Make a custom ajax request using JSONP to overcome
    // same origin policy.

    $.ajax({
      url: "http://static01.nyt.com/services/json/sectionfronts/index.jsonp",
      dataType: "jsonp"

    });

    // The above ajax request is wrapped in a call back function that will
    // call the homeShow function passing in the returned data.

  },

  homeShow: function (articles) {
    var homeArticles = new NYT.Collections.Articles();

    // Add each article to the empty collection of articles.
    // This will create a model for each article preserving its original
    // attributes from the JSON object.

    articles.forEach(function (article){
      homeArticles.add(article);
    });

    var articlesView = new NYT.Views.ArticlesIndex({ collection: homeArticles });

    this._swapView(articlesView);
  },

  fashionRequest: function (){
    $.ajax({
      url: "http://static01.nyt.com/services/json/sectionfronts/fashion/index.jsonp",
      dataType: "jsonp"

    });
  },

  fashionShow: function (articles) {
    var fashionArticles = new NYT.Collections.Articles();

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
