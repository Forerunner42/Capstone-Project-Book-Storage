// JavaScript to create a togglable theme

// Aquire element designations from HTML
const body = document.querySelector('body');
const toggle = document.getElementById('lightDark');

toggle.addEventListener('click', theme);

function theme(){
    // If item exists, check the theme and switch
    if(localStorage.getItem('theme') == 'dark') // If the theme is dark
    {
        localStorage.setItem('theme', 'light'); // Then set the theme to light
        body.classList.add('lightTheme');
        toggle.textContent = "☀";

    } else {
        localStorage.setItem('theme', 'dark'); // else, the them must be light, so set to dark
        body.classList.remove('lightTheme');
        toggle.textContent = "🌑";
    }
};

// Make a shortcut to change the theme (shift + d)
document.addEventListener('keydown', function(e)
{
    if(e.shiftKey && e.key === 'D')
    {
        theme();
    }
});

function onLoad()
{
    // Check if the Item exists in the local storage
    if(!localStorage.getItem('theme'))
    {
        localStorage.setItem('theme', 'dark');
    } else {
        if(localStorage.getItem('theme') == 'dark') // If the theme is dark
        {
            body.classList.remove('lightTheme');
            toggle.textContent = "🌑";
        } else {
            body.classList.add('lightTheme');
            toggle.textContent = "☀";
        }
    }
}
onLoad();