// var convertBtn = document.querySelector('.convert-button');
// var URLinput = document.querySelector('.URL-input');

// convertBtn.addEventListener('click', () => {
//     console.log(`URL: ${URLinput.value}`);
//     sendURL(URLinput.value);
// });

// function sendURL(URL) {
//     fetch(`http://localhost:4000/download?URL=${URL}`, {
//         method:'GET',
//         crossDomain: true,
//         credentials: 'include'
//     }).then(res => res.json())
//     .then(json => console.log(json));
// }

var convertBtn = document.querySelector('.convert-button');
var URLinput = document.querySelector('.URL-input');

convertBtn.addEventListener('click', () => {
    console.log(`URL[DEV]: ${URLinput.value}`);
    sendURL(URLinput.value);
});

function sendURL(URL) {
    window.location.href = `http://localhost:4000/download?URL=${URL}`;
}