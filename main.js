const addArea = document.getElementById('add-area');
const todoApp = document.getElementById('todo-app');
const todo = document.getElementById('todo');
const addBtn = document.getElementById('add-btn');

addBtn.addEventListener('click', (event) => {
    const newList = document.createElement('li');
    let newListText = document.createTextNode(addArea.value);
    if (newListText.length === 0){
        alert('空欄です！');
    } else {
        newList.appendChild(newListText);
        todo.appendChild(newList);
        const newBtn = document.createElement('button');
        newBtn.addEventListener('click', (event) => {
            const parent = newBtn.closest('li');
            todo.removeChild(parent);
        })
        const buttonText = document.createTextNode('完了');
        newBtn.appendChild(buttonText);
        newList.appendChild(newBtn);
        addArea.value = '';
    }    
})
