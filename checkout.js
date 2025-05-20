// Aquire buttons from HTML file
const display = document.getElementById('display');
const b1 = document.getElementById('b1');
const b2 = document.getElementById('b2');
const b3 = document.getElementById('b3');

const buttons = [b1, b2, b3];

// For each object in the array, add an event listener and run the function
buttons.forEach(btn => btn.addEventListener('click', (event) =>{
    // create a variable that is the parent Element of the button
    let recBook = event.target.parentElement;
    console.log(recBook);

    // Create a var with the value of the img source
    let imgSrc = recBook.querySelector('img').src;
    console.log(imgSrc)

    // Create a var with the value of the Book title
    let title = recBook.querySelector('h2').textContent;
    console.log(title);


    // If there is already an item with the same name, end the program. Do not complete the object or push it to the window
    let arrayStorage = JSON.parse(localStorage.getItem('books')) || [];

    console.log(arrayStorage);
    let match = arrayStorage.find((b) => b.Name === title);
    console.log(match);

    // If match exists, do not push to the window
    if(match !== undefined)
    {
        // return and stop the program
        alert("There is already a book with that name.");
        return 
    };

    // Create an array with the values being the details of the recommended Book
    let listItems = recBook.querySelectorAll("li")
    listItems.forEach(li => {
        li.textContent;
    });
    console.log(listItems);


    // Create the div that will house the data
    // Div will be appended to the display
    let displayDiv = document.createElement('div');
    console.log(displayDiv);

    // Apply the 'bookNode' classList to the div
    displayDiv.classList.add('bookNode');
    console.log(displayDiv.classList);

    // Create an img element with the src of the previous img
    let divImg = document.createElement('img');
    divImg.src = imgSrc;
    // Append the img to the displayDiv
    displayDiv.appendChild(divImg);


    // Create a div with the classList of subBookNode
    let subDiv = document.createElement('div');
    subDiv.classList = ('subBookNode');

    // Create a ul with li's that have the value of the Book details
    let divUl = document.createElement('ul');
    divUl.classList.add('nodeDisplay')
    
    let nameLi = document.createElement('li');
    nameLi.textContent = "Name: " + title;
    nameLi.classList.add('nodeli');
    divUl.appendChild(nameLi);

    listItems.forEach(listItem => 
    {
        console.log(listItem);
        let li = document.createElement('li');
        li.textContent = listItem.textContent;
        li.classList.add('nodeli');
        divUl.appendChild(li);
    })
    
    // Append the Ul to the subDiv
    subDiv.appendChild(divUl);


    // push the div to the localStorage as an object
    let obj = {
        Img: imgSrc,
        Name: title,
        Author: listItems[0].textContent.split(": ")[1],
        Publisher: listItems[1].textContent.split(": ")[1],
        Pages: listItems[2].textContent.split(": ")[1],
        Genre: listItems[3].textContent.split(": ")[1]
    }    
    console.log(obj);
    storageAdd(obj);


    // Create a second ul with the edit and Remove buttons
    let buttonUl = document.createElement('ul');
    // Add a class list of 'nodeButton to the ul
    buttonUl.classList.add('nodeButton');

    let editLi = document.createElement('li');
    let editBtn = document.createElement('button');
    editBtn.id = 'edit';
    editBtn.textContent = "Edit";
    editLi.appendChild(editBtn);

    // Add event listener to the button to activate edit function onclick
    editLi.addEventListener('click', () => edit(editLi));

    buttonUl.appendChild(editLi);

    let removeLi = document.createElement('li');
    let removeBtn = document.createElement('button');
    removeBtn.id = 'Remove';
    removeBtn.textContent = "Remove";
    removeLi.appendChild(removeBtn);

    // Add event listener to the button to activate remove function onclick
    removeBtn.addEventListener('click', () => remove(removeBtn));

    // append child to the ul
    buttonUl.appendChild(removeLi);

    // Append the second ul to the subDiv
    subDiv.appendChild(buttonUl);

    // Append the subDiv to the main div (displayDiv)
    displayDiv.appendChild(subDiv);

    // Append the display div to the display
    display.appendChild(displayDiv);
}));