// ネオン風のおばけ＋三目並べアイコン（画像ファイル不要）
const ghostIcon = `
  <svg viewBox="0 0 200 120" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <g stroke="#22f3ff" stroke-width="3">
      <line x1="110" y1="20" x2="110" y2="104"/>
      <line x1="138" y1="20" x2="138" y2="104"/>
      <line x1="84" y1="48" x2="166" y2="48"/>
      <line x1="84" y1="76" x2="166" y2="76"/>
    </g>
    <g stroke="#ff2fd6" stroke-width="4">
      <line x1="90" y1="26" x2="104" y2="42"/><line x1="104" y1="26" x2="90" y2="42"/>
      <line x1="144" y1="82" x2="158" y2="98"/><line x1="158" y1="82" x2="144" y2="98"/>
    </g>
    <circle cx="124" cy="62" r="8" stroke="#b6ff3b" stroke-width="4"/>
    <path d="M22 100 V52 a28 28 0 0 1 56 0 V100 l-9 -8 -9 8 -10 -8 -10 8 -9 -8 z"
          stroke="#ffffff" stroke-width="4"/>
    <circle cx="40" cy="54" r="4" fill="#ffffff"/>
    <circle cx="60" cy="54" r="4" fill="#ffffff"/>
  </svg>`;

// ▼ ゲームを追加するときは、ここに { ... } を1つ増やすだけ
//   image に "images/xxx.png" を指定するとアイコンの代わりに画像が表示されます
const games = [
  {
    title: "Ghost Tic Tac Toe",
    description: "自分の置いた駒が消えていくマルバツゲーム。",
    url: "https://unityroom.com/games/ghost_tic_tac_toe",
    image: "",
    icon: ghostIcon
  },
  { comingSoon: true },
  { comingSoon: true }
];

const container = document.getElementById("games");
for (const g of games) {
  const card = document.createElement("article");

  if (g.comingSoon) {
    card.className = "card soon";
    card.innerHTML = `
      <div class="thumb"><span>?</span></div>
      <div class="card-body">
        <h2>Coming soon</h2>
        <p>新作を開発中です。お楽しみに！</p>
        <span class="play">COMING SOON</span>
      </div>`;
  } else {
    card.className = "card";
    const thumb = g.image ? `<img src="${g.image}" alt="${g.title}" />` : (g.icon || "");
    card.innerHTML = `
      <div class="thumb">${thumb}</div>
      <div class="card-body">
        <h2>${g.title}</h2>
        <p>${g.description}</p>
        <a class="play" href="${g.url}" target="_blank" rel="noopener">▶ PLAY</a>
      </div>`;
  }
  container.appendChild(card);
}
