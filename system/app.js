
const assets = window.STEP_ASSETS || [];
const $ = (s) => document.querySelector(s);
const cards = $("#cards");
const template = $("#cardTemplate");
const searchInput = $("#searchInput");
const categoryFilter = $("#categoryFilter");
const statusFilter = $("#statusFilter");
const categoryNav = $("#categoryNav");

const categories = [...new Set(assets.map(x => x.category))];
const statuses = [...new Set(assets.map(x => x.status))];

categories.forEach(v => categoryFilter.add(new Option(v, v)));
statuses.forEach(v => statusFilter.add(new Option(v, v)));

function linkButton(label, url) {
  if (!url || !/^https?:\/\//.test(url)) return null;
  const a = document.createElement("a");
  a.href = url; a.target = "_blank"; a.rel = "noopener";
  a.textContent = label;
  return a;
}

function renderNav(){
  categoryNav.innerHTML = "";
  const all = document.createElement("button");
  all.textContent = "すべて"; all.dataset.category = "";
  categoryNav.appendChild(all);
  categories.forEach(c => {
    const b = document.createElement("button");
    b.textContent = c; b.dataset.category = c;
    categoryNav.appendChild(b);
  });
  updateNavActive();
}
function updateNavActive(){
  categoryNav.querySelectorAll("button").forEach(b => b.classList.toggle("active", b.dataset.category === categoryFilter.value));
}
categoryNav.addEventListener("click", e => {
  if(e.target.tagName !== "BUTTON") return;
  categoryFilter.value = e.target.dataset.category;
  updateNavActive(); render();
});

function matches(asset){
  const q = searchInput.value.trim().toLowerCase();
  const hay = Object.values(asset).join(" ").toLowerCase();
  return (!q || hay.includes(q))
    && (!categoryFilter.value || asset.category === categoryFilter.value)
    && (!statusFilter.value || asset.status === statusFilter.value);
}

function render(){
  cards.innerHTML = "";
  const list = assets.filter(matches);
  $("#resultCount").textContent = `${list.length}件`;
  $("#empty").hidden = list.length > 0;
  list.forEach(asset => {
    const node = template.content.cloneNode(true);
    node.querySelector(".category").textContent = asset.category;
    node.querySelector("h3").textContent = asset.name;
    const status = node.querySelector(".status");
    status.textContent = asset.status; status.dataset.status = asset.status;
    node.querySelector(".summary").textContent = asset.summary;
    node.querySelector(".users").textContent = asset.users || "未確認";
    node.querySelector(".storage").textContent = asset.storage || "未確認";
    node.querySelector(".notes").textContent = asset.notes || "なし";
    const links = node.querySelector(".links");
    [
      [asset.publicLabel || "アプリを開く", asset.publicUrl],
      ["GitHub", asset.github],
    ].forEach(([label,url]) => {
      const a = linkButton(label,url);
      if(a) links.appendChild(a);
    });
    if(!links.children.length) links.textContent = "リンク未登録";
    cards.appendChild(node);
  });
  updateNavActive();
}
[searchInput, categoryFilter, statusFilter].forEach(el => el.addEventListener("input", render));
$("#resetBtn").addEventListener("click", () => {
  searchInput.value = ""; categoryFilter.value = ""; statusFilter.value = ""; render();
});

const counts = {
  "登録": assets.length,
  "本番": assets.filter(x => x.status === "本番").length,
  "要確認": assets.filter(x => x.status.includes("確認") || x.status.includes("特定") || x.status.includes("候補")).length
};
$("#summary").innerHTML = Object.entries(counts).map(([k,v]) => `<span class="count-chip">${k} ${v}件</span>`).join("");
renderNav(); render();
