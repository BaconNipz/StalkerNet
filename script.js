const STORAGE_KEY = "stalkernet_pda_v1";

const defaultMessages = [
  {
    id: id(),
    channel: "Zone Broadcast",
    sender: "Wolf",
    faction: "Loner",
    text: "Rookie Village is quiet for now. That never lasts. Keep your bolts handy.",
    time: "07:12"
  },
  {
    id: id(),
    channel: "Private",
    sender: "Sidorovich",
    faction: "Trader",
    text: "I have work for you. Nothing glorious, but glory doesn't buy sausage.",
    time: "07:33"
  },
  {
    id: id(),
    channel: "Unknown Signal",
    sender: "UNKNOWN",
    faction: "???",
    text: "Do not follow the song beneath the concrete. It remembers names.",
    time: "03:17"
  },
  {
    id: id(),
    channel: "Faction Channel",
    sender: "Duty Outpost",
    faction: "Duty",
    text: "Mutant movement reported near Garbage. Armed stalkers requested. Payment confirmed on proof of kill.",
    time: "08:01"
  }
];

const personaReplies = {
  Loner: [
    "Listen, friend. The Zone doesn't hate you. That would mean it cares.",
    "Check roofs, windows, tree lines. Bandits love lazy eyes.",
    "A bolt costs nothing. A leg costs more. Throw the bolt."
  ],
  Trader: [
    "I can get it. You can pay for it. Beautiful system, yes?",
    "Bring me artifacts, documents, odd trinkets. Especially odd trinkets.",
    "No refunds in the Zone. The Zone doesn't refund me either."
  ],
  Duty: [
    "The Zone must be contained. Curiosity gets men buried in unmarked dirt.",
    "Report mutant sightings immediately. Heroics are not strategy.",
    "Your weapon is filthy. Clean it before it jams and writes your obituary."
  ],
  Freedom: [
    "Relax. Breathe. Then shoot whatever is making that noise.",
    "Duty sees a prison. I see a miracle with teeth.",
    "If the Zone wanted rules, it wouldn't have invented gravity wells."
  ],
  Ecologist: [
    "Do not lick the artifact. I cannot believe this requires repeating.",
    "Anomaly readings suggest movement. Which is unfortunate, because anomalies should not move.",
    "Bring samples sealed, labelled, and preferably not screaming."
  ],
  Monolith: [
    "The light is silent. The stone is patient.",
    "You walk in circles around the truth.",
    "Come closer. The centre is warm."
  ]
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

const defaultMapLocations = [
  { id: "cordon", name: "Cordon", type: "Settlement", x: 22, y: 78, note: "Rookie routes, traders, patrols." },
  { id: "garbage", name: "Garbage", type: "Danger", x: 39, y: 61, note: "Scrapyards, bandits, mutant movement." },
  { id: "rostok", name: "Rostok", type: "Faction Hub", x: 48, y: 47, note: "Bar, Duty presence, contracts." },
  { id: "yantar", name: "Yantar", type: "Research", x: 63, y: 51, note: "Ecologists, psi readings, lab rumours." },
  { id: "redforest", name: "Red Forest", type: "Extreme", x: 71, y: 28, note: "Avoid without preparation." },
  { id: "pripyat", name: "Pripyat", type: "Urban Ruin", x: 84, y: 18, note: "High-value salvage. Higher-value funerals." }
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

let state = loadState() || {
  messages: defaultMessages,
  tasks: defaultTasks,
  profile: defaultProfile,
  customPins: [],
  activeMessageFilter: "All",
  activeLoreFilter: "All",
  selectedMapId: "cordon"
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
    card.className = "message-card";
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

  state.messages.push({
    id: id(),
    channel: "Private",
    sender: "You",
    faction: "Stalker",
    text,
    time: nowTime()
  });

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
  state.messages.push({
    id: id(),
    channel: "Zone Broadcast",
    sender: pick[0],
    faction: "Broadcast",
    text: pick[1],
    time: nowTime()
  });

  state.activeMessageFilter = "All";
  saveState();
  renderMessageFilters();
  renderMessages();
}

function renderMap() {
  const map = document.getElementById("zoneMap");
  map.querySelectorAll(".map-pin").forEach(pin => pin.remove());

  const allPins = [...defaultMapLocations, ...state.customPins];

  allPins.forEach(location => {
    const btn = document.createElement("button");
    btn.className = `map-pin ${location.type === "Extreme" ? "extreme" : ""} ${state.selectedMapId === location.id ? "selected" : ""}`;
    btn.style.left = `${location.x}%`;
    btn.style.top = `${location.y}%`;
    btn.title = location.name;
    btn.onclick = () => {
      state.selectedMapId = location.id;
      saveState();
      renderMap();
      renderMapInfo();
    };
    map.appendChild(btn);
  });

  renderMapInfo();
}

function renderMapInfo() {
  const allPins = [...defaultMapLocations, ...state.customPins];
  const location = allPins.find(item => item.id === state.selectedMapId) || allPins[0];
  const card = document.getElementById("mapInfo");
  card.innerHTML = `
    <h3>${escapeHtml(location.name)}</h3>
    <p class="muted">${escapeHtml(location.type)}</p>
    <p>${escapeHtml(location.note)}</p>
  `;
}

function addCustomPin() {
  const name = prompt("Pin name?");
  if (!name) return;

  const type = prompt("Pin type? Example: Stash, Danger, Camp, Note") || "Note";
  const note = prompt("Pin note?") || "No note recorded.";

  state.customPins.push({
    id: id(),
    name,
    type,
    note,
    x: 20 + Math.random() * 60,
    y: 20 + Math.random() * 60
  });

  state.selectedMapId = state.customPins[state.customPins.length - 1].id;
  saveState();
  renderMap();
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
    card.className = "lore-card";
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
    card.className = "task-card";
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

  state.tasks.push({
    id: id(),
    title,
    source: "Personal Note",
    status: "Active",
    reward: "Unknown"
  });

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

  document.getElementById("loreSearch").addEventListener("input", renderLore);

  document.getElementById("taskAddBtn").addEventListener("click", addTask);
  document.getElementById("taskInput").addEventListener("keydown", event => {
    if (event.key === "Enter") addTask();
  });

  bindProfileInputs();
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js").catch(() => {
      console.log("Service worker could not be registered.");
    });
  }
}

function init() {
  updateClock();
  setInterval(updateClock, 1000);

  bindEvents();

  renderMessageFilters();
  renderMessages();
  renderMap();
  renderLoreFilters();
  renderLore();
  renderTasks();
  loadProfileInputs();

  setInterval(() => {
    if (Math.random() > 0.78) showEmission();
  }, 16000);

  runBootSequence();
  registerServiceWorker();
}

init();
