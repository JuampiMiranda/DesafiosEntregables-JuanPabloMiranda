class ProductManager {

    constructor() {
        this.products = []
    }
};

addProduct (title, description, price, thumbnail, code, stock) {
    const codeRepetido = this.products.find(p => p.code == code)
    const product = {
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
        id: this.products.length + 1
    }
    if(title && description && price && thumbnail && code && stock != undefined && !codeRepetido){
        this.products.push(product)
    }else {
        console.log('Complete all fields');
    }
};