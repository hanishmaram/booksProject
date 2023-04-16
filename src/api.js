const router = require('express').Router()
const books = require('./data')

let booksDirectory = books

router.get('/reset', function (req, res) {
	booksDirectory = books
	res.send('ok')
})

router.get('/books', function (req, res) {
	res.send(booksDirectory)
})

router.get('/books/:id', function (req, res) {
	// add code
    let book=  booksDirectory.find(x=>x.isbn == req.params.id)
    if(!book){
        res.statusCode = 404
        res.send('Book not Found')
    }
	res.send(book)
})

router.post('/books', function (req, res) {
	const book = req.body

    booksDirectory.push(book);
	
	res.send(book)
})

router.put('/books/:id', function (req, res) {
	const { id } = req.params
	const {
		title,
		isbn,
		pageCount,
		publishedDate,
		thumbnailUrl,
		shortDescription,
		longDescription,
		status,
		authors,
		categories,
	} = req.body

    let book = booksDirectory.findIndex(x=>x.isbn == id);
	if(book == -1){
        res.statusCode = 404;
        res.send('Book not Found')
    }else{
	    res.send('ok')
    }
})

router.delete('/books/:id', function (req, res) {
	// add code
    const { id } = req.params
    booksDirectory =  [...booksDirectory.filter(x=>x.isbn != id)]
	
	res.send('ok')
})

module.exports = router
