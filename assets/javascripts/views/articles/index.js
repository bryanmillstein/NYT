NYT.Views.ArticlesIndex = Backbone.CompositeView.extend({
  template: NYT.JST["articles/index"],
  tagName: 'section',

  initialize: function () {
    this.render();
  },

  render: function () {
    $(".main")[0].classList.remove("wide");

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


    if (article.cid == this.collection.models[0].cid) {
      firstArticle = true;
    } else {
      firstArticle = false;
    }

    var articleView = new NYT.Views.ArticleShow({ model: article, firstArticle: firstArticle });

    this.addSubview('.articles', articleView);
  }


});
