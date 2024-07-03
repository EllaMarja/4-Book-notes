import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import ejs from 'ejs';
import pg from 'pg';
import axios from 'axios';
import path from 'path';

import * as table from './my_functions.js';

//dotenv.config();

const port = 3000;
const app = express();
let notes;
const toggle = 'light/dark switch';


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


const db = new pg.Client({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT,
  });

db.connect();

export default db;


app.get('/', async (req, res) => { 
    const filter = req.query.filter;
    try {
        if (filter) {
            const filter = req.query.filter;
            notes = await table.collectingNotes(filter); 
        } else {
            notes = await table.collectingNotes(); 
        };
        res
            .status(200)
            .render('index.ejs', { books: notes, toggle});
    } catch (error) {
        console.log('Error:',error.message);
        res
            .status(500)
            .render('index.ejs', {error, problem: 'Sorry we are experiencing an error'});
    };

});


app.get('/new', (req, res) => {
    try {
        res.render('new.ejs');
    } catch (error) {
        console.log(error.message);
    }

});

app.get('/library', async (req, res) => {
    //console.log('library:',req.query);

    try {
        const result = await table.findBookWormInfo(req.query.bookId);
        //console.log('back in try:',result);
        res
            .status(200)
            .render('advanced.ejs', { book: result});
    } catch (error) {
        console.log('/Library error:',error.message);
        res
            .status(500)
            .render('advanced.ejs', { error: error.message});
    }
});

app.post('/library', async (req, res) => {

    //console.log('Before req: ',req.body);
    try {
        const result = await table.bookWormUpdate(req.body);
        //console.log('result;',result);
        res
            .status(200)
            .redirect('/');

    } catch (error) {
        console.log('Error:',error.message)
        res
            .status(500)
            .render('edit.ejs', {error, problem: error.message})
    }

});

app.post('/new', async (req, res) => {
    
    try {
        // Posting Review to both Tables:
        const id = await table.postingBookReview(req.body);
        const title = req.body.bookTitle; 
        await table.bookWormPost(title, id);

        res.redirect('/');
    } catch (error) {
        console.log(error.message);
        if (error.message == "la valeur d'une clé dupliquée rompt la contrainte unique « notes_title_key »") {
            res.render('index.ejs', {error, problem: `Sorry, we already have a book review for this book`})
        } else {
        res.render('index.ejs', {error, problem: error.message})
    }
}
});

app.get('/edit', async (req, res) => {
    
    try {
        const result = await table.collectBookReview(req.query.bookId);
        const book = result[0];
        res
            .status(200)
            .render('edit.ejs', {book: book, bookId: book.id})

    } catch (error) {
        console.log('Error:',error.message)
        res
            .status(500)
            .render('edit.ejs', {error, problem: error.message})
    }
});

app.post('/update', async (req, res) => {

    console.log('before req: ',req.body);
    try {
        const result = await table.replaceThis(req.body);
        //console.log('result;',result);

        res
            .status(200)
            .redirect('/');

    } catch (error) {
        console.log('Error:',error.message)
        res
            .status(500)
            .render('edit.ejs', {error, problem: error.message})
    }

});

app.post('/delete', async (req, res) => {
    try {
        const data = await table.deleteReviewSide(req.body.notes_id);
        res
            .status(200)
            .redirect('/')
    } catch (error) {
        console.log('Error:',error.message)
        res
            .status(500)
            .render('edit.ejs', {error, problem: error.message});
    }
});

app.listen(port, () => {
    console.log(`Server listening to port ${port}...`)
});