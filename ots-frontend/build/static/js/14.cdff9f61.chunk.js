(this["webpackJsonpdevias-material-kit-pro"]=this["webpackJsonpdevias-material-kit-pro"]||[]).push([[14],{1143:function(e,a,t){"use strict";var n=t(20),r=t(21);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var c=r(t(0)),l=(0,n(t(22)).default)(c.createElement("path",{d:"M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"}),"KeyboardBackspace");a.default=l},1144:function(e,a,t){"use strict";var n=t(20),r=t(21);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var c=r(t(0)),l=(0,n(t(22)).default)(c.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z"}),"Block");a.default=l},1145:function(e,a,t){"use strict";var n=t(20),r=t(21);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var c=r(t(0)),l=(0,n(t(22)).default)(c.createElement("path",{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm0-15.5c2.49 0 4 2.02 4 4.5v.1l2 2V11c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68c-.24.06-.47.15-.69.23l1.64 1.64c.18-.02.36-.05.55-.05zM5.41 3.35L4 4.76l2.81 2.81C6.29 8.57 6 9.74 6 11v5l-2 2v1h14.24l1.74 1.74 1.41-1.41L5.41 3.35zM16 17H8v-6c0-.68.12-1.32.34-1.9L16 16.76V17z"}),"NotificationsOffOutlined");a.default=l},1210:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return ke}));var n=t(6),r=t(15),c=t(0),l=t.n(c),i=t(3),s=t(1016),o=t(37),m=t(42),d=t(23),u=t(11),p=t(597),v=t(298),f=t(602),h=t(518),g=t(603),E=t(524),b=t(105),N=t.n(b),j=t(26),y=t(9),O=t.n(y),x=t(4),w=t(525),k=t(755),C=t(1012),L=t(610),S=t(83),_=["active","conversation","className"],I=Object(s.a)((function(e){return{active:{boxShadow:"inset 4px 0px 0px ".concat(e.palette.primary.main),backgroundColor:x.a.grey[50]},avatar:{height:40,width:40},details:{marginLeft:e.spacing(2),display:"flex",flexDirection:"column",alignItems:"flex-end"},unread:{marginTop:2,padding:2,height:18,minWidth:18}}})),M=function(e){var a=e.active,t=e.conversation,r=e.className,c=Object(u.a)(e,_),s=I(),o=t.messages[t.messages.length-1];return l.a.createElement(w.a,Object.assign({},c,{button:!0,className:Object(i.a)(Object(n.a)({},s.active,a),r),component:j.a,to:"/chat/".concat(t.id)}),l.a.createElement(k.a,null,l.a.createElement(C.a,{alt:"Person",className:s.avatar,src:t.otherUser.avatar})),l.a.createElement(L.a,{primary:t.otherUser.name,primaryTypographyProps:{noWrap:!0,variant:"h6"},secondary:"".concat(o.sender.name,": ").concat(o.content),secondaryTypographyProps:{noWrap:!0,variant:"body1"}}),l.a.createElement("div",{className:s.details},l.a.createElement(S.a,{noWrap:!0,variant:"body2"},O()(o.created_at).isSame(O()(),"day")?O()(o.created_at).format("LT"):O()(o.created_at).fromNow()),t.unread>0&&l.a.createElement(d.h,{className:s.unread,color:x.a.red[500],shape:"rounded"},t.unread)))},B=["conversations","className"],U=Object(s.a)((function(e){return{root:{backgroundColor:e.palette.white},searchInput:{flexGrow:1}}})),P=function(e){var a=e.conversations,t=e.className,n=Object(u.a)(e,B),r=U(),c=Object(m.a)().match.params.id;return l.a.createElement("div",Object.assign({},n,{className:Object(i.a)(r.root,t)}),l.a.createElement(p.a,null,l.a.createElement(v.a,{className:r.searchInput,disableUnderline:!0,placeholder:"Search contacts"}),l.a.createElement(f.a,{title:"Search"},l.a.createElement(h.a,{edge:"end"},l.a.createElement(N.a,null)))),l.a.createElement(g.a,null),l.a.createElement(E.a,{disablePadding:!0},a.map((function(e,t){return l.a.createElement(M,{active:e.id===c,conversation:e,divider:t<a.length-1,key:e.id})}))))},T=t(147),z=t(294),R=t(613),A=t(609),W=t(1143),D=t.n(W),G=t(1144),$=t.n(G),H=t(312),V=t.n(H),J=t(174),X=t.n(J),F=t(1145),K=t.n(F),q=t(171),Q=t.n(q),Y=["conversation","className"],Z=Object(s.a)((function(e){return{root:{backgroundColor:e.palette.white},backButton:{marginRight:e.spacing(2),"@media (min-width: 864px)":{display:"none"}},user:{flexShrink:0,flexGrow:1},activity:{display:"flex",alignItems:"center"},statusBullet:{marginRight:e.spacing(1)},search:Object(n.a)({height:42,padding:e.spacing(0,2),display:"flex",alignItems:"center",flexBasis:300,marginLeft:"auto"},e.breakpoints.down("sm"),{flex:"1 1 auto"}),searchIcon:{marginRight:e.spacing(2),color:e.palette.icon},searchInput:{flexGrow:1}}})),ee=function(e){var a=e.conversation,t=e.className,n=Object(u.a)(e,Y),s=Z(),o=Object(c.useRef)(null),m=Object(c.useState)(!1),g=Object(r.a)(m,2),E=g[0],b=g[1];return l.a.createElement(p.a,Object.assign({},n,{className:Object(i.a)(s.root,t)}),l.a.createElement(f.a,{title:"Back"},l.a.createElement(h.a,{className:s.backButton,component:j.a,edge:"start",to:"/chat"},l.a.createElement(D.a,null))),l.a.createElement("div",{className:s.user},l.a.createElement(S.a,{variant:"h6"},a.otherUser.name),l.a.createElement("div",{className:s.activity},a.otherUser.active?l.a.createElement(c.Fragment,null,l.a.createElement(d.v,{className:s.statusBullet,color:"success",size:"small"}),l.a.createElement(S.a,{variant:"body2"},"Active now")):l.a.createElement(S.a,{variant:"body2"},"Active ",O()(a.otherUser.lastActivity).fromNow()))),l.a.createElement(T.a,{className:s.search,elevation:1},l.a.createElement(N.a,{className:s.searchIcon}),l.a.createElement(v.a,{className:s.searchInput,disableUnderline:!0,placeholder:"Search email"})),l.a.createElement(f.a,{title:"More options"},l.a.createElement(h.a,{onClick:function(){b(!0)},ref:o},l.a.createElement(Q.a,null))),l.a.createElement(z.a,{anchorEl:o.current,keepMounted:!0,onClose:function(){b(!1)},open:E},l.a.createElement(R.a,null,l.a.createElement(A.a,null,l.a.createElement($.a,null)),l.a.createElement(L.a,{primary:"Block user"})),l.a.createElement(R.a,null,l.a.createElement(A.a,null,l.a.createElement(V.a,null)),l.a.createElement(L.a,{primary:"Delete conversation"})),l.a.createElement(R.a,null,l.a.createElement(A.a,null,l.a.createElement(X.a,null)),l.a.createElement(L.a,{primary:"Archive conversation"})),l.a.createElement(R.a,null,l.a.createElement(A.a,null,l.a.createElement(K.a,null)),l.a.createElement(L.a,{primary:"Mute notifications"}))))},ae=t(51),te=t.n(ae),ne=t(604),re=["message","className"],ce=Object(s.a)((function(e){return{root:{marginBottom:e.spacing(2)},authUser:{display:"flex",justifyContent:"flex-end","& $body":{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText}},inner:{display:"flex",maxWidth:500},avatar:{marginRight:e.spacing(2)},body:{backgroundColor:x.a.grey[100],color:e.palette.text.primary,borderRadius:e.shape.borderRadius,padding:e.spacing(1,2)},content:{marginTop:e.spacing(1)},image:{marginTop:e.spacing(2),height:"auto",width:380,maxWidth:"100%"},footer:{marginTop:e.spacing(1),display:"flex",justifyContent:"flex-end"}}})),le=function(e){var a=e.message,t=e.className,r=Object(u.a)(e,re),c=ce();return l.a.createElement("div",Object.assign({},r,{className:Object(i.a)(c.root,Object(n.a)({},c.authUser,a.sender.authUser),t)}),l.a.createElement("div",{className:c.inner},l.a.createElement(C.a,{className:c.avatar,component:j.a,src:a.sender.avatar,to:"/profile/1/timeline"}),l.a.createElement("div",null,l.a.createElement("div",{className:c.body},l.a.createElement("div",null,l.a.createElement(ne.a,{color:"inherit",component:j.a,to:"/profile/1/timeline",variant:"h6"},a.sender.authUser?"Me":a.sender.name)),l.a.createElement("div",{className:c.content},"image"===a.contentType?l.a.createElement("img",{alt:"Attachment",className:c.image,src:a.content}):l.a.createElement(S.a,{color:"inherit",variant:"body1"},a.content))),l.a.createElement("div",{className:c.footer},l.a.createElement(S.a,{className:c.time,variant:"body2"},O()(a.created_at).fromNow())))))},ie=["messages","className"],se=Object(s.a)((function(e){return{root:{flexGrow:1,overflow:"hidden",maxHeight:"100%"},inner:{padding:e.spacing(2)}}})),oe=function(e){var a=e.messages,t=e.className,n=Object(u.a)(e,ie),r=se();return l.a.createElement("div",Object.assign({},n,{className:Object(i.a)(r.root,t)}),l.a.createElement(te.a,null,l.a.createElement("div",{className:r.inner},a.map((function(e){return l.a.createElement(le,{key:e.id,message:e})})))))},me=t(137),de=t.n(me),ue=t(177),pe=t.n(ue),ve=t(178),fe=t.n(ve),he=["className"],ge=Object(s.a)((function(e){return{root:{backgroundColor:e.palette.white,display:"flex",alignItems:"center",padding:e.spacing(1,2)},paper:{flexGrow:1,marginLeft:e.spacing(2),padding:e.spacing(.5,2)},input:{width:"100%"},divider:{width:1,height:24},fileInput:{display:"none"}}})),Ee=function(e){var a=e.className,t=Object(u.a)(e,he),n=ge(),s=Object(c.useRef)(null),o=Object(c.useState)(""),m=Object(r.a)(o,2),d=m[0],p=m[1],E=function(){s.current.click()};return l.a.createElement("div",Object.assign({},t,{className:Object(i.a)(n.root,a)}),l.a.createElement(C.a,{alt:"Person",src:"/images/avatars/avatar_11.png"}),l.a.createElement(T.a,{className:n.paper,elevation:1},l.a.createElement(v.a,{className:n.input,disableUnderline:!0,onChange:function(e){e.persist(),p(e.target.value)},placeholder:"Leave a message"})),l.a.createElement(f.a,{title:"Send"},l.a.createElement(h.a,{color:d.length>0?"primary":"default"},l.a.createElement(de.a,null))),l.a.createElement(g.a,{className:n.divider}),l.a.createElement(f.a,{title:"Attach photo"},l.a.createElement(h.a,{edge:"end",onClick:E},l.a.createElement(pe.a,null))),l.a.createElement(f.a,{title:"Attach file"},l.a.createElement(h.a,{edge:"end",onClick:E},l.a.createElement(fe.a,null))),l.a.createElement("input",{className:n.fileInput,ref:s,type:"file"}))},be=["conversation","className"],Ne=Object(s.a)((function(e){return{root:{display:"flex",flexDirection:"column",backgroundColor:e.palette.white}}})),je=function(e){var a=e.conversation,t=e.className,n=Object(u.a)(e,be),r=Ne();return l.a.createElement("div",Object.assign({},n,{className:Object(i.a)(r.root,t)}),l.a.createElement(ee,{conversation:a}),l.a.createElement(g.a,null),l.a.createElement(oe,{messages:a.messages}),l.a.createElement(g.a,null),l.a.createElement(Ee,null))},ye=["className"],Oe=Object(s.a)((function(e){return{root:{display:"flex",alignItems:"center",justifyContent:"center"},inner:{textAlign:"center"},image:{maxWidth:400},title:{margin:e.spacing(4,0,1,0)}}})),xe=function(e){var a=e.className,t=Object(u.a)(e,ye),n=Oe();return l.a.createElement("div",Object.assign({},t,{className:Object(i.a)(n.root,a)}),l.a.createElement("div",{className:n.inner},l.a.createElement("img",{alt:"Select conversation",className:n.image,src:"/images/undraw_work_chat_erdt.svg"}),l.a.createElement(S.a,{className:n.title,variant:"h4"},"Select conversation to display"),l.a.createElement(S.a,{variant:"subtitle1"},"To start a conversation just click the message button from a person profile")))},we=Object(s.a)((function(e){return{root:{height:"100%",cursor:"pointer",display:"flex",overflow:"hidden","@media (max-width: 863px)":{"& $conversationList, & $conversationDetails":{flexBasis:"100%",width:"100%",maxWidth:"none",flexShrink:"0",transform:"translateX(0)"}}},openConversion:{"@media (max-width: 863px)":{"& $conversationList, & $conversationDetails":{transform:"translateX(-100%)"}}},conversationList:{width:300,flexBasis:300,flexShrink:0,"@media (min-width: 864px)":{borderRight:"1px solid ".concat(e.palette.divider)}},conversationDetails:{flexGrow:1},conversationPlaceholder:{flexGrow:1}}})),ke=function(){var e,a,t=we(),s=Object(m.a)(),u=Object(c.useState)([]),p=Object(r.a)(u,2),v=p[0],f=p[1];return Object(c.useEffect)((function(){var e=!0;return o.a.get("/api/chat/conversations").then((function(a){e&&f(a.data.conversations)})),function(){e=!1}}),[]),s.match.params.id&&(a=v.find((function(e){return e.id===s.match.params.id}))),l.a.createElement(d.l,{className:Object(i.a)((e={},Object(n.a)(e,t.root,!0),Object(n.a)(e,t.openConversion,a),e)),title:"Chat"},l.a.createElement(P,{className:t.conversationList,conversations:v}),a?l.a.createElement(je,{className:t.conversationDetails,conversation:a}):l.a.createElement(xe,{className:t.conversationPlaceholder}))}}}]);
//# sourceMappingURL=14.cdff9f61.chunk.js.map