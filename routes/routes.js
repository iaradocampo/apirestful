const {Router} = require('express');
const router = Router();

const products = [];

router.get('/productos',(req, res) => {
    res.json(products)
})

router.get('/productos/:id', (req, res) => {

})

router.post('/productos', (req, res) => {
    const product = req.body
    const newId = products.length + 1;
    const newProduct = {...product, id: newId}
    products.push(newProduct)
})

module.exports = router;