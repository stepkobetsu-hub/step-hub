(() => {
  "use strict";

  const assets = Array.isArray(window.STEP_ASSETS) ? window.STEP_ASSETS : [];
  const meta = window.STEP_PORTAL_META || {};
  const $ = (id) => document.getElementById(id);

  const state = { query: "", category: "", status: "" };

  function safe(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;")
      .replace(/>/g, "&gt;").replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function validUrl(url) {
    return /^https?:\/\//i.test(String(url || ""));
  }

  function copyUrl(url, button) {
    navigator.clipboard.writeText(url).then(() => {
      const old = button.textContent;
      button.textContent = "コピー済み";
      setTimeout(() => button.textContent = old, 1200);
    }).catch(() => window.prompt("URLをコピーしてください", url));
  }

  function actionRow(link) {
    if (!link || !validUrl(link.url)) return "";
    const label = safe(link.label || "開く");
    const url = safe(link.url);
    return `<div class="action-row">
      <span class="action-label">${label}</span>
      <div class="action-buttons">
        <a class="btn open" href="${url}" target="_blank" rel="noopener noreferrer">開く</a>
        <button class="btn copy" type="button" data-copy="${url}">URLをコピー</button>
      </div>
    </div>`;
  }

  function groupLinks(asset) {
    const groups = {};
    (asset.links || []).filter(link => asset.id !== "qr-register" || !/^なし(?:（|$)/.test(String(asset.appsScriptType || "")) || !/Apps Script/i.test(String(link.label || ""))).forEach(link => {
      const group = link.group || "利用する";
      if (!groups[group]) groups[group] = [];
      groups[group].push(link);
    });
    return groups;
  }

  function card(asset) {
    const groups = groupLinks(asset);
    const groupHtml = Object.entries(groups).map(([name, links]) => {
      const rows = links.map(actionRow).join("");
      return rows ? `<section class="action-group"><h3>【${safe(name)}】</h3>${rows}</section>` : "";
    }).join("");

    const m = asset.maintenance || {};
    const notes = [
      asset.storage && !(asset.id === "qr-register" && [asset.sourceOfTruth, asset.spreadsheetId].some(value => value && !String(value).includes("要確認")) && String(asset.storage).includes("要確認")) ? `保存先：${asset.storage}` : "",
      asset.sourceFile ? `ソース：${asset.sourceFile}` : "",
      m.lastVerified ? `更新日：${m.lastVerified}` : "",
      m.latestStatus ? `確認状況：${m.latestStatus}` : ""
    ].filter(Boolean).join("　");

    return `<article class="system-card">
      <div class="card-head">
        <div>
          <h2>${safe(asset.name)}</h2>
          <p class="meta">${safe(asset.category || "未分類")} / 利用者：${safe(asset.users || "要確認")} / 担当：${safe(m.owner || "要確認")}</p>
        </div>
        <span class="status ${safe(asset.status || "要確認")}">${safe(asset.status || "要確認")}</span>
      </div>
      <p class="summary">${safe(asset.summary || "")}</p>
      ${groupHtml || '<p class="no-link">登録済みのリンクはありません。</p>'}
      <p class="maintenance">${safe(notes)}</p>
      ${asset.notes ? `<p class="notes">${safe(asset.notes)}</p>` : ""}
    </article>`;
  }

  function filtered() {
    const q = state.query.trim().toLowerCase();
    return assets.filter(a => {
      const hay = JSON.stringify(a).toLowerCase();
      return (!q || hay.includes(q))
        && (!state.category || a.category === state.category)
        && (!state.status || a.status === state.status);
    });
  }

  function render() {
    const list = filtered();
    $("count").textContent = `${list.length}件 / 全${assets.length}件`;
    $("grid").innerHTML = list.map(card).join("") || '<p class="empty">該当するシステムはありません。</p>';
    document.querySelectorAll("[data-copy]").forEach(btn => {
      btn.addEventListener("click", () => copyUrl(btn.dataset.copy, btn));
    });
  }

  function fillFilters() {
    [...new Set(assets.map(a => a.category).filter(Boolean))].sort().forEach(v => {
      $("category").insertAdjacentHTML("beforeend", `<option value="${safe(v)}">${safe(v)}</option>`);
    });
    [...new Set(assets.map(a => a.status).filter(Boolean))].sort().forEach(v => {
      $("status").insertAdjacentHTML("beforeend", `<option value="${safe(v)}">${safe(v)}</option>`);
    });
  }

  $("search").addEventListener("input", e => { state.query = e.target.value; render(); });
  $("category").addEventListener("change", e => { state.category = e.target.value; render(); });
  $("status").addEventListener("change", e => { state.status = e.target.value; render(); });
  $("clear").addEventListener("click", () => {
    state.query = state.category = state.status = "";
    $("search").value = $("category").value = $("status").value = "";
    render();
  });

  $("version").textContent = `Ver.${meta.version || "-"} / 更新 ${meta.updatedAt || "-"}`;
  fillFilters();
  render();
})();
