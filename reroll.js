const reroll = document.getElementById('reroll');
const recSection = document.getElementById('recSection');
// JSON variable 'book' is already linked through the JSON file
console.log(book);
let selected = [];
reroll.addEventListener('click', () =>
{
    // randomly select an object from the json file
    let num1 = Math.floor(Math.random() * book.recommended.length);
    console.log(num1);
    // Grab the object by locating the randomly acquired index number
    let select1 = book.recommended[num1];
    // From the json, remove the object at the randomly designated index
    book.recommended.splice(num1, 1);
    console.log(book.recommended);

    // do twice more
    // randomly select an object from the json file
    let num2 = Math.floor(Math.random() * book.recommended.length);
    console.log(num2);
    // Grab the object by locating the randomly acquired index number
    let select2 = book.recommended[num2];
    // From the json, remove the object at the randomly designated index
    book.recommended.splice(num2, 1);
    console.log(book.recommended);

    // do once more
    // randomly select an object from the json file
    let num3 = Math.floor(Math.random() * book.recommended.length);
    console.log(num3);
    // Grab the object by locating the randomly acquired index number
    let select3 = book.recommended[num3];
    // From the json, remove the object at the randomly designated index
    book.recommended.splice(num3, 1);
    console.log(book.recommended);

    // Add all selected values into the selected array
    selected.push(select1);
    selected.push(select2);
    selected.push(select3);
    console.log(selected);

    // clear recSection
    let rec = document.getElementsByClassName('recommended');
    recSection.removeChild(rec[2]);
    recSection.removeChild(rec[1]);
    recSection.removeChild(rec[0]);

    selected.forEach((val, index) =>
    {
        // Create a div with the class 'recommended'
        let display = document.createElement('div');
        display.classList.add('recommended');
        display.id = `rec${[index + 1]}`;
        console.log(display);

        // Create an img and append to the display div
        let img = document.createElement('img');
        img.src = val.Img;
        console.log(img.src);
        // Append to the display
        display.appendChild(img);

        // Create an h2 and append to the display div
        let h2 = document.createElement('h2');
        h2.textContent = val.Name;
        // Append the h2 to the display
        display.appendChild(h2);

        // Create a ul with lis that have the values (author, publisher, pages, genre)
        let ul = document.createElement('ul');
        let preReq = ['Author', 'Publisher', 'Page Number', 'Genre'];
        let content = [val.Author, val.Publisher, val.Pages, val.Genre];
        content.forEach((val1, index) =>
        {
            let li = document.createElement('li');
            li.textContent = preReq[index] + ": " + val1;
            console.log(li);
            // Append the li to the ul
            ul.appendChild(li);
        });
        display.appendChild(ul);

        // Append button with the id 'b[index]' to the display
        let button = document.createElement('button');
        button.id = `b${[index + 1]}`;
        button.title = 'Add to Checkout';
        button.textContent = "Checkout";
        // Append the button to the display
        display.appendChild(button);

        // Append the display to the recommended Section window
        recSection.appendChild(display);
    });

    // Put the selected variables back into the JSON
    selected.forEach(function(val)
    {
        console.log(val)
        book.recommended.push(val);
        console.log(book);
    });
    // clear the selected array
    selected = [];
});



// Function that sets a randomly rolled recommended section onLoad
function rollOnLoad()
{
    // randomly select an object from the json file
    let num1 = Math.floor(Math.random() * book.recommended.length);
    // console.log(num1);
    // Grab the object by locating the randomly acquired index number
    let select1 = book.recommended[num1];
    // From the json, remove the object at the randomly designated index
    book.recommended.splice(num1, 1);
    // console.log(book.recommended);

    // do twice more
    // randomly select an object from the json file
    let num2 = Math.floor(Math.random() * book.recommended.length);
    // console.log(num2);
    // Grab the object by locating the randomly acquired index number
    let select2 = book.recommended[num2];
    // From the json, remove the object at the randomly designated index
    book.recommended.splice(num2, 1);
    // console.log(book.recommended);

    // do once more
    // randomly select an object from the json file
    let num3 = Math.floor(Math.random() * book.recommended.length);
    // console.log(num3);
    // Grab the object by locating the randomly acquired index number
    let select3 = book.recommended[num3];
    // From the json, remove the object at the randomly designated index
    book.recommended.splice(num3, 1);
    // console.log(book.recommended);

    // Add all selected values into the selected array
    selected.push(select1);
    selected.push(select2);
    selected.push(select3);
    // console.log(selected);

    selected.forEach((val, index) =>
    {
        // Create a div with the class 'recommended'
        let display = document.createElement('div');
        display.classList.add('recommended');
        display.id = `rec${[index + 1]}`;
        // console.log(display);

        // Create an img and append to the display div
        let img = document.createElement('img');
        // console.log(val)
        img.src = val.Img;
        // console.log(img.src);
        // Append to the display
        display.appendChild(img);

        // Create an h2 and append to the display div
        let h2 = document.createElement('h2');
        h2.textContent = val.Name;
        // Append the h2 to the display
        display.appendChild(h2);

        // Create a ul with lis that have the values (author, publisher, pages, genre)
        let ul = document.createElement('ul');
        let preReq = ['Author', 'Publisher', 'Page Number', 'Genre'];
        let content = [val.Author, val.Publisher, val.Pages, val.Genre];
        content.forEach((val1, index) =>
        {
            let li = document.createElement('li');
            li.textContent = preReq[index] + ": " + val1;
            // console.log(li);
            // Append the li to the ul
            ul.appendChild(li);
        });
        display.appendChild(ul);

        // Append button with the id 'b[index]' to the display
        let button = document.createElement('button');
        button.id = `b${[index + 1]}`;
        button.title = 'Add to Checkout';
        button.textContent = "Checkout";
        // Append the button to the display
        display.appendChild(button);

        // Append the display to the recommended Section window
        recSection.appendChild(display);
    });

    // Put the selected variables back into the JSON
    selected.forEach(function(val)
    {
        // console.log(val)
        book.recommended.push(val);
        // console.log(book);
    });
    // clear the selected array
    selected = [];
};
rollOnLoad();