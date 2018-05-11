$(function(){
	$('#fullpage').fullpage({
		sectionsColor: ['#1bbc9b', '#4C4B4B', '#7BAABE', '#f90','rgb(16, 16, 16)','#000'],
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5','page6'],
		'navigation': true,
		/*连续滚动*/
        // loopBottom:true,
        // loopTop:true,
        /*监听到页面滚动完成的时候*/
        afterLoad:function(anchorLink,index){
            /*
            * anchorLink 描点的连接
            * index 序号
            * */
            $('.section').removeClass('now');
            setTimeout(function(){
                $('.section').eq(index-1).addClass('now');
            },300);
            
        }    
	});
    setInterval(function(){
        $.fn.fullpage.moveSlideRight();
    }, 10000);
// 头部导航栏对应的变色效果和动画  获取对应的active----------------------   
// 模块一(five) --------------------------------------------------------
    // hover效果
    $(".bofang-1").on("mouseover",function(){
        $(".zhezhao1").css("opacity","0.2");
        $('.zhezhao1').css("transition","all 2s")
    }),$(".bofang-1").on("mouseout",function(){
        $(".zhezhao1").css("opacity","0.6");
        $('.zhezhao1').css("transition","all 2s")
    })

// 社区移动端触摸事件
    function touchImg(){
        var bgimg=["images/shequ1.jpg","images/shequ2.jpg","images/shequ3.jpg","images/shequ4.jpg"
        ,"images/shequ5.jpg","images/shequ6.jpg"]
        var leftArr=["0%","16.6%","33.2%","49.8%","66.4%","83%"]
        $(".social-l").on("touchstart",function(){
            var a=$(this).attr("dataImg")
            var c=$(this).attr("data-b")
            // console.log(leftArr[a-1])
            console.log(a)
            var b = leftArr[c-1]
            console.log(b)
            $(".model-social").css({'background-image':'url('+bgimg[a-1]+')'})
            if($(this).hasClass("open")){
                $(this).css({"width":"16.6%","left":b,"height":"10%","z-index":"100","top":"35%"}).siblings(".social-l").fadeIn()
                $(this).removeClass("open")
            }else{
                $(this).css({"width":"100%","left":"0%","height":"35%","z-index":"1000","top":"25%"}).siblings(".social-l").hide()
                $(this).addClass("open")
            }     
        })
        // $(".zhezhao2").on("touchstart",function(){
        //     $(".social-m").css({"width":"16.6"})
        // })
    }
    touchImg()
});
