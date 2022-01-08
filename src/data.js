


//API call for 5, 10 or 20 questions of any genre and difficulty w/ multiple choice questions


let fetchQuestion = `https://opentdb.com/api.php?amount=${numberOfQuestions}&type=multiple`


//API call for a specific genre w/ a specific number of questions of any difficulty w/ multiple choice questions // //


let fetchQuestionGenre =`https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${genre}&type=multiple` 


//API call for specific genre, number of questions and difficulty

let fetchQuestionGenreDifficulty = `https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${genre}&difficulty=${difficulty}&type=multiple`



//API call for specific number of questions and difficulty of any genre


let fetchQUestionDifficulty = `https://opentdb.com/api.php?amount=${numberOfQuestions}&difficulty=${difficulty}`


// difficulty options are 
const easy = 'easy'
const medium = 'medium'
const hard = 'hard'

// question options are

const five = 5
const ten = 10
const twenty = 20



// categories and their value


const categories = [
  {
    id: 9,
    name: "General Knowledge",
  },
  {
    id: 10,
    name: "Books",
  },
  {
    id: 11,
    name: "Film",
  },
  {
    id: 12,
    name: "Music",
  },
  {
    id: 13,
    name: "Musicals & Theatres",
  },
  {
    id: 14,
    name: "Television",
  },
  {
    id: 15,
    name: "Video Games",
  },
  {
    id: 16,
    name: "Board Games",
  },
  {
    id: 17,
    name: "Science & Nature",
  },
  {
    id: 18,
    name: "Computers",
  },
  {
    id: 19,
    name: "Mathematics",
  },
  {
    id: 20,
    name: "Mythology",
  },
  {
    id: 21,
    name: "Sports",
  },
  {
    id: 22,
    name: "Geography",
  },
  {
    id: 23,
    name: "History",
  },
  {
    id: 24,
    name: "Politics",
  },
  {
    id: 25,
    name: "Art",
  },
  {
    id: 26,
    name: "Celebrities",
  },
  {
    id: 27,
    name: "Animals",
  },
  {
    id: 28,
    name: "Vehicles",
  },
  {
    id: 29,
    name: "Comics",
  },
  {
    id: 30,
    name: "Gadgets",
  },
  {
    id: 31,
    name: "Anime & Manga",
  },
  {
    id: 32,
    name: "Cartoon & Animations",
  },
];
