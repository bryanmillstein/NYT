NYT.Views.ArticlesIndex = Backbone.CompositeView.extend({
  template: NYT.JST["articles/index"],
  tagName: 'section',

  initialize: function () {
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
    var firstArticle;

    if (article.cid == "c1") {
      firstArticle = true;
    } else {
      firstArticle = false;
    }

    var articleView = new NYT.Views.ArticleShow({ model: article, firstArticle: firstArticle });

    this.addSubview('.articles', articleView);
  }


});
