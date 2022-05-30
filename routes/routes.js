const {Router} = require('express');
const router = Router();
const Api = require('../api');
let productos = [];
const api = new Api(productos);

router.get('/', async (req, res) => {
    try {
        productos = await api.getAll();
        res.json({productos: productos});
    } catch (error) {
        return [];
    }
})

router.get('/:id', async (req, res) => {
    try{
        productos = await api.getById();
        res.json({productos});
    }catch(error){
        console.log('error no se encontro', error);
    }
})

router.post('/', async (req, res) => {
    const producto = req.body;
    try{
        productos = await api.save(producto);
        res.json({mensaje: "producto agregado con exito"});
    } catch(err){
        console.log('error no se encontro', err);
    }
})

router.put('/:id', async (req,res) => {
    let {title, price, image} = req.body
    try{
        productos = await api.getById()
        productos.title = title;
        productos.price = price;
        productos.image = image;
        res.send({mensaje: "Se actualizo el producto"});
    } catch(err){
        console.log('no se pudieron actualizar los datos', err);
    }
})

router.delete('/:id', async (req, res) => {
    try{
        productos = await api.deleteById();
        res.json({productos});
    }catch(err){
        console.log('err', err);
    }
})

module.exports = router;