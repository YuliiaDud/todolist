let container = document.querySelector('.container');
let value1 = document.querySelector('.input');
let add1 = document.querySelector('.add');

class item {
    constructor(name) {
        this.create(name);
    }
    create(name) {
        let div = document.createElement('div');
        div.classList.add('item');
        div.classList.add('animated');
        div.classList.add('slideInDown');

        let input = document.createElement('input');
        input.type = 'text';
        input.disabled = true;
        input.value = name;
        input.classList.add('item_input');

        let remove = document.createElement('button');
        remove.classList.add('remove');
        remove.innerHTML = `<i class="fas fa-trash"></i>`;
        remove.addEventListener('click', () => this.remove(div));
        
        div.classList.add('checkboxDiv');
        let checkbox = document.createElement('input')
        checkbox.type = 'checkbox';
        checkbox.classList.add('checkbox');

        container.append(div);
        div.appendChild(checkbox);
        div.appendChild(input);
        div.appendChild(remove);
        
    }
    remove(div) {
        container.removeChild(div);
    }
}
add1.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
    if (e.which == 13) {
        check();
    }
})
function check() {
    if (value1.value != "") {
        new item(value1.value);
        value1.value = "";
    }
}
function removeAll() {
    document.querySelector('.container').innerHTML = "";
}


// document.querySelector('.undone').onclick = function sort() {
//     let item = document.querySelectorAll('.item');
//     let itemArr = [];
//     itemArr.push(item);
//     function filter(checkbox) {
//         checkbox = document.querySelectorAll('.checkbox')
//         return checkbox.checked;
//     }
//     itemArr.filter(filter);
// }
document.querySelector('.undone').onclick = function sort() {
    let ul = document.querySelector('.container');
    let li = ul.getElementsByTagName("input");
    let item = document.querySelectorAll('.item');;
    let checkbox = document.querySelectorAll('.checkbox');
    for (let i = 0; i < li.length; i++) {
        if (checkbox[i].checked == true) {
            item[i].innerHTML = "";
        }
    }
}
