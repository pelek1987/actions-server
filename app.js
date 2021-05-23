import express from 'express';

const app = express();

app.get('/', (req, res) =>{
    res.send('I can see U!');
})

const users = [
    {id: 1, name: "Paweł"},
    {id: 2, name: "Agata"}
];

app.get('/api/users', (req, res) => {
    res.send(users);
})

app.get('/api/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    
    res.send(users.filter(user => user.id === id));
})

app.listen(8080, () => {
    console.log('Server is running.')
});