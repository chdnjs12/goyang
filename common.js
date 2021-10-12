$(document).ready(function(){
    // 버튼 state
    let cont1_1_state = 0
    let cont4_state = 0 //숫자
    let cont4_state2 = 0 //좌우

    // 메인슬라이더(content1_1)
    // #cont1_1slideWrap의 넓이를 저장, 100%
    let cont1_wh = $("#cont1_1slideWrap").width()
    // #cont1_1btn의 인덱스 저장
    let cont1_1btnIndex = 0
    // setInterval
    let cont1_1timer = setInterval(cont1_1next,2000)
    
    // 이색전시관(content2)
    // 전시관 리스트의 넓이
    let cont2_liWidth = $("#cont2slideWrap ul li").width()
    // let cont2_Num = 0
    // 전시관 setInterval
    // let cont2_timer = setInterval(cont2_next,2000)
    // console.log(cont2_liWidth)

    //동영상(content4)
    let cont4_liNum = 15
    // 동영상 버튼 인덱스
    let cont4_btnIndex = 0

    // 내비게이션
    $("#gnb>ul>li").on("mouseenter",function(){
        $(this).children("ul").stop().slideDown(300)
    })
    $("#gnb>ul>li").on("mouseleave",function(){
        $(this).children("ul").stop().slideUp(300)
    })

    // 임의로 내비도 이벤트 막아놓음
    $("#gnb a").on("click",function(e){ e.preventDefault() })

    // 이렇게도 되나?? js에선 ::before 값 변경 못하는지 물어보기 => before는 css에서만 사용가능
    // $("#gnb>ul>li>a").on("mouseenter",function(){
    //     $("+::before",this).css({
    //         left : -20+"px",
    //         width : 200
    //     })
    // })

    // aside
    // 사이드.탑(top)
    $("#asideBtn li a").on("click",function(e){
        if($(this).attr("class")=="sitemap"){
            $("#asideMenu").slideToggle()
        }
        else {
            $("html,body").animate({
                scrollTop : 0
            })
        }
        e.preventDefault()
    })

    window.addEventListener("resize",function(){
        cont1_wh = $("#cont1_1slideWrap").width()
        $("#cont1_1slideWrap ul").css({
            marginLeft: -cont1_wh*cont1_1btnIndex
        })
        // cont2_liWidth = $("#cont2slideWrap ul li").width()
        // console.log(cont2_liWidth)
        // $("#cont2slideWrap ul").css({marginLeft:-(cont2_liWidth+40)})
    })

    // cont1_btn 클릭이벤트
    $("#cont1_1btn li").on("click",function(e){
        clearInterval(cont1_1timer)
        cont1_1btnIndex = $(this).index()
        // console.log($(this).index())

        if(cont1_1_state == 0){
            // console.log("들어옴")
            $("#cont1_1btn li").not(":eq("+cont1_1btnIndex+")").children("a").removeClass("on")
            $("#cont1_1btn li:eq("+cont1_1btnIndex+")").children("a").addClass("on")
            cont1_1_state = 1
        }

        $("#cont1_1slideWrap ul:not(:animated)").stop().animate({
            marginLeft: -cont1_wh*$(this).index()
        },function(){
            cont1_1timer = setInterval(cont1_1next,2000)
            // 버튼 on
            // $("#cont1_1btn li").not(":eq("+cont1_1btnIndex+")").children("a").removeClass("on")
            // $("#cont1_1btn li:eq("+cont1_1btnIndex+")").children("a").addClass("on")
            cont1_1_state = 0
            // console.log("cont1_1_state",cont1_1_state)
        })
        e.preventDefault()
    })

    $("#cont1_1slideWrap ul").css("marginLeft","0px")

    function cont1_1next(){
        if(cont1_1btnIndex>=2) {
            $("#cont1_1slideWrap ul:not(:animated)").stop().animate({
                marginLeft: 0
            })
            cont1_1btnIndex = 0
            $("#cont1_1btn li").not(":eq(0)").children("a").removeClass("on")
            $("#cont1_1btn li:eq(0)").children("a").addClass("on")
        }
        else {
            $("#cont1_1slideWrap ul:not(:animated)").stop().animate({
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
        // console.log($(this).index()+1)
        e.preventDefault()
    })

    // 스와이퍼 적용
    /*
    $("#cont1_2_slideWrap").on("mousedown",function(e){
        $("#bookWrap").data("clickX" , e.pageX - $("#bookWrap").position().left)
        $(document).on('mousemove', function(e){
            $("#bookWrap").css({
                left: e.pageX - $("#bookWrap").data("clickX")+"px"
            })
            // console.log("마우스 이동")
            // console.log($("#bookWrap").data("clickX")+"px")
        })
    });

    $(document).on('mouseup', function(e){
        $(document).off('mousemove');
        console.log("마우스 업")
        console.log($("#bookWrap").css("left"))
        if(parseInt($("#bookWrap").css("left"))<=(-950)){
            $("#bookWrap").css("left")=(-950)+"px"
        }
        else if(parseInt($("#bookWrap").css("left"))>=0){
            $("#bookWrap").css("left")="0px"

        }
    })
    */

    // main_book 클릭했을 때 이동안하게
    $("#main_book").on("click",function(e){
        e.preventDefault()
    })

    // 버튼
    /*
    $("#cont1_2btn a").on("click",function(e){
        if($(this).attr("class")=="cont1_prev"){
            // console.log("이전")
            $("#cont1_2_slideWrap:not(:animated)").stop().animate({
                scrollLeft : "-=190px"
            })
        }  
        else {
            $("#cont1_2_slideWrap:not(:animated)").stop().animate({
                scrollLeft : "+=190px"
            })
        }
        e.preventDefault()
    })
    */

    // 이색전시관(content2)
    // 순환구조
    /*
    $("#cont2slideWrap ul").prepend($("#cont2slideWrap ul li").last())
    $("#cont2slideWrap ul").css({marginLeft:-(cont2_liWidth+40)})
    */
    // 순환구조 정렬

    // 이색전시관 a이벤트 막음
    $("#cont2slideWrap ul li").on("click",function(e){
        e.preventDefault()
    })

    /*
    $("#cont2_btn li").on("click",function(e){
        if($(this).children('a').attr('class')=="cont2_prev"){
            // 이전
            $("#cont2slideWrap ul:not(:animated)").stop().animate({
                marginLeft : 0
            },function(){
                $("#cont2slideWrap ul").prepend($("#cont2slideWrap ul li").last())
                $("#cont2slideWrap ul").css({marginLeft:-(cont2_liWidth+40)})
            })
        }
        else {
            // 다음
            cont2_next()
        }
        e.preventDefault()
    })
    */

    function cont2_next() {
        $("#cont2slideWrap ul:not(:animated)").stop().animate({
            marginLeft : -(cont2_liWidth+40)*2
        },function(){
            $("#cont2slideWrap ul").append($("#cont2slideWrap ul li:eq(0)"))
            $("#cont2slideWrap ul").css({marginLeft:-(cont2_liWidth+40)})
        })
    }

    // 문화체험(content3) a 이벤트 막음
    $("#cont3Wrap a").on("click",function(e){ e.preventDefault() })
    // 배너(banner) a 이벤트 막음
    $("#banner a").on("click",function(e){ e.preventDefault() })

    // 재미있는 동영상(content4)
    // 영상넣기
    for(let i=1; i<=cont4_liNum; i++){
        // $("#cont4slideWrap ul").append("<li><a href='#' class='video'"+i+">영상"+i+"</a></li>")
        $("#cont4slideWrap ul li a.video"+i).parent().css({
            backgroundImage : "url(./images/cont4img"+i+".png)"
        })
    }

    // 동영상 a클릭 이벤트 막아놓음
    $("#cont4slideWrap a").on("click",function(e){
        e.preventDefault()
    })
    
    /*
    $("#content4 ul").css({width : cont4_liNum/5*100+"%"})
    // 영상버튼
    // 숫자버튼
    $("#cont4_btn1 a").on("click",function(e){
        cont4_btnIndex = $(this).index()
        // console.log(cont4_btnIndex)
        // console.log($("#cont4slideWrap").width())
        $("#cont4slideWrap:not(:animated)").stop().animate({
            scrollLeft : $("#cont4slideWrap").width()*(cont4_btnIndex)+"px"
        },function(){
            cont4_state = 0
        })
        e.preventDefault()

        // 버튼 여러번 눌러도 왔다갔다 안하게 하려면 어떡할지 고민
        if(cont4_state==0){
            cont4_state = 1
            $("#cont4_btn1 a").not($(this)).removeClass("cont4_on")
            $("#cont4_btn1 a:eq("+cont4_btnIndex+")").addClass("cont4_on")
        }

    })

    // 이전,다음
    $("#cont4_btn2 a").on("click",function(e){
        if($(this).attr("class")=="cont5_prev") {
            // console.log("이전")
            if(cont4_btnIndex>0&&cont4_state2 == 0) {
                cont4_state2 = 1
                cont4_btnIndex--
                console.log("이전"+cont4_btnIndex)
                $("#cont4slideWrap:not(:animated)").stop().animate({
                    scrollLeft : $("#cont4slideWrap").width()*(cont4_btnIndex)+"px"
                },function(){ cont4_state2 = 0 })
    
                $("#cont4_btn1 a").not($(this)).removeClass("cont4_on")
                $("#cont4_btn1 a:eq("+cont4_btnIndex+")").addClass("cont4_on")
            }
        }
        else {
            // console.log("다음")
            if(cont4_btnIndex<2&&cont4_state2==0){
                cont4_btnIndex++
                console.log("다음"+cont4_btnIndex)
                $("#cont4slideWrap:not(:animated)").stop().animate({
                    scrollLeft : $("#cont4slideWrap").width()*(cont4_btnIndex)+"px"
                },function(){ cont4_state2 = 0 })
                cont4_state2 = 1
                $("#cont4_btn1 a").not($(this)).removeClass("cont4_on")
                $("#cont4_btn1 a:eq("+cont4_btnIndex+")").addClass("cont4_on")
            }
        }

        e.preventDefault()
    })
    */

    // 주요게시판(content5) 클릭이벤트 막음
    $("#content5 a").on("click",function(e){ e.preventDefault() })

    // footer 클릭이벤트 막음
    $("#footer").on("click",function(e){ e.preventDefault() })
})
