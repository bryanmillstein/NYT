# NYT News App

This repository provides the framework for creating your own news application based on feeds from the New York Times. View the [demo](http://nyt-news-app.herokuapp.com/). You can clone the repo and add pages for all your favorite topics by following the example below. Uncomment lines 51-55 of [index.html](https://github.com/bryanmillstein/NYT/blob/master/index.html) to bypass the landing page from the demo. 

# Adding a new Feed

You will need to do a few things to add new feeds. This example walks through adding the **fashion** feed.

1. In [router.js](https://github.com/bryanmillstein/NYT/blob/master/assets/javascripts/router/router.js), add the following two functions. You will need to replace **fashion** in the request url with your desired feed from the **Optional Feeds** section below.

  **fashionRequest**
  ```Javascript   
  fashionRequest: function (){
    // Wrap the ajax request in a call back function that will
    // call the fashionShow function passing in the returned data.
    $.ajax({
      url: "http://static01.nyt.com/services/json/sectionfronts/fashion/index.jsonp",
      dataType: "jsonp"
    });
  }
  ```
  **fashionShow**
  ```Javascript 
  fashionShow: function (articles) {
    var fashionArticles = new NYT.Collections.Articles();
    // Add each article to the empty collection of articles.
    // This will create a model for each article preserving its original
    // attributes from the JSON object.

    articles.forEach(function (article){
      fashionArticles.add(article);
    });

    var articlesView = new NYT.Views.FashionIndex({ collection: fashionArticles });

    this._swapView(articlesView);
  }
  ```
2. In [router.js](https://github.com/bryanmillstein/NYT/blob/master/assets/javascripts/router/router.js), add the new route.

  ```Javascript
  routes: {
      "news": 'newsRequest',
      "fashion": "fashionRequest"
    }
  ```
3. In [NYT.js](https://github.com/bryanmillstein/NYT/blob/master/assets/javascripts/NYT.js), add the callback function to handle the data in the JSONP objects. You need to swap out **fashion** in the name to match your selected feed.

  ```Javascript
  window.jsonFeedCallback_fashion = function(data) {
    var articles = data.items;
    NYTROUTER.fashionShow(articles);
  }
  ```
4. Add the [fashion] (https://github.com/bryanmillstein/NYT/tree/master/assets/javascripts/views/fashion) folder to [views](https://github.com/bryanmillstein/NYT/tree/master/assets/javascripts/views).

5. Add the [fashion] (https://github.com/bryanmillstein/NYT/tree/master/assets/templates/fashion) folder to [templates](https://github.com/bryanmillstein/NYT/tree/master/assets/templates).

# Optional Feeds

- sports
- business
- international
- national
- arts
- politics
- corrections
- world
- health
- science
- technology
- opinion
- travel
- us
- obituaries
- magazine
- realestate

