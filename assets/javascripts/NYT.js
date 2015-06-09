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

window.jsonFeedCallback_homepage = function(data) {
  var articles = data.items;
  NYTROUTER.homeShow(articles);

}
