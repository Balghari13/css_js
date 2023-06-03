const main = document.getElementById('main')
const adduserBtn = document.getElementById('add-user')
const doubleBtn = document.getElementById('double')
const filterBtn = document.getElementById('show-all-millionaires')
const sumBtn = document.getElementById('sum')
const sortBtn = document.getElementById('sort')


let data =[];

async function getRandonUser(){
    const res = await fetch('https://randomuser.me/api')
    const data = await res.json();
    
    //get username
    const user = data.results[0];

    const newUser = {
        name: `${user.name.title} ${user.name.first} ${user.name.last}`,
        balance: Math.floor(Math.random()*1000000)
    }
    
    addData(newUser);
};
function addData(newUser){
    data.push(newUser);
    updateDOM();
    }
function updateDOM(userData = data){
    main.innerHTML= `<h2><strong>User</strong> Wealth</h2>`;

    userData.forEach(user=>{
        const userDiv = document.createElement('div')
        userDiv.classList.add('user');
        userDiv.innerHTML= `<h3><strong>${user.name}</strong> ${user.balance}</h3>`;
        main.appendChild(userDiv)
    })
}

getRandonUser();
getRandonUser();
getRandonUser();