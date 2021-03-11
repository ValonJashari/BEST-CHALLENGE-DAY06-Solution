
let booksArr = JSON.parse(books);

// console.log(booksArr);

for (let i = 0; i < booksArr.length; i++){

    // create container-div
    var bookCont = document.createElement("div"); 
    bookCont.setAttribute("id", "book" + [i]);
    document.getElementById("main").appendChild(bookCont);

    // create <p> for title
    var bookTitle = document.createElement("p"); 
    var bookTitleText = document.createTextNode("Title: " + booksArr[i].title);
    bookTitle.appendChild(bookTitleText);
    document.getElementById("book" + [i]).appendChild(bookTitle);

    // create <p> for author
    var bookTitle = document.createElement("p"); 
    var bookTitleText = document.createTextNode(booksArr[i].author);
    bookTitle.appendChild(bookTitleText);
    document.getElementById("book" + [i]).appendChild(bookTitle);

    // create img
    var bookTitle = document.createElement("img"); 
    bookTitle.setAttribute("src", booksArr[i].img);
    document.getElementById("book" + [i]).appendChild(bookTitle);

    // background red or green depending on read status
    if (booksArr[i].read == true) {
        document.getElementById("book" + [i]).classList.add("green");
    } else if (booksArr[i].read == false) {
        document.getElementById("book" + [i]).classList.add("red");
    }
}

