
/**
 * Created by zhangsan on 16/9/6.
 */
;(function (JQuery) {
        JQuery.loading = function(b) {
            var c = b || {
                        imgUrl: "assets/imgs/07.gif",
                        width: "50px",
                        height: "50px"
                    },
                d = document.createElement("div"),
                e = document.createElement("i");
            e.style.background = "url('" + c.imgUrl + "') no-repeat center center",
                e.style.backgroundSize = "100%",
                e.style.display = "inline-block",
                e.style.width = c.width,
                e.style.height = c.height,
                e.style.verticalAlign = "middle",
                d.style.position = "fixed",
                d.style.left = "0",
                d.style.top = "0",
                d.style.width = "100%",
                d.style.height = "100%",
                d.style.textAlign = "center",
                d.style.paddingTop = "10%",
                d.style.zIndex = "1000",
                $(d).attr("id", "page-loading"),
                d.appendChild(e),
                $("body").append(d).css("overflow","hidden");
        }
        //加载完之后
	    JQuery.loaded = function() {
	        $("#page-loading").remove()
	        $("body").css("overflow","auto");
	    }
        JQuery.loadPage = function(){
            var d = document.createElement("div");
                d.style.background = "#fff",
                d.style.position = "fixed",
                d.style.left = "0",
                d.style.top = "0",
                d.style.width = "100%",
                d.style.height = window.screen.height + "px",
                d.style.lineHeight = window.screen.height + "px",
                d.style.textAlign = "center",
                $(d).attr("id", "page-loading1"),
                $("body").append(d).css("overflow","hidden");
        }
        JQuery.loadPageEd = function() {
            $("#page-loading1").remove()
            $("body").css("overflow","auto");
        }
})(jQuery);