NYT.Views.ArticlesIndex = Backbone.CompositeView.extend({
  template: NYT.JST["articles/index"],
  tagName: 'section',

  initialize: function () {
    this.firstArticle = true;
    this.render();
  },

  render: function () {
    var content = this.template;
    this.$el.html(content);

    this.renderArticles();
    return this;
  },

  renderArticles: function () {
    this.collection.each(this.addArticle.bind(this));
  },

  addArticle: function (article) {
    var articleView = new NYT.Views.ArticleShow({ model: article, firstArticle: this.firstArticle });

    this.addSubview('.articles', articleView);

    this.firstArticle = false;

  }


});
