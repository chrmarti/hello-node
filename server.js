require('express')()
    .get('/', (req, res) => {
        res.send('Hello Node!');
    })
    .listen(3000, () => {
        console.log('Listening at http://localhost:3000');
    });
