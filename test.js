const Container = require('./container.js');

const productContainer = new Container('products.json');


productContainer.deleteAll()

async function setProducts() {
    await productContainer.save({title: 'Lana de Vidrio (m)', price: 450, thumbnail: "https://isvshop.netlify.app/assets/acustiverR.png" });
    await productContainer.save({title: 'Placa de Lana de Vidrio', price: 450, thumbnail: 'https://isvshop.netlify.app/assets/acustiverP.png' });
    await productContainer.save({title: 'Placa de Yeso (m²)', price: 500, thumbnail: 'https://isvshop.netlify.app/assets/durlock.png' });
    const allProducts = await productContainer.getAll()
    console.log(allProducts);
    const firstProduct = await productContainer.getById(1)
    console.log(firstProduct);
    await productContainer.deleteById(3);
    const allProductsButOne = await productContainer.getAll()
    console.log(allProductsButOne);
}

setProducts()

// productContainer.deleteById(3);
