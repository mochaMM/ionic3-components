webpackJsonp([3],{423:function(l,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"AlertsPageModuleNgFactory",function(){return R});var t=n(0),a=n(508),o=n(346),u=n(347),d=n(348),r=n(349),c=n(350),i=n(351),s=n(352),b=n(353),f=n(354),p=n(511),k=n(13),m=n(19),g=n(126),h=n(42),v=n(504),R=t["ɵcmf"](a.a,[],function(l){return t["ɵmod"]([t["ɵmpd"](512,t.ComponentFactoryResolver,t["ɵCodegenComponentFactoryResolver"],[[8,[o.a,u.a,d.a,r.a,c.a,i.a,s.a,b.a,f.a,p.a]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["ɵmpd"](4608,k.NgLocalization,k.NgLocaleLocalization,[t.LOCALE_ID,[2,k["ɵa"]]]),t["ɵmpd"](4608,m.s,m.s,[]),t["ɵmpd"](4608,m.d,m.d,[]),t["ɵmpd"](512,k.CommonModule,k.CommonModule,[]),t["ɵmpd"](512,m.q,m.q,[]),t["ɵmpd"](512,m.h,m.h,[]),t["ɵmpd"](512,m.o,m.o,[]),t["ɵmpd"](512,g.a,g.a,[]),t["ɵmpd"](512,g.b,g.b,[]),t["ɵmpd"](512,a.a,a.a,[]),t["ɵmpd"](256,h.a,v.a,[])])})},497:function(l,e,n){"use strict";function t(l){return a["ɵvid"](0,[(l()(),a["ɵeld"](0,0,null,null,1,"div",[["class","toolbar-background"]],null,null,null,null,null)),a["ɵdid"](1,278528,null,0,o.NgClass,[a.IterableDiffers,a.KeyValueDiffers,a.ElementRef,a.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(l()(),a["ɵeld"](2,0,null,null,8,"button",[["class","back-button"],["ion-button","bar-button"]],[[8,"hidden",0]],[[null,"click"]],function(l,e,n){var t=!0;if("click"===e){t=!1!==l.component.backButtonClick(n)&&t}return t},u.b,u.a)),a["ɵdid"](3,278528,null,0,o.NgClass,[a.IterableDiffers,a.KeyValueDiffers,a.ElementRef,a.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),a["ɵdid"](4,1097728,null,0,d.a,[[8,"bar-button"],r.a,a.ElementRef,a.Renderer],null,null),(l()(),a["ɵeld"](5,0,null,0,2,"ion-icon",[["class","back-button-icon"],["role","img"]],[[2,"hide",null]],null,null,null,null)),a["ɵdid"](6,278528,null,0,o.NgClass,[a.IterableDiffers,a.KeyValueDiffers,a.ElementRef,a.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),a["ɵdid"](7,147456,null,0,c.a,[r.a,a.ElementRef,a.Renderer],{name:[0,"name"]},null),(l()(),a["ɵeld"](8,0,null,0,2,"span",[["class","back-button-text"]],null,null,null,null,null)),a["ɵdid"](9,278528,null,0,o.NgClass,[a.IterableDiffers,a.KeyValueDiffers,a.ElementRef,a.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(l()(),a["ɵted"](10,null,["",""])),a["ɵncd"](null,0),a["ɵncd"](null,1),a["ɵncd"](null,2),(l()(),a["ɵeld"](14,0,null,null,2,"div",[["class","toolbar-content"]],null,null,null,null,null)),a["ɵdid"](15,278528,null,0,o.NgClass,[a.IterableDiffers,a.KeyValueDiffers,a.ElementRef,a.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),a["ɵncd"](null,3)],function(l,e){var n=e.component;l(e,1,0,"toolbar-background","toolbar-background-"+n._mode);l(e,3,0,"back-button","back-button-"+n._mode);l(e,6,0,"back-button-icon","back-button-icon-"+n._mode);l(e,7,0,n._bbIcon);l(e,9,0,"back-button-text","back-button-text-"+n._mode);l(e,15,0,"toolbar-content","toolbar-content-"+n._mode)},function(l,e){var n=e.component;l(e,2,0,n._hideBb);l(e,5,0,a["ɵnov"](e,7)._hidden);l(e,10,0,n._backText)})}n.d(e,"a",function(){return i}),e.b=t;var a=n(0),o=n(13),u=n(47),d=n(21),r=n(2),c=n(41),i=(n(6),n(20),a["ɵcrt"]({encapsulation:2,styles:[],data:{}}))},504:function(l,e,n){"use strict";n.d(e,"a",function(){return t});n(3),n(27);var t=function(){function l(l){this.alertCtrl=l,this.testRadioOpen=!1,this.testCheckboxOpen=!1}return l.prototype.doAlert=function(){this.alertCtrl.create({title:"New Friend!",subTitle:"Your friend, Obi wan Kenobi, just accepted your friend request!",buttons:["Ok"]}).present()},l.prototype.doConfirm=function(){this.alertCtrl.create({title:"Use this lightsaber?",message:"Do you agree to use this lightsaber to do good across the intergalactic galaxy?",buttons:[{text:"Disagree",handler:function(){console.log("Disagree clicked")}},{text:"Agree",handler:function(){console.log("Agree clicked")}}]}).present()},l.prototype.doPrompt=function(){this.alertCtrl.create({title:"Login",message:"Enter a name for this new album you're so keen on adding",inputs:[{name:"title",placeholder:"Title"}],buttons:[{text:"Cancel",handler:function(l){console.log("Cancel clicked")}},{text:"Save",handler:function(l){console.log("Saved clicked",l)}}]}).present()},l.prototype.doRadio=function(){var l=this,e=this.alertCtrl.create();e.setTitle("Lightsaber color"),e.addInput({type:"radio",label:"Blue",value:"blue",checked:!0}),e.addInput({type:"radio",label:"Green",value:"green"}),e.addInput({type:"radio",label:"Red",value:"red"}),e.addInput({type:"radio",label:"Yellow",value:"yellow"}),e.addInput({type:"radio",label:"Purple",value:"purple"}),e.addInput({type:"radio",label:"White",value:"white"}),e.addInput({type:"radio",label:"Black",value:"black"}),e.addButton("Cancel"),e.addButton({text:"Ok",handler:function(e){console.log("Radio data:",e),l.testRadioOpen=!1,l.testRadioResult=e}}),e.present()},l.prototype.doCheckbox=function(){var l=this,e=this.alertCtrl.create();e.setTitle("Which planets have you visited?"),e.addInput({type:"checkbox",label:"Alderaan",value:"value1",checked:!0}),e.addInput({type:"checkbox",label:"Bespin",value:"value2"}),e.addInput({type:"checkbox",label:"Coruscant",value:"value3"}),e.addInput({type:"checkbox",label:"Endor",value:"value4"}),e.addInput({type:"checkbox",label:"Hoth",value:"value5"}),e.addInput({type:"checkbox",label:"Jakku",value:"value6"}),e.addInput({type:"checkbox",label:"Naboo",value:"value6"}),e.addInput({type:"checkbox",label:"Takodana",value:"value6"}),e.addInput({type:"checkbox",label:"Tatooine",value:"value6"}),e.addButton("Cancel"),e.addButton({text:"Okay",handler:function(e){console.log("Checkbox data:",e),l.testCheckboxOpen=!1,l.testCheckboxResult=e}}),e.present()},l}()},508:function(l,e,n){"use strict";n.d(e,"a",function(){return t});n(3),n(27);var t=function(){return function(){}}()},511:function(l,e,n){"use strict";function t(l){return a["ɵvid"](0,[(l()(),a["ɵeld"](0,0,null,null,20,"ion-header",[],null,null,null,null,null)),a["ɵdid"](1,16384,null,0,o.a,[u.a,a.ElementRef,a.Renderer,[2,d.a]],null,null),(l()(),a["ɵted"](-1,null,["\n  "])),(l()(),a["ɵeld"](3,0,null,null,16,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,r.b,r.a)),a["ɵdid"](4,49152,null,0,c.a,[i.a,[2,d.a],[2,s.a],u.a,a.ElementRef,a.Renderer],null,null),(l()(),a["ɵted"](-1,3,["\n    "])),(l()(),a["ɵeld"](6,0,null,0,8,"button",[["ion-button",""],["menuToggle",""]],[[8,"hidden",0]],[[null,"click"]],function(l,e,n){var t=!0;if("click"===e){t=!1!==a["ɵnov"](l,8).toggle()&&t}return t},b.b,b.a)),a["ɵdid"](7,1097728,[[1,4]],0,f.a,[[8,""],u.a,a.ElementRef,a.Renderer],null,null),a["ɵdid"](8,1064960,null,0,p.a,[k.a,[2,d.a],[2,f.a],[2,c.a]],{menuToggle:[0,"menuToggle"]},null),a["ɵdid"](9,16384,null,1,m.a,[u.a,a.ElementRef,a.Renderer,[2,g.a],[2,c.a]],null,null),a["ɵqud"](603979776,1,{_buttons:1}),(l()(),a["ɵted"](-1,0,["\n      "])),(l()(),a["ɵeld"](12,0,null,0,1,"ion-icon",[["name","menu"],["role","img"]],[[2,"hide",null]],null,null,null,null)),a["ɵdid"](13,147456,null,0,h.a,[u.a,a.ElementRef,a.Renderer],{name:[0,"name"]},null),(l()(),a["ɵted"](-1,0,["\n    "])),(l()(),a["ɵted"](-1,3,["\n    "])),(l()(),a["ɵeld"](16,0,null,3,2,"ion-title",[],null,null,null,v.b,v.a)),a["ɵdid"](17,49152,null,0,R.a,[u.a,a.ElementRef,a.Renderer,[2,g.a],[2,c.a]],null,null),(l()(),a["ɵted"](-1,0,["Lists"])),(l()(),a["ɵted"](-1,3,["\n  "])),(l()(),a["ɵted"](-1,null,["\n"])),(l()(),a["ɵted"](-1,null,["\n"])),(l()(),a["ɵeld"](22,0,null,null,22,"ion-content",[["padding",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,C.b,C.a)),a["ɵdid"](23,4374528,null,0,y.a,[u.a,x.a,I.a,a.ElementRef,a.Renderer,i.a,E.a,a.NgZone,[2,d.a],[2,s.a]],null,null),(l()(),a["ɵted"](-1,1,["\n  "])),(l()(),a["ɵeld"](25,0,null,1,2,"button",[["block",""],["ion-button",""]],null,[[null,"click"]],function(l,e,n){var t=!0;if("click"===e){t=!1!==l.component.doAlert()&&t}return t},b.b,b.a)),a["ɵdid"](26,1097728,null,0,f.a,[[8,""],u.a,a.ElementRef,a.Renderer],{block:[0,"block"]},null),(l()(),a["ɵted"](-1,0,["Basic Alert"])),(l()(),a["ɵted"](-1,1,["\n  "])),(l()(),a["ɵeld"](29,0,null,1,2,"button",[["block",""],["color","light"],["ion-button",""]],null,[[null,"click"]],function(l,e,n){var t=!0;if("click"===e){t=!1!==l.component.doConfirm()&&t}return t},b.b,b.a)),a["ɵdid"](30,1097728,null,0,f.a,[[8,""],u.a,a.ElementRef,a.Renderer],{color:[0,"color"],block:[1,"block"]},null),(l()(),a["ɵted"](-1,0,["Confirm Alert"])),(l()(),a["ɵted"](-1,1,["\n  "])),(l()(),a["ɵeld"](33,0,null,1,2,"button",[["block",""],["color","secondary"],["ion-button",""]],null,[[null,"click"]],function(l,e,n){var t=!0;if("click"===e){t=!1!==l.component.doPrompt()&&t}return t},b.b,b.a)),a["ɵdid"](34,1097728,null,0,f.a,[[8,""],u.a,a.ElementRef,a.Renderer],{color:[0,"color"],block:[1,"block"]},null),(l()(),a["ɵted"](-1,0,["Prompt Alert"])),(l()(),a["ɵted"](-1,1,["\n  "])),(l()(),a["ɵeld"](37,0,null,1,2,"button",[["block",""],["color","danger"],["ion-button",""]],null,[[null,"click"]],function(l,e,n){var t=!0;if("click"===e){t=!1!==l.component.doRadio()&&t}return t},b.b,b.a)),a["ɵdid"](38,1097728,null,0,f.a,[[8,""],u.a,a.ElementRef,a.Renderer],{color:[0,"color"],block:[1,"block"]},null),(l()(),a["ɵted"](-1,0,["Radio Alert"])),(l()(),a["ɵted"](-1,1,["\n  "])),(l()(),a["ɵeld"](41,0,null,1,2,"button",[["block",""],["color","dark"],["ion-button",""]],null,[[null,"click"]],function(l,e,n){var t=!0;if("click"===e){t=!1!==l.component.doCheckbox()&&t}return t},b.b,b.a)),a["ɵdid"](42,1097728,null,0,f.a,[[8,""],u.a,a.ElementRef,a.Renderer],{color:[0,"color"],block:[1,"block"]},null),(l()(),a["ɵted"](-1,0,["Checkbox Alert"])),(l()(),a["ɵted"](-1,1,["\n"])),(l()(),a["ɵted"](-1,null,["\n\n"]))],function(l,e){l(e,8,0,"");l(e,13,0,"menu");l(e,26,0,"");l(e,30,0,"light","");l(e,34,0,"secondary","");l(e,38,0,"danger","");l(e,42,0,"dark","")},function(l,e){l(e,3,0,a["ɵnov"](e,4)._hidden,a["ɵnov"](e,4)._sbPadding);l(e,6,0,a["ɵnov"](e,8).isHidden);l(e,12,0,a["ɵnov"](e,13)._hidden);l(e,22,0,a["ɵnov"](e,23).statusbarPadding,a["ɵnov"](e,23)._hasRefresher)})}n.d(e,"a",function(){return N});var a=n(0),o=n(78),u=n(2),d=n(6),r=n(497),c=n(37),i=n(9),s=n(20),b=n(47),f=n(21),p=n(130),k=n(23),m=n(129),g=n(38),h=n(41),v=n(355),R=n(57),C=n(345),y=n(22),x=n(5),I=n(10),E=n(25),_=n(504),D=n(82),A=a["ɵcrt"]({encapsulation:2,styles:[],data:{}}),N=a["ɵccf"]("page-alert",_.a,function(l){return a["ɵvid"](0,[(l()(),a["ɵeld"](0,0,null,null,1,"page-alert",[],null,null,null,t,A)),a["ɵdid"](1,49152,null,0,_.a,[D.a],null,null)],null,null)},{},{},[])}});