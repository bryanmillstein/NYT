NYT.JST = {};

NYT.JST['articles/index'] = _.template(
  "<hgroup class='news-header group'><h1 id='news-tag'>All the News That's Fit to Print</h1><a href='#/fashion' id='fashion-link'>View Fashion</a></hgroup><ul class='articles group'></ul>"
);

NYT.JST['articles/show'] = _.template(
  "<article class='article-info'><figure><a href='<%= link %>' target='_blank'><img src='<%= imageUrl %>'/></a><figcaption><%= imageCredit %></figcaption></figure><hgroup><a href='<%= link %>' target='_blank'><h1 class='article-title'><%= title %></h1></a><h5 class='article-description'><%= description %></h5></hgroup></article>"
);

NYT.JST['fashion/index'] = _.template(
  "<hgroup class='fashion-header group'><h1 id='fashion-tag'>More From Fashion & Style</h1><a href='#/news' id='news-link'>View News</a></hgroup><ul class='fashion group'></ul>"
);

NYT.JST['fashion/show'] = _.template(
  "<article class='article-info'><figure><a href='<%= link %>' target='_blank'><img src='<%= imageUrl %>'/></figure><hgroup><h1 class='article-headline'><%= headline %></h1></a><h2 class='article-pub-date'><%= pubdate %></h2></hgroup></article>"
);
