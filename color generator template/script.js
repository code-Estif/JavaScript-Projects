// Small, efficient color routines (no external libs) — optimized for low-end PCs
function hexToHsl(hex){hex=hex.replace('#','');if(hex.length===3)hex=hex.split('').map(c=>c+c).join('');const r=parseInt(hex.slice(0,2),16)/255;const g=parseInt(hex.slice(2,4),16)/255;const b=parseInt(hex.slice(4,6),16)/255;const max=Math.max(r,g,b),min=Math.min(r,g,b);let h=0,s=0,l=(max+min)/2;if(max!==min){const d=max-min;s=l>0.5?d/(2-max-min):d/(max+min);switch(max){case r:h=(g-b)/d+(g<b?6:0);break;case g:h=(b-r)/d+2;break;case b:h=(r-g)/d+4;break;}h/=6;}return {h:Math.round(h*360),s:Math.round(s*100),l:Math.round(l*100)} }
function hslToHex(h,s,l){h/=360;s/=100;l/=100;let r,g,b;if(s===0){r=g=b=l;}else{const hue2rgb=(p,q,t)=>{if(t<0)t+=1;if(t>1)t-=1;if(t<1/6)return p+(q-p)*6*t;if(t<1/2)return q;if(t<2/3)return p+(q-p)*(2/3-t)*6;return p};const q=l<0.5?l*(1+s):l+s-l*s;const p=2*l-q;r=hue2rgb(p,q,h+1/3);g=hue2rgb(p,q,h);b=hue2rgb(p,q,h-1/3);}const toHex=x=>Math.round(x*255).toString(16).padStart(2,'0');return '#'+toHex(r)+toHex(g)+toHex(b)}


function rotateHue(h,deg){return (h+deg+360)%360}


function generatePalette(hex,scheme,count){const base=hslToObj(hexToHsl(hex));let degrees=[];switch(scheme){case 'analogous':{const step=30;const mid=Math.floor(count/2);for(let i=0;i<count;i++)degrees.push((i-mid)*step);break}
case 'complementary':{degrees=[0,180]; if(count>2){for(let i=2;i<count;i++)degrees.push(((i-1)*30)%360)}break}
case 'triadic':{for(let i=0;i<count;i++)degrees.push((i*(360/count))%360);break}
case 'monochrome':{for(let i=0;i<count;i++){degrees.push(0)}break}
default: for(let i=0;i<count;i++)degrees.push((i*(360/count))%360)}
// generate colors
return degrees.slice(0,count).map((d,idx)=>{
const h=rotateHue(base.h,d);
// vary lightness slightly for diversity
const l= clamp(base.l + (idx - (count-1)/2) * 6, 8, 92);
const s= clamp(base.s + (idx - (count-1)/2) * 4, 10, 100);
return {hex:hslToHex(h,s,l),h,s,l}
})}


function hslToObj(hsl){return {h:hsl.h,s:hsl.s,l:hsl.l}}
function clamp(v,min,max){return Math.max(min,Math.min(max,v))}


// DOM
const grid=document.getElementById('grid');const baseColorEl=document.getElementById('baseColor');const schemeEl=document.getElementById('scheme');const countEl=document.getElementById('count');const generateBtn=document.getElementById('generate');const copyAllBtn=document.getElementById('copyAll');const downloadBtn=document.getElementById('download');const saveBtn=document.getElementById('saveLocal');const clearBtn=document.getElementById('clearLocal');


function renderPalette(palette){grid.innerHTML='';palette.forEach((c,i)=>{
const sw=document.createElement('div');sw.className='swatch';
const box=document.createElement('div');box.className='colorBox';box.style.background=c.hex;
const meta=document.createElement('div');meta.className='meta';
const left=document.createElement('div');left.innerHTML=`<div class="hex">${c.hex.toUpperCase()}</div><div class="tiny">h:${c.h} s:${c.s}% l:${c.l}%</div>`;
const actions=document.createElement('div');actions.className='actions';
const copyBtn=document.createElement('button');copyBtn.className='ghost';copyBtn.textContent='Copy';copyBtn.onclick=()=>copyToClipboard(c.hex);
const useBtn=document.createElement('button');useBtn.className='ghost';useBtn.textContent='Use as base';useBtn.onclick=()=>{baseColorEl.value=c.hex; generate();}
actions.appendChild(copyBtn);actions.appendChild(useBtn);
meta.appendChild(left);meta.appendChild(actions);
sw.appendChild(box);sw.appendChild(meta);grid.appendChild(sw);
})}


function copyToClipboard(text){navigator.clipboard.writeText(text).then(()=>flash('Copied: '+text)).catch(()=>flash('Copy failed'))}
function flash(msg){const el=document.createElement('div');el.textContent=msg;el.style.position='fixed';el.style.right='16px';el.style.bottom='16px';el.style.background='#0b1220';el.style.padding='10px 12px';el.style.borderRadius='8px';el.style.boxShadow='0 6px 16px rgba(0,0,0,0.6)';document.body.appendChild(el);setTimeout(()=>el.remove(),1200)}


function generate(){const hex=baseColorEl.value;const scheme=schemeEl.value;const count=Math.max(2,Math.min(12,parseInt(countEl.value)||5));const palette=generatePalette(hex,scheme,count);renderPalette(palette);currentPalette=palette;}


let currentPalette=[]


generateBtn.addEventListener('click',generate);


copyAllBtn.addEventListener('click',()=>{
if(!currentPalette.length) return flash('No palette to copy');
const vars=currentPalette.map((c,i)=>`--c${i+1}: ${c.hex}; /* h:${c.h} s:${c.s}% l:${c.l}% */`).join('\n');
const css=`:root{\n${vars}\n}`;navigator.clipboard.writeText(css).then(()=>flash('CSS variables copied')).catch(()=>flash('Copy failed'))
generate();
