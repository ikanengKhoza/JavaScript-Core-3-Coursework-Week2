

//added event listener to button
buttonEl = document.getElementById("btn")
buttonEl.addEventListener("click", function(){
    fetch(`https://dog.ceo/api/breeds/image/random`)

    .then(response => response.json())
    .then(body => {
       
        let imgUrl = body.message;
        let ulElement = document.getElementById("ul")
    
        let imageEl = document.createElement("img")
        imageEl.src = imgUrl
    
        let liElement = document.createElement('li')
    
        ulElement.appendChild(liElement)
        liElement.appendChild(imageEl)
    })
    .catch((error) => {
        console.log(error);
      })
})


//display randon dog pictures on load
// let promise = fetch(`https://dog.ceo/api/breeds/image/random`)

// .then(response => response.json())
// .then(body => {
   
//     let imgUrl = body.message;
//     let ulElement = document.getElementById("ul")

//     let imageEl = document.createElement("img")
//     imageEl.src = imgUrl

//     let liElement = document.createElement('li')

//     ulElement.appendChild(liElement)
//     liElement.appendChild(imageEl)
// });
