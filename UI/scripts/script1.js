const images = $(".middleImg").on({
    click: function(){
        $(this).css({
            border: "2px solid #1ef",
            transition: ".3s"
        })
    }
})

// HIDE AND SHOW ELEMENTS BASED ON WHAT I click
const design = $("#design").click(function(){
    $("#showElements").css("display", "none")
    $(".showText").css("display", "none")
    $("#showUpload").css("display", "none")
    $("#showDraw").css("display", "none")
    $("#showDesign").css(
        "display","grid"
    )
})
const elements = $("#elements").click(function(){
    $("#showDesign").css("display", "none")
    $(".showText").css("display", "none")
    $("#showUpload").css("display", "none")
    $("#showDraw").css("display", "none")
    $("#showElements").css(
        "display","flex"
    )
})
const text = $("#text").click(function(){
    $("#showDesign").css("display", "none")
    $("#showElements").css("display", "none")
    $("#showUpload").css("display", "none")
    $("#showDraw").css("display", "none")
    $(".showText").css(
        "display","flex"
    )
})
const uploads = $("#uploads").click(function(){
    $("#showDesign").css("display", "none")
    $("#showElements").css("display", "none")
    $(".showText").css("display", "none")
    $("#showDraw").css("display", "none")
    $("#showUpload").css(
        "display","flex"
    )
})
const brushes = $("#brushes").click(function(){
    $("#showDesign").css("display", "none")
    $("#showElements").css("display", "none")
    $(".showText").css("display", "none")
    $("#showUpload").css("display", "none")
    $("#showDraw").css(
        "display","flex"
    )
})

// START ADDING TEMPLATES AS THERE IS A click
$(document).ready(function(){
    const umusangwa = $(".umusangwa")
    $("#templ1").click(function(){
        const templ1 = $("#templ1").clone()
        umusangwa.hide()
        const template1content = $("#firstTemplate").contents().clone()
        $("#middle").append(template1content)
        $("#bottom").append(templ1)
    });
    $("#templ2").click(function(){
        const templ2 = $("#templ2").clone()
        umusangwa.hide()
        const template2content = $("#secondTemplate").contents().clone()
        $("#middle").append(template2content)
        $("#bottom").append(templ2)
    });
    $("#templ3").click(function(){
        const templ3 = $("#templ3").clone()
        umusangwa.hide()
        const template3content = $("#thirdTemplate").contents().clone()
        $("#middle").append(template3content)
        $("#bottom").append(templ3)
    });
    $("#templ4").click(function(){
        const templ4 = $("#templ4").clone()
        umusangwa.hide()
        const template4content = $("#forthTemplate").contents().clone()
        $("#middle").append(template4content)
        $("#bottom").append(templ4)
    });
    $("#templ5").click(function(){
        const templ5 = $("#templ5").clone()
        umusangwa.hide()
        const template5content = $("#fifthTemplate").contents().clone()
        $("#middle").append(template5content)
        $("#bottom").append(templ5)
    });
    $("#templ8").click(function(){
        const templ8 = $("#templ8").clone()
        umusangwa.hide()
        const template8content = $("#eighthTemplate").contents().clone()
        $("#middle").append(template8content)
        $("#bottom").append(templ8)
    });

// START CHANGING THE FONT FAMILY WHEN A FONT IS CLICKED
    let monospace = $("#monospace").click(function(){
        const allText = $("p","h3","h4","h2").css(
            "font-family", "monospace"
        )
    })
    let micro = $("#micro").click(function(){
        const allText = $("p").css(
            "font-family", "Micro 5"
        )
    })
});