# Ateliê da Adri
A catalog site created with React, NextJS and NetllifyCMS. 

## Motivation
The client asked for a simple and unexpensive solution to showcase her work in social medias. The client didn't need an e-commerce site and, since it is a small local business, she asked to reduce the cost to the minimun to maintain the application. My solution was to remove the backend of the app, this way we didn't need to hire a VPS or a cloud service. I wanted to learn how a SSG worked, so I used nextJS to create the static pages of the site. Its dynamic route pagination suited pretty well my need to have a page for each product without standard backend routes and a database. NetlifyCMS will be used by the client to add the products herself, everytime a new product is added, NetlifyCMS creates it in a markdown file in this github project page. Since the data written by the client doesn't have any sensible information, it is ok for it to be public in the md files of my repo. I've also created a responsive and mobile-friendly unique theme with SASS to match the style of her business.

Even if the solution to this problem is clean and works well, it has some small issues. One of them is that, since we don't have backend routes set, NextJS router can only find and create the right page if it is in the same tab. In the moment the user opens a new tab for the product, NextJS router lost the route to the id of the product and returns 404. I couldn't find any usable solution to this problem (other than setting a real backend to the app), if you have any ideia on how to solve this issue, feel free to pr my repo =) I've explained those small issues to the client and she accepted them because, according to her, 95% of the userbase of the application would be mobile and in a mobile interface those issues doesn't happen.

In this project I've learned a lot on how to work with SSG, headless CMS's, the structure and language behind markdown content and configuration of a YML file. I also understood more about how react behave on some unconvetional structures (learning how to get the dynamic page URL to filter a product was fun!) and what is possible to achieve without a backend to hold the ground for the application. 



## Built With

* [React](https://reactjs.org/) - The js framework of choice
* [NextJS](https://nextjs.org/) - React framework used for SSG and integration with the CMS
* [NetlifyCMS](https://www.netlifycms.org/) - Headless CMS
* [SASS](https://sass-lang.com/) - For the responsive and mobile-friendly layout
* [Front Matter Markdown](https://www.npmjs.com/package/frontmatter-markdown-loader) - Webpack loader that loads md files direct in React components.
