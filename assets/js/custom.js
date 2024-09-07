function showtooltip(e) {
    $("div.pop-up" + e).show()
}

function showhide(e, t) {
    e = document.getElementById(e), t = document.getElementById(t), "none" === dots.style.display ? (dots.style.display = "inline", t.innerHTML = "Read more", e.style.display = "none") : (dots.style.display = "none", t.innerHTML = "Read less", e.style.display = "inline")
}

function openCity(e, t) {
    for (var o, s = document.getElementsByClassName("tabcontent"), n = 0; n < s.length; n++) s[n].style.display = "none";
    for (o = document.getElementsByClassName("tablinks"), n = 0; n < o.length; n++) o[n].className = o[n].className.replace(" active", "");
    document.getElementById(t).style.display = "block", e.currentTarget.className += " active"
}

function showhide(e, t) {
    e = document.getElementById(e), t = document.getElementById(t), "none" === dots.style.display ? (dots.style.display = "inline", t.innerHTML = "Read more", e.style.display = "none") : (dots.style.display = "none", t.innerHTML = "Read less", e.style.display = "inline")
}



function getToken(e, o) {
    return true
    e.preventDefault(), grecaptcha.ready(function () {
        grecaptcha.execute(RECAPTCHA_SITEKEY, {
            action: "submit"
        }).then(function (e) {
            var t = document.createElement("input");
            t.type = "hidden", t.name = "token", t.id = "token", t.value = e, document.getElementById(o).appendChild(t)
        })
    })
}

function formSubmit(e, s) {
    e.preventDefault(), $("#" + s.id + " .msg").html(""), getToken(e, s.id), e = new FormData(s), $.ajax({
        type: "post",
        url: base_url + "includes/form-process.php",
        data: e,
        dataType: "json",
        cache: !1,
        contentType: !1,
        processData: !1,
        beforeSend: function () {
            $('.loader-sec').css('display', 'flex');
        },
        success: function (response) {
            $('.loader-sec').css('display', 'none');
            if (response.sts == 1) {
                $("#" + s.id + " .msg").html('<div class="alert alert-success" role="alert">' + response.msg + "</div>")
                window.location.href = base_url + "thank-you.html"
            }else if (response.sts == 2){
                $("#" + s.id + " .msg").html('<div class="alert alert-danger" role="alert">' + response.msg + "</div>") 
            }else {
                //$("#" + s.id + " .msg").html('<div class="alert alert-danger" role="alert">' + response.msg + "</div>") 
                $("#" + s.id + " .msg").html('<div class="alert alert-danger" role="alert">' + response.msg.join("<br/>") + "</div>")
            }
        },
        error: function (e, t, o) {
            $('.loader-sec').css('display', 'none');
            $("#" + s.id + " .msg").html('<div class="alert alert-danger" role="alert">Oops! Something went wrong</div>')
        }
    })
}

function package_signup(e, t) {
    $("#signupletscon").show(), $("#packMessage").html(""), $("#show-form").fadeIn("slow"), $("form#signupletscon input[name=packagetitle]").val(e), $("form#signupletscon input[name=packagetype]").val(t), jQuery("html, body").animate({
        scrollTop: jQuery("#show-form").offset().top
    }, 2e3)
}
$(".top-nav li, .footer-colom li").click(function () {
    $(this).find(".dropdown, .footer-dropdown").slideToggle(), $(this).siblings().find(".dropdown, .footer-dropdown").hide()
}), $(window).scroll(function () {
    500 < $(this).scrollTop() ? $(".sidebar-contact").addClass("show") : $(".sidebar-contact").removeClass("show")
}), document.addEventListener("DOMContentLoaded", function (e) {
    document.querySelectorAll(".navbar-toggler")[0].addEventListener("click", function (e) {
        e.target.children[0].classList.toggle("active")
    });
    var t = document.querySelectorAll("html")[0],
        o = document.querySelectorAll("*[data-bs-toggle-theme]")[0];
    t.setAttribute("data-bs-theme", "dark"), o && o.addEventListener("click", function (e) {
        e.preventDefault(), "dark" === t.getAttribute("data-bs-theme") ? t.setAttribute("data-bs-theme", "light") : t.setAttribute("data-bs-theme", "dark")
    })
}), $(".count").each(function () {
    $(this).prop("Counter", 0).animate({
        Counter: $(this).text()
    }, {
        duration: 4e3,
        easing: "swing",
        step: function (e) {
            $(this).text(Math.ceil(e))
        }
    })
}), $(".click-div a").click(function () {
    $(".click-div ").removeClass("activelink"), $(this).addClass("activelink");
    var e = $(this).data("tag");
    $(".uix-tabs__content").removeClass("active").addClass("hide"), $("#" + e).addClass("active").removeClass("hide"), $(".click-div").click(function () {
        $(".click-div").removeClass("active"), $(this).addClass("active")
    })
}), $(function () {
    $("a.trigger").hover(function (e) { }, function () {
        $("div.pop-up").hide()
    }), $("a.trigger").mousemove(function (e) {
        $("div.pop-up").css("top", e.pageY + 10).css("left", e.pageX + 20)
    })
}), $("#FaqList").on("hide.bs.collapse show.bs.collapse", e => {
    $(e.target).prev().find("i:last-child").toggleClass("fa-minus fa-plus")
}), $(document).ready(function () {
    $(window).scroll(function () {
        300 < $(this).scrollTop() ? $(".ftr_cta_blk,  #return-to-top").fadeIn() : $(".ftr_cta_blk,  #return-to-top").fadeOut()
    })
}), $(window).scroll(function () {
    50 <= $(this).scrollTop() ? $("#return-to-top").fadeIn(30) : $("#return-to-top").fadeOut(30)
}), $("#return-to-top").click(function () {
    $("body,html").animate({
        scrollTop: 0
    }, 500)
}),
    (window), $(window).scroll(function () {
        120 < $(this).scrollTop() ? $("#sticky-header").addClass("sticky") : $("#sticky-header").removeClass("sticky")
    }), $(".moreless-button2").click(function () {
        $(".moretext2").slideToggle(), "Read more" == $(".moreless-button2").text() ? $(this).text("Read less") : $(this).text("Read more")
    }), $(".moreless-button").click(function () {
        $(".moretext").slideToggle(), "Read more" == $(".moreless-button").text() ? $(this).text("Read less") : $(this).text("Read more")
    }), $(".moreless-button3").click(function () {
        $(".moretext3").slideToggle(), "Read more" == $(".moreless-button3").text() ? $(this).text("Read less") : $(this).text("Read more")
    }), $(".moreless-button4").click(function () {
        $(".moretext4").slideToggle(), "Read more" == $(".moreless-button4").text() ? $(this).text("Read less") : $(this).text("Read more")
    }), $(".moreless-button5").click(function () {
        $(".moretext5").slideToggle(), "Read more" == $(".moreless-button5").text() ? $(this).text("Read less") : $(this).text("Read more")
    }), $(".moreless-button6").click(function () {
        $(".moretext6").slideToggle(), "Read more" == $(".moreless-button6").text() ? $(this).text("Read less") : $(this).text("Read more")
    }), $(".moreless-button7").click(function () {
        $(".moretext7").slideToggle(), "Read more" == $(".moreless-button7").text() ? $(this).text("Read less") : $(this).text("Read more")
    }), $(".close-frm, .close-package-form").click(function () {
        $("#show-form, #show-instamojo-form").fadeOut("slow")
    }), $(".insta-mojo-5555").click(function () {
        $(" #show-instamojo-form").fadeIn("slow")
    }), $(document).ready(function () {
        $("#knowmore").click(function () {
            $("#AllCOn").slideToggle("slow")
        })
    }), $(window).scroll(function () {
        500 < $(this).scrollTop() ? $(".sidebar-contact").addClass("show") : $(".sidebar-contact").removeClass("show")
    }), $("#send-perposal").click(function () {
        "" == $("form#ready_to_grow_form input[name=website]").val() ? ($("form#ready_to_grow_form .msg").html("Please Enter Your Website"), $("form#ready_to_grow_form input[name=website]").focus()) : ($("form#ready_to_grow_form .msg").html(""), $("form#ready_to_grow_form .hidden-form").css("display", "block"), $("form#ready_to_grow_form .website-area").css("display", "none"))
    }), $(document).ready(function () {
        var t = 187,
            o = "Read More";
        $(".more").each(function () {
            var e = $(this).html();
            e.length > t && (e = e.substr(0, t) + '<span class="moreellipses">&nbsp;</span><span class="morecontent"><span>' + e.substr(t, e.length - t) + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + o + "</a></span>", $(this).html(e))
        }), $(".morelink").click(function () {
            return $(this).hasClass("less") ? ($(this).removeClass("less"), $(this).html(o)) : ($(this).addClass("less"), $(this).html("Read Less")), $(this).parent().prev().toggle(), $(this).prev().toggle(), !1
        })
    });




