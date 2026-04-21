(async function(){
  const SB='https://wnqfmrzipefqtaeuhdya.supabase.co';
  const KEY='sb_publishable_0copf0cG_L5EILL10m0pYA_Vwgixgh6';
  try {
    const r = await fetch(`${SB}/rest/v1/imprensa?ativo=eq.true&order=criado_em.desc&limit=6`,{headers:{'apikey':KEY,'Authorization':'Bearer '+KEY}});
    const rows = await r.json();
    if(!rows.length) return;
    const sec = document.createElement('section');
    sec.style.cssText='padding:80px 40px;background:#141414';
    sec.innerHTML=`<div style="max-width:1100px;margin:0 auto">
      <div style="font-size:11px;color:#E8650A;letter-spacing:3px;text-transform:uppercase;font-weight:600;margin-bottom:10px">Na Mídia</div>
      <h2 style="font-family:'Bebas Neue',sans-serif;font-size:clamp(36px,5vw,56px);letter-spacing:2px;color:white;margin-bottom:40px">FCC NA IMPRENSA</h2>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:20px">
        ${rows.map(r=>`
          <a href="${r.url}" target="_blank" style="display:block;background:#1C1C1C;border:1px solid rgba(255,255,255,0.07);padding:24px;text-decoration:none;transition:border-color .2s" onmouseover="this.style.borderColor='rgba(232,101,10,0.4)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.07)'">
            <div style="font-size:11px;color:#E8650A;font-weight:600;letter-spacing:1px;text-transform:uppercase;margin-bottom:10px">${r.veiculo}</div>
            <div style="font-size:15px;font-weight:600;color:white;line-height:1.4;margin-bottom:10px">${r.titulo}</div>
            ${r.descricao?`<div style="font-size:13px;color:rgba(255,255,255,0.5);line-height:1.5;margin-bottom:12px">${r.descricao.substring(0,100)}...</div>`:''}
            <div style="font-size:11px;color:rgba(255,255,255,0.3)">${r.data_pub?new Date(r.data_pub+'T12:00:00').toLocaleDateString('pt-BR'):''}  →  Ler reportagem</div>
          </a>`).join('')}
      </div>
    </div>`;
    const cta = document.querySelector('.cta-final');
    if(cta) cta.parentNode.insertBefore(sec, cta);
  } catch(e){}
})();
