function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json())
    .then(jsonData => {
      console.log(jsonData); // Log the JSON data to the console for exploration

      // Find the 5th book
      const fifthBook = jsonData[4]; // Since array indexing starts from 0, we use index 4 for the 5th book
      console.log("5th book:", fifthBook);

      // Find the 1031st character
      const character1031 = jsonData[0].characters[1030]; // Access the characters array of the first book and use index 1030
      console.log("1031st character:", character1031);

      // Calculate the total number of pages
      const totalPages = jsonData.reduce((total, book) => total + book.numberOfPages, 0);
      console.log("Total number of pages:", totalPages);

      renderBooks(jsonData); // Pass the JSON data to the renderBooks() function
    });
}
