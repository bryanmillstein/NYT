NYT.Views.FashionShow = Backbone.View.extend ({

  template: NYT.JST['fashion/show'],
  className: 'article-display',
  tagName: 'li',

  initialize: function () {
  },

  render: function () {
    // publication, pubdate, headline
    var pubdate = this.model.attributes.pubdate,
        headline = this.model.attributes.headline,
        link = this.model.attributes.link;

    // Handle date conversion.

    var date = new Date(pubdate),
        dateString = date.toDateString(),
        dateSplit = dateString.split(" ");

    dateSplit.shift();
    var dateStamp = dateSplit.join(" ");

    this.imageUrl = "assets/images/the-new-york-times-logo-small.jpg";

    // The call to this.promoCheck below handles situations where an article has nested
    // promotional_media keys. The idea is to continue checking until you've reached the
    // last promotional_media and then setting the value of the imageUrl and imageCredit.
    // If no promotional_media is found, the imageUrl will be set to default and the
    // imageCredit to null.

    this.promoCheck();

    var content = this.template({ article: this.model, headline: headline, pubdate: dateStamp, link: link, imageUrl: this.imageUrl });

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
          }
          break
        } else {
          if (promoCheck.image.image_crops.mediumThreeByTwo210) {
            this.imageUrl = promoCheck.image.image_crops.mediumThreeByTwo210.url;
          }
          break
        }
      } else {
        break
      }
    }
  }

});
