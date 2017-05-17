// Sample recipes database
// Source: https://en.wikibooks.org/wiki/Cookbook
var recipes = [
  {
    name: 'Lasagne',
    category: 'Pasta',
    procedure: 'Steps for making lasagne'
  },
  {
    name: 'Calzone',
    category: 'Pizza',
    procedure: 'Steps to make calzone (pizza)'
  },
  {
    name: 'Tuna Salad',
    category: 'Salad',
    procedure: [
      'Mix ingredients in a bowl',
      'Chill before serving'
    ]
  },
  {
    name: 'Sandwich Layer-Cake',
    category: 'Sandwich',
    procedure: [
      'Boil the eggs',
      'Add the other stuff',
      'Even out the edges with a sharp knife'
    ]
  }

];

module.exports = recipes;
