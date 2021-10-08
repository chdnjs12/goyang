// 네비
$(document).ready(function(){

    // 메인슬라이더(content1_1)
    let cont1_wh = $("#cont1_1slideWrap").width()
    // #cont1_1slideWrap의 넓이를 저장, 100%
    let cont1_1btnIndex = 0
    // #cont1_1btn의 인덱스 저장
    let cont1_1timer = setInterval(cont1_1next,2000)
    // setInterval
    
    // 이색전시관(content2)
    let cont2_liWidth = $("#cont2slideWrap ul li").width()
    // 전시관 리스트의 넓이
    // console.log(cont2_liWidth)

    //동영상(content4)
    let cont4_liNum = 15
    // 리스트 개수
    let cont4_Num = 0


    window.addEventListener("resize",function(){
        cont1_wh = $("#cont1_1slideWrap").width()
        $("#cont1_1slideWrap ul").css({
            marginLeft: -cont1_wh*cont1_1btnIndex
        })
        cont2_liWidth = $("#cont2slideWrap ul li").width()
        // console.log(cont2_liWidth)
    })

    // cont1_btn 클릭이벤트
    $("#cont1_1btn li").on("click",function(e){
        clearInterval(cont1_1timer)

        console.log($(this).index())
        cont1_1btnIndex = $(this).index()
        $("#cont1_1slideWrap ul:not(:animated)").stop().animate({
            marginLeft: -cont1_wh*$(this).index()
        },function(){
            cont1_1timer = setInterval(cont1_1next,2000)
        })

        // 버튼 on
        $("#cont1_1btn li").not($(this)).children("a").removeClass("on")
        $(this).children("a").addClass("on")

        e.preventDefault()
    })

    $("#cont1_1slideWrap ul").css("marginLeft","0px")

    function cont1_1next(){
        if(cont1_1btnIndex>=2) {
            $("#cont1_1slideWrap ul").animate({
                marginLeft: 0
            })
            cont1_1btnIndex = 0
            $("#cont1_1btn li").not(":eq(0)").children("a").removeClass("on")
            $("#cont1_1btn li:eq(0)").children("a").addClass("on")
        }
        else {
            $("#cont1_1slideWrap ul").animate({
                marginLeft: "-="+cont1_wh+"px"
            })
            cont1_1btnIndex++
            $("#cont1_1btn li").not(":eq("+cont1_1btnIndex+")").children("a").removeClass("on")
            $("#cont1_1btn li:eq("+cont1_1btnIndex+")").children("a").addClass("on")
        }
        // console.log("setInterval(cont1_1next,1000)")
        // console.log($("#cont1_1slideWrap ul").css("marginLeft"))
    }

    // 발간자료실(content1_2) 
    // e-book
    $("#bookWrap li").on("click",function(e){
        $("#main_book").css({
            backgroundImage : "url(./images/e_book"+($(this).index()+1)+".png)"
        })
        console.log($(this).index()+1)
        e.preventDefault()
    })

    // main_book 클릭했을 때 이동안하게
    $("#main_book").on("click",function(e){
        e.preventDefault()
    })

    // 버튼
    $("#cont1_2btn a").on("click",function(e){
        if($(this).attr("class")=="cont1_prev"){
            // console.log("이전")
            $("#cont1_2_slideWrap").animate({
                scrollLeft : "-=190px"
            })
        }  
        else {
            $("#cont1_2_slideWrap").animate({
                scrollLeft : "+=190px"
            })
        }
        e.preventDefault()
    })


    // 이색전시관(content2)
    // 순환구조
    $("#cont2slideWrap ul").prepend($("#cont2slideWrap ul li").last())
    $("#cont2slideWrap ul").css({marginLeft:-(cont2_liWidth+40)})
    // 순환구조 정렬

    $("#cont2_btn li").on("click",function(e){
        if($(this).children('a').attr('class')=="cont2_prev"){
            // 이전
            $("#cont2slideWrap ul").animate({
                marginLeft : 0
            },function(){
                $("#cont2slideWrap ul").prepend($("#cont2slideWrap ul li").last())
                $("#cont2slideWrap ul").css({marginLeft:-(cont2_liWidth+40)})
            })
        }
        else {
            // 다음
            $("#cont2slideWrap ul").animate({
                marginLeft : -(cont2_liWidth+40)*2
            },function(){
                cont2Num++
                $("#cont2slideWrap ul").append($("#cont2slideWrap ul li:eq(0)"))
                $("#cont2slideWrap ul").css({marginLeft:-(cont2_liWidth+40)})
            })
        }
        e.preventDefault()
    })

    // 영상넣기
    for(let i=1; i<=cont4_liNum; i++){
        $("#cont4slideWrap ul").append("<li><a href='#' class='video'"+i+">영상"+i+"</a></li>")
        $("#cont4slideWrap ul li").last().css({
            backgroundImage : "url(./images/cont4img"+i+".png)"
        })
    }

    $("#content4 ul").css({width : cont4_liNum/5*100+"%"})

    // 영상
    $("#cont4_btn1").on("click",function(e){
        
        e.preventDefault()
    })
})
