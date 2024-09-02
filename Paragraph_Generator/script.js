
const paragraphs =['JavaScript (JS) is a cross-platform, object-oriented programming language used by developers to make web pages ',
    ' interactive. It allows developers to create dynamically ',
     ' updating content, use animations, pop-up menus, clickable buttons, control multimedia, etc. ' ,
     'The use of JavaScript can be both on the client-side and server-side. While HTML and CSS languages are used to give structure and ',
      'style to web pages, JavaScript is used to add interactive' ,
     'elements that engage users. Without JavaScript, 90% of Internet webpages would be static.' 
    ];


const item = document.getElementById("items");
const dataContainer = document.getElementById("data");

function shuffle(array){
    let currentIndex = array.length;
    let randomIndex;
    while(currentIndex!=0){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex],array[randomIndex]] = [
             array[randomIndex], array[currentIndex]
        ];
    }
    return array;
}


function generate(){
     if(item.value ==0){
        alert("The value cannot be zero");
     }
     else if(item.value > paragraphs.length){
        const randomIndex = Math.floor(Math.random() * paragraphs.length);
        dataContainer.innerHTML = `${paragraphs[randomIndex]}`;
     }
     else{
        const shuffleParagraphs = paragraphs;
        shuffle(paragraphs);

        const selectedParagraphs = shuffleParagraphs.slice(0 , item.value);
        const paragraphsHTML = selectedParagraphs.map(paragraphs =>`<p>${paragraphs}</p>`).join("");
        dataContainer.innerHTML =paragraphsHTML;
     }
}