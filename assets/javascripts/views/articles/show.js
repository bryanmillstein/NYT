NYT.Views.ArticleShow = Backbone.View.extend ({

  template: NYT.JST['articles/show'],
  className: 'article-display',
  tagName: 'li',

  initialize: function (options) {
    // this.firstArticle = options.firstArticle;
    // this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var title = this.model.attributes.title,
        description = this.model.attributes.description;

    // Lines 20-38 below handle situations where an article has nested promotional_media keys.
    // The idea is to continue checking until you've reached the last promotional_media and then
    // setting the value of the imageUrl.

    var promoCheck = this.model.attributes,
        hasPromo = false,
        imageUrl = null,
        imageCredit = null;
    while (true) {
      if (promoCheck.promotional_media) {
        hasPromo = true;
        promoCheck = promoCheck.promotional_media;
      } else if (hasPromo) {
        // if (this.firstArticle) {
        //   imageUrl = promoCheck.image.image_crops.master495.url;
        //   imageCredit = promoCheck.image.credit;
        //   break
        // } else {
          imageUrl = promoCheck.image.image_crops.mediumThreeByTwo210.url;
          imageCredit = promoCheck.image.credit;
          break
        // }
      } else {
        break
      }
    }

    var content = this.template({ article: this.model, title: title, description: description, imageUrl: imageUrl, imageCredit: imageCredit });

    this.$el.html(content);

    return this;
  }

});
