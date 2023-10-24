s//sending messages to the server
const socket = new WebSocket('ws://localhost:4200')
 function sendMessage(){
    //alows to submit the form without reloading
    e.preventDefault()
    const input =document.querySelector('input')
     if(input.value){
        socket.send(input.value)
        document.getElementById("outputDiv").textContent=input.value
        input.value=""
     }
     input.focus()
 }

document.querySelector('form').addEventListener('submit',sendMessage )

//Listening for messages from the serevr
socket.addEventListener("message",({data})=>{

    const newMessage = document.createElement('div')
    newMessage.textContent=data
   document.getElementById("outputDiv").appendChild(newMessage)
})

