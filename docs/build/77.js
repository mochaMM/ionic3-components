webpackJsonp([77],{417:function(l,n,e){"use strict";function a(l){return t["ɵvid"](0,[(l()(),t["ɵeld"](0,0,null,null,10,"ion-header",[],null,null,null,null,null)),t["ɵdid"](1,16384,null,0,R.a,[C.a,t.ElementRef,t.Renderer,[2,k.a]],null,null),(l()(),t["ɵted"](-1,null,["\n  "])),(l()(),t["ɵeld"](3,0,null,null,6,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,v.b,v.a)),t["ɵdid"](4,49152,null,0,h.a,[D.a,[2,k.a],[2,_.a],C.a,t.ElementRef,t.Renderer],null,null),(l()(),t["ɵted"](-1,3,["\n    "])),(l()(),t["ɵeld"](6,0,null,3,2,"ion-title",[],null,null,null,y.b,y.a)),t["ɵdid"](7,49152,null,0,E.a,[C.a,t.ElementRef,t.Renderer,[2,N.a],[2,h.a]],null,null),(l()(),t["ɵted"](-1,0,["Barcode Scanner"])),(l()(),t["ɵted"](-1,3,["\n  "])),(l()(),t["ɵted"](-1,null,["\n"])),(l()(),t["ɵted"](-1,null,["\n\n\n"])),(l()(),t["ɵeld"](12,0,null,null,19,"ion-content",[["padding",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,O.b,O.a)),t["ɵdid"](13,4374528,null,0,B.a,[C.a,I.a,L.a,t.ElementRef,t.Renderer,D.a,S.a,t.NgZone,[2,k.a],[2,_.a]],null,null),(l()(),t["ɵted"](-1,1,["\n\n  "])),(l()(),t["ɵeld"](15,0,null,1,1,"p",[],null,null,null,null,null)),(l()(),t["ɵted"](-1,null,["NOTE: THIS ONLY WORKS ON MOBILE!"])),(l()(),t["ɵted"](-1,1,["\n\n  "])),(l()(),t["ɵeld"](18,0,null,1,2,"div",[["class","json"]],null,null,null,null,null)),(l()(),t["ɵted"](19,null,["",""])),t["ɵpid"](0,P.JsonPipe,[]),(l()(),t["ɵted"](-1,1,["\n\n  "])),(l()(),t["ɵeld"](22,0,null,1,8,"div",[["text-center",""]],null,null,null,null,null)),(l()(),t["ɵted"](-1,null,["\n    "])),(l()(),t["ɵeld"](24,0,null,null,5,"button",[["color","primary"],["icon-left",""],["ion-button",""]],null,[[null,"click"]],function(l,n,e){var a=!0;if("click"===n){a=!1!==l.component.scan()&&a}return a},F.b,F.a)),t["ɵdid"](25,1097728,null,0,K.a,[[8,""],C.a,t.ElementRef,t.Renderer],{color:[0,"color"]},null),(l()(),t["ɵted"](-1,0,["\n      "])),(l()(),t["ɵeld"](27,0,null,0,1,"ion-icon",[["name","qr-scanner"],["role","img"]],[[2,"hide",null]],null,null,null,null)),t["ɵdid"](28,147456,null,0,V.a,[C.a,t.ElementRef,t.Renderer],{name:[0,"name"]},null),(l()(),t["ɵted"](-1,0,["\n      Scan\n    "])),(l()(),t["ɵted"](-1,null,["\n  "])),(l()(),t["ɵted"](-1,1,["\n\n"])),(l()(),t["ɵted"](-1,null,["\n"]))],function(l,n){l(n,25,0,"primary");l(n,28,0,"qr-scanner")},function(l,n){var e=n.component;l(n,3,0,t["ɵnov"](n,4)._hidden,t["ɵnov"](n,4)._sbPadding);l(n,12,0,t["ɵnov"](n,13).statusbarPadding,t["ɵnov"](n,13)._hasRefresher);l(n,19,0,t["ɵunv"](n,19,0,t["ɵnov"](n,20).transform(e.barcodeData)));l(n,27,0,t["ɵnov"](n,28)._hidden)})}Object.defineProperty(n,"__esModule",{value:!0});var t=e(0),u=(e(3),e(27),e(154)),o=function(){function l(l,n,e){this.navCtrl=l,this.barcodeScanner=n,this.alertCtrl=e}return l.prototype.ionViewDidLoad=function(){console.log("ionViewDidLoad BarcodescannerPage")},l.prototype.scan=function(){var l=this;this.barcodeScanner.scan({preferFrontCamera:!1,showFlipCameraButton:!0,showTorchButton:!0,torchOn:!1,prompt:"Place a barcode inside the scan area",resultDisplayDuration:500,formats:"QR_CODE,PDF_417",orientation:"portrait",disableAnimations:!0,disableSuccessBeep:!1}).then(function(n){l.barcodeData=n;l.alertCtrl.create({title:"Scan Results",subTitle:n.text,buttons:["OK"]}).present()}).catch(function(n){l.alertCtrl.create({title:"Attention!",subTitle:n,buttons:["Close"]}).present()})},l}(),r=function(){return function(){}}(),d=e(346),s=e(347),i=e(348),c=e(349),b=e(350),f=e(351),m=e(352),p=e(353),g=e(354),R=e(78),C=e(2),k=e(6),v=e(497),h=e(37),D=e(9),_=e(20),y=e(355),E=e(57),N=e(38),O=e(345),B=e(22),I=e(5),L=e(10),S=e(25),P=e(13),F=e(47),K=e(21),V=e(41),x=e(82),M=t["ɵcrt"]({encapsulation:2,styles:[],data:{}}),T=t["ɵccf"]("page-barcode-scanner",o,function(l){return t["ɵvid"](0,[(l()(),t["ɵeld"](0,0,null,null,1,"page-barcode-scanner",[],null,null,null,a,M)),t["ɵdid"](1,49152,null,0,o,[_.a,u.a,x.a],null,null)],null,null)},{},{},[]),w=e(19),q=e(126),A=e(42);e.d(n,"BarcodeScannerPageModuleNgFactory",function(){return j});var j=t["ɵcmf"](r,[],function(l){return t["ɵmod"]([t["ɵmpd"](512,t.ComponentFactoryResolver,t["ɵCodegenComponentFactoryResolver"],[[8,[d.a,s.a,i.a,c.a,b.a,f.a,m.a,p.a,g.a,T]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["ɵmpd"](4608,P.NgLocalization,P.NgLocaleLocalization,[t.LOCALE_ID,[2,P["ɵa"]]]),t["ɵmpd"](4608,w.s,w.s,[]),t["ɵmpd"](4608,w.d,w.d,[]),t["ɵmpd"](512,P.CommonModule,P.CommonModule,[]),t["ɵmpd"](512,w.q,w.q,[]),t["ɵmpd"](512,w.h,w.h,[]),t["ɵmpd"](512,w.o,w.o,[]),t["ɵmpd"](512,q.a,q.a,[]),t["ɵmpd"](512,q.b,q.b,[]),t["ɵmpd"](512,r,r,[]),t["ɵmpd"](256,A.a,o,[])])})},497:function(l,n,e){"use strict";function a(l){return t["ɵvid"](0,[(l()(),t["ɵeld"](0,0,null,null,1,"div",[["class","toolbar-background"]],null,null,null,null,null)),t["ɵdid"](1,278528,null,0,u.NgClass,[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(l()(),t["ɵeld"](2,0,null,null,8,"button",[["class","back-button"],["ion-button","bar-button"]],[[8,"hidden",0]],[[null,"click"]],function(l,n,e){var a=!0;if("click"===n){a=!1!==l.component.backButtonClick(e)&&a}return a},o.b,o.a)),t["ɵdid"](3,278528,null,0,u.NgClass,[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t["ɵdid"](4,1097728,null,0,r.a,[[8,"bar-button"],d.a,t.ElementRef,t.Renderer],null,null),(l()(),t["ɵeld"](5,0,null,0,2,"ion-icon",[["class","back-button-icon"],["role","img"]],[[2,"hide",null]],null,null,null,null)),t["ɵdid"](6,278528,null,0,u.NgClass,[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t["ɵdid"](7,147456,null,0,s.a,[d.a,t.ElementRef,t.Renderer],{name:[0,"name"]},null),(l()(),t["ɵeld"](8,0,null,0,2,"span",[["class","back-button-text"]],null,null,null,null,null)),t["ɵdid"](9,278528,null,0,u.NgClass,[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(l()(),t["ɵted"](10,null,["",""])),t["ɵncd"](null,0),t["ɵncd"](null,1),t["ɵncd"](null,2),(l()(),t["ɵeld"](14,0,null,null,2,"div",[["class","toolbar-content"]],null,null,null,null,null)),t["ɵdid"](15,278528,null,0,u.NgClass,[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t["ɵncd"](null,3)],function(l,n){var e=n.component;l(n,1,0,"toolbar-background","toolbar-background-"+e._mode);l(n,3,0,"back-button","back-button-"+e._mode);l(n,6,0,"back-button-icon","back-button-icon-"+e._mode);l(n,7,0,e._bbIcon);l(n,9,0,"back-button-text","back-button-text-"+e._mode);l(n,15,0,"toolbar-content","toolbar-content-"+e._mode)},function(l,n){var e=n.component;l(n,2,0,e._hideBb);l(n,5,0,t["ɵnov"](n,7)._hidden);l(n,10,0,e._backText)})}e.d(n,"a",function(){return i}),n.b=a;var t=e(0),u=e(13),o=e(47),r=e(21),d=e(2),s=e(41),i=(e(6),e(20),t["ɵcrt"]({encapsulation:2,styles:[],data:{}}))}});