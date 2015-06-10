NYT.JST = {};

NYT.JST['articles/index'] = _.template(
  "<ul class='articles group'></ul>"
);

NYT.JST['articles/show'] = _.template(
  "<article class='article-info'><img src='<%= imageUrl %>'/><figcaption><%= imageCredit %></figcaption><h1 class='article-title'><%= title %></h1><h5 class='article-description'><%= description %></h5></article>"

);
