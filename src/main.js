import './style.css';

const questions = [
 {word:'الْقِرَاءَةُ', prompt:'Apa arti الْقِرَاءَةُ?', options:['Menulis','Membaca','Menggambar','Berenang'], answer:1, hint:'Kegiatan ini biasanya dilakukan dengan buku.'},
 {word:'السِّبَاحَةُ', prompt:'السِّبَاحَةُ berarti ...', options:['Berlari','Memasak','Berenang','Menyanyi'], answer:2, hint:'Kegiatan ini dilakukan di dalam air.'},
 {word:'الرَّسْمُ', prompt:'Apa bahasa Arab dari “menggambar”?', options:['الرَّسْمُ','الطَّبْخُ','الْكِتَابَةُ','النَّوْمُ'], answer:0, hint:'Kata ini diawali huruf ر.'},
 {word:'الْهِوَايَةُ', prompt:'Makna الْهِوَايَةُ adalah ...', options:['Pelajaran','Pekerjaan','Hobi / kegemaran','Perjalanan'], answer:2, hint:'Ini adalah aktivitas yang disukai dan dilakukan pada waktu luang.'},
 {word:'هِوَايَتِي كُرَةُ الْقَدَمِ', prompt:'Arti kalimat هِوَايَتِي كُرَةُ الْقَدَمِ adalah ...', options:['Saya suka membaca','Hobiku bermain sepak bola','Saya pergi ke sekolah','Hobiku berenang'], answer:1, hint:'كُرَةُ الْقَدَمِ berarti sepak bola.'}
];
const vocab = [
 ['الْهِوَايَةُ','Hobi / kegemaran'],['الْقِرَاءَةُ','Membaca'],['الْكِتَابَةُ','Menulis'],
 ['الرَّسْمُ','Menggambar'],['السِّبَاحَةُ','Berenang'],['كُرَةُ الْقَدَمِ','Sepak bola'],
 ['الطَّبْخُ','Memasak'],['الْمُوسِيقَى','Musik']
];
document.querySelector('#root').innerHTML = `
<header class="topbar"><a class="brand" href="#"><span class="brand-mark">✦</span> ARABIC<span>QUEST</span></a><div class="top-meta"><span>MTs · KELAS VIII</span><span class="pill">WORLD 2-2</span></div></header>
<main class="shell">
 <section class="intro"><div><div class="eyebrow">RETRO PIXEL LEARNING GAME</div><h1>UNDERWATER<br><em>ADVENTURE</em></h1><p>Selami lautan kosakata Arab. Kumpulkan koin, hindari makhluk laut, dan taklukkan tantangan <b>الهواية (Hobi)</b>.</p><div class="intro-tags"><span>📚 Bahasa Arab</span><span>🫧 2D Platformer</span><span>⭐ 5 Misi Kuis</span></div></div><div class="mascot" aria-hidden="true"><div class="bubble b1"></div><div class="bubble b2"></div><div class="diver"><i></i><b></b><span></span></div><div class="fish">◀</div></div></section>
 <section class="game-card">
  <div class="game-head"><div><span class="live-dot"></span> <b>OCEAN LEVEL</b><small> · Jelajahi dan pelajari</small></div><button id="sound" class="icon-btn" aria-label="Toggle sound">♫ SOUND: ON</button></div>
  <div class="game-wrap"><canvas id="game" width="960" height="540" aria-label="Permainan bawah laut"></canvas>
   <div class="hud"><div><small>PLAYER</small><b id="score">000000</b></div><div><small>COINS</small><b>🪙 <span id="coins">00</span></b></div><div><small>WORLD</small><b>2-2</b></div><div><small>TIME</small><b id="time">300</b></div></div>
   <div class="game-overlay" id="welcome"><div class="modal intro-modal"><div class="modal-icon">🤿</div><div class="pixel-kicker">WORLD 2-2 · ARABIC QUEST</div><h2>SIAP MENYELAM?</h2><p>Jelajahi dunia bawah laut dan temukan arti kosakata tentang hobi dalam Bahasa Arab.</p><div class="key-guide"><span>← → <small>GERAK</small></span><span>SPACE / ↑ <small>BERENANG</small></span></div><button class="primary-btn" id="start">MULAI PETUALANGAN <b>→</b></button></div></div>
   <div class="game-overlay hidden" id="quiz"><div class="modal quiz-modal"><div class="modal-top"><span>✦ MYSTERY BLOCK</span><span id="q-number">MISI 1/5</span></div><div class="question-ar" id="q-word">الْهِوَايَةُ</div><h3 id="q-prompt"></h3><div class="answers" id="answers"></div><div id="feedback" class="feedback"></div><button id="retry" class="secondary-btn hidden">↻ COBA LAGI</button></div></div>
   <div class="game-overlay hidden" id="pause"><div class="modal"><div class="modal-icon">Ⅱ</div><h2>PERMAINAN DIJEDA</h2><p>Tarik napas, lalu lanjutkan petualanganmu.</p><button class="primary-btn" id="resume">LANJUTKAN</button></div></div>
   <div class="game-overlay hidden" id="result"><div class="modal result-modal"><div class="modal-icon">🏆</div><div class="pixel-kicker">LEVEL FINISHED</div><h2>KEREN SEKALI!</h2><p>Petualangan bawah laut selesai.</p><div class="result-grid"><div><small>TOTAL SKOR</small><b id="final-score">0</b></div><div><small>KOIN</small><b id="final-coins">0</b></div><div><small>JAWABAN BENAR</small><b id="final-correct">0/5</b></div></div><p class="result-note" id="result-note"></p><button class="primary-btn" id="again">MAIN LAGI ↻</button></div></div>
  </div>
  <div class="game-controls"><div class="dpad"><button id="left" aria-label="Kiri">◀</button><button id="right" aria-label="Kanan">▶</button></div><div class="control-hint">Gunakan tombol arah untuk bergerak.<br>Tekan SWIM berulang untuk naik.</div><button id="swim" class="swim-btn">🫧 SWIM</button><button id="pause-btn" class="pause-btn">Ⅱ</button></div>
  <div class="stats"><div><span>⭐</span><b id="stat-score">0</b><small>SKOR</small></div><div><span>🪙</span><b id="stat-coins">0</b><small>KOIN</small></div><div><span>❔</span><b id="stat-quiz">0/5</b><small>KUIS BENAR</small></div><div><span>🧭</span><b id="stat-progress">0%</b><small>JELAJAH</small></div></div>
 </section>
 <section class="learn-section"><div class="section-title"><div><div class="eyebrow">LEARN WHILE PLAYING</div><h2>Bekal Kosakata</h2></div><span class="lesson-badge">الهواية · HOBI</span></div><div class="vocab-grid">${vocab.map(([a,b])=>`<article class="vocab"><div lang="ar" dir="rtl">${a}</div><span>${b}</span></article>`).join('')}</div><div class="sentence"><span>CONTOH KALIMAT</span><b lang="ar" dir="rtl">هِوَايَتِي الْقِرَاءَةُ</b><p>Hobiku adalah membaca.</p></div></section>
 <footer>BUILT FOR LEARNING · BAHASA ARAB MTs KELAS VIII <span>✦</span></footer>
</main>`;

const canvas=document.querySelector('#game'),ctx=canvas.getContext('2d');
const W=960,H=540,world=2600,ground=486;
let player,coins,enemies,blocks,score,coinCount,solved,active,started,paused,ended,time,camera,keys,particles,invuln,last,elapsed,sound=true,raf;
const gaps=[[490,590],[1090,1190],[1740,1840]];
const platforms=[[250,395,115],[680,405,125],[1020,380,125],[1390,410,130],[1790,385,120],[2200,405,130]];
const $=id=>document.getElementById(id);
function reset(){
 cancelAnimationFrame(raf);
 player={x:65,y:260,vx:0,vy:0,w:27,h:35};coins=Array.from({length:37},(_,i)=>({x:145+i*67,y:205+(i%4)*55,taken:false}));
 enemies=[{x:410,y:245,base:245,type:0,phase:0},{x:760,y:330,type:1,vx:-2.2},{x:1120,y:225,base:225,type:0,phase:2},{x:1480,y:300,type:1,vx:-2.5},{x:1630,y:235,base:235,type:0,phase:1},{x:2050,y:350,type:1,vx:-2.4}];
 blocks=[{x:300,y:310},{x:730,y:165},{x:1160,y:305},{x:1550,y:175},{x:1980,y:300}];
 score=0;coinCount=0;solved=[];active=-1;started=true;paused=false;ended=false;time=300;camera=0;keys={};particles=[];invuln=0;elapsed=0;
 hide('welcome');hide('quiz');hide('pause');hide('result');$('pause-btn').textContent='Ⅱ';updateHUD();last=performance.now();loop();
}
function show(id){$(id).classList.remove('hidden')}function hide(id){$(id).classList.add('hidden')}
function updateHUD(){
 $('score').textContent=String(score).padStart(6,'0');$('coins').textContent=String(coinCount).padStart(2,'0');$('time').textContent=Math.ceil(time);
 $('stat-score').textContent=score.toLocaleString('id-ID');$('stat-coins').textContent=coinCount;$('stat-quiz').textContent=`${solved.filter(Boolean).length}/5`;$('stat-progress').textContent=Math.min(100,Math.floor(player.x/(world-110)*100))+'%';
}
function swim(){if(!started||paused||ended)return;player.vy=Math.min(player.vy,0)-4.6;for(let i=0;i<4;i++)particles.push({x:player.x+12+(Math.random()-.5)*12,y:player.y+27,vx:(Math.random()-.5)*.7,vy:-1-Math.random()*1.6,life:42});}
function overlap(a,b){return a.x<b.x+b.w&&a.x+a.w>b.x&&a.y<b.y+b.h&&a.y+a.h>b.y}
function showQuiz(i){
 active=i;paused=true;$('q-number').textContent=`MISI ${i+1}/5`;$('q-word').textContent=questions[i].word;$('q-prompt').textContent=questions[i].prompt;
 $('feedback').textContent='Pilih satu jawaban yang paling tepat.';$('retry').classList.add('hidden');$('answers').innerHTML='';
 questions[i].options.forEach((o,n)=>{const b=document.createElement('button');b.className='answer';b.innerHTML=`<span>${'ABCD'[n]}</span>${o}`;b.onclick=()=>answer(n);$('answers').append(b)});
 show('quiz');
}
function answer(n){
 const q=questions[active];
 if(n===q.answer){
  solved[active]=true;score+=1000;coinCount+=10;$('feedback').innerHTML='<b class="correct">✓ BENAR! أَحْسَنْتَ! +1000 SKOR · +10 KOIN</b>';
  [...$('answers').children].forEach(b=>b.disabled=true);
  setTimeout(()=>{hide('quiz');paused=false;active=-1;updateHUD()},1050);
 }else{$('feedback').innerHTML=`<b class="wrong">Belum tepat.</b><br><span>Petunjuk: ${q.hint}</span>`;$('retry').classList.remove('hidden')}
 updateHUD();
}
function finish(){
 if(ended)return;ended=true;paused=true;
 $('final-score').textContent=score.toLocaleString('id-ID');$('final-coins').textContent=coinCount;$('final-correct').textContent=`${solved.filter(Boolean).length}/5`;
 $('result-note').textContent=solved.every(Boolean)?'Luar biasa! Semua tantangan berhasil kamu selesaikan.':'Tetap semangat! Kamu bisa belajar lagi dan mencoba kuis yang belum terjawab.';
 show('result');
}
function update(dt){
 if(!started||paused||ended)return;
 elapsed+=dt;time-=dt;if(time<=0){time=0;finish();return}
 if(keys.left)player.vx-=.32;if(keys.right)player.vx+=.32;player.vx=Math.max(-3.6,Math.min(3.6,player.vx*.91));player.x=Math.max(0,Math.min(world-30,player.x+player.vx));
 player.vy=Math.min(2.65,player.vy+.105);player.y+=player.vy;
 if(player.y<83){player.y=83;player.vy=0}
 const inGap=gaps.some(g=>player.x+player.w>g[0]&&player.x<g[1]);
 if(player.y+player.h>ground&&!inGap){player.y=ground-player.h;player.vy=0}
 platforms.forEach(([x,y,w])=>{if(player.vy>0&&player.x+player.w>x&&player.x<x+w&&player.y+player.h>=y&&player.y+player.h<=y+9){player.y=y-player.h;player.vy=0}});
 if(player.y>555){player.x=Math.max(20,player.x-120);player.y=210;player.vy=0;invuln=100;score=Math.max(0,score-100)}
 if(invuln>0)invuln--;
 blocks.forEach((b,i)=>{if(!solved[i]&&overlap(player,{x:b.x,y:b.y,w:36,h:36}))showQuiz(i)});
 coins.forEach(o=>{if(!o.taken&&overlap(player,{x:o.x,y:o.y,w:15,h:20})){o.taken=true;coinCount++;score+=100}});
 enemies.forEach(e=>{
  if(e.type===0){e.phase+=dt*2.1;e.y=e.base+Math.sin(e.phase)*48;e.x+=Math.sin(e.phase*.8)*.45}
  else{e.x+=e.vx;if(e.x<camera-65)e.x=world+Math.random()*180}
  if(invuln<=0&&overlap(player,{x:e.x,y:e.y,w:36,h:34})){invuln=95;score=Math.max(0,score-150);coinCount=Math.max(0,coinCount-1);player.vx=player.x<e.x?-3:3;player.vy=-1.7}
 });
 particles.forEach(b=>{b.x+=b.vx;b.y+=b.vy;b.life--});particles=particles.filter(b=>b.life>0);
 camera=Math.max(0,Math.min(world-W,player.x-330));if(player.x>world-125)finish();updateHUD();
}
function pixelPlayer(x,y){
 if(invuln>0&&Math.floor(elapsed*13)%2===0)return;
 ctx.fillStyle='#56301f';ctx.fillRect(x+4,y+1,20,7);ctx.fillStyle='#e34838';ctx.fillRect(x+6,y+4,19,7);ctx.fillRect(x+3,y+9,23,5);
 ctx.fillStyle='#ffd0a1';ctx.fillRect(x+7,y+13,17,10);ctx.fillStyle='#14213b';ctx.fillRect(x+18,y+16,4,4);
 ctx.fillStyle='#ad4828';ctx.fillRect(x+5,y+23,20,9);ctx.fillStyle='#f4b83e';ctx.fillRect(x+7,y+24,4,6);ctx.fillRect(x+19,y+24,4,6);ctx.fillStyle='#e34838';ctx.fillRect(x+4,y+30,9,5);ctx.fillRect(x+18,y+30,9,5);
}
function drawEnemy(e){
 const x=e.x-camera,y=e.y;
 if(e.type===0){ctx.fillStyle='#f5f4ee';ctx.fillRect(x+7,y+3,24,23);ctx.fillRect(x+2,y+12,32,12);ctx.fillRect(x+3,y+23,5,10);ctx.fillRect(x+13,y+23,5,12);ctx.fillRect(x+23,y+23,5,10);ctx.fillStyle='#10172b';ctx.fillRect(x+13,y+9,4,5);ctx.fillRect(x+24,y+9,4,5)}
 else{ctx.fillStyle='#e99b3b';ctx.fillRect(x+4,y+7,28,20);ctx.fillRect(x,y+13,7,9);ctx.fillRect(x+29,y+12,11,13);ctx.fillStyle='#ffcf9c';ctx.fillRect(x+8,y+10,18,12);ctx.fillStyle='#111a2e';ctx.fillRect(x+9,y+12,4,4);ctx.fillStyle='#ffdf8c';ctx.fillRect(x+13,y+3,8,4)}
}
function draw(){
 ctx.clearRect(0,0,W,H);const sky=ctx.createLinearGradient(0,0,0,78);sky.addColorStop(0,'#55c9ff');sky.addColorStop(1,'#b8f4ff');ctx.fillStyle=sky;ctx.fillRect(0,0,W,78);
 ctx.fillStyle='#0058f8';ctx.fillRect(0,78,W,H-78);ctx.fillStyle='#efffff';for(let x=0;x<W+24;x+=24)ctx.fillRect(x,73+Math.sin((x+elapsed*30)/19)*3,18,4);
 ctx.globalAlpha=.22;ctx.fillStyle='#c4f6ff';for(let i=0;i<26;i++){let x=(i*89-camera*.2+W*5)%W,y=110+(i*71)%340;ctx.fillRect(x,y,3,3)}ctx.globalAlpha=1;
 ctx.fillStyle='#367d49';for(let x=-camera%40;x<W;x+=40){let wx=x+camera;if(gaps.some(g=>wx+40>g[0]&&wx<g[1]))continue;ctx.fillRect(x,ground,40,54);ctx.fillStyle='#80c46b';ctx.fillRect(x+3,ground+3,32,5);ctx.fillStyle='#245d3c';ctx.fillRect(x+8,ground+20,9,5);ctx.fillStyle='#367d49'}
 platforms.forEach(([wx,y,w])=>{let x=wx-camera;if(x<-150||x>W)return;ctx.fillStyle='#39854b';ctx.fillRect(x,y,w,22);ctx.fillStyle='#91ce72';ctx.fillRect(x+3,y+2,w-6,5);ctx.fillStyle='#245c3a';for(let j=12;j<w-10;j+=30)ctx.fillRect(x+j,y+13,10,5)});
 [[150,450],[345,355],[750,375],[1070,350],[1510,375],[1880,350],[2290,375]].forEach(([wx,y])=>{let x=wx-camera;if(x<-50||x>W)return;ctx.fillStyle='#ff78bb';ctx.fillRect(x+8,y-35,7,37);ctx.fillRect(x-3,y-26,13,7);ctx.fillRect(x+15,y-45,7,15);ctx.fillRect(x+19,y-50,9,7);ctx.fillRect(x+4,y-17,24,6);ctx.fillStyle='#ffc5e1';ctx.fillRect(x+9,y-34,3,14)});
 coins.forEach(o=>{if(o.taken)return;let x=o.x-camera;if(x<-20||x>W+20)return;ctx.fillStyle='#ffca35';ctx.fillRect(x,o.y,12,18);ctx.fillStyle='#fff0a1';ctx.fillRect(x+3,o.y+3,4,12)});
 blocks.forEach((b,i)=>{let x=b.x-camera;if(x<-40||x>W+40)return;ctx.fillStyle=solved[i]?'#85552e':'#e99a21';ctx.fillRect(x,b.y,36,36);ctx.fillStyle=solved[i]?'#a07a51':'#ffdc73';ctx.fillRect(x+3,b.y+3,30,30);ctx.fillStyle=solved[i]?'#64401f':'#a95717';ctx.fillRect(x+29,b.y+4,4,29);ctx.fillRect(x+4,b.y+29,29,4);if(!solved[i]){ctx.fillStyle='#fff3b0';ctx.font='bold 25px monospace';ctx.textAlign='center';ctx.fillText('?',x+18,b.y+28)}});
 enemies.forEach(drawEnemy);
 let fx=world-camera-100;ctx.fillStyle='#158d4c';ctx.fillRect(fx,400,60,86);ctx.fillRect(fx-8,390,76,18);ctx.fillStyle='#65e99a';ctx.fillRect(fx+9,412,8,65);
 particles.forEach(b=>{ctx.globalAlpha=Math.min(1,b.life/20);ctx.fillStyle='#efffff';ctx.fillRect(b.x-camera,b.y,4,4)});ctx.globalAlpha=1;pixelPlayer(player.x-camera,player.y);
}
function loop(now=performance.now()){const dt=Math.min(.04,(now-last)/1000||0);last=now;update(dt);draw();if(started&&!ended)raf=requestAnimationFrame(loop)}
$('start').onclick=reset;$('again').onclick=reset;$('retry').onclick=()=>{$('retry').classList.add('hidden');$('feedback').textContent='Silakan pilih jawaban kembali.'};
$('resume').onclick=()=>{hide('pause');paused=false;$('pause-btn').textContent='Ⅱ';last=performance.now()};
$('pause-btn').onclick=()=>{if(!started||ended||active>=0)return;paused=true;show('pause')};
$('sound').onclick=()=>{sound=!sound;$('sound').textContent=sound?'♫ SOUND: ON':'♫ SOUND: OFF'};
function hold(id,key){const b=$(id);const down=e=>{e.preventDefault();keys[key]=true},up=e=>{e.preventDefault();keys[key]=false};b.addEventListener('pointerdown',down);b.addEventListener('pointerup',up);b.addEventListener('pointerleave',up);b.addEventListener('pointercancel',up)}
hold('left','left');hold('right','right');$('swim').addEventListener('pointerdown',e=>{e.preventDefault();swim()});
window.addEventListener('keydown',e=>{if(['ArrowLeft','ArrowRight','ArrowUp',' '].includes(e.key))e.preventDefault();if(e.key==='ArrowLeft')keys.left=true;if(e.key==='ArrowRight')keys.right=true;if((e.key==='ArrowUp'||e.code==='Space')&&!e.repeat)swim();if(e.key.toLowerCase()==='p'&&started&&!ended&&active<0)$('pause-btn').click()});
window.addEventListener('keyup',e=>{if(e.key==='ArrowLeft')keys.left=false;if(e.key==='ArrowRight')keys.right=false});
draw();
