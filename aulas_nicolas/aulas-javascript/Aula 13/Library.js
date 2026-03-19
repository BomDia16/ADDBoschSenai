import { Book } from "./Book.js"
import { Movie } from "./Movie.js"

let items = []

// book
let book = new Book(1, "djhegodejgo", "jgheijjrg")
items.push(book)
console.log(book.showData())
book.changeAvailable()
console.log(book.showData())
book.changeAvailable()
console.log(book.showData())

// movie
let movie = new Movie(2, "oertguerutgejgeiuryueivdfn", "uhfuerfjlherugberijghseiuhg", 6)
items.push(movie)
console.log(movie.showData())
movie.changeAvailable()
console.log(movie.showData())
movie.changeAvailable()
console.log(movie.showData())
movie.changeAvailable()