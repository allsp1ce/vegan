/* Rounded generic composition estimates per 100 g / 100 ml.
   These are planning assumptions, not product-specific laboratory results. */
(function(root){
'use strict';
const keys=['kcal','protein','carbs','fat','fiber','calcium','iron','zinc','selenium','a','c','d','e','k','b1','b2','b6','folate','b12','iodine','ala','potassium','magnesium'];
const foods=[];
function food(id,name,tags,roles,unit,price,values,source='Assumed planning price',url='') { foods.push({id,name,tags:tags.split(','),roles:roles.split(','),unit,price,n:Object.fromEntries(keys.map((k,i)=>[k,values[i]||0])),source,url}); }
food('oats','Rolled oats (dry)','oats,grains,gluten','breakfast,starch','g',3.51,[379,13.2,67.7,6.5,10.1,52,4.3,3.6,28.9,0,0,0,.42,2,.46,.16,.1,32,0,0,.11,362,138],'Retail example: $4.18 / 42 oz','https://www.walmart.com/browse/food/old-fashioned-oats/great-value/976759_976783_7830606_7652308/YnJhbmQ6R3JlYXQgVmFsdWUie');
food('rice','Brown rice (dry)','rice,grains','breakfast,starch','g',1.84,[367,7.5,76.2,3.2,3.6,9,1.3,2.1,17,0,0,0,.6,1, .54,.1,.48,23,0,0,.04,250,116],'Retail example: $1.67 / 32 oz','https://www.walmart.com/ip/10898755');
food('quinoa','Quinoa (dry)','quinoa,grains','breakfast,starch','g',7,[368,14.1,64.2,6.1,7,47,4.6,3.1,8.5,0,0,0,2.4,0,.36,.32,.49,184,0,0,.26,563,197]);
food('buckwheat','Buckwheat groats (dry)','buckwheat,grains','breakfast,starch','g',7,[343,13.3,71.5,3.4,10,18,2.2,2.4,8.3,0,0,0,.1,7,.1,.43,.21,30,0,0,.08,460,231]);
food('pasta','Whole-wheat pasta (dry)','wheat,gluten,grains','starch','g',3,[352,13.9,73.4,2.9,9.2,29,3.6,3,77,0,0,0,.3,2,.4,.17,.22,60,0,0,.08,434,128]);
food('potato','Potatoes (raw, with skin)','potatoes,nightshades,vegetables','starch','g',1.5,[77,2,17.5,.1,2.2,12,.8,.3,.3,0,19.7,0,.01,2,.08,.03,.3,15,0,0,.01,425,23]);
food('sweetpotato','Sweet potato (raw)','sweet potatoes,vegetables','starch','g',2.5,[86,1.6,20.1,.1,3,30,.6,.3,.6,709,2.4,0,.26,2,.08,.06,.21,11,0,0,.01,337,25]);
food('lentils','Lentils (cooked, unsalted)','lentils,legumes','pulse,protein','g',1.69,[116,9,20.1,.4,7.9,19,3.3,1.3,2.8,0,1.5,0,.1,1.7,.17,.07,.18,181,0,0,.04,369,36],'Retail example: $1.92 / lb dry; assumed 2.5× cooked yield','https://business.walmart.com/ip/Great-Value-Lentils-1-lb/545884744');
food('chickpeas','Chickpeas (cooked, drained)','chickpeas,legumes','pulse,protein','g',3.83,[164,8.9,27.4,2.6,7.6,49,2.9,1.5,3.7,1,1.3,0,.35,4,.12,.06,.14,172,0,0,.07,291,48],'Retail example: $0.92 / 15.5 oz can; assumed 240 g drained','https://www.walmart.com/ip/10534041');
food('beans','Black beans (cooked, unsalted)','beans,black beans,legumes','pulse,protein','g',2.2,[132,8.9,23.7,.5,8.7,27,2.1,1.1,1.2,0,0,0,.9,3,.24,.06,.07,149,0,0,.06,355,70]);
food('kidney','Kidney beans (cooked, unsalted)','beans,kidney beans,legumes','pulse,protein','g',2.3,[127,8.7,22.8,.5,6.4,28,2.9,1.1,1.1,0,1.2,0,.03,8,.16,.06,.12,130,0,0,.1,403,45]);
food('peas','Green peas (cooked)','peas,legumes,vegetables','pulse,veg','g',2.8,[84,5.4,15.6,.2,5.5,27,1.5,1.2,1.9,40,14.2,0,.14,26,.26,.15,.22,63,0,0,.02,271,39]);
food('tofu','Calcium-set tofu','soy,legumes','protein','g',6,[100,12,2,5,1,350,2,1,10,0,0,0,.1,2,.06,.06,.07,20,0,0,.4,120,35]);
food('tempeh','Plain tempeh','soy,legumes','protein','g',12,[195,19.9,7.6,11.4,4,96,2.1,1.6,0,0,0,0,.01,0,.08,.36,.22,24,0,0,.22,401,77]);
food('seitan','Plain seitan (wheat gluten and water)','wheat,gluten,grains','protein','g',10,[141,24.7,12.3,1.9,.6,14,2.1,.9,20,0,0,0,0,0,.02,.02,.02,5,0,0,0,50,20]);
food('soy','Fortified unsweetened soy drink','soy,legumes,plant milk','milk','ml',2.41,[33,3.3,1.5,1.8,.6,120,.5,.3,2,0,0,.75,.1,3,.06,.07,.04,18,.4,0,.12,120,20],'Retail price example: Silk $4.57 / 64 fl oz; generic fortification assumption','https://www.walmart.com/c/kp/unsweet-soy-milk');
food('oatmilk','Fortified oat drink','oats,gluten,grains,plant milk','milk','ml',2.5,[45,1,6.7,1.5,.8,120,.3,.2,1,0,0,.75,.1,0,.03,.03,.02,2,.4,0,.02,50,5]);
food('almondmilk','Fortified almond drink','almonds,nuts,tree nuts,plant milk','milk','ml',2.5,[15,.5,.5,1.2,.2,120,.2,.1,0,0,0,.75,1.8,0,.01,.01,.01,1,.4,0,.01,30,5]);
food('ricemilk','Fortified rice drink','rice,grains,plant milk','milk','ml',3,[47,.3,9.2,1,.3,120,.2,.1,0,0,0,.75,.1,0,.02,.02,.02,2,.4,0,.01,27,5]);
food('broccoli','Broccoli (cooked)','broccoli,vegetables,cruciferous','veg','g',3.41,[35,2.4,7.2,.4,3.3,40,.7,.5,1.6,77,65,0,1.45,141,.06,.12,.2,108,0,0,.12,293,21],'Retail example: $1.16 / 12 oz frozen; assumed no weight loss','https://www.walmart.com/c/best-sellers/great-value-broccoli-florets');
food('kale','Kale (cooked)','kale,leafy greens,vegetables,cruciferous','veg','g',5,[28,1.9,5.6,.4,2,72,.9,.2,.9,681,41,0,.85,817,.05,.07,.14,13,0,0,.1,228,18]);
food('carrot','Carrots (raw)','carrots,vegetables','veg','g',2,[41,.9,9.6,.2,2.8,33,.3,.2,.1,835,5.9,0,.66,13,.07,.06,.14,19,0,0,0,320,12]);
food('pepper','Red bell pepper (raw)','peppers,nightshades,vegetables','veg','g',5,[31,1,6,.3,2.1,7,.4,.3,.1,157,128,0,1.6,5,.05,.09,.29,46,0,0,.03,211,12]);
food('cabbage','Cabbage (raw)','cabbage,vegetables,cruciferous','veg','g',1.5,[25,1.3,5.8,.1,2.5,40,.5,.2,.3,5,37,0,.15,76,.06,.04,.12,43,0,0,.03,170,12]);
food('banana','Banana (peeled)','bananas,fruit','fruit','g',1.7,[89,1.1,22.8,.3,2.6,5,.3,.2,1,3,8.7,0,.1,.5,.03,.07,.37,20,0,0,.03,358,27]);
food('orange','Orange (peeled)','oranges,citrus,fruit','fruit','g',3,[47,.9,11.8,.1,2.4,40,.1,.1,.5,11,53,0,.18,0,.09,.04,.06,30,0,0,.01,181,10]);
food('apple','Apple (edible portion)','apples,fruit','fruit','g',3,[52,.3,13.8,.2,2.4,6,.1,0,0,3,4.6,0,.18,2,.02,.03,.04,3,0,0,.01,107,5]);
food('berries','Strawberries','strawberries,berries,fruit','fruit','g',6,[32,.7,7.7,.3,2,16,.4,.1,.4,1,59,0,.3,2,.02,.02,.05,24,0,0,.07,153,13]);
food('flax','Ground flaxseed','flax,seeds','omega,seed','g',7,[534,18.3,28.9,42.2,27.3,255,5.7,4.3,25,0,.6,0,.31,4,1.64,.16,.47,87,0,0,22.8,813,392]);
food('chia','Chia seeds','chia,seeds','omega,seed','g',9,[486,16.5,42.1,30.7,34.4,631,7.7,4.6,55,0,1.6,0,.5,0,.62,.17,0,49,0,0,17.8,407,335]);
food('walnuts','Walnuts','walnuts,nuts,tree nuts','omega,seed','g',12,[654,15.2,13.7,65.2,6.7,98,2.9,3.1,4.9,1,1.3,0,.7,2,.34,.15,.54,98,0,0,9.1,441,158]);
food('sunflower','Sunflower kernels','sunflower,seeds','seed','g',6,[584,20.8,20,51.5,8.6,78,5.3,5,53,3,1.4,0,35.2,0,1.48,.36,1.35,227,0,0,.06,645,325]);
food('pumpkin','Pumpkin seeds','pumpkin,seeds','seed','g',10,[559,30.2,10.7,49.1,6,46,8.8,7.6,9.4,1,1.9,0,2.2,7,.27,.15,.14,58,0,0,.12,809,592]);
food('peanut','Peanuts','peanuts,nuts,legumes','seed','g',5,[567,25.8,16.1,49.2,8.5,92,4.6,3.3,7,0,0,0,8.3,0,.64,.14,.35,240,0,0,0,705,168]);
food('almonds','Almonds','almonds,nuts,tree nuts','seed','g',12,[579,21.2,21.6,49.9,12.5,269,3.7,3.1,4.1,0,0,0,25.6,0,.21,1.14,.14,44,0,0,0,733,270]);
food('sesame','Tahini (sesame paste)','sesame,seeds','seed','g',8,[595,17,21.2,53.8,9.3,426,9,4.6,34,3,0,0,.25,0,1.22,.47,.15,98,0,0,.4,414,95]);
food('canola','Canola oil','canola,oils','oil,omega','g',3,[884,0,0,100,0,0,0,0,0,0,0,0,17.5,71,0,0,0,0,0,0,9.1,0,0]);
food('olive','Olive oil','olives,oils','oil','g',10,[884,0,0,100,0,0,0,0,0,0,0,0,14.4,60,0,0,0,0,0,0,.76,0,0]);
const aliases={soya:'soy',soybeans:'soy',soybean:'soy', 'soy milk':'soy', 'soy sauce':'soy',tofu:'soy', 'tree nut':'tree nuts',nut:'nuts',peanut:'peanuts','peanut butter':'peanuts',almond:'almonds',walnut:'walnuts', 'gluten free':'gluten', 'wheat flour':'wheat',bread:'wheat','whole wheat':'wheat','whole wheat pasta':'wheat',pasta:'wheat',lentil:'lentils',dal:'lentils',dahl:'lentils',chickpea:'chickpeas',garbanzo:'chickpeas','garbanzo beans':'chickpeas',hummus:'chickpeas',bean:'beans','black bean':'black beans','kidney bean':'kidney beans',pulses:'legumes',legume:'legumes','all legumes':'legumes','all nuts':'nuts','all seeds':'seeds',seed:'seeds',linseed:'flax',flaxseed:'flax','flax seeds':'flax','chia seeds':'chia','sesame seeds':'sesame',tahini:'sesame','sunflower seeds':'sunflower','pumpkin seeds':'pumpkin',oat:'oats','oat milk':'oats','almond milk':'almonds','rice milk':'rice', 'plant milks':'plant milk', 'plant based milk':'plant milk',potato:'potatoes','sweet potato':'sweet potatoes',tomatoes:'nightshades',tomato:'nightshades',pepper:'peppers','bell pepper':'peppers','bell peppers':'peppers',capsicum:'peppers',carrot:'carrots',banana:'bananas',apple:'apples',orange:'oranges',strawberry:'strawberries', 'leafy vegetables':'leafy greens',vegetable:'vegetables',fruits:'fruit',grain:'grains', 'all grains':'grains', 'all vegetables':'vegetables', 'all fruit':'fruit', 'all foods':'food', 'everything':'food',rapeseed:'canola','rapeseed oil':'canola', 'canola oil':'canola','olive oil':'olives','gluten-free':'gluten'};
const allTags=[...new Set(foods.flatMap(f=>f.tags))].sort();
const animal=['meat','fish','shellfish','eggs','egg','milk','dairy','cheese','yogurt','yoghurt','chicken','beef','pork','honey','lactose','seafood'];
function normalize(s){return s.trim().toLowerCase().replace(/[’']/g,'').replace(/\s+/g,' ');}
function parse(text,acknowledged=[]){const terms=[...new Set(text.split(/[,;\n]+|\s+and\s+|\s*&\s*/i).map(normalize).filter(Boolean))];return terms.map(term=>{const tag=aliases[term]||term;let matches=foods.filter(f=>tag==='food'||f.tags.includes(tag)||normalize(f.name)===tag||f.id===tag);return {term,tag,ids:matches.map(f=>f.id),state:matches.length?'matched':animal.includes(tag)?'animal':acknowledged.includes(term)?'acknowledged':'unknown'};});}
const meta={protein:['Protein','g',56,56],fiber:['Fiber','g',25,38],calcium:['Calcium','mg',1000,1000,2500],iron:['Iron (vegetarian reference)','mg',32.4,14.4,45],zinc:['Zinc','mg',8,11,40],selenium:['Selenium','µg',55,55,400],a:['Vitamin A','µg RAE',700,900],c:['Vitamin C','mg',75,90,2000],d:['Vitamin D','µg',15,15,100],e:['Vitamin E','mg',15,15],k:['Vitamin K','µg',90,120],b1:['Thiamin (B1)','mg',1.1,1.2],b2:['Riboflavin (B2)','mg',1.1,1.3],b6:['Vitamin B6','mg',1.3,1.3,100],folate:['Folate','µg DFE',400,400],b12:['Vitamin B12','µg',2.4,2.4],iodine:['Iodine','µg',150,150,1100],ala:['Omega-3 (ALA)','g',1.1,1.6],potassium:['Potassium','mg',2600,3400],magnesium:['Magnesium','mg',320,420]};
function targets(profile,weight){return Object.fromEntries(Object.entries(meta).map(([k,v])=>[k,k==='protein'?weight*.8:v[profile==='female'?2:3]]));}
const byId=Object.fromEntries(foods.map(f=>[f.id,f]));
function totals(items){let n=Object.fromEntries(keys.map(k=>[k,0]));items.forEach(({id,amount})=>keys.forEach(k=>n[k]+=byId[id].n[k]*amount/100));return n;}
function rng(seed){return ()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;};}
function generate(config){
 const parsed=parse(config.exclusions,config.acknowledged||[]);if(parsed.some(p=>p.state==='unknown'))return {error:'Resolve the unrecognized exclusions before generating a plan.',parsed};
 const blocked=new Set(parsed.flatMap(p=>p.ids)),allowed=foods.filter(f=>!blocked.has(f.id));
 const pick=(role,random)=>{let a=allowed.filter(f=>f.roles.includes(role));return a.length?a[Math.floor(random()*a.length)]:null;};
 const missing=['starch','protein','veg','fruit','oil'].filter(role=>!allowed.some(f=>f.roles.includes(role)));
 // Seed-only patterns are not treated as an adequate replacement for every protein staple.
 if(missing.length)return {error:'This ingredient database cannot build a balanced meal pattern with these exclusions. Missing categories: '+missing.join(', ')+'. A dietitian may be able to find options beyond this database.',parsed,allowed};
 const t=targets(config.profile,config.weight);let best=null;
 for(let trial=0;trial<80;trial++){
  const random=rng(973+trial*117+ (config.variant||0)*997);const days=[];
  for(let d=0;d<3;d++){
   let meals=[];const add=(list,f,amount)=>{if(f)list.push({id:f.id,amount});};
   let b=[],l=[],din=[],s=[];
   let bg=pick('breakfast',random)||pick('starch',random);add(b,bg,bg.n.kcal<100?300:70);add(b,pick('milk',random),250);add(b,pick('fruit',random),120);let omega=pick('omega',random);if(omega&&omega.id!=='canola')add(b,omega,15);
   let lg=pick('starch',random),dg=pick('starch',random);add(l,lg,lg.n.kcal<100?300:75);add(l,pick('pulse',random)||pick('protein',random),180);add(l,pick('veg',random),200);add(l,pick('oil',random),10);
   add(din,dg,dg.n.kcal<100?300:65);add(din,pick('protein',random),180);add(din,pick('veg',random),200);add(din,pick('oil',random),10);
   add(s,pick('fruit',random),150);add(s,pick('seed',random),30);add(s,pick('milk',random),250);
   meals=[{name:'Breakfast',items:b},{name:'Lunch',items:l},{name:'Dinner',items:din},{name:'Snack',items:s}];
   const raw=totals(meals.flatMap(m=>m.items));const scale=config.energy/raw.kcal;
   meals.forEach(m=>m.items.forEach(i=>{i.amount=Math.max(1,Math.round(i.amount*scale));}));
   days.push({meals,n:totals(meals.flatMap(m=>m.items))});
  }
  let avg=Object.fromEntries(keys.map(k=>[k,days.reduce((sum,d)=>sum+d.n[k],0)/3]));
  avg.b12+=config.supp.b12;avg.d+=config.supp.d;avg.iodine+=config.supp.iodine;
  const cost=days.reduce((sum,d)=>sum+d.meals.flatMap(m=>m.items).reduce((sum,i)=>sum+config.prices[i.id]*i.amount/1000,0),0)/3+config.supp.cost;
  let score=Object.keys(t).reduce((sum,k)=>sum+Math.min(avg[k]/t[k],1),0);
  Object.entries(meta).forEach(([k,v])=>{if(v[4]&&avg[k]>v[4])score-=5*(avg[k]/v[4]-1);});
  if(avg.fat*9/config.energy<.2)score-=2;
  if(avg.fat*9/config.energy>.35)score-=2;
  score-=cost*.005;
  if(!best||score>best.score)best={days,avg,cost,score,targets:t,allowed,parsed};
 }
 best.gaps=Object.keys(t).filter(k=>best.avg[k]<t[k]);
 best.upper=Object.keys(meta).filter(k=>meta[k][4]&&best.avg[k]>meta[k][4]);
 best.cart={};best.days.forEach(d=>d.meals.forEach(m=>m.items.forEach(i=>best.cart[i.id]=(best.cart[i.id]||0)+i.amount)));
 return best;
}
const api={foods,byId,keys,meta,allTags,parse,targets,totals,generate};root.VeganPlanner=api;if(typeof module!=='undefined')module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
