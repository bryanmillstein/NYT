window.NYT = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function(){
    NYTROUTER = new NYT.Routers.Router({ $rootEl: $('#main') });
    Backbone.history.start();
  },
}

// Create a callback functions to handle the data in the JSONP objects 
// returned after the ajax requests are complete.

window.jsonFeedCallback_homepage = function(data) {
  var articles = data.items;
  NYTROUTER.homeShow(articles);

}

window.jsonFeedCallback_fashion = function(data) {
  var articles = data.items;
  NYTROUTER.fashionShow(articles);

}
