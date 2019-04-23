
// import express
const express = require('express');
const router = express();

// import Quote-Database
const quoteDb = (require('../quoteDatabase'));

/**
 * ROOT
 * - every endpoint supports head-requests, which can be checked 
 *   through ==> console.log(req.headers)
 */
router.get('/', (req, res) => {

    // console.log(req.headers);
    res.send("Welcome to Quotebase!");
});

/**
 * GET ALL AUTHORS
 */
router.get('/authors', (req, res) => {

    getAllAuthors(req, res);
});

/**
 * GET ALL QUOTES
 */
router.get('/quotes', (req, res) => {

    res.send(quoteDb);
});

/**
 * GET QUOTES BY *AUTHOR* or *ID*
 *  - Total Items: 11
 *  - Search author by nicknames:
 *      • seuss, gandhi, twain, confucius, tesla
 */
router.get('/quotes/:authorOrId', (req, res) => {

    // *****  ID WAS ENTERED  *****
    if (Number.isInteger(parseInt(req.params.authorOrId))) {
        quoteById(req, res);
    }
    // *****  AUTHOR WAS ENTERED  *****
    else {
        allQuotesOfAuthor(req, res);
    }
});

/**
 * Delete specific ID
 */
router.delete('/delete/:id', (req, res) => {

    deleteQuoteById(req, res);
});





// ################################################
// ###############  FUNCTIONS  ####################
// ################################################


function getAllAuthors(req, res) {
    var allAuthors = [];
    // prevent authors array from adding same name twice
    quoteDb.forEach(element => {
        if (!allAuthors.includes(element.author)) {
            allAuthors.push(element.author);
        }
    });
    res.send(allAuthors);
}

function allQuotesOfAuthor(req, res) {
    var quotesByAuthor = [];
    // collect quotes of asked author
    quoteDb.forEach(element => {
        // compare quoteDb-Element with URL-Parameter
        if (element.nickname === req.params.authorOrId) {
            quotesByAuthor.push(element);
        }
    });
    // check, if array empthy
    if (quotesByAuthor.length === 0) {
        res.status(404).send("Requested Author does not exist.");
        return;
    }
    else {
        res.send(quotesByAuthor);
        return;
    }
}

function quoteById(req, res) {

    // Range of possible IDs
    if ((req.params.authorOrId >= 1) && (req.params.authorOrId <= quoteDb.length)) {
        quoteDb.forEach((quote) => {
            // requested ID...
            if (quote.id == req.params.authorOrId) {
                res.send(quote);
            }
        });
    } else {    // ID not found
        res.status(404).send("Requested ID doesn't exist.");
    }
}

function deleteQuoteById(req, res) {

    // hard-coded number of items in Database
    //  -> damit range of possible IDs sich nicht verändert
    //  -> durch jedes slice() wird quoteDb.length kürzer
    const itemsInDatabase = 11;

    // range of possible IDs
    // quoteDbItems = highest possible ID
    if ((req.params.id >= 1) && (req.params.id <= itemsInDatabase)) {
        console.log("Input: " + req.params.id);
        for (let i = 0; i < quoteDb.length; i++) {
            // compare: URL-ID & quoteDatabase-ID
            if (req.params.id == quoteDb[i].id) {
                console.log("req.params.id: " + req.params.id + ` (type: ${typeof req.params.id})`);
                console.log("quoteDb[i].id: " + quoteDb[i].id + ` (type: ${typeof quoteDb[i].id})`);
                console.log("==========================================");
                console.log(`TRYING TO DELETE:`);
                console.log(quoteDb[i]);
                console.log("==========================================");
                console.log(`DELETED ELEMENT:`);
                console.log(quoteDb.splice(quoteDb[i].id-1, 1));
            }
        }
    } else {
        res.status(404).send("Requested does not exist.");
    }
}


module.exports = router;