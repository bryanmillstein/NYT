NYT.Views.FashionIndex = Backbone.CompositeView.extend({
  // Note that this view is a composite view and we are not simply appending
  // articles to the DOM. We are in fact creating a new separate view for
  // each article and then adding that view in here as a sub view. This allows
  // us to manipulate each sub view independently of the others and without having
  // to re render the entire index. This comes in handy for things like 'liking' an
  // article or making a comment. With sub views, these client interactions can be
  // accounted for and the corresponding view updated without having to render the
  // index again.
  
  template: NYT.JST["fashion/index"],
  tagName: 'section',

  initialize: function () {
    this.render();
  },

  render: function () {
    $(".main")[0].classList.add("wide");

    var content = this.template;
    this.$el.html(content);

    this.renderArticles();
    return this;
  },

  renderArticles: function () {
    this.collection.each(this.addArticle.bind(this));
  },

  addArticle: function (article) {
    var articleView = new NYT.Views.FashionShow({ model: article });

    this.addSubview('.fashion', articleView);
  }


});
