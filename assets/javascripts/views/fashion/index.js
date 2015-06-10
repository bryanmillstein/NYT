NYT.Views.FashionIndex = Backbone.CompositeView.extend({
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
