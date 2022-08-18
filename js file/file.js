console.log('fisrt file')

const allLi = document.getElementsByTagName('li');
console.log(allLi);

const allTitles = document.getElementsByClassName('section-title');
console.log(allTitles);
const secondSection = document.getElementById('second-section');
console.log(secondSection);

secondSection.style.color = 'violet';
secondSection.style.backgroundColor = 'gray'

const secondList = document.getElementById('second-list');
const li = document.createElement('li');
li.innerText = 'list-item-5';
secondList.appendChild(li);

const main = document.getElementById('main-content');
const section = document.createElement('section');
section.innerHTML = `
    <h1>My dynamic Section </h1>
    <p> Extra text added inside</p>
    <ul>
        <li>first item</li>
        <li>first item</li>
        <li>first item</li>
        <li>first item</li>
    </ul>
`
main.appendChild(section);