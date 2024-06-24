const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 8000; 

// Paths
const static_path = path.join(__dirname,'../public')
const templates_path = path.join(__dirname,'../templates/views')
const partials_path = path.join(__dirname,'../templates/partials')

// Set template engine
app.set('view engine', 'hbs');

// views -> templates
app.set('views', templates_path);

// Register partials
hbs.registerPartials(partials_path)

// Serve static site
app.use(express.static(static_path));

// Routing
app.get('/', (req, res) => {
    res.render('index');
});

app.get('*', (req, res) => {
    res.send('Error 404: Page Not Found');
});

app.listen(port, () => {
    console.log(`Listening at port ${port}`);
});

