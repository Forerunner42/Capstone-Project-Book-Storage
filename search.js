// Acquire the DOM variable
const search = document.getElementById('search');

search.addEventListener('input', (event) =>
{
    // Let the 'event' variable equal what the user has typed
    let uSearch = event.target.value.toLowerCase().trim();
    console.log(uSearch);

    // Grab the current books as an array from the localStorage
    let bookStor = JSON.parse(localStorage.getItem('books')) || [];
    // Create an array of the book names
    // let currBooks = []
    // bookStor.forEach(book =>
    // {
    //     currBooks.push(book.Name.toLowerCase().trim());
    // });
    // console.log(currBooks);

    // filter out any books who's name doesn't include the search query
    let displayBooks = bookStor.filter(book =>
    {
        let name = book.Name.trim().toLowerCase()
        console.log(name.includes(uSearch))
        return name.includes(uSearch);
    });
    console.log(displayBooks);

    // Remove any book nodes that don't match the search
    document.querySelectorAll("#display > .bookNode").forEach(function(node){
        node.parentElement.removeChild(node);
    })

    // If there are no books, display all books
    if(displayBooks.length){
        displayNodes(displayBooks);
    } else {
        displayNodes(bookStor);
    }
});

// Push the nodes that match the search
function displayNodes(nodes)
{
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
            li.textContent = `${preReq[index]}: ${val}`;
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