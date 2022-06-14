'use strict';


const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];





const postContainer = document.querySelector(".posts-list");
console.log(postContainer)





posts.forEach(Element => {
    
    const elementPost = document.createElement('div')
    elementPost.classList.add('post')
    postContainer.append(elementPost)
    elementPost.innerHTML=`<div class="post__header" >
    <div class="post-meta">                    
        <div class="post-meta__icon">
            <img class="profile-pic" src="${posts[i].author.image}" alt="Phil Mangione">                    
        </div>
        <div class="post-meta__data">
            <div class="post-meta__author">${posts[i].author.name}</div>
            <div class="post-meta__time">${posts[i].created}</div>
        </div>                    
     </div>
     </div>
     <div class="post__text">${posts[i].content}.</div>
     <div class="post__image">
     <img src="${posts[i].media}" alt="">
     </div>
     <div class="post__footer">
     <div class="likes js-likes">
        <div class="likes__cta">
            <a class="like-button  js-like-button" href="#!" data-postid="1">
                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                <span class="like-button__label">Mi Piace</span>
            </a>
        </div>
        <div class="likes__counter">
            Piace a <b id="like-counter-1" class="js-likes-counter">${posts[i].likes}</b> persone
        </div>
     </div> 
    </div>            
    </div>`
})


    const likes =  document.querySelectorAll('a') //con il queryselectoAll si crea una sorta di array

    likes.forEach(btn => { //  con il forEach ho ciclato  tutti i bottoni dei likes generati dal precedente ciclio.
        
        btn.addEventListener('click',function(){
            
            let likeCounter = this.parentNode.parentNode.querySelector('.js-likes-counter')// ho sfruttato il this ed il  metodo parentnode per selezionare il contatore di likes specifico al post del bottone premuto.entrando nel div padre poi sono entrado con il queryselector , prendendo la classe per aumentare o diminuire il contatore dei likes.,
            
            if(this.classList.contains('like-button_clicked') === false){
                this.classList.add('like-button_clicked');
                likeCounter.innerHTML = parseInt(likeCounter.innerHTML) + 1
            }else{
                this.classList.remove('like-button_clicked');
                likeCounter.innerHTML = parseInt(likeCounter.innerHTML) - 1
    
            }
    
    
            console.log(likeCounter.textContent)
        })
    });
    
    console.log(likes)





