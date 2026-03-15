function toggleChat(){

let chat = document.getElementById("chatbox")

if(chat.style.display === "flex"){

chat.style.display = "none"

}

else{

chat.style.display = "flex"

}

}



function sendMessage(event){

if(event.key === "Enter"){

let input = document.getElementById("user-input")

let message = input.value

if(message.trim() === "") return

let chat = document.getElementById("chat-messages")

let userMessage = document.createElement("p")

userMessage.textContent = "Você: " + message

chat.appendChild(userMessage)

input.value = ""

botResponse(message)

}

}



function botResponse(message){

let chat = document.getElementById("chat-messages")

let botMessage = document.createElement("p")

message = message.toLowerCase()

if(message.includes("curso")){

botMessage.textContent = "A BitLearn oferece cursos de programação, tecnologia e carreira digital."

}

else if(message.includes("preço") || message.includes("valor")){

botMessage.textContent = "Os planos da BitLearn começam a partir de R$29 mensais."

}

else if(message.includes("ia") || message.includes("inteligência artificial")){

botMessage.textContent = "Sim! Temos conteúdos sobre Inteligência Artificial e automação."

}

else if(message.includes("oi") || message.includes("olá")){

botMessage.textContent = "Olá! Sou o assistente da BitLearn. Como posso ajudar?"

}

else{

botMessage.textContent = "No momento, posso tirar dúvidas sobre valores, cursos disponíveis e inteligência artificial."

}

chat.appendChild(botMessage)

}