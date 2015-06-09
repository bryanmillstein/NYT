window.NYT = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function(){
    new NYT.Routers.Router({ $rootEl: $('#main') });
    Backbone.history.start();
  }

}
