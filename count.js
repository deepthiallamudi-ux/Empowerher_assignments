devices=["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"]

function countCat(categoriesArr) {

  const categoryCount = categoriesArr.reduce((box, category) => {
    box[category] = (box[category] || 0) + 1;
    return box;
  }, {});
  
  return categoryCount;
}

const result = countCat(devices);
console.log("Category Count Object:", result);
