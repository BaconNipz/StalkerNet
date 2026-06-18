const STORAGE_KEY = "stalkernet_pda_v3987_archive_mobile_layout";

const defaultMessages = [
  { id: id(), channel: "Public Chat", sender: "Wolf", faction: "Loner", text: "Rookie Village is quiet for now. Keep your bolts handy.", time: "07:12" },
  { id: id(), channel: "Trader Message", sender: "Sidorovich", faction: "Trader", text: "I have work available. Nothing glamorous, but it pays.", time: "07:33" },
  { id: id(), channel: "Unknown Sender", sender: "UNKNOWN", faction: "???", text: "Do not follow strange sounds underground. Mark the location and leave.", time: "03:17" },
  { id: id(), channel: "Group / Faction Chat", sender: "Duty Outpost", faction: "Duty", text: "Mutant movement near Garbage. Armed help requested. Payment on proof of kill.", time: "08:01" }
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
  { id: id(), title: "Investigate strange broadcast", source: "Unknown Sender", status: "Unknown", reward: "Answers, or worse" }
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
  { id: "world_darkscape", mapId: "world", name: "Darkscape", type: "Danger Zone", x: 902, y: 360, note: "Remote southern-east territory with long roads and little comfort." },
  { id: "world_garbage", mapId: "world", name: "Garbage", type: "Danger Zone", x: 482, y: 671, note: "Scrapyards, ambush lanes, mutant movement, and scavenger traffic." },
  { id: "world_agroprom", mapId: "world", name: "Agroprom", type: "Location", x: 301, y: 634, note: "Old research grounds, military activity, and underground approaches." },
  { id: "world_dark_valley", mapId: "world", name: "Dark Valley", type: "Danger Zone", x: 769, y: 765, note: "Industrial ruins, bandit pressure, and dangerous road approaches." },
  { id: "world_rostok", mapId: "world", name: "Rostok", type: "Hub", x: 504, y: 970, note: "Major stalker hub with traders, technicians, jobs, and heavy traffic." },
  { id: "world_wild_territory", mapId: "world", name: "Wild Territory", type: "Danger Zone", x: 407, y: 978, note: "Ruined industrial ground where cover is thin and movement is risky." },
  { id: "world_yantar", mapId: "world", name: "Yantar", type: "Lab", x: 247, y: 836, note: "Ecologist field zone, psi danger, and laboratory rumours." },
  { id: "world_truck_cemetery", mapId: "world", name: "Truck Cemetery", type: "Danger Zone", x: 885, y: 987, note: "A graveyard of vehicles, wreckage, anomalies, and bad sightlines." },
  { id: "world_army_warehouses", mapId: "world", name: "Army Warehouses", type: "Hub", x: 563, y: 1121, note: "Faction routes, patrol pressure, and valuable staging ground." },
  { id: "world_dead_city", mapId: "world", name: "Dead City", type: "Location", x: 200, y: 1117, note: "Abandoned urban blocks, mercenary movement, and silent windows." },
  { id: "world_red_forest", mapId: "world", name: "Red Forest", type: "Danger Zone", x: 383, y: 1343, note: "Dense, hostile woodland with high anomaly and mutant risk." },
  { id: "world_radar", mapId: "world", name: "Radar", type: "Danger Zone", x: 682, y: 1295, note: "High-risk northern route dominated by old military and psi threats." },
  { id: "world_limansk", mapId: "world", name: "Limansk", type: "Location", x: 178, y: 1345, note: "Broken city routes, contested streets, and hard urban movement." },
  { id: "world_deserted_hospital", mapId: "world", name: "Deserted Hospital", type: "Danger Zone", x: 263, y: 1591, note: "Ruined medical complex with tight corridors and grim echoes." },
  { id: "world_jupiter", mapId: "world", name: "Jupiter", type: "Location", x: 414, y: 1545, note: "Factory zone with tunnels, salvage routes, and northern contracts." },
  { id: "world_zaton", mapId: "world", name: "Zaton", type: "Location", x: 421, y: 1728, note: "Swamps, wrecks, stalker routes, and scattered survivor camps." },
  { id: "world_outskirts", mapId: "world", name: "Outskirts", type: "Location", x: 856, y: 1533, note: "Late-zone urban fringe with heavy danger and valuable approaches." },
  { id: "world_pripyat", mapId: "world", name: "Pripyat", type: "Danger Zone", x: 691, y: 1577, note: "Urban ruin of high-value salvage, heavy resistance, and bad omens." },
  { id: "world_cnpp", mapId: "world", name: "Chernobyl NPP", type: "Danger Zone", x: 546, y: 1979, note: "The heart of the Zone, where every road feels watched." },
  { id: "world_generators", mapId: "world", name: "Generators", type: "Danger Zone", x: 351, y: 2238, note: "Northern extreme zone with severe threats and endgame-grade danger." },
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
  { id: "darkscape_main", mapId: "darkscape", name: "Darkscape", type: "Danger Zone", x: 800, y: 1200, note: "Remote road networks, river bends, and hostile isolation." }
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

  const persona = document.getElementById("personaSelect")?.value || "Loner";
  const replies = personaReplies[persona] || personaReplies.Loner;

  state.messages.push({ id: id(), channel: "Private", sender: "You", faction: "Stalker", text, time: nowTime() });
  state.messages.push({
    id: id(),
    channel: persona === "Monolith" ? "Unknown Sender" : "Private",
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
  state.messages.push({ id: id(), channel: "Public Chat", sender: pick[0], faction: "Broadcast", text: pick[1], time: nowTime() });
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
  document.getElementById("taskAddBtn")?.addEventListener("click", addTask);
  document.getElementById("taskInput")?.addEventListener("keydown", event => {
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
  { sender: "Unknown Sender", faction: "Unknown", lines: [
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
  btn.textContent = state.showAiMessages ? "Bot Messages: On" : "Bot Messages: Off";
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

// Firebase online auth + Public Chat chat
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
    setAuthStatus("Stalker Card saved.");
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
          channel: "Public Chat",
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

  setAuthStatus("Login to send live Public Chat messages.", true);
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
  if (!confirm("Delete this transmission from Public Chat?")) return;

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























// v3.2.1 Archive all-in-one bundled source
const STALKERNET_ARCHIVE_ENTRIES = [{"title": "Loners / Free Stalkers", "category": "Factions", "value": "Major faction", "base": "Rookie Village, Cordon", "relations": "Neutral with most factions. Hostile to Bandits, Military, Mercenaries, Monolith, Renegades, Sin and UNISG.", "text": "Loners, also called Free Stalkers, are independent stalkers who operate without formal faction command. They are not bound by a shared ideology beyond survival, profit, curiosity and personal freedom. In Anomaly, they are the most common kind of stalker and can be encountered throughout the Zone.", "sourceNote": "Based on S.T.A.L.K.E.R. Anomaly Wiki faction data.", "patch": "loners"}, {"title": "Bandits", "category": "Factions", "value": "Major faction", "base": "Northern Factory, Dark Valley", "relations": "Tolerated by Freedom, Mercenaries and Renegades, but opposed by most others.", "text": "Bandits are criminals, raiders and thieves operating inside the Zone. They survive through robbery, kidnapping, extortion and attacks on weaker travellers or poorly defended groups.", "sourceNote": "Based on S.T.A.L.K.E.R. Anomaly Wiki faction data.", "patch": "bandits"}, {"title": "Clear Sky", "category": "Factions", "value": "Major faction", "base": "Hidden Base, Great Swamps", "relations": "Neutral with most factions. Hostile to Bandits, Military, Monolith, Renegades, Sin and UNISG.", "text": "Clear Sky is an independent militaristic-scientific faction based in the Great Swamps. They study the Zone in an attempt to understand its nature rather than simply exploit it for money or artifacts.", "sourceNote": "Based on S.T.A.L.K.E.R. Anomaly Wiki faction data.", "patch": "clear_sky"}, {"title": "Duty", "category": "Factions", "value": "Major faction", "base": "Barracks, Rostok", "relations": "Hostile to Bandits, Freedom, Mercenaries, Monolith, Renegades, Sin and UNISG.", "text": "Duty is a disciplined paramilitary faction built around containment, order and armed resistance against the Zone’s dangers. They see the Zone as a threat that must be controlled, fought and possibly destroyed.", "sourceNote": "Based on S.T.A.L.K.E.R. Anomaly Wiki faction data.", "patch": "duty"}, {"title": "Freedom", "category": "Factions", "value": "Major faction", "base": "Military Base, Army Warehouses", "relations": "Hostile to Duty, Military, Monolith, Renegades, Sin and UNISG.", "text": "Freedom is built around independence and resistance to outside control. They oppose the idea that the Zone should be locked down by military or government power.", "sourceNote": "Based on S.T.A.L.K.E.R. Anomaly Wiki faction data.", "patch": "freedom"}, {"title": "Mercenary", "category": "Factions", "value": "Major faction", "base": "Sports Centre, Dead City", "relations": "Hostile to Loners, Duty, Military, Monolith, Renegades and Sin. Neutral with UNISG.", "text": "Mercenaries are professional soldiers of fortune who operate in the Zone for profit, taking contracts for sabotage, assassinations and other deniable work.", "sourceNote": "Based on S.T.A.L.K.E.R. Anomaly Wiki faction data.", "patch": "mercenaries"}, {"title": "Military", "category": "Factions", "value": "Major faction", "base": "Research Institute, Agroprom", "relations": "Neutral with Duty and Ecologists. Hostile to the rest.", "text": "The Military represents Ukrainian armed forces operating inside the Zone to maintain order, prevent unauthorised entry and stop people from leaving.", "sourceNote": "Based on S.T.A.L.K.E.R. Anomaly Wiki faction data.", "patch": "military"}, {"title": "Ecologists", "category": "Factions", "value": "Major faction", "base": "Mobile Science Lab, Yantar", "relations": "Neutral with most factions. Hostile to Bandits, Monolith, Renegades, Sin and UNISG.", "text": "Ecologists are scientists and researchers dedicated to studying the Zone, its anomalies and its artifacts. They focus on research over combat.", "sourceNote": "Based on S.T.A.L.K.E.R. Anomaly Wiki faction data.", "patch": "ecologists"}, {"title": "Monolith", "category": "Factions", "value": "Major faction", "base": "Palace of Culture, Pripyat", "relations": "Neutral with Sin. Hostile to all other factions.", "text": "Monolith is made up of brainwashed fanatics who worship the power of the Zone and defend it at any cost. Their soldiers are highly trained and often carry high-tier equipment.", "sourceNote": "Based on S.T.A.L.K.E.R. Anomaly Wiki faction data.", "patch": "monolith"}, {"title": "Renegades", "category": "Factions", "value": "Unlockable faction", "base": "Possible village near Tuzla Tunnel, Great Swamps", "relations": "Neutral with Bandits only. Hostile to all other factions.", "text": "Renegades are outcasts and criminals cast off from other factions. They are likely former Bandits and still behave like raiders, robbers and territorial scavengers.", "sourceNote": "Based on S.T.A.L.K.E.R. Anomaly Wiki faction data.", "patch": "renegades"}, {"title": "Sin", "category": "Factions", "value": "Unlockable faction", "base": "Mine Barracks, Red Forest", "relations": "Neutral with Monolith only. Hostile to all other factions.", "text": "Sin is a faction of religious, zombie-like fanatics who believe in the divine nature of the Zone and seek to expand it beyond its borders.", "sourceNote": "Based on S.T.A.L.K.E.R. Anomaly Wiki faction data.", "patch": "sin"}, {"title": "UNISG / ISG", "category": "Factions", "value": "Unlockable faction", "base": "Possible Sawmill base in Darkscape; spawn locations in Jupiter and Outskirts", "relations": "Neutral with Mercenaries only. Hostile to all other factions.", "text": "UNISG, also known as ISG, is the United Nations International Scientific Group, a UN-sponsored special forces and research organisation focused on studying anomalies and artifacts.", "sourceNote": "Based on S.T.A.L.K.E.R. Anomaly Wiki faction data.", "patch": "isg"}, {"title": "Zombies", "category": "Factions", "value": "Special / unlockable", "base": "Not listed", "relations": "Neutral with Monolith and Sin. Hostile to all others.", "text": "Zombified Stalkers are listed as playable zombies in Anomaly. They are treated as their own faction entry and have a simple hostile relationship pattern.", "sourceNote": "Based on S.T.A.L.K.E.R. Anomaly Wiki faction data.", "patch": ""}, {"title": "Blind Dog", "category": "Mutants", "value": "Animal / Animal-Like Creature", "base": "Common mutant canine", "relations": "Pack hunter.", "text": "Blind Dogs are mutated canine pack hunters. They have lost normal sight but compensate with strong senses and group behaviour.", "sourceNote": "General S.T.A.L.K.E.R. mutant lore, pending replacement with Anomaly in-game description.", "patch": ""}, {"title": "Boar", "category": "Mutants", "value": "Animal / Animal-Like Creature", "base": "Mutated wild boar", "relations": "Charging animal mutant.", "text": "Boars are heavily mutated animals known for charging directly at threats. Their danger comes from mass, speed and aggression.", "sourceNote": "General S.T.A.L.K.E.R. mutant lore, pending replacement with Anomaly in-game description.", "patch": ""}, {"title": "Cat", "category": "Mutants", "value": "Animal / Animal-Like Creature", "base": "Mutated feline predator", "relations": "Fast ambush mutant.", "text": "Cats are fast, agile mutant predators associated with sudden attacks and unsettling vocalisations.", "sourceNote": "General S.T.A.L.K.E.R. mutant lore, pending replacement with Anomaly in-game description.", "patch": ""}, {"title": "Chimera", "category": "Mutants", "value": "Animal / Animal-Like Creature", "base": "Large two-headed predator", "relations": "Extremely dangerous predator.", "text": "Chimeras are among the most dangerous predators in the Zone, known for powerful leaps, aggression and terrifying close-range attacks.", "sourceNote": "General S.T.A.L.K.E.R. mutant lore, pending replacement with Anomaly in-game description.", "patch": ""}, {"title": "Crow", "category": "Mutants", "value": "Animal / Animal-Like Creature", "base": "Zone bird life", "relations": "Environmental creature.", "text": "Crows are part of the Zone’s animal life and are often seen circling ruins, fields and dead ground.", "sourceNote": "General S.T.A.L.K.E.R. mutant lore, pending replacement with Anomaly in-game description.", "patch": ""}, {"title": "Flesh", "category": "Mutants", "value": "Animal / Animal-Like Creature", "base": "Mutated pig", "relations": "Common animal mutant.", "text": "Fleshes are heavily mutated pigs. They may avoid stalkers unless provoked, but can still fight back with dangerous close-range attacks.", "sourceNote": "General S.T.A.L.K.E.R. mutant lore, pending replacement with Anomaly in-game description.", "patch": ""}, {"title": "Lurker", "category": "Mutants", "value": "Animal / Animal-Like Creature", "base": "Ambush predator", "relations": "Fast predator.", "text": "Lurkers rely on speed, sudden movement and broken sightlines to pressure stalkers.", "sourceNote": "General S.T.A.L.K.E.R. mutant lore, pending replacement with Anomaly in-game description.", "patch": ""}, {"title": "Pseudodog", "category": "Mutants", "value": "Animal / Animal-Like Creature", "base": "Mutated canine predator", "relations": "Dangerous canine mutant.", "text": "Pseudodogs resemble large mutated canines and are more dangerous than ordinary Blind Dogs.", "sourceNote": "General S.T.A.L.K.E.R. mutant lore, pending replacement with Anomaly in-game description.", "patch": ""}, {"title": "Pseudogiant", "category": "Mutants", "value": "Animal / Animal-Like Creature", "base": "Massive heavy mutant", "relations": "High-threat heavy mutant.", "text": "Pseudogiants are enormous mutants with tremendous durability, shock attacks and destructive power.", "sourceNote": "General S.T.A.L.K.E.R. mutant lore, pending replacement with Anomaly in-game description.", "patch": ""}, {"title": "Psydog", "category": "Mutants", "value": "Animal / Animal-Like Creature", "base": "Psychic canine mutant", "relations": "Psychic misdirection threat.", "text": "Psydogs are psychic variants of mutant dogs that use confusion and phantom threats to break target discipline.", "sourceNote": "General S.T.A.L.K.E.R. mutant lore, pending replacement with Anomaly in-game description.", "patch": ""}, {"title": "Rat(mod)", "category": "Mutants", "value": "Animal / Animal-Like Creature", "base": "Small mutant animal", "relations": "Small creature threat.", "text": "Rats are small mutant animals used in some builds and mods. Individually minor, they become dangerous in numbers or tight spaces.", "sourceNote": "General S.T.A.L.K.E.R. mutant lore, pending replacement with Anomaly in-game description.", "patch": ""}, {"title": "Tushkano", "category": "Mutants", "value": "Animal / Animal-Like Creature", "base": "Small pack mutant", "relations": "Swarming mutant.", "text": "Tushkanos are small, fast mutant creatures that attack in groups, especially dangerous in tunnels and basements.", "sourceNote": "General S.T.A.L.K.E.R. mutant lore, pending replacement with Anomaly in-game description.", "patch": ""}, {"title": "Bloodsucker", "category": "Mutants", "value": "Humanoid", "base": "Cloaking humanoid predator", "relations": "Near-invisible ambusher.", "text": "Bloodsuckers are infamous humanoid predators capable of near-invisibility, silent stalking and sudden close-range attacks.", "sourceNote": "General S.T.A.L.K.E.R. mutant lore, pending replacement with Anomaly in-game description.", "patch": ""}, {"title": "Burer", "category": "Mutants", "value": "Humanoid", "base": "Psychokinetic humanoid mutant", "relations": "Telekinetic threat.", "text": "Burers are short humanoid mutants with powerful psychokinetic abilities, especially dangerous indoors.", "sourceNote": "General S.T.A.L.K.E.R. mutant lore, pending replacement with Anomaly in-game description.", "patch": ""}, {"title": "Controller", "category": "Mutants", "value": "Humanoid", "base": "Psychic humanoid mutant", "relations": "Mind attack threat.", "text": "Controllers attack the mind directly, disorienting or overwhelming stalkers before a normal firefight begins.", "sourceNote": "General S.T.A.L.K.E.R. mutant lore, pending replacement with Anomaly in-game description.", "patch": ""}, {"title": "Fracture", "category": "Mutants", "value": "Humanoid", "base": "Deformed humanoid mutant", "relations": "Close-range humanoid threat.", "text": "Fractures are deformed humanoid mutants with twisted bodies and erratic movement.", "sourceNote": "General S.T.A.L.K.E.R. mutant lore, pending replacement with Anomaly in-game description.", "patch": ""}, {"title": "Karlik", "category": "Mutants", "value": "Humanoid", "base": "Small humanoid mutant", "relations": "Mod/series psychic threat.", "text": "Karliks are small humanoid mutants associated with psychic or abnormal behaviour in wider Zone lore and mods.", "sourceNote": "General S.T.A.L.K.E.R. mutant lore, pending replacement with Anomaly in-game description.", "patch": ""}, {"title": "Psysucker", "category": "Mutants", "value": "Humanoid", "base": "Psychic bloodsucker variant", "relations": "Psychic ambusher.", "text": "Psysuckers combine the fear of a Bloodsucker-style ambusher with psychic pressure.", "sourceNote": "General S.T.A.L.K.E.R. mutant lore, pending replacement with Anomaly in-game description.", "patch": ""}, {"title": "Snork", "category": "Mutants", "value": "Humanoid", "base": "Mutated human-like leaper", "relations": "Leaping humanoid mutant.", "text": "Snorks are grotesque humanoid mutants that attack with sudden leaps, crawling movement and close-range aggression.", "sourceNote": "General S.T.A.L.K.E.R. mutant lore, pending replacement with Anomaly in-game description.", "patch": ""}, {"title": "Zombie", "category": "Mutants", "value": "Humanoid", "base": "Zombified stalker", "relations": "Psi-broken human threat.", "text": "Zombies are stalkers whose minds have been broken by psi influence, leaving them as hostile remnants.", "sourceNote": "General S.T.A.L.K.E.R. mutant lore, pending replacement with Anomaly in-game description.", "patch": ""}, {"title": "Chernobog", "category": "Mutants", "value": "Special / Unknown Mutant", "base": "Special / unknown entry", "relations": "Anomaly special entry.", "text": "Chernobog is listed by the Anomaly Wiki under Special / Unknown Mutants. Details should be replaced with in-game text later.", "sourceNote": "General S.T.A.L.K.E.R. mutant lore, pending replacement with Anomaly in-game description.", "patch": ""}, {"title": "Poltergeist", "category": "Mutants", "value": "Special / Unknown Mutant", "base": "Anomalous invisible entity", "relations": "Telekinetic entity.", "text": "Poltergeists are anomalous entities associated with invisible movement and telekinetic attacks.", "sourceNote": "General S.T.A.L.K.E.R. mutant lore, pending replacement with Anomaly in-game description.", "patch": ""}, {"title": "Pseudogeist", "category": "Mutants", "value": "Special / Unknown Mutant", "base": "Poltergeist-like entry", "relations": "Anomaly/mod entry.", "text": "Pseudogeist is listed under Special / Unknown Mutants. This entry is restrained until direct Anomaly PDA text confirms details.", "sourceNote": "General S.T.A.L.K.E.R. mutant lore, pending replacement with Anomaly in-game description.", "patch": ""}, {"title": "Pyrogeist", "category": "Mutants", "value": "Special / Unknown Mutant", "base": "Fire-associated poltergeist variant", "relations": "Special fire entity.", "text": "Pyrogeists are fire-associated poltergeist variants in wider Zone lore and modded content.", "sourceNote": "General S.T.A.L.K.E.R. mutant lore, pending replacement with Anomaly in-game description.", "patch": ""}, {"title": "Vortex", "category": "Anomalies", "value": "Gravitational anomaly", "base": "Classic gravitational anomaly", "relations": "Usually detected with bolts.", "text": "Vortex distorts the space around it and can drag or tear apart anything entering its active area.", "sourceNote": "General S.T.A.L.K.E.R. anomaly lore, pending replacement with Anomaly in-game description.", "patch": ""}, {"title": "Burner", "category": "Anomalies", "value": "Thermal anomaly", "base": "Classic thermal anomaly", "relations": "Avoid direct contact.", "text": "Burner releases sudden bursts of intense heat, burning anything that wanders into range.", "sourceNote": "General S.T.A.L.K.E.R. anomaly lore, pending replacement with Anomaly in-game description.", "patch": ""}, {"title": "Fruit Punch", "category": "Anomalies", "value": "Chemical / corrosive anomaly", "base": "Classic chemical anomaly", "relations": "Avoid stepping into it.", "text": "Fruit Punch is a corrosive chemical anomaly, usually appearing as a dangerous acidic pool or spill-like hazard.", "sourceNote": "General S.T.A.L.K.E.R. anomaly lore, pending replacement with Anomaly in-game description.", "patch": ""}, {"title": "Electro", "category": "Anomalies", "value": "Electrical anomaly", "base": "Classic electrical anomaly", "relations": "Bolts can trigger discharge.", "text": "Electro discharges violently when disturbed, recognised by crackling energy and sudden electrical bursts.", "sourceNote": "General S.T.A.L.K.E.R. anomaly lore, pending replacement with Anomaly in-game description.", "patch": ""}, {"title": "Springboard", "category": "Anomalies", "value": "Gravitational anomaly", "base": "Classic gravitational anomaly", "relations": "Test with bolts.", "text": "Springboard violently throws or crushes anything entering its active field.", "sourceNote": "General S.T.A.L.K.E.R. anomaly lore, pending replacement with Anomaly in-game description.", "patch": ""}, {"title": "Whirligig", "category": "Anomalies", "value": "Gravitational anomaly", "base": "Classic gravitational anomaly", "relations": "Avoid the centre of distortion.", "text": "Whirligig is known for spinning, pulling or tearing victims caught in its field.", "sourceNote": "General S.T.A.L.K.E.R. anomaly lore, pending replacement with Anomaly in-game description.", "patch": ""}, {"title": "Burnt Fuzz", "category": "Anomalies", "value": "Chemical / contact anomaly", "base": "Surface/contact anomaly", "relations": "Dangerous on contact.", "text": "Burnt Fuzz is an unusual contact anomaly associated with strange growth on surfaces.", "sourceNote": "General S.T.A.L.K.E.R. anomaly lore, pending replacement with Anomaly in-game description.", "patch": ""}, {"title": "Radiation", "category": "Anomalies", "value": "Radiological hazard", "base": "Persistent Zone hazard", "relations": "Protection or medication required.", "text": "Radiation quietly poisons areas and punishes stalkers who stay too long without protection.", "sourceNote": "General S.T.A.L.K.E.R. anomaly lore, pending replacement with Anomaly in-game description.", "patch": ""}, {"title": "Comet", "category": "Anomalies", "value": "Thermal moving anomaly", "base": "Moving fire anomaly", "relations": "Avoid its path.", "text": "Comet is a fire-associated moving anomaly where timing and pathing matter.", "sourceNote": "General S.T.A.L.K.E.R. anomaly lore, pending replacement with Anomaly in-game description.", "patch": ""}, {"title": "Fault", "category": "Anomalies", "value": "Clear Sky anomaly", "base": "Listed as Clear Sky anomaly", "relations": "Pending verification.", "text": "Fault is listed among anomalies introduced in Clear Sky. This entry is conservative until verified.", "sourceNote": "General S.T.A.L.K.E.R. anomaly lore, pending replacement with Anomaly in-game description.", "patch": ""}, {"title": "Space Anomaly", "category": "Anomalies", "value": "Spatial anomaly", "base": "Listed as Clear Sky anomaly", "relations": "Pending verification.", "text": "Space Anomaly represents strange spatial behaviour where distance and position stop behaving normally.", "sourceNote": "General S.T.A.L.K.E.R. anomaly lore, pending replacement with Anomaly in-game description.", "patch": ""}, {"title": "Symbiont", "category": "Anomalies", "value": "Clear Sky anomaly", "base": "Listed as Clear Sky anomaly", "relations": "Pending verification.", "text": "Symbiont is listed as an anomaly introduced in Clear Sky and is marked for later verification.", "sourceNote": "General S.T.A.L.K.E.R. anomaly lore, pending replacement with Anomaly in-game description.", "patch": ""}, {"title": "Gas", "category": "Anomalies", "value": "Chemical anomaly", "base": "Clear Sky chemical anomaly", "relations": "Avoid contaminated cloud or field.", "text": "Gas is a chemical anomaly associated with toxic or corrosive airborne danger.", "sourceNote": "General S.T.A.L.K.E.R. anomaly lore, pending replacement with Anomaly in-game description.", "patch": ""}, {"title": "Emission", "category": "Anomalies", "value": "Zone-wide phenomenon", "base": "Zone-wide blowout event", "relations": "Shelter required.", "text": "Emission is a massive Zone phenomenon where stalkers must find shelter quickly.", "sourceNote": "General S.T.A.L.K.E.R. anomaly lore, pending replacement with Anomaly in-game description.", "patch": ""}, {"title": "Gas Cloud", "category": "Anomalies", "value": "Chemical anomaly", "base": "Call of Pripyat anomaly", "relations": "Avoid toxic moving cloud.", "text": "Gas Cloud is an airborne chemical hazard with unclear boundaries.", "sourceNote": "General S.T.A.L.K.E.R. anomaly lore, pending replacement with Anomaly in-game description.", "patch": ""}, {"title": "Tesla", "category": "Anomalies", "value": "Electrical anomaly", "base": "Call of Pripyat anomaly", "relations": "Avoid moving electrical field.", "text": "Tesla is an electrical anomaly associated with a moving electrical hazard.", "sourceNote": "General S.T.A.L.K.E.R. anomaly lore, pending replacement with Anomaly in-game description.", "patch": ""}, {"title": "Jellyfish", "category": "Artifacts", "value": "Gravitational artifact", "base": "Broader S.T.A.L.K.E.R. artifact lore", "relations": "Exact effects vary by game/mod.", "text": "Jellyfish is a recognised artifact from broader S.T.A.L.K.E.R. series lore. This entry is a placeholder-style lore description until exact S.T.A.L.K.E.R. Anomaly PDA text or screenshots can replace it.", "sourceNote": "General S.T.A.L.K.E.R. artifact lore, pending replacement with Anomaly in-game description.", "patch": ""}, {"title": "Stone Blood", "category": "Artifacts", "value": "Gravitational artifact", "base": "Broader S.T.A.L.K.E.R. artifact lore", "relations": "Exact effects vary by game/mod.", "text": "Stone Blood is a recognised artifact from broader S.T.A.L.K.E.R. series lore. This entry is a placeholder-style lore description until exact S.T.A.L.K.E.R. Anomaly PDA text or screenshots can replace it.", "sourceNote": "General S.T.A.L.K.E.R. artifact lore, pending replacement with Anomaly in-game description.", "patch": ""}, {"title": "Wrenched", "category": "Artifacts", "value": "Gravitational artifact", "base": "Broader S.T.A.L.K.E.R. artifact lore", "relations": "Exact effects vary by game/mod.", "text": "Wrenched is a recognised artifact from broader S.T.A.L.K.E.R. series lore. This entry is a placeholder-style lore description until exact S.T.A.L.K.E.R. Anomaly PDA text or screenshots can replace it.", "sourceNote": "General S.T.A.L.K.E.R. artifact lore, pending replacement with Anomaly in-game description.", "patch": ""}, {"title": "Gravi", "category": "Artifacts", "value": "Gravitational artifact", "base": "Broader S.T.A.L.K.E.R. artifact lore", "relations": "Exact effects vary by game/mod.", "text": "Gravi is a recognised artifact from broader S.T.A.L.K.E.R. series lore. This entry is a placeholder-style lore description until exact S.T.A.L.K.E.R. Anomaly PDA text or screenshots can replace it.", "sourceNote": "General S.T.A.L.K.E.R. artifact lore, pending replacement with Anomaly in-game description.", "patch": ""}, {"title": "Goldfish", "category": "Artifacts", "value": "Gravitational artifact", "base": "Broader S.T.A.L.K.E.R. artifact lore", "relations": "Exact effects vary by game/mod.", "text": "Goldfish is a recognised artifact from broader S.T.A.L.K.E.R. series lore. This entry is a placeholder-style lore description until exact S.T.A.L.K.E.R. Anomaly PDA text or screenshots can replace it.", "sourceNote": "General S.T.A.L.K.E.R. artifact lore, pending replacement with Anomaly in-game description.", "patch": ""}, {"title": "Night Star", "category": "Artifacts", "value": "Gravitational artifact", "base": "Broader S.T.A.L.K.E.R. artifact lore", "relations": "Exact effects vary by game/mod.", "text": "Night Star is a recognised artifact from broader S.T.A.L.K.E.R. series lore. This entry is a placeholder-style lore description until exact S.T.A.L.K.E.R. Anomaly PDA text or screenshots can replace it.", "sourceNote": "General S.T.A.L.K.E.R. artifact lore, pending replacement with Anomaly in-game description.", "patch": ""}, {"title": "Spring", "category": "Artifacts", "value": "Gravitational artifact", "base": "Broader S.T.A.L.K.E.R. artifact lore", "relations": "Exact effects vary by game/mod.", "text": "Spring is a recognised artifact from broader S.T.A.L.K.E.R. series lore. This entry is a placeholder-style lore description until exact S.T.A.L.K.E.R. Anomaly PDA text or screenshots can replace it.", "sourceNote": "General S.T.A.L.K.E.R. artifact lore, pending replacement with Anomaly in-game description.", "patch": ""}, {"title": "Sparkler", "category": "Artifacts", "value": "Electrical artifact", "base": "Broader S.T.A.L.K.E.R. artifact lore", "relations": "Exact effects vary by game/mod.", "text": "Sparkler is a recognised artifact from broader S.T.A.L.K.E.R. series lore. This entry is a placeholder-style lore description until exact S.T.A.L.K.E.R. Anomaly PDA text or screenshots can replace it.", "sourceNote": "General S.T.A.L.K.E.R. artifact lore, pending replacement with Anomaly in-game description.", "patch": ""}, {"title": "Flash", "category": "Artifacts", "value": "Electrical artifact", "base": "Broader S.T.A.L.K.E.R. artifact lore", "relations": "Exact effects vary by game/mod.", "text": "Flash is a recognised artifact from broader S.T.A.L.K.E.R. series lore. This entry is a placeholder-style lore description until exact S.T.A.L.K.E.R. Anomaly PDA text or screenshots can replace it.", "sourceNote": "General S.T.A.L.K.E.R. artifact lore, pending replacement with Anomaly in-game description.", "patch": ""}, {"title": "Moonlight", "category": "Artifacts", "value": "Electrical artifact", "base": "Broader S.T.A.L.K.E.R. artifact lore", "relations": "Exact effects vary by game/mod.", "text": "Moonlight is a recognised artifact from broader S.T.A.L.K.E.R. series lore. This entry is a placeholder-style lore description until exact S.T.A.L.K.E.R. Anomaly PDA text or screenshots can replace it.", "sourceNote": "General S.T.A.L.K.E.R. artifact lore, pending replacement with Anomaly in-game description.", "patch": ""}, {"title": "Battery", "category": "Artifacts", "value": "Electrical artifact", "base": "Broader S.T.A.L.K.E.R. artifact lore", "relations": "Exact effects vary by game/mod.", "text": "Battery is a recognised artifact from broader S.T.A.L.K.E.R. series lore. This entry is a placeholder-style lore description until exact S.T.A.L.K.E.R. Anomaly PDA text or screenshots can replace it.", "sourceNote": "General S.T.A.L.K.E.R. artifact lore, pending replacement with Anomaly in-game description.", "patch": ""}, {"title": "Crystal", "category": "Artifacts", "value": "Thermal artifact", "base": "Broader S.T.A.L.K.E.R. artifact lore", "relations": "Exact effects vary by game/mod.", "text": "Crystal is a recognised artifact from broader S.T.A.L.K.E.R. series lore. This entry is a placeholder-style lore description until exact S.T.A.L.K.E.R. Anomaly PDA text or screenshots can replace it.", "sourceNote": "General S.T.A.L.K.E.R. artifact lore, pending replacement with Anomaly in-game description.", "patch": ""}, {"title": "Fireball", "category": "Artifacts", "value": "Thermal artifact", "base": "Broader S.T.A.L.K.E.R. artifact lore", "relations": "Exact effects vary by game/mod.", "text": "Fireball is a recognised artifact from broader S.T.A.L.K.E.R. series lore. This entry is a placeholder-style lore description until exact S.T.A.L.K.E.R. Anomaly PDA text or screenshots can replace it.", "sourceNote": "General S.T.A.L.K.E.R. artifact lore, pending replacement with Anomaly in-game description.", "patch": ""}, {"title": "Eye", "category": "Artifacts", "value": "Thermal artifact", "base": "Broader S.T.A.L.K.E.R. artifact lore", "relations": "Exact effects vary by game/mod.", "text": "Eye is a recognised artifact from broader S.T.A.L.K.E.R. series lore. This entry is a placeholder-style lore description until exact S.T.A.L.K.E.R. Anomaly PDA text or screenshots can replace it.", "sourceNote": "General S.T.A.L.K.E.R. artifact lore, pending replacement with Anomaly in-game description.", "patch": ""}, {"title": "Flame", "category": "Artifacts", "value": "Thermal artifact", "base": "Broader S.T.A.L.K.E.R. artifact lore", "relations": "Exact effects vary by game/mod.", "text": "Flame is a recognised artifact from broader S.T.A.L.K.E.R. series lore. This entry is a placeholder-style lore description until exact S.T.A.L.K.E.R. Anomaly PDA text or screenshots can replace it.", "sourceNote": "General S.T.A.L.K.E.R. artifact lore, pending replacement with Anomaly in-game description.", "patch": ""}, {"title": "Droplets", "category": "Artifacts", "value": "Thermal artifact", "base": "Broader S.T.A.L.K.E.R. artifact lore", "relations": "Exact effects vary by game/mod.", "text": "Droplets is a recognised artifact from broader S.T.A.L.K.E.R. series lore. This entry is a placeholder-style lore description until exact S.T.A.L.K.E.R. Anomaly PDA text or screenshots can replace it.", "sourceNote": "General S.T.A.L.K.E.R. artifact lore, pending replacement with Anomaly in-game description.", "patch": ""}, {"title": "Stone Flower", "category": "Artifacts", "value": "Artifact", "base": "Broader S.T.A.L.K.E.R. artifact lore", "relations": "Exact effects vary by game/mod.", "text": "Stone Flower is a recognised artifact from broader S.T.A.L.K.E.R. series lore. This entry is a placeholder-style lore description until exact S.T.A.L.K.E.R. Anomaly PDA text or screenshots can replace it.", "sourceNote": "General S.T.A.L.K.E.R. artifact lore, pending replacement with Anomaly in-game description.", "patch": ""}, {"title": "Thorn", "category": "Artifacts", "value": "Chemical / corrosive artifact", "base": "Broader S.T.A.L.K.E.R. artifact lore", "relations": "Exact effects vary by game/mod.", "text": "Thorn is a recognised artifact from broader S.T.A.L.K.E.R. series lore. This entry is a placeholder-style lore description until exact S.T.A.L.K.E.R. Anomaly PDA text or screenshots can replace it.", "sourceNote": "General S.T.A.L.K.E.R. artifact lore, pending replacement with Anomaly in-game description.", "patch": ""}, {"title": "Crystal Thorn", "category": "Artifacts", "value": "Chemical / corrosive artifact", "base": "Broader S.T.A.L.K.E.R. artifact lore", "relations": "Exact effects vary by game/mod.", "text": "Crystal Thorn is a recognised artifact from broader S.T.A.L.K.E.R. series lore. This entry is a placeholder-style lore description until exact S.T.A.L.K.E.R. Anomaly PDA text or screenshots can replace it.", "sourceNote": "General S.T.A.L.K.E.R. artifact lore, pending replacement with Anomaly in-game description.", "patch": ""}, {"title": "Urchin", "category": "Artifacts", "value": "Chemical / corrosive artifact", "base": "Broader S.T.A.L.K.E.R. artifact lore", "relations": "Exact effects vary by game/mod.", "text": "Urchin is a recognised artifact from broader S.T.A.L.K.E.R. series lore. This entry is a placeholder-style lore description until exact S.T.A.L.K.E.R. Anomaly PDA text or screenshots can replace it.", "sourceNote": "General S.T.A.L.K.E.R. artifact lore, pending replacement with Anomaly in-game description.", "patch": ""}, {"title": "Slime", "category": "Artifacts", "value": "Chemical / corrosive artifact", "base": "Broader S.T.A.L.K.E.R. artifact lore", "relations": "Exact effects vary by game/mod.", "text": "Slime is a recognised artifact from broader S.T.A.L.K.E.R. series lore. This entry is a placeholder-style lore description until exact S.T.A.L.K.E.R. Anomaly PDA text or screenshots can replace it.", "sourceNote": "General S.T.A.L.K.E.R. artifact lore, pending replacement with Anomaly in-game description.", "patch": ""}, {"title": "Slug", "category": "Artifacts", "value": "Chemical / corrosive artifact", "base": "Broader S.T.A.L.K.E.R. artifact lore", "relations": "Exact effects vary by game/mod.", "text": "Slug is a recognised artifact from broader S.T.A.L.K.E.R. series lore. This entry is a placeholder-style lore description until exact S.T.A.L.K.E.R. Anomaly PDA text or screenshots can replace it.", "sourceNote": "General S.T.A.L.K.E.R. artifact lore, pending replacement with Anomaly in-game description.", "patch": ""}, {"title": "Mica", "category": "Artifacts", "value": "Chemical / corrosive artifact", "base": "Broader S.T.A.L.K.E.R. artifact lore", "relations": "Exact effects vary by game/mod.", "text": "Mica is a recognised artifact from broader S.T.A.L.K.E.R. series lore. This entry is a placeholder-style lore description until exact S.T.A.L.K.E.R. Anomaly PDA text or screenshots can replace it.", "sourceNote": "General S.T.A.L.K.E.R. artifact lore, pending replacement with Anomaly in-game description.", "patch": ""}, {"title": "Kolobok", "category": "Artifacts", "value": "Chemical / corrosive artifact", "base": "Broader S.T.A.L.K.E.R. artifact lore", "relations": "Exact effects vary by game/mod.", "text": "Kolobok is a recognised artifact from broader S.T.A.L.K.E.R. series lore. This entry is a placeholder-style lore description until exact S.T.A.L.K.E.R. Anomaly PDA text or screenshots can replace it.", "sourceNote": "General S.T.A.L.K.E.R. artifact lore, pending replacement with Anomaly in-game description.", "patch": ""}, {"title": "Soul", "category": "Artifacts", "value": "Rare artifact", "base": "Broader S.T.A.L.K.E.R. artifact lore", "relations": "Exact effects vary by game/mod.", "text": "Soul is a recognised artifact from broader S.T.A.L.K.E.R. series lore. This entry is a placeholder-style lore description until exact S.T.A.L.K.E.R. Anomaly PDA text or screenshots can replace it.", "sourceNote": "General S.T.A.L.K.E.R. artifact lore, pending replacement with Anomaly in-game description.", "patch": ""}, {"title": "Mama's Beads", "category": "Artifacts", "value": "Rare artifact", "base": "Broader S.T.A.L.K.E.R. artifact lore", "relations": "Exact effects vary by game/mod.", "text": "Mama's Beads is a recognised artifact from broader S.T.A.L.K.E.R. series lore. This entry is a placeholder-style lore description until exact S.T.A.L.K.E.R. Anomaly PDA text or screenshots can replace it.", "sourceNote": "General S.T.A.L.K.E.R. artifact lore, pending replacement with Anomaly in-game description.", "patch": ""}, {"title": "Compass", "category": "Artifacts", "value": "Rare artifact", "base": "Broader S.T.A.L.K.E.R. artifact lore", "relations": "Exact effects vary by game/mod.", "text": "Compass is a recognised artifact from broader S.T.A.L.K.E.R. series lore. This entry is a placeholder-style lore description until exact S.T.A.L.K.E.R. Anomaly PDA text or screenshots can replace it.", "sourceNote": "General S.T.A.L.K.E.R. artifact lore, pending replacement with Anomaly in-game description.", "patch": ""}, {"title": "Cordon", "category": "Locations", "value": "Surface location", "base": "Southern rookie territory", "relations": "Surface map archive entry.", "text": "Rookie territory, southern roads, patrol routes and early contracts. It is often treated as the first real test of a stalker's life in the Zone.", "sourceNote": "StalkerNet map/location archive text, pending replacement with exact Anomaly in-game description if provided.", "patch": ""}, {"title": "Meadows", "category": "Locations", "value": "Surface location", "base": "Southern travel region", "relations": "Surface map archive entry.", "text": "An open southern travel route with scattered cover, lonely roads and enough quiet to make every sound feel suspicious.", "sourceNote": "StalkerNet map/location archive text, pending replacement with exact Anomaly in-game description if provided.", "patch": ""}, {"title": "Great Swamps", "category": "Locations", "value": "Surface location", "base": "Wetland zone", "relations": "Surface map archive entry.", "text": "A wetland maze of reeds, bridges, hidden paths and half-drowned ruins. Movement is slow and sightlines are poor.", "sourceNote": "StalkerNet map/location archive text, pending replacement with exact Anomaly in-game description if provided.", "patch": ""}, {"title": "Darkscape", "category": "Locations", "value": "Surface location", "base": "Remote southern-east territory", "relations": "Surface map archive entry.", "text": "A remote southern-east zone built around long roads, sparse safety and the feeling that help is always one map transition too far away.", "sourceNote": "StalkerNet map/location archive text, pending replacement with exact Anomaly in-game description if provided.", "patch": ""}, {"title": "Garbage", "category": "Locations", "value": "Surface location", "base": "Scrapyard region", "relations": "Surface map archive entry.", "text": "Scrapyards, wreckage, ambush lanes, mutant movement and scavenger traffic.", "sourceNote": "StalkerNet map/location archive text, pending replacement with exact Anomaly in-game description if provided.", "patch": ""}, {"title": "Agroprom", "category": "Locations", "value": "Surface location", "base": "Research and military zone", "relations": "Surface map archive entry.", "text": "Old research grounds with military activity and underground approaches. Agroprom sits at the crossroads of science, force and buried trouble.", "sourceNote": "StalkerNet map/location archive text, pending replacement with exact Anomaly in-game description if provided.", "patch": ""}, {"title": "Dark Valley", "category": "Locations", "value": "Surface location", "base": "Industrial danger zone", "relations": "Surface map archive entry.", "text": "Industrial ruins, bandit pressure and dangerous road approaches.", "sourceNote": "StalkerNet map/location archive text, pending replacement with exact Anomaly in-game description if provided.", "patch": ""}, {"title": "Rostok", "category": "Locations", "value": "Surface location", "base": "Major stalker hub", "relations": "Surface map archive entry.", "text": "A major stalker hub with traders, technicians, jobs and heavy traffic.", "sourceNote": "StalkerNet map/location archive text, pending replacement with exact Anomaly in-game description if provided.", "patch": ""}, {"title": "Wild Territory", "category": "Locations", "value": "Surface location", "base": "Industrial danger ground", "relations": "Surface map archive entry.", "text": "Ruined industrial ground where cover is thin and movement is risky.", "sourceNote": "StalkerNet map/location archive text, pending replacement with exact Anomaly in-game description if provided.", "patch": ""}, {"title": "Yantar", "category": "Locations", "value": "Surface location", "base": "Ecologist research zone", "relations": "Surface map archive entry.", "text": "Ecologist field territory tied to psi danger, scientific work and laboratory rumours.", "sourceNote": "StalkerNet map/location archive text, pending replacement with exact Anomaly in-game description if provided.", "patch": ""}, {"title": "Truck Cemetery", "category": "Locations", "value": "Surface location", "base": "Vehicle graveyard", "relations": "Surface map archive entry.", "text": "A graveyard of vehicles, wreckage, anomalies and bad sightlines.", "sourceNote": "StalkerNet map/location archive text, pending replacement with exact Anomaly in-game description if provided.", "patch": ""}, {"title": "Army Warehouses", "category": "Locations", "value": "Surface location", "base": "Faction staging ground", "relations": "Surface map archive entry.", "text": "Faction routes, patrol pressure and valuable staging ground.", "sourceNote": "StalkerNet map/location archive text, pending replacement with exact Anomaly in-game description if provided.", "patch": ""}, {"title": "Dead City", "category": "Locations", "value": "Surface location", "base": "Abandoned urban zone", "relations": "Surface map archive entry.", "text": "Abandoned urban blocks, mercenary movement and silent windows.", "sourceNote": "StalkerNet map/location archive text, pending replacement with exact Anomaly in-game description if provided.", "patch": ""}, {"title": "Red Forest", "category": "Locations", "value": "Surface location", "base": "Northern hostile woodland", "relations": "Surface map archive entry.", "text": "Dense, hostile woodland with high anomaly and mutant risk.", "sourceNote": "StalkerNet map/location archive text, pending replacement with exact Anomaly in-game description if provided.", "patch": ""}, {"title": "Radar", "category": "Locations", "value": "Surface location", "base": "Psi-threat northern route", "relations": "Surface map archive entry.", "text": "A high-risk northern route dominated by old military structures and psi threats.", "sourceNote": "StalkerNet map/location archive text, pending replacement with exact Anomaly in-game description if provided.", "patch": ""}, {"title": "Limansk", "category": "Locations", "value": "Surface location", "base": "Broken city routes", "relations": "Surface map archive entry.", "text": "Broken city routes, contested streets and hard urban movement.", "sourceNote": "StalkerNet map/location archive text, pending replacement with exact Anomaly in-game description if provided.", "patch": ""}, {"title": "Deserted Hospital", "category": "Locations", "value": "Surface location", "base": "Ruined medical complex", "relations": "Surface map archive entry.", "text": "A ruined medical complex with tight corridors, grim echoes and danger around corners.", "sourceNote": "StalkerNet map/location archive text, pending replacement with exact Anomaly in-game description if provided.", "patch": ""}, {"title": "Jupiter", "category": "Locations", "value": "Surface location", "base": "Factory and salvage zone", "relations": "Surface map archive entry.", "text": "A factory zone with tunnels, salvage routes and northern contracts.", "sourceNote": "StalkerNet map/location archive text, pending replacement with exact Anomaly in-game description if provided.", "patch": ""}, {"title": "Zaton", "category": "Locations", "value": "Surface location", "base": "Swamps and wrecks", "relations": "Surface map archive entry.", "text": "Swamps, wrecks, stalker routes and scattered survivor camps.", "sourceNote": "StalkerNet map/location archive text, pending replacement with exact Anomaly in-game description if provided.", "patch": ""}, {"title": "Outskirts", "category": "Locations", "value": "Surface location", "base": "Late-zone urban fringe", "relations": "Surface map archive entry.", "text": "Late-zone urban fringe with heavy danger and valuable approaches.", "sourceNote": "StalkerNet map/location archive text, pending replacement with exact Anomaly in-game description if provided.", "patch": ""}, {"title": "Pripyat", "category": "Locations", "value": "Surface location", "base": "High-risk urban ruin", "relations": "Surface map archive entry.", "text": "Urban ruin of high-value salvage, heavy resistance and bad omens.", "sourceNote": "StalkerNet map/location archive text, pending replacement with exact Anomaly in-game description if provided.", "patch": ""}, {"title": "Chernobyl NPP", "category": "Locations", "value": "Surface location", "base": "Heart of the Zone", "relations": "Surface map archive entry.", "text": "The heart of the Zone, where every road feels watched.", "sourceNote": "StalkerNet map/location archive text, pending replacement with exact Anomaly in-game description if provided.", "patch": ""}, {"title": "Generators", "category": "Locations", "value": "Surface location", "base": "Northern extreme zone", "relations": "Surface map archive entry.", "text": "Northern extreme zone with severe threats and endgame-grade danger.", "sourceNote": "StalkerNet map/location archive text, pending replacement with exact Anomaly in-game description if provided.", "patch": ""}, {"title": "Agroprom Underground", "category": "Labs", "value": "Underground complex", "base": "Beneath Agroprom", "relations": "Subterranean route and danger site.", "text": "Agroprom Underground is the tunnel network beneath the Agroprom region. It is a tight, hostile underground space connected to the area’s research and military history. Expect poor sightlines, cramped movement, ambush pressure and the usual Zone problem: the deeper you go, the less the surface rules apply.", "sourceNote": "StalkerNet lab/underground archive text, pending replacement with exact Anomaly in-game description if provided.", "patch": ""}, {"title": "Lab X-18", "category": "Labs", "value": "Underground laboratory", "base": "Beneath Dark Valley", "relations": "Classic underground research complex.", "text": "Lab X-18 is an underground laboratory complex associated with Dark Valley. It represents the Zone’s buried scientific horror: sealed corridors, old experiments, heavy doors and the feeling that whatever happened below ground was not meant to be reported honestly.", "sourceNote": "StalkerNet lab/underground archive text, pending replacement with exact Anomaly in-game description if provided.", "patch": ""}, {"title": "Lab X-16", "category": "Labs", "value": "Underground laboratory", "base": "Yantar", "relations": "Psi-linked laboratory site.", "text": "Lab X-16 is tied to Yantar and the Zone’s psi-threat history. It is one of the underground places where scientific ambition and mental danger overlap. A stalker entering X-16 should expect the fight to be against more than claws, bullets or anomalies.", "sourceNote": "StalkerNet lab/underground archive text, pending replacement with exact Anomaly in-game description if provided.", "patch": ""}, {"title": "Lab X-19", "category": "Labs", "value": "Underground laboratory", "base": "Radar region", "relations": "Radar-associated psi complex.", "text": "Lab X-19 is associated with Radar and northern psi threats. It belongs to the same family of underground sites where the Zone’s stranger technologies and experiments left wounds in the map. It should be treated as a high-risk objective, not a shortcut.", "sourceNote": "StalkerNet lab/underground archive text, pending replacement with exact Anomaly in-game description if provided.", "patch": ""}, {"title": "Jupiter Underground", "category": "Labs", "value": "Underground passage network", "base": "Beneath Jupiter", "relations": "Tunnel and transit route.", "text": "Jupiter Underground is the passage network beneath the Jupiter region. It connects industrial ground, subterranean routes and late-Zone movement. Like most underground routes, it offers shelter from the sky while trading it for darkness, choke points and whatever followed the tunnels first.", "sourceNote": "StalkerNet lab/underground archive text, pending replacement with exact Anomaly in-game description if provided.", "patch": ""}, {"title": "Lab X-8", "category": "Labs", "value": "Underground laboratory", "base": "Outskirts sector", "relations": "Hidden laboratory complex.", "text": "Lab X-8 is a hidden laboratory complex beneath the Outskirts sector. It fits the pattern of late-Zone underground sites: buried research, heavy danger and information that was probably safer before someone found it.", "sourceNote": "StalkerNet lab/underground archive text, pending replacement with exact Anomaly in-game description if provided.", "patch": ""}, {"title": "Sarcophagus", "category": "Labs", "value": "Interior / underground site", "base": "Chernobyl NPP", "relations": "Interior approach into the NPP heart.", "text": "The Sarcophagus is the interior approach into the buried heart of the Chernobyl NPP. It is not merely a structure, but a threshold: concrete, radiation, Monolith presence and the feeling of walking into the Zone’s sealed throat.", "sourceNote": "StalkerNet lab/underground archive text, pending replacement with exact Anomaly in-game description if provided.", "patch": ""}, {"title": "Monolith Control Center", "category": "Labs", "value": "Underground control complex", "base": "Near / within Chernobyl NPP", "relations": "Deep Monolith-linked control site.", "text": "The Monolith Control Center is a deep control complex tied to the Zone’s strangest signals and Monolith influence. It belongs to the hidden machinery of belief, control and psychic manipulation that makes the northern Zone feel watched even when no one is visible.", "sourceNote": "StalkerNet lab/underground archive text, pending replacement with exact Anomaly in-game description if provided.", "patch": ""}, {"title": "Monolith War Lab", "category": "Labs", "value": "Northern laboratory complex", "base": "Generators / northern extreme Zone", "relations": "Monolith operations and war doctrine.", "text": "The Monolith War Lab is a northern laboratory complex tied to Monolith operations and war doctrine. It should be treated as an endgame-grade archive entry: remote, hostile and connected to the Zone’s most fanatical military presence.", "sourceNote": "StalkerNet lab/underground archive text, pending replacement with exact Anomaly in-game description if provided.", "patch": ""}, {"title": "Emission Protocol", "category": "Survival Notes", "value": "Critical procedure", "base": "Sky turns wrong, shelter comes first", "relations": "Do not finish the job. Do not loot. Get indoors.", "text": "When the warning hits, the Zone has stopped negotiating. Drop the hero act and get under concrete, earth or heavy steel. A shack with holes in the roof is not shelter, it is a coffin with ventilation. If you are caught in the open, run for the nearest marked safe place and ignore every corpse, stash and shiny thing along the way. The sky will still be there after. You might not be.", "sourceNote": "StalkerNet field manual note, lore-friendly rewrite."}, {"title": "Anomaly Detection", "category": "Survival Notes", "value": "Essential field skill", "base": "Bolts, eyes, ears and patience", "relations": "The ground is innocent only after it has been tested.", "text": "A clean path in the Zone is just an anomaly that has not introduced itself yet. Throw bolts before your boots, watch for air bending wrong, sparks snapping in silence, heat shimmer, oily puddles and grass moving without wind. Detectors help, but they are not gods. Walk slow when the world feels too quiet. Most rookies die because they trusted empty space.", "sourceNote": "StalkerNet field manual note, lore-friendly rewrite."}, {"title": "Artifact Handling", "category": "Survival Notes", "value": "High-risk salvage procedure", "base": "Treasure that bites back", "relations": "Check the field, check the rads, then check your greed.", "text": "Artifacts look small because the Zone has a sense of humour. Before touching one, read the anomaly field, check radiation, make sure your container is ready and decide whether the payday is worth limping home with your skin arguing against you. Never grab an artifact just because it is glowing nicely. Pretty things in the Zone are usually bait with a better vocabulary.", "sourceNote": "StalkerNet field manual note, lore-friendly rewrite."}, {"title": "Radiation Exposure", "category": "Survival Notes", "value": "Medical hazard", "base": "The quiet killer", "relations": "If the counter clicks, your time is being spent.", "text": "Radiation does not roar or chase you. It just waits, patient as debt. Watch your meter, trust your medicine, and do not linger around hot metal, wrecks, dirty water or artifacts unless you have a reason and a way out. A man can survive claws, bullets and bad luck, then die because he stood in the wrong puddle counting bolts.", "sourceNote": "StalkerNet field manual note, lore-friendly rewrite."}, {"title": "Bleeding and Wounds", "category": "Survival Notes", "value": "Immediate survival priority", "base": "Patch the leak before pride finishes you", "relations": "Bandage first, loot later.", "text": "Blood on the ground is a trail, a timer and an invitation. If you are bleeding, fix it before you search bodies, argue over loot or check if your gun looks cool in the moonlight. Bandage, breathe, listen, then move. Plenty of stalkers win the fight and lose the walk home.", "sourceNote": "StalkerNet field manual note, lore-friendly rewrite."}, {"title": "Night Travel", "category": "Survival Notes", "value": "High-risk movement", "base": "The Zone grows teeth after dark", "relations": "Move slower, listen longer, avoid unknown ground.", "text": "At night the Zone does not become empty. It becomes private. Mutants move closer, men hide better, and anomalies wear the dark like a coat. If you must travel, keep your light low, know your landmarks and do not wander into fresh ground just because the map says it is a road. Maps do not hear breathing in the bushes.", "sourceNote": "StalkerNet field manual note, lore-friendly rewrite."}, {"title": "Underground Movement", "category": "Survival Notes", "value": "Confined-space procedure", "base": "Tunnels remember every mistake", "relations": "Reload before doors. Count exits. Respect echoes.", "text": "Underground, every sound belongs to something until proven otherwise. Reload before opening doors, mark your route, check corners like they owe you money and never chase a strange noise deeper unless you came prepared to meet it. The surface wants to kill you honestly. The tunnels prefer theatre.", "sourceNote": "StalkerNet field manual note, lore-friendly rewrite."}, {"title": "Faction Checkpoints", "category": "Survival Notes", "value": "Social / combat hazard", "base": "Flags matter, reputation matters more", "relations": "A lowered gun is not friendship.", "text": "Check colours before you stroll into a checkpoint smiling like a tourist. A faction that liked you yesterday may dislike your escort, your armour, your last contract or the direction you are walking from. Slow down, keep your weapon sensible, and let them see you are not charging. Most checkpoint shootings begin with someone assuming they were recognised.", "sourceNote": "StalkerNet field manual note, lore-friendly rewrite."}, {"title": "Mutant Pack Behaviour", "category": "Survival Notes", "value": "Combat warning", "base": "The first bite is only the question", "relations": "Do not let them herd you into worse trouble.", "text": "Pack mutants do not need tactics written on a chalkboard. They have teeth and numbers. They nip, split your aim, force you backward and wait for panic to push you into an anomaly, a wall or a reload at the wrong time. Back toward cover, keep them in front, and shoot the one changing your position, not always the one making the most noise.", "sourceNote": "StalkerNet field manual note, lore-friendly rewrite."}, {"title": "When to Retreat", "category": "Survival Notes", "value": "Career-saving advice", "base": "Living is not cowardice", "relations": "Leave while leaving is still an option.", "text": "The Zone loves men who call retreat cowardice. They are easy to bury because they stand still. If your ammo is low, armour is ruined, meds are gone, vision is bad or the route no longer makes sense, pull back. A contract can be tried again. A corpse cannot haggle with the trader.", "sourceNote": "StalkerNet field manual note, lore-friendly rewrite."}, {"title": "Safehouse Discipline", "category": "Survival Notes", "value": "Base survival habit", "base": "Safe is something you keep doing", "relations": "Check doors, stash supplies, plan exits.", "text": "A safehouse is only safe until someone else learns the same rumour. Check the doors, watch the windows, stash water, medicine and ammunition, then decide where you run if the walls stop being friendly. Sleep with your pack ready enough to move. Comfort is useful. Trust is expensive.", "sourceNote": "StalkerNet field manual note, lore-friendly rewrite."}, {"title": "Looting Under Fire", "category": "Survival Notes", "value": "Combat discipline", "base": "Greed has killed better men than bullets", "relations": "Clear the area before touching pockets.", "text": "A fresh corpse is not a shop counter. Before looting, check rooftops, bushes, corners and the bodies that stopped moving too politely. Wounded men play dead, mutants circle back, and snipers adore impatient hands. The Zone has a special grave for stalkers who died holding someone else’s sausage and a half-empty magazine.", "sourceNote": "StalkerNet field manual note, lore-friendly rewrite."}];

function archiveCategories() {
  return ["All", "Factions", "Mutants", "Anomalies", "Artifacts", "Locations", "Labs", "Survival Notes"];
}

let activeArchiveCategory = "All";

function archivePatchForEntry(entry) {
  if (entry.category === "Mutants") return `<div class="archive-mutant-icon">☣</div>`;
  if (entry.category === "Anomalies") return `<div class="archive-anomaly-icon">⌁</div>`;
  if (entry.category === "Artifacts") return `<div class="archive-artifact-icon">◇</div>`;
  if (entry.category === "Locations") return `<div class="archive-location-icon">⌖</div>`;
  if (entry.category === "Labs") return `<div class="archive-lab-icon">▣</div>`;
  if (entry.category === "Survival Notes") return `<div class="archive-survival-icon">!</div>`;
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

  const entries = STALKERNET_ARCHIVE_ENTRIES.filter(entry => {
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

function bindArchiveSearch() {
  const searchInput = document.getElementById("loreSearch") || document.getElementById("archiveSearch");
  if (searchInput && !searchInput.dataset.archiveV321Bound) {
    searchInput.dataset.archiveV321Bound = "true";
    searchInput.addEventListener("input", renderLore);
  }
}

window.addEventListener("load", () => {
  bindArchiveSearch();
  renderLoreFilters();
  renderLore();
});



// v3.7 Local Jobs Board
const JOB_STATUSES = ["Open", "Accepted", "Completed", "Failed", "Abandoned"];

function ensureJobsState() {
  if (!Array.isArray(state.jobs)) state.jobs = [];
  if (!state.jobsMigratedFromTasks && Array.isArray(state.tasks) && state.tasks.length) {
    state.tasks.forEach(task => {
      if (!task || !task.text) return;
      state.jobs.push({
        id: task.id || id(),
        title: task.text,
        type: "Personal Note",
        location: "",
        risk: "Low",
        reward: "",
        status: task.done ? "Completed" : "Open",
        description: "Imported from old task list.",
        createdAt: nowTime()
      });
    });
    state.jobsMigratedFromTasks = true;
    saveState();
  }
}

function clearJobForm() {
  ["jobTitleInput","jobLocationInput","jobRewardInput","jobDescriptionInput"].forEach(idName => {
    const el = document.getElementById(idName);
    if (el) el.value = "";
  });
  const type = document.getElementById("jobTypeSelect");
  const risk = document.getElementById("jobRiskSelect");
  const status = document.getElementById("jobStatusSelect");
  if (type) type.value = "Mutant Hunt";
  if (risk) risk.value = "Low";
  if (status) status.value = "Open";
}

function addJobFromForm() {
  ensureJobsState();
  const title = document.getElementById("jobTitleInput")?.value.trim() || "";
  if (!title) {
    toast("Job needs a title.");
    return;
  }
  state.jobs.unshift({
    id: id(),
    title,
    type: document.getElementById("jobTypeSelect")?.value || "Personal Note",
    location: document.getElementById("jobLocationInput")?.value.trim() || "",
    risk: document.getElementById("jobRiskSelect")?.value || "Low",
    reward: document.getElementById("jobRewardInput")?.value.trim() || "",
    status: document.getElementById("jobStatusSelect")?.value || "Open",
    description: document.getElementById("jobDescriptionInput")?.value.trim() || "",
    createdAt: nowTime()
  });
  saveState();
  clearJobForm();
  renderTasks();
  toast("Job logged.");
}

function cycleJobStatus(jobId) {
  ensureJobsState();
  const job = state.jobs.find(item => item.id === jobId);
  if (!job) return;
  const current = JOB_STATUSES.indexOf(job.status);
  job.status = JOB_STATUSES[(current + 1) % JOB_STATUSES.length];
  saveState();
  renderTasks();
}

function deleteJob(jobId) {
  ensureJobsState();
  state.jobs = state.jobs.filter(item => item.id !== jobId);
  saveState();
  renderTasks();
}

function renderTasks() {
  ensureJobsState();
  const list = document.getElementById("taskList");
  if (!list) return;

  const filterStatus = document.getElementById("jobFilterStatus")?.value || "All";
  const filterRisk = document.getElementById("jobFilterRisk")?.value || "All";

  const jobs = state.jobs.filter(job => {
    return (filterStatus === "All" || job.status === filterStatus) &&
           (filterRisk === "All" || job.risk === filterRisk);
  });

  if (!jobs.length) {
    list.innerHTML = `<article class="module-panel empty-job-card"><div class="module-label">NO JOBS FOUND</div><p class="message-text">No jobs match the current filters. Log a contract, stash note, warning, or field reminder above.</p></article>`;
    return;
  }

  list.innerHTML = jobs.map(job => `
    <article class="task-card job-card ${job.status === "Completed" ? "done" : ""}">
      <div class="job-card-top">
        <div><div class="job-type">${escapeHtml(job.type || "Personal Note")}</div><h3>${escapeHtml(job.title || "Untitled Job")}</h3></div>
        <span class="job-risk risk-${escapeHtml((job.risk || "Low").toLowerCase())}">${escapeHtml(job.risk || "Low")}</span>
      </div>
      <div class="job-facts">
        <div><span>Location</span><strong>${escapeHtml(job.location || "Unlisted")}</strong></div>
        <div><span>Reward</span><strong>${escapeHtml(job.reward || "Unlisted")}</strong></div>
        <div><span>Status</span><strong>${escapeHtml(job.status || "Open")}</strong></div>
        <div><span>Logged</span><strong>${escapeHtml(job.createdAt || "--")}</strong></div>
      </div>
      ${job.description ? `<p class="job-description">${escapeHtml(job.description)}</p>` : ""}
      <div class="job-actions">
        <button class="small-btn" data-job-status="${escapeHtml(job.id)}">Change Status</button>
        <button class="small-btn danger-btn" data-job-delete="${escapeHtml(job.id)}">Delete</button>
      </div>
    </article>
  `).join("");

  list.querySelectorAll("[data-job-status]").forEach(btn => btn.addEventListener("click", () => cycleJobStatus(btn.dataset.jobStatus)));
  list.querySelectorAll("[data-job-delete]").forEach(btn => btn.addEventListener("click", () => deleteJob(btn.dataset.jobDelete)));
}

function bindJobsBoard() {
  ensureJobsState();
  const addBtn = document.getElementById("jobAddBtn");
  const clearBtn = document.getElementById("jobClearBtn");
  const statusFilter = document.getElementById("jobFilterStatus");
  const riskFilter = document.getElementById("jobFilterRisk");

  if (addBtn && !addBtn.dataset.bound) { addBtn.dataset.bound = "true"; addBtn.addEventListener("click", addJobFromForm); }
  if (clearBtn && !clearBtn.dataset.bound) { clearBtn.dataset.bound = "true"; clearBtn.addEventListener("click", clearJobForm); }
  if (statusFilter && !statusFilter.dataset.bound) { statusFilter.dataset.bound = "true"; statusFilter.addEventListener("change", renderTasks); }
  if (riskFilter && !riskFilter.dataset.bound) { riskFilter.dataset.bound = "true"; riskFilter.addEventListener("change", renderTasks); }
}

window.addEventListener("load", () => {
  bindJobsBoard();
  renderTasks();
});


// v3.7.2 preset job form override
function clearJobForm() {
  const defaults = {
    jobTitleInput: 0,
    jobTypeSelect: "Mutant Hunt",
    jobLocationInput: "Cordon",
    jobRiskSelect: "Low",
    jobRewardInput: "Small RU payment",
    jobStatusSelect: "Open",
    jobDescriptionInput: 0
  };

  Object.entries(defaults).forEach(([idName, value]) => {
    const el = document.getElementById(idName);
    if (!el) return;
    if (typeof value === "number") el.selectedIndex = value;
    else el.value = value;
  });
}

function addJobFromForm() {
  ensureJobsState();

  const title = document.getElementById("jobTitleInput")?.value || "";
  if (!title) {
    toast("Job needs a title.");
    return;
  }

  state.jobs.unshift({
    id: id(),
    title,
    type: document.getElementById("jobTypeSelect")?.value || "Personal Note",
    location: document.getElementById("jobLocationInput")?.value || "Cordon",
    risk: document.getElementById("jobRiskSelect")?.value || "Low",
    reward: document.getElementById("jobRewardInput")?.value || "Small RU payment",
    status: document.getElementById("jobStatusSelect")?.value || "Open",
    description: document.getElementById("jobDescriptionInput")?.value || "",
    createdAt: nowTime()
  });

  saveState();
  clearJobForm();
  renderTasks();
  toast("Job logged.");
}



// v3.8 structured marker presets
function getMarkerPresetData() {
  const markerName = document.getElementById("newPinName")?.value || "Custom field note";
  const markerType = document.getElementById("newPinType")?.value || "Custom Note";
  const threat = document.getElementById("newPinThreat")?.value || "Unknown";
  const visibility = document.getElementById("newPinVisibility")?.value || "Private";
  const note = document.getElementById("newPinDescription")?.value || "Personal map note.";

  return {
    markerName,
    markerType,
    threat,
    visibility,
    note,
    description: `[${markerType}] [Threat: ${threat}] [${visibility}] ${note}`
  };
}

function resetMarkerPresetForm() {
  ["newPinName", "newPinType", "newPinThreat", "newPinVisibility", "newPinDescription"].forEach(idName => {
    const el = document.getElementById(idName);
    if (el && "selectedIndex" in el) el.selectedIndex = 0;
  });
}

function createStructuredMapMarker() {
  const data = getMarkerPresetData();

  if (!state.customPins) state.customPins = [];

  const currentMap = state.activeMap || state.selectedMap || state.currentMap || document.getElementById("mapSectionSelect")?.value || "Cordon";
  const newPin = {
    id: id(),
    name: data.markerName,
    type: data.markerType,
    threat: data.threat,
    visibility: data.visibility,
    description: data.description,
    map: currentMap,
    x: 50,
    y: 50,
    custom: true,
    createdAt: nowTime()
  };

  state.customPins.push(newPin);
  saveState();
  resetMarkerPresetForm();

  if (typeof renderMapPins === "function") renderMapPins();
  if (typeof renderPinManager === "function") renderPinManager();
  if (typeof renderMap === "function") renderMap();

  toast("Marker placed.");
}

function bindStructuredMarkerForm() {
  const btn = document.getElementById("saveNewPinBtn");
  if (!btn || btn.dataset.markerPresetBound) return;
  btn.dataset.markerPresetBound = "true";
  btn.addEventListener("click", event => {
    event.preventDefault();
    event.stopImmediatePropagation();
    createStructuredMapMarker();
  }, true);
}

window.addEventListener("load", () => {
  bindStructuredMarkerForm();
});


// v3.8.1 marker preset force-bind
function markerPresetData381() {
  const markerType = document.getElementById("newPinType")?.value || "Custom Note";
  const threat = document.getElementById("newPinThreat")?.value || "Unknown";
  const visibility = document.getElementById("newPinVisibility")?.value || "Private";
  const note = document.getElementById("newPinDescription")?.value || "Personal map note.";
  return {
    name: document.getElementById("newPinName")?.value || "Custom field note",
    type: markerType,
    threat,
    visibility,
    description: `[${markerType}] [Threat: ${threat}] [${visibility}] ${note}`
  };
}

function placePresetMarker381() {
  const d = markerPresetData381();
  if (!state.customPins) state.customPins = [];
  const currentMap = state.activeMap || state.selectedMap || state.currentMap || document.getElementById("mapSectionSelect")?.value || "Cordon";
  state.customPins.push({
    id: id(),
    name: d.name,
    type: d.type,
    threat: d.threat,
    visibility: d.visibility,
    description: d.description,
    map: currentMap,
    x: 50,
    y: 50,
    custom: true,
    createdAt: nowTime()
  });
  saveState();
  ["newPinName","newPinType","newPinThreat","newPinVisibility","newPinDescription"].forEach(idName => {
    const el = document.getElementById(idName);
    if (el && "selectedIndex" in el) el.selectedIndex = 0;
  });
  if (typeof renderMapPins === "function") renderMapPins();
  if (typeof renderPinManager === "function") renderPinManager();
  if (typeof renderMap === "function") renderMap();
  toast("Marker placed.");
}

window.addEventListener("load", () => {
  const btn = document.getElementById("saveNewPinBtn");
  if (!btn || btn.dataset.v381Bound) return;
  btn.dataset.v381Bound = "true";
  btn.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopImmediatePropagation();
    placePresetMarker381();
  }, true);
});


// v3.8.2 marker save fix: use original map pin shape
function getPresetMarkerNote382() {
  const markerType = document.getElementById("newPinType")?.value || "Custom Note";
  const threat = document.getElementById("newPinThreat")?.value || "Unknown";
  const visibility = document.getElementById("newPinVisibility")?.value || "Private";
  const note = document.getElementById("newPinNote")?.value || document.getElementById("newPinDescription")?.value || "Personal map note.";
  return `[${markerType}] [Threat: ${threat}] [${visibility}] ${note}`;
}

function resetPresetMarkerForm382() {
  ["newPinName", "newPinType", "newPinThreat", "newPinVisibility", "newPinNote", "newPinDescription"].forEach(idName => {
    const el = document.getElementById(idName);
    if (el && "selectedIndex" in el) el.selectedIndex = 0;
  });
}

function createPresetPinFromForm382() {
  if (!leafletMap) {
    alert("Map is not ready yet.");
    return;
  }

  const name = document.getElementById("newPinName")?.value || "Custom field note";
  const type = document.getElementById("newPinType")?.value || "Custom Note";
  const note = getPresetMarkerNote382();

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

  resetPresetMarkerForm382();

  if (typeof closePinCreator === "function") closePinCreator();
  if (typeof rebuildLeafletMarkers === "function") rebuildLeafletMarkers();
  if (typeof renderMapInfo === "function") renderMapInfo(newPin.id);
  if (typeof renderPinManagerList === "function") renderPinManagerList();
  if (typeof renderMapFilters === "function") renderMapFilters();

  toast("Marker placed.");
}

function bindMarkerSaveFix382() {
  const oldBtn = document.getElementById("saveNewPinBtn");
  if (!oldBtn || oldBtn.dataset.v382Bound) return;

  const newBtn = oldBtn.cloneNode(true);
  newBtn.dataset.v382Bound = "true";
  oldBtn.parentNode.replaceChild(newBtn, oldBtn);

  newBtn.addEventListener("click", event => {
    event.preventDefault();
    event.stopPropagation();
    createPresetPinFromForm382();
  });
}

window.addEventListener("load", bindMarkerSaveFix382);


// v3.9 Stalker ID preset compatibility
function normaliseProfilePresetFieldsV39() {
  const mappings = [
    ["profileRank", ["rankInput", "stalkerRank", "idRank"]],
    ["profileStatus", ["statusInput", "stalkerStatus", "idStatus"]],
    ["profileReputation", ["reputationInput", "stalkerReputation", "idReputation"]],
    ["profileHomeArea", ["profileHome", "homeAreaInput", "stalkerHome", "idHomeArea"]],
    ["profileWeapon", ["profilePrimaryWeapon", "primaryWeaponInput", "stalkerWeapon", "idWeapon"]],
    ["profileBio", ["profileQuote", "bioInput", "quoteInput", "stalkerBio", "idBio"]]
  ];

  mappings.forEach(([primary, aliases]) => {
    const primaryEl = document.getElementById(primary);
    if (primaryEl) return;
    for (const alias of aliases) {
      const aliasEl = document.getElementById(alias);
      if (aliasEl) {
        aliasEl.dataset.profileAlias = primary;
        break;
      }
    }
  });
}

window.addEventListener("load", normaliseProfilePresetFieldsV39);


// v3.9.1 stronger Stalker ID preset compatibility
function readFirstValueV391(ids, fallback = "") {
  for (const idName of ids) {
    const el = document.getElementById(idName);
    if (el && typeof el.value === "string") return el.value.trim();
  }
  return fallback;
}

function patchProfileSaveButtonV391() {
  const saveBtn = document.getElementById("profileSaveBtn");
  if (!saveBtn || saveBtn.dataset.v391ProfileBound) return;
  saveBtn.dataset.v391ProfileBound = "true";

  saveBtn.addEventListener("click", () => {
    if (!state.profile) state.profile = {};

    state.profile.rank = readFirstValueV391(["profileRank", "cardRank", "idRank"], state.profile.rank || "Rookie");
    state.profile.status = readFirstValueV391(["profileStatus", "cardStatus", "idStatus"], state.profile.status || "Available");
    state.profile.reputation = readFirstValueV391(["profileReputation", "cardReputation", "idReputation"], state.profile.reputation || "Neutral");
    state.profile.badges = readFirstValueV391(["profileBadges", "cardBadges", "idBadges"], state.profile.badges || "None");
    state.profile.homeArea = readFirstValueV391(["profileHomeArea", "profileHome", "cardHomeArea", "idHomeArea"], state.profile.homeArea || "Cordon");
    state.profile.weapon = readFirstValueV391(["profileWeapon", "cardWeapon", "idWeapon"], state.profile.weapon || "Unknown");
    state.profile.bio = readFirstValueV391(["profileBio", "profileQuote", "cardBio", "idBio"], state.profile.bio || "No public note.");

    saveState();

    if (typeof renderProfile === "function") renderProfile();
    if (typeof renderIdentity === "function") renderIdentity();
    if (typeof renderHeaderIdentity === "function") renderHeaderIdentity();

    if (typeof toast === "function") toast("Stalker Card saved.");
  }, true);
}

window.addEventListener("load", patchProfileSaveButtonV391);


// v3.9.2 free text bio and marker note support
function readFreeTextValueV392(idName, fallback = "") {
  const el = document.getElementById(idName);
  if (!el || typeof el.value !== "string") return fallback;
  return el.value.trim();
}

// Override marker note helper from v3.8.2 so free text notes save correctly.
function getPresetMarkerNote382() {
  const markerType = document.getElementById("newPinType")?.value || "Custom Note";
  const threat = document.getElementById("newPinThreat")?.value || "Unknown";
  const visibility = document.getElementById("newPinVisibility")?.value || "Private";
  const note = readFreeTextValueV392("newPinNote", readFreeTextValueV392("newPinDescription", "Personal map note."));
  return `[${markerType}] [Threat: ${threat}] [${visibility}] ${note}`;
}

function resetPresetMarkerForm382() {
  ["newPinName", "newPinType", "newPinThreat", "newPinVisibility"].forEach(idName => {
    const el = document.getElementById(idName);
    if (el && "selectedIndex" in el) el.selectedIndex = 0;
  });

  ["newPinNote", "newPinDescription"].forEach(idName => {
    const el = document.getElementById(idName);
    if (el && typeof el.value === "string") el.value = "";
  });
}

// Patch profile save to keep free text bio if the stronger v3.9.1 save handler is active.
function patchFreeBioProfileSaveV392() {
  const saveBtn = document.getElementById("profileSaveBtn");
  if (!saveBtn || saveBtn.dataset.v392BioBound) return;
  saveBtn.dataset.v392BioBound = "true";

  saveBtn.addEventListener("click", () => {
    if (!state.profile) state.profile = {};

    const bio = readFreeTextValueV392("profileBio",
      readFreeTextValueV392("profileQuote",
      readFreeTextValueV392("cardBio",
      readFreeTextValueV392("idBio", state.profile.bio || ""))));

    if (bio) state.profile.bio = bio;

    saveState();

    if (typeof renderProfile === "function") renderProfile();
    if (typeof renderIdentity === "function") renderIdentity();
    if (typeof renderHeaderIdentity === "function") renderHeaderIdentity();
  }, true);
}

window.addEventListener("load", patchFreeBioProfileSaveV392);


// v3.9.3 force free-text Bio and Marker Note after render
function replaceElementWithTextareaV393(el, idName, rows, placeholder, savedValue = "") {
  if (!el || el.tagName === "TEXTAREA") return el;

  const textarea = document.createElement("textarea");
  textarea.id = idName;
  textarea.rows = rows;
  textarea.placeholder = placeholder;
  textarea.value = savedValue || "";

  // Keep useful classes if present.
  if (el.className) textarea.className = el.className;

  el.replaceWith(textarea);
  return textarea;
}

function findControlAfterLabelTextV393(labelTexts) {
  const labels = Array.from(document.querySelectorAll("label"));
  for (const label of labels) {
    const text = (label.textContent || "").trim().toLowerCase();
    if (labelTexts.some(item => text.includes(item.toLowerCase()))) {
      const inner = label.querySelector("select,input,textarea");
      if (inner) return inner;

      let next = label.nextElementSibling;
      let steps = 0;
      while (next && steps < 5) {
        if (next.matches && next.matches("select,input,textarea")) return next;
        const nested = next.querySelector && next.querySelector("select,input,textarea");
        if (nested) return nested;
        next = next.nextElementSibling;
        steps++;
      }
    }
  }
  return null;
}

function forceFreeTextFieldsV393() {
  const currentBio = state?.profile?.bio || "";
  const bioControl =
    document.getElementById("profileBio") ||
    document.getElementById("profileQuote") ||
    document.getElementById("cardBio") ||
    document.getElementById("idBio") ||
    findControlAfterLabelTextV393(["Quote / Bio", "Bio / Quote", "Bio", "Quote"]);

  const bioTextarea = replaceElementWithTextareaV393(
    bioControl,
    "profileBio",
    4,
    "Write your public stalker bio, quote, warning, or rumour...",
    currentBio
  );

  const markerControl =
    document.getElementById("newPinNote") ||
    document.getElementById("newPinDescription") ||
    findControlAfterLabelTextV393(["Marker Note", "PDA Note"]);

  replaceElementWithTextareaV393(
    markerControl,
    "newPinNote",
    3,
    "Write a marker note, warning, stash clue, or field detail...",
    ""
  );

  if (bioTextarea && !bioTextarea.dataset.v393Bound) {
    bioTextarea.dataset.v393Bound = "true";
    bioTextarea.addEventListener("input", () => {
      if (!state.profile) state.profile = {};
      state.profile.bio = bioTextarea.value;
      saveState();
    });
  }
}

// Override marker note helper again so textarea text saves.
function getPresetMarkerNote382() {
  const markerType = document.getElementById("newPinType")?.value || "Custom Note";
  const threat = document.getElementById("newPinThreat")?.value || "Unknown";
  const visibility = document.getElementById("newPinVisibility")?.value || "Private";
  const note = (document.getElementById("newPinNote")?.value || document.getElementById("newPinDescription")?.value || "Personal map note.").trim();
  return `[${markerType}] [Threat: ${threat}] [${visibility}] ${note || "Personal map note."}`;
}

// Make sure the marker reset clears textareas instead of trying to selectedIndex everything.
function resetPresetMarkerForm382() {
  ["newPinName", "newPinType", "newPinThreat", "newPinVisibility"].forEach(idName => {
    const el = document.getElementById(idName);
    if (el && "selectedIndex" in el) el.selectedIndex = 0;
  });

  ["newPinNote", "newPinDescription"].forEach(idName => {
    const el = document.getElementById(idName);
    if (el && typeof el.value === "string") el.value = "";
  });
}

// Patch save button so free bio is kept.
function bindFreeBioSaveV393() {
  const btn = document.getElementById("profileSaveBtn");
  if (!btn || btn.dataset.v393BioSaveBound) return;
  btn.dataset.v393BioSaveBound = "true";

  btn.addEventListener("click", () => {
    const bio = (document.getElementById("profileBio")?.value || "").trim();
    if (!state.profile) state.profile = {};
    state.profile.bio = bio;
    saveState();

    if (typeof renderProfile === "function") renderProfile();
    if (typeof renderIdentity === "function") renderIdentity();
    if (typeof renderHeaderIdentity === "function") renderHeaderIdentity();

    // Render functions may recreate controls, so force textarea again.
    setTimeout(forceFreeTextFieldsV393, 50);
  }, true);
}

window.addEventListener("load", () => {
  forceFreeTextFieldsV393();
  bindFreeBioSaveV393();
  setTimeout(forceFreeTextFieldsV393, 250);
  setTimeout(forceFreeTextFieldsV393, 900);
});

document.addEventListener("click", event => {
  const target = event.target;
  if (!target) return;
  if (target.closest && (target.closest("#idTab") || target.closest("#mapTab"))) {
    setTimeout(forceFreeTextFieldsV393, 50);
  }
});


// v3.9.4 persistent Stalker ID form save/load
const STALKERNET_ID_FORM_KEY_V394 = "stalkernet_id_form_v394";

function readStoredIdFormV394() {
  try {
    const raw = localStorage.getItem(STALKERNET_ID_FORM_KEY_V394);
    return raw ? JSON.parse(raw) : {};
  } catch (error) {
    return {};
  }
}

function writeStoredIdFormV394(data) {
  try {
    localStorage.setItem(STALKERNET_ID_FORM_KEY_V394, JSON.stringify(data || {}));
  } catch (error) {
    console.warn("Could not save Stalker ID form", error);
  }
}

function idFieldV394(ids) {
  for (const idName of ids) {
    const el = document.getElementById(idName);
    if (el) return el;
  }
  return null;
}

function getIdFormElementsV394() {
  return {
    callsign: idFieldV394(["profileCallsign", "callsignInput", "profileName", "cardCallsign", "idCallsign"]),
    faction: idFieldV394(["profileFaction", "factionSelect", "cardFaction", "idFaction"]),
    rank: idFieldV394(["profileRank", "cardRank", "idRank", "rankInput"]),
    status: idFieldV394(["profileStatus", "cardStatus", "idStatus", "statusInput"]),
    reputation: idFieldV394(["profileReputation", "cardReputation", "idReputation", "reputationInput"]),
    badges: idFieldV394(["profileBadges", "cardBadges", "idBadges", "badgesInput"]),
    homeArea: idFieldV394(["profileHomeArea", "profileHome", "cardHomeArea", "idHomeArea", "homeAreaInput"]),
    weapon: idFieldV394(["profileWeapon", "cardWeapon", "idWeapon", "preferredWeapon", "weaponInput"]),
    bio: idFieldV394(["profileBio", "profileQuote", "cardBio", "idBio", "bioInput", "quoteInput"])
  };
}

function readIdFormV394() {
  const fields = getIdFormElementsV394();
  const data = {};

  Object.entries(fields).forEach(([key, el]) => {
    if (!el || typeof el.value !== "string") return;
    data[key] = el.value;
  });

  return data;
}

function applyIdFormV394(data) {
  if (!data) return;

  const fields = getIdFormElementsV394();

  Object.entries(fields).forEach(([key, el]) => {
    if (!el || typeof el.value !== "string") return;
    if (data[key] === undefined || data[key] === null) return;

    el.value = data[key];

    // If the saved value is no longer in a select, leave the current select alone.
    if (el.tagName === "SELECT" && el.value !== data[key]) {
      const option = Array.from(el.options).find(opt => opt.textContent === data[key] || opt.value === data[key]);
      if (option) el.value = option.value;
    }
  });
}

function syncIdFormIntoProfileV394(data) {
  if (!state.profile) state.profile = {};

  if (data.callsign !== undefined) state.profile.callsign = data.callsign;
  if (data.faction !== undefined) state.profile.faction = data.faction;
  if (data.rank !== undefined) state.profile.rank = data.rank;
  if (data.status !== undefined) state.profile.status = data.status;
  if (data.reputation !== undefined) state.profile.reputation = data.reputation;
  if (data.badges !== undefined) state.profile.badges = data.badges;
  if (data.homeArea !== undefined) state.profile.homeArea = data.homeArea;
  if (data.weapon !== undefined) state.profile.weapon = data.weapon;
  if (data.bio !== undefined) state.profile.bio = data.bio;
}

function saveIdFormV394(showToast = true) {
  const data = readIdFormV394();
  writeStoredIdFormV394(data);
  syncIdFormIntoProfileV394(data);

  saveState();

  if (typeof renderProfile === "function") renderProfile();
  if (typeof renderIdentity === "function") renderIdentity();
  if (typeof renderHeaderIdentity === "function") renderHeaderIdentity();

  // Some renderers recreate the form, so reapply after they finish.
  setTimeout(() => {
    if (typeof forceFreeTextFieldsV393 === "function") forceFreeTextFieldsV393();
    applyIdFormV394(data);
  }, 80);

  if (showToast && typeof toast === "function") toast("Stalker ID saved.");
}

function loadIdFormV394() {
  const stored = readStoredIdFormV394();

  // Fallback to state.profile if no explicit local form save exists yet.
  const profile = state?.profile || {};
  const fallback = {
    callsign: profile.callsign || profile.name || "",
    faction: profile.faction || "",
    rank: profile.rank || "",
    status: profile.status || "",
    reputation: profile.reputation || "",
    badges: profile.badges || "",
    homeArea: profile.homeArea || profile.home || "",
    weapon: profile.weapon || profile.primaryWeapon || "",
    bio: profile.bio || profile.quote || ""
  };

  const data = Object.keys(stored).length ? stored : fallback;

  if (typeof forceFreeTextFieldsV393 === "function") forceFreeTextFieldsV393();
  applyIdFormV394(data);
}

function bindIdFormPersistenceV394() {
  const saveBtn = document.getElementById("profileSaveBtn");
  if (saveBtn && !saveBtn.dataset.v394SaveBound) {
    saveBtn.dataset.v394SaveBound = "true";
    saveBtn.addEventListener("click", event => {
      // Let older handlers run too, then force complete save after them.
      setTimeout(() => saveIdFormV394(true), 30);
    });
  }

  const fields = getIdFormElementsV394();
  Object.values(fields).forEach(el => {
    if (!el || el.dataset.v394AutoSaveBound) return;
    el.dataset.v394AutoSaveBound = "true";
    el.addEventListener("change", () => {
      const data = readIdFormV394();
      writeStoredIdFormV394(data);
      syncIdFormIntoProfileV394(data);
      saveState();
    });
    el.addEventListener("input", () => {
      const data = readIdFormV394();
      writeStoredIdFormV394(data);
      syncIdFormIntoProfileV394(data);
      saveState();
    });
  });
}

window.addEventListener("load", () => {
  setTimeout(() => {
    loadIdFormV394();
    bindIdFormPersistenceV394();
  }, 150);

  setTimeout(() => {
    loadIdFormV394();
    bindIdFormPersistenceV394();
  }, 900);
});

document.addEventListener("click", event => {
  const target = event.target;
  if (!target || !target.closest) return;

  if (target.closest("#idTab") || target.closest('[data-tab="idTab"]')) {
    setTimeout(() => {
      loadIdFormV394();
      bindIdFormPersistenceV394();
    }, 80);
  }
});


// v3.9.6 Cloud-backed Stalker ID profile
const STALKERNET_PROFILE_CLOUD_COLLECTION_V396 = "profiles";

function currentFirebaseUserV396() {
  try {
    if (typeof auth !== "undefined" && auth?.currentUser) return auth.currentUser;
    if (typeof firebaseAuth !== "undefined" && firebaseAuth?.currentUser) return firebaseAuth.currentUser;
  } catch (error) {}
  return null;
}

function firebaseDbV396() {
  try {
    if (typeof db !== "undefined" && db) return db;
    if (typeof firestore !== "undefined" && firestore) return firestore;
  } catch (error) {}
  return null;
}

function isFirestoreCompatV396(database) {
  return database && typeof database.collection === "function";
}

function isFirestoreModularAvailableV396() {
  return typeof doc === "function" && typeof getDoc === "function" && typeof setDoc === "function" && typeof serverTimestamp === "function";
}

function profileDocRefV396(user) {
  const database = firebaseDbV396();
  if (!database || !user) return null;
  if (isFirestoreCompatV396(database)) return database.collection(STALKERNET_PROFILE_CLOUD_COLLECTION_V396).doc(user.uid);
  if (isFirestoreModularAvailableV396()) return doc(database, STALKERNET_PROFILE_CLOUD_COLLECTION_V396, user.uid);
  return null;
}

function getFullIdProfileV396() {
  const formData = typeof readIdFormV394 === "function" ? readIdFormV394() : {};
  const profile = state?.profile || {};
  const user = currentFirebaseUserV396();

  const data = {
    callsign: formData.callsign || profile.callsign || profile.name || user?.displayName || "",
    faction: formData.faction || profile.faction || "",
    rank: formData.rank || profile.rank || "",
    status: formData.status || profile.status || "",
    reputation: formData.reputation || profile.reputation || "",
    badges: formData.badges || profile.badges || "",
    homeArea: formData.homeArea || profile.homeArea || profile.home || "",
    weapon: formData.weapon || profile.weapon || profile.primaryWeapon || "",
    bio: formData.bio || profile.bio || profile.quote || "",
    patch: profile.patch || profile.avatar || "",
    email: user?.email || profile.email || ""
  };

  Object.keys(data).forEach(key => {
    if (typeof data[key] === "string") data[key] = data[key].trim();
  });

  return data;
}

function applyFullIdProfileV396(data) {
  if (!data) return;
  if (!state.profile) state.profile = {};

  const merged = {
    callsign: data.callsign || state.profile.callsign || state.profile.name || "",
    name: data.callsign || state.profile.name || "",
    faction: data.faction || state.profile.faction || "",
    rank: data.rank || state.profile.rank || "",
    status: data.status || state.profile.status || "",
    reputation: data.reputation || state.profile.reputation || "",
    badges: data.badges || state.profile.badges || "",
    homeArea: data.homeArea || state.profile.homeArea || state.profile.home || "",
    weapon: data.weapon || state.profile.weapon || state.profile.primaryWeapon || "",
    bio: data.bio || state.profile.bio || state.profile.quote || "",
    patch: data.patch || state.profile.patch || state.profile.avatar || "",
    email: data.email || state.profile.email || ""
  };

  state.profile = {
    ...state.profile,
    ...merged,
    primaryWeapon: merged.weapon,
    home: merged.homeArea,
    quote: merged.bio
  };

  if (typeof writeStoredIdFormV394 === "function") {
    writeStoredIdFormV394({
      callsign: merged.callsign,
      faction: merged.faction,
      rank: merged.rank,
      status: merged.status,
      reputation: merged.reputation,
      badges: merged.badges,
      homeArea: merged.homeArea,
      weapon: merged.weapon,
      bio: merged.bio
    });
  }

  if (typeof applyIdFormV394 === "function") {
    applyIdFormV394({
      callsign: merged.callsign,
      faction: merged.faction,
      rank: merged.rank,
      status: merged.status,
      reputation: merged.reputation,
      badges: merged.badges,
      homeArea: merged.homeArea,
      weapon: merged.weapon,
      bio: merged.bio
    });
  }

  saveState();
  if (typeof renderProfile === "function") renderProfile();
  if (typeof renderIdentity === "function") renderIdentity();
  if (typeof renderHeaderIdentity === "function") renderHeaderIdentity();
}

async function saveIdProfileToCloudV396(showToast = true) {
  const user = currentFirebaseUserV396();
  if (!user) {
    if (showToast && typeof toast === "function") toast("Sign in to save ID online.");
    return false;
  }

  const ref = profileDocRefV396(user);
  if (!ref) {
    if (showToast && typeof toast === "function") toast("Cloud profile unavailable.");
    return false;
  }

  const profileData = getFullIdProfileV396();
  profileData.uid = user.uid;
  profileData.updatedAtLocal = new Date().toISOString();

  try {
    const database = firebaseDbV396();
    if (isFirestoreCompatV396(database)) {
      await ref.set({
        ...profileData,
        updatedAt: (typeof firebase !== "undefined" && firebase.firestore?.FieldValue?.serverTimestamp)
          ? firebase.firestore.FieldValue.serverTimestamp()
          : profileData.updatedAtLocal
      }, { merge: true });
    } else if (isFirestoreModularAvailableV396()) {
      await setDoc(ref, { ...profileData, updatedAt: serverTimestamp() }, { merge: true });
    }
    applyFullIdProfileV396(profileData);
    if (showToast && typeof toast === "function") toast("Stalker ID saved online.");
    return true;
  } catch (error) {
    console.error("Cloud ID save failed", error);
    if (showToast && typeof toast === "function") toast("Could not save ID online.");
    return false;
  }
}

async function loadIdProfileFromCloudV396(showToast = false) {
  const user = currentFirebaseUserV396();
  if (!user) return false;

  const ref = profileDocRefV396(user);
  if (!ref) return false;

  try {
    let data = null;
    const database = firebaseDbV396();
    if (isFirestoreCompatV396(database)) {
      const snap = await ref.get();
      if (snap.exists) data = snap.data();
    } else if (isFirestoreModularAvailableV396()) {
      const snap = await getDoc(ref);
      if (snap.exists()) data = snap.data();
    }
    if (!data) return false;
    applyFullIdProfileV396(data);
    if (showToast && typeof toast === "function") toast("Stalker ID loaded.");
    return true;
  } catch (error) {
    console.error("Cloud ID load failed", error);
    if (showToast && typeof toast === "function") toast("Could not load online ID.");
    return false;
  }
}

function patchProfileSaveForCloudV396() {
  const saveBtn = document.getElementById("profileSaveBtn");
  if (!saveBtn || saveBtn.dataset.v396CloudBound) return;
  saveBtn.dataset.v396CloudBound = "true";
  saveBtn.addEventListener("click", () => setTimeout(() => saveIdProfileToCloudV396(true), 140));
}

function patchAuthLoadForCloudIdV396() {
  try {
    if (typeof auth !== "undefined" && auth?.onAuthStateChanged && !window.__stalkernetCloudIdAuthBoundV396) {
      window.__stalkernetCloudIdAuthBoundV396 = true;
      auth.onAuthStateChanged(user => {
        if (user) setTimeout(() => loadIdProfileFromCloudV396(false), 500);
      });
    }
    if (typeof firebaseAuth !== "undefined" && firebaseAuth?.onAuthStateChanged && !window.__stalkernetCloudIdFirebaseAuthBoundV396) {
      window.__stalkernetCloudIdFirebaseAuthBoundV396 = true;
      firebaseAuth.onAuthStateChanged(user => {
        if (user) setTimeout(() => loadIdProfileFromCloudV396(false), 500);
      });
    }
  } catch (error) {
    console.warn("Cloud ID auth bind failed", error);
  }
}

function patchPublicCardValuesV396() {
  const modal = document.getElementById("publicCardModal") || document.querySelector(".public-card-modal");
  if (!modal) return;
  const p = state?.profile || {};

  const fields = Array.from(modal.querySelectorAll("*")).filter(el => {
    const text = (el.textContent || "").trim().toUpperCase();
    return text === "HOME AREA" || text === "WEAPON" || text === "BADGES";
  });

  fields.forEach(labelEl => {
    const label = (labelEl.textContent || "").trim().toUpperCase();
    const box = labelEl.parentElement;
    if (!box) return;
    const valueEl = box.querySelector("strong,b");
    if (!valueEl) return;
    if (label === "HOME AREA") valueEl.textContent = p.homeArea || p.home || "Unknown";
    if (label === "WEAPON") valueEl.textContent = p.weapon || p.primaryWeapon || "Unknown";
    if (label === "BADGES") valueEl.textContent = p.badges || "No badges recorded";
  });

  const badgePill = Array.from(modal.querySelectorAll("*")).find(el => (el.textContent || "").trim().toUpperCase() === "NO BADGES RECORDED");
  if (badgePill && p.badges && p.badges !== "None") badgePill.textContent = p.badges;
}

window.addEventListener("load", () => {
  patchProfileSaveForCloudV396();
  patchAuthLoadForCloudIdV396();
  setTimeout(() => loadIdProfileFromCloudV396(false), 900);
  setTimeout(patchPublicCardValuesV396, 1000);
});

document.addEventListener("click", event => {
  const target = event.target;
  if (!target || !target.closest) return;

  if (target.closest("#idTab") || target.closest('[data-tab="idTab"]')) {
    setTimeout(() => {
      patchProfileSaveForCloudV396();
      loadIdProfileFromCloudV396(false);
    }, 150);
  }

  if (target.closest(".message-card") || target.closest("[data-public-card]") || target.closest("[data-user-id]")) {
    setTimeout(patchPublicCardValuesV396, 250);
  }
});



// v3.9.7.6 emergency scroll restore
function emergencyRestoreScrollV3976() {
  const html = document.documentElement;
  const body = document.body;

  ["public-card-root-locked-v3974","public-card-body-locked-v3974","public-card-open-v3973"].forEach(cls => {
    html.classList.remove(cls);
    body.classList.remove(cls);
  });

  [html, body].forEach(el => {
    el.style.overflow = "";
    el.style.overflowY = "";
    el.style.height = "";
    el.style.position = "";
    el.style.top = "";
    el.style.left = "";
    el.style.right = "";
    el.style.width = "";
    el.style.touchAction = "";
  });
}

function getSavedIdDataV3976() {
  let localForm = {};
  try {
    const key = (typeof STALKERNET_ID_FORM_KEY_V394 !== "undefined") ? STALKERNET_ID_FORM_KEY_V394 : "stalkernet_id_form_v394";
    localForm = JSON.parse(localStorage.getItem(key) || "{}");
  } catch (error) {}
  const p = state?.profile || {};
  return {
    faction: localForm.faction || p.faction || "",
    rank: localForm.rank || p.rank || "",
    status: localForm.status || p.status || "",
    reputation: localForm.reputation || p.reputation || "",
    badges: localForm.badges || p.badges || "",
    homeArea: localForm.homeArea || p.homeArea || p.home || "",
    weapon: localForm.weapon || p.weapon || p.primaryWeapon || ""
  };
}

function findPublicCardV3976() {
  return document.getElementById("publicCardModal") ||
    document.getElementById("profileModal") ||
    document.querySelector(".public-card-modal") ||
    document.querySelector(".stalker-card-modal") ||
    Array.from(document.querySelectorAll(".modal,.overlay,dialog,article,section,div")).find(el => {
      const t = el.textContent || "";
      return t.includes("PUBLIC STALKER CARD") && t.includes("FACTION");
    });
}

function setPublicCardFieldV3976(root, label, value) {
  if (!root) return;
  const labelEl = Array.from(root.querySelectorAll("*")).find(el => (el.textContent || "").trim().toUpperCase() === label);
  if (!labelEl || !labelEl.parentElement) return;
  const box = labelEl.parentElement;
  const strong = box.querySelector("strong,b");
  if (strong) { strong.textContent = value; return; }
  const child = Array.from(box.children).find(el => el !== labelEl && el.textContent?.trim());
  if (child) child.textContent = value;
}

function patchPublicCardV3976() {
  emergencyRestoreScrollV3976();
  const modal = findPublicCardV3976();
  if (!modal) return;
  const d = getSavedIdDataV3976();
  const val = (x, fallback) => String(x || "").trim() || fallback;

  setPublicCardFieldV3976(modal, "FACTION", val(d.faction, "Unknown"));
  setPublicCardFieldV3976(modal, "RANK", val(d.rank, "Rookie"));
  setPublicCardFieldV3976(modal, "STATUS", val(d.status, "Available"));
  setPublicCardFieldV3976(modal, "REPUTATION", val(d.reputation, "Neutral"));
  setPublicCardFieldV3976(modal, "HOME AREA", val(d.homeArea, "Unknown"));
  setPublicCardFieldV3976(modal, "WEAPON", val(d.weapon, "Unknown"));

  const badges = val(d.badges, "No badges recorded");
  Array.from(modal.querySelectorAll("*")).forEach(el => {
    if ((el.textContent || "").trim().toUpperCase() === "NO BADGES RECORDED" && badges !== "None") el.textContent = badges;
  });
  modal.classList.add("public-card-basic-scroll-v3976");
}

window.addEventListener("load", () => {
  emergencyRestoreScrollV3976();
  setTimeout(emergencyRestoreScrollV3976, 300);
  setTimeout(emergencyRestoreScrollV3976, 1200);
});

document.addEventListener("click", event => {
  emergencyRestoreScrollV3976();
  const target = event.target;
  if (!target || !target.closest) return;
  if (target.closest(".message-card") || target.closest(".chat-message") || target.closest("[data-user-id]") || target.closest("[data-public-card]") || target.closest("#profileSaveBtn")) {
    setTimeout(patchPublicCardV3976, 80);
    setTimeout(patchPublicCardV3976, 250);
  }
}, true);

document.addEventListener("touchstart", emergencyRestoreScrollV3976, { passive: true });


// v3.9.7.9 Actual Stalker Card modal fix
function resetPublicCardExperimentClassesV3979() {
  const modal = document.getElementById("stalkerCardModal");
  const panel = modal?.querySelector(".stalker-card-panel");
  const backdrop = document.getElementById("stalkerCardBackdrop");

  [
    document.documentElement,
    document.body,
    modal,
    panel,
    backdrop
  ].filter(Boolean).forEach(el => {
    [
      "public-card-root-locked-v3974",
      "public-card-body-locked-v3974",
      "public-card-open-v3973",
      "public-card-backdrop-sheet-v3978",
      "public-card-sheet-v3978",
      "public-card-backdrop-v3974",
      "public-card-panel-v3974",
      "public-card-force-backdrop-v3973",
      "public-card-force-scroll-v3973",
      "public-card-scroll-restore-v3975",
      "public-card-backdrop-restore-v3975"
    ].forEach(cls => el.classList.remove(cls));
  });

  document.documentElement.style.overflowY = "";
  document.body.style.overflowY = "";
  document.body.style.overflow = "";
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.width = "";
}

function closeStalkerCardActualV3979() {
  const modal = document.getElementById("stalkerCardModal");
  if (modal) {
    modal.classList.add("hidden");
    modal.setAttribute("aria-hidden", "true");
    modal.style.display = "";
    modal.style.pointerEvents = "";
  }
  resetPublicCardExperimentClassesV3979();
}

// Replace/strengthen the original close function if it exists.
window.closeStalkerCard = closeStalkerCardActualV3979;
if (typeof closeStalkerCard !== "undefined") {
  closeStalkerCard = closeStalkerCardActualV3979;
}

function openStalkerCardActualV3979() {
  const modal = document.getElementById("stalkerCardModal");
  const panel = modal?.querySelector(".stalker-card-panel");
  if (!modal || !panel) return;

  resetPublicCardExperimentClassesV3979();

  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
  modal.style.display = "";
  modal.style.pointerEvents = "";

  panel.classList.add("stalker-card-panel-fixed-v3979");

  // Make sure the top close button remains reachable.
  const closeBtn = document.getElementById("closeStalkerCardBtn");
  if (closeBtn) closeBtn.classList.add("stalker-card-close-fixed-v3979");
}

function bindActualStalkerCardModalV3979() {
  const modal = document.getElementById("stalkerCardModal");
  const backdrop = document.getElementById("stalkerCardBackdrop");
  const closeBtn = document.getElementById("closeStalkerCardBtn");
  const panel = modal?.querySelector(".stalker-card-panel");

  if (!modal) return;

  resetPublicCardExperimentClassesV3979();

  if (closeBtn && !closeBtn.dataset.v3979Bound) {
    closeBtn.dataset.v3979Bound = "true";
    closeBtn.addEventListener("click", event => {
      event.preventDefault();
      event.stopPropagation();
      closeStalkerCardActualV3979();
    }, true);
  }

  if (backdrop && !backdrop.dataset.v3979Bound) {
    backdrop.dataset.v3979Bound = "true";
    backdrop.addEventListener("click", event => {
      event.preventDefault();
      event.stopPropagation();
      closeStalkerCardActualV3979();
    }, true);
  }

  if (panel && !panel.dataset.v3979Bound) {
    panel.dataset.v3979Bound = "true";
    panel.addEventListener("click", event => event.stopPropagation());
  }
}

// Patch renderStalkerCard so every opening applies the correct modal layout.
if (typeof renderStalkerCard === "function" && !window.__renderStalkerCardPatchedV3979) {
  window.__renderStalkerCardPatchedV3979 = true;
  const originalRenderStalkerCardV3979 = renderStalkerCard;
  renderStalkerCard = function(...args) {
    originalRenderStalkerCardV3979.apply(this, args);
    setTimeout(openStalkerCardActualV3979, 20);
    setTimeout(openStalkerCardActualV3979, 120);
  };
}

window.addEventListener("load", () => {
  bindActualStalkerCardModalV3979();
  resetPublicCardExperimentClassesV3979();
});

document.addEventListener("click", event => {
  const target = event.target;
  if (!target || !target.closest) return;

  if (
    target.closest("[data-stalker-card-user]") ||
    target.closest(".message-card") ||
    target.closest(".chat-message")
  ) {
    bindActualStalkerCardModalV3979();
    setTimeout(openStalkerCardActualV3979, 80);
    setTimeout(openStalkerCardActualV3979, 250);
  }

  if (target.closest("#closeStalkerCardBtn")) {
    event.preventDefault();
    event.stopPropagation();
    closeStalkerCardActualV3979();
  }
}, true);

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeStalkerCardActualV3979();
});




// v3.9.8.0 Strong cloud ID save fix
// Saves the Stalker ID to BOTH users/{uid} and profiles/{uid}.
// Uses the real visible form IDs from the current StalkerNet ID tab.
function cloudStatusV3980(message, isError = false) {
  const el = document.getElementById("cloudSaveStatusV3980");
  if (el) {
    el.textContent = message;
    el.classList.toggle("cloud-save-error-v3980", !!isError);
    el.classList.toggle("cloud-save-ok-v3980", !isError);
  }
  if (typeof toast === "function") toast(message);
  if (isError) console.warn(message);
}

function currentUserV3980() {
  try {
    if (typeof currentUser !== "undefined" && currentUser) return currentUser;
    if (typeof auth !== "undefined" && auth?.currentUser) return auth.currentUser;
    if (typeof firebaseAuth !== "undefined" && firebaseAuth?.currentUser) return firebaseAuth.currentUser;
  } catch (error) {}
  return null;
}

function dbV3980() {
  try {
    if (typeof db !== "undefined" && db) return db;
    if (typeof firestore !== "undefined" && firestore) return firestore;
  } catch (error) {}
  return null;
}

function valueFromV3980(id) {
  const el = document.getElementById(id);
  if (!el) return "";
  if (typeof el.value === "string") return el.value.trim();
  return (el.textContent || "").trim();
}

function setValueV3980(id, value) {
  const el = document.getElementById(id);
  if (!el || value === undefined || value === null) return;
  const clean = String(value);
  if (typeof el.value === "string") {
    el.value = clean;
    if (el.tagName === "SELECT" && el.value !== clean) {
      const option = Array.from(el.options || []).find(opt => opt.value === clean || opt.textContent === clean);
      if (option) el.value = option.value;
    }
  } else {
    el.textContent = clean;
  }
}

function patchKeyForFactionV3980(faction) {
  try {
    if (typeof patchKeyFromFaction === "function") return patchKeyFromFaction(faction || "Loner");
  } catch (error) {}

  const key = String(faction || "Loner").toLowerCase().replace(/[^a-z0-9]+/g, "_");
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
    renegades: "renegades",
    isg: "isg",
    unisg: "isg",
    military: "military",
    sin: "sin"
  };
  return map[key] || key || "loners";
}

function readVisibleIdFormV3980() {
  const faction = valueFromV3980("factionSelect") || "Loner";
  const homeArea = valueFromV3980("profileHomeArea") || "";
  const weapon = valueFromV3980("profileWeapon") || "";
  const bio = valueFromV3980("profileBio") || "";

  return {
    callsign: valueFromV3980("callsignInput"),
    faction,
    avatar: patchKeyForFactionV3980(faction),
    patch: patchKeyForFactionV3980(faction),
    rank: valueFromV3980("profileRank") || "Rookie",
    status: valueFromV3980("onlineStatusSelect") || "Available",
    reputation: valueFromV3980("profileReputation") || "Neutral",
    badges: valueFromV3980("profileBadges") || "None",
    area: homeArea,
    homeArea,
    location: homeArea,
    home: homeArea,
    weapon,
    primaryWeapon: weapon,
    bio,
    quote: bio
  };
}

function hasUsefulValueV3980(value) {
  if (value === undefined || value === null) return false;
  const clean = String(value).trim();
  if (!clean) return false;
  if (clean.toLowerCase() === "unknown") return false;
  return true;
}

function mergePreferUsefulV3980(...objects) {
  const result = {};
  objects.forEach(obj => {
    if (!obj) return;
    Object.entries(obj).forEach(([key, value]) => {
      if (hasUsefulValueV3980(value) || result[key] === undefined) {
        if (hasUsefulValueV3980(value)) result[key] = value;
      }
    });
  });
  return result;
}

function applyIdProfileToAppV3980(profile) {
  if (!profile) return;

  const homeArea = profile.homeArea || profile.area || profile.location || profile.home || "";
  const weapon = profile.weapon || profile.primaryWeapon || "";
  const bio = profile.bio || profile.quote || "";
  const faction = profile.faction || "Loner";
  const avatar = profile.avatar || profile.patch || patchKeyForFactionV3980(faction);

  setValueV3980("callsignInput", profile.callsign || "");
  setValueV3980("factionSelect", faction);
  setValueV3980("profileRank", profile.rank || "Rookie");
  setValueV3980("onlineStatusSelect", profile.status || "Available");
  setValueV3980("profileReputation", profile.reputation || "Neutral");
  setValueV3980("profileBadges", profile.badges || "None");
  setValueV3980("profileHomeArea", homeArea);
  setValueV3980("profileWeapon", weapon);
  setValueV3980("profileBio", bio);
  setValueV3980("avatarSelect", avatar);

  try {
    if (typeof setSelectedPatch === "function") setSelectedPatch(avatar);
  } catch (error) {}

  if (!state.profile) state.profile = {};
  state.profile = {
    ...state.profile,
    callsign: profile.callsign || state.profile.callsign || "",
    name: profile.callsign || state.profile.name || "",
    faction,
    rank: profile.rank || "Rookie",
    status: profile.status || "Available",
    reputation: profile.reputation || "Neutral",
    badges: profile.badges || "None",
    area: homeArea,
    homeArea,
    location: homeArea,
    home: homeArea,
    weapon,
    primaryWeapon: weapon,
    bio,
    quote: bio,
    avatar,
    patch: avatar
  };

  if (typeof currentProfile !== "undefined") {
    currentProfile = {
      ...(currentProfile || {}),
      ...state.profile,
      uid: currentUserV3980()?.uid || currentProfile?.uid || "",
      email: currentUserV3980()?.email || currentProfile?.email || ""
    };
  }

  try {
    if (typeof writeStoredIdFormV394 === "function") {
      writeStoredIdFormV394({
        callsign: state.profile.callsign,
        faction: state.profile.faction,
        rank: state.profile.rank,
        status: state.profile.status,
        reputation: state.profile.reputation,
        badges: state.profile.badges,
        homeArea: state.profile.homeArea,
        weapon: state.profile.weapon,
        bio: state.profile.bio
      });
    }
  } catch (error) {}

  try { saveState(); } catch (error) {}
  try { updateHeaderProfile(); } catch (error) {}
  try { updateAuthUI(); } catch (error) {}
  try { updateIdPreview(); } catch (error) {}
}

async function readDocV3980(collectionName, uid) {
  const database = dbV3980();
  if (!database || !uid || typeof database.collection !== "function") return null;
  try {
    const snap = await database.collection(collectionName).doc(uid).get();
    return snap.exists ? snap.data() : null;
  } catch (error) {
    console.warn(`Could not read ${collectionName}/${uid}`, error);
    return null;
  }
}

async function saveDocV3980(collectionName, uid, data) {
  const database = dbV3980();
  if (!database || !uid || typeof database.collection !== "function") throw new Error("Firestore unavailable.");
  await database.collection(collectionName).doc(uid).set(data, { merge: true });
}

async function loadCloudIdV3980(showStatus = false) {
  const user = currentUserV3980();
  if (!user) {
    if (showStatus) cloudStatusV3980("Cloud ID: sign in first.", true);
    return false;
  }

  const usersData = await readDocV3980("users", user.uid);
  const profilesData = await readDocV3980("profiles", user.uid);
  const localData = readVisibleIdFormV3980();
  const stateData = state?.profile || {};

  // Prefer useful local values, then profiles backup, then users public profile.
  // This prevents blank/old cloud fields from wiping the form.
  const merged = mergePreferUsefulV3980(
    usersData,
    profilesData,
    stateData,
    localData
  );

  if (!hasUsefulValueV3980(merged.callsign) && !usersData && !profilesData) {
    if (showStatus) cloudStatusV3980("Cloud ID: no saved profile found yet.");
    return false;
  }

  applyIdProfileToAppV3980({
    ...merged,
    homeArea: merged.homeArea || merged.area || merged.location || merged.home || "",
    area: merged.area || merged.homeArea || merged.location || merged.home || "",
    weapon: merged.weapon || merged.primaryWeapon || "",
    bio: merged.bio || merged.quote || ""
  });

  if (showStatus) cloudStatusV3980("Cloud ID loaded.");
  return true;
}

async function saveCloudIdV3980(showStatus = true) {
  const user = currentUserV3980();
  if (!user) {
    cloudStatusV3980("Cloud save failed: sign in through Comms first.", true);
    return false;
  }

  const form = readVisibleIdFormV3980();
  if (!hasUsefulValueV3980(form.callsign)) {
    cloudStatusV3980("Cloud save failed: enter a callsign first.", true);
    return false;
  }

  const oldUsersData = await readDocV3980("users", user.uid);
  const oldProfilesData = await readDocV3980("profiles", user.uid);
  const createdAt =
    oldUsersData?.createdAt ||
    oldProfilesData?.createdAt ||
    (typeof firebase !== "undefined" && firebase.firestore?.FieldValue?.serverTimestamp
      ? firebase.firestore.FieldValue.serverTimestamp()
      : new Date().toISOString());

  const serverTime = (typeof firebase !== "undefined" && firebase.firestore?.FieldValue?.serverTimestamp)
    ? firebase.firestore.FieldValue.serverTimestamp()
    : new Date().toISOString();

  const payload = {
    ...form,
    uid: user.uid,
    email: user.email || "",
    createdAt,
    updatedAt: serverTime,
    lastOnline: serverTime,
    updatedAtLocal: new Date().toISOString()
  };

  try {
    await saveDocV3980("users", user.uid, payload);
    await saveDocV3980("profiles", user.uid, payload);
    applyIdProfileToAppV3980(payload);
    if (showStatus) cloudStatusV3980("Cloud save successful.");
    return true;
  } catch (error) {
    console.error("Cloud save failed", error);
    cloudStatusV3980("Cloud save failed: " + (error.message || "check Firebase rules."), true);
    return false;
  }
}

function bindCloudIdSaveV3980() {
  const btn = document.getElementById("saveProfileBtn") || document.getElementById("profileSaveBtn");
  if (!btn || btn.dataset.v3980Bound) return;
  btn.dataset.v3980Bound = "true";

  btn.addEventListener("click", event => {
    event.preventDefault();
    event.stopImmediatePropagation();
    saveCloudIdV3980(true);
  }, true);
}

function bindCloudIdAutosaveBackupV3980() {
  const ids = [
    "callsignInput",
    "factionSelect",
    "profileRank",
    "onlineStatusSelect",
    "profileReputation",
    "profileBadges",
    "profileHomeArea",
    "profileWeapon",
    "profileBio"
  ];

  ids.forEach(id => {
    const el = document.getElementById(id);
    if (!el || el.dataset.v3980AutoBound) return;
    el.dataset.v3980AutoBound = "true";
    const handler = () => {
      const data = readVisibleIdFormV3980();
      applyIdProfileToAppV3980(data);
      cloudStatusV3980("Local ID backup updated. Press Save ID Card for cloud save.");
    };
    el.addEventListener("change", handler);
    el.addEventListener("input", handler);
  });
}

function setupCloudIdV3980() {
  bindCloudIdSaveV3980();
  bindCloudIdAutosaveBackupV3980();

  try {
    if (typeof auth !== "undefined" && auth?.onAuthStateChanged && !window.__cloudIdAuthV3980) {
      window.__cloudIdAuthV3980 = true;
      auth.onAuthStateChanged(user => {
        if (user) setTimeout(() => loadCloudIdV3980(false), 700);
      });
    }
  } catch (error) {}
}

window.addEventListener("load", () => {
  setTimeout(setupCloudIdV3980, 300);
  setTimeout(setupCloudIdV3980, 1200);
  setTimeout(() => loadCloudIdV3980(false), 1500);
});

document.addEventListener("click", event => {
  const target = event.target;
  if (!target || !target.closest) return;

  if (target.closest('[data-tab="profileTab"]') || target.closest("#profileTab") || target.closest(".nav-btn")) {
    setTimeout(setupCloudIdV3980, 200);
  }
}, true);

// Make these available from console if needed.
window.saveCloudIdV3980 = saveCloudIdV3980;
window.loadCloudIdV3980 = loadCloudIdV3980;




// v3.9.8.1 Bio / Marker Note spaces fix
// The Bio field must allow ordinary writing: spaces, punctuation, apostrophes, line breaks.
function normaliseBioTextV3981(text) {
  return String(text || "")
    .replace(/\u00A0/g, " ")
    .replace(/[ \t]{2,}/g, " ");
}

function bindBioSpacesFixV3981() {
  const bio = document.getElementById("profileBio");
  if (!bio || bio.dataset.v3981SpacesBound) return;

  bio.dataset.v3981SpacesBound = "true";
  bio.setAttribute("autocomplete", "off");
  bio.setAttribute("autocapitalize", "sentences");
  bio.setAttribute("spellcheck", "true");

  // Stop global PDA hotkeys / sanitizers from eating the spacebar while typing.
  ["keydown", "keypress", "keyup", "beforeinput", "input"].forEach(eventName => {
    bio.addEventListener(eventName, event => {
      event.stopPropagation();
    }, true);
  });

  // Restore pasted/typed spaces if another handler strips or compacts them.
  bio.addEventListener("input", () => {
    const oldStart = bio.selectionStart;
    const oldEnd = bio.selectionEnd;
    const clean = normaliseBioTextV3981(bio.value);

    if (bio.value !== clean) {
      bio.value = clean;
      try {
        bio.setSelectionRange(oldStart, oldEnd);
      } catch (error) {}
    }

    // Keep local/cloud profile state aligned with the real textarea value.
    try {
      if (!state.profile) state.profile = {};
      state.profile.bio = bio.value;
      state.profile.quote = bio.value;
      if (typeof currentProfile !== "undefined" && currentProfile) {
        currentProfile.bio = bio.value;
        currentProfile.quote = bio.value;
      }
      if (typeof writeStoredIdFormV394 === "function") {
        const existing = JSON.parse(localStorage.getItem("stalkernet_id_form_v394") || "{}");
        writeStoredIdFormV394({ ...existing, bio: bio.value });
      }
    } catch (error) {}
  }, true);

  bio.addEventListener("paste", event => {
    event.stopPropagation();
    event.preventDefault();

    const clipboard = event.clipboardData || window.clipboardData;
    const text = clipboard ? clipboard.getData("text") : "";
    const start = bio.selectionStart || 0;
    const end = bio.selectionEnd || 0;
    const before = bio.value.slice(0, start);
    const after = bio.value.slice(end);
    const insert = normaliseBioTextV3981(text);

    bio.value = before + insert + after;
    const pos = start + insert.length;
    try {
      bio.setSelectionRange(pos, pos);
    } catch (error) {}

    bio.dispatchEvent(new Event("input", { bubbles: true }));
  }, true);
}

// Preserve spaces during cloud save reads.
if (typeof readVisibleIdFormV3980 === "function" && !window.__readVisibleIdFormPatchedV3981) {
  window.__readVisibleIdFormPatchedV3981 = true;
  const originalReadVisibleIdFormV3981 = readVisibleIdFormV3980;
  readVisibleIdFormV3980 = function(...args) {
    const data = originalReadVisibleIdFormV3981.apply(this, args);
    const bio = document.getElementById("profileBio");
    if (bio) {
      data.bio = bio.value;
      data.quote = bio.value;
    }
    return data;
  };
}

window.addEventListener("load", () => {
  setTimeout(bindBioSpacesFixV3981, 250);
  setTimeout(bindBioSpacesFixV3981, 1000);
});

document.addEventListener("click", event => {
  const target = event.target;
  if (!target || !target.closest) return;

  if (
    target.closest('[data-tab="profileTab"]') ||
    target.closest("#profileTab") ||
    target.closest("#profileBio") ||
    target.closest(".nav-btn")
  ) {
    setTimeout(bindBioSpacesFixV3981, 100);
  }
}, true);

document.addEventListener("focusin", event => {
  if (event.target && event.target.id === "profileBio") {
    bindBioSpacesFixV3981();
  }
}, true);




// v3.9.8.3 Comms delete working fix
// Handles action buttons directly so they do not open Stalker Cards or get swallowed.
function getActionButtonV3983(target) {
  if (!target || !target.closest) return null;
  return target.closest("[data-message-action]");
}

function setDeleteStatusV3983(message, isError = false) {
  try {
    if (typeof setAuthStatus === "function") {
      setAuthStatus(message, isError);
      return;
    }
  } catch (error) {}

  try {
    if (typeof toast === "function") {
      toast(message);
      return;
    }
  } catch (error) {}

  console[isError ? "warn" : "log"](message);
}

async function deleteOwnMessageV3983(messageId) {
  if (!currentUser || !db) {
    setDeleteStatusV3983("Login before deleting messages.", true);
    return;
  }

  if (!messageId) {
    setDeleteStatusV3983("Delete failed: missing message ID.", true);
    return;
  }

  if (!confirm("Delete this transmission from Public Chat?")) {
    setDeleteStatusV3983("Delete cancelled.");
    return;
  }

  try {
    await db
      .collection("channels")
      .doc("zone_broadcast")
      .collection("messages")
      .doc(messageId)
      .delete();

    setDeleteStatusV3983("Message deleted.");

    // Remove it instantly from local state too, instead of waiting for Firestore snapshot.
    try {
      state.messages = (state.messages || []).filter(message => message.messageId !== messageId && message.id !== messageId);
      saveState();
      renderMessages();
    } catch (error) {}
  } catch (error) {
    setDeleteStatusV3983("Delete failed: " + (error.message || "check Firebase rules."), true);
  }
}

async function reportMessageV3983(messageId, senderId, callsign, text) {
  if (typeof reportMessage === "function") {
    return reportMessage(messageId, senderId, callsign, text);
  }
}

function blockSenderV3983(senderId, callsign) {
  if (typeof toggleBlockSender === "function") {
    return toggleBlockSender(senderId, callsign);
  }
}

function handleMessageActionV3983(event) {
  const button = getActionButtonV3983(event.target);
  if (!button) return;

  event.preventDefault();
  event.stopPropagation();
  if (event.stopImmediatePropagation) event.stopImmediatePropagation();

  const action = button.dataset.messageAction;
  const messageId = button.dataset.messageId;
  const senderId = button.dataset.senderId || "";
  const callsign = button.dataset.callsign || "Unknown";
  const text = button.dataset.text || "";

  if (action === "delete") {
    deleteOwnMessageV3983(messageId);
    return;
  }

  if (action === "report") {
    reportMessageV3983(messageId, senderId, callsign, text);
    return;
  }

  if (action === "block") {
    blockSenderV3983(senderId, callsign);
    return;
  }
}

// Override old handler name too, so existing listeners call the safer version.
if (typeof handleMessageAction !== "undefined") {
  handleMessageAction = handleMessageActionV3983;
}
window.handleMessageActionV3983 = handleMessageActionV3983;
window.deleteOwnMessageV3983 = deleteOwnMessageV3983;

// Capture before the Stalker Card opener sees the tap.
if (!window.__messageActionDirectBoundV3983) {
  window.__messageActionDirectBoundV3983 = true;

  document.addEventListener("click", handleMessageActionV3983, true);
  document.addEventListener("pointerdown", event => {
    const button = getActionButtonV3983(event.target);
    if (!button) return;
    event.stopPropagation();
    if (event.stopImmediatePropagation) event.stopImmediatePropagation();
  }, true);
  document.addEventListener("touchstart", event => {
    const button = getActionButtonV3983(event.target);
    if (!button) return;
    event.stopPropagation();
  }, { capture: true, passive: true });
}

// Patch Stalker Card opener so it never opens from action buttons.
if (typeof handleStalkerCardClick === "function" && !window.__stalkerCardClickPatchedV3983) {
  window.__stalkerCardClickPatchedV3983 = true;
  const originalHandleStalkerCardClickV3983 = handleStalkerCardClick;

  handleStalkerCardClick = function(event) {
    if (getActionButtonV3983(event.target)) return;
    return originalHandleStalkerCardClickV3983.apply(this, arguments);
  };
}

// After render, make sure buttons sit above card click area.
function bindMessageActionButtonsV3983() {
  document.querySelectorAll("[data-message-action]").forEach(btn => {
    btn.classList.add("message-action-fixed-v3983");
  });
}

if (typeof renderMessages === "function" && !window.__renderMessagesPatchedV3983) {
  window.__renderMessagesPatchedV3983 = true;
  const originalRenderMessagesV3983 = renderMessages;
  renderMessages = function(...args) {
    const result = originalRenderMessagesV3983.apply(this, args);
    setTimeout(bindMessageActionButtonsV3983, 40);
    return result;
  };
}

window.addEventListener("load", () => {
  setTimeout(bindMessageActionButtonsV3983, 300);
  setTimeout(bindMessageActionButtonsV3983, 1200);
});




// v3.9.8.4 Stop Stalker Card from opening after message deletion
window.__stalkerCardSuppressUntilV3984 = 0;

function suppressStalkerCardsV3984(ms = 1800) {
  window.__stalkerCardSuppressUntilV3984 = Date.now() + ms;
}

function isStalkerCardSuppressedV3984() {
  return Date.now() < (window.__stalkerCardSuppressUntilV3984 || 0);
}

function closeAnyStalkerCardV3984() {
  const ids = ["stalkerCardModal", "publicCardModal", "profileModal"];
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.add("hidden");
    el.setAttribute("aria-hidden", "true");
    el.style.display = "";
    el.style.pointerEvents = "";
  });

  document.querySelectorAll(".public-card-modal,.stalker-card-modal").forEach(el => {
    el.classList.add("hidden");
    el.setAttribute("aria-hidden", "true");
  });

  document.documentElement.classList.remove("public-card-root-locked-v3974", "public-card-open-v3973");
  document.body.classList.remove("public-card-body-locked-v3974", "public-card-open-v3973");
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.overflow = "";
  document.body.style.width = "";
}

function isDeleteMessageTapV3984(target) {
  if (!target || !target.closest) return false;
  const btn = target.closest("[data-message-action], button, .small-btn, .message-action");
  if (!btn) return false;

  const action = (btn.dataset.messageAction || btn.dataset.action || "").toLowerCase();
  const text = (btn.textContent || "").trim().toLowerCase();
  const aria = (btn.getAttribute("aria-label") || "").toLowerCase();
  const title = (btn.getAttribute("title") || "").toLowerCase();

  return action === "delete" || text.includes("delete") || aria.includes("delete") || title.includes("delete");
}

if (typeof deleteOwnMessageV3983 === "function" && !window.__deleteOwnMessagePatchedV3984) {
  window.__deleteOwnMessagePatchedV3984 = true;
  const originalDeleteOwnMessageV3984 = deleteOwnMessageV3983;

  deleteOwnMessageV3983 = async function(...args) {
    suppressStalkerCardsV3984(2600);
    closeAnyStalkerCardV3984();

    try {
      const result = await originalDeleteOwnMessageV3984.apply(this, args);
      suppressStalkerCardsV3984(2600);
      setTimeout(closeAnyStalkerCardV3984, 50);
      setTimeout(closeAnyStalkerCardV3984, 250);
      setTimeout(closeAnyStalkerCardV3984, 700);
      return result;
    } catch (error) {
      suppressStalkerCardsV3984(1200);
      throw error;
    }
  };

  window.deleteOwnMessageV3983 = deleteOwnMessageV3983;
}

if (typeof handleMessageActionV3983 === "function" && !window.__handleMessageActionPatchedV3984) {
  window.__handleMessageActionPatchedV3984 = true;
  const originalHandleMessageActionV3984 = handleMessageActionV3983;

  handleMessageActionV3983 = function(event) {
    if (isDeleteMessageTapV3984(event?.target)) {
      suppressStalkerCardsV3984(2600);
      closeAnyStalkerCardV3984();
    }
    return originalHandleMessageActionV3984.apply(this, arguments);
  };

  window.handleMessageActionV3983 = handleMessageActionV3983;
}

if (typeof renderStalkerCard === "function" && !window.__renderStalkerCardSuppressedV3984) {
  window.__renderStalkerCardSuppressedV3984 = true;
  const originalRenderStalkerCardV3984 = renderStalkerCard;

  renderStalkerCard = function(...args) {
    if (isStalkerCardSuppressedV3984()) {
      closeAnyStalkerCardV3984();
      return;
    }
    return originalRenderStalkerCardV3984.apply(this, args);
  };
}

if (typeof handleStalkerCardClick === "function" && !window.__handleStalkerCardClickSuppressedV3984) {
  window.__handleStalkerCardClickSuppressedV3984 = true;
  const originalHandleStalkerCardClickV3984 = handleStalkerCardClick;

  handleStalkerCardClick = function(event) {
    if (isStalkerCardSuppressedV3984() || isDeleteMessageTapV3984(event?.target)) {
      if (event) {
        event.preventDefault();
        event.stopPropagation();
        if (event.stopImmediatePropagation) event.stopImmediatePropagation();
      }
      closeAnyStalkerCardV3984();
      return;
    }
    return originalHandleStalkerCardClickV3984.apply(this, arguments);
  };
}

document.addEventListener("click", event => {
  if (!isDeleteMessageTapV3984(event.target)) return;
  suppressStalkerCardsV3984(2600);
}, true);

document.addEventListener("pointerdown", event => {
  if (!isDeleteMessageTapV3984(event.target)) return;
  suppressStalkerCardsV3984(2600);
}, true);

document.addEventListener("touchstart", event => {
  if (!isDeleteMessageTapV3984(event.target)) return;
  suppressStalkerCardsV3984(2600);
}, { capture: true, passive: true });

function stalkerCardSuppressionSweepV3984() {
  if (isStalkerCardSuppressedV3984()) closeAnyStalkerCardV3984();
  setTimeout(stalkerCardSuppressionSweepV3984, 120);
}

window.addEventListener("load", () => {
  setTimeout(stalkerCardSuppressionSweepV3984, 300);
});




// v3.9.8.5 Archive Tidy merge
function tidyArchiveAfterRenderV3985() {
  const archiveTab = document.getElementById("loreTab");
  if (!archiveTab) return;

  const search = document.getElementById("loreSearch");
  if (search) {
    search.setAttribute("placeholder", "Search name, category, location, threat, or keyword...");
    search.setAttribute("aria-label", "Search PDA Archive");
  }

  archiveTab.querySelectorAll(".module-label").forEach(label => {
    const text = (label.textContent || "").trim().toUpperCase();
    if (text === "NO SIGNAL") {
      label.textContent = "NO RECORDS";
      const card = label.closest(".module-panel, article");
      const message = card?.querySelector(".message-text, p");
      if (message && /no archive entries found/i.test(message.textContent || "")) {
        message.textContent = "No archive records match your search. Try a broader word, category, location, threat, or keyword.";
      }
    }
  });

  archiveTab.querySelectorAll("[data-archive-toggle], .archive-entry-button").forEach(btn => {
    const card = btn.closest(".archive-collapsible, .archive-entry");
    const isOpen = card?.classList.contains("open");
    btn.setAttribute("aria-label", isOpen ? "Close archive record" : "Open archive record");

    const marker = btn.querySelector(".archive-expand-mark");
    if (marker) marker.textContent = isOpen ? "CLOSE" : "OPEN";
  });

  archiveTab.querySelectorAll(".archive-source, .source-note, blockquote").forEach(note => {
    if (!note.dataset.tidiedV3985) {
      note.dataset.tidiedV3985 = "true";
      note.classList.add("archive-reference-note");
    }
  });
}

if (typeof toggleArchiveEntry === "function" && !window.__toggleArchiveEntryPatchedV3985) {
  window.__toggleArchiveEntryPatchedV3985 = true;
  const originalToggleArchiveEntryV3985 = toggleArchiveEntry;
  toggleArchiveEntry = function(...args) {
    const result = originalToggleArchiveEntryV3985.apply(this, args);
    setTimeout(tidyArchiveAfterRenderV3985, 20);
    return result;
  };
}

if (typeof renderLore === "function" && !window.__renderLoreTidiedV3985) {
  window.__renderLoreTidiedV3985 = true;
  const originalRenderLoreV3985 = renderLore;
  renderLore = function(...args) {
    const result = originalRenderLoreV3985.apply(this, args);
    setTimeout(tidyArchiveAfterRenderV3985, 20);
    setTimeout(tidyArchiveAfterRenderV3985, 180);
    return result;
  };
}

window.addEventListener("load", () => {
  setTimeout(tidyArchiveAfterRenderV3985, 300);
  setTimeout(tidyArchiveAfterRenderV3985, 1200);
});

document.addEventListener("click", event => {
  const target = event.target;
  if (!target || !target.closest) return;

  if (
    target.closest("#loreTab") ||
    target.closest('[data-tab="loreTab"]') ||
    target.closest('[data-tab="archiveTab"]') ||
    target.closest(".archive-entry-button") ||
    target.closest("[data-archive-toggle]")
  ) {
    setTimeout(tidyArchiveAfterRenderV3985, 60);
    setTimeout(tidyArchiveAfterRenderV3985, 220);
  }
}, true);

document.addEventListener("input", event => {
  if (event.target && event.target.id === "loreSearch") {
    setTimeout(tidyArchiveAfterRenderV3985, 60);
  }
}, true);




// v3.9.8.7 Archive mobile card layout fix
function fixArchiveMobileLayoutV3987() {
  const archiveTab = document.getElementById("loreTab");
  if (!archiveTab) return;

  archiveTab.classList.add("archive-mobile-layout-v3987");

  archiveTab.querySelectorAll(".lore-card, .archive-card, .archive-entry, .module-panel").forEach(card => {
    const text = card.textContent || "";
    if (text.includes("TYPE / VALUE") || text.includes("SOURCE") || card.querySelector("[data-archive-toggle], .archive-entry-button")) {
      card.classList.add("archive-card-mobile-fixed-v3987");
    }
  });

  archiveTab.querySelectorAll("button, .small-btn, .archive-entry-button, [data-archive-toggle]").forEach(btn => {
    const text = (btn.textContent || "").trim().toUpperCase();
    if (text === "OPEN" || text === "CLOSE" || btn.hasAttribute("data-archive-toggle")) {
      btn.classList.add("archive-open-button-fixed-v3987");
    }
  });
}

if (typeof renderLore === "function" && !window.__renderLoreLayoutPatchedV3987) {
  window.__renderLoreLayoutPatchedV3987 = true;
  const originalRenderLoreV3987 = renderLore;
  renderLore = function(...args) {
    const result = originalRenderLoreV3987.apply(this, args);
    setTimeout(fixArchiveMobileLayoutV3987, 30);
    setTimeout(fixArchiveMobileLayoutV3987, 200);
    return result;
  };
}

window.addEventListener("load", () => {
  setTimeout(fixArchiveMobileLayoutV3987, 300);
  setTimeout(fixArchiveMobileLayoutV3987, 1200);
});

document.addEventListener("click", event => {
  const target = event.target;
  if (!target || !target.closest) return;
  if (
    target.closest("#loreTab") ||
    target.closest('[data-tab="loreTab"]') ||
    target.closest('[data-tab="archiveTab"]') ||
    target.closest(".archive-entry-button") ||
    target.closest("[data-archive-toggle]")
  ) {
    setTimeout(fixArchiveMobileLayoutV3987, 60);
    setTimeout(fixArchiveMobileLayoutV3987, 220);
  }
}, true);
