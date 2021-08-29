const commentsSection=()=>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res=>res.json())
    .then(data=>displayComments(data))
}
commentsSection()
const displayComments=comments=>{
    const parent=document.getElementById('parentSec')
   comments.forEach(comment=>{
       console.log(comment)
       const div=document.createElement('div')
       div.classList.add('design')
       div.innerHTML=`
       <h2>${comment.name}</h2>
       <i>${comment.email}</i>
       </br>
       <button onclick="display(${comment.id})">display</button>
       `
       parent.appendChild(div)
   })
}
const display=id=>{
    
    console.log(id)
    fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
         .then(res=>res.json())
         .then(data=>mainDisplay(data))

}
const mainDisplay=data=>{
    const par=document.getElementById('par')
    par.textContent=''
    const div=document.createElement('div')
    div.innerHTML=`
    <h2>${data.name}</h2>
    <i>${data.email}</i>
    `
    par.appendChild(div)
}
