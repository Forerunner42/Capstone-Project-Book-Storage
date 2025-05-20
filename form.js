// When you hit the submit button, run the function
let submit = document.getElementById('submit');
submit.addEventListener('click', (event) =>{
    event.preventDefault()
    const nameVal = document.getElementById('nameForm').value;
    // If there is already an item with the same name, end the program. Do not complete the object or push it to the window
    let arrayStorage = JSON.parse(localStorage.getItem('books')) || [];

    console.log(arrayStorage);
    let match = arrayStorage.find((b) => b.Name === nameVal);
    console.log(match);

    // If match exists, do not push to the window
    if(match !== undefined)
    {
        // return and stop the program
        alert("There is already a book with that name.");
        return;
    };

    // If the program continues, gain the rest of the values
    // Grab the root node
    const root = document.getElementById('display');

    // Grab the other values
    const authorVal = document.getElementById('authorForm').value;
    const publisherVal = document.getElementById('publisherForm').value;
    const pagNumVal = document.getElementById('pageNumForm').value;
    const genreVal = document.getElementById('genreForm').value;
    const imgVal = document.getElementById('imgForm').value;

    // Create elements to push to the display window
    // Create the display node with the class "bookNode"
    let display = document.createElement('div');
    display.classList.add('bookNode');
    // Push the display to the root node
    root.appendChild(display);

    // Create the img and add the src to it
    let img = document.createElement('img');
    img.src = imgVal;
    console.log(img);
    // Append to the display
    display.appendChild(img);
    
    // Create a div with the class "subBookNode"
    let subNode = document.createElement('div');
    subNode.classList.add('subBookNode');
    // Append to the display
    display.appendChild(subNode);

    // Create a ul with the class "nodeDisplay"
    let nodeDisplay = document.createElement('ul');
    nodeDisplay.classList.add('nodeDisplay');
    // Append to the subNode
    subNode.appendChild(nodeDisplay);

    // Create an li for each value (name, author, publisher, page number, genre)
    // Create an array for the prerequisites
    let preReq = ['Name', 'Author', 'Publisher', 'Page Number', 'Genre'];
    // Create an array with the content
    let content = [nameVal, authorVal, publisherVal, pagNumVal, genreVal];
    
    // create and append the lis
    content.forEach((val, index) =>
    {
        let li = document.createElement('li');
        li.classList.add('nodeli');
        li.textContent = preReq[index] + ": " + val;
        console.log(li);
        // Append the li to the nodeDisplay ul
        nodeDisplay.appendChild(li);
    });

    // push the div to the localStorage as an object
    let obj = {
        Img: imgVal,
        Name: nameVal,
        Author: authorVal,
        Publisher: publisherVal,
        Pages: pagNumVal,
        Genre: genreVal
    }    
    console.log(obj);
    storageAdd(obj);

    // Create a ul with the class "nodeButton"
    let nodeButton = document.createElement('ul');
    nodeButton.classList.add('nodeButton');
    // Append to the subNode
    subNode.appendChild(nodeButton);

    // Create 2 lis (edit and delete buttons)
    let editLi = document.createElement('li');
    let eBtn = document.createElement('button');
    eBtn.textContent = "Edit";
    eBtn.id = 'edit';
    eBtn.addEventListener('click', () => edit(eBtn));
    // Append to the li and append the li to the nodeButton ul
    editLi.appendChild(eBtn);
    nodeButton.appendChild(editLi);

    // Delete button
    let deleteLi = document.createElement('li');
    let dBtn = document.createElement('button');
    dBtn.textContent = "Remove";
    dBtn.id = 'Remove';
    dBtn.addEventListener('click', () => remove(dBtn));
    // Append to the li and append the li to the nodeButton ul
    deleteLi.appendChild(dBtn);
    nodeButton.appendChild(deleteLi);

    console.log(display);
});