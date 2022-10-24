const experss = require('express')
const app = experss()
const port = 1100;

app.get('/', (req, res) => {
    res.send('node is r')
})
app.listen(port, () => console.log('node is reaning', { port })
)