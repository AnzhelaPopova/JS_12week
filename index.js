function add() {
  const title = document.getElementById('title');
  const newElement1 = document.createElement('div');
  const newElement2 = document.createElement('img');
  const newElement3 = document.createElement('div');
 
  title.after (newElement1);
  newElement1.after (newElement2);
  newElement2.after (newElement3);
      
  let nameInput = document.getElementById('name')
  let nameInputValue= nameInput.value
  let nameLowerCase = nameInputValue.toLowerCase()
  let nameCut = nameLowerCase.split(" ")
  let name_1 = nameCut[0]
  let name_2 = nameCut[1]
  let name_3 = nameCut[2]
   
  let nameFirst = name_1[0].toUpperCase() + name_1.slice(1);
  let nameSecond = name_2[0].toUpperCase() + name_2.slice(1);
  let nameThird = name_3[0].toUpperCase() + name_3.slice(1);
   
  newElement1.innerHTML =  nameFirst + " " + nameSecond + " "+ nameThird
  
  let fotoInput = document.getElementById('foto')
  let fotoInputValue = fotoInput.value
  newElement2.setAttribute ('src', fotoInputValue)
  newElement2.setAttribute ('style', 'width: 100px')

  let commentInput = document.getElementById('comment')
  let commentInputValue = commentInput.value

  let commentInputValue1 = () => {
  
          if (commentInputValue.includes ('viagra')) {
        return commentInputValue.replace(/viagra/i, "***")
      }
      else if (commentInputValue.includes ('xxx')) {
        return commentInputValue.replace(/xxx/i, "***")
      }
      else {
        return commentInputValue }
  }
     
   newElement3.innerHTML = commentInputValue1 ()

   
}



  
