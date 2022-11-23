const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

let products = [
    { id: 100, product: 'la mejor pelota', category: 'boca', price: 100},
    
]

app.get('/products', async(req, res) => {
    res.json(products)
})

app.listen(port,() => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
