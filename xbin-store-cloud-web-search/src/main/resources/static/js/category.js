/* jdf-1.0.0/ category.js Date:2017-02-09 17:08:53 */
define("/js/category.js",["/js/lazyload.js","/js/dropdown.js"],function(require){require("/js/lazyload.js"),require("/js/dropdown.js");var c=/^\/\/(car\.jd\.com|group\.jd\.com|huishou\.jd\.com|dujia\.jd\.com)/;var d={config:{el:$("#categorys-2014 .dd"),mainId:$("#categorys-2014"),dataUrl:"//dc.3.cn/category/get"},init:function(a){var b=this;var c=$.extend({type:null,mainId:null,el:null},a);if(c.mainId&&(b.config.mainId=$(c.mainId)),c.el&&(b.config.el=$(c.el)),b.config.mainId.attr("data-type")&&(c.type=b.config.mainId.attr("data-type")),b.isHome()||"home"==c.type)b.config.mainId.bind("mouseenter",function(){$(this).attr("data-load")||(b.getDataInit(),$(this).attr("data-load",1)),b.config.el.show()}).one("mouseleave",function(){b.config.mainId.find(".dd-inner .item").removeClass("hover")}),b.config.mainId.find(".dd-inner .item").one("mouseenter",function(){if(!b.config.mainId.attr("data-load")){var a=$(this).attr("data-index");b.getDataInit(a),b.config.el.show(),b.config.mainId.attr("data-load",1)}});else if("mini"==c.type)b.config.mainId.bind("mouseenter",function(){$(this).attr("data-load")||b.getDataInit(void 0,"mini"),$(this).attr("data-load",1),b.config.mainId.addClass("hover"),b.config.el.addClass("hover").show()}).bind("mouseleave",function(){b.config.mainId.removeClass("hover"),b.config.el.hide()});else if("default"==c.type){b.config.mainId.find(".dd").size()||(b.config.mainId.append('<div class="dd" style="display:none;"></div>'),b.config.el=function(){return $("#categorys-2014 .dd")}()),b.config.mainId.find(".dt a").append('<i class="ci-right"><s>\u25c7</s></i>'),b.config.mainId.css({height:"auto",left:0,position:"absolute"});var d=$("#navitems-2014");d.css({"padding-left":210}),$.browser.msie&&$.browser.version<=7&&!pageConfig.wideVersion&&d.css({marginRight:"-210px"}),$(".dd",d).css({"margin-top":0,"padding-top":2}),b.config.mainId.bind("mouseenter",function(){if($(this).attr("data-load")||(b.getDataInit(),$(this).attr("data-load",1)),b.config.el.show(),b.config.mainId.addClass("hover"),$.browser.msie){var a=2;$.browser.version<9&&(a=0,$.browser.version<7&&(a=5)),$(".ci-right s",b.config.mainId).css("top",a+"px")}}).bind("mouseleave",function(){b.config.el.hide(),b.config.mainId.removeClass("hover"),$.browser.msie&&$(".ci-right s",b.config.mainId).css("top","-9px")})}},getDataInit:function(a,b,c){var d=this;$.ajax({url:d.config.dataUrl,dataType:"jsonp",scriptCharset:"gb2312",cache:!0,jsonpCallback:"getCategoryCallback",success:function(e){"mini"==b?(d.render2(e),d.bigiframe(d.config.el.find(".dd-inner"))):(d.render(e),d.bigiframe(d.config.el.find(".dorpdown-layer")),d.bind(a)),c&&c()}})},imgIndex:0,getLinkHtml:function(a,b,d,e,f,g,h){var i=a.split("|");var j=[];i[0]=i[0].replace(/ /g,"");var k=/^\d.*\d$/.test(i[0])?i[0]:i[0].replace(/^(http\:\/\/|\/\/)/,"");"undefined"!=typeof e&&/^\d.*\d$/.test(i[0])&&(2==e?k="channel.jd.com/"+i[0]+".html":3==e&&(2==i[0].split("-").length?k="channel.jd.com/"+i[0]+".html":3==i[0].split("-").length&&(k="list.jd.com/list.html?cat="+i[0].replace(/\-/g,",")))),k="//"+k,"https:"==location.protocol&&c.test(k)&&(k="http:"+k),i[2]&&j.push("img-link"),j.length>0&&(j='class="'+j.join(" ")+'"');var l="";return l=i[0]?'<a href="'+k+'" '+j+' target="_blank">':"<span>",i[2]?(this.imgIndex>4&&(this.imgIndex=0),b=b?' width="'+b+'"':"",d=d?' height="'+d+'"':"",l+='<img src="//misc.360buyimg.com/lib/img/e/blank.gif" data-lazy-img="//img1'+this.imgIndex+".360buyimg.com/"+i[2]+'"  '+b+d+" />",this.imgIndex+=1):l+=(f||"")+i[1]+(g||""),l+=i[0]?"</a>":"</span>",3==e&&0==h&&1==i[3]&&i[0]&&(l='<div class="style-red-border"><div class="left-b"></div><a href="'+k+'" target="_blank">'+(f||"")+i[1]+(g||"")+'</a><div class="right-b"></div></div>'),l},render:function(a){var b=this;var c=a.data;var d="",e="";$.each(c,function(a,f){var g="";var h="";$.each(c[a].s,function(d){var e=c[a].s[d];var i=!1;h+=b.getLinkHtml(e.n)+(d<c[a].s.length-1?"\u3001":""),"n"==f.id&&0==d&&(i=!0,g+='<div class="subitems-main1">'),$.each(e.s,function(a){var c=e.s[a].s;var d=b.getLinkHtml(e.s[a].n,null,null,2,null,"<i>&gt;</i>");var f="<dt>"+d+"</dt>";var h="";0!=c&&$.each(c,function(a){h+=b.getLinkHtml(c[a].n,null,16,3,null,null,a)}),h="<dd>"+h+"</dd>",g+='<dl class="fore'+(a+1)+'">'+f+h+"</dl>",i&&6==a&&(g+='</div><div class="subitems-main2">')}),i&&(g+="</div>")});var i=function(b){var c=10>a+1?"0"+(a+1):a+1;return' clstag="h|keycount|2015|05'+c+b+'"'};d+='<div class="item fore'+(a+1)+'" data-index="'+(a+1)+'" '+i("a")+">						<h3>"+h+"</h3>						<i>&gt;</i>					</div>				",g='<div class="subitems"'+i("c")+">"+g+"</div>";var j="";$.each(c[a].c,function(d){var e=c[a].c[d];j+=b.getLinkHtml(e,null,24)}),j&&(j='<span class="line"></span><div class="sale">'+j+"</div>");var k="";$.each(c[a].t,function(d){var e=c[a].t[d];k+=b.getLinkHtml(e,null,24,null,null,"<i>&gt;</i>")}),k='<div class="channels">'+k+"</div>"+j,k='<div class="item-channels"'+i("b")+">"+k+"</div>";var l="";var m=0;$.each(c[a].b,function(d){if(8>d){var e=c[a].b[d];l+=b.getLinkHtml(e,83,35),m+=1}}),m>0&&m%2==1&&(l+='<a><img src="//img10.360buyimg.com/da/jfs/t757/162/604852976/158/9ed36f8/54c8699bNc2cfc6a1.png"></a>'),l='<div class="item-brands"'+i("d")+'><div class="brands-inner">'+l+"</div></div>";var n="";$.each(c[a].p,function(d){if(2>d){var e=c[a].p[d];n+=b.getLinkHtml(e,168,134)}}),n='<div class="item-promotions"'+i("e")+">"+n+"</div>",e+='<div class="item-sub" id="category-item-'+(a+1)+'" data-id="'+c[a].id+'">'+l+k+g+n+"</div>"}),e='<div class="dorpdown-layer" style="display: none;">				'+e+"				</div>			",d='<div class="dd-inner">'+d+"</div>",b.config.el.append(b.isHome()?e:d+e)},render2:function(a){var b=this;var c=a.data;var d="";$.each(c,function(a){var f="";$.each(c[a].s,function(d){var e=c[a].s[d];f+=b.getLinkHtml(e.n)+(d<c[a].s.length-1?"\u3001":"")});var g=function(b){var c=10>a+1?"0"+(a+1):a+1;return' clstag="h|keycount|2015|05'+c+b+'"'};d+='<div class="item fore'+(a+1)+'" data-index="'+(a+1)+'" '+g("a")+">						<h3>"+f+"</h3>					</div>				"}),d='<div class="dd-inner">'+d+"</div>",b.config.el.html(d)},bind:function(a){var b=this;var c=function(a){b.config.el.find(".dorpdown-layer").show(),b.config.el.find(".item-sub").removeClass("hover");var c=b.config.el.find(".item-sub").eq(a-1);c.addClass("hover"),c.lazyload(),b.topRest()};b.config.el.dropdown({item:"item",current:"hover",topspeed:!0,bodyClass:"item-sub",onchange:function(a){c(a.attr("data-index")),$.browser.msie&&6==$.browser.version&&b.iframeName&&$("#"+b.iframeName).height(b.iframeContext.outerHeight())},onmouseleave:function(){b.config.mainId.find(".dd-inner .item.hover").removeClass("hover"),b.config.el.find(".dorpdown-layer").hide(),b.config.el.find(".item-sub").removeClass("hover"),$.browser.msie&&6==$.browser.version&&b.iframeName&&$("#"+b.iframeName).height(0)}}),"undefined"!=typeof a&&(c(a),b.config.el.find(".item").removeClass("hover"),b.config.el.find(".item").eq(a-1).addClass("hover"))},topRest:function(){var a=this;var b=a.config.el.offset().top;var c=$(window).scrollTop();b=c>b?c-b+44:"",a.config.el.find(".dorpdown-layer").css({top:b})},isHome:function(){return"undefined"!=typeof pageConfig?pageConfig.navId&&"jdhome2015"==pageConfig.navId:!1},bigiframe:function(a,b,c){var d=this;if(a&&$.browser.msie&&6==$.browser.version){"undefined"==typeof b&&(b=a.outerWidth()),"undefined"==typeof c&&(c=a.outerHeight()),100>c&&(c=$(window).height()),d.iframeName="categoryIe6BgIframe",d.iframeContext=a;var e='<iframe src="javascript:false;" frameBorder="0" style="width:'+b+"px;height:"+c+'px;position:absolute;z-index:-1;opacity:0;filter:alpha(opacity=0);top:0;left:0;" id="'+d.iframeName+'">';a.append(e)}}};function e(a){d.init(a)}return e});
