/*!Name: contrast.js
 * Date: 2017-2-14 17:14:17 */
define("MOD_ROOT/js/contrast",function(require,exports,module){require("PLG_ROOT/js/jQuery.imgScroll"),require("MOD_ROOT/js/trimPath"),require("MOD_ROOT/css/contrast.css"),require("MOD_ROOT/js/ETab");var t=require("MOD_ROOT/js/tools"),e=function(){for(var t,e=3,i=document.createElement("div"),a=i.getElementsByTagName("i");i.innerHTML="<!--[if gt IE "+ ++e+"]><i></i><![endif]-->",a[0];);return e>4?e:t}(),i={getPriceNum:function(t,e,i,a){t="string"==typeof t?[t]:t,e=e||$("body"),i=i||"J-p-",$.ajax({url:"//p.3.cn/prices/mgets?skuIds=J_"+t.join(",J_")+"&type=1",dataType:"jsonp",success:function(t){if(!t&&!t.length)return!1;for(var s=0;s<t.length;s++){var o=t[s].id.replace("J_",""),n=parseFloat(t[s].p,10);n>0?e.find("."+i+o).html("\uffe5"+t[s].p):e.find("."+i+o).html("\u6682\u65e0\u62a5\u4ef7"),"function"==typeof a&&a(o,n,t)}}})},TPL:{contrast:'<div id="pop-compare" data-load="false" class="pop-compare'+(pageConfig.wideVersion&&pageConfig.compatible?"":" pop-compare-narrow")+'"><div class="pop-wrap"><p class="pop-compare-tips"></p><div class="pop-inner"><div class="diff-hd"><ul class="tab-btns clearfix"><li class="current" data-tab="trigger"><a href="javascript:;">\u5bf9\u6bd4\u680f</a></li><li data-tab="trigger"><a href="javascript:;">\u6700\u8fd1\u6d4f\u89c8</a></li></ul><div class="operate"><a href="javascript:;" class="hide-me">\u9690\u85cf</a></div></div><div class="diff-bd tab-cons"><div class="tab-con" data-tab="item"><div id="diff-items" class="diff-items clearfix"><dl class="item-empty"><dt>1</dt><dd>\u60a8\u8fd8\u53ef\u4ee5\u7ee7\u7eed\u6dfb\u52a0</dd></dl><dl class="item-empty"><dt>2</dt><dd>\u60a8\u8fd8\u53ef\u4ee5\u7ee7\u7eed\u6dfb\u52a0</dd></dl><dl class="item-empty"><dt>3</dt><dd>\u60a8\u8fd8\u53ef\u4ee5\u7ee7\u7eed\u6dfb\u52a0</dd></dl><dl class="item-empty"><dt>4</dt><dd>\u60a8\u8fd8\u53ef\u4ee5\u7ee7\u7eed\u6dfb\u52a0</dd></dl></div><div class="diff-operate"><a target="_blank" id="goto-contrast" href="#none" class="btn-compare-b">\u5bf9\u6bd4</a><a class="del-items">\u6e05\u7a7a\u5bf9\u6bd4\u680f</a></div></div><div class="tab-con tab-scroll" data-tab="item" style="display:none;"><div class="scroll-item clearfix"><span id="sc-prev" class="scroll-btn sb-prev">&lt;</span><span id="sc-next" class="scroll-btn sb-next">&gt;</span><div class="scroll-con clearfix"><ul id="scroll-con-inner"><p class="scroll-loading ac">\u8f7d\u5165\u4e2d...</p></ul></div></div></div></div></div></div></div>',item:'<dl class="hasItem" id="cmp_item_${sku}" fore="${ind}">  <dt>      <a target="_blank" href="//item.jd.com/${data[sku].skuId}.html"><img src="${pageConfig.FN_GetImageDomain(data[sku].skuId)}n5/${data[sku].imagePath}" width="50" height="50"></a>  </dt>  <dd>      <a target="_blank" class="diff-item-name" href="//item.jd.com/${data[sku].skuId}.html">${data[sku].name}</a>      <span class="p-price"><strong class="J-p-${data[sku].skuId}"></strong><a class="del-comp-item" skuid="${data[sku].skuId}">\u5220\u9664</a></span>  </dd></dl>',recentItem:'{for item in data}<li id="rec_item_${item.sku}" data-tab="item" data-push="${pageConfig._contrast.push(item.sku)}"><div class="rec_item_wrap">  <div class="dt">      <a target="_blank" href="//item.jd.com/${item.sku}.html"><img src="${pageConfig.FN_GetImageDomain(item.sku)}n5/${item.img}" width="50" height="50"></a>  </div>  <div class="dd">      <a target="_blank" href="//item.jd.com/${item.sku}.html" class="diff-item-name">${item.t}</a>      <div class="btns clb">          <span class="p-price"><strong class="J-p-${item.sku}"></strong></span>          <a id="recent_${item.sku}" data-recent="true" data-sku="${item.sku}" skuid="${item.sku}" class="J_contrast btn-compare btn-compare-s"><span>\u5bf9\u6bd4</span></a>      </div>  </div></div></li>{/for}'},init:function(t,e,i){return this.cookieName=e||"_contrast",this.recentCharset=i||"utf-8",this.bindEvent("cmpBtn").btnStyle(null,"set"),"side"==readCookie(this.cookieName+"_status")&&$("#side-cmp").length<1?$("#sidepanel").prepend('<span id="side-cmp"><a class="compareHolder" href="javascript:;"><b></b>\u5bf9\u6bd4\u680f</a></span>'):readCookie(this.cookieName)&&this.showPopWin(null),this.bindEvent("showWin"),this.domain=pageConfig.FN_getDomain(),"1"==$("#J_goodsList").find("ul.gl-warp").attr("data-tpl")&&$("#backtop").prepend('<div class="b-item"><a class="b-i-contrast" href="#none">\u5546\u54c1\u5bf9\u6bd4</a></div>'),this},bindEvent:function(t){var e=($(".J_contrast"),$(".del-items"),this);return"cmpBtn"==t&&$("body").undelegate(".J_contrast","click").delegate(".J_contrast","click",function(){var t=$(this).attr("data-sku"),i=readCookie(e.cookieName)||"",a=i.split(".").length;4>a?(e.showPopWin(t),"true"==$(this).attr("data-recent")&&e.switchTab(0)):e.hasCookie(t)?("true"==$(this).attr("data-recent")&&e.switchTab(0),e.showPopWin(t)):(e.showPopWin(null),e.setMessage("\u5bf9\u6bd4\u680f\u5df2\u6ee1\uff0c\u60a8\u53ef\u4ee5\u5220\u9664\u4e0d\u9700\u8981\u7684\u680f\u5185\u5546\u54c1\u518d\u7ee7\u7eed\u6dfb\u52a0\u54e6\uff01"))}),"delAll"==t&&$("body").undelegate(".del-items","click").delegate(".del-items","click",function(){e.delContrastItem(null,!0),$("#goto-contrast").attr("href","#none")}),"delHover"==t&&($(".hasItem").hover(function(){$(this).find(".del-comp-item").css("visibility","visible")},function(){$(this).find(".del-comp-item").css("visibility","hidden")}),$(".hasItem .del-comp-item").bind("click",function(){var t=$(this).attr("skuid");e.delContrastItem(t)}),$("#goto-contrast").click(function(){var t=readCookie(e.cookieName)||"",i=t.split(".");if(i.length<2)return e.setMessage("\u81f3\u5c11\u6709\u4e24\u4ef6\u5546\u54c1\u624d\u80fd\u5bf9\u6bd4\u54e6\uff01"),!1;for(var a=[0,0,0,0],s=0;s<i.length;s++)a[s]=i[s];$("#goto-contrast").attr("href","//www.jd.com/compare/"+a.join("-")+".html")})),"hide"==t&&$("body").undelegate(".diff-hd .hide-me","click").delegate(".diff-hd .hide-me","click",function(){e.hidePopWin()}),"showWin"==t&&$("body").delegate(".b-i-contrast","click",function(){e.showPopWin(null,!0)}),this},switchTab:function(t){$(".diff-hd li").eq(t).trigger("click")},btnStyle:function(t,e){if(t)"set"==e&&($(".J_contrast").filter('[data-sku="'+t+'"]').addClass("selected"),$("#comp_"+t+",#recent_"+t).addClass("btn-compare-s-active"),$("#cmp_"+t).text("\u53d6\u6d88\u5bf9\u6bd4")),"del"==e&&($(".J_contrast").filter('[data-sku="'+t+'"]').removeClass("selected"),$("#comp_"+t+",#recent_"+t).removeClass("btn-compare-s-active"),$("#cmp_"+t).text("\u52a0\u5165\u5bf9\u6bd4"));else{var i=readCookie(this.cookieName)||"";if(i=i.split("."),i.length<5)for(var a=0;a<i.length;a++)"set"==e&&($(".J_contrast").filter('[data-sku="'+i[a]+'"]').addClass("selected"),$("#comp_"+i[a]+",#recent_"+i[a]).addClass("btn-compare-s-active"),$("#cmp_"+i[a]).text("\u53d6\u6d88\u5bf9\u6bd4")),"del"==e&&($(".J_contrast").filter('[data-sku="'+i[a]+'"]').removeClass("selected"),$("#comp_"+i[a]+",#recent_"+i[a]).removeClass("btn-compare-s-active"),$("#cmp_"+i[a]).text("\u52a0\u5165\u5bf9\u6bd4"))}return this},loadExistList:function(t){var e=readCookie(this.cookieName)||"";e=e.split(".");for(var i=0;i<e.length;i++)this.setContrastItem(e[i]),i+1==e.length?this.setContrastItem(e[i],t):this.setContrastItem(e[i])},showPopWin:function(t,i){var a=$("#pop-compare"),s=this;t=t||null,$("#pop-compare").length<1&&$("body").append(this.TPL.contrast),$("#diff-items .hasItem").length<1&&(readCookie(this.cookieName)?this.loadExistList(function(){s.hasCookie(t)?s.delContrastItem(t):s.setContrastItem(t)}):s.setContrastItem(t)),"false"==$("#pop-compare").attr("data-load")?($("#pop-compare").show(),a.attr("data-load","true"),$("#pop-compare").ETab({onSwitch:function(t){1==t&&$(".scroll-loading").length>0&&s.getRecent(function(t){s.setRecentScroll(),s.getPriceNum(t,$("#pop-compare"),null,function(t,e,i){})})}}),6!==e&&$("#pop-compare").animate({bottom:0},100)):("side"==readCookie(s.cookieName+"_status")&&($("#pop-compare").show().attr("data-load","true"),6!==e&&$("#pop-compare").show().animate({bottom:0}),createCookie(s.cookieName+"_status","show",30,"/;domain="+this.domain)),s.hasCookie(t)?s.delContrastItem(t):s.setContrastItem(t)),s.bindEvent("delAll").bindEvent("hide")},hidePopWin:function(){var t=this;if($("#side-cmp").length<1&&$("#sidepanel").prepend('<span id="side-cmp"><a class="compareHolder" href="javascript:;"><b></b>\u5bf9\u6bd4\u680f</a></span>'),6==e)$("#pop-compare").hide();else{if($(".pop-wrap").is(":animated"))return!1;$("#pop-compare").css("overflow","hidden").find(".pop-wrap").animate({left:"990px"},100,function(){$("#pop-compare").removeAttr("style").css({overflow:"visible",bottom:"-200px"}).hide().find(".pop-wrap").removeAttr("style").css("left",0)})}t.bindEvent("showWin"),createCookie(t.cookieName+"_status","side",30,"/;domain="+this.domain)},setContrastItem:function(t,e){var i=$("#pop-compare"),a=readCookie(this.cookieName)||"",s=(a.split(".").length,this);if(s.hasCookie(t)&&"true"==i.attr("data-load"))s.delContrastItem(t);else{if(!t)return!1;$.ajax({url:"//d.jd.com/ware/history?ids="+t,dataType:"jsonp",success:function(a){var o=$("#diff-items dl").index($("#diff-items").find(".item-empty").eq(0)),n={data:a,sku:t,ind:o};($("#cmp_item_"+t).length<1||!s.hasCookie(t))&&(i.find(".item-empty").eq(0).replaceWith(s.TPL.item.process(n)),s.getPriceNum(t,$("#pop-compare"),null,function(t,e,i){})),s.bindEvent("delHover").setCookie(t).btnStyle(t,"set"),createCookie(s.cookieName+"_status","show",30,"/;domain="+s.domain),"function"==typeof e&&e(),s.setContrastBtn("add"),$("#pop-compare").attr("data-load","true")}})}return this},setContrastBtn:function(t){var e=readCookie(this.cookieName)||"",i=e.split(".").length;"add"==t&&i>1&&$("#goto-contrast").addClass("compare-active"),"reduce"==t&&2>i&&$("#goto-contrast").removeClass("compare-active")},sortList:function(){var t=$("#diff-items"),e=[];t.find(".hasItem").each(function(){e.push($(this).clone())}),t.html("");for(var i=0;4>i;i++)i>e.length-1?$("#diff-items").append('<dl class="item-empty"><dt>'+(i+1)+"</dt><dd>\u60a8\u8fd8\u53ef\u4ee5\u7ee7\u7eed\u6dfb\u52a0</dd></dl>"):$("#diff-items").append(e[i]);return this.bindEvent("delHover"),this},delContrastItem:function(t,e){if(e){$("#diff-items").html("");for(var i=1;5>i;i++)$("#diff-items").append('<dl class="item-empty"><dt>'+i+"</dt><dd>\u60a8\u8fd8\u53ef\u4ee5\u7ee7\u7eed\u6dfb\u52a0</dd></dl>");this.btnStyle(null,"del"),$("#goto-contrast").removeClass("compare-active"),$(".btn-compare").removeClass("btn-compare-s-active"),$("#goto-contrast").unbind("click"),createCookie(this.cookieName,"",-1,"/;domain="+this.domain)}else $("#cmp_item_"+t).replaceWith('<dl class="item-empty"><dt>'+(parseInt($("#cmp_item_"+t).attr("fore"),10)+1)+"</dt><dd>\u60a8\u8fd8\u53ef\u4ee5\u7ee7\u7eed\u6dfb\u52a0</dd></dl>"),this.sortList().delCookie(t).btnStyle(t,"del"),this.setContrastBtn("reduce");return this},delCookie:function(t){if(this.hasCookie(t)&&null!==t){var e=readCookie(this.cookieName),i=e.replace(new RegExp(t+".|."+t+"|"+t),"");createCookie(this.cookieName,i,0,"/;domain="+this.domain)}return this},setCookie:function(t){var e=readCookie(this.cookieName)||"";return skuArr=e.split("."),!this.hasCookie(t)&&skuArr.length<4&&(e?(skuArr.push(t),createCookie(this.cookieName,skuArr.join("."),1,"/;domain="+this.domain)):createCookie(this.cookieName,t,1,"/;domain="+this.domain)),this},hasCookie:function(t){return t?new RegExp(t).test(readCookie(this.cookieName)):void 0},setRecentScroll:function(){var t=this;$(".scroll-con").imgScroll({visible:4,speed:300,step:1,loop:!1,direction:"x",evtType:"click",next:".sb-next",prev:".sb-prev",disableClass:"disabled"}),t.bindEvent("cmpBtn")},getRecent:function(e){var i=this,a=t.getAreaId().areaIds[0];$.ajax({url:"//diviner.jd.com/diviner",data:{p:202001,lid:a,ck:"pin,aview",lim:23,ec:this.recentCharset},dataType:"jsonp",success:function(t){$("#scroll-con-inner p").length>0&&$("#scroll-con-inner p").remove(),pageConfig._contrast=[],$("#scroll-con-inner").append(i.TPL.recentItem.process(t));var a=readCookie(i.cookieName);if(a)for(var s=a.split("."),o=s.length,n=0;o>n;n++)$("#rec_item_"+s[n]).length>0&&i.btnStyle(s[n],"set");"function"==typeof e&&e(pageConfig._contrast)}})},setMessage:function(t){$(".pop-compare-tips").text(t).fadeIn(),setTimeout(function(){$(".pop-compare-tips").fadeOut()},8e3)}};module.exports=i});