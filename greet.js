// Greet function to get the username
const h2 = document.getElementById('username');
// Regex pattern : Only digits and letters
// Between 3 and 16 characters
let regX = /^[0-9a-zA-Z]{3,16}$/;

function greet()
{
    if(!document.cookie)
    {
        let name = prompt("Welcome to the Book Inventory! Please type in your username (letters and digits only; 3-16 characters)");
        let pass = regX.test(name);
        while(pass === false)
        {
            name = prompt("Please type in a valid username (letters and digits only; 3-16 characters");
            console.log(name);
            pass = regX.test(name);
        }

        // If the name passes the regex, push to the window
        h2.textContent = `Welcome, ${name}!`;
        h2.style.textTransform = 'capitalize';

        // Add the username as a cookie
        // Expire after 7 days
        let today = new Date();
        let expirationDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);
        document.cookie = `username=${name}; expires='${expirationDate.toUTCString()}'`;
    } else {
        let name = document.cookie.split(";")[0].split("=")[1];
        h2.textContent = `Welcome, ${name}!`;
        h2.style.textTransform = 'capitalize';
    }
}
greet();