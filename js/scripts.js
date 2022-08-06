const messageWindow = document.querySelector('.message-window');
const message = document.getElementById('input');
const button = document.getElementById('button');

button.addEventListener('click', () => {
    const div = document.createElement('div');
    messageWindow.append(div);
    div.classList.add('messages-container');
    div.innerHTML = `
        <p>${message.value}</p>  
    `
    message.value = "";
})