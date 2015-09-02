NYT.Views.ArticlesIndex = Backbone.CompositeView.extend({
  // Note that this view is a composite view and we are not simply appending
  // articles to the DOM. We are in fact creating a new separate view for
  // each article and then adding that view in here as a sub view. This allows
  // us to manipulate each sub view independently of the others and without having
  // to re render the entire index. This comes in handy for things like 'liking' an
  // article or making a comment. With sub views, these client interactions can be
  // accounted for and the corresponding view updated without having to render the
  // index again.

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
    // The first article business below keeps track of which article will
    // be first in the feed so we can capture and render the appropriate sized
    // version of the image.

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
