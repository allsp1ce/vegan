'use strict';
const P=VeganPlanner,$=id=>document.getElementById(id);
const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let acknowledged=[],lastConfig=null;
const fmt=n=>new Intl.NumberFormat('en',{maximumFractionDigits:n<10?1:0}).format(n);
const money=n=>new Intl.NumberFormat('en',{style:'currency',currency:lastConfig?.currency||$('currency')?.value||'USD'}).format(n);
function table(head,rows){return '<table><thead><tr>'+head.map(h=>'<th scope="col">'+h+'</th>').join('')+'</tr></thead><tbody>'+rows.map(r=>'<tr>'+r.map((v,i)=>i===0?'<th scope="row">'+v+'</th>':'<td>'+v+'</td>').join('')+'</tr>').join('')+'</tbody></table>';}
function renderMatches(parsed){
 const matched=parsed.filter(p=>p.state!=='unknown'),unknown=parsed.filter(p=>p.state==='unknown');
 const review=matched.length?'<p>Excluding: '+matched.map(p=>escape(p.term)).join(', ')+'.</p>':'';
 const unresolved=unknown.length?'<ul>'+unknown.map(p=>'<li><strong>'+escape(p.term)+': not recognized.</strong> Check spelling or use a broader group.'+($('prices')?' <label><input type="checkbox" data-ack="'+escape(p.term)+'"> I checked the ingredients under Food prices; this food is not used.</label>':'')+'</li>').join('')+'</ul>':'';
 $('matches').innerHTML=review+unresolved;
}
function priceTable(custom){
 if(!$('prices'))return;
 $('prices').innerHTML=table(['Ingredient','Price / kg or liter','Basis'],P.foods.map(f=>[escape(f.name),'<input aria-label="Price per '+(f.unit==='ml'?'liter':'kilogram')+' of '+escape(f.name)+'" id="price-'+f.id+'" type="number" min="0" max="1000000" step="0.01" value="'+(custom?'':f.price.toFixed(2))+'" required>',custom?'Enter your local price':f.url?'<a href="'+f.url+'">'+escape(f.source)+'</a>':escape(f.source)]));
}
priceTable(false);
function update(){
 const hasInput=$('foods').value.trim().length>0;
 $('content').hidden=!hasInput;
 $('message').textContent='';
 if(!hasInput){$('results').hidden=true;$('matches').innerHTML='';return;}
 const parsed=P.parse($('foods').value,acknowledged);
 renderMatches(parsed);
 if(!parsed.length||parsed.some(p=>p.state==='unknown')){$('results').hidden=true;return;}
 const invalid=[...document.querySelectorAll('#planner input, #planner select')].find(el=>!el.validity.valid);
 if(invalid){$('results').hidden=true;$('message').textContent='Complete valid amounts in Assumptions to update the plan.';return;}
 const config=getConfig(),plan=P.generate(config);
 if(plan.error){$('results').hidden=true;$('message').textContent=plan.error;return;}
 render(plan,config);
}
$('planner').addEventListener('input',e=>{
 if(e.target.id==='foods'){if(e.isComposing)return;acknowledged=[];}
 if(e.target.type!=='checkbox'&&e.target.tagName!=='SELECT')update();
});
$('foods').addEventListener('compositionend',()=>{acknowledged=[];update();});
$('planner').addEventListener('change',e=>{
 if(e.target.dataset.ack){acknowledged.push(e.target.dataset.ack);}
 if(e.target.id==='market'){
  const custom=$('market')?.value==='custom';
  if($('local-prices'))$('local-prices').hidden=!custom;
  if(!custom&&$('currency'))$('currency').value='USD';
  $('suppcost').value=custom?'':'0.20';
  priceTable(custom);
 }
 update();
});
$('planner').addEventListener('submit',e=>{e.preventDefault();update();});
function getConfig(){
 const market=$('market')?.value||'US';
 return {
  exclusions:$('foods').value,acknowledged,energy:+$('energy').value,profile:$('profile').value,weight:+$('weight').value,
  market,location:$('location')?.value.trim()||'',currency:market==='US'?'USD':($('currency')?.value||'USD'),
  prices:Object.fromEntries(P.foods.map(f=>{const input=$('price-'+f.id);return [f.id,input?+input.value:f.price];})),
  supp:{b12:+$('b12').value,d:+$('vitd').value,iodine:+$('iodine').value,cost:+$('suppcost').value}
 };
}
function render(plan,config){
 lastConfig=config;
 const dayMenus=[...document.querySelectorAll('#meals details')];
 const openDays=new Set(dayMenus.filter(el=>el.open).map(el=>Number(el.dataset.day)));
 $('supplements').innerHTML=table(['Supplement','Daily amount'],[['B12 (cyanocobalamin)',fmt(config.supp.b12)+' µg'],['Vitamin D (vegan D2 or D3)',fmt(config.supp.d)+' µg'],['Iodine (iodide or iodate)',fmt(config.supp.iodine)+' µg']])+'<p>Included cost: '+money(config.supp.cost)+'/day.</p>';
 $('meals').innerHTML=plan.days.map((day,index)=>'<details data-day="'+index+'"'+((dayMenus.length?openDays.has(index):index===0)?' open':'')+'><summary>Day '+(index+1)+' · '+fmt(day.n.kcal)+' kcal</summary>'+table(['Meal','Food and amount'],day.meals.map(m=>[m.name,m.items.map(i=>i.amount+' '+P.byId[i.id].unit+' '+escape(P.byId[i.id].name)).join('; ')]))+'</details>').join('');
 $('nutrients').innerHTML=table(['Nutrient','Average / day','Reference','Coverage'],[
  ['Carbohydrate',fmt(plan.avg.carbs)+' g','-','-'],
  ['Fat',fmt(plan.avg.fat)+' g','-','-'],
  ...Object.entries(P.meta).map(([k,v])=>[v[0],fmt(plan.avg[k])+' '+v[1],fmt(plan.targets[k])+' '+v[1],Math.round(plan.avg[k]/plan.targets[k]*100)+'% - '+(plan.upper.includes(k)?'above limit':plan.gaps.includes(k)?'below target':'target met')])
 ]);
 $('shopping').innerHTML=table(['Ingredient','For 3 days','Consumption cost'],Object.entries(plan.cart).map(([id,amount])=>[escape(P.byId[id].name),amount+' '+P.byId[id].unit,money(amount/1000*config.prices[id])]))+'<p>Supplements for 3 days: '+money(config.supp.cost*3)+'. Total: '+money(plan.cost*3)+'.</p>';
 $('results').hidden=false;$('message').textContent='';
}
update();
