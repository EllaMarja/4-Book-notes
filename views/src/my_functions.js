import db from './index.js';

export async function collectingNotes(filter) {
    if (!filter){
        filter = 'ORDER BY notes.id DESC';
    }
    //const results = await db.query('SELECT * FROM notes ORDER BY id DESC');
    const results = await db.query(`SELECT * FROM notes FULL OUTER JOIN bookcover ON notes.id = bookcover.notes_id ${filter};`);
    //console.log('RESULTS/ ',results.rows[0])

    const notes = results.rows;
    const books = formatDate(notes);
    
    return books
};
//MyFunctions.collectingNotes = collectingNotes;

export function formatDate(array){
    let formatted= [];
    array.forEach((book) => {
        const completionDate = book.date;
        book.date = completionDate.toDateString()
        formatted.push(book);
    });
    return formatted
}

export async function postingBookReview(info) {
    const bookTitle = info.bookTitle;
    const bookDate = info.bookDate;
    const bookRating = info.bookRating;
    const bookSummary = info.bookSummary;
    const bookReview = info.bookReview;
    //console.log('info:',info);
    const result = await db.query('INSERT INTO notes (title, date, rating, summary , review) VALUES ($1, $2, $3, $4, $5) RETURNING id;',[bookTitle, bookDate ,bookRating ,bookSummary, bookReview]);
    //console.log('posted:',result.rows[0].id)
    return result.rows[0].id
}

export async function bookWormPost(title,id) {
    const size = 'M';
    //console.log('title inserting +id:',title,id)
    const result = await db.query('INSERT INTO bookcover (title, notes_id, size) VALUES ($1, $2, $3);',[title, id, size]);
}

export async function collectBookReview(id){
    //console.log('id:',id);
    const result = await db.query('SELECT * FROM notes WHERE id = $1;', [id])
    let book = result.rows; 
    book = formatDate(book);
    //console.log('book:',book);
    return book
}
export async function replaceThis(info) {
    const bookTitle = info.bookTitle;
    const bookDate = info.bookDate;
    const bookRating = info.bookRating;
    const bookSummary = info.bookSummary;
    const bookReview = info.bookReview;
    const bookId = info.bookId
    //console.log('inputs:',bookTitle,bookId);
    const result = await db.query('UPDATE notes SET title = $1, date = $2, rating = $3, summary = $4, review = $5 WHERE id = $6;',[bookTitle, bookDate ,bookRating ,bookSummary, bookReview, bookId]);
    //console.log('completed:',result);
    return 
}
export async function findBookWormInfo(id) {
    //console.log('id:',id);
    const result = await db.query('SELECT * FROM bookcover WHERE notes_id = $1;',[id]);
    //console.log('results:',result.rows[0]);
    return result.rows[0]
}

export async function bookWormUpdate(info){
    const isbn = info.bookIsbn === '' ? null : info.bookIsbn;
    const oclc = info.bookOclc === '' ? null : info.bookOclc;
    const lccn = info.bookLccn === '' ? null : info.bookLccn;
    const size = info.bookSize;
    const id = info.notes_id;
    //console.log('Inisde function info:',info, 'my input: ',isbn, oclc, lccn, size, id);
    const result = await db.query('UPDATE bookcover SET isbn = $1, oclc = $2, lccn = $3, size = $4 WHERE notes_id = $5;',[isbn, oclc, lccn, size, id]);
    return result
}

export async function deleteReviewMain(id){
    const result = await db.query('DELETE FROM notes WHERE id = $1;',[id]);
    return result
}

export async function deleteReviewSide(notes_id){
    const info = await db.query('DELETE FROM bookcover WHERE notes_id = $1;',[notes_id]);
    const result = await deleteReviewMain(notes_id);
    return {result, info}
}
