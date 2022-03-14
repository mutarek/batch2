
var id = document.getElementById('click');
id.addEventListener('click',showAdmin);

id.addEventListener('mouseleave',showRegular);


function showAdmin() {
    console.log('clicked');
    var mydiv = document.getElementById('mainhead');
    mydiv.setAttribute('class','paidheader');

    var maincontent = document.querySelectorAll('#mycontent');
    console.log(maincontent);
    for (let i = 0; i < maincontent.length; i++) {
        maincontent[i].setAttribute('class','customtarekbaiya');
        
    }

    console.log(document.head);
   

}

function showRegular() {
    console.log('clicked');
    var mydiv = document.getElementById('mainhead');
    mydiv.setAttribute('class','header');

    var maincontent = document.querySelectorAll('#mycontent');
    console.log(maincontent);
    for (let i = 0; i < maincontent.length; i++) {
        maincontent[i].setAttribute('class','tarekbaiya');
        
    }

    console.log(document.head);
   

}