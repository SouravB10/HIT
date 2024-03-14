function validate(){
    let name = document.getElementById('name').value;
    let mobile = document.getElementById('mobile').value;
    let mail = document.getElementById('mail').value;
    let namestatus = false;
    let mobstatus = false;
    let mailstatus = false;
    let nameExp = /^[a-zA-Z\s]+$/;
    let mobExp = /^[0-9]+$/;
    let mailExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if(name === ''){
        document.getElementById('namenote').innerHTML='*Name is Mandatory';
        namestatus = false;
    }
    else{
        if(name.match(nameExp)){
            document.getElementById('namenote').innerHTML='';
            namestatus = true;
        }
        else{
            document.getElementById('namenote').innerHTML='*Alphabets Only';
            namestatus = false;
        }
    }
    if(mobile === ''){
        document.getElementById('mobnote').innerHTML='*Mobile Number is Mandatory';
        mobstatus = false;
    }
    else{
        if(mobile.match(mobExp)){
            if(mobile.length ===10){
                document.getElementById('mobnote').innerHTML='';
                mobstatus = true;
            }
            else{
                document.getElementById('mobnote').innerHTML='*Mobile Number should be 10 digits';
          mobstatus = false;
        } 
    }
        else{
            document.getElementById('mobnote').innerHTML='*Numbers Only';
      mobstatus = false;
        }

        
    }
    if(mail === ''){
        document.getElementById('mailnote').innerHTML='*Email Id is Mandatory'
        mailstatus = false;
    }
    else{
        if(mail.match(mailExp)){
            document.getElementById('mailnote').innerHTML='';
            mailstatus=true;
        }
        else{
            document.getElementById('mailnote').innerHTML='*Valid Email Id only';
            mailstatus=false;
        }
    }
    if(namestatus && mobstatus && mailstatus === true){
        return true;
    }
    else{
        return false;
    }
}


function validatecontact(){
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let sub = document.getElementById('sub').value;
    let mobile = document.getElementById('mob').value;
    let usernamestatus = false;
    let emailstatus = false;
    let substatus = false;
    let mobilestatus = false;
    let nameExp = /^[a-zA-Z\s]+$/;
    let mobExp = /^[0-9]+$/;
    let mailExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let subExp = /^[a-zA-Z\s]+$/;


    if(username === ''){
        document.getElementById('usernamenote').innerHTML='*Name is Mandatory';
        usernamestatus=false;
    }
    else{
        if(username.match(nameExp)){
            document.getElementById('usernamenote').innerHTML='';
            usernamestatus = true;
        }
        else{
            document.getElementById('usernamenote').innerHTML='*Alphabets Only'
            usernamestatus= false;
        }
    }
    if(mobile === ''){
        document.getElementById('mobilenote').innerHTML='*Mobile Number Is Mandatory'
        mobilestatus= false;
    }
    else{
        if(mobile.match(mobExp)){
            if(mobile.length===10){
                document.getElementById('mobilenote').innerHTML=''
                mobilestatus=true
            }
            else{
                document.getElementById('mobilenote').innerHTML='*10 Digits Only'
                mobilestatus=false;
            }
        }
        else{
            document.getElementById('mobilenote').innerHTML='*Numbers Only'
            mobilestatus=false;
        }
    }
    if(email===''){
        document.getElementById('emailnote').innerHTML='*Email ID is Required'
        emailstatus=false;
    }
    else{
        if(email.match(mailExp)){
            document.getElementById('emailnote').innerHTML=''
            emailstatus=true;
        }
        else{

            document.getElementById('emailnote').innerHTML='*Valid Email ID is Required'
            emailstatus=false
        }
    }

    if(usernamestatus && mobilestatus  && emailstatus ===true){
        return true;
    }
    else{
        return false;
    }
}
