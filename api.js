class Api {
    
    constructor(url){
        this.url = url; 
    }

    async save(object){
        const product = await this.getAll();
        const newId = product.length + 1;
        const newProduct = {...object, id: newId} 
        console.log(newProduct)
        product.push(newProduct); 
        try{
            await this.url, JSON.stringify(product, null, 2);
            return newProduct;
        }catch(err){
            return err;
        }
    }

    async getAll(){
        let content;
        try{
            content = await this.url;
            return content;
        } catch(err){
           console.log('error', err);
        }
    }

    async getById(id){
        const idProducts = await this.getAll();
        const getId = idProducts.find(x => x.id == id);
        if (getId === undefined){
            return {error: 'producto no encontrado'};
        }else{
            console.log(getId)
            return getId;
        }
    }

    async deleteById(id){
        const idProduct = await this.getAll();
        const remove = idProduct.map(function(i) { return i.id; } ).indexOf(id);
        idProduct.splice(remove, 1);
        try {
            await this.url, JSON.stringify(idProduct, null, 2)
        } catch (err) {
            return err;
        }
    }
}

module.exports = Api;