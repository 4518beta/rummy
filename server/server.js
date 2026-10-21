// Servidor de Rummy Mendocino: guarda la mesa familiar y la sincroniza por WebSocket.
// Uso: npm install && node server.js   (puerto 3000, o PORT=xxxx)
const http=require('http'),fs=require('fs'),path=require('path'),os=require('os');
const {WebSocketServer}=require('ws');
const PORT=+process.env.PORT||3000,FILE=path.join(__dirname,'data.json'),WWW=path.join(__dirname,'..','www');
let docs={},profiles={};
try{const j=JSON.parse(fs.readFileSync(FILE,'utf8'));docs=j.docs||{};profiles=j.profiles||{}}catch(e){}
let tm=0;function save(){clearTimeout(tm);tm=setTimeout(()=>fs.writeFile(FILE,JSON.stringify({docs,profiles}),()=>{}),400)}
const server=http.createServer((req,res)=>{
 let p=req.url.split('?')[0];if(p==='/')p='/index.html';
 const f=path.join(WWW,path.normalize(p).replace(/^(\.\.[\/\\])+/,''));
 if(!f.startsWith(WWW)){res.writeHead(403);return res.end()}
 fs.readFile(f,(e,b)=>{if(e){res.writeHead(404);return res.end('No encontrado')}
  res.writeHead(200,{'Content-Type':p.endsWith('.html')?'text/html; charset=utf-8':'application/octet-stream'});res.end(b)});
});
const wss=new WebSocketServer({server});
const subs=new Map(); // ws -> {paths:Set, colls:Set}
function collDocs(c){return Object.keys(docs).filter(k=>k.startsWith(c+'/')).map(k=>docs[k]).sort((a,b)=>(b.at||0)-(a.at||0)).slice(0,60)}
function pushDoc(p){const m=JSON.stringify({t:'doc',path:p,data:docs[p]===undefined?null:docs[p]});for(const [w,s] of subs)if(s.paths.has(p)&&w.readyState===1)w.send(m)}
function pushColl(p){const c=p.split('/')[0];if(p.indexOf('/')<0)return;const m=JSON.stringify({t:'coll',coll:c,docs:collDocs(c)});for(const [w,s] of subs)if(s.colls.has(c)&&w.readyState===1)w.send(m)}
wss.on('connection',ws=>{
 const me={paths:new Set(),colls:new Set()};subs.set(ws,me);
 ws.on('message',raw=>{let m;try{m=JSON.parse(raw)}catch(e){return}
  if(m.t==='hello'){profiles[m.id]={name:String(m.name||'Jugador').slice(0,20),avatarUrl:''};save()}
  else if(m.t==='sub'){me.paths.add(m.path);ws.send(JSON.stringify({t:'doc',path:m.path,data:docs[m.path]===undefined?null:docs[m.path]}))}
  else if(m.t==='subc'){me.colls.add(m.coll);ws.send(JSON.stringify({t:'coll',coll:m.coll,docs:collDocs(m.coll)}))}
  else if(m.t==='set'){docs[m.path]=m.data;save();pushDoc(m.path);pushColl(m.path)}
  else if(m.t==='upd'){docs[m.path]=Object.assign({},docs[m.path]||{},m.data);save();pushDoc(m.path);pushColl(m.path)}
  else if(m.t==='del'){delete docs[m.path];save();pushDoc(m.path);pushColl(m.path)}
  else if(m.t==='profiles'){const o={};(m.ids||[]).forEach(id=>{o[id]=profiles[id]||null});ws.send(JSON.stringify({t:'profiles',rid:m.rid,profiles:o}))}
 });
 ws.on('close',()=>subs.delete(ws));
});
server.listen(PORT,'0.0.0.0',()=>{
 console.log('Rummy Mendocino: servidor listo.\nAbrí en los celulares (mismo WiFi):');
 Object.values(os.networkInterfaces()).flat().filter(i=>i&&i.family==='IPv4'&&!i.internal).forEach(i=>console.log('  http://'+i.address+':'+PORT));
 console.log('En la app Android escribí solo la IP y el puerto, por ejemplo 192.168.1.20:3000');
});
