const addButton=document.querySelector("#add-button")
const toasts=document.querySelector("#toasts")
const messageContent=document.querySelector("#message-content")
const duration=document.querySelector("#duration")
const cancelable=document.querySelector("#cancelable")
const success=document.querySelector("#success")
const error=document.querySelector("#error")
const clearButton=document.querySelector("#clear-button")

addButton.addEventListener("click",function(){
    let message
    if(success.checked){
    if(messageContent.value.length==0){
        message=success.value
    }else{
       message= messageContent.value
    }
        createToast("success",message)
    }
    if(error.checked){
        if(messageContent.value.length==0){
            message=error.value
        }else{
           message= messageContent.value
        }
        createToast("error", message)
    }
})


function createToast(situation,message){
    if(cancelable.checked){
        let text=`
        <div class="toast ${situation}-toast">
        <p class="message">${message}</p>
        <button class="cancel-button">x</button>
        </div>
        `
        toasts.innerHTML+=text
    }else{
        let text=`
        <div class="toast ${situation}-toast">
        <p class="message">${message}</p>
        </div>
        `
        toasts.innerHTML+=text
    }
    setTimeout(function(){
       let toast= document.querySelector(".toast")
        toast.remove()
    },duration.value)
}

clearButton.addEventListener("click",function(){
    toasts.innerHTML=""
})
