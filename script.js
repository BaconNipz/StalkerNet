const STORAGE_KEY = "stalkernet_pda_v7";

const defaultMessages = [
  { id: id(), channel: "Zone Broadcast", sender: "Wolf", faction: "Loner", text: "Rookie Village is quiet for now. That never lasts. Keep your bolts handy.", time: "07:12" },
  { id: id(), channel: "Private", sender: "Sidorovich", faction: "Trader", text: "I have work for you. Nothing glorious, but glory doesn't buy sausage.", time: "07:33" },
  { id: id(), channel: "Unknown Signal", sender: "UNKNOWN", faction: "???", text: "Do not follow the song beneath the concrete. It remembers names.", time: "03:17" },
  { id: id(), channel: "Faction Channel", sender: "Duty Outpost", faction: "Duty", text: "Mutant movement reported near Garbage. Armed stalkers requested. Payment confirmed on proof of kill.", time: "08:01" }
];

const personaReplies = {
  Loner: ["Listen, friend. The Zone doesn't hate you. That would mean it cares.", "Check roofs, windows, tree lines. Bandits love lazy eyes.", "A bolt costs nothing. A leg costs more. Throw the bolt."],
  Trader: ["I can get it. You can pay for it. Beautiful system, yes?", "Bring me artifacts, documents, odd trinkets. Especially odd trinkets.", "No refunds in the Zone. The Zone doesn't refund me either."],
  Duty: ["The Zone must be contained. Curiosity gets men buried in unmarked dirt.", "Report mutant sightings immediately. Heroics are not strategy.", "Your weapon is filthy. Clean it before it jams and writes your obituary."],
  Freedom: ["Relax. Breathe. Then shoot whatever is making that noise.", "Duty sees a prison. I see a miracle with teeth.", "If the Zone wanted rules, it wouldn't have invented gravity wells."],
  Ecologist: ["Do not lick the artifact. I cannot believe this requires repeating.", "Anomaly readings suggest movement. Which is unfortunate, because anomalies should not move.", "Bring samples sealed, labelled, and preferably not screaming."],
  Monolith: ["The light is silent. The stone is patient.", "You walk in circles around the truth.", "Come closer. The centre is warm."]
};

const loreEntries = [
  { id: "bloodsucker", category: "Mutants", title: "Bloodsucker", threat: "Extreme", body: "A near-invisible predator usually found around abandoned villages, swamps, tunnels, and underground labs. Listen for heavy breathing and wet footfalls. Seeing nothing does not mean nothing is there." },
  { id: "snork", category: "Mutants", title: "Snork", threat: "High", body: "Twisted, leaping humanoid mutants. They attack in brutal lunges and often appear in places where the air tastes of old rubber, rust, and bad decisions." },
  { id: "controller", category: "Mutants", title: "Controller", threat: "Extreme", body: "A psychic mutant capable of disorienting or dominating the mind. Distance is survival. If your thoughts stop sounding like your own, run." },
  { id: "electro", category: "Anomalies", title: "Electro", threat: "High", body: "A crackling electrical anomaly often found near metal wreckage, tunnels, industrial yards, and damp ground. Throw bolts before crossing. Sparks are warnings, not decoration." },
  { id: "burner", category: "Anomalies", title: "Burner", threat: "High", body: "A thermal anomaly that can ignite the careless in a blink. Heat shimmer, ash, and scorched grass are your polite invitations to go elsewhere." },
  { id: "loners", category: "Factions", title: "Loners", threat: "Variable", body: "Independent stalkers trying to survive, trade, scavenge, and sometimes become legends. Trust is possible, but never free. Most know more than they say." },
  { id: "duty", category: "Factions", title: "Duty", threat: "Organised", body: "A militarised faction that believes the Zone is a plague to be contained or destroyed. Disciplined, armed, and not famous for their sense of humour." },
  { id: "freedom", category: "Factions", title: "Freedom", threat: "Organised", body: "A loose faction that believes the Zone should be studied, explored, or allowed to exist. Their camps often smell of gun oil, smoke, and argument." },
  { id: "moonlight", category: "Artifacts", title: "Moonlight", threat: "Useful", body: "An artifact associated with electrical anomalies. Valued by traders and stalkers who enjoy walking away from bad decisions with functioning organs." },
  { id: "cordon", category: "Locations", title: "Cordon", threat: "Moderate", body: "The southern fringe of the Zone. Rookies arrive here with cheap jackets, loud questions, and an impressive talent for dying near roads." },
  { id: "yantar", category: "Locations", title: "Yantar", threat: "Severe", body: "A research area known for psi danger, laboratories, and scientists who say alarming things in calm voices." }
];

const defaultTasks = [
  { id: id(), title: "Check the rail bridge", source: "Wolf", status: "Active", reward: "Ammo and local reputation" },
  { id: id(), title: "Recover sealed documents", source: "Sidorovich", status: "Active", reward: "Rubles, maybe a discount" },
  { id: id(), title: "Investigate strange broadcast", source: "Unknown Signal", status: "Unknown", reward: "Answers, or worse" }
];

const defaultProfile = {
  callsign: "Marked Rookie",
  faction: "Loner",
  rank: "Rookie",
  location: "Cordon",
  weapon: "Whatever still fires"
};

// Pixel-space template for a 3840 x 9788 vertical map.
// Replace these coordinates if your chosen map uses a different layout.
const MAP_CONFIG = {
  imageUrl: "assets/maps/WorldMap.jpg",
  fallbackWidth: 1600,
  fallbackHeight: 2400
};

const MAP_SECTIONS = [
  {
    "id": "world",
    "name": "World Map",
    "file": "assets/maps/WorldMap.jpg",
    "width": 1600,
    "height": 2400,
    "sourceY0": 0,
    "sourceY1": 2400
  },
  {
    "id": "meadow",
    "name": "Meadow",
    "file": "assets/maps/Meadow.jpg",
    "width": 1600,
    "height": 2400,
    "sourceY0": 0,
    "sourceY1": 2400
  },
  {
    "id": "swamp",
    "name": "Swamp",
    "file": "assets/maps/Swamp.jpg",
    "width": 1600,
    "height": 2400,
    "sourceY0": 0,
    "sourceY1": 2400
  },
  {
    "id": "cordon",
    "name": "Cordon",
    "file": "assets/maps/Cordon.jpg",
    "width": 1600,
    "height": 2400,
    "sourceY0": 0,
    "sourceY1": 2400
  },
  {
    "id": "darkscape",
    "name": "Darkscape",
    "file": "assets/maps/Darkscape.jpg",
    "width": 1600,
    "height": 2400,
    "sourceY0": 0,
    "sourceY1": 2400
  }
];

let currentSectionId = "world";

const defaultMapPoints = [
  // World map starter points. These are placeholders until we align your final world map.
  { id: "world_swamp", mapId: "world", name: "Swamp", type: "Location", x: 350, y: 1900, note: "Southern-west wetland region." },
  { id: "world_meadow", mapId: "world", name: "Meadow", type: "Location", x: 800, y: 1900, note: "Open southern travel route." },
  { id: "world_cordon", mapId: "world", name: "Cordon", type: "Location", x: 900, y: 2100, note: "Southern entry routes and rookie territory." },
  { id: "world_darkscape", mapId: "world", name: "Darkscape", type: "Danger", x: 1250, y: 2050, note: "Remote southern-east zone." },

  // Individual zone starter points.
  { id: "meadow_main", mapId: "meadow", name: "Meadow", type: "Location", x: 800, y: 1200, note: "Open terrain, road approaches, and scattered structures." },
  { id: "swamp_main", mapId: "swamp", name: "Swamp", type: "Location", x: 800, y: 1200, note: "Wetlands, bridges, reeds, and hidden paths." },
  { id: "cordon_main", mapId: "cordon", name: "Cordon", type: "Location", x: 800, y: 1200, note: "Rookie territory, roadways, and patrol routes." },
  { id: "darkscape_main", mapId: "darkscape", name: "Darkscape", type: "Danger", x: 800, y: 1200, note: "Remote road networks, river bends, and hostile isolation." }
];

let leafletMap = null;
let leafletMarkers = [];
let mapBounds = null;
let state = loadState() || {
  messages: defaultMessages,
  tasks: defaultTasks,
  profile: defaultProfile,
  customPins: [],
  activeMessageFilter: "All",
  activeLoreFilter: "All",
  activeMapFilter: "All",
  selectedMapId: "world_cordon",
  activeMapSection: "world"
};

function id() {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}
function nowTime() {
  return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}
function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}
function updateClock() {
  const date = new Date();
  document.getElementById("dateText").textContent = date.toLocaleDateString();
  document.getElementById("timeText").textContent = date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function updateHeaderProfile() {
  document.getElementById("headerCallsign").textContent = (state.profile.callsign || "UNKNOWN").toUpperCase();
  document.getElementById("headerLocation").textContent = (state.profile.location || "UNKNOWN").toUpperCase();
  document.getElementById("headerFaction").textContent = (state.profile.faction || "UNKNOWN").toUpperCase();
}
function switchTab(tabId) {
  document.querySelectorAll(".tab-panel").forEach(panel => panel.classList.remove("active"));
  document.querySelectorAll(".nav-btn").forEach(btn => btn.classList.remove("active"));
  document.getElementById(tabId).classList.add("active");
  document.querySelector(`[data-tab="${tabId}"]`).classList.add("active");
  if (tabId === "mapTab" && leafletMap) {
    setTimeout(() => leafletMap.invalidateSize(), 80);
  }
}
function renderMessageFilters() {
  const box = document.getElementById("messageFilters");
  const channels = ["All", ...new Set(state.messages.map(message => message.channel))];
  box.innerHTML = "";
  channels.forEach(channel => {
    const btn = document.createElement("button");
    btn.textContent = channel;
    btn.className = state.activeMessageFilter === channel ? "active" : "";
    btn.onclick = () => {
      state.activeMessageFilter = channel;
      saveState();
      renderMessages();
      renderMessageFilters();
    };
    box.appendChild(btn);
  });
}
function renderMessages() {
  const list = document.getElementById("messageList");
  const visible = state.activeMessageFilter === "All"
    ? state.messages
    : state.messages.filter(message => message.channel === state.activeMessageFilter);
  list.innerHTML = "";
  visible.forEach(message => {
    const card = document.createElement("article");
    card.className = "message-card module-panel";
    card.innerHTML = `
      <div class="message-head">
        <div>
          <div class="sender">${escapeHtml(message.sender)}</div>
          <div class="meta">${escapeHtml(message.channel)} // ${escapeHtml(message.faction)}</div>
        </div>
        <div class="meta">${escapeHtml(message.time)}</div>
      </div>
      <p class="message-text">${escapeHtml(message.text)}</p>
    `;
    list.appendChild(card);
  });
  list.scrollTop = list.scrollHeight;
}
function sendMessage() {
  const input = document.getElementById("messageInput");
  const text = input.value.trim();
  if (!text) return;

  const persona = document.getElementById("personaSelect").value;
  const replies = personaReplies[persona] || personaReplies.Loner;

  state.messages.push({ id: id(), channel: "Private", sender: "You", faction: "Stalker", text, time: nowTime() });
  state.messages.push({
    id: id(),
    channel: persona === "Monolith" ? "Unknown Signal" : "Private",
    sender: persona,
    faction: persona,
    text: replies[Math.floor(Math.random() * replies.length)],
    time: nowTime()
  });

  input.value = "";
  state.activeMessageFilter = "All";
  saveState();
  renderMessageFilters();
  renderMessages();
}
function addBroadcast() {
  const broadcasts = [
    ["Garbage Watch", "Bandits seen dragging crates toward the old hangar. Could be loot. Could be bait."],
    ["Yantar Lab", "Psi levels rising. Do not approach the lake without protection."],
    ["Unknown", "The dogs are not barking. This is worse than barking."],
    ["Rostok Bar", "Someone left a detector in the back room. Owner has ten minutes before it becomes community property."],
    ["Freedom Scout", "Anyone near Army Warehouses got eyes on that convoy? It vanished off the road like a bad thought."],
    ["Duty Patrol", "Mutant contact north of the checkpoint. Civilians and rookies keep clear."]
  ];
  const pick = broadcasts[Math.floor(Math.random() * broadcasts.length)];
  state.messages.push({ id: id(), channel: "Zone Broadcast", sender: pick[0], faction: "Broadcast", text: pick[1], time: nowTime() });
  state.activeMessageFilter = "All";
  saveState();
  renderMessageFilters();
  renderMessages();
}

// Map system

function getActiveSection() {
  const id = state.activeMapSection || currentSectionId || "world";
  return MAP_SECTIONS.find(section => section.id === id) || MAP_SECTIONS[0];
}

function pointInSection(point, section) {
  return !point.mapId || point.mapId === section.id;
}

function pointToSectionPoint(point, section) {
  return { ...point, sectionY: point.y };
}

function renderMapSectionSelect() {
  const select = document.getElementById("mapSectionSelect");
  if (!select) return;
  select.innerHTML = "";
  MAP_SECTIONS.forEach(section => {
    const option = document.createElement("option");
    option.value = section.id;
    option.textContent = section.name;
    if ((state.activeMapSection || "world") === section.id) option.selected = true;
    select.appendChild(option);
  });
}

function setMapSection(sectionId) {
  state.activeMapSection = sectionId;
  currentSectionId = sectionId;
  state.activeMapFilter = "All";
  saveState();
  initLeafletMap(true);
}

function getAllMapPoints() {
  return [...defaultMapPoints, ...(state.customPins || [])];
}
function mapTypeClass(type) {
  switch ((type || "").toLowerCase()) {
    case "hub": return "poi-hub";
    case "lab": return "poi-lab";
    case "danger": return "poi-danger";
    case "custom": return "poi-custom";
    default: return "poi-location";
  }
}
function renderMapFilters() {
  const box = document.getElementById("mapFilters");
  const section = getActiveSection();
  const sectionPoints = getAllMapPoints().filter(point => pointInSection(point, section));
  const types = ["All", ...new Set(sectionPoints.map(point => point.type))];
  box.innerHTML = "";
  types.forEach(type => {
    const btn = document.createElement("button");
    btn.textContent = type;
    btn.className = state.activeMapFilter === type ? "active" : "";
    btn.onclick = () => {
      state.activeMapFilter = type;
      saveState();
      renderMapFilters();
      rebuildLeafletMarkers();
    };
    box.appendChild(btn);
  });
}
function renderMapInfo(selectedId = state.selectedMapId) {
  const all = getAllMapPoints();
  const point = all.find(item => item.id === selectedId) || all[0];
  if (!point) return;
  state.selectedMapId = point.id;
  saveState();
  const card = document.getElementById("mapInfo");
  card.innerHTML = `
    <div class="module-label">LOCATION DATA</div>
    <h3>${escapeHtml(point.name)}</h3>
    <p class="muted">${escapeHtml(point.type)}</p>
    <p>${escapeHtml(point.note)}</p>
  `;
}
function buildMarker(point) {
  const iconHtml = `<div class="poi-icon ${mapTypeClass(point.type)}"></div>`;
  const icon = L.divIcon({ html: iconHtml, className: "", iconSize: [14, 14], iconAnchor: [7, 7] });
  const marker = L.marker([point.y, point.x], { icon });
  marker.bindPopup(`
    <div class="map-popup-title">${escapeHtml(point.name)}</div>
    <div class="map-popup-type">${escapeHtml(point.type)}</div>
    <div>${escapeHtml(point.note)}</div>
  `);
  marker.on("click", () => renderMapInfo(point.id));
  return marker;
}
function rebuildLeafletMarkers() {
  if (!leafletMap) return;
  leafletMarkers.forEach(marker => leafletMap.removeLayer(marker));
  leafletMarkers = [];

  const section = getActiveSection();
  const sectionPoints = getAllMapPoints()
    .filter(point => pointInSection(point, section))
    .map(point => pointToSectionPoint(point, section));

  const visiblePoints = state.activeMapFilter === "All"
    ? sectionPoints
    : sectionPoints.filter(point => point.type === state.activeMapFilter);

  visiblePoints.forEach(point => {
    const marker = buildMarker({ ...point, y: point.sectionY });
    marker.addTo(leafletMap);
    leafletMarkers.push(marker);
  });
}
function addCustomPin() {
  if (!leafletMap) {
    alert("Map is not ready yet.");
    return;
  }
  const name = prompt("Pin name?");
  if (!name) return;

  const typeInput = prompt("Pin type? Example: Custom, Stash, Danger, Camp") || "Custom";
  const note = prompt("Pin note?") || "No note recorded.";
  const center = leafletMap.getCenter();

  state.customPins = state.customPins || [];
  state.customPins.push({
    id: id(),
    name,
    type: typeInput,
    note,
    mapId: getActiveSection().id,
    x: Math.round(center.lng),
    y: Math.round(center.lat)
  });
  state.selectedMapId = state.customPins[state.customPins.length - 1].id;
  saveState();
  renderMapFilters();
  rebuildLeafletMarkers();
  renderMapInfo(state.selectedMapId);
}
function imageExists(url) {
  return new Promise(resolve => {
    const img = new Image();
    img.onload = () => resolve({ ok: true, width: img.naturalWidth, height: img.naturalHeight });
    img.onerror = () => resolve({ ok: false, width: MAP_CONFIG.fallbackWidth, height: MAP_CONFIG.fallbackHeight });
    img.src = url + "?v=" + Date.now();
  });
}
async function initLeafletMap(reset = false) {
  if (!window.L) return;

  const section = getActiveSection();
  currentSectionId = section.id;

  const mapNotice = document.getElementById("mapMissingNotice");
  const imageUrl = section.file;
  const result = await imageExists(imageUrl);

  if (!result.ok) {
    mapNotice.classList.remove("hidden");
  } else {
    mapNotice.classList.add("hidden");
  }

  const width = result.width || section.width || MAP_CONFIG.fallbackWidth;
  const height = result.height || section.height || MAP_CONFIG.fallbackHeight;
  mapBounds = [[0, 0], [height, width]];

  if (leafletMap) {
    leafletMap.remove();
    leafletMap = null;
    leafletMarkers = [];
  }

  leafletMap = L.map("leafletMap", {
    crs: L.CRS.Simple,
    minZoom: -1.5,
    maxZoom: 3,
    zoomSnap: 0.25,
    attributionControl: false
  });

  const imageOverlay = L.imageOverlay(imageUrl, mapBounds, { opacity: result.ok ? 1 : 0 });
  imageOverlay.addTo(leafletMap);
  leafletMap.fitBounds(mapBounds);

  renderMapFilters();
  rebuildLeafletMarkers();

  const sectionPoint = getAllMapPoints().find(point => pointInSection(point, section));
  if (sectionPoint) renderMapInfo(sectionPoint.id);
  else renderMapInfo();

  setTimeout(() => leafletMap.invalidateSize(), 150);
}

function renderLoreFilters() {
  const box = document.getElementById("loreFilters");
  const categories = ["All", ...new Set(loreEntries.map(entry => entry.category))];
  box.innerHTML = "";
  categories.forEach(category => {
    const btn = document.createElement("button");
    btn.textContent = category;
    btn.className = state.activeLoreFilter === category ? "active" : "";
    btn.onclick = () => {
      state.activeLoreFilter = category;
      saveState();
      renderLoreFilters();
      renderLore();
    };
    box.appendChild(btn);
  });
}
function renderLore() {
  const list = document.getElementById("loreList");
  const query = document.getElementById("loreSearch").value.toLowerCase();

  const filtered = loreEntries.filter(entry => {
    const matchesCategory = state.activeLoreFilter === "All" || entry.category === state.activeLoreFilter;
    const matchesSearch = `${entry.title} ${entry.category} ${entry.body}`.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  list.innerHTML = "";
  filtered.forEach(entry => {
    const card = document.createElement("article");
    card.className = "lore-card module-panel";
    card.innerHTML = `
      <div class="lore-top">
        <div>
          <h3>${escapeHtml(entry.title)}</h3>
          <p class="meta">Threat / Value: ${escapeHtml(entry.threat)}</p>
        </div>
        <span class="tag">${escapeHtml(entry.category)}</span>
      </div>
      <p>${escapeHtml(entry.body)}</p>
    `;
    list.appendChild(card);
  });
}
function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";
  state.tasks.forEach(task => {
    const card = document.createElement("article");
    card.className = "task-card module-panel";
    card.innerHTML = `
      <div class="task-head">
        <div>
          <h3>${escapeHtml(task.title)}</h3>
          <p class="meta">Source: ${escapeHtml(task.source)}</p>
          <p class="meta">Reward: ${escapeHtml(task.reward)}</p>
        </div>
        <button class="delete-btn" data-delete="${task.id}">Delete</button>
      </div>
      <button data-status="${task.id}">Status: ${escapeHtml(task.status)}</button>
    `;
    list.appendChild(card);
  });

  document.querySelectorAll("[data-delete]").forEach(btn => {
    btn.onclick = () => {
      state.tasks = state.tasks.filter(task => task.id !== btn.dataset.delete);
      saveState();
      renderTasks();
    };
  });

  document.querySelectorAll("[data-status]").forEach(btn => {
    btn.onclick = () => {
      const order = ["Active", "Complete", "Failed", "Unknown"];
      const task = state.tasks.find(item => item.id === btn.dataset.status);
      if (!task) return;
      task.status = order[(order.indexOf(task.status) + 1) % order.length];
      saveState();
      renderTasks();
    };
  });
}
function addTask() {
  const input = document.getElementById("taskInput");
  const title = input.value.trim();
  if (!title) return;
  state.tasks.push({ id: id(), title, source: "Personal Note", status: "Active", reward: "Unknown" });
  input.value = "";
  saveState();
  renderTasks();
}
function loadProfileInputs() {
  document.getElementById("profileCallsign").value = state.profile.callsign || "";
  document.getElementById("profileFaction").value = state.profile.faction || "";
  document.getElementById("profileRank").value = state.profile.rank || "";
  document.getElementById("profileLocation").value = state.profile.location || "";
  document.getElementById("profileWeapon").value = state.profile.weapon || "";
  updateHeaderProfile();
}
function bindProfileInputs() {
  const fields = [
    ["profileCallsign", "callsign"],
    ["profileFaction", "faction"],
    ["profileRank", "rank"],
    ["profileLocation", "location"],
    ["profileWeapon", "weapon"]
  ];
  fields.forEach(([inputId, key]) => {
    document.getElementById(inputId).addEventListener("input", event => {
      state.profile[key] = event.target.value;
      saveState();
      updateHeaderProfile();
    });
  });
}
function showEmission() {
  const alert = document.getElementById("emissionAlert");
  alert.classList.remove("hidden");
  setTimeout(() => alert.classList.add("hidden"), 4500);
}
function runBootSequence() {
  const bootScreen = document.getElementById("bootScreen");
  const bootBar = document.getElementById("bootBar");
  let progress = 0;
  const timer = setInterval(() => {
    progress += 9 + Math.random() * 15;
    if (progress > 100) progress = 100;
    bootBar.style.width = `${progress}%`;
    if (progress >= 100) {
      clearInterval(timer);
      setTimeout(() => {
        bootScreen.style.opacity = "0";
        bootScreen.style.transition = "opacity 350ms ease";
        setTimeout(() => bootScreen.remove(), 360);
      }, 350);
    }
  }, 120);
}
function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
function bindEvents() {
  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.addEventListener("click", () => switchTab(btn.dataset.tab));
  });

  document.getElementById("sendBtn").addEventListener("click", sendMessage);
  document.getElementById("messageInput").addEventListener("keydown", event => {
    if (event.key === "Enter") sendMessage();
  });
  document.getElementById("broadcastBtn").addEventListener("click", addBroadcast);
  document.getElementById("addPinBtn").addEventListener("click", addCustomPin);
  document.getElementById("mapSectionSelect").addEventListener("change", event => setMapSection(event.target.value));
  document.getElementById("loreSearch").addEventListener("input", renderLore);
  document.getElementById("taskAddBtn").addEventListener("click", addTask);
  document.getElementById("taskInput").addEventListener("keydown", event => {
    if (event.key === "Enter") addTask();
  });
  bindProfileInputs();
}
function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js").catch(() => console.log("Service worker could not be registered."));
  }
}
async function init() {
  updateClock();
  setInterval(updateClock, 1000);

  bindEvents();
  renderMessageFilters();
  renderMessages();
  renderMapSectionSelect();
  renderMapFilters();
  await initLeafletMap();
  renderLoreFilters();
  renderLore();
  renderTasks();
  loadProfileInputs();

  setInterval(() => { if (Math.random() > 0.78) showEmission(); }, 16000);

  runBootSequence();
  registerServiceWorker();
}

init();
