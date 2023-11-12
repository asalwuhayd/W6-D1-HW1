


let myreq = new XMLHttpRequest();
myreq.open("Get","https://rickandmortyapi.com/api/character");
myreq.send();
myreq.onreadystatechange= function () {
 if (this.readyState === 4 && this.status === 200) {
   
    let data = JSON.parse(this.responseText);
    
    for (let i = 0; i < data.results.length; i++) {
      
      let div = document.createElement("div");
      let repoimg = document.createElement("img");
      let repoName = document.createTextNode(data.results[i].name);
      repoimg.src= data.results[i].image
      div.style.cssText ="width: 18vw;height: 36vh;justify-content: center;align-items: center;border: 2px solid black; box-shadow: 5px 5px 6px grey; border-radius: 20px; display: grid; ";
      repoimg.style.cssText = 'width: 16vw;height: 30vh;';
      div.appendChild(repoName);
      div.appendChild(repoimg);
      document.body.appendChild(div);
    }

 }

    
}
