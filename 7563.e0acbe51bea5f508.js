"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7563],{7563:(k,c,t)=>{t.r(c),t.d(c,{RegisterPageModule:()=>M});var d=t(9808),n=t(4182),r=t(661),m=t(2564),h=t(655),u=t(779),p=t(2340),e=t(2096),f=t(5830),v=t(1188),P=t(5955),Z=t(5596);const C=[{path:"",component:(()=>{class o{constructor(i,s,a,g,R,T){this.formBuilder=i,this.nav=s,this.api=a,this.storage=g,this.store=R,this.overlay=T,this.emailRegex=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i}ngOnInit(){this.formContent=this.formBuilder.group({name:["",n.kI.required],checkTerms:[!1],email:["",n.kI.compose([n.kI.required,n.kI.pattern(this.emailRegex)])],password:["",[n.kI.required,n.kI.minLength(6)]],password_confirmation:["",[n.kI.required,n.kI.minLength(6)]]})}onSubmit(){return(0,h.mG)(this,void 0,void 0,function*(){const i=yield this.overlay.loading({message:"Processando..."});yield this.api.signup(this.formContent.value).then(s=>{const a=s;return this.storage.set("token",a.access_token),this.store.dispatch((0,u.o3)({token:a.access_token})),this.store.dispatch((0,u.xR)({user:a.user})),this.nav.navigateRoot(p.N.pages.home)}).catch(s=>{i.dismiss();const a=s.error;for(const g in a)this.overlay.toast({message:a[g][0],color:"danger"})}),yield i.dismiss()})}}return o.\u0275fac=function(i){return new(i||o)(e.Y36(n.qu),e.Y36(r.SH),e.Y36(f.s),e.Y36(v.V),e.Y36(P.yh),e.Y36(Z.F))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-register"]],decls:32,vars:2,consts:[[1,"container"],[1,"logo"],["src","assets/images/logo-full.svg"],[1,"default",3,"formGroup","ngSubmit","keyup.enter"],["fill","outline","shape","round","mode","md"],["position","floating"],["formControlName","name"],["type","email","formControlName","email"],["type","password","formControlName","password"],["type","password","formControlName","password_confirmation"],["lines","none",1,"check","ion-no-margin"],[1,"ion-no-padding","ion-no-margin"],["fill","clear","color","dark","mode","ios","routerLink","terms",1,"acc-create","bold"],["slot","start","formControlName","checkTerms"],["color","primary","expand","block","type","submit",1,"default",3,"disabled"],[1,"ion-text-center"],["fill","clear","color","medium","mode","ios","routerLink","..",1,"acc-create"]],template:function(i,s){1&i&&(e.TgZ(0,"ion-content")(1,"div",0)(2,"div",1),e._UZ(3,"img",2),e.qZA(),e.TgZ(4,"form",3),e.NdJ("ngSubmit",function(){return s.onSubmit()})("keyup.enter",function(){return s.formContent.valid?s.onSubmit():""}),e.TgZ(5,"ion-item",4)(6,"ion-label",5),e._uU(7,"Nome"),e.qZA(),e._UZ(8,"ion-input",6),e.qZA(),e.TgZ(9,"ion-item",4)(10,"ion-label",5),e._uU(11,"Email"),e.qZA(),e._UZ(12,"ion-input",7),e.qZA(),e.TgZ(13,"ion-item",4)(14,"ion-label",5),e._uU(15,"Senha"),e.qZA(),e._UZ(16,"ion-input",8),e.qZA(),e.TgZ(17,"ion-item",4)(18,"ion-label",5),e._uU(19,"Repetir Senha"),e.qZA(),e._UZ(20,"ion-input",9),e.qZA(),e.TgZ(21,"ion-item",10)(22,"ion-label",11),e._uU(23,"Li e concordo com os "),e.TgZ(24,"ion-button",12),e._uU(25,"Termos de uso"),e.qZA()(),e._UZ(26,"ion-checkbox",13),e.qZA(),e.TgZ(27,"ion-button",14),e._uU(28," Criar conta "),e.qZA()(),e.TgZ(29,"div",15)(30,"ion-button",16),e._uU(31,"Fazer Login"),e.qZA()()()()),2&i&&(e.xp6(4),e.Q6J("formGroup",s.formContent),e.xp6(23),e.Q6J("disabled",!s.formContent.value.checkTerms))},directives:[r.W2,n._Y,n.JL,n.sg,r.Ie,r.Q$,r.pK,r.j9,n.JJ,n.u,r.YG,r.YI,m.rH,r.nz,r.w],styles:[".logo[_ngcontent-%COMP%]{display:flex;justify-content:center}.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;max-width:350px;margin:10px auto}.acc-create[_ngcontent-%COMP%]{font-size:1.2em}.container[_ngcontent-%COMP%]{max-width:500px;margin:0 auto}.check.ion-no-margin[_ngcontent-%COMP%]{margin-bottom:0!important}.check[_ngcontent-%COMP%]   ion-checkbox[_ngcontent-%COMP%]{margin:0 5px}.check[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:.8em;display:flex;align-items:center}.check[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{font-size:.95em}"]}),o})()},{path:"terms",loadChildren:()=>t.e(26).then(t.bind(t,26)).then(o=>o.TermsPageModule)}];let y=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[m.Bz.forChild(C)],m.Bz]}),o})(),M=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[d.ez,n.u5,r.Pc,n.UX,y]]}),o})()}}]);