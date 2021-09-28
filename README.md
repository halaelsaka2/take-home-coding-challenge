Problem:
We need to create a catalog front that allows users to search and list products...
Users must select a category to see products within it.
Users can filter using the price range.
Users can combine two or more filters.

Solution: I make Front-end project to handle all these problems

- the solution focuses front-end.

- technical choices:

  - I choose React js library for the front-end.
  - I choose Ant Design library for Interface design because it contains much variety for any design, you can see it here https://ant.design .
  - I choose the Redux library for state management to facilitate communication and sharing of data across components, you can see it here https://www.npmjs.com/package/redux.

- Structure-based on file type

Trade-offs :

- for display all colors of products and max Price I make a request to get all products then filter them and get all colors and max price, so I think if there is API forget all colors and max Price it would be better than this
- if I spend more time
  - login feature
  - shopping cart feature for buyer
  - implement another role for seller, which can add product and edit it
