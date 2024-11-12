interface Product {
    name: string;
    price?: number;
}

const fullProduct: Required<Product> = {
    name: "Laptop",
    price: 1000
};

console.log(fullProduct); // { name: 'Laptop', price: 1000 }
