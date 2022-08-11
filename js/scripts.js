const messageWindow = document.querySelector('.message-window');
const message = document.getElementById('input');
const button = document.getElementById('button');
const nameDiv = document.getElementById('name-container');
// const li = document.querySelectorAll('li');
const nav = document.querySelector('nav');
const ul = document.querySelectorAll('ul');

//************************************* */
// Assigns event listeners to li elements
//************************************* */
// for(let i=0; i<li.length; i++){
//     li[i].addEventListener('click', () => {
//        nameDiv.classList.add('selected-name'); 
//        nameDiv.innerHTML = `
//         <h1>${li[i].textContent}</h1>
//         `
//     })
// };

nav.addEventListener('click', (e) => {
    if(e.target.tagName === "LI")
    nameDiv.classList.add('selected-name');
    nameDiv.innerHTML = `
        <h1>${e.target.textContent}</h1>
    ` 
})
//**************************************************/
// Creates Element and Appends Messages To The Window And Clears Input Field
//*************************************************/
button.addEventListener('click', () => {
    if(nameDiv.className !== 'selected-name'){  //* Tests Condition to ensure input field is not empty
        alert('Please Select Name');//! Alert message
    } else if(message.value === ''){
        alert('Please Write A Message')
    } else {
        const div = document.createElement('div');
        messageWindow.append(div);
        div.classList.add('messages-container');
        div.innerHTML = `
        <p>${message.value}</p>  
        `
    message.value = "";
    }
});