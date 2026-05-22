const STORAGE_KEY = "stalkernet_pda_v31_archive_artifacts";

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
  {title:"Loners / Free Stalkers",category:"Factions",value:"Major faction",base:"Rookie Village, Cordon",relations:"Neutral with most factions. Hostile to Bandits, Military, Mercenaries, Monolith, Renegades, Sin and UNISG.",text:"Loners, also called Free Stalkers, are independent stalkers who operate without formal faction command. They are not bound by a shared ideology beyond survival, profit, curiosity, and personal freedom. In Anomaly, they are the most common kind of stalker and can be encountered throughout the Zone. Their faction identity is loose: some are rookies trying to survive their first contracts, while others are hardened veterans who have learned to live without banners, officers, or oaths.",sourceNote:"Based on S.T.A.L.K.E.R. Anomaly Wiki faction data.",patch:"loners"},
  {title:"Bandits",category:"Factions",value:"Major faction",base:"Northern Factory, Dark Valley",relations:"Threatened or opposed by most factions. Tolerated by Freedom, Mercenaries and Renegades.",text:"Bandits are criminals, raiders and thieves operating inside the Zone. They survive through robbery, kidnapping, extortion and attacks on weaker travellers or poorly defended groups. Their presence turns roads, warehouses and old industrial sites into ambush territory. In Anomaly, their headquarters is the Northern Factory in Dark Valley, making the region one of the clearest examples of bandit-controlled space.",sourceNote:"Based on S.T.A.L.K.E.R. Anomaly Wiki faction data.",patch:"bandits"},
  {title:"Clear Sky",category:"Factions",value:"Major faction",base:"Hidden Base, Great Swamps",relations:"Neutral with most factions. Hostile to Bandits, Military, Monolith, Renegades, Sin and UNISG.",text:"Clear Sky is an independent militaristic-scientific faction based in the Great Swamps. They study the Zone in an attempt to understand its nature rather than simply exploit it for money or artifacts. Unlike the Ecologists, they maintain an armed structure and can defend their operations directly. In Anomaly, their base is hidden in the Great Swamps, fitting their role as researchers working from the edges of the Zone’s better-known power struggles.",sourceNote:"Based on S.T.A.L.K.E.R. Anomaly Wiki faction data.",patch:"clear_sky"},
  {title:"Duty",category:"Factions",value:"Major faction",base:"Barracks, Rostok",relations:"Neutral with many factions. Hostile to Bandits, Freedom, Mercenaries, Monolith, Renegades, Sin and UNISG.",text:"Duty is a disciplined paramilitary faction built around containment, order and armed resistance against the Zone’s dangers. They see the Zone as a threat that must be controlled, fought, and possibly destroyed. Their members are trained, well armed and organised compared with loose stalker groups. In Anomaly, Duty operates from the Barracks in Rostok, a fitting base for a faction that values discipline, command structure and defensive strength.",sourceNote:"Based on S.T.A.L.K.E.R. Anomaly Wiki faction data.",patch:"duty"},
  {title:"Freedom",category:"Factions",value:"Major faction",base:"Military Base, Army Warehouses",relations:"Neutral with several factions. Hostile to Duty, Military, Monolith, Renegades, Sin and UNISG.",text:"Freedom is a faction built around independence and resistance to outside control. They oppose the idea that the Zone should be locked down by military or government power and instead want it free from external influence. Their attitude puts them directly at odds with Duty and the Military. In Anomaly, their headquarters is the Military Base in Army Warehouses, giving them a strong northern position and a clear identity as a faction that rejects outside authority.",sourceNote:"Based on S.T.A.L.K.E.R. Anomaly Wiki faction data.",patch:"freedom"},
  {title:"Mercenary",category:"Factions",value:"Major faction",base:"Sports Centre, Dead City",relations:"Hostile to Loners, Duty, Military, Monolith, Renegades and Sin. Neutral with the rest, including UNISG.",text:"Mercenaries are professional soldiers of fortune who operate in the Zone for profit. They work independently from the major ideologies of the Zone, taking contracts from clients and carrying out jobs such as sabotage, assassinations and other deniable operations. In Anomaly, their headquarters is the Sports Centre in Dead City. They are also notable as the only faction neutral with UNISG, suggesting a relationship based on contracts, shared interests, or simple professional tolerance.",sourceNote:"Based on S.T.A.L.K.E.R. Anomaly Wiki faction data.",patch:"mercenaries"},
  {title:"Military",category:"Factions",value:"Major faction",base:"Research Institute, Agroprom",relations:"Neutral with Duty and Ecologists. Hostile to the rest.",text:"The Military represents Ukrainian armed forces operating inside the Zone. Their mission is to maintain order, prevent unauthorised entry and stop people from leaving. They rely on organised force and heavy firepower, including attack helicopters, to control territory and project authority. In Anomaly, their headquarters is the Research Institute in Agroprom, placing them in a major strategic area with direct access to research infrastructure and contested routes.",sourceNote:"Based on S.T.A.L.K.E.R. Anomaly Wiki faction data.",patch:"military"},
  {title:"Ecologists",category:"Factions",value:"Major faction",base:"Mobile Science Lab, Yantar",relations:"Neutral with most factions. Hostile to Bandits, Monolith, Renegades, Sin and UNISG.",text:"Ecologists are scientists and researchers dedicated to studying the Zone, its anomalies and its artifacts. They rely on specialised scientific equipment and protective suits, including SSP-series radiation suits, to work safely in dangerous conditions. They are described as pacifistic and avoid direct combat where possible, focusing instead on research. In Anomaly, their headquarters is the Mobile Science Lab in Yantar, one of the Zone’s strongest scientific footholds.",sourceNote:"Based on S.T.A.L.K.E.R. Anomaly Wiki faction data.",patch:"ecologists"},
  {title:"Monolith",category:"Factions",value:"Major faction",base:"Palace of Culture, Pripyat",relations:"Neutral with Sin. Hostile to all other factions.",text:"Monolith is made up of brainwashed fanatics who worship the power of the Zone and defend it at any cost. The faction is tied to the C-Consciousness, whose influence shaped their purpose and loyalty. Even after the C-Consciousness was destroyed, Monolith remained active and reclaimed large areas of the Zone. Their soldiers are highly trained and often carry top-tier equipment, including exoskeletons and Gauss rifles. In Anomaly, their headquarters is the Palace of Culture in Pripyat.",sourceNote:"Based on S.T.A.L.K.E.R. Anomaly Wiki faction data.",patch:"monolith"},
  {title:"Renegades",category:"Factions",value:"Unlockable faction",base:"Possible village near Tuzla Tunnel, Great Swamps",relations:"Neutral with Bandits only. Hostile to all other factions.",text:"Renegades are outcasts and criminals cast off from other factions. They are likely former Bandits and still behave like raiders, robbers and territorial scavengers. Their equipment is similar to Bandit gear, reinforcing their shared roots. In Anomaly, their headquarters may be a village near the Tuzla Tunnel in the Great Swamps. They are temporarily unlockable through the character selection screen by entering their unlock code.",sourceNote:"Based on S.T.A.L.K.E.R. Anomaly Wiki faction data.",patch:"renegades"},
  {title:"Sin",category:"Factions",value:"Unlockable faction",base:"Mine Barracks, Red Forest",relations:"Neutral with Monolith only. Hostile to all other factions.",text:"Sin is a faction of religious, zombie-like fanatics who believe in the divine nature of the Zone. Their goal is not containment or profit, but expansion: they want the Zone to spread far beyond its current borders. Despite poor health and ragged equipment, their combat ability is comparable to experienced stalkers. They follow their leader Chernobog. In Anomaly, their base is the Mine Barracks in Red Forest, and they can be unlocked temporarily through the character selection screen or permanently by completing Mortal Sin.",sourceNote:"Based on S.T.A.L.K.E.R. Anomaly Wiki faction data.",patch:"sin"},
  {title:"UNISG / ISG",category:"Factions",value:"Unlockable faction",base:"Possible Sawmill base in Darkscape during UNISG plotline; spawn locations in Jupiter and Outskirts",relations:"Neutral with Mercenaries only. Hostile to all other factions.",text:"UNISG, also known as ISG, is the United Nations International Scientific Group. In Anomaly, it is a UN-sponsored special forces and research organisation focused on studying anomalies and artifacts inside the Zone. Their deeper goals are unclear, but they are suspected of having a politically motivated interest in the Zone’s origins. They are far from helpless, using high-grade armour and weapons. A possible headquarters appears at the Sawmill in Darkscape during the UNISG plotline, with spawn locations in Jupiter and Outskirts. They can be unlocked through the character selection screen or permanently by completing Operation Afterglow.",sourceNote:"Based on S.T.A.L.K.E.R. Anomaly Wiki faction data.",patch:"isg"},
  {title:"Zombies",category:"Factions",value:"Special / unlockable",base:"Not listed",relations:"Neutral with Monolith and Sin. Hostile to all others.",text:"Zombified Stalkers are listed as playable zombies in Anomaly. They are treated as their own faction entry and have a simple relationship pattern: neutral toward Monolith and Sin, hostile toward everyone else. They can be temporarily unlocked from the character selection screen by pressing the Z key.",sourceNote:"Based on S.T.A.L.K.E.R. Anomaly Wiki faction data.",patch:""}
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
  // World map starter points. These are baked public defaults.
  { id: "world_swamp", mapId: "world", name: "Great Swamps", type: "Location", x: 265, y: 268, note: "Wetland maze of reeds, bridges, hidden paths, and half-drowned ruins." },
  { id: "world_meadow", mapId: "world", name: "Meadows", type: "Location", x: 605, y: 499, note: "Open southern travel route with scattered cover and lonely roads." },
  { id: "world_cordon", mapId: "world", name: "Cordon", type: "Location", x: 455, y: 295, note: "Rookie territory, southern roads, patrol routes, and early contracts." },
  { id: "world_darkscape", mapId: "world", name: "Darkscape", type: "Danger", x: 902, y: 360, note: "Remote southern-east territory with long roads and little comfort." },
  { id: "world_garbage", mapId: "world", name: "Garbage", type: "Danger", x: 482, y: 671, note: "Scrapyards, ambush lanes, mutant movement, and scavenger traffic." },
  { id: "world_agroprom", mapId: "world", name: "Agroprom", type: "Location", x: 301, y: 634, note: "Old research grounds, military activity, and underground approaches." },
  { id: "world_dark_valley", mapId: "world", name: "Dark Valley", type: "Danger", x: 769, y: 765, note: "Industrial ruins, bandit pressure, and dangerous road approaches." },
  { id: "world_rostok", mapId: "world", name: "Rostok", type: "Hub", x: 504, y: 970, note: "Major stalker hub with traders, technicians, jobs, and heavy traffic." },
  { id: "world_wild_territory", mapId: "world", name: "Wild Territory", type: "Danger", x: 407, y: 978, note: "Ruined industrial ground where cover is thin and movement is risky." },
  { id: "world_yantar", mapId: "world", name: "Yantar", type: "Lab", x: 247, y: 836, note: "Ecologist field zone, psi danger, and laboratory rumours." },
  { id: "world_truck_cemetery", mapId: "world", name: "Truck Cemetery", type: "Danger", x: 885, y: 987, note: "A graveyard of vehicles, wreckage, anomalies, and bad sightlines." },
  { id: "world_army_warehouses", mapId: "world", name: "Army Warehouses", type: "Hub", x: 563, y: 1121, note: "Faction routes, patrol pressure, and valuable staging ground." },
  { id: "world_dead_city", mapId: "world", name: "Dead City", type: "Location", x: 200, y: 1117, note: "Abandoned urban blocks, mercenary movement, and silent windows." },
  { id: "world_red_forest", mapId: "world", name: "Red Forest", type: "Danger", x: 383, y: 1343, note: "Dense, hostile woodland with high anomaly and mutant risk." },
  { id: "world_radar", mapId: "world", name: "Radar", type: "Danger", x: 682, y: 1295, note: "High-risk northern route dominated by old military and psi threats." },
  { id: "world_limansk", mapId: "world", name: "Limansk", type: "Location", x: 178, y: 1345, note: "Broken city routes, contested streets, and hard urban movement." },
  { id: "world_deserted_hospital", mapId: "world", name: "Deserted Hospital", type: "Danger", x: 263, y: 1591, note: "Ruined medical complex with tight corridors and grim echoes." },
  { id: "world_jupiter", mapId: "world", name: "Jupiter", type: "Location", x: 414, y: 1545, note: "Factory zone with tunnels, salvage routes, and northern contracts." },
  { id: "world_zaton", mapId: "world", name: "Zaton", type: "Location", x: 421, y: 1728, note: "Swamps, wrecks, stalker routes, and scattered survivor camps." },
  { id: "world_outskirts", mapId: "world", name: "Outskirts", type: "Location", x: 856, y: 1533, note: "Late-zone urban fringe with heavy danger and valuable approaches." },
  { id: "world_pripyat", mapId: "world", name: "Pripyat", type: "Danger", x: 691, y: 1577, note: "Urban ruin of high-value salvage, heavy resistance, and bad omens." },
  { id: "world_cnpp", mapId: "world", name: "Chernobyl NPP", type: "Danger", x: 546, y: 1979, note: "The heart of the Zone, where every road feels watched." },
  { id: "world_generators", mapId: "world", name: "Generators", type: "Danger", x: 351, y: 2238, note: "Northern extreme zone with severe threats and endgame-grade danger." },
  { id: "world_agroprom_underground", mapId: "world", name: "Agroprom Underground", type: "Underground", x: 276, y: 635, note: "Subterranean passages beneath Agroprom with tight, lethal routes." },
  { id: "world_lab_x18", mapId: "world", name: "Lab X-18", type: "Lab", x: 835, y: 706, note: "Underground laboratory complex beneath Dark Valley." },
  { id: "world_lab_x16", mapId: "world", name: "Lab X-16", type: "Lab", x: 232, y: 895, note: "Yantar laboratory site linked to psi danger and old experiments." },
  { id: "world_lab_x19", mapId: "world", name: "Lab X-19", type: "Lab", x: 611, y: 1362, note: "Radar-associated underground complex tied to northern psi threats." },
  { id: "world_jupiter_underground", mapId: "world", name: "Jupiter Underground", type: "Underground", x: 413, y: 1506, note: "Underground passage network beneath the Jupiter region." },
  { id: "world_lab_x8", mapId: "world", name: "Lab X-8", type: "Lab", x: 366, y: 1505, note: "Hidden laboratory complex beneath the Outskirts sector." },
  { id: "world_sarcophagus", mapId: "world", name: "Sarcophagus", type: "Underground", x: 523, y: 2160, note: "Interior approach into the buried heart of the NPP." },
  { id: "world_monolith_control", mapId: "world", name: "Monolith Control Center", type: "Underground", x: 555, y: 2051, note: "Deep control complex bound to the Zone’s strangest signal." },
  { id: "world_monolith_war_lab", mapId: "world", name: "Monolith War Lab", type: "Lab", x: 413, y: 2233, note: "Northern laboratory complex tied to Monolith operations and war doctrine." },

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
  activeMapSection: "world",
  pinOverrides: {},
  hiddenPins: {},
  allPinsHidden: false,
  showAiMessages: false,
  aiMessages: [],
  blockedSenders: {},
  soundEnabled: true,
  showAiMessages: false,
  aiMessages: []
};

// v14 migration: clear locally saved world-pin overrides so baked public defaults appear.
if (!state.schemaVersion || state.schemaVersion < 14) {
  const worldPinIds = ["world_swamp", "world_meadow", "world_cordon", "world_darkscape", "world_garbage", "world_agroprom", "world_dark_valley", "world_rostok", "world_wild_territory", "world_yantar", "world_truck_cemetery", "world_army_warehouses", "world_dead_city", "world_red_forest", "world_radar", "world_limansk", "world_deserted_hospital", "world_jupiter", "world_zaton", "world_outskirts", "world_pripyat", "world_cnpp", "world_generators", "world_agroprom_underground", "world_lab_x18", "world_lab_x16", "world_lab_x19", "world_jupiter_underground", "world_lab_x8", "world_sarcophagus", "world_monolith_control", "world_monolith_war_lab"];
  if (state.pinOverrides) {
    worldPinIds.forEach(id => delete state.pinOverrides[id]);
  }
  state.schemaVersion = 14;
  saveState();
}

const SOUND_FILES = {
  boot: "assets/audio/boot.wav",
  click: "assets/audio/click.wav",
  alert: "assets/audio/alert.wav"
};

const sounds = {};
let soundUnlocked = false;
let bootSoundPlayed = false;

function initSoundBank() {
  Object.entries(SOUND_FILES).forEach(([key, src]) => {
    const audio = new Audio(src);
    audio.preload = "auto";
    audio.volume = key === "click" ? 0.18 : 0.32;
    sounds[key] = audio;
  });
}

function soundEnabled() {
  return state.soundEnabled !== false;
}

function updateSoundButton() {
  const btn = document.getElementById("soundToggleBtn");
  if (!btn) return;
  btn.textContent = soundEnabled() ? "Sound: On" : "Sound: Off";
}

function playSound(name) {
  if (!soundEnabled()) return;
  const base = sounds[name];
  if (!base) return;

  try {
    const audio = base.cloneNode();
    audio.volume = base.volume;
    const promise = audio.play();
    if (promise && typeof promise.catch === "function") {
      promise.catch(() => {});
    }
  } catch {}
}

function tryBootSound() {
  if (bootSoundPlayed || !soundEnabled()) return;
  bootSoundPlayed = true;
  playSound("boot");
}

function unlockSoundOnce() {
  if (soundUnlocked) return;
  soundUnlocked = true;
  tryBootSound();
}

function toggleSoundSetting() {
  state.soundEnabled = !soundEnabled();
  saveState();
  updateSoundButton();
  if (soundEnabled()) playSound("click");
}

function bindGlobalSoundCues() {
  document.addEventListener("pointerdown", unlockSoundOnce, { once: true });

  document.addEventListener("click", event => {
    if (event.target.closest("button")) {
      playSound("click");
    }
  });
}

// v19 migration: remove old local demo chatter from live feed.
if (!state.schemaVersion || state.schemaVersion < 19) {
  state.messages = (state.messages || []).filter(message => {
    return !["Wolf", "Sidorovich", "UNKNOWN", "Duty Outpost"].includes(message.sender);
  });
  state.schemaVersion = 19;
  saveState();
}

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

function syncLocalProfileFromOnline() {
  if (!currentProfile) return;

  state.profile.callsign = currentProfile.callsign || state.profile.callsign || "Marked Rookie";
  state.profile.faction = currentProfile.faction || state.profile.faction || "Loner";
  state.profile.rank = currentProfile.rank || state.profile.rank || "Rookie";
  state.profile.location = currentProfile.area || state.profile.location || "Cordon";
  state.profile.weapon = currentProfile.weapon || state.profile.weapon || "";
  saveState();
}

function updateHeaderProfile() {
  const online = currentProfile || {};
  const local = state.profile || {};

  const callsign = online.callsign || local.callsign || "Marked Rookie";
  const faction = online.faction || local.faction || "Loner";
  const rank = online.rank || local.rank || "Rookie";
  const area = online.area || local.location || "Cordon";

  const callsignEl = document.getElementById("headerCallsign");
  const factionEl = document.getElementById("headerFaction");
  const areaEl = document.getElementById("headerArea");

  if (callsignEl) callsignEl.textContent = callsign;
  if (factionEl) factionEl.textContent = faction;
  if (areaEl) areaEl.textContent = area;

  const titleCallsign = document.querySelector("[data-profile-callsign]");
  const titleFaction = document.querySelector("[data-profile-faction]");
  const titleRank = document.querySelector("[data-profile-rank]");
  const titleArea = document.querySelector("[data-profile-area]");

  if (titleCallsign) titleCallsign.textContent = callsign;
  if (titleFaction) titleFaction.textContent = faction;
  if (titleRank) titleRank.textContent = rank;
  if (titleArea) titleArea.textContent = area;
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
  const allMessages = typeof getDisplayMessages === "function" ? getDisplayMessages() : state.messages;
  const channels = ["All", ...new Set(allMessages.map(message => message.channel))];
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
  const allMessages = typeof getDisplayMessages === "function" ? getDisplayMessages() : state.messages;
  const visible = state.activeMessageFilter === "All"
    ? allMessages
    : allMessages.filter(message => message.channel === state.activeMessageFilter);
  list.innerHTML = "";
  visible.forEach(message => {
    const card = document.createElement("article");
    card.className = `message-card module-panel ${message.isAi ? "ai-message-card" : ""}`;
    const isOwnMessage = Boolean(currentUser && message.senderId === currentUser.uid);
    const canControl = Boolean(message.isOnline && !message.isAi);
    const encodedText = escapeHtml(message.text).replaceAll('"', "&quot;");
    const encodedSender = escapeHtml(message.sender).replaceAll('"', "&quot;");

    card.innerHTML = `
      <div class="message-head">
        <div>
          <div class="sender sender-clickable" data-stalker-card-user="${message.senderId || ""}" data-callsign="${escapeHtml(message.sender).replaceAll('"', "&quot;")}" data-faction="${escapeHtml(message.faction).replaceAll('"', "&quot;")}">${escapeHtml(message.sender)}</div>
          <div class="meta">${escapeHtml(message.channel)} // ${escapeHtml(message.faction)}${message.isAi ? " // AI" : ""}</div>
        </div>
        <div class="meta">${escapeHtml(message.time)}</div>
      </div>
      <p class="message-text">${escapeHtml(message.text)}</p>
      ${canControl ? `
        <div class="message-actions">
          ${isOwnMessage ? `
            <button class="tiny-btn delete-btn" data-message-action="delete" data-message-id="${message.messageId}">Delete</button>
          ` : `
            <button class="tiny-btn" data-message-action="report" data-message-id="${message.messageId}" data-sender-id="${message.senderId || ""}" data-callsign="${encodedSender}" data-text="${encodedText}">Report</button>
            <button class="tiny-btn" data-message-action="block" data-sender-id="${message.senderId || ""}" data-callsign="${encodedSender}">Block</button>
          `}
        </div>
      ` : ""}
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
  ensureAiState();
  updateAiToggleButton();
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

function getPointWithOverride(point) {
  if (!state.pinOverrides) state.pinOverrides = {};
  const override = state.pinOverrides[point.id];
  if (!override) return point;
  return {
    ...point,
    x: override.x,
    y: override.y
  };
}

function savePinOverride(pointId, latlng) {
  if (!state.pinOverrides) state.pinOverrides = {};
  state.pinOverrides[pointId] = {
    x: Math.round(latlng.lng),
    y: Math.round(latlng.lat)
  };
  saveState();
}

function isPinHidden(point) {
  if (!state.hiddenPins) state.hiddenPins = {};
  return Boolean(state.allPinsHidden || state.hiddenPins[point.id]);
}

function togglePinHidden(pointId) {
  if (!state.hiddenPins) state.hiddenPins = {};
  state.hiddenPins[pointId] = !state.hiddenPins[pointId];
  saveState();
  rebuildLeafletMarkers();
  renderPinManagerList();
}

function setAllPinsHidden(hidden) {
  state.allPinsHidden = hidden;
  saveState();
  rebuildLeafletMarkers();
  renderPinManagerList();
  updateToggleAllPinsButton();
}

function updateToggleAllPinsButton() {
  const btn = document.getElementById("toggleAllPinsBtn");
  if (!btn) return;
  btn.textContent = state.allPinsHidden ? "Show All" : "Hide All";
}

function toggleAllPinsQuick() {
  setAllPinsHidden(!state.allPinsHidden);
}

function openPinManager() {
  const panel = document.getElementById("pinManagerPanel");
  panel.classList.toggle("hidden");
  renderPinManagerList();
}

function openPinCreator() {
  document.getElementById("pinCreatePanel").classList.remove("hidden");
  document.getElementById("newPinName").focus();
}

function closePinCreator() {
  document.getElementById("pinCreatePanel").classList.add("hidden");
  document.getElementById("newPinName").value = "";
  document.getElementById("newPinType").value = "Custom";
  document.getElementById("newPinNote").value = "";
}

function createPinFromForm() {
  if (!leafletMap) {
    alert("Map is not ready yet.");
    return;
  }

  const name = document.getElementById("newPinName").value.trim();
  const type = document.getElementById("newPinType").value.trim() || "Custom";
  const note = document.getElementById("newPinNote").value.trim() || "No note recorded.";

  if (!name) {
    alert("Give the pin a name first.");
    return;
  }

  const center = leafletMap.getCenter();

  state.customPins = state.customPins || [];
  const newPin = {
    id: id(),
    mapId: getActiveSection().id,
    name,
    type,
    note,
    x: Math.round(center.lng),
    y: Math.round(center.lat)
  };

  state.customPins.push(newPin);
  state.selectedMapId = newPin.id;
  saveState();

  closePinCreator();
  rebuildLeafletMarkers();
  renderMapInfo(newPin.id);
  renderPinManagerList();
}

function deleteCustomPin(pointId) {
  const point = getAllMapPoints().find(pin => pin.id === pointId);
  if (!point) return;

  if (!pointId.startsWith("world_") && !pointId.includes("_main")) {
    // likely custom, but still confirm
  }

  const isDefaultPin = defaultMapPoints.some(pin => pin.id === pointId);
  if (isDefaultPin) {
    alert("Default map pins cannot be deleted. You can hide them instead.");
    return;
  }

  if (!confirm(`Delete custom pin "${point.name}"?`)) return;

  state.customPins = (state.customPins || []).filter(pin => pin.id !== pointId);
  if (state.hiddenPins) delete state.hiddenPins[pointId];
  if (state.pinOverrides) delete state.pinOverrides[pointId];

  saveState();
  rebuildLeafletMarkers();
  renderPinManagerList();
  renderMapInfo();
}

function renderPinManagerList() {
  const list = document.getElementById("pinManagerList");
  if (!list) return;

  const section = getActiveSection();
  const pins = getAllMapPoints().filter(point => pointInSection(point, section));

  if (!pins.length) {
    list.innerHTML = `<p class="message-text">No pins in this map section.</p>`;
    return;
  }

  list.innerHTML = "";

  pins.forEach(point => {
    const isDefaultPin = defaultMapPoints.some(pin => pin.id === point.id);
    const row = document.createElement("div");
    row.className = "pin-manager-row";
    row.innerHTML = `
      <div class="pin-manager-main">
        <strong>${escapeHtml(point.name)}</strong>
        <span>${escapeHtml(point.type)} // x:${Math.round(point.x)} y:${Math.round(point.y)}</span>
      </div>
      <div class="pin-manager-controls">
        <button class="small-btn" data-toggle-pin="${point.id}">${isPinHidden(point) ? "Show" : "Hide"}</button>
        <button class="small-btn delete-btn" data-delete-pin="${point.id}" ${isDefaultPin ? "disabled" : ""}>Delete</button>
      </div>
    `;
    list.appendChild(row);
  });

  document.querySelectorAll("[data-toggle-pin]").forEach(btn => {
    btn.onclick = () => togglePinHidden(btn.dataset.togglePin);
  });

  document.querySelectorAll("[data-delete-pin]").forEach(btn => {
    btn.onclick = () => deleteCustomPin(btn.dataset.deletePin);
  });
}

function resetWorldPins() {
  if (!confirm("Reset saved world map pin positions on this device?")) return;
  state.pinOverrides = {};
  saveState();
  rebuildLeafletMarkers();
  renderMapInfo();
}

function exportWorldPinCoordinates() {
  if (!state.pinOverrides) state.pinOverrides = {};

  const worldPins = defaultMapPoints
    .filter(point => point.mapId === "world")
    .map(point => {
      const override = state.pinOverrides[point.id];
      return {
        ...point,
        x: override ? override.x : point.x,
        y: override ? override.y : point.y
      };
    });

  const output = `const defaultWorldMapPoints = ${JSON.stringify(worldPins, null, 2)};`;

  const panel = document.getElementById("pinExportPanel");
  const textArea = document.getElementById("pinExportText");

  textArea.value = output;
  panel.classList.remove("hidden");
  textArea.focus();
  textArea.select();
}

async function copyExportedPins() {
  const textArea = document.getElementById("pinExportText");
  if (!textArea.value.trim()) exportWorldPinCoordinates();

  try {
    await navigator.clipboard.writeText(textArea.value);
    alert("Pin coordinates copied.");
  } catch {
    textArea.focus();
    textArea.select();
    alert("Copy failed. Long-press the text box and copy manually.");
  }
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
  renderPinManagerList();
  updateToggleAllPinsButton();
}

function getAllMapPoints() {
  return [...defaultMapPoints, ...(state.customPins || [])].map(getPointWithOverride);
}
function mapTypeClass(type) {
  switch ((type || "").toLowerCase()) {
    case "hub": return "poi-hub";
    case "lab": return "poi-lab";
    case "danger": return "poi-danger";
    case "underground": return "poi-underground";
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
  const isDefaultPin = defaultMapPoints.some(pin => pin.id === point.id);
  const canDrag = !isDefaultPin;

  const marker = L.marker([point.y, point.x], {
    icon,
    draggable: canDrag
  });

  marker.bindPopup(`
    <div class="map-popup-title">${escapeHtml(point.name)}</div>
    <div class="map-popup-type">${escapeHtml(point.type)}</div>
    <div>${escapeHtml(point.note)}</div>
    <div class="map-popup-type">${canDrag ? "Drag this pin to adjust its saved position." : "Default pin position is locked."}</div>
  `);

  marker.on("click", () => renderMapInfo(point.id));

  if (canDrag) {
    marker.on("dragend", event => {
      const newPos = event.target.getLatLng();
      savePinOverride(point.id, newPos);
      renderMapInfo(point.id);
      renderPinManagerList();
      event.target.openPopup();
    });
  }

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

  const filteredByType = state.activeMapFilter === "All"
    ? sectionPoints
    : sectionPoints.filter(point => point.type === state.activeMapFilter);

  const visiblePoints = filteredByType.filter(point => !isPinHidden(point));

  visiblePoints.forEach(point => {
    const marker = buildMarker({ ...point, y: point.sectionY });
    marker.addTo(leafletMap);
    leafletMarkers.push(marker);
  });
}
function addCustomPin() {
  openPinCreator();
}
function imageExists(url) {
  return new Promise(resolve => {
    const img = new Image();
    img.onload = () => resolve({ ok: true, width: img.naturalWidth, height: img.naturalHeight });
    img.onerror = () => resolve({ ok: false, width: MAP_CONFIG.fallbackWidth, height: MAP_CONFIG.fallbackHeight });
    img.src = url + "?v=" + Date.now();
  });
}


async function isBraveBrowser() {
  try {
    return Boolean(navigator.brave && await navigator.brave.isBrave());
  } catch (error) {
    return false;
  }
}

// Live device status: battery and network connection
function formatBatteryLevel(level) {
  if (typeof level !== "number") return "--";
  return `${Math.round(level * 100)}%`;
}

function updateBatteryDisplay(level, charging = false) {
  const el = document.getElementById("batteryValue");
  if (!el) return;

  if (typeof level !== "number") {
    el.textContent = "--";
    el.dataset.state = "unknown";
    return;
  }

  const pct = Math.round(level * 100);
  const bars = pct >= 90 ? "▰▰▰▰" :
               pct >= 65 ? "▰▰▰▱" :
               pct >= 40 ? "▰▰▱▱" :
               pct >= 20 ? "▰▱▱▱" :
                            "▱▱▱▱";

  el.textContent = `${pct}% ${charging ? "CHG" : bars}`;
  el.dataset.state = pct <= 20 ? "low" : "ok";
}

async function initBatteryStatus() {
  const el = document.getElementById("batteryValue");
  if (!el) return;

  const brave = await isBraveBrowser();

  // Brave often blocks or spoofs Battery API results for privacy.
  // Showing "100% CHG" when it is not real is worse than showing unavailable.
  if (brave) {
    el.textContent = "LOCKED";
    el.dataset.state = "privacy";
    el.title = "Battery percentage is blocked or spoofed by Brave privacy protections.";
    return;
  }

  if (!("getBattery" in navigator)) {
    el.textContent = "N/A";
    el.dataset.state = "unsupported";
    el.title = "Battery percentage is not available in this browser.";
    return;
  }

  try {
    const battery = await navigator.getBattery();

    const refresh = () => {
      updateBatteryDisplay(battery.level, battery.charging);
    };

    refresh();
    battery.addEventListener("levelchange", refresh);
    battery.addEventListener("chargingchange", refresh);
  } catch (error) {
    console.warn("Battery status unavailable:", error);
    el.textContent = "N/A";
    el.dataset.state = "unavailable";
    el.title = "Battery percentage could not be read.";
  }
}

function updateNetworkDisplay() {
  const el = document.getElementById("signalValue");
  if (!el) return;

  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

  if (!navigator.onLine) {
    el.textContent = "OFFLINE";
    el.dataset.state = "offline";
    el.title = "Device appears to be offline.";
    return;
  }

  if (!connection) {
    el.textContent = "ONLINE";
    el.dataset.state = "unknown";
    el.title = "Network type is hidden by this browser.";
    return;
  }

  const type = connection.type && connection.type !== "unknown" ? connection.type.toUpperCase() : "";
  const effective = connection.effectiveType ? connection.effectiveType.toUpperCase() : "";
  const saveData = connection.saveData ? "SAVE" : "";
  const label = [type, effective, saveData].filter(Boolean).join(" ");

  el.textContent = label || "ONLINE";
  el.dataset.state = "online";
  el.title = "Browsers cannot read true phone signal bars, only broad connection info.";
}

function initNetworkStatus() {
  updateNetworkDisplay();

  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  if (connection && connection.addEventListener) {
    connection.addEventListener("change", updateNetworkDisplay);
  }

  window.addEventListener("online", updateNetworkDisplay);
  window.addEventListener("offline", updateNetworkDisplay);
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
  const fields = [
    ["profileCallsign", "callsign"],
    ["profileFaction", "faction"],
    ["profileRank", "rank"],
    ["profileLocation", "location"],
    ["profileWeapon", "weapon"]
  ];

  fields.forEach(([inputId, key]) => {
    const input = document.getElementById(inputId);
    if (input) input.value = state.profile[key] || "";
  });

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
    const input = document.getElementById(inputId);
    if (!input) return;

    input.addEventListener("input", event => {
      state.profile[key] = event.target.value;
      saveState();
      updateHeaderProfile();
    });
  });
}
function showEmission() {
  const alert = document.getElementById("emissionAlert");
  playSound("alert");
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
        tryBootSound();
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
  document.getElementById("newPinBtn").addEventListener("click", addCustomPin);
  document.getElementById("pinManagerBtn").addEventListener("click", openPinManager);
  document.getElementById("toggleAllPinsBtn").addEventListener("click", toggleAllPinsQuick);
  document.getElementById("showAllPinsBtn").addEventListener("click", () => setAllPinsHidden(false));
  document.getElementById("hideAllPinsBtn").addEventListener("click", () => setAllPinsHidden(true));
  document.getElementById("resetPinsBtn").addEventListener("click", resetWorldPins);
  document.getElementById("exportPinsBtn").addEventListener("click", exportWorldPinCoordinates);
  document.getElementById("copyPinsBtn").addEventListener("click", copyExportedPins);
  document.getElementById("saveNewPinBtn").addEventListener("click", createPinFromForm);
  document.getElementById("cancelNewPinBtn").addEventListener("click", closePinCreator);
  document.getElementById("mapSectionSelect").addEventListener("change", event => setMapSection(event.target.value));
  document.getElementById("loreSearch").addEventListener("input", renderLore);
  document.getElementById("taskAddBtn").addEventListener("click", addTask);
  document.getElementById("taskInput").addEventListener("keydown", event => {
    if (event.key === "Enter") addTask();
  });
  bindProfileInputs();
  bindPatchPicker();

  const toggleAiBtn = document.getElementById("toggleAiMessagesBtn");
  const injectAiBtn = document.getElementById("injectAiMessageBtn");
  const toggleBlockedUsersBtn = document.getElementById("toggleBlockedUsersBtn");
  const messageList = document.getElementById("messageList");
  if (toggleAiBtn) toggleAiBtn.addEventListener("click", toggleAiMessages);
  if (toggleBlockedUsersBtn) toggleBlockedUsersBtn.addEventListener("click", toggleBlockedUsersPanel);
  if (messageList) messageList.addEventListener("click", handleMessageAction);
  if (injectAiBtn) injectAiBtn.addEventListener("click", () => {
    state.showAiMessages = true;
    updateAiToggleButton();
    injectAiZoneMessage();
  });


  const soundToggleBtn = document.getElementById("soundToggleBtn");
  const testSoundBtn = document.getElementById("testSoundBtn");
  if (soundToggleBtn) soundToggleBtn.addEventListener("click", toggleSoundSetting);
  if (testSoundBtn) testSoundBtn.addEventListener("click", () => playSound("boot"));
}
function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js").catch(() => console.log("Service worker could not be registered."));
  }
}
async function init() {
  updateClock();
  initBatteryStatus();
  initNetworkStatus();
  setInterval(updateClock, 1000);
  initSoundBank();
  bindGlobalSoundCues();
  updateSoundButton();

  bindEvents();
  renderMessageFilters();
  renderMessages();
  renderMapSectionSelect();
  renderMapFilters();
  updateToggleAllPinsButton();
  await initLeafletMap();
  renderLoreFilters();
  renderLore();
  renderTasks();
  loadProfileInputs();

  setInterval(() => { if (Math.random() > 0.78) showEmission(); }, 16000);

  runBootSequence();
  bindFirebaseAuthUI();
  initFirebaseNetwork();

  startAiChatterTimer();

  registerServiceWorker();
}



// Local AI / Zone chatter layer
const aiZoneActors = [
  { sender: "Sidorovich", faction: "Trader", lines: [
    "If you are alive enough to read this, you are alive enough to bring me something valuable.",
    "Artifacts do not sell themselves, stalker.",
    "A cheap detector and expensive confidence will get you killed."
  ]},
  { sender: "Duty Patrol", faction: "Duty", lines: [
    "Mutant movement reported near the northern road. Keep rifles clean and eyes open.",
    "The Zone expands when fools treat it like a playground.",
    "Any stalker entering high-risk territory should report sightings immediately."
  ]},
  { sender: "Freedom Scout", faction: "Freedom", lines: [
    "Heard gunfire by the old road. Either trouble or someone arguing with the scenery.",
    "Duty checkpoint is twitchy today. Smile less, walk wider.",
    "The Zone is singing again. Probably best not to hum along."
  ]},
  { sender: "Ecologist Field Team", faction: "Ecologist", lines: [
    "Anomaly readings are drifting. Mark your route and avoid unnecessary heroics.",
    "Reminder: unknown artifacts are not to be stored in pockets, mouths, or lunch tins.",
    "Psi interference detected. If your thoughts become someone else's, leave the area."
  ]},
  { sender: "Unknown Signal", faction: "Unknown", lines: [
    "The dogs are not barking. This is worse than barking.",
    "There is a light beneath the concrete. Do not answer it.",
    "Your PDA clock is wrong. It has always been wrong."
  ]},
  { sender: "Monolith Voice", faction: "Monolith", lines: [
    "The stone remembers the ones who walked away.",
    "Come closer. The centre is warm.",
    "Your path circles the same wound."
  ]}
];

function ensureAiState() {
  if (!Array.isArray(state.aiMessages)) state.aiMessages = [];
  if (typeof state.showAiMessages !== "boolean") state.showAiMessages = false;
}

function createAiZoneMessage() {
  ensureAiState();
  const actor = aiZoneActors[Math.floor(Math.random() * aiZoneActors.length)];
  const text = actor.lines[Math.floor(Math.random() * actor.lines.length)];
  return {
    id: "ai_" + id(),
    channel: "AI Chatter",
    sender: actor.sender,
    faction: actor.faction,
    text,
    time: nowTime(),
    isAi: true
  };
}

function injectAiZoneMessage() {
  ensureAiState();
  state.aiMessages.push(createAiZoneMessage());
  if (state.aiMessages.length > 25) state.aiMessages = state.aiMessages.slice(-25);
  saveState();
  renderMessageFilters();
  renderMessages();
}

function toggleAiMessages() {
  ensureAiState();
  state.showAiMessages = !state.showAiMessages;
  saveState();
  updateAiToggleButton();
  if (state.showAiMessages && state.aiMessages.length === 0) injectAiZoneMessage();
  else {
    renderMessageFilters();
    renderMessages();
  }
}

function updateAiToggleButton() {
  const btn = document.getElementById("toggleAiMessagesBtn");
  if (!btn) return;
  btn.textContent = state.showAiMessages ? "AI Chatter: On" : "AI Chatter: Off";
  btn.classList.toggle("active", state.showAiMessages);
}

function getDisplayMessages() {
  ensureAiState();
  ensureControlState();
  const humanMessages = (state.messages || []).filter(message => !isSenderBlocked(message));
  if (!state.showAiMessages) return humanMessages;
  return [...humanMessages, ...state.aiMessages].slice(-85);
}

function startAiChatterTimer() {
  setInterval(() => {
    ensureAiState();
    if (!state.showAiMessages) return;
    if (Math.random() > 0.72) injectAiZoneMessage();
  }, 45000);
}

// Firebase online auth + Zone Broadcast chat
const firebaseConfig = {
  apiKey: "AIzaSyCakMUYMPR0OUxhYolHox3wp-c3lOoqYJs",
  authDomain: "stalkernet-82ec6.firebaseapp.com",
  projectId: "stalkernet-82ec6",
  storageBucket: "stalkernet-82ec6.firebasestorage.app",
  messagingSenderId: "1030971092561",
  appId: "1:1030971092561:web:0c6c1b937e64ef7a2fd270"
};

let firebaseReady = false;
let auth = null;
let db = null;
let currentUser = null;
let currentProfile = null;
let unsubscribeZoneMessages = null;

function initFirebaseNetwork() {
  if (!window.firebase) {
    setAuthStatus("Firebase scripts did not load. Check your connection.", true);
    return;
  }

  try {
    if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
    auth = firebase.auth();
    db = firebase.firestore();
    firebaseReady = true;

    auth.onAuthStateChanged(async user => {
      currentUser = user || null;
      currentProfile = null;

      if (unsubscribeZoneMessages) {
        unsubscribeZoneMessages();
        unsubscribeZoneMessages = null;
      }

      updateAuthUI();

      if (user) {
        setAuthStatus("Connected to StalkerNet.");
        await loadUserProfile(user);
        listenToZoneBroadcast();
      } else {
        renderMessages();
        setAuthStatus("Offline. Sign in to access live broadcast.");
      }
    });
  } catch (error) {
    setAuthStatus(`Firebase error: ${error.message}`, true);
  }
}

function setAuthStatus(text, isError = false) {
  const status = document.getElementById("authStatus");
  if (!status) return;
  status.textContent = text || "";
  status.classList.toggle("auth-error", Boolean(isError));
}

function updateAuthUI() {
  updateHeaderProfile();
  const loggedOut = document.getElementById("authLoggedOut");
  const loggedIn = document.getElementById("authLoggedIn");
  if (!loggedOut || !loggedIn) return;

  loggedOut.classList.toggle("hidden", Boolean(currentUser));
  loggedIn.classList.toggle("hidden", !currentUser);

  const callsignText = document.getElementById("authCallsignText");
  const factionText = document.getElementById("authFactionText");
  if (callsignText) callsignText.textContent = currentProfile?.callsign || currentUser?.email || "Unknown Stalker";
  if (factionText) factionText.textContent = currentProfile?.faction || "Faction unknown";

  const callsignInput = document.getElementById("callsignInput");
  const factionSelect = document.getElementById("factionSelect");
  if (callsignInput && currentProfile?.callsign) callsignInput.value = currentProfile.callsign;
  if (factionSelect && currentProfile?.faction) factionSelect.value = currentProfile.faction;
  fillOnlineProfileForm();
  updateHeaderProfile();
}

async function registerAccount() {
  if (!firebaseReady) return setAuthStatus("Firebase is not ready yet.", true);
  const email = document.getElementById("authEmail").value.trim();
  const password = document.getElementById("authPassword").value;
  if (!email || !password) return setAuthStatus("Enter email and password first.", true);
  if (password.length < 6) return setAuthStatus("Password must be at least 6 characters.", true);

  try {
    const cred = await auth.createUserWithEmailAndPassword(email, password);
    await ensureUserProfile(cred.user);
    setAuthStatus("Account created. Set your callsign.");
  } catch (error) {
    setAuthStatus(error.message, true);
  }
}

async function loginAccount() {
  if (!firebaseReady) return setAuthStatus("Firebase is not ready yet.", true);
  const email = document.getElementById("authEmail").value.trim();
  const password = document.getElementById("authPassword").value;
  if (!email || !password) return setAuthStatus("Enter email and password first.", true);

  try {
    await auth.signInWithEmailAndPassword(email, password);
    setAuthStatus("Logged in.");
  } catch (error) {
    setAuthStatus(error.message, true);
  }
}

async function logoutAccount() {
  if (!auth) return;
  try {
    await auth.signOut();
    setAuthStatus("Logged out.");
  } catch (error) {
    setAuthStatus(error.message, true);
  }
}

async function ensureUserProfile(user) {
  const ref = db.collection("users").doc(user.uid);
  const doc = await ref.get();

  if (!doc.exists) {
    await ref.set({
      uid: user.uid,
      email: user.email || "",
      callsign: "",
      faction: "Loner",
      rank: "Rookie",
      status: "Available",
      reputation: "Neutral",
      avatar: "loners",
      badges: "",
      area: "",
      weapon: "",
      bio: "",
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      lastOnline: firebase.firestore.FieldValue.serverTimestamp()
    }, { merge: true });
  } else {
    await ref.set({ lastOnline: firebase.firestore.FieldValue.serverTimestamp() }, { merge: true });
  }
}

async function loadUserProfile(user) {
  try {
    await ensureUserProfile(user);
    const ref = db.collection("users").doc(user.uid);
    const doc = await ref.get();
    currentProfile = doc.exists ? doc.data() : null;
    updateAuthUI();

    if (!currentProfile?.callsign) {
      setAuthStatus("Choose a callsign before sending messages.");
    }
  } catch (error) {
    setAuthStatus(error.message, true);
  }
}

async function saveOnlineProfile() {
  if (!currentUser) return setAuthStatus("Login first.", true);

  const callsign = getProfileField("callsignInput");
  const faction = getProfileField("factionSelect") || "Loner";
  const avatar = applyPatchFromFaction();
  const rank = getProfileField("onlineRankInput") || "Rookie";
  const status = getProfileField("onlineStatusSelect") || "Available";
  const reputation = getProfileField("reputationSelect") || "Neutral";
  const badges = getProfileField("badgesInput");
  const area = getProfileField("onlineAreaInput");
  const weapon = getProfileField("onlineWeaponInput");
  const bio = getProfileField("onlineBioInput");

  if (!callsign) return setAuthStatus("Enter a callsign first.", true);
  if (callsign.length > 32) return setAuthStatus("Callsign is too long.", true);
  if (bio.length > 240) return setAuthStatus("Bio is too long.", true);

  try {
    const existing = currentProfile || {};
    const profile = {
      uid: currentUser.uid,
      email: currentUser.email || "",
      callsign,
      faction,
      avatar,
      rank,
      status,
      reputation,
      badges,
      area,
      weapon,
      bio,
      createdAt: existing.createdAt || firebase.firestore.FieldValue.serverTimestamp(),
      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
      lastOnline: firebase.firestore.FieldValue.serverTimestamp()
    };

    await db.collection("users").doc(currentUser.uid).set(profile, { merge: true });
    currentProfile = { ...existing, ...profile };
    syncLocalProfileFromOnline();
    updateHeaderProfile();

    state.profile.callsign = callsign;
    state.profile.faction = faction;
    state.profile.rank = rank;
    state.profile.location = area || state.profile.location;
    state.profile.weapon = weapon || state.profile.weapon;
    saveState();
    loadProfileInputs();

    updateAuthUI();
    updateIdPreview();
    setAuthStatus("Stalker card saved.");
  } catch (error) {
    setAuthStatus(error.message, true);
  }
}

function listenToZoneBroadcast() {
  if (!db || !currentUser) return;

  unsubscribeZoneMessages = db
    .collection("channels")
    .doc("zone_broadcast")
    .collection("messages")
    .orderBy("createdAt", "desc")
    .limit(60)
    .onSnapshot(snapshot => {
      const onlineMessages = [];
      snapshot.forEach(doc => {
        const data = doc.data();
        const created = data.createdAt?.toDate ? data.createdAt.toDate() : new Date();

        onlineMessages.push({
          id: doc.id,
          messageId: doc.id,
          senderId: data.senderId || "",
          channel: "Zone Broadcast",
          sender: data.callsign || "Unknown Stalker",
          faction: data.faction || "Unknown",
          text: data.text || "",
          time: created.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          createdAtMs: created.getTime(),
          isOnline: true
        });
      });

      state.messages = onlineMessages.reverse();
      state.activeMessageFilter = "All";
      saveState();
      renderMessageFilters();
      renderMessages();
    }, error => {
      setAuthStatus(error.message, true);
    });
}

async function sendOnlineZoneMessage(text) {
  if (!currentUser) return setAuthStatus("Login before sending live messages.", true);
  if (!currentProfile?.callsign) return setAuthStatus("Save your callsign before sending messages.", true);

  const cleanText = text.trim();
  if (!cleanText) return;
  if (cleanText.length > 800) return setAuthStatus("Message is too long. Keep it under 800 characters.", true);

  try {
    await db.collection("channels").doc("zone_broadcast").collection("messages").add({
      senderId: currentUser.uid,
      callsign: currentProfile.callsign,
      faction: currentProfile.faction || "Loner",
      rank: currentProfile.rank || "Rookie",
      status: currentProfile.status || "Available",
      reputation: currentProfile.reputation || "Neutral",
      avatar: currentProfile.avatar || "loners",
      text: cleanText,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    setAuthStatus("Message transmitted.");
  } catch (error) {
    setAuthStatus(error.message, true);
  }
}

const originalSendMessage = sendMessage;
sendMessage = async function() {
  const input = document.getElementById("messageInput");
  const text = input.value.trim();
  if (!text) return;

  if (firebaseReady && currentUser) {
    input.value = "";
    await sendOnlineZoneMessage(text);
    return;
  }

  setAuthStatus("Login to send live Zone Broadcast messages.", true);
};




function openIdTab() {
  const profileTab = document.querySelector('[data-tab="profile"]') ? "profile" : "id";
  switchTab(profileTab);
}

// Online stalker profile cards

const PATCH_OPTIONS = {
  ecologists: { name: "Ecologists", src: "assets/faction-patches/ecologists.png" },
  clear_sky: { name: "Clear Sky", src: "assets/faction-patches/clear_sky.png" },
  freedom: { name: "Freedom", src: "assets/faction-patches/freedom.png" },
  renegades: { name: "Renegades", src: "assets/faction-patches/renegades.png" },
  duty: { name: "Duty", src: "assets/faction-patches/duty.png" },
  loners: { name: "Loners", src: "assets/faction-patches/loners.png" },
  mercenaries: { name: "Mercenaries", src: "assets/faction-patches/mercenaries.png" },
  isg: { name: "ISG", src: "assets/faction-patches/isg.png" },
  monolith: { name: "Monolith", src: "assets/faction-patches/monolith.png" },
  military: { name: "Military", src: "assets/faction-patches/military.png" },
  bandits: { name: "Bandits", src: "assets/faction-patches/bandits.png" },
  sin: { name: "Sin", src: "assets/faction-patches/sin.png" }
};


function patchKeyFromFaction(faction = "Loner") {
  const cleaned = String(faction || "Loner").toLowerCase().replace(/[^a-z0-9]+/g, "_");
  const map = {
    loner: "loners",
    loners: "loners",
    free_stalkers: "loners",
    duty: "duty",
    freedom: "freedom",
    ecologist: "ecologists",
    ecologists: "ecologists",
    clear_sky: "clear_sky",
    mercenary: "mercenaries",
    mercenaries: "mercenaries",
    monolith: "monolith",
    bandit: "bandits",
    bandits: "bandits",
    renegade: "renegades",
    renegades: "renegades",
    isg: "isg",
    military: "military",
    sin: "sin"
  };
  return map[cleaned] || "loners";
}

function applyPatchFromFaction() {
  const faction = getProfileField("factionSelect") || "Loner";
  const key = patchKeyFromFaction(faction);
  setSelectedPatch(key);
  return key;
}

function updateSelectedPatchPreview(patchKey = "loners") {
  const key = normalizePatchKey(patchKey);
  const patch = PATCH_OPTIONS[key] || PATCH_OPTIONS.loners;
  const preview = document.getElementById("selectedPatchPreview");
  const name = document.getElementById("selectedPatchName");

  if (preview) {
    preview.className = `stalker-avatar patch-avatar avatar-${key}`;
    preview.innerHTML = patchImageHtml(key, `${patch.name} patch`);
  }

  if (name) name.textContent = patch.name;
}

function normalizePatchKey(value = "loners") {
  const map = {
    mask: "loners",
    rookie: "loners",
    veteran: "loners",
    trader: "loners",
    scientist: "ecologists",
    monolith: "monolith",
    mercenary: "mercenaries",
    mercenaries: "mercenaries",
    bandit: "bandits",
    clearsky: "clear_sky",
    "clear sky": "clear_sky",
    free_stalkers: "loners",
    loner: "loners",
    duty: "duty",
    freedom: "freedom",
    military: "military",
    isg: "isg",
    sin: "sin",
    renegades: "renegades",
    ecologist: "ecologists",
    ecologists: "ecologists"
  };
  const cleaned = String(value || "loners").toLowerCase().replace(/[^a-z0-9]+/g, "_");
  return PATCH_OPTIONS[cleaned] ? cleaned : (map[cleaned] || map[String(value || "").toLowerCase()] || "loners");
}

function patchImageHtml(patchKey, altText = "Faction patch") {
  const key = normalizePatchKey(patchKey);
  const patch = PATCH_OPTIONS[key] || PATCH_OPTIONS.loners;
  return `<img src="${patch.src}" alt="${escapeHtml(altText)}" />`;
}

function setSelectedPatch(patchKey) {
  const key = normalizePatchKey(patchKey);
  const input = document.getElementById("avatarSelect");
  if (input) input.value = key;

  document.querySelectorAll(".patch-option").forEach(btn => {
    btn.classList.toggle("selected", btn.dataset.patch === key);
  });

  updateSelectedPatchPreview(key);
}

function bindPatchPicker() {
  document.querySelectorAll(".patch-option").forEach(btn => {
    btn.addEventListener("click", () => {
      setSelectedPatch(btn.dataset.patch);
    });
  });

  const factionSelect = document.getElementById("factionSelect");
  if (factionSelect) {
    factionSelect.addEventListener("change", () => {
      applyPatchFromFaction();
    });
  }
}


function factionClassName(faction = "Loner") {
  return "faction-" + String(faction).toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

function getBadgeList(rawBadges = "") {
  return String(rawBadges || "")
    .split(",")
    .map(badge => badge.trim())
    .filter(Boolean)
    .slice(0, 5);
}

async function getLastMessageForUser(userId) {
  if (!db || !userId) return null;
  try {
    const snapshot = await db.collection("channels")
      .doc("zone_broadcast")
      .collection("messages")
      .where("senderId", "==", userId)
      .orderBy("createdAt", "desc")
      .limit(1)
      .get();

    if (snapshot.empty) return null;
    const data = snapshot.docs[0].data();
    return { text: data.text || "", createdAt: data.createdAt || null };
  } catch (error) {
    console.warn("Could not load last message:", error);
    return null;
  }
}

function getProfileField(id) {
  const element = document.getElementById(id);
  return element ? element.value.trim() : "";
}

function setProfileField(id, value) {
  const element = document.getElementById(id);
  if (element) element.value = value || "";
}

function firebaseDateToText(value) {
  if (!value) return "Unknown";
  const date = value.toDate ? value.toDate() : new Date(value);
  if (Number.isNaN(date.getTime())) return "Unknown";
  return date.toLocaleDateString() + " " + date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}


function updateIdPreview() {
  const profile = currentProfile || {
    callsign: state.profile?.callsign,
    faction: state.profile?.faction,
    rank: state.profile?.rank,
    reputation: "Neutral",
    avatar: "loners",
    bio: ""
  };

  const avatar = profile.avatar || patchKeyFromFaction(profile.faction || "Loner");
  const faction = profile.faction || "Unknown";
  const callsign = profile.callsign || "Unknown Stalker";
  const rank = profile.rank || "Unknown";
  const reputation = profile.reputation || "Neutral";

  const avatarEl = document.getElementById("idPreviewAvatar");
  if (avatarEl) {
    const key = normalizePatchKey(avatar);
    avatarEl.className = `stalker-avatar patch-avatar avatar-${key}`;
    avatarEl.innerHTML = patchImageHtml(key, `${callsign} patch`);
  }

  const nameEl = document.getElementById("idPreviewName");
  if (nameEl) nameEl.textContent = callsign;

  const metaEl = document.getElementById("idPreviewMeta");
  if (metaEl) metaEl.textContent = `${faction} // ${rank}`;

  const repEl = document.getElementById("idPreviewRep");
  if (repEl) {
    repEl.className = `faction-pill ${typeof factionClassName === "function" ? factionClassName(faction) : ""}`;
    repEl.textContent = reputation;
  }

  const bioEl = document.getElementById("idPreviewBio");
  if (bioEl) bioEl.textContent = profile.bio || "No PDA note recorded.";
}

function fillOnlineProfileForm() {
  if (!currentProfile) return;
  setProfileField("callsignInput", currentProfile.callsign || "");
  setProfileField("factionSelect", currentProfile.faction || "Loner");
  setProfileField("avatarSelect", patchKeyFromFaction(currentProfile.faction || "Loner"));
  setSelectedPatch(patchKeyFromFaction(currentProfile.faction || "Loner"));
  setProfileField("onlineRankInput", currentProfile.rank || "Rookie");
  setProfileField("onlineStatusSelect", currentProfile.status || "Available");
  setProfileField("reputationSelect", currentProfile.reputation || "Neutral");
  setProfileField("badgesInput", currentProfile.badges || "");
  setProfileField("onlineAreaInput", currentProfile.area || "");
  setProfileField("onlineWeaponInput", currentProfile.weapon || "");
  setProfileField("onlineBioInput", currentProfile.bio || "");
  updateIdPreview();
}

async function openStalkerCardByUserId(userId, fallback = {}) {
  if (!db || !userId) return;
  try {
    const doc = await db.collection("users").doc(userId).get();
    const profile = doc.exists ? doc.data() : fallback;
    const lastMessage = await getLastMessageForUser(userId);
    renderStalkerCard(profile, fallback, lastMessage);
  } catch (error) {
    setAuthStatus(error.message, true);
  }
}

function renderStalkerCard(profile = {}, fallback = {}, lastMessage = null) {
  const modal = document.getElementById("stalkerCardModal");
  if (!modal) return;

  const callsign = profile.callsign || fallback.callsign || "Unknown Stalker";
  const faction = profile.faction || fallback.faction || "Unknown";
  const avatar = profile.avatar || patchKeyFromFaction(profile.faction || "Loner");
  const badges = getBadgeList(profile.badges);

  document.getElementById("cardCallsign").textContent = callsign;
  document.getElementById("cardFaction").textContent = faction;
  document.getElementById("cardRank").textContent = profile.rank || "Unknown";
  document.getElementById("cardStatus").textContent = profile.status || "Unknown";

  const reputationEl = document.getElementById("cardReputation");
  if (reputationEl) reputationEl.textContent = profile.reputation || "Neutral";

  document.getElementById("cardArea").textContent = profile.area || "Unknown";
  document.getElementById("cardWeapon").textContent = profile.weapon || "Unknown";

  const joinedEl = document.getElementById("cardJoined");
  if (joinedEl) joinedEl.textContent = firebaseDateToText(profile.createdAt);

  document.getElementById("cardLastOnline").textContent = firebaseDateToText(profile.lastOnline || profile.updatedAt || profile.createdAt);
  document.getElementById("cardBio").textContent = profile.bio || "No PDA note recorded.";

  const avatarBox = document.getElementById("cardAvatar");
  if (avatarBox) {
    const key = normalizePatchKey(avatar);
    avatarBox.className = `stalker-avatar patch-avatar avatar-${key}`;
    avatarBox.innerHTML = patchImageHtml(key, `${callsign} patch`);
  }

  const factionBadge = document.getElementById("cardFactionBadge");
  if (factionBadge) {
    factionBadge.className = `faction-pill ${factionClassName(faction)}`;
    factionBadge.textContent = faction;
  }

  const badgeBox = document.getElementById("cardBadges");
  if (badgeBox) {
    badgeBox.innerHTML = "";
    if (badges.length) {
      badges.forEach(badge => {
        const chip = document.createElement("span");
        chip.textContent = badge;
        badgeBox.appendChild(chip);
      });
    } else {
      const chip = document.createElement("span");
      chip.textContent = "No badges recorded";
      chip.className = "muted-badge";
      badgeBox.appendChild(chip);
    }
  }

  const lastMessageBox = document.getElementById("cardLastMessage");
  if (lastMessageBox) {
    if (lastMessage?.text) {
      lastMessageBox.textContent = `"${lastMessage.text}" // ${firebaseDateToText(lastMessage.createdAt)}`;
    } else {
      lastMessageBox.textContent = "No recent broadcast found.";
    }
  }

  modal.classList.remove("hidden");
}

function closeStalkerCard() {
  const modal = document.getElementById("stalkerCardModal");
  if (modal) modal.classList.add("hidden");
}

function handleStalkerCardClick(event) {
  const sender = event.target.closest("[data-stalker-card-user]");
  if (!sender) return;
  const userId = sender.dataset.stalkerCardUser;
  if (!userId) return;
  openStalkerCardByUserId(userId, {
    callsign: sender.dataset.callsign || "Unknown Stalker",
    faction: sender.dataset.faction || "Unknown"
  });
}

function ensureControlState() {
  if (!state.blockedSenders || typeof state.blockedSenders !== "object") {
    state.blockedSenders = {};
  }
}

function isSenderBlocked(message) {
  ensureControlState();
  return Boolean(message.senderId && state.blockedSenders[message.senderId]);
}

function toggleBlockSender(senderId, callsign = "this stalker") {
  if (!senderId) return;
  ensureControlState();
  if (state.blockedSenders[senderId]) {
    delete state.blockedSenders[senderId];
  } else {
    if (!confirm(`Block messages from ${callsign}? This only hides them on your device.`)) return;
    state.blockedSenders[senderId] = { callsign, blockedAt: Date.now() };
  }
  saveState();
  renderBlockedUsersList();
  renderMessages();
}

async function deleteOwnMessage(messageId) {
  if (!currentUser || !db) return setAuthStatus("Login before deleting messages.", true);
  if (!messageId) return;
  if (!confirm("Delete this transmission from Zone Broadcast?")) return;

  try {
    await db.collection("channels").doc("zone_broadcast").collection("messages").doc(messageId).delete();
    setAuthStatus("Message deleted.");
  } catch (error) {
    setAuthStatus(error.message, true);
  }
}

async function reportMessage(messageId, senderId, callsign, text) {
  if (!currentUser || !db) return setAuthStatus("Login before reporting messages.", true);
  if (!messageId) return;

  const reason = prompt("Report reason? Example: spam, abuse, harassment, spoilers");
  if (!reason || !reason.trim()) return;

  try {
    await db.collection("reports").add({
      messageId,
      channelId: "zone_broadcast",
      senderId: senderId || "",
      callsign: callsign || "Unknown",
      textPreview: (text || "").slice(0, 220),
      reason: reason.trim().slice(0, 220),
      reporterId: currentUser.uid,
      reporterEmail: currentUser.email || "",
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      status: "open"
    });
    setAuthStatus("Message reported.");
  } catch (error) {
    setAuthStatus(error.message, true);
  }
}

function handleMessageAction(event) {
  const button = event.target.closest("[data-message-action]");
  if (!button) return;
  const action = button.dataset.messageAction;
  const messageId = button.dataset.messageId;
  const senderId = button.dataset.senderId;
  const callsign = button.dataset.callsign || "Unknown";
  const text = button.dataset.text || "";

  if (action === "delete") deleteOwnMessage(messageId);
  if (action === "report") reportMessage(messageId, senderId, callsign, text);
  if (action === "block") toggleBlockSender(senderId, callsign);
}

function renderBlockedUsersList() {
  ensureControlState();
  const list = document.getElementById("blockedUsersList");
  if (!list) return;

  const entries = Object.entries(state.blockedSenders || {});
  if (!entries.length) {
    list.innerHTML = `<p class="muted">No blocked users.</p>`;
    return;
  }

  list.innerHTML = "";
  entries.forEach(([senderId, info]) => {
    const row = document.createElement("div");
    row.className = "blocked-user-row";
    row.innerHTML = `
      <span>${escapeHtml(info.callsign || "Unknown Stalker")}</span>
      <button class="tiny-btn" data-unblock-user="${senderId}">Unblock</button>
    `;
    list.appendChild(row);
  });

  document.querySelectorAll("[data-unblock-user]").forEach(btn => {
    btn.onclick = () => {
      delete state.blockedSenders[btn.dataset.unblockUser];
      saveState();
      renderBlockedUsersList();
      renderMessages();
    };
  });
}

function toggleBlockedUsersPanel() {
  const list = document.getElementById("blockedUsersList");
  if (!list) return;
  list.classList.toggle("hidden");
  renderBlockedUsersList();
}

function bindFirebaseAuthUI() {
  const loginBtn = document.getElementById("loginBtn");
  const registerBtn = document.getElementById("registerBtn");
  const logoutBtn = document.getElementById("logoutBtn");
  const saveProfileBtn = document.getElementById("saveProfileBtn");

  if (loginBtn) loginBtn.addEventListener("click", loginAccount);
  if (registerBtn) registerBtn.addEventListener("click", registerAccount);
  if (logoutBtn) logoutBtn.addEventListener("click", logoutAccount);
  if (saveProfileBtn) saveProfileBtn.addEventListener("click", saveOnlineProfile);

  const closeStalkerCardBtn = document.getElementById("closeStalkerCardBtn");
  const stalkerCardBackdrop = document.getElementById("stalkerCardBackdrop");
  const messageListForCards = document.getElementById("messageList");

  if (closeStalkerCardBtn) closeStalkerCardBtn.addEventListener("click", closeStalkerCard);
  if (stalkerCardBackdrop) stalkerCardBackdrop.addEventListener("click", closeStalkerCard);
  if (messageListForCards) messageListForCards.addEventListener("click", handleStalkerCardClick);

  const goToIdBtn = document.getElementById("goToIdBtn");
  if (goToIdBtn) goToIdBtn.addEventListener("click", () => openIdTab());

  const authPassword = document.getElementById("authPassword");
  if (authPassword) {
    authPassword.addEventListener("keydown", event => {
      if (event.key === "Enter") loginAccount();
    });
  }
}

init();













// v2.9.1 richer mutant descriptions: broader S.T.A.L.K.E.R. series lore, pending in-game Anomaly PDA verification.











// v3.1 Archive expansion: Factions + Mutants + Anomalies + Artifacts
const ARTIFACT_ARCHIVE_ENTRIES = [{"title": "Jellyfish", "category": "Artifacts", "value": "Gravitational artifact", "base": "Associated with gravitational anomalies", "relations": "Useful early artifact; exact effects vary by game/mod.", "text": "Jellyfish is one of the classic Zone artifacts associated with gravitational anomaly fields. It is generally treated as a common artifact and is often one of the first artifact names stalkers learn. Its value comes from being recognisable, tradable, and tied to the strange physical forces created by the Zone.", "sourceNote": "General S.T.A.L.K.E.R. artifact lore, pending replacement with Anomaly in-game description."}, {"title": "Stone Blood", "category": "Artifacts", "value": "Gravitational / organic-looking artifact", "base": "Associated with gravitational anomaly fields", "relations": "Known as a common artifact in series artifact lists.", "text": "Stone Blood is a reddish artifact often associated with gravitational anomalies. Its name and appearance suggest mineralised organic matter or blood-like veins trapped inside stone. It is part of the Zone’s unsettling habit of making valuable objects look like something that should have stayed inside a body.", "sourceNote": "General S.T.A.L.K.E.R. artifact lore, pending replacement with Anomaly in-game description."}, {"title": "Wrenched", "category": "Artifacts", "value": "Gravitational artifact", "base": "Associated with gravitational anomalies", "relations": "Exact effects vary by game/mod.", "text": "Wrenched is a gravitational artifact from the S.T.A.L.K.E.R. series. Like other gravity-born artifacts, it is connected to distortions of mass, pressure and force. Its value comes from anomaly interaction rather than ordinary material properties.", "sourceNote": "General S.T.A.L.K.E.R. artifact lore, pending replacement with Anomaly in-game description."}, {"title": "Gravi", "category": "Artifacts", "value": "Gravitational artifact", "base": "Associated with gravitational anomalies", "relations": "Often linked with weight or gravitational effects.", "text": "Gravi is a gravitational artifact whose name directly points to its anomaly family. In wider S.T.A.L.K.E.R. artifact lore, gravitational artifacts often influence force, weight or impact protection, making them useful but dangerous objects to carry without proper understanding.", "sourceNote": "General S.T.A.L.K.E.R. artifact lore, pending replacement with Anomaly in-game description."}, {"title": "Goldfish", "category": "Artifacts", "value": "Gravitational artifact", "base": "Associated with gravitational anomalies", "relations": "Rare or valuable in several S.T.A.L.K.E.R. titles.", "text": "Goldfish is a valuable gravitational artifact known across the series. It is commonly treated as a higher-value artifact than basic gravitational finds, the sort of object that can make a stalker rich, reckless, or dead depending on who sees it first.", "sourceNote": "General S.T.A.L.K.E.R. artifact lore, pending replacement with Anomaly in-game description."}, {"title": "Night Star", "category": "Artifacts", "value": "Gravitational artifact", "base": "Associated with gravitational anomalies", "relations": "Often treated as valuable and dangerous.", "text": "Night Star is a gravitational artifact with a distinctive, prized reputation. In broader series lore it is one of the more recognisable artifacts tied to gravity anomaly fields. Its rarity and usefulness make it exactly the kind of treasure that turns sensible routes into bad decisions.", "sourceNote": "General S.T.A.L.K.E.R. artifact lore, pending replacement with Anomaly in-game description."}, {"title": "Spring", "category": "Artifacts", "value": "Gravitational artifact", "base": "Associated with gravitational anomalies", "relations": "Often linked with compression, weight or force.", "text": "Spring is a gravitational artifact associated with pressure, compression and force. Its behaviour fits the Zone’s habit of turning impossible physics into something small enough to carry, sell, or foolishly wear on a belt.", "sourceNote": "General S.T.A.L.K.E.R. artifact lore, pending replacement with Anomaly in-game description."}, {"title": "Sparkler", "category": "Artifacts", "value": "Electrical artifact", "base": "Associated with electrical anomalies", "relations": "Electrical artifact family.", "text": "Sparkler is an electrical artifact associated with Electro-type anomaly fields. It belongs to the bright, crackling side of the Zone’s artifact ecosystem, where beauty and electrocution share a bunk bed.", "sourceNote": "General S.T.A.L.K.E.R. artifact lore, pending replacement with Anomaly in-game description."}, {"title": "Flash", "category": "Artifacts", "value": "Electrical artifact", "base": "Associated with electrical anomalies", "relations": "Electrical artifact family.", "text": "Flash is an electrical artifact connected to sudden discharge and stored anomalous energy. In series artifact lists it belongs to the same broad family as Sparkler and Moonlight, items shaped by the Zone’s electrical hazards.", "sourceNote": "General S.T.A.L.K.E.R. artifact lore, pending replacement with Anomaly in-game description."}, {"title": "Moonlight", "category": "Artifacts", "value": "Electrical artifact", "base": "Associated with electrical anomalies", "relations": "Electrical artifact family.", "text": "Moonlight is an electrical artifact with a strange luminous quality. In broader S.T.A.L.K.E.R. lore, it is one of the more memorable electrical artifacts, valuable because it is both useful and unmistakably unnatural.", "sourceNote": "General S.T.A.L.K.E.R. artifact lore, pending replacement with Anomaly in-game description."}, {"title": "Battery", "category": "Artifacts", "value": "Electrical artifact", "base": "Associated with electrical anomaly behaviour", "relations": "Classic artifact name; exact stats vary.", "text": "Battery is an artifact associated with electrical energy and anomalous charge. It is a very literal reminder that the Zone can produce objects that behave like equipment, organisms and physics mistakes all at once.", "sourceNote": "General S.T.A.L.K.E.R. artifact lore, pending replacement with Anomaly in-game description."}, {"title": "Crystal", "category": "Artifacts", "value": "Thermal artifact", "base": "Associated with thermal anomalies", "relations": "Thermal artifact family.", "text": "Crystal is a thermal artifact associated with Burner-like anomaly fields. It is often described as being formed through anomalous heat and transformed material, making it one of the classic examples of ordinary matter rewritten by the Zone.", "sourceNote": "General S.T.A.L.K.E.R. artifact lore, pending replacement with Anomaly in-game description."}, {"title": "Fireball", "category": "Artifacts", "value": "Thermal artifact", "base": "Associated with thermal anomalies", "relations": "Thermal artifact family.", "text": "Fireball is a thermal artifact associated with heat, flame and Burner-type anomaly fields. In the Zone, even a beautiful object can carry enough anomalous heat to make greed a medical condition.", "sourceNote": "General S.T.A.L.K.E.R. artifact lore, pending replacement with Anomaly in-game description."}, {"title": "Eye", "category": "Artifacts", "value": "Thermal artifact", "base": "Associated with thermal anomalies", "relations": "Thermal artifact family.", "text": "Eye is a thermal artifact known across the series. Its name and appearance give it an unsettling organic quality, as though the Zone is not merely producing objects, but watching the people who collect them.", "sourceNote": "General S.T.A.L.K.E.R. artifact lore, pending replacement with Anomaly in-game description."}, {"title": "Flame", "category": "Artifacts", "value": "Thermal artifact", "base": "Associated with thermal anomalies", "relations": "Thermal artifact family.", "text": "Flame is a high-value thermal artifact associated with extreme anomalous heat. Thermal artifacts are often prized because they can provide useful protection or trade value, but every one of them begins as a warning written in fire.", "sourceNote": "General S.T.A.L.K.E.R. artifact lore, pending replacement with Anomaly in-game description."}, {"title": "Droplets", "category": "Artifacts", "value": "Thermal artifact", "base": "Associated with thermal anomalies", "relations": "Thermal artifact family.", "text": "Droplets are thermal artifacts connected to heat anomaly fields. The name suggests small molten or condensed formations, one more example of the Zone making physics behave like weather inside a corpse-lit laboratory.", "sourceNote": "General S.T.A.L.K.E.R. artifact lore, pending replacement with Anomaly in-game description."}, {"title": "Stone Flower", "category": "Artifacts", "value": "Chemical / anomalous artifact", "base": "Classic S.T.A.L.K.E.R. artifact", "relations": "Exact effects vary by game/mod.", "text": "Stone Flower is one of the classic named artifacts in the S.T.A.L.K.E.R. series. It is valued not only for its effects but for the way it captures the Zone’s aesthetic: something delicate, mineral, unnatural and probably bad for your long-term health.", "sourceNote": "General S.T.A.L.K.E.R. artifact lore, pending replacement with Anomaly in-game description."}, {"title": "Thorn", "category": "Artifacts", "value": "Chemical / corrosive artifact", "base": "Associated with chemical anomaly fields", "relations": "Often linked with radiation or chemical effects.", "text": "Thorn is a sharp, dangerous-looking artifact from chemical or corrosive anomaly families. Its form suggests growth, pain and contamination, the kind of object a scientist wants in a container and a rookie wants in a pocket.", "sourceNote": "General S.T.A.L.K.E.R. artifact lore, pending replacement with Anomaly in-game description."}, {"title": "Crystal Thorn", "category": "Artifacts", "value": "Chemical / corrosive artifact", "base": "Associated with chemical anomaly fields", "relations": "Related to Thorn-like artifact family.", "text": "Crystal Thorn is a sharper and more crystalline member of the Thorn-like artifact family. It is tied to the Zone’s chemical and corrosive side, where artifacts look like mineral growths but behave like they came from a hostile biology textbook.", "sourceNote": "General S.T.A.L.K.E.R. artifact lore, pending replacement with Anomaly in-game description."}, {"title": "Urchin", "category": "Artifacts", "value": "Chemical / corrosive artifact", "base": "Associated with chemical anomaly fields", "relations": "Spiked artifact family.", "text": "Urchin is a spiked artifact known across the series. Its shape suggests natural defence, but in the Zone natural and unnatural stopped filing separate paperwork years ago. It is usually associated with dangerous chemical or radiation-related artifact behaviour.", "sourceNote": "General S.T.A.L.K.E.R. artifact lore, pending replacement with Anomaly in-game description."}, {"title": "Slime", "category": "Artifacts", "value": "Chemical artifact", "base": "Associated with chemical anomalies", "relations": "Chemical artifact family.", "text": "Slime is a chemical artifact associated with acidic or corrosive anomaly fields. It is one of the less glamorous artifact names, which in the Zone usually means it still sells, still irradiates, and still ruins gloves.", "sourceNote": "General S.T.A.L.K.E.R. artifact lore, pending replacement with Anomaly in-game description."}, {"title": "Slug", "category": "Artifacts", "value": "Chemical artifact", "base": "Associated with chemical anomalies", "relations": "Chemical artifact family.", "text": "Slug is a chemical artifact whose name implies a soft, unpleasant mass shaped by corrosive anomaly fields. It sits firmly in the Zone’s catalogue of objects that are valuable only after you stop asking what they are made of.", "sourceNote": "General S.T.A.L.K.E.R. artifact lore, pending replacement with Anomaly in-game description."}, {"title": "Mica", "category": "Artifacts", "value": "Chemical / radiological artifact", "base": "Associated with chemical anomaly fields", "relations": "Artifact family varies by game/mod.", "text": "Mica is a chemical or radiological artifact known from wider S.T.A.L.K.E.R. artifact lists. Like many Zone artifacts, it appears mineral-like but carries anomalous properties ordinary mineral samples have the decency not to possess.", "sourceNote": "General S.T.A.L.K.E.R. artifact lore, pending replacement with Anomaly in-game description."}, {"title": "Kolobok", "category": "Artifacts", "value": "Chemical / biological artifact", "base": "Associated with chemical anomaly fields", "relations": "Known across wider S.T.A.L.K.E.R. artifact lore.", "text": "Kolobok is a rounded artifact associated with chemical anomaly behaviour in wider S.T.A.L.K.E.R. lore. Its almost harmless-sounding name is classic Zone theatre: something with a fairy-tale name that still belongs in a lead-lined container.", "sourceNote": "General S.T.A.L.K.E.R. artifact lore, pending replacement with Anomaly in-game description."}, {"title": "Soul", "category": "Artifacts", "value": "Rare artifact", "base": "Classic S.T.A.L.K.E.R. artifact", "relations": "Exact effects vary by game/mod.", "text": "Soul is a rare and memorable artifact in the S.T.A.L.K.E.R. series. The name gives it a mythic quality, and like many high-value artifacts it sits at the crossroads of science, superstition and black-market temptation.", "sourceNote": "General S.T.A.L.K.E.R. artifact lore, pending replacement with Anomaly in-game description."}, {"title": "Mama's Beads", "category": "Artifacts", "value": "Rare artifact", "base": "Classic S.T.A.L.K.E.R. artifact", "relations": "Exact effects vary by game/mod.", "text": "Mama's Beads is a well-known artifact name from the series, often treated as valuable and distinctive. Its domestic name makes it stranger, not safer, like finding jewellery in a place that eats maps.", "sourceNote": "General S.T.A.L.K.E.R. artifact lore, pending replacement with Anomaly in-game description."}, {"title": "Compass", "category": "Artifacts", "value": "Rare / unique artifact", "base": "Associated with rare artifact lore", "relations": "Exact availability varies by game/mod.", "text": "Compass is one of the more mysterious artifacts in the broader S.T.A.L.K.E.R. series. It is associated with navigation through impossible or dangerous spaces, making it especially fitting for a Zone where a straight road can still lead somewhere wrong.", "sourceNote": "General S.T.A.L.K.E.R. artifact lore, pending replacement with Anomaly in-game description."}];

function getBaseFactionArchiveEntries() {
  if (typeof ARCHIVE_ENTRIES !== "undefined" && Array.isArray(ARCHIVE_ENTRIES)) return ARCHIVE_ENTRIES.filter(e => e.category === "Factions");
  if (typeof loreEntries !== "undefined" && Array.isArray(loreEntries)) return loreEntries.filter(e => e.category === "Factions");
  if (typeof archiveEntries !== "undefined" && Array.isArray(archiveEntries)) return archiveEntries.filter(e => e.category === "Factions");
  if (typeof LORE_ENTRIES !== "undefined" && Array.isArray(LORE_ENTRIES)) return LORE_ENTRIES.filter(e => e.category === "Factions");
  return [];
}

function getFullArchiveEntries() {
  const mutants = (typeof MUTANT_ARCHIVE_ENTRIES !== "undefined" && Array.isArray(MUTANT_ARCHIVE_ENTRIES)) ? MUTANT_ARCHIVE_ENTRIES : [];
  const anomalies = (typeof ANOMALY_ARCHIVE_ENTRIES !== "undefined" && Array.isArray(ANOMALY_ARCHIVE_ENTRIES)) ? ANOMALY_ARCHIVE_ENTRIES : [];
  return [...getBaseFactionArchiveEntries(), ...mutants, ...anomalies, ...ARTIFACT_ARCHIVE_ENTRIES];
}

function archiveCategories() { return ["All", "Factions", "Mutants", "Anomalies", "Artifacts"]; }

let activeArchiveCategory = "All";

function archivePatchForEntry(entry) {
  if (entry.category === "Mutants") return `<div class="archive-mutant-icon">☣</div>`;
  if (entry.category === "Anomalies") return `<div class="archive-anomaly-icon">⌁</div>`;
  if (entry.category === "Artifacts") return `<div class="archive-artifact-icon">◇</div>`;
  if (!entry.patch) return "";
  return `<img class="archive-faction-patch" src="assets/faction-patches/${entry.patch}.png" alt="${escapeHtml(entry.title)} patch" />`;
}

function renderLoreFilters() {
  const chips = document.getElementById("loreFilters") || document.getElementById("archiveCategoryChips");
  if (!chips) return;
  chips.innerHTML = "";
  archiveCategories().forEach(category => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = category;
    btn.className = category === activeArchiveCategory ? "active" : "";
    btn.addEventListener("click", () => {
      activeArchiveCategory = category;
      renderLore();
    });
    chips.appendChild(btn);
  });
}

function toggleArchiveEntry(index) {
  const card = document.querySelector(`[data-archive-entry="${index}"]`);
  if (!card) return;
  card.classList.toggle("open");
  const button = card.querySelector("[data-archive-toggle]");
  if (button) button.setAttribute("aria-expanded", card.classList.contains("open") ? "true" : "false");
}

function renderLore() {
  const list = document.getElementById("loreList") || document.getElementById("archiveList");
  if (!list) return;

  const searchInput = document.getElementById("loreSearch") || document.getElementById("archiveSearch");
  const query = (searchInput?.value || "").trim().toLowerCase();

  const entries = getFullArchiveEntries().filter(entry => {
    const haystack = [entry.title, entry.category, entry.value, entry.base, entry.relations, entry.text, entry.sourceNote].join(" ").toLowerCase();
    const categoryMatch = activeArchiveCategory === "All" || entry.category === activeArchiveCategory;
    return categoryMatch && (!query || haystack.includes(query));
  });

  renderLoreFilters();

  if (!entries.length) {
    list.innerHTML = `<article class="archive-entry module-panel"><div class="module-label">NO SIGNAL</div><p class="message-text">No archive entries found.</p></article>`;
    return;
  }

  list.innerHTML = entries.map((entry, index) => `
    <article class="archive-entry module-panel archive-collapsible" data-archive-entry="${index}">
      <button type="button" class="archive-entry-button" data-archive-toggle="${index}" aria-expanded="false">
        <div class="archive-title-row">
          ${archivePatchForEntry(entry)}
          <div>
            <h3>${escapeHtml(entry.title)}</h3>
            <div class="archive-meta">TYPE / VALUE: ${escapeHtml(entry.value || "Unknown")}</div>
          </div>
        </div>
        <span class="archive-expand-mark">OPEN</span>
      </button>
      <div class="archive-hidden-body">
        <div class="archive-fact-grid">
          <div><span>Entry</span><strong>${escapeHtml(entry.base || "Unknown")}</strong></div>
          <div><span>Notes</span><strong>${escapeHtml(entry.relations || "Unknown")}</strong></div>
        </div>
        <p>${escapeHtml(entry.text)}</p>
        <p class="archive-source">${escapeHtml(entry.sourceNote || "S.T.A.L.K.E.R. archive data")}</p>
      </div>
    </article>`).join("");

  list.querySelectorAll("[data-archive-toggle]").forEach(button => {
    button.addEventListener("click", () => toggleArchiveEntry(button.dataset.archiveToggle));
  });
}

function bindFactionArchiveSearch() {
  const searchInput = document.getElementById("loreSearch") || document.getElementById("archiveSearch");
  if (searchInput && !searchInput.dataset.archiveV31Bound) {
    searchInput.dataset.archiveV31Bound = "true";
    searchInput.addEventListener("input", renderLore);
  }
}

window.addEventListener("load", () => {
  bindFactionArchiveSearch();
  renderLoreFilters();
  renderLore();
});
