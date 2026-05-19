/* ─── DATA ─── */
const CATS = ['All','T-Shirts','Hoodies','Polos','Tank Tops','Outerwear'];

const TIERS = {
  tshirt:  [[1,14.99],[12,11.99],[24,9.99],[48,7.99],[72,6.99],[144,5.99]],
  hoodie:  [[1,44.99],[12,36.99],[24,29.99],[48,24.99],[72,22.99],[144,19.99]],
  polo:    [[1,26.99],[12,21.99],[24,18.99],[48,16.99],[72,14.99]],
  tank:    [[1,12.99],[12,9.99],[24,7.99],[48,6.49],[72,5.99],[144,4.99]],
  outer:   [[1,59.99],[12,52.99],[24,47.99],[48,41.99],[72,36.99]],
};

const PRODUCTS = [
  {id:1,name:'Gildan 5000 Heavy Cotton Tee',brand:'Gildan',sku:'G5000',cat:'T-Shirts',tag:'hot',tiers:'tshirt',reviews:1855,rating:5,
   colors:['#1a1a1a','#ffffff','#cc2222','#1a4db5','#2d8a3e','#f5a623','#6b3fa0','#888'],
   sizes:['XS','S','M','L','XL','2XL','3XL'],minQty:1,
   desc:'5.3 oz., 100% pre-shrunk cotton. Double-needle sleeve and bottom hem. Taped neck and shoulders. The go-to blank for any custom design.',
   features:['5.3 oz. 100% pre-shrunk cotton','Double-needle sleeve and bottom hem','Taped neck and shoulders','Tear-away label','Quarter-turned to eliminate center crease']},
  {id:2,name:'Gildan 18500 Pullover Hoodie',brand:'Gildan',sku:'G18500',cat:'Hoodies',tag:'hot',tiers:'hoodie',reviews:3982,rating:5,
   colors:['#1a1a1a','#888','#cc2222','#1a4db5','#2d8a3e','#f5e8d0'],
   sizes:['S','M','L','XL','2XL','3XL'],minQty:1,
   desc:'8 oz. 50/50 cotton/poly. Air jet yarn for a softer feel. Double-lined hood with matching drawcord. Front pouch pocket.',
   features:['8 oz. 50/50 cotton/poly blend','Air jet yarn — softer feel','Double-lined hood with drawcord','Front pouch pocket','1×1 rib at cuffs and waistband with spandex']},
  {id:3,name:'Port & Company PC55 Core Blend Tee',brand:'Port & Company',sku:'PC55',cat:'T-Shirts',tag:'new',tiers:'tshirt',reviews:874,rating:5,
   colors:['#ffffff','#1a1a1a','#cc2222','#1a4db5','#2d8a3e','#f5a623'],
   sizes:['XS','S','M','L','XL','2XL','3XL'],minQty:1,
   desc:'5.4 oz., 50/50 cotton/poly. Seamless collar with two-ply taping. Shoulder-to-shoulder taping.',
   features:['5.4 oz. 50/50 cotton/poly blend','Seamless collar with two-ply taping','Shoulder-to-shoulder taping','Welt-knit collar and cuffs']},
  {id:4,name:'Port Authority K500 Silk Touch Polo',brand:'Port Authority',sku:'K500',cat:'Polos',tag:'hot',tiers:'polo',reviews:567,rating:5,
   colors:['#ffffff','#1a1a1a','#cc2222','#1a4db5','#2d8a3e','#f5a623'],
   sizes:['S','M','L','XL','2XL','3XL'],minQty:1,
   desc:'65/35 poly/cotton. Snag-resistant. Flat knit collar and cuffs. Side vents. 3-button placket with dyed-to-match buttons.',
   features:['65/35 poly/cotton blend','Snag-resistant','Flat knit collar and cuffs','Side vents for ease of movement','3-button placket']},
  {id:5,name:'Gildan 2200 Ultra Cotton Tank',brand:'Gildan',sku:'G2200',cat:'Tank Tops',tag:'',tiers:'tank',reviews:450,rating:5,
   colors:['#1a1a1a','#ffffff','#cc2222','#1a4db5','#f5a623'],
   sizes:['S','M','L','XL','2XL','3XL'],minQty:1,
   desc:'6 oz. 100% preshrunk cotton. Ribbed armholes and neckline. Double-needle bottom hem.',
   features:['6 oz. 100% preshrunk cotton','Ribbed armholes and neckline','Double-needle bottom hem','Shoulder-to-shoulder taping']},
  {id:6,name:'Gildan 18600 Full-Zip Hoodie',brand:'Gildan',sku:'G18600',cat:'Hoodies',tag:'',tiers:'hoodie',reviews:590,rating:4,
   colors:['#1a1a1a','#888','#cc2222','#1a4db5'],
   sizes:['S','M','L','XL','2XL','3XL'],minQty:1,
   desc:'8 oz. 50/50 blend. Full-zip closure. Set-in sleeves. Two pockets with matching zipper pulls.',
   features:['8 oz. 50/50 cotton/poly blend','Full-zip closure','Set-in sleeves','Two side pockets']},
  {id:7,name:'Bella+Canvas 3001 Unisex Jersey Tee',brand:'Bella+Canvas',sku:'BC3001',cat:'T-Shirts',tag:'new',tiers:'tshirt',reviews:550,rating:5,
   colors:['#1a1a1a','#ffffff','#cc2222','#1a4db5','#6b3fa0','#2d8a3e','#f5e8d0','#888'],
   sizes:['XS','S','M','L','XL','2XL'],minQty:1,
   desc:'4.2 oz., 100% Airlume combed and ring-spun cotton. Side-seamed. Retail fit. Extremely soft hand feel.',
   features:['4.2 oz. Airlume combed ring-spun cotton','Side-seamed retail fit','Tear-away label','Incredibly soft — ideal for retail merch']},
  {id:8,name:'Port Authority J317 Soft Shell Vest',brand:'Port Authority',sku:'J317',cat:'Outerwear',tag:'new',tiers:'outer',reviews:756,rating:5,
   colors:['#1a1a1a','#374151','#888','#cc2222'],
   sizes:['S','M','L','XL','2XL'],minQty:1,
   desc:'Soft shell with wind and water resistance. 3 zip pockets. Cadet collar. Left chest logo-ready.',
   features:['Wind and water resistant soft shell','3 zip pockets','Cadet collar','Perfect for left chest logo placement']},
  {id:9,name:'Port & Company PC78H Crewneck Sweatshirt',brand:'Port & Company',sku:'PC78H',cat:'Hoodies',tag:'',tiers:'hoodie',reviews:600,rating:5,
   colors:['#888','#1a1a1a','#cc2222','#1a4db5','#f5e8d0'],
   sizes:['XS','S','M','L','XL','2XL','3XL'],minQty:1,
   desc:'7.8 oz. 50/50 cotton/poly. Classic crewneck. 1×1 ribbing at collar, cuffs, and hem. Smooth exterior print surface.',
   features:['7.8 oz. 50/50 cotton/poly blend','1×1 ribbing at collar, cuffs, and waistband','Smooth exterior for clean printing','Relaxed fit']},
  {id:10,name:'District DT1100 Perfect Tri Tee',brand:'District',sku:'DT1100',cat:'T-Shirts',tag:'sale',tiers:'tshirt',reviews:565,rating:4,
   colors:['#1a1a1a','#cc2222','#1a4db5','#888','#2d8a3e'],
   sizes:['XS','S','M','L','XL','2XL'],minQty:1,
   desc:'4.3 oz. 50/25/25 poly/ring-spun combed cotton/rayon. Heathered texture. Slightly fitted side-seamed silhouette.',
   features:['4.3 oz. tri-blend fabric','Heathered look and texture','Side-seamed construction','Slightly fitted silhouette']},
  {id:11,name:'Sport-Tek ST850 Pullover Hooded Sweatshirt',brand:'Sport-Tek',sku:'ST850',cat:'Hoodies',tag:'new',tiers:'hoodie',reviews:320,rating:5,
   colors:['#1a1a1a','#888','#1a4db5','#cc2222','#2d8a3e'],
   sizes:['XS','S','M','L','XL','2XL','3XL'],minQty:1,
   desc:'7.2 oz., 80/20 cotton/poly fleece. Moisture-wicking. Kangaroo pocket. Double-lined hood.',
   features:['7.2 oz. 80/20 cotton/poly fleece','Moisture-wicking performance','Kangaroo pocket','Double-lined hood']},
  {id:12,name:'Next Level 3600 Premium Cotton Tee',brand:'Next Level',sku:'NL3600',cat:'T-Shirts',tag:'',tiers:'tshirt',reviews:410,rating:5,
   colors:['#1a1a1a','#ffffff','#cc2222','#1a4db5','#6b3fa0','#888'],
   sizes:['XS','S','M','L','XL','2XL'],minQty:1,
   desc:'4.3 oz., 100% ring-spun cotton. Side-seamed. Retail fit. Soft, durable, and great for custom printing.',
   features:['4.3 oz. 100% ring-spun cotton','Side-seamed retail fit','Tear-away label','Excellent print surface']},
];

const PAGE_SIZE = 8;

let activeCat = 'All';
let activeTag = '';
let currentPage = 1;
let searchQ = '';
let cart = [];
let openProd = null;
let mQty = 24;
let mColorIdx = 0;
let mSize = 'L';

/* ─── PRICING HELPERS ─── */
function getTierPrice(key, qty){
  const t = TIERS[key];
  let p = t[0][1];
  for(const [min,price] of t) if(qty >= min) p = price;
  return p;
}
function getLowestPrice(key){ const t = TIERS[key]; return t[t.length-1][1]; }
function getStartPrice(key){ return TIERS[key][0][1]; }

/* ─── INIT ─── */
function init(){
  renderCatTiles();
  renderFilterBtns();
  renderProducts();
  buildFaq();
  document.getElementById('cartBtn').addEventListener('click', openCart);
}

/* ─── CATEGORY TILES ─── */
const CAT_COLORS = {'All':'#e8f4f8','T-Shirts':'#e8f4f8','Hoodies':'#f0ece8','Polos':'#e8f0e8','Tank Tops':'#f8f0e8','Outerwear':'#eeeef8'};
const CAT_SVG = {
  'All':'<rect x="8" y="8" width="18" height="18" rx="2" fill="none" stroke="#555" stroke-width="2"/><rect x="28" y="8" width="18" height="18" rx="2" fill="none" stroke="#555" stroke-width="2"/><rect x="8" y="28" width="18" height="18" rx="2" fill="none" stroke="#555" stroke-width="2"/><rect x="28" y="28" width="18" height="18" rx="2" fill="none" stroke="#555" stroke-width="2"/>',
  'T-Shirts':'<path d="M14 8L4 18l8 4v22h24V22l8-4L34 8q-7-5-12 0-5-5-8 0z" fill="#bdd6e6" stroke="#7aaabf" stroke-width="1.5"/>',
  'Hoodies':'<path d="M12 8L2 18l8 4v24h28V22l8-4L34 8q-7-3-12 2-5-3-10-2z" fill="#d6c8be" stroke="#a89080" stroke-width="1.5"/><path d="M22 8q5 10 8 8" fill="none" stroke="#a89080" stroke-width="2"/>',
  'Polos':'<path d="M14 8L4 18l8 4v22h24V22l8-4L34 8q-7-5-12 0-5-5-8 0z" fill="#b8d4b8" stroke="#7aaa7a" stroke-width="1.5"/><line x1="21" y1="8" x2="21" y2="24" stroke="#7aaa7a" stroke-width="2"/><line x1="27" y1="8" x2="27" y2="24" stroke="#7aaa7a" stroke-width="2"/>',
  'Tank Tops':'<path d="M18 8L8 14l6 4v26h20V18l6-4L30 8q-6 6-12 0z" fill="#e8d4b8" stroke="#c0a070" stroke-width="1.5"/>',
  'Outerwear':'<path d="M12 8L2 18l8 4v24h28V22l8-4L34 8q-7-3-12 2-5-3-10-2z" fill="#c8c8e0" stroke="#8888c0" stroke-width="1.5"/><line x1="24" y1="10" x2="24" y2="46" stroke="#8888c0" stroke-width="2"/>',
};

function renderCatTiles(){
  const counts = {All:PRODUCTS.length};
  PRODUCTS.forEach(p => counts[p.cat] = (counts[p.cat]||0)+1);
  document.getElementById('catTiles').innerHTML = CATS.map(c => `
    <div class="cat-tile ${activeCat===c?'active':''}" onclick="filterCat('${c}')">
      <div class="cat-tile-bg" style="background:${CAT_COLORS[c]||'#e8eef4'}"></div>
      <svg class="cat-tile-img" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" style="position:absolute;inset:0;width:100%;height:100%;opacity:.45">${CAT_SVG[c]||''}</svg>
      <div class="cat-tile-overlay"></div>
      <div class="cat-tile-label">${c}</div>
    </div>
  `).join('');
}

function filterCat(c){
  activeCat = c; activeTag = ''; currentPage = 1;
  updateNavActive(c);
  renderCatTiles();
  renderFilterBtns();
  renderProducts();
  document.getElementById('gridTitle').textContent = c === 'All' ? 'Our Bestsellers' : c;
  document.getElementById('products-section').scrollIntoView({behavior:'smooth'});
}

function applyTag(t){ activeTag = t; currentPage = 1; renderProducts(); document.getElementById('products-section').scrollIntoView({behavior:'smooth'}); }

function updateNavActive(c){
  document.querySelectorAll('.nav-link').forEach(el => {
    el.classList.toggle('active', el.textContent.trim().startsWith(c) || (c==='All' && el.textContent.trim()==='All Products'));
  });
}

function renderFilterBtns(){
  document.getElementById('filterBtns').innerHTML = [['','All'],['hot','Best Sellers'],['new','New Arrivals'],['sale','On Sale']].map(([t,label]) =>
    `<button class="filter-btn ${activeTag===t?'active':''}" onclick="applyTag('${t}')">${label}</button>`
  ).join('');
}

/* ─── SEARCH ─── */
function handleSearch(){ searchQ = document.getElementById('searchInput').value.toLowerCase().trim(); currentPage=1; renderProducts(); }

/* ─── FILTER + SORT ─── */
function getFiltered(){
  let list = PRODUCTS.filter(p => {
    if(activeCat !== 'All' && p.cat !== activeCat) return false;
    if(activeTag && p.tag !== activeTag) return false;
    if(searchQ && !p.name.toLowerCase().includes(searchQ) && !p.brand.toLowerCase().includes(searchQ) && !p.sku.toLowerCase().includes(searchQ)) return false;
    return true;
  });
  const sort = document.getElementById('sortSel').value;
  if(sort==='price-asc') list.sort((a,b)=>getLowestPrice(a.tiers)-getLowestPrice(b.tiers));
  else if(sort==='price-desc') list.sort((a,b)=>getLowestPrice(b.tiers)-getLowestPrice(a.tiers));
  else if(sort==='az') list.sort((a,b)=>a.name.localeCompare(b.name));
  return list;
}

/* ─── GARMENT SVG ─── */
function garmentSVG(cat, color){
  const c = color || '#888';
  const dark = 'rgba(0,0,0,0.12)';
  if(cat==='T-Shirts'||cat==='Tank Tops')
    return `<svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" width="100" height="100"><path d="M30 22L8 42l16 6v46h52V48l16-6L70 22C62 12 50 12 50 22 50 12 38 12 30 22z" fill="${c}" stroke="${dark}" stroke-width="2"/></svg>`;
  if(cat==='Hoodies')
    return `<svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" width="100" height="100"><path d="M28 22L6 42l16 6v46h68V48l16-6L88 22C78 14 65 14 60 22 55 14 42 14 32 22z" fill="${c}" stroke="${dark}" stroke-width="2"/><path d="M46 22C50 34 70 34 74 22" fill="none" stroke="${dark}" stroke-width="2"/><rect x="44" y="62" width="32" height="16" rx="4" fill="${dark}"/></svg>`;
  if(cat==='Polos')
    return `<svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" width="100" height="100"><path d="M32 22L10 42l16 6v46h68V48l16-6L88 22C78 14 65 14 60 22 55 14 42 14 32 22z" fill="${c}" stroke="${dark}" stroke-width="2"/><line x1="55" y1="22" x2="55" y2="40" stroke="${dark}" stroke-width="2"/><line x1="65" y1="22" x2="65" y2="40" stroke="${dark}" stroke-width="2"/></svg>`;
  return `<svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" width="100" height="100"><path d="M28 22L6 42l16 6v46h68V48l16-6L88 22C78 14 65 14 60 22 55 14 42 14 32 22z" fill="${c}" stroke="${dark}" stroke-width="2"/><line x1="60" y1="22" x2="60" y2="94" stroke="${dark}" stroke-width="2"/><rect x="16" y="50" width="20" height="24" rx="3" fill="${dark}"/><rect x="84" y="50" width="20" height="24" rx="3" fill="${dark}"/></svg>`;
}

/* ─── RENDER PRODUCTS ─── */
function renderProducts(){
  const list = getFiltered();
  const total = list.length;
  const pages = Math.max(1, Math.ceil(total/PAGE_SIZE));
  if(currentPage > pages) currentPage = 1;
  const slice = list.slice((currentPage-1)*PAGE_SIZE, currentPage*PAGE_SIZE);
  document.getElementById('resultInfo').innerHTML = `Showing <strong>${Math.min(1+(currentPage-1)*PAGE_SIZE,total)}–${Math.min(currentPage*PAGE_SIZE,total)}</strong> of <strong>${total}</strong> products`;

  if(!slice.length){
    document.getElementById('productGrid').innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:56px;color:#aaa"><p style="font-size:16px;font-weight:700;margin-bottom:8px">No products found</p><p style="font-size:13px">Try a different search or filter.</p></div>`;
    document.getElementById('pagination').innerHTML = '';
    return;
  }

  document.getElementById('productGrid').innerHTML = slice.map(p => {
    const lowestP = getLowestPrice(p.tiers);
    const stars = '★'.repeat(p.rating) + (p.rating<5?'☆'.repeat(5-p.rating):'');
    return `
    <div class="product-card" onclick="openModal(${p.id})">
      <div class="pc-img-wrap" style="background:#ebebeb">
        ${garmentSVG(p.cat, p.colors[0])}
        ${p.tag==='sale'?'<div class="pc-tag tag-sale">Sale</div>':p.tag==='new'?'<div class="pc-tag tag-new">New</div>':p.tag==='hot'?'<div class="pc-tag tag-hot">Best Seller</div>':''}
      </div>
      <div class="pc-body">
        <div class="pc-stars">
          <span class="stars">${stars}</span>
          <span class="review-count">${p.reviews.toLocaleString()} Reviews</span>
        </div>
        <div class="pc-name">${p.name}</div>
        <div class="pc-meta">
          <span>SKU: ${p.sku}</span>
          <span class="pc-meta-sep">|</span>
          <span>Min Qty: ${p.minQty}</span>
        </div>
        <div class="pc-colors">
          ${p.colors.slice(0,7).map(c=>`<div class="pc-swatch${c==='#ffffff'?' white-swatch':''}" style="background:${c}" title="${c}"></div>`).join('')}
          ${p.colors.length>7?`<span class="pc-more-colors">+${p.colors.length-7} more</span>`:''}
        </div>
        <div class="pc-price-row">
          <span class="pc-as-low">As low as</span>
          <span class="pc-price">$${lowestP.toFixed(2)}</span>
          <span class="pc-ea">ea</span>
        </div>
        <button class="pc-btn" onclick="event.stopPropagation();openModal(${p.id})">Customize &amp; Order</button>
      </div>
    </div>`;
  }).join('');

  renderPagination(pages);
}

/* ─── PAGINATION ─── */
function renderPagination(pages){
  if(pages<=1){document.getElementById('pagination').innerHTML='';return;}
  let h = '';
  if(currentPage>1) h+=`<button class="pg-btn" onclick="goPage(${currentPage-1})">&lsaquo;</button>`;
  for(let i=1;i<=pages;i++){
    if(i===1||i===pages||Math.abs(i-currentPage)<=1) h+=`<button class="pg-btn ${i===currentPage?'active':''}" onclick="goPage(${i})">${i}</button>`;
    else if(Math.abs(i-currentPage)===2) h+=`<button class="pg-btn" style="pointer-events:none;border:none;background:transparent">…</button>`;
  }
  if(currentPage<pages) h+=`<button class="pg-btn" onclick="goPage(${currentPage+1})">&rsaquo;</button>`;
  document.getElementById('pagination').innerHTML = h;
}
function goPage(p){ currentPage=p; renderProducts(); document.getElementById('products-section').scrollIntoView({behavior:'smooth'}); }

/* ─── MODAL ─── */
function openModal(id){
  openProd = PRODUCTS.find(p=>p.id===id);
  mQty = 24; mColorIdx = 0;
  mSize = openProd.sizes.includes('L')?'L':openProd.sizes[0];
  renderModal();
  document.getElementById('modalOverlay').classList.add('open');
}
function handleModalBg(e){ if(e.target===document.getElementById('modalOverlay')) document.getElementById('modalOverlay').classList.remove('open'); }

function renderModal(){
  const p = openProd;
  const tiers = TIERS[p.tiers];
  const unitP = getTierPrice(p.tiers, mQty);
  const totalEst = (unitP * mQty).toFixed(2);
  const stars = '★'.repeat(p.rating)+(p.rating<5?'☆'.repeat(5-p.rating):'');
  document.getElementById('modalBox').innerHTML = `
    <button class="modal-close" onclick="document.getElementById('modalOverlay').classList.remove('open')">&#x2715;</button>
    <div class="modal-img-col">
      ${garmentSVG(p.cat, p.colors[mColorIdx])}
      <div class="modal-color-swatches">
        ${p.colors.map((c,i)=>`<div class="modal-swatch${i===mColorIdx?' active':''}${c==='#ffffff'?' white-sw':''}" style="background:${c}" onclick="selMColor(${i})" title="${c}"></div>`).join('')}
      </div>
    </div>
    <div class="modal-body">
      <div class="modal-brand">${p.brand}</div>
      <div class="modal-name">${p.name}</div>
      <div class="modal-sku">Style# ${p.sku} &nbsp;|&nbsp; Min Qty: ${p.minQty}</div>
      <div class="modal-stars">
        <span style="color:var(--star);font-size:14px">${stars}</span>
        <span style="font-size:12px;color:var(--gray-text);font-weight:600">${p.reviews.toLocaleString()} Reviews</span>
      </div>
      <p class="modal-desc">${p.desc}</p>

      <div style="margin-bottom:14px">
        <div class="modal-label">Size</div>
        <div class="size-row">${p.sizes.map(s=>`<button class="sz-btn${s===mSize?' active':''}" onclick="selMSize('${s}')">${s}</button>`).join('')}</div>
      </div>

      <div style="margin-bottom:14px">
        <div class="modal-label">Bulk Pricing — Price Per Item</div>
        <table class="bulk-table">
          <thead><tr><th>Quantity</th><th>Price Per Item</th><th>Estimated Total</th></tr></thead>
          <tbody>
            ${tiers.map(([minQ,price],i)=>{
              const nextMin = tiers[i+1]?tiers[i+1][0]:null;
              const range = nextMin?`${minQ}–${nextMin-1}`:`${minQ}+`;
              const isActive = mQty>=minQ&&(!nextMin||mQty<nextMin);
              const isBest = i===tiers.length-1;
              return `<tr${isActive?' class="active-tier"':''}>
                <td>${range}</td>
                <td class="price-col">$${price.toFixed(2)}/ea${isBest?'<span class="best-tag">BEST</span>':''}</td>
                <td>$${(price*(isActive?mQty:minQ)).toFixed(2)}${isActive?' (est.)':''}</td>
              </tr>`;
            }).join('')}
          </tbody>
        </table>
      </div>

      <div class="qty-section">
        <div class="modal-label">Quantity</div>
        <div class="qty-row-modal">
          <input class="qty-inp" type="number" min="1" value="${mQty}" id="mQtyInp" oninput="updateMQty()"/>
          <div class="qty-calc-display">= <strong>$${unitP.toFixed(2)}/ea</strong><br>Est. total: <strong>$${totalEst}</strong></div>
        </div>
      </div>

      <button class="modal-add-btn" onclick="addFromModal()">Add to Cart — $${unitP.toFixed(2)}/ea &times; ${mQty} pcs = $${totalEst}</button>

      <div class="modal-features">
        ${p.features.map(f=>`<div class="modal-feat">${f}</div>`).join('')}
      </div>
      <div class="artwork-note">Upload your custom artwork at checkout — PNG, PDF, SVG, or AI file. A free digital proof is sent before production begins.</div>
    </div>`;
}
function selMColor(i){ mColorIdx=i; renderModal(); }
function selMSize(s){ mSize=s; renderModal(); }
function updateMQty(){ const v=parseInt(document.getElementById('mQtyInp').value)||1; mQty=Math.max(1,v); renderModal(); }
function addFromModal(){ const up=getTierPrice(openProd.tiers,mQty); addToCart(openProd,mSize,openProd.colors[mColorIdx],mQty,up); document.getElementById('modalOverlay').classList.remove('open'); }

/* ─── CART ─── */
function addToCart(p,size,color,qty,unitP){
  const key=`${p.id}-${size}-${color}`;
  const ex=cart.find(c=>c.key===key);
  if(ex){ ex.qty+=qty; ex.unitP=getTierPrice(p.tiers,ex.qty); }
  else cart.push({key,product:p,size,color,qty,unitP});
  updateBadge();
  toast(`Added ${qty} pcs of ${p.name} — $${unitP.toFixed(2)}/ea`);
}
function updateBadge(){ document.getElementById('cartBadge').textContent=cart.reduce((s,c)=>s+c.qty,0); }
function openCart(){ document.getElementById('drawerOverlay').classList.add('open'); document.getElementById('cartDrawer').classList.add('open'); renderCart(); }
function closeCart(){ document.getElementById('drawerOverlay').classList.remove('open'); document.getElementById('cartDrawer').classList.remove('open'); }

function renderCart(){
  const el=document.getElementById('cdItems'), foot=document.getElementById('cdFoot');
  if(!cart.length){
    el.innerHTML=`<div class="cd-empty"><svg viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg><h3>Your cart is empty</h3><p>Browse our products to get started.</p></div>`;
    foot.innerHTML='';return;
  }
  el.innerHTML=cart.map((c,i)=>`
    <div class="cd-item">
      <div class="cdi-img">${garmentSVG(c.product.cat,c.color)}</div>
      <div class="cdi-info">
        <div class="cdi-name">${c.product.name}</div>
        <div class="cdi-sub">Size: ${c.size} &nbsp;·&nbsp; <span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:${c.color};border:1px solid #ccc;vertical-align:middle"></span></div>
        <div class="cdi-row">
          <div class="qty-row"><button class="q-btn" onclick="chgCQty(${i},-1)">&#8722;</button><span class="q-num">${c.qty}</span><button class="q-btn" onclick="chgCQty(${i},1)">+</button></div>
          <div><div class="cdi-price">$${(c.unitP*c.qty).toFixed(2)}</div><div class="cdi-unit">$${c.unitP.toFixed(2)}/ea</div></div>
          <button class="cdi-remove" onclick="removeCI(${i})">Remove</button>
        </div>
      </div>
    </div>`).join('');
  const sub=cart.reduce((s,c)=>s+c.unitP*c.qty,0);
  const totalQty=cart.reduce((s,c)=>s+c.qty,0);
  const ship=totalQty>=50?0:14.99;
  foot.innerHTML=`<div class="cd-foot">
    ${ship===0?`<div style="background:#f0fff4;border:1px solid #bbe;border-radius:4px;padding:8px 12px;font-size:12px;font-weight:700;color:var(--green);margin-bottom:10px">Free shipping applied — 50+ items!</div>`
    :`<div style="background:var(--off-white);border:1px solid var(--gray-border);border-radius:4px;padding:8px 12px;font-size:12px;color:var(--gray-text);margin-bottom:10px;font-weight:600">Add ${50-totalQty} more items for free shipping</div>`}
    <div class="cd-row"><span class="cd-row-label">Items (${totalQty} pcs)</span><span class="cd-row-val">$${sub.toFixed(2)}</span></div>
    <div class="cd-row"><span class="cd-row-label">Shipping</span><span class="cd-row-val" style="color:${ship===0?'var(--green)':'inherit'}">${ship===0?'FREE':'$'+ship.toFixed(2)}</span></div>
    <div class="cd-total"><span class="cd-total-label">Estimated Total</span><span class="cd-total-val">$${(sub+ship).toFixed(2)}</span></div>
    <button class="cd-checkout" onclick="toast('Secure checkout coming soon!')">Proceed to Checkout</button>
    <button class="cd-continue" onclick="closeCart()">Continue Shopping</button>
    <div class="cd-note">Design upload &amp; free proof approval at checkout</div>
  </div>`;
}
function chgCQty(i,d){ cart[i].qty=Math.max(1,cart[i].qty+d); cart[i].unitP=getTierPrice(cart[i].product.tiers,cart[i].qty); updateBadge(); renderCart(); }
function removeCI(i){ cart.splice(i,1); updateBadge(); renderCart(); }

/* ─── FAQ ─── */
const FAQS = [
  {q:'When can I expect my order?',a:'Standard production and shipping is 3–5 business days. Rush production and expedited shipping options are available at checkout. You will receive a tracking number once your order ships.'},
  {q:'What is your minimum order quantity?',a:'We have no minimum order quantity — you can order as few as 1 piece. However, bulk pricing kicks in at 12 pieces and continues to improve up to 144+ pieces.'},
  {q:'Where are you located?',a:'We are based in Houston, TX and ship to all 50 states. Orders typically leave our facility within 2 business days after design proof approval.'},
  {q:'Do you accept purchase orders?',a:'Yes, we accept purchase orders from schools, government agencies, and qualified businesses. Contact our sales team for details.'},
  {q:'How do I place an order?',a:'Browse our products, select your size and color, enter your quantity, and proceed to checkout. You will upload your artwork file during checkout and we will send a free digital proof for your approval before production begins.'},
];
function buildFaq(){
  document.getElementById('faqList').innerHTML = FAQS.map((f,i)=>`
    <div class="faq-item" id="faq${i}">
      <div class="faq-q" onclick="toggleFaq(${i})">${f.q}<svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg></div>
      <div class="faq-a">${f.a}</div>
    </div>`).join('');
}
function toggleFaq(i){ document.getElementById(`faq${i}`).classList.toggle('open'); }

/* ─── SUBSCRIBE ─── */
function handleSubscribe(){
  const v=document.getElementById('subEmail').value;
  if(v&&v.includes('@')){ toast('Subscribed! Check your email for your 10% off code.'); document.getElementById('subEmail').value=''; }
  else toast('Please enter a valid email address.');
}

/* ─── TOAST ─── */
let toastTimer;
function toast(msg){
  clearTimeout(toastTimer);
  document.getElementById('toastMsg').textContent=msg;
  const el=document.getElementById('toastEl');
  el.classList.add('show');
  toastTimer=setTimeout(()=>el.classList.remove('show'),3200);
}

init();
