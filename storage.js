// local storage function
let books;
function storageAdd(obj)
{
    // If there is a duplicate name, do not push
    

    // If local storage item does not exist, create the item and push the object
    if(!localStorage.getItem('books'))
    {
        books = [];
        books.push(obj);
        localStorage.setItem('books', JSON.stringify(books));
    } else {
        // Else, if localStorage item exists, push the item to the object
        // get the current storage array
        books = JSON.parse(localStorage.getItem('books'));

        //check if duplicate exists
        let match = books.find(b => b.Name === obj.Name);
      
        // If match does not exist, push to the localStorage
        if(match === undefined)
        {
            // push new obj
            books.push(obj);

            // Then update the local Storage
            localStorage.setItem('books', JSON.stringify(books));
        } else {
            
        }
        // still pushes to the window
    }
}

// Function to remove a node from the localStorage
function storageRemove(name)
{
    console.log(name)
    books = JSON.parse(localStorage.getItem('books'));
    //check if in localstorage
    let match = books.findIndex(b => b.Name === name);
   
    // If in the localStorage remove from storage
    if(match !== -1)
    {
        // remove target obj
        books.splice(match, 1);

        // Then update the local Storage
        localStorage.setItem('books', JSON.stringify(books));
    }
}

// Function to display the book nodes from the localStorage when the page loads
function displayOnLoad()
{
    // Grab and parse the books from the localStorage
    let nodes = JSON.parse(localStorage.getItem('books'));
    console.log(nodes);

    nodes.forEach((node) =>
    {
        // Aquire the variable with the id 'display'
        const display = document.getElementById('display');

        // Create a div with the class 'bookNode'
        let bookNode = document.createElement('div');
        bookNode.classList.add('bookNode');
        // Append to the display
        display.appendChild(bookNode);

        // Create the img variable and attach the src
        let img = document.createElement('img');
        img.src = node.Img;
        // Append to the bookNode
        bookNode.appendChild(img);

        // Create a div with the class 'subBookNode
        let subNode = document.createElement('div');
        subNode.classList.add('subBookNode');
        // Append to the bookNode
        bookNode.appendChild(subNode);

        // Create a ul with the class 'nodeDisplay'
        let nodeDisplay = document.createElement('ul');
        nodeDisplay.classList.add('nodeDisplay');
        // Append to the subNode
        subNode.appendChild(nodeDisplay);

        // Create lis with the values (Name, Author, Publisher, Page Number, Genre)
        let preReq = ['Name', 'Author', 'Publisher', 'Page Number', 'Genre'];
        let content = [node.Name, node.Author, node.Publisher, node.Pages, node.Genre];
        content.forEach((val, index) =>
        {
            let li = document.createElement('li');
            li.classList.add('nodeli');
            li.textContent = preReq[index] + ": " + val;
            // Append the li to the ul
            nodeDisplay.appendChild(li); 
        });

        // Create a ul with the class 'nodeButton'
        let nodeButton = document.createElement('ul');
        nodeButton.classList.add('nodeButton');
        // Append ul to the subNode
        subNode.appendChild(nodeButton);

        // Create two lis with buttons inside
        // Create edit li
        let editLi = document.createElement('li');
        // Append to the ul
        nodeButton.appendChild(editLi);
        // Create edit button
        let editBtn = document.createElement('button');
        editBtn.id = 'edit';
        editBtn.textContent = "Edit";
        editBtn.addEventListener('click', () => edit(editBtn));
        // Append button to the li
        editLi.appendChild(editBtn);

        // Create remove li
        let removeLi = document.createElement('li');
        // Append to the ul
        nodeButton.appendChild(removeLi);
        // Create remove button
        let removeBtn = document.createElement('button');
        removeBtn.id = 'Remove';
        removeBtn.textContent = "Remove";
        removeBtn.addEventListener('click', () => remove(removeBtn));
        // Append button to the li
        removeLi.appendChild(removeBtn);

        console.log(bookNode);
    });
}
displayOnLoad();