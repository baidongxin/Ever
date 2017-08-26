/* 
* @Author: BAI
* @Date:   2016-04-19 11:24:35
* @Last modified by:   BAI
* @Last Modified time: 2016-05-19 11:52:47
*/
$(document).ready(function(){
  $("#move ul li").click(function(){
    $("#move ul li").removeClass("math");
    $(this).addClass("math");
  });  
  $("#move2 ul li").click(function(){
    $("#move2 ul li").removeClass("math");
    $(this).addClass("math");
  });  
  $("#move3 ul li").click(function(){
    $("#move3 ul li").removeClass("math");
    $(this).addClass("math");
  });
  $("#not p").click(function() {
    /* 服务说明显示 */
    $("#explain").toggle();
  });  
  $("#explain p").click(function() {
    /* 服务说明显示 */
    $("#explain").hide();
  });
});
//充值中心侧边栏交互
    $(document).ready(function() {
        $('#water h3').click(function(){
            $(this).nextAll().slideToggle(400);
        })
        $('#water p a').click(function(){
          $('#water p a').removeClass('choose');
          $(this).addClass('choose');
        })
    });
$(document).ready(function() {
//导航栏交互
$('#nav_r li').click(function(){
    $('#nav_r li').removeClass('now');
    $(this).addClass('now');
})
//业务查询页面值、地区交互
$('#bot_list a').click(function(){
    $('#bot_list a').removeClass('bot_choose');
    $(this).addClass('bot_choose');
})
});

//控制表单输入字数
  function isNotMax(oinput){
  if( oinput.value.length >oinput.getAttribute("maxlength")){
  return oinput.value.substring(0,oinut.getAttribute("maxlength"));
  }else{
  return oinput.value;
  }
  }

  //表单获取焦点描边变色
  $(function(){
      $("#search input,select").focus(function(){
          $(this).css("border-color","#32ade6");
      });
      $("#search input,select").blur(function(){
          $(this).css("border-color","#d7d7d7");
      });
      $("#search #out").focus(function(){
          $(this).css("border-color","#ff9c31");
      });
      $("#search #out").blur(function(){
          $(this).css("border-color","#ff9c31");
      });
      $("#search #go").focus(function(){
          $(this).css("border-color","#57c88a");
      });
      $("#search #go").blur(function(){
          $(this).css("border-color","#57c88a");
      });
      $("#last #out").focus(function(){
          $(this).css("border-color","#32ade6");
      });
      $("#last #out").blur(function(){
          $(this).css("border-color","#32ade6");
      });
  });

  //表单背景色
 $(document).ready(function(){ 

 odd= {"background":"#fff","color":"#666"};//奇数样式 

 even={"background":"#f1f1f1","color":"#666",};//偶数样式 

 odd_even("#list",odd,even); 
 }); 
 function 
 odd_even(id,odd,even){ 
 $(id).find("tr").each(function(index,element){ 

 if(index%2==1) 
 $(this).css(odd); 
 else 
 $(this).css(even); 
 }); 
 } 

 //分页栏
$(function(){
$('.M-box3').pagination({
    pageCount:10,
    jump:true,
    coping:true,
    homePage:'首页',
    endPage:'末页',
    prevContent:'上页',
    nextContent:'下页'
});
            });

//获取验证码后计时
var InterValObj; //timer变量，控制时间
var count = 120; //间隔函数，1秒执行
var curCount;//当前剩余秒数
function sendMessage() {
  　curCount = count;
　　//设置button效果，开始计时
     $("#out").attr("disabled", "true");
     $("#out").val( curCount + "后重新发送");
     InterValObj = window.setInterval(SetRemainTime, 1000); //启动计时器，1秒执行一次
　　  //向后台发送处理数据
     $.ajax({
     　　type: "POST", //用POST方式传输
     　　dataType: "text", //数据格式:JSON
     　　url: 'Login.ashx', //目标地址
    　　 data: "dealType=" + dealType +"&uid=" + uid + "&code=" + code,
    　　 error: function (XMLHttpRequest, textStatus, errorThrown) { },
     　　success: function (msg){ }
     });
}

//timer处理函数
function SetRemainTime() {
            if (curCount == 0) {                
                window.clearInterval(InterValObj);//停止计时器
                $("#out").removeAttr("disabled");//启用按钮
                $("#out").val("重新发送验证码");
            }
            else {
                curCount--;
                $("#out").val(curCount + "后重新发送");
            }
        }
//活动管理——活动流水侧边栏收缩展开
$(document).ready(function() {
  $('#water span').click(function(event) {
    /* 耳机侧边栏交互 */
    $('#water a').fadeToggle('400');
  });
//去除单选按钮样式
$('input[type="radio"]').css('none');
});
