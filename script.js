const WHATSAPP = "221787560327";
const products = [
 {id:1,name:"iPhone 17",category:"iPhone 17",desc:"Écran 6,3 pouces · Nouvelle génération",badge:"GAMME 17",image:"assets/iphone-17.jpg"},
 {id:2,name:"iPhone 17 Air",category:"iPhone 17",desc:"Design fin et léger",badge:"ULTRA FIN",image:"assets/iphone-17-air.jpg"},
 {id:3,name:"iPhone 17 Pro",category:"iPhone 17",desc:"Performances avancées · Système photo Pro",badge:"PRO",image:"assets/iphone-17-pro.jpg"},
 {id:4,name:"iPhone 17 Pro Max",category:"iPhone 17",desc:"Grand écran · Expérience premium",badge:"PRO MAX",image:"assets/iphone-17-pro-max.jpg"},
 {id:5,name:"iPhone Ultra",category:"iPhone 18",desc:"Modèle présenté dans la référence fournie · disponibilité à confirmer",badge:"À CONFIRMER",image:"assets/iphone-ultra.jpg"},
 {id:6,name:"iPhone 18 Pro Max",category:"iPhone 18",desc:"Configuration et disponibilité à confirmer",badge:"PRO MAX",image:"assets/iphone-18-pro-max.jpg"},
 {id:7,name:"iPhone 18 Pro",category:"iPhone 18",desc:"Configuration et disponibilité à confirmer",badge:"PRO",image:"assets/iphone-18-pro.jpg"}
];
let activeCategory = "Tous";
const grid = document.getElementById("productGrid");
const search = document.getElementById("searchInput");
const empty = document.getElementById("emptyState");
const modelOptions = {
 "iPhone 17": products.filter(p=>p.category==="iPhone 17").map(p=>p.name),
 "iPhone 18": products.filter(p=>p.category==="iPhone 18").map(p=>p.name)
};
function renderProducts(){
 const q=search.value.trim().toLowerCase();
 const filtered=products.filter(p=>(activeCategory==="Tous"||p.category===activeCategory)&&(`${p.name} ${p.category} ${p.desc}`).toLowerCase().includes(q));
 grid.innerHTML=filtered.map(p=>`<article class="product-card">
  <div class="product-art"><span class="product-badge">${p.badge}</span><img class="product-photo" src="${p.image}" alt="${p.name}" loading="lazy"></div>
  <div class="product-info"><span class="product-category">${p.category}</span><h3>${p.name}</h3><p class="product-desc">${p.desc}</p>
  <div class="product-price">Prix sur demande</div>
  <div class="product-actions"><button class="add-btn" data-choose="${p.id}">Choisir ce modèle ↗</button></div></div></article>`).join("");
 empty.hidden=filtered.length>0;
 grid.hidden=filtered.length===0;
}
function updateModels(selected=""){
 const range=document.getElementById("orderRange").value;
 const select=document.getElementById("orderModel");
 select.innerHTML='<option value="">Choisir un modèle</option>'+(modelOptions[range]||[]).map(n=>`<option value="${n}">${n}</option>`).join("");
 if(selected && (modelOptions[range]||[]).includes(selected))select.value=selected;
}
document.querySelectorAll("[data-range-link]").forEach(link=>link.addEventListener("click",()=>{
 const range=link.dataset.rangeLink;
 activeCategory=range;
 document.querySelectorAll(".filter").forEach(x=>x.classList.toggle("active",x.dataset.category===range));
 renderProducts();
}));
document.getElementById("filters").addEventListener("click",e=>{
 const b=e.target.closest("[data-category]");if(!b)return;
 activeCategory=b.dataset.category;
 document.querySelectorAll(".filter").forEach(x=>x.classList.toggle("active",x===b));
 renderProducts();
});
search.addEventListener("input",renderProducts);
document.getElementById("resetSearch").addEventListener("click",()=>{
 search.value="";activeCategory="Tous";
 document.querySelectorAll(".filter").forEach(x=>x.classList.toggle("active",x.dataset.category==="Tous"));
 renderProducts();
});
grid.addEventListener("click",e=>{
 const b=e.target.closest("[data-choose]");if(!b)return;
 const p=products.find(x=>x.id===Number(b.dataset.choose));
 document.getElementById("orderRange").value=p.category;
 updateModels(p.name);
 document.getElementById("commande").scrollIntoView({behavior:"smooth",block:"start"});
});
document.getElementById("orderRange").addEventListener("change",()=>updateModels());
document.getElementById("orderForm").addEventListener("submit",e=>{
 e.preventDefault();
 const get=id=>document.getElementById(id).value.trim();
 const fields=[
  ["Gamme",get("orderRange")],["Modèle",get("orderModel")],["Stockage",get("orderStorage")],
  ["Couleur",get("orderColor")],["Quantité",get("orderQuantity")],["État recherché",get("orderCondition")],
  ["Nom",get("orderName")],["Téléphone",get("orderPhone")],["Précisions",get("orderNotes")||"Aucune"]
 ];
 const message="Bonjour AL WALEED SUARL, je souhaite demander un devis pour un iPhone.\n\n"+
 fields.map(([label,value])=>label+" : "+value).join("\n")+
 "\n\nMerci de me confirmer le prix en FCFA, la disponibilité, la garantie et le délai.";
 window.open("https://wa.me/"+WHATSAPP+"?text="+encodeURIComponent(message),"_blank","noopener");
});
document.getElementById("menuToggle").addEventListener("click",()=>document.getElementById("mainNav").classList.toggle("open"));
document.querySelectorAll("#mainNav a").forEach(a=>a.addEventListener("click",()=>document.getElementById("mainNav").classList.remove("open")));
document.getElementById("year").textContent=new Date().getFullYear();
renderProducts();
