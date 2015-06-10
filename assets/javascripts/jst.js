NYT.JST = {};

NYT.JST['articles/index'] = _.template(
  "<a href='#/fashion'>View Fashion</a><ul class='articles group'></ul>"
);

NYT.JST['articles/show'] = _.template(
  "<article class='article-info'><figure><a href='<%= link %>' target='_blank'><img src='<%= imageUrl %>'/></a><figcaption><%= imageCredit %></figcaption></figure><hgroup><a href='<%= link %>' target='_blank'><h1 class='article-title'><%= title %></h1></a><h5 class='article-description'><%= description %></h5></hgroup></article>"
);

NYT.JST['fashion/index'] = _.template(
  "<a href='#'>View News</a><ul class='fashion group'></ul>"
);

NYT.JST['fashion/show'] = _.template(
  "<article class='article-info'><figure><a href='<%= link %>' target='_blank'><img src='<%= imageUrl %>'/></figure><h1 class='article-headline'><%= headline %></h1></a><h2 class='article-pub-date'><%= pubdate %></h2></article>"
);
