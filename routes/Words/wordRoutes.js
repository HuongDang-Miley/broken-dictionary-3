const router = require('express').Router();

const {
  getAllWords,
  getSingleWord,
  getAddWord,
  addWord,
  getUpdateWord,
  updateWord,
  deleteWord
} = require('./controllers/wordController');

//See all words in the browser (DONE)
router.get('/get-words', getAllWords);

//Get the View for Adding a Word (Navigate to Add A Word Page, use res.redirect()to Add A Word Page) DONE
router.get('/add-word', getAddWord);

//Post a word to DB (click the button "add word" in Add A Word page DONE)
router.post('/add-word', addWord);

//Get View for a single word (DONE)
router.get('/single-word/:wordId', getSingleWord);

//Get View for updating a word (DONE: add "api" to href link to the Update Word button)
router.get('/update/:wordId', getUpdateWord);

//Put Updates into DB (DONE)
router.put('/update/:wordId', updateWord);

//Delete Word from DB (DONE)
router.delete('/delete/:wordId', deleteWord);

module.exports = router;
