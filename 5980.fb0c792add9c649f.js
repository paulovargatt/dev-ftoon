"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5980],{5980:(v,m,c)=>{c.r(m),c.d(m,{ComicPlayerPageModule:()=>C});var s=c(9808),g=c(4182),i=c(661),r=c(2564),u=c(2340),o=c(2096),d=c(5830);function f(e,a){1&e&&o._UZ(0,"ion-img",14),2&e&&o.Q6J("src",a.$implicit.url)}function h(e,a){if(1&e&&(o.TgZ(0,"div",12),o.YNc(1,f,1,1,"ion-img",13),o.qZA()),2&e){const t=o.oxw();o.xp6(1),o.Q6J("ngForOf",t.images)}}function p(e,a){1&e&&(o.TgZ(0,"div",15),o._uU(1," Sem Conte\xfado no momento. "),o.qZA())}const P=[{path:"",component:(()=>{class e{constructor(t,n,l){this.router=t,this.nav=n,this.api=l}ngOnInit(){this.router.getCurrentNavigation().extras.state?(this.comic=this.router.getCurrentNavigation().extras.state.comic,this.episodes=this.router.getCurrentNavigation().extras.state.episodes,this.orderNow=this.comic.order,console.log(this.episodes),this.getItemsById()):this.nav.navigateRoot(u.N.pages.home)}getItemsById(){this.api.getComicById(this.comic.id).then(t=>{this.images=t.data})}next(){this.orderNow++,this.filterAndGetComic()}back(){this.orderNow--,this.filterAndGetComic()}filterAndGetComic(){const t=this.episodes.filter(n=>n.order===this.orderNow);t[0]?(this.comic=t[0],this.getItemsById()):this.nav.back()}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(r.F0),o.Y36(i.SH),o.Y36(d.s))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-comic-player"]],decls:22,vars:3,consts:[["class","comic",4,"ngIf"],["class","text-center ion-padding",4,"ngIf"],["collapse","fade"],[1,""],["fill","clear","slot","start"],["slot","icon-only","name","heart-outline"],["slot","icon-only","name","chatbox-outline"],["slot","icon-only","name","bookmarks-outline"],[1,"end"],["slot","end","shape","round","color","primary",3,"click"],["name","arrow-back-outline"],["slot","icon-only","name","arrow-forward-outline"],[1,"comic"],[3,"src",4,"ngFor","ngForOf"],[3,"src"],[1,"text-center","ion-padding"]],template:function(t,n){1&t&&(o.TgZ(0,"ion-content")(1,"ion-header")(2,"ion-toolbar")(3,"ion-title"),o._uU(4),o.qZA()()(),o.YNc(5,h,2,1,"div",0),o.YNc(6,p,2,0,"div",1),o.qZA(),o.TgZ(7,"ion-footer",2)(8,"ion-toolbar")(9,"ion-buttons")(10,"div",3)(11,"ion-button",4),o._UZ(12,"ion-icon",5),o.qZA(),o.TgZ(13,"ion-button",4),o._UZ(14,"ion-icon",6),o.qZA(),o.TgZ(15,"ion-button",4),o._UZ(16,"ion-icon",7),o.qZA()(),o.TgZ(17,"div",8)(18,"ion-button",9),o.NdJ("click",function(){return n.back()}),o._UZ(19,"ion-icon",10),o.qZA(),o.TgZ(20,"ion-button",9),o.NdJ("click",function(){return n.next()}),o._UZ(21,"ion-icon",11),o.qZA()()()()()),2&t&&(o.xp6(4),o.Oqu(n.comic.name),o.xp6(1),o.Q6J("ngIf",n.images&&n.images.length),o.xp6(1),o.Q6J("ngIf",n.images&&!n.images.length))},directives:[i.W2,i.Gu,i.sr,i.wd,s.O5,s.sg,i.Xz,i.fr,i.Sm,i.YG,i.gu],styles:["ion-footer[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]{display:flex;justify-content:space-between}"]}),e})()}];let y=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[r.Bz.forChild(P)],r.Bz]}),e})(),C=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[s.ez,g.u5,i.Pc,y]]}),e})()}}]);