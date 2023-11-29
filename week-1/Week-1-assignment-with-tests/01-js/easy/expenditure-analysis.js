/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  categoryAndSpent = {};

  for (let i = 0; i < transactions.length; i++) {
    var t = transactions[i];

    categoryAndSpent[t.category] =
      (categoryAndSpent[t.category] || 0) + t.price;
  }

  let totalSpent = [];

  let keys = Object.keys(categoryAndSpent);

  for (let i = 0; i < keys.length; i++) {
    let category = keys[i];
    var obj = {
      category: category,
      totalSpent: categoryAndSpent[category],
    };
    totalSpent.push(obj);
  }

  return totalSpent;
}

module.exports = calculateTotalSpentByCategory;
