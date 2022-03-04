//write a fuction

function myFetch() {
  
    fetch("https://xkcd.now.sh/?comic=latest")
    .then(response => response.json())
    .then(data =>  {
        console.log(data)
        
    
    let imgUrl = data.img
    let contentDiv = document.getElementById("content")
    
    let img = document.createElement("img")
    img.src = imgUrl
    
    contentDiv.appendChild(img)

    img.className = "image"
    
  })
    .catch((error) => {
    console.log("Something went wrong check your code" + error)
  })


}



myFetch()
