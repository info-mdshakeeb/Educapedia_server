const experss = require('express')
const cors = require('cors');
const courses = require('./Data/courses.json')
const app = experss()
const port = 1100;


app.use(cors());

app.get('/', (req, res) => {
    res.send('node is r')
})
app.get('/courses', (req, res) => {
    res.send(courses);
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id
    const course = courses.find(rs => rs.id == id)
    res.send(course)
})


app.listen(port, () => console.log('node is reaning', { port })
)