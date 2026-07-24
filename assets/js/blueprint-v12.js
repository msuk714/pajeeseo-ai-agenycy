(()=>{
  'use strict';
  const esc=(value='')=>String(value??'').replace(/[&<>'"]/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch]));
  const num=(v,fallback=0)=>Number.isFinite(Number(v))?Number(v):fallback;
  const clamp=(v,min=0,max=100)=>Math.max(min,Math.min(max,num(v)));
  const fmt=(v,d=0)=>new Intl.NumberFormat('en-PK',{maximumFractionDigits:d}).format(num(v));
  const pctValue=(v,d=1)=>`${fmt(v,d)}%`;
  const toneFromScore=(score)=>score>=80?'good':score>=50?'warn':'poor';
  const delta=(value,{inverse=false,suffix='%'}={})=>{
    const n=num(value);const positive=inverse?n<0:n>0;const negative=inverse?n>0:n<0;
    return `<span class="bp-delta ${positive?'up':negative?'down':'flat'}">${n>0?'+':''}${fmt(n,1)}${suffix}</span>`;
  };
  const badge=(label,type='partial')=>`<span class="bp-data-badge ${esc(type)}">${esc(label)}</span>`;
  const stat=(label,value,{tone='blue',foot='',change=null,inverse=false}={})=>{
    const color={blue:'#2563eb',green:'#059669',amber:'#d97706',red:'#dc2626',violet:'#7c3aed',cyan:'#0891b2'}[tone]||tone;
    return `<article class="bp-stat-card" style="--stat-color:${esc(color)}"><div class="bp-stat-label"><span>${esc(label)}</span></div><div class="bp-stat-value" data-bp-counter="${esc(value)}">${esc(value)}</div><div class="bp-stat-foot">${change===null?'':delta(change,{inverse})}<span>${esc(foot)}</span></div></article>`;
  };
  const issue=(item={})=>{
    const severity=item.severity||item.status||'notice';
    const normalized=severity==='critical'||severity==='poor'||severity==='fail'?'critical':severity==='warning'||severity==='warn'||severity==='needs-improvement'?'warning':severity==='pass'||severity==='good'?'pass':'notice';
    return `<article class="bp-issue ${normalized}"><span class="bp-issue-dot"></span><div><h4>${esc(item.title||'Finding')}</h4><p>${esc(item.detail||item.description||'')}${item.url?`<br><a href="${esc(item.url)}" target="_blank" rel="noopener">${esc(item.url)}</a>`:''}</p></div>${item.fix?`<button type="button" class="bp-help-btn" data-bp-help-title="${esc(item.title||'How to fix')}" data-bp-help="${esc(item.fix)}" aria-label="How to fix">?</button>`:''}</article>`;
  };
  const accordion=(items=[])=>`<div class="bp-accordion">${items.map((item,index)=>`<article class="bp-accordion-item${index===0?' open':''}"><button type="button"><span>${esc(item.title)}</span><span aria-hidden="true">${index===0?'−':'+'}</span></button><div class="bp-accordion-body">${item.html||`<p>${esc(item.body||'')}</p>`}</div></article>`).join('')}</div>`;
  const roadmap=(phases=[])=>`<div class="bp-roadmap">${phases.slice(0,3).map((p,index)=>`<article class="bp-phase"><span class="bp-phase-marker">${index+1}</span><div class="bp-data-badge ${index===0?'verified':'partial'}">${esc(p.period||p.title||`Phase ${index+1}`)}</div><h3>${esc(p.objective||p.focus||'Priority execution phase')}</h3><p>${esc(p.outcome||p.description||'')}</p><details><summary>View weekly tasks</summary><ul>${(p.tasks||p.items||[]).slice(0,8).map(task=>`<li>${esc(typeof task==='string'?task:task.title||task.task||'Task')}</li>`).join('')||'<li>Tasks will appear after analysis.</li>'}</ul></details></article>`).join('')}</div>`;
  const exportCenter=(title='Export this report',rows=[])=>`<section class="bp-export-center" data-bp-export><div><h3>${esc(title)}</h3><p>Export the visible evidence for implementation, sharing or further analysis.</p></div><div class="bp-export-actions"><button type="button" data-bp-export-print>PDF / Print</button><button type="button" data-bp-export-csv>CSV</button><button type="button" data-bp-export-xls>Excel</button><button type="button" data-bp-export-sheets>Google Sheets-ready</button></div><script type="application/json" data-bp-export-data>${esc(JSON.stringify(rows||[]))}</script></section>`;
  const aiInsights=(data={})=>{
    const recommendations=data.recommendations||{};
    const list=(items)=>Array.isArray(items)?items:items?[items]:[];
    const card=(title,items)=>`<article class="bp-ai-card"><h3>${esc(title)}</h3><ul>${list(items).slice(0,6).map(x=>`<li>${esc(typeof x==='string'?x:x.title||x.detail||x.action||'')}</li>`).join('')||'<li>No additional evidence was returned.</li>'}</ul></article>`;
    return `<section class="bp-section bp-ai-block" id="ai-insights"><div class="bp-section-head"><div><span class="bp-data-badge partial">AI insights</span><h2>What the evidence means</h2><p>${esc(data.summary||data.overallSummary||'The report evidence has been organised into practical priorities without claiming guaranteed results.')}</p></div></div><div class="bp-ai-grid">${card('Key findings',data.keyFindings||data.findings)}${card('Strengths',data.strengths)}${card('Weaknesses',data.weaknesses||data.gaps)}${card('Priority improvements',recommendations.priority||data.priorityImprovements)}${card('Quick wins',recommendations.quickWins||data.quickWins)}${card('High-impact tasks',recommendations.highImpact||data.highImpactTasks)}${card('Long-term recommendations',recommendations.longTerm||data.longTerm)}${card('Expected direction',data.expectedResults||['Outcomes are directional and depend on implementation quality, competition and measurement time.'])}</div></section>`;
  };
  const skeleton=(title='Building your report…',blocks=4)=>`<section class="bp-loading"><div class="bp-section-head"><div><span class="bp-data-badge verified">Live analysis</span><h2>${esc(title)}</h2><p>Each section appears as verified or estimated evidence becomes available.</p></div></div><div class="bp-skeleton lg"></div>${Array.from({length:blocks},()=>'<div class="bp-skeleton"></div>').join('')}</section>`;
  function parseCounter(el){
    const raw=el.getAttribute('data-bp-counter');
    if(!raw||/[a-zA-Z/%–—:]/.test(raw))return;
    const target=Number(String(raw).replace(/,/g,''));if(!Number.isFinite(target))return;
    const start=performance.now(),duration=850,decimals=(String(raw).split('.')[1]||'').length;
    const tick=(now)=>{const t=Math.min(1,(now-start)/duration);const eased=1-Math.pow(1-t,3);el.textContent=(target*eased).toLocaleString('en-PK',{maximumFractionDigits:decimals});if(t<1)requestAnimationFrame(tick)};requestAnimationFrame(tick);
  }
  function initReveal(root=document){
    const nodes=[...root.querySelectorAll('[data-bp-reveal]')];if(!nodes.length)return;
    if(!('IntersectionObserver'in window)){nodes.forEach(x=>x.classList.add('is-visible'));return}
    const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');observer.unobserve(e.target)}}),{threshold:.08});nodes.forEach(n=>observer.observe(n));
  }
  function initTabs(root=document){
    root.querySelectorAll('[data-bp-tabs]').forEach(group=>{
      const scope=group.closest('[data-bp-tab-scope]')||group.parentElement;
      group.querySelectorAll('[data-bp-tab]').forEach(btn=>btn.addEventListener('click',()=>{
        const key=btn.dataset.bpTab;
        group.querySelectorAll('[data-bp-tab]').forEach(x=>x.classList.toggle('active',x===btn));
        scope.querySelectorAll('[data-bp-panel]').forEach(p=>p.classList.toggle('active',p.dataset.bpPanel===key));
      }));
    });
  }
  function initAccordions(root=document){
    root.querySelectorAll('.bp-accordion-item>button').forEach(btn=>btn.addEventListener('click',()=>{
      const item=btn.parentElement;item.classList.toggle('open');btn.lastElementChild.textContent=item.classList.contains('open')?'−':'+';
    }));
  }
  function openDrawer(title,body){
    let drawer=document.querySelector('[data-bp-drawer]');
    if(!drawer){drawer=document.createElement('div');drawer.className='bp-drawer';drawer.dataset.bpDrawer='';drawer.innerHTML='<aside class="bp-drawer-panel"><button type="button" class="bp-drawer-close" aria-label="Close">×</button><h2 data-bp-drawer-title></h2><div data-bp-drawer-body></div></aside>';document.body.appendChild(drawer);drawer.addEventListener('click',e=>{if(e.target===drawer||e.target.closest('.bp-drawer-close'))drawer.classList.remove('open')});}
    const panel=drawer.querySelector('.bp-drawer-panel');if(panel&&!drawer.querySelector('[data-bp-drawer-title]'))panel.innerHTML='<button type="button" class="bp-drawer-close" aria-label="Close">×</button><h2 data-bp-drawer-title></h2><div data-bp-drawer-body></div>';drawer.querySelector('[data-bp-drawer-title]').textContent=title||'Details';drawer.querySelector('[data-bp-drawer-body]').innerHTML=`<p style="line-height:1.75;color:#52657d">${esc(body||'')}</p><p style="margin-top:18px"><a class="bp-primary-btn" href="/contact/#contact-form">Get implementation help</a></p>`;drawer.classList.add('open');
  }
  function initHelp(root=document){root.querySelectorAll('[data-bp-help]').forEach(btn=>btn.addEventListener('click',()=>openDrawer(btn.dataset.bpHelpTitle,btn.dataset.bpHelp)))}
  function csvText(rows){if(!rows.length)return'';const keys=[...new Set(rows.flatMap(r=>Object.keys(r||{})))];const q=v=>`"${String(typeof v==='object'?JSON.stringify(v):v??'').replace(/"/g,'""')}"`;return [keys.map(q).join(','),...rows.map(r=>keys.map(k=>q(r[k])).join(','))].join('\n')}
  function download(name,content,type){const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([content],{type}));a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000)}
  function initExports(root=document){
    root.querySelectorAll('[data-bp-export]').forEach(box=>{
      let rows=[];try{rows=JSON.parse(box.querySelector('[data-bp-export-data]')?.textContent||'[]')}catch{}
      box.querySelector('[data-bp-export-print]')?.addEventListener('click',()=>window.print());
      box.querySelector('[data-bp-export-csv]')?.addEventListener('click',()=>download('pajee-seo-report.csv',csvText(rows),'text/csv;charset=utf-8'));
      box.querySelector('[data-bp-export-xls]')?.addEventListener('click',()=>download('pajee-seo-report.xls',csvText(rows).replace(/,/g,'\t'),'application/vnd.ms-excel;charset=utf-8'));
      box.querySelector('[data-bp-export-sheets]')?.addEventListener('click',()=>{download('pajee-seo-google-sheets-ready.csv',csvText(rows),'text/csv;charset=utf-8');alert('A Google Sheets-ready CSV was downloaded. Import it into a Google Sheet to continue.')});
    });
  }
  function table(mount,rows,columns,{pageSize=25,search=true,sort=true}={}){
    if(!mount)return;let page=1,size=pageSize,term='',sortKey='',sortDir=1;
    const display=(row,col)=>col.render?col.render(row):row[col.key]??'';
    const filtered=()=>{
      let list=[...rows];if(term)list=list.filter(row=>columns.some(col=>String(display(row,col)).toLowerCase().includes(term)));
      if(sortKey){const col=columns.find(c=>c.key===sortKey);list.sort((a,b)=>String(display(a,col)).localeCompare(String(display(b,col),undefined,{numeric:true}))*sortDir)}return list;
    };
    const draw=()=>{
      const list=filtered(),pages=Math.max(1,Math.ceil(list.length/size));page=Math.min(page,pages);const slice=list.slice((page-1)*size,page*size);
      mount.innerHTML=`<div class="bp-table-toolbar">${search?'<input type="search" data-bp-search placeholder="Search this table" aria-label="Search table">':'<span></span>'}<select data-bp-size aria-label="Rows per page"><option value="25">25 rows</option><option value="50">50 rows</option><option value="100">100 rows</option></select></div><div class="bp-table-wrap"><table class="bp-table"><thead><tr>${columns.map(col=>`<th>${sort&&col.key?`<button type="button" data-bp-sort="${esc(col.key)}">${esc(col.label)}</button>`:esc(col.label)}</th>`).join('')}</tr></thead><tbody>${slice.map(row=>`<tr>${columns.map(col=>`<td>${col.render?col.render(row):esc(row[col.key]??'')}</td>`).join('')}</tr>`).join('')||`<tr><td colspan="${columns.length}">No matching rows.</td></tr>`}</tbody></table></div><div class="bp-pagination"><span class="bp-page-state">Page ${page} of ${pages} · ${list.length} rows</span><div class="bp-pagination-controls"><button type="button" data-bp-prev ${page<=1?'disabled':''}>Previous</button><button type="button" data-bp-next ${page>=pages?'disabled':''}>Next</button></div></div>`;
      const input=mount.querySelector('[data-bp-search]');if(input){input.value=term;input.addEventListener('input',()=>{term=input.value.trim().toLowerCase();page=1;draw()})}
      const sel=mount.querySelector('[data-bp-size]');sel.value=String(size);sel.addEventListener('change',()=>{size=Number(sel.value);page=1;draw()});
      mount.querySelector('[data-bp-prev]')?.addEventListener('click',()=>{page--;draw()});mount.querySelector('[data-bp-next]')?.addEventListener('click',()=>{page++;draw()});
      mount.querySelectorAll('[data-bp-sort]').forEach(btn=>btn.addEventListener('click',()=>{if(sortKey===btn.dataset.bpSort)sortDir*=-1;else{sortKey=btn.dataset.bpSort;sortDir=1}draw()}));
    };draw();
  }
  function init(root=document){root.querySelectorAll('[data-bp-counter]').forEach(parseCounter);initReveal(root);initTabs(root);initAccordions(root);initHelp(root);initExports(root);root.querySelectorAll('[data-bp-export="pdf"]').forEach(btn=>{if(btn.dataset.bpBound)return;btn.dataset.bpBound='1';btn.addEventListener('click',()=>window.print())});root.querySelectorAll('[data-bp-drawer-close]').forEach(btn=>{if(btn.dataset.bpBound)return;btn.dataset.bpBound='1';btn.addEventListener('click',()=>btn.closest('[data-bp-drawer]')?.classList.remove('open'))})}
  document.addEventListener('DOMContentLoaded',()=>init(document));
  window.BlueprintUI={esc,num,clamp,fmt,pctValue,toneFromScore,delta,badge,stat,issue,accordion,roadmap,exportCenter,aiInsights,skeleton,init,initTabs,initAccordions,initHelp,initExports,openDrawer,table,csvText,download};
})();
