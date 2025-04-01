const products = [
    { name: "Apple", category: "fruit", price: 2 },
    { name: "Carrot", category: "vegetable", price: 1 },
    { name: "Banana", category: "fruit", price: 1.5 },
    { name: "Potato", category: "vegetable", price: 0.5 }
  ];
  
function filterByCategory(products, category){
    return products.filter(product => product.category === category)
}
  // Проверяем:
  console.log(filterByCategory(products, "fruit"));
  