var listMsg = document.getElementById("list-msg");
var listMsgToShow = '';

var myInput = document.getElementById("my-input");
var btnSend = document.getElementById("btnSend");
var dotsG = document.getElementById("dots");
var statusG = document.getElementById("status");



var chatBotResponseTime = 4000;


function initDotsAnimation(){
    var dots ='';

    setInterval(() => {
        dots+='.';
        if (dots == "...." ) {
            dots='';
        }else{
           dotsG.innerHTML =dots; 
        }
        
    }, 800 );
}



var messages = [
    {
        type:1,
        message : "hello"
    },
    {
        type:2,
        message : "hello back"
    },
    
];

/**
 * 
 * 
 * 
 * 
 *                    <li>
                        <div class="msg-container">
                         <div class="chat-bot-msg">
                             hello
                         </div>
                        </div>
                     </li>
                     <li>
                         <div class="msg-container">
                             <div class="user-msg">
                                 helo back
                             </div>
                         </div>
                     </li>
 * 
 * 
 * 
 * 
 * 
 */


function initMessages(){


    messages.map((message)=>{
        var msgToShow = '<li><div class="msg-container">';
         if (message.type == 1 ) {
             msgToShow+='<div class="chat-bot-msg">';
         } else {
            msgToShow+='<div class="user-msg">';
         }
          msgToShow+=' '+ message.message +'  </div></div></li>';

        listMsgToShow+=msgToShow; 
    })


    listMsg.innerHTML = listMsgToShow;



}

initMessages();

// init dots animations
initDotsAnimation();

function pushMessage(v){
    var msgToShow = '<li><div class="msg-container">';
    
    msgToShow+='<div class="user-msg">';
    
     msgToShow+=' '+ v +'  </div></div></li>';

   listMsgToShow+=msgToShow; 
   listMsg.innerHTML = listMsgToShow;

}


function pushMessageFromChatBot(v){
    statusG.style.display="block";

    setTimeout(() => {
       statusG.style.display="none";

       var msgToShow = '<li><div class="msg-container">';
    
    msgToShow+='<div class="chat-bot-msg">';
    
     msgToShow+=' '+ v +'  </div></div></li>';

   listMsgToShow+=msgToShow; 
   listMsg.innerHTML = listMsgToShow;
   
   
        
    }, chatBotResponseTime);

}


function chatBotResponse(){
    const lastMsg = messages[messages.length-1].message;

    const msgKeysWords = lastMsg.split(" ");

    var keys = [ 
        { key :'produit' , insctruction : "" },
        { key :'product' , insctruction : "" },
        { key :'acheter' , insctruction : "" },
        { key :'buy' , insctruction : "produit.html" },
     ];

     var foundResponse = false;
    for (let i = 0; i < keys.length; i++) {
        const k = keys[i];

        if ( msgKeysWords.indexOf(k.key) != -1) {
            const instruction = k.insctruction;
 
            const msgFromChatBot = 'if you wanna but our product, please got to <a href="'+instruction+'"> produit</a>.';
 
            pushMessageFromChatBot(msgFromChatBot);
            
            foundResponse = true;
            break;
            
        }
        
    }

    if (foundResponse == false) {
        pushMessageFromChatBot("please be more accurate !!");
    }


}



btnSend.addEventListener('click',()=>{
    const msg = myInput.value;

    if (msg != '') {
        messages.push({
            type:2,
            message:msg
        })
        pushMessage(msg);
        myInput.value="";

        chatBotResponse();
    }
})