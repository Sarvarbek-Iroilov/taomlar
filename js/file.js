

function boss(){
    document.getElementById('left').classList.toggle('menu');
    document.getElementById('navbar').classList.toggle('px');

    document.querySelector('.cantainer-cantent').classList.toggle('qush');
    
    document.querySelector('.back__color').classList.toggle('blok')

}

function dom(){
    document.querySelector('.search-list').classList.toggle('dom');
}


// n= document.getElementById('mic');
// n = addEventListener('click', mic);
function mic(){
    document.querySelector('.audio').classList.toggle('opacity');
}

function bell(){
    document.querySelector('.qungiroq').classList.toggle('blok');
}
function plus(){
    document.querySelector('.cam').classList.toggle('blok');
}
// function remove(){
//     document.querySelector('.audio').style.display = 'none';
// }

function live(){
    document.querySelector('.small').classList.toggle('blok');
}

function users(){
    document.querySelector('.user-list').classList.toggle('blok');
}

function light(){
    document.querySelector('.light').classList.toggle('blok');
    document.querySelector('.user-list').classList.toggle('blok');

}
function arrow(){
    document.querySelector('.light').classList.toggle('blok');
    document.querySelector('.user-list').classList.toggle('blok');

}

function darkbtn(){
    document.querySelector('body').classList.toggle('dark');
    document.querySelector('.logo__dark img').classList.toggle('blok');
    // document.querySelector('.light').classList.toggle('none');
    
}