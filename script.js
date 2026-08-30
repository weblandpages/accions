
const langs=["ca","es","en"];
function setLanguage(lang){
  if(!langs.includes(lang)) lang='ca';
  document.documentElement.lang=lang;
  document.querySelectorAll('[data-lang]').forEach(el=>{
    const val=el.getAttribute('data-'+lang);
    if(val) el.textContent=val;
  });
  document.querySelectorAll('.language-switch button').forEach(btn=>btn.classList.toggle('active',btn.dataset.langBtn===lang));
  localStorage.setItem('accions-language',lang);
}
const saved=localStorage.getItem('accions-language');
const browser=(navigator.language||'').toLowerCase();
let initial=browser.startsWith('es')?'es':browser.startsWith('en')?'en':'ca';
setLanguage(saved||initial);
