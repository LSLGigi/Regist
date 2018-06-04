//手机号
function phoneOnfocus(){
    document.getElementById("phonemsg").innerHTML="";
}
function phoneOnblur(){
    var textvalue=document.getElementsByName("phone")[0].value;
    if(textvalue.length<11){
        document.getElementById("phonemsg").innerHTML="长度必须为11位";

    }
    else {
        for(var i=0;i<textvalue.length;i++){
            if(textvalue.substr(i,1)<"0"||textvalue.substr(i,1)>"9"){
                document.getElementById("phonemsg").innerHTML="必须为数字";
            }
        }
    }
}
//密码
function pwOnfocus(){
    document.getElementById("pwmsg").innerHTML=" ";
}
function pwOnblur(){
    var textvalue=document.getElementsByName("password")[0].value;
    if(textvalue.length<8){
        document.getElementById("pwmsg").innerHTML="长度不能小于8位";

    }
}

function reOnfocus(){
    document.getElementById("repeatmsg").innerHTML=" ";
}
function reOnblur() {
    var textvalue1 = document.getElementsByName("password")[0].value;
    var textvalue2 = document.getElementsByName("repeat")[0].value;
    if (textvalue2 != textvalue1) {
        document.getElementById("repeatmsg").innerHTML = "密码不一致";
        textvalue2 = " "
    }
}
//用户
function userOnfocus(){
    document.getElementById("usermsg").innerHTML=" ";
}
function userOnblur(){
    var textvalue=document.getElementsByName("user")[0].value;
    if(textvalue.length>10){
        document.getElementById("usermsg").innerHTML="长度不能超过10位";
    }

}
//签名
function txtOnfocus(){
    document.getElementById("txtmsg").innerHTML=" ";
}
function txtOnblur(){
    var textvalue=document.getElementsByName("txt")[0].value;
    if(textvalue.length>100){
        document.getElementById("txtmsg").innerHTML="长度不能超过100位";

    }
}
//注册
function registCheck(){
    phoneOnblur();
    pwOnblur();
    reOnblur();
    userOnblur();
    txtOnblur();
}
