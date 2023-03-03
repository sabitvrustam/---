class Product {
    constructor(name, price, count, description) {
        this.name = name;
        this.price = price;
        this.count = count;
        this.description = description;
    }
    matches(conditions) {
      const parts = conditions.split("&");
      for (let part of parts) {
        const [key, operator, value] = part.split("-");
        if (key === "name") {
          if (operator === "contains" && !this.name.includes(value)) {
            return false;
          } else if (operator === "starts" && !this.name.startsWith(value)) {
            return false;
          } else if (operator === "ends" && !this.name.endsWith(value)) {
            return false;
          }
        } else if (key === "price") {
          if (operator === "<" && !(this.price < parseFloat(value))) {
            return false;
          } else if (operator === "<=" && !(this.price <= parseFloat(value))) {
            return false;
          } else if (operator === "=" && !(this.price === parseFloat(value))) {
            return false;
          } else if (operator === ">=" && !(this.price >= parseFloat(value))) {
            return false;
          } else if (operator === ">" && !(this.price > parseFloat(value))) {
            return false;
          }
        } else if (key === "quantity") {
          if (operator === "<" && !(this.quantity < parseInt(value))) {
            return false;
          } else if (operator === "<=" && !(this.quantity <= parseInt(value))) {
            return false;
          } else if (operator === "=" && !(this.quantity === parseInt(value))) {
            return false;
          } else if (operator === ">=" && !(this.quantity >= parseInt(value))) {
            return false;
          } else if (operator === ">" && !(this.quantity > parseInt(value))) {
            return false;
          }
        } else if (key === "description") {
          if (operator === "contains" && !this.description.includes(value)) {
            return false;
          } else if (operator === "starts" && !this.description.startsWith(value)) {
            return false;
          } else if (operator === "ends" && !this.description.endsWith(value)) {
            return false;
          }
        }
      }
      
      return this;
      
    }
}

let string = "name-contains-fd&price-=2&quantity->5&description-ends-abc";
const product = [
new Product("яблоки", 2, 56, "очень вкусные"),
new Product("телевизор", 45000, 100, "led подсветка"),
new Product("Товар 1", 10.99, 5, "Описание товара 1"),
new Product("fd", 2, 8, "ghhabc"),
new Product("fd", 2, 8, "ghhabc"),
new Product("fd", 2, 8, "ghhabc"),

];

for (i = 0; i <= product.length - 1; i++){
  let mach = [];
  mach = (product[i].matches(string));
  console.log(mach);
}









