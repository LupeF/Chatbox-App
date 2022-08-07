const messageWindow = document.querySelector('.message-window');
const message = document.getElementById('input');
const button = document.getElementById('button');
const nameDiv = document.getElementById('name-container');
// const li = document.getElementsByTagName('li');
const li = document.querySelectorAll('li');

//************************************* */
// Assigns event listeners to li elements
//************************************* */
for(let i=0; i<li.length; i++){
    li[i].addEventListener('click', () => {
       nameDiv.classList.add('name-styles'); 
       nameDiv.innerHTML = `
        <h1>${li[i].textContent}</h1>
       `
    })
}


//*******************************/
// Appends Messages To The Window
//******************************/
button.addEventListener('click', () => {
    const div = document.createElement('div');
    messageWindow.append(div);
    div.classList.add('messages-container');
    div.innerHTML = `
        <p>${message.value}</p>  
    `
    message.value = "";
})