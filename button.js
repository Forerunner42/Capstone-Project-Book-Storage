// edit and remove functions
// edit function
function edit(btn) {
  let node = btn.parentElement.parentElement.parentElement.parentElement;
  console.log(node);

  // Grabbing the old name to update localStorage later
  let name = node.querySelector('.nodeli').textContent.split(": ")[1];

  let changes = [];
  let url = prompt("What is your new URL?");
  changes[0] = prompt("What is the Name of your book?");
  changes[1] = prompt("Who is the Author of your book?");
  changes[2] = prompt("Who Published your book?");
  changes[3] = prompt("How many pages long is your book?");
  changes[4] = prompt("What Genre is your book apart of?");

  // Update the Img source
  let img;
  if(url){
    img = url
  }else{ 
    img = node.querySelector('img').src;
  }

  node.querySelector('img').src = img;

  // Create array to create a clean display at the window
  let text = ["Name", "Author", "Publisher", "Page Number", "Genre"];

  let liContent = [];
  // for each nodeli, push the new values to the ul incrementing by index
  node.querySelectorAll(".nodeli").forEach((li, index) => {
    let content;
    if(changes[index]){
      content = changes[index];
    }else{
      content = li.textContent.split(": ")[1];
    }
    liContent.push(content);

    li.textContent = changes[index] ? `${text[index]}: ${changes[index]}` : li.textContent
  });

  // Update the localStorage
  let booksStorage = JSON.parse(localStorage.getItem("books"));

  console.log(booksStorage.find(book => book.Name == name));

  let editIndex = booksStorage.findIndex(book => book.Name == name);

  booksStorage[editIndex] = {
    Img: img,
    Name: liContent[0],
    Author: liContent[1],
    Publisher: liContent[2],
    Pages: liContent[3],
    Genre: liContent[4]
  }

  localStorage.setItem("books", JSON.stringify(booksStorage));
}

// remove function
function remove(btn) {
  let node = btn.parentElement.parentElement.parentElement.parentElement;
  console.log(node);

  let name = node.querySelector(".nodeli").textContent.split("Name: ")[1]
  console.log(name)
  // Run the function to delete the node from the window and remove from the localStorage
  storageRemove(name);

  node.parentElement.removeChild(node);
}
