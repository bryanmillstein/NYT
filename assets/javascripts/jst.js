NYT.JST = {};

NYT.JST['articles/index'] = _.template(
  "<ul class='articles group'></ul>"
);

NYT.JST['articles/show'] = _.template(
  "<article class='article-info'><figure><a href='<%= link %>' target='_blank'><img src='<%= imageUrl %>'/></a><figcaption><%= imageCredit %></figcaption></figure><hgroup><a href='<%= link %>' target='_blank'><h1 class='article-title'><%= title %></h1></a><h5 class='article-description'><%= description %></h5></hgroup></article>"

);
