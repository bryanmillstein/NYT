NYT.Views.ArticleShow = Backbone.View.extend ({

  template: NYT.JST['articles/show'],
  className: 'article-display',
  tagName: 'li',

  initialize: function (options) {
    this.firstArticle = options.firstArticle;

    // If fetching data through a traditional API, rendering will need to wait
    // until the sync has been completed using the following listener. Since we are
    // completing the ajax request before creating the view, we can render automatically.

    // this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var title = this.model.attributes.title,
        description = this.model.attributes.description,
        link = this.model.attributes.link;

    if (this.firstArticle) {
      this.imageUrl = "assets/images/the-new-york-times-logo-large.jpg";
    } else {
      this.imageUrl = "assets/images/the-new-york-times-logo-small.jpg";
    }

    // The call to this.promoCheck below handles situations where an article has nested
    // promotional_media keys. The idea is to continue checking until you've reached the
    // last promotional_media and then setting the value of the imageUrl and imageCredit.
    // If no promotional_media is found, the imageUrl will be set to default and the
    // imageCredit to null.

    this.promoCheck();

    var content = this.template({ article: this.model, title: title, description: description, link: link, imageUrl: this.imageUrl, imageCredit: this.imageCredit });

    this.$el.html(content);

    return this;
  },

  promoCheck: function () {
    var promoCheck = this.model.attributes,
        hasPromo = false;

    while (true) {
      if (promoCheck.promotional_media) {
        hasPromo = true;
        promoCheck = promoCheck.promotional_media;
      } else if (hasPromo) {
        if (this.firstArticle) {
          if (promoCheck.image.image_crops.master495) {
            this.imageUrl = promoCheck.image.image_crops.master495.url;
            this.imageCredit = promoCheck.image.credit;
          }
          break
        } else {
          if (promoCheck.image.image_crops.mediumThreeByTwo210) {
            this.imageUrl = promoCheck.image.image_crops.mediumThreeByTwo210.url;
            this.imageCredit = promoCheck.image.credit;
          }
          break
        }
      } else {
        this.imageCredit = null;
        break
      }
    }
  }

});
