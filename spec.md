# Specifications for the Rails Assessment

Specs:
- [x] Using Ruby on Rails for the project
- [x] Include at least one has_many relationship (x has_many y e.g. User has_many Recipes) question has_many answers
- [x] Include at least one belongs_to relationship (x belongs_to y e.g. Post belongs_to User) answer belongs_to questions
- [x] Include at least one has_many through relationship (x has_many y through z e.g. Recipe has_many Items through Ingredients) category has many items through category_items 
- [x] The "through" part of the has_many through includes at least one user submittable attribute (attribute_name e.g. ingredients.quantity) category_items can accept notes 
- [x] Include reasonable validations for simple model objects (list of model objects with validations e.g. User, Recipe, Ingredient, Item) many nested items validate on the parent-model
- [x] Include a class level ActiveRecord scope method (model object & class method name and URL to see the working feature e.g. User.most_recipes URL: /users/most_recipes) Question.unanswered, stats/unanswered
- [x] Include a nested form writing to an associated model using a custom attribute writer (form URL, model name e.g. /recipe/new, Item) links included in Item form
- [x] Include signup (how e.g. Devise) devise
- [x] Include login (how e.g. Devise) devise
- [x] Include logout (how e.g. Devise) devise
- [x] Include third party signup/login (how e.g. Devise/OmniAuth) omniauth-facebook
- [x] Include nested resource show or index (URL e.g. users/2/recipes) categories have nested show pages for items like so: categories/1/items/5
- [x] Include nested resource "new" form (URL e.g. recipes/1/ingredients) new item through a category, categories/1/items/new
- [x] Include form display of validation errors (form URL e.g. /recipes/new) items/new

Confirm:
- [x] The application is pretty DRY
- [x] Limited logic in controllers
- [x] Views use helper methods if appropriate
- [x] Views use partials if appropriate
