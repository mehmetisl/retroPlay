(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{5542:(t,e,h)=>{Promise.resolve().then(h.bind(h,7804)),Promise.resolve().then(h.t.bind(h,7950,23)),Promise.resolve().then(h.t.bind(h,2611,23))},7804:(t,e,h)=>{"use strict";h.d(e,{default:()=>o});var l=h(8081),i=h(2149);function o(){let t=(0,i.useRef)(null);return(0,i.useEffect)(()=>{let e=t.current;if(!e)return;let h=e.getContext("2d");if(!h)return;let l=()=>{e.width=window.innerWidth,e.height=window.innerHeight};l(),window.addEventListener("resize",l);let i=0,o=[],r=[{type:"car",width:24,length:40,color:"#ff0000",details:[{x:0,y:0,width:24,height:40,color:"#ff0000"},{x:3,y:5,width:18,height:8,color:"#880000"},{x:3,y:27,width:18,height:8,color:"#880000"}]},{type:"bus",width:24,length:70,color:"#ffcc00",details:[{x:0,y:0,width:24,height:70,color:"#ffcc00"},{x:3,y:5,width:18,height:10,color:"#aa8800"},{x:3,y:20,width:18,height:8,color:"#aa8800"},{x:3,y:35,width:18,height:8,color:"#aa8800"},{x:3,y:50,width:18,height:10,color:"#aa8800"}]},{type:"truck",width:26,length:50,color:"#cc6600",details:[{x:0,y:0,width:26,height:20,color:"#cc6600"},{x:3,y:5,width:20,height:10,color:"#884400"},{x:0,y:20,width:26,height:30,color:"#aa5500"}]},{type:"police",width:24,length:45,color:"#ffffff",details:[{x:0,y:0,width:24,height:45,color:"#ffffff"},{x:3,y:5,width:18,height:10,color:"#0000aa"},{x:3,y:30,width:18,height:10,color:"#0000aa"},{x:8,y:20,width:8,height:5,color:"#ff0000"}]}],a=()=>{let t=Math.floor(Math.random()*Math.floor(e.width/60)),h=r[Math.floor(Math.random()*r.length)],l=2*Math.random()+1,i=Math.random()>.5?1:-1,o=i>0?0:Math.PI;return{x:40+60*t+30,y:i>0?-h.length:e.height+h.length,type:h,speed:l*i,angle:o,rotation:.2*Math.random()-.1}};for(let t=0;t<10;t++)o.push(a());let f=()=>{h.fillStyle="#1a2b47",h.fillRect(0,0,e.width,e.height),h.fillStyle="#2a4a3a",h.fillRect(0,0,40,e.height),h.fillStyle="#ffffff",(i+=2)>80&&(i=0);let t=Math.floor((e.width-40)/60);for(let l=1;l<t;l++){let t=40+60*l-2;for(let l=-30+i%80;l<e.height;l+=80)h.fillRect(t,l,4,30)}o.forEach((t,l)=>{t.y+=t.speed,(t.speed>0&&t.y>e.height+t.type.length||t.speed<0&&t.y<-t.type.length)&&(o[l]=a()),h.save(),h.translate(t.x,t.y),h.rotate(t.angle+t.rotation),t.type.details.forEach(e=>{h.fillStyle=e.color,h.fillRect(-t.type.width/2+e.x,-t.type.length/2+e.y,e.width,e.height)}),h.restore()}),requestAnimationFrame(f)};return f(),()=>{window.removeEventListener("resize",l)}},[]),(0,l.jsx)("canvas",{ref:t,className:"w-full h-full"})}}},t=>{var e=e=>t(t.s=e);t.O(0,[950,611,497,954,358],()=>e(5542)),_N_E=t.O()}]);