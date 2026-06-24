const STORAGE_KEY = "stalkernet_pda_v435_public_dossier_tools";

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

const defaultTasks = [];

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




// v3.9.8.8 Archive OPEN button mobile containment fix
function fixArchiveOpenButtonLayoutV3988() {
  const archiveTab = document.getElementById("loreTab");
  if (!archiveTab) return;

  archiveTab.classList.add("archive-open-button-layout-v3988");

  archiveTab.querySelectorAll(".archive-entry").forEach(entry => {
    entry.classList.add("archive-entry-contained-v3988");
  });

  archiveTab.querySelectorAll(".archive-entry-button").forEach(button => {
    button.classList.add("archive-entry-button-contained-v3988");
  });

  archiveTab.querySelectorAll(".archive-title-row").forEach(row => {
    row.classList.add("archive-title-row-contained-v3988");
  });

  archiveTab.querySelectorAll(".archive-expand-mark").forEach(mark => {
    mark.classList.add("archive-expand-mark-contained-v3988");
  });
}

if (typeof renderLore === "function" && !window.__renderLoreOpenButtonPatchedV3988) {
  window.__renderLoreOpenButtonPatchedV3988 = true;
  const originalRenderLoreV3988 = renderLore;
  renderLore = function(...args) {
    const result = originalRenderLoreV3988.apply(this, args);
    setTimeout(fixArchiveOpenButtonLayoutV3988, 30);
    setTimeout(fixArchiveOpenButtonLayoutV3988, 200);
    return result;
  };
}

window.addEventListener("load", () => {
  setTimeout(fixArchiveOpenButtonLayoutV3988, 300);
  setTimeout(fixArchiveOpenButtonLayoutV3988, 1200);
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
    setTimeout(fixArchiveOpenButtonLayoutV3988, 60);
    setTimeout(fixArchiveOpenButtonLayoutV3988, 220);
  }
}, true);



// v3.9.8.9 Cloud Jobs / Contracts Save
window.__jobsCloudLoadedV3989 = false;
window.__jobsCloudSaveTimerV3989 = null;

function jobsCloudStatusV3989(message, isError = false) {
  const el = document.getElementById("jobsCloudStatusV3989");
  if (el) {
    el.textContent = message;
    el.classList.toggle("jobs-cloud-error-v3989", !!isError);
    el.classList.toggle("jobs-cloud-ok-v3989", !isError);
  }
  try { if (typeof toast === "function") toast(message); } catch (error) {}
  console[isError ? "warn" : "log"](message);
}

function currentUserJobsV3989() {
  try {
    if (typeof currentUser !== "undefined" && currentUser) return currentUser;
    if (typeof auth !== "undefined" && auth?.currentUser) return auth.currentUser;
  } catch (error) {}
  return null;
}

function dbJobsV3989() {
  try {
    if (typeof db !== "undefined" && db) return db;
    if (typeof firestore !== "undefined" && firestore) return firestore;
  } catch (error) {}
  return null;
}

function stableJobIdV3989(job) {
  if (job?.id) return String(job.id);
  if (job?.jobId) return String(job.jobId);
  const seed = [job?.title || "job", job?.type || "", job?.location || "", job?.status || "", job?.reward || "", job?.description || job?.objective || ""].join("|");
  let hash = 0;
  for (let i = 0; i < seed.length; i++) { hash = ((hash << 5) - hash) + seed.charCodeAt(i); hash |= 0; }
  return "job_" + Math.abs(hash).toString(36);
}

function normaliseJobV3989(job) {
  const id = stableJobIdV3989(job);
  return {
    ...job,
    id,
    jobId: id,
    title: job?.title || "Untitled Job",
    type: job?.type || job?.jobType || "Personal Note",
    location: job?.location || job?.area || "Unknown",
    risk: job?.risk || job?.riskLevel || "Unknown",
    reward: job?.reward || job?.payment || "Unknown",
    status: job?.status || "Active",
    description: job?.description || job?.objective || job?.note || "",
    updatedAtLocal: job?.updatedAtLocal || new Date().toISOString()
  };
}

function readJobsStateV3989() {
  const jobs = Array.isArray(state?.tasks) ? state.tasks : (Array.isArray(state?.jobs) ? state.jobs : []);
  return jobs.map(normaliseJobV3989);
}

function writeJobsStateV3989(jobs) {
  const normalised = (jobs || []).map(normaliseJobV3989);
  state.tasks = normalised;
  if (Array.isArray(state.jobs)) state.jobs = normalised;
  try { saveState(); } catch (error) {}
  try { renderTasks(); } catch (error) {}
  try { renderJobs(); } catch (error) {}
}

async function loadCloudJobsV3989(showStatus = false) {
  const user = currentUserJobsV3989();
  const database = dbJobsV3989();
  if (!user) { if (showStatus) jobsCloudStatusV3989("Jobs cloud: sign in first.", true); return false; }
  if (!database?.collection) { if (showStatus) jobsCloudStatusV3989("Jobs cloud: Firestore unavailable.", true); return false; }

  try {
    const snap = await database.collection("userJobs").doc(user.uid).collection("items").get();
    const cloudJobs = [];
    snap.forEach(doc => cloudJobs.push(normaliseJobV3989({ id: doc.id, ...doc.data() })));
    if (cloudJobs.length) writeJobsStateV3989(cloudJobs);
    window.__jobsCloudLoadedV3989 = true;
    if (showStatus) jobsCloudStatusV3989(cloudJobs.length ? `Jobs cloud loaded: ${cloudJobs.length}.` : "Jobs cloud: no saved contracts yet.");
    return true;
  } catch (error) {
    jobsCloudStatusV3989("Jobs cloud load failed: " + (error.message || "check Firebase rules."), true);
    return false;
  }
}

async function saveCloudJobsV3989(showStatus = false) {
  const user = currentUserJobsV3989();
  const database = dbJobsV3989();
  if (!user) { if (showStatus) jobsCloudStatusV3989("Jobs cloud save failed: sign in first.", true); return false; }
  if (!database?.collection || !database?.batch) { if (showStatus) jobsCloudStatusV3989("Jobs cloud save failed: Firestore unavailable.", true); return false; }

  const jobs = readJobsStateV3989();
  try {
    const col = database.collection("userJobs").doc(user.uid).collection("items");
    const existing = await col.get();
    const existingIds = new Set();
    existing.forEach(doc => existingIds.add(doc.id));
    const batch = database.batch();

    jobs.forEach(job => {
      const j = normaliseJobV3989(job);
      existingIds.delete(j.id);
      batch.set(col.doc(j.id), {
        ...j,
        uid: user.uid,
        ownerId: user.uid,
        ownerEmail: user.email || "",
        updatedAtLocal: new Date().toISOString(),
        updatedAt: (typeof firebase !== "undefined" && firebase.firestore?.FieldValue?.serverTimestamp)
          ? firebase.firestore.FieldValue.serverTimestamp()
          : new Date().toISOString()
      }, { merge: true });
    });

    existingIds.forEach(id => batch.delete(col.doc(id)));
    await batch.commit();
    jobsCloudStatusV3989(`Jobs cloud saved: ${jobs.length}.`);
    return true;
  } catch (error) {
    jobsCloudStatusV3989("Jobs cloud save failed: " + (error.message || "check Firebase rules."), true);
    return false;
  }
}

function scheduleCloudJobsSaveV3989() {
  if (!window.__jobsCloudLoadedV3989) return;
  clearTimeout(window.__jobsCloudSaveTimerV3989);
  window.__jobsCloudSaveTimerV3989 = setTimeout(() => saveCloudJobsV3989(false), 700);
}

function bindJobsCloudV3989() {
  const tab = document.getElementById("tasksTab") || document.getElementById("jobsTab");
  if (!tab) return;

  if (!document.getElementById("manualCloudJobsSaveBtnV3989")) {
    const status = document.getElementById("jobsCloudStatusV3989");
    if (status) {
      const row = document.createElement("div");
      row.className = "jobs-cloud-actions-v3989";
      row.innerHTML = '<button id="manualCloudJobsSaveBtnV3989" class="small-btn">Save Jobs to Cloud</button><button id="manualCloudJobsLoadBtnV3989" class="small-btn">Load Cloud Jobs</button>';
      status.insertAdjacentElement("afterend", row);
      document.getElementById("manualCloudJobsSaveBtnV3989").addEventListener("click", () => saveCloudJobsV3989(true));
      document.getElementById("manualCloudJobsLoadBtnV3989").addEventListener("click", () => loadCloudJobsV3989(true));
    }
  }

  tab.querySelectorAll("button,input,select,textarea").forEach(el => {
    if (el.dataset.v3989Bound) return;
    el.dataset.v3989Bound = "true";
    const eventName = el.tagName === "BUTTON" ? "click" : "change";
    el.addEventListener(eventName, () => setTimeout(scheduleCloudJobsSaveV3989, 350));
  });
}

if (typeof renderTasks === "function" && !window.__renderTasksCloudPatchedV3989) {
  window.__renderTasksCloudPatchedV3989 = true;
  const old = renderTasks;
  renderTasks = function(...args) {
    const result = old.apply(this, args);
    setTimeout(bindJobsCloudV3989, 60);
    return result;
  };
}
if (typeof renderJobs === "function" && !window.__renderJobsCloudPatchedV3989) {
  window.__renderJobsCloudPatchedV3989 = true;
  const old = renderJobs;
  renderJobs = function(...args) {
    const result = old.apply(this, args);
    setTimeout(bindJobsCloudV3989, 60);
    return result;
  };
}

window.addEventListener("load", () => {
  setTimeout(bindJobsCloudV3989, 400);
  setTimeout(loadCloudJobsV3989, 1600);
  try {
    if (typeof auth !== "undefined" && auth?.onAuthStateChanged && !window.__cloudJobsAuthBoundV3989) {
      window.__cloudJobsAuthBoundV3989 = true;
      auth.onAuthStateChanged(user => { if (user) setTimeout(() => loadCloudJobsV3989(false), 900); });
    }
  } catch (error) {}
});
document.addEventListener("click", event => {
  const t = event.target;
  if (t?.closest?.('[data-tab="tasksTab"],[data-tab="jobsTab"],#tasksTab,#jobsTab,.nav-btn')) setTimeout(bindJobsCloudV3989, 220);
}, true);

window.saveCloudJobsV3989 = saveCloudJobsV3989;
window.loadCloudJobsV3989 = loadCloudJobsV3989;




// v3.9.9.0 Cloud Jobs real-board fix
// The first cloud-jobs patch was too willing to save/load starter placeholder jobs.
// This patch ignores obvious placeholders and prefers real jobs created through the Jobs board.
function isPlaceholderJobV3990(job) {
  const title = String(job?.title || "").trim().toLowerCase();
  const source = String(job?.source || "").trim().toLowerCase();
  const description = String(job?.description || job?.objective || job?.note || "").trim().toLowerCase();

  const placeholderTitles = [
    "find a safe route to rostok",
    "check med supplies",
    "mark stash near old road",
    "sample contract",
    "example job",
    "placeholder job"
  ];

  return (
    placeholderTitles.includes(title) ||
    source === "system" ||
    source === "placeholder" ||
    description.includes("placeholder")
  );
}

function isRealJobV3990(job) {
  if (!job) return false;
  if (isPlaceholderJobV3990(job)) return false;

  const title = String(job.title || "").trim();
  const desc = String(job.description || job.objective || job.note || "").trim();
  const location = String(job.location || job.area || "").trim();
  const reward = String(job.reward || job.payment || "").trim();

  return !!(title && title.toLowerCase() !== "untitled job") || !!desc || !!location || !!reward;
}

function readJobsFromEveryKnownSourceV3990() {
  const pools = [];

  try { if (Array.isArray(state?.jobs)) pools.push(...state.jobs); } catch (error) {}
  try { if (Array.isArray(state?.tasks)) pools.push(...state.tasks); } catch (error) {}
  try { if (Array.isArray(window.jobs)) pools.push(...window.jobs); } catch (error) {}
  try { if (Array.isArray(window.tasks)) pools.push(...window.tasks); } catch (error) {}

  // Read local storage backups because some earlier versions saved jobs under different keys.
  try {
    Object.keys(localStorage).forEach(key => {
      if (!/job|task|contract|stalkernet/i.test(key)) return;
      try {
        const parsed = JSON.parse(localStorage.getItem(key) || "null");
        if (Array.isArray(parsed)) pools.push(...parsed);
        if (Array.isArray(parsed?.jobs)) pools.push(...parsed.jobs);
        if (Array.isArray(parsed?.tasks)) pools.push(...parsed.tasks);
      } catch (error) {}
    });
  } catch (error) {}

  const map = new Map();
  pools.forEach(job => {
    if (!isRealJobV3990(job)) return;
    const normalised = typeof normaliseJobV3989 === "function"
      ? normaliseJobV3989(job)
      : { ...job, id: job.id || job.jobId || ("job_" + Date.now().toString(36)) };

    const id = normalised.id || normalised.jobId;
    map.set(id, normalised);
  });

  return Array.from(map.values());
}

function writeJobsToAllKnownStateV3990(jobs) {
  const cleanJobs = (jobs || []).filter(isRealJobV3990).map(job =>
    typeof normaliseJobV3989 === "function" ? normaliseJobV3989(job) : job
  );

  if (cleanJobs.length > 0) {
    state.jobs = cleanJobs;
    state.tasks = cleanJobs;
  } else {
    // Do not replace local jobs with an empty/placeholder-only cloud result.
    return;
  }

  try { saveState(); } catch (error) {}
  try { renderJobs(); } catch (error) {}
  try { renderTasks(); } catch (error) {}
}

async function saveCloudJobsV3990(showStatus = true) {
  const user = currentUserJobsV3989?.();
  const database = dbJobsV3989?.();

  if (!user) {
    jobsCloudStatusV3989?.("Jobs cloud save failed: sign in first.", true);
    return false;
  }

  if (!database?.collection || !database?.batch) {
    jobsCloudStatusV3989?.("Jobs cloud save failed: Firestore unavailable.", true);
    return false;
  }

  const jobs = readJobsFromEveryKnownSourceV3990();

  try {
    const col = database.collection("userJobs").doc(user.uid).collection("items");
    const existing = await col.get();
    const existingIds = new Set();
    existing.forEach(doc => existingIds.add(doc.id));

    const batch = database.batch();

    jobs.forEach(job => {
      const j = typeof normaliseJobV3989 === "function" ? normaliseJobV3989(job) : job;
      existingIds.delete(j.id);
      batch.set(col.doc(j.id), {
        ...j,
        uid: user.uid,
        ownerId: user.uid,
        ownerEmail: user.email || "",
        placeholder: false,
        updatedAtLocal: new Date().toISOString(),
        updatedAt: (typeof firebase !== "undefined" && firebase.firestore?.FieldValue?.serverTimestamp)
          ? firebase.firestore.FieldValue.serverTimestamp()
          : new Date().toISOString()
      }, { merge: true });
    });

    // Delete old placeholder docs from cloud so they stop coming back like canned meat in a bad stash.
    existing.forEach(doc => {
      const data = doc.data();
      if (isPlaceholderJobV3990({ id: doc.id, ...data }) || !isRealJobV3990({ id: doc.id, ...data })) {
        batch.delete(col.doc(doc.id));
        existingIds.delete(doc.id);
      }
    });

    await batch.commit();

    jobsCloudStatusV3989?.(`Jobs cloud saved: ${jobs.length} real contract${jobs.length === 1 ? "" : "s"}.`);
    return true;
  } catch (error) {
    jobsCloudStatusV3989?.("Jobs cloud save failed: " + (error.message || "check Firebase rules."), true);
    return false;
  }
}

async function loadCloudJobsV3990(showStatus = true) {
  const user = currentUserJobsV3989?.();
  const database = dbJobsV3989?.();

  if (!user) {
    jobsCloudStatusV3989?.("Jobs cloud: sign in first.", true);
    return false;
  }

  if (!database?.collection) {
    jobsCloudStatusV3989?.("Jobs cloud: Firestore unavailable.", true);
    return false;
  }

  try {
    const snap = await database.collection("userJobs").doc(user.uid).collection("items").get();
    const cloudJobs = [];
    snap.forEach(doc => {
      const job = { id: doc.id, ...doc.data() };
      if (isRealJobV3990(job)) cloudJobs.push(job);
    });

    if (cloudJobs.length > 0) {
      writeJobsToAllKnownStateV3990(cloudJobs);
      window.__jobsCloudLoadedV3989 = true;
      jobsCloudStatusV3989?.(`Jobs cloud loaded: ${cloudJobs.length} real contract${cloudJobs.length === 1 ? "" : "s"}.`);
      return true;
    }

    window.__jobsCloudLoadedV3989 = true;
    jobsCloudStatusV3989?.("Jobs cloud: no real saved contracts found. Starter jobs ignored.");
    return true;
  } catch (error) {
    jobsCloudStatusV3989?.("Jobs cloud load failed: " + (error.message || "check Firebase rules."), true);
    return false;
  }
}

// Override previous cloud jobs functions.
window.saveCloudJobsV3989 = saveCloudJobsV3990;
window.loadCloudJobsV3989 = loadCloudJobsV3990;
window.saveCloudJobsV3990 = saveCloudJobsV3990;
window.loadCloudJobsV3990 = loadCloudJobsV3990;

// Re-wire manual buttons to the safer functions.
function rebindCloudJobButtonsV3990() {
  const saveBtn = document.getElementById("manualCloudJobsSaveBtnV3989");
  const loadBtn = document.getElementById("manualCloudJobsLoadBtnV3989");

  if (saveBtn && !saveBtn.dataset.v3990Bound) {
    saveBtn.dataset.v3990Bound = "true";
    saveBtn.replaceWith(saveBtn.cloneNode(true));
    const fresh = document.getElementById("manualCloudJobsSaveBtnV3989");
    fresh?.addEventListener("click", () => saveCloudJobsV3990(true));
  }

  if (loadBtn && !loadBtn.dataset.v3990Bound) {
    loadBtn.dataset.v3990Bound = "true";
    loadBtn.replaceWith(loadBtn.cloneNode(true));
    const fresh = document.getElementById("manualCloudJobsLoadBtnV3989");
    fresh?.addEventListener("click", () => loadCloudJobsV3990(true));
  }
}

window.addEventListener("load", () => {
  setTimeout(rebindCloudJobButtonsV3990, 800);
  setTimeout(rebindCloudJobButtonsV3990, 1800);
});

document.addEventListener("click", event => {
  const target = event.target;
  if (!target || !target.closest) return;
  if (target.closest("#tasksTab") || target.closest("#jobsTab") || target.closest('[data-tab="tasksTab"]') || target.closest('[data-tab="jobsTab"]')) {
    setTimeout(rebindCloudJobButtonsV3990, 200);
  }
}, true);



// v3.9.9.1 Purge fake starter jobs and force real cloud jobs
const FAKE_JOB_TITLES_V3991 = [
  "find a safe route to rostok",
  "check med supplies",
  "mark stash near old road"
];

function isFakeStarterJobV3991(job) {
  const title = String(job?.title || "").trim().toLowerCase();
  const source = String(job?.source || "").trim().toLowerCase();
  const description = String(job?.description || job?.objective || job?.note || "").trim().toLowerCase();

  return (
    FAKE_JOB_TITLES_V3991.includes(title) ||
    source === "system" ||
    source === "placeholder" ||
    description.includes("placeholder")
  );
}

function purgeFakeStarterJobsV3991() {
  let changed = false;

  if (Array.isArray(state?.tasks)) {
    const oldLen = state.tasks.length;
    state.tasks = state.tasks.filter(job => !isFakeStarterJobV3991(job));
    if (state.tasks.length !== oldLen) changed = true;
  }

  if (Array.isArray(state?.jobs)) {
    const oldLen = state.jobs.length;
    state.jobs = state.jobs.filter(job => !isFakeStarterJobV3991(job));
    if (state.jobs.length !== oldLen) changed = true;
  }

  try {
    Object.keys(localStorage).forEach(key => {
      if (!/job|task|contract|stalkernet/i.test(key)) return;

      try {
        const parsed = JSON.parse(localStorage.getItem(key) || "null");
        let edited = false;

        if (Array.isArray(parsed)) {
          const filtered = parsed.filter(job => !isFakeStarterJobV3991(job));
          if (filtered.length !== parsed.length) {
            localStorage.setItem(key, JSON.stringify(filtered));
            edited = true;
          }
        } else if (parsed && typeof parsed === "object") {
          if (Array.isArray(parsed.tasks)) {
            const filtered = parsed.tasks.filter(job => !isFakeStarterJobV3991(job));
            if (filtered.length !== parsed.tasks.length) {
              parsed.tasks = filtered;
              edited = true;
            }
          }

          if (Array.isArray(parsed.jobs)) {
            const filtered = parsed.jobs.filter(job => !isFakeStarterJobV3991(job));
            if (filtered.length !== parsed.jobs.length) {
              parsed.jobs = filtered;
              edited = true;
            }
          }

          if (edited) localStorage.setItem(key, JSON.stringify(parsed));
        }

        if (edited) changed = true;
      } catch (error) {}
    });
  } catch (error) {}

  if (changed) {
    try { saveState(); } catch (error) {}
  }

  return changed;
}

function getRealLocalJobsV3991() {
  const raw = [];

  try { if (Array.isArray(state?.jobs)) raw.push(...state.jobs); } catch (error) {}
  try { if (Array.isArray(state?.tasks)) raw.push(...state.tasks); } catch (error) {}

  const out = new Map();

  raw.forEach(job => {
    if (!job || isFakeStarterJobV3991(job)) return;

    const title = String(job.title || "").trim();
    const desc = String(job.description || job.objective || job.note || "").trim();
    const loc = String(job.location || job.area || "").trim();
    const reward = String(job.reward || job.payment || "").trim();

    if (!title && !desc && !loc && !reward) return;
    if (title.toLowerCase() === "untitled job" && !desc && !loc && !reward) return;

    const normalised = typeof normaliseJobV3989 === "function"
      ? normaliseJobV3989(job)
      : { ...job, id: job.id || job.jobId || ("job_" + Date.now().toString(36)) };

    out.set(normalised.id || normalised.jobId || title, normalised);
  });

  return Array.from(out.values());
}

function writeRealJobsV3991(jobs) {
  const real = (jobs || []).filter(job => !isFakeStarterJobV3991(job)).map(job =>
    typeof normaliseJobV3989 === "function" ? normaliseJobV3989(job) : job
  );

  state.tasks = real;
  state.jobs = real;

  try { saveState(); } catch (error) {}
  try { renderTasks(); } catch (error) {}
  try { renderJobs(); } catch (error) {}
}

async function deleteCloudFakeJobsV3991() {
  const user = currentUserJobsV3989?.();
  const database = dbJobsV3989?.();
  if (!user || !database?.collection || !database?.batch) return false;

  try {
    const col = database.collection("userJobs").doc(user.uid).collection("items");
    const snap = await col.get();
    const batch = database.batch();
    let count = 0;

    snap.forEach(doc => {
      const job = { id: doc.id, ...doc.data() };
      if (isFakeStarterJobV3991(job)) {
        batch.delete(col.doc(doc.id));
        count++;
      }
    });

    if (count > 0) {
      await batch.commit();
      jobsCloudStatusV3989?.(`Removed ${count} starter job${count === 1 ? "" : "s"} from cloud.`);
      return true;
    }
  } catch (error) {
    jobsCloudStatusV3989?.("Could not remove starter jobs: " + (error.message || "check rules."), true);
  }

  return false;
}

async function saveCloudJobsV3991(showStatus = true) {
  purgeFakeStarterJobsV3991();

  const user = currentUserJobsV3989?.();
  const database = dbJobsV3989?.();

  if (!user) {
    jobsCloudStatusV3989?.("Jobs cloud save failed: sign in first.", true);
    return false;
  }

  if (!database?.collection || !database?.batch) {
    jobsCloudStatusV3989?.("Jobs cloud save failed: Firestore unavailable.", true);
    return false;
  }

  const jobs = getRealLocalJobsV3991();

  try {
    const col = database.collection("userJobs").doc(user.uid).collection("items");
    const existing = await col.get();
    const batch = database.batch();

    // Wipe old cloud docs first so starter jobs cannot return.
    existing.forEach(doc => batch.delete(col.doc(doc.id)));

    jobs.forEach(job => {
      const j = typeof normaliseJobV3989 === "function" ? normaliseJobV3989(job) : job;
      batch.set(col.doc(j.id), {
        ...j,
        uid: user.uid,
        ownerId: user.uid,
        ownerEmail: user.email || "",
        placeholder: false,
        starter: false,
        updatedAtLocal: new Date().toISOString(),
        updatedAt: (typeof firebase !== "undefined" && firebase.firestore?.FieldValue?.serverTimestamp)
          ? firebase.firestore.FieldValue.serverTimestamp()
          : new Date().toISOString()
      }, { merge: true });
    });

    await batch.commit();
    jobsCloudStatusV3989?.(`Jobs cloud saved: ${jobs.length} real contract${jobs.length === 1 ? "" : "s"}.`);
    return true;
  } catch (error) {
    jobsCloudStatusV3989?.("Jobs cloud save failed: " + (error.message || "check Firebase rules."), true);
    return false;
  }
}

async function loadCloudJobsV3991(showStatus = true) {
  purgeFakeStarterJobsV3991();
  await deleteCloudFakeJobsV3991();

  const user = currentUserJobsV3989?.();
  const database = dbJobsV3989?.();

  if (!user) {
    jobsCloudStatusV3989?.("Jobs cloud: sign in first.", true);
    return false;
  }

  if (!database?.collection) {
    jobsCloudStatusV3989?.("Jobs cloud: Firestore unavailable.", true);
    return false;
  }

  try {
    const snap = await database.collection("userJobs").doc(user.uid).collection("items").get();
    const jobs = [];

    snap.forEach(doc => {
      const job = { id: doc.id, ...doc.data() };
      if (!isFakeStarterJobV3991(job)) jobs.push(job);
    });

    writeRealJobsV3991(jobs);
    window.__jobsCloudLoadedV3989 = true;

    if (jobs.length > 0) {
      jobsCloudStatusV3989?.(`Jobs cloud loaded: ${jobs.length} real contract${jobs.length === 1 ? "" : "s"}.`);
    } else {
      jobsCloudStatusV3989?.("Jobs cloud: no real contracts found. Starter jobs cleared.");
    }

    return true;
  } catch (error) {
    jobsCloudStatusV3989?.("Jobs cloud load failed: " + (error.message || "check Firebase rules."), true);
    return false;
  }
}

function rebindCloudJobButtonsV3991() {
  const saveBtn = document.getElementById("manualCloudJobsSaveBtnV3989");
  const loadBtn = document.getElementById("manualCloudJobsLoadBtnV3989");

  if (saveBtn && !saveBtn.dataset.v3991Bound) {
    const fresh = saveBtn.cloneNode(true);
    fresh.dataset.v3991Bound = "true";
    saveBtn.replaceWith(fresh);
    fresh.addEventListener("click", () => saveCloudJobsV3991(true));
  }

  if (loadBtn && !loadBtn.dataset.v3991Bound) {
    const fresh = loadBtn.cloneNode(true);
    fresh.dataset.v3991Bound = "true";
    loadBtn.replaceWith(fresh);
    fresh.addEventListener("click", () => loadCloudJobsV3991(true));
  }

  if (!document.getElementById("purgeStarterJobsBtnV3991")) {
    const status = document.getElementById("jobsCloudStatusV3989");
    const row = status?.nextElementSibling?.classList?.contains("jobs-cloud-actions-v3989") ? status.nextElementSibling : null;

    if (row) {
      const btn = document.createElement("button");
      btn.id = "purgeStarterJobsBtnV3991";
      btn.className = "small-btn";
      btn.textContent = "Clear Starter Jobs";
      btn.addEventListener("click", async () => {
        purgeFakeStarterJobsV3991();
        await deleteCloudFakeJobsV3991();
        writeRealJobsV3991(getRealLocalJobsV3991());
        jobsCloudStatusV3989?.("Starter jobs cleared. Real contracts only.");
      });
      row.appendChild(btn);
    }
  }
}

// Override previous cloud jobs functions.
window.saveCloudJobsV3989 = saveCloudJobsV3991;
window.loadCloudJobsV3989 = loadCloudJobsV3991;
window.saveCloudJobsV3990 = saveCloudJobsV3991;
window.loadCloudJobsV3990 = loadCloudJobsV3991;
window.saveCloudJobsV3991 = saveCloudJobsV3991;
window.loadCloudJobsV3991 = loadCloudJobsV3991;

window.addEventListener("load", () => {
  setTimeout(() => {
    purgeFakeStarterJobsV3991();
    rebindCloudJobButtonsV3991();
    try { renderTasks(); } catch (error) {}
    try { renderJobs(); } catch (error) {}
  }, 900);
  setTimeout(rebindCloudJobButtonsV3991, 1800);
});

document.addEventListener("click", event => {
  const target = event.target;
  if (!target || !target.closest) return;

  if (
    target.closest("#tasksTab") ||
    target.closest("#jobsTab") ||
    target.closest('[data-tab="tasksTab"]') ||
    target.closest('[data-tab="jobsTab"]')
  ) {
    setTimeout(() => {
      purgeFakeStarterJobsV3991();
      rebindCloudJobButtonsV3991();
    }, 200);
  }
}, true);




// v3.9.9.2 Actual starter job purge fix
// The previous purge targeted older placeholder names. These are the real built-in defaults.
const STARTER_JOB_TITLES_V3992 = new Set([
  "check the rail bridge",
  "recover sealed documents",
  "investigate strange broadcast",
  "find a safe route to rostok",
  "check med supplies",
  "mark stash near old road"
]);

function isStarterJobV3992(job) {
  if (!job) return false;
  const title = String(job.title || job.text || "").trim().toLowerCase();
  const source = String(job.source || "").trim().toLowerCase();
  const reward = String(job.reward || "").trim().toLowerCase();

  if (STARTER_JOB_TITLES_V3992.has(title)) return true;

  return (
    (title === "check the rail bridge" && source === "wolf") ||
    (title === "recover sealed documents" && source === "sidorovich") ||
    (title === "investigate strange broadcast" && source === "unknown sender") ||
    (source === "wolf" && reward.includes("local reputation")) ||
    (source === "sidorovich" && reward.includes("discount")) ||
    (source === "unknown sender" && reward.includes("answers"))
  );
}

function purgeStarterJobsEverywhereV3992() {
  let removed = 0;

  if (Array.isArray(state?.tasks)) {
    const old = state.tasks.length;
    state.tasks = state.tasks.filter(job => !isStarterJobV3992(job));
    removed += old - state.tasks.length;
  }

  if (Array.isArray(state?.jobs)) {
    const old = state.jobs.length;
    state.jobs = state.jobs.filter(job => !isStarterJobV3992(job));
    removed += old - state.jobs.length;
  }

  try {
    Object.keys(localStorage).forEach(key => {
      if (!/stalkernet|job|jobs|task|tasks|contract/i.test(key)) return;

      try {
        const raw = localStorage.getItem(key);
        const parsed = JSON.parse(raw || "null");
        let edited = false;

        if (Array.isArray(parsed)) {
          const filtered = parsed.filter(job => !isStarterJobV3992(job));
          if (filtered.length !== parsed.length) {
            removed += parsed.length - filtered.length;
            localStorage.setItem(key, JSON.stringify(filtered));
          }
        } else if (parsed && typeof parsed === "object") {
          if (Array.isArray(parsed.tasks)) {
            const filtered = parsed.tasks.filter(job => !isStarterJobV3992(job));
            if (filtered.length !== parsed.tasks.length) {
              removed += parsed.tasks.length - filtered.length;
              parsed.tasks = filtered;
              edited = true;
            }
          }

          if (Array.isArray(parsed.jobs)) {
            const filtered = parsed.jobs.filter(job => !isStarterJobV3992(job));
            if (filtered.length !== parsed.jobs.length) {
              removed += parsed.jobs.length - filtered.length;
              parsed.jobs = filtered;
              edited = true;
            }
          }

          if (edited) localStorage.setItem(key, JSON.stringify(parsed));
        }
      } catch (error) {}
    });
  } catch (error) {}

  try { saveState(); } catch (error) {}
  try { renderTasks(); } catch (error) {}
  try { renderJobs(); } catch (error) {}

  return removed;
}

function realJobsOnlyV3992() {
  const pool = [];

  try { if (Array.isArray(state?.jobs)) pool.push(...state.jobs); } catch (error) {}
  try { if (Array.isArray(state?.tasks)) pool.push(...state.tasks); } catch (error) {}

  const map = new Map();

  pool.forEach(job => {
    if (!job || isStarterJobV3992(job)) return;

    const title = String(job.title || job.text || "").trim();
    const description = String(job.description || job.objective || job.note || "").trim();
    const location = String(job.location || job.area || "").trim();
    const reward = String(job.reward || job.payment || "").trim();

    if (!title && !description && !location && !reward) return;

    const normalised = typeof normaliseJobV3989 === "function"
      ? normaliseJobV3989(job)
      : { ...job, title, id: job.id || job.jobId || ("job_" + Date.now().toString(36)) };

    const id = normalised.id || normalised.jobId || title;
    map.set(id, normalised);
  });

  return Array.from(map.values());
}

async function deleteStarterJobsFromCloudV3992() {
  const user = currentUserJobsV3989?.();
  const database = dbJobsV3989?.();

  if (!user || !database?.collection || !database?.batch) return 0;

  try {
    const col = database.collection("userJobs").doc(user.uid).collection("items");
    const snap = await col.get();
    const batch = database.batch();
    let count = 0;

    snap.forEach(doc => {
      const job = { id: doc.id, ...doc.data() };
      if (isStarterJobV3992(job)) {
        batch.delete(col.doc(doc.id));
        count++;
      }
    });

    if (count > 0) await batch.commit();
    return count;
  } catch (error) {
    jobsCloudStatusV3989?.("Could not clean cloud starter jobs: " + (error.message || "check rules."), true);
    return 0;
  }
}

async function clearStarterJobsV3992(showStatus = true) {
  const localRemoved = purgeStarterJobsEverywhereV3992();
  const cloudRemoved = await deleteStarterJobsFromCloudV3992();

  // Render again after cloud cleanup, because some old event handlers redraw the board.
  purgeStarterJobsEverywhereV3992();

  if (showStatus) {
    const total = localRemoved + cloudRemoved;
    jobsCloudStatusV3989?.(
      total > 0
        ? `Cleared ${total} starter job${total === 1 ? "" : "s"}.`
        : "No starter jobs found. Real contracts only."
    );
  }

  return true;
}

async function saveCloudJobsV3992(showStatus = true) {
  await clearStarterJobsV3992(false);

  const user = currentUserJobsV3989?.();
  const database = dbJobsV3989?.();

  if (!user) {
    jobsCloudStatusV3989?.("Jobs cloud save failed: sign in first.", true);
    return false;
  }

  if (!database?.collection || !database?.batch) {
    jobsCloudStatusV3989?.("Jobs cloud save failed: Firestore unavailable.", true);
    return false;
  }

  const jobs = realJobsOnlyV3992();

  try {
    const col = database.collection("userJobs").doc(user.uid).collection("items");
    const existing = await col.get();
    const batch = database.batch();

    existing.forEach(doc => batch.delete(col.doc(doc.id)));

    jobs.forEach(job => {
      const j = typeof normaliseJobV3989 === "function" ? normaliseJobV3989(job) : job;
      batch.set(col.doc(j.id), {
        ...j,
        uid: user.uid,
        ownerId: user.uid,
        ownerEmail: user.email || "",
        starter: false,
        placeholder: false,
        updatedAtLocal: new Date().toISOString(),
        updatedAt: (typeof firebase !== "undefined" && firebase.firestore?.FieldValue?.serverTimestamp)
          ? firebase.firestore.FieldValue.serverTimestamp()
          : new Date().toISOString()
      }, { merge: true });
    });

    await batch.commit();
    jobsCloudStatusV3989?.(`Jobs cloud saved: ${jobs.length} real contract${jobs.length === 1 ? "" : "s"}.`);
    return true;
  } catch (error) {
    jobsCloudStatusV3989?.("Jobs cloud save failed: " + (error.message || "check Firebase rules."), true);
    return false;
  }
}

async function loadCloudJobsV3992(showStatus = true) {
  await clearStarterJobsV3992(false);

  const user = currentUserJobsV3989?.();
  const database = dbJobsV3989?.();

  if (!user) {
    jobsCloudStatusV3989?.("Jobs cloud: sign in first.", true);
    return false;
  }

  if (!database?.collection) {
    jobsCloudStatusV3989?.("Jobs cloud: Firestore unavailable.", true);
    return false;
  }

  try {
    const snap = await database.collection("userJobs").doc(user.uid).collection("items").get();
    const jobs = [];

    snap.forEach(doc => {
      const job = { id: doc.id, ...doc.data() };
      if (!isStarterJobV3992(job)) jobs.push(job);
    });

    const normalised = jobs.map(job => typeof normaliseJobV3989 === "function" ? normaliseJobV3989(job) : job);
    state.jobs = normalised;
    state.tasks = [];

    try { saveState(); } catch (error) {}
    try { renderTasks(); } catch (error) {}
    try { renderJobs(); } catch (error) {}

    window.__jobsCloudLoadedV3989 = true;

    jobsCloudStatusV3989?.(
      jobs.length
        ? `Jobs cloud loaded: ${jobs.length} real contract${jobs.length === 1 ? "" : "s"}.`
        : "Jobs cloud: no real contracts found. Starter jobs cleared."
    );

    return true;
  } catch (error) {
    jobsCloudStatusV3989?.("Jobs cloud load failed: " + (error.message || "check Firebase rules."), true);
    return false;
  }
}

function bindActualStarterClearButtonV3992() {
  const oldButton = document.getElementById("purgeStarterJobsBtnV3991");
  if (oldButton) {
    oldButton.textContent = "Clear Starter Jobs";
    oldButton.dataset.v3992Bound = "true";
  }

  const status = document.getElementById("jobsCloudStatusV3989");
  const row = status?.nextElementSibling?.classList?.contains("jobs-cloud-actions-v3989") ? status.nextElementSibling : null;

  if (row && !document.getElementById("clearStarterJobsBtnV3992")) {
    const btn = document.createElement("button");
    btn.id = "clearStarterJobsBtnV3992";
    btn.className = "small-btn";
    btn.textContent = "Clear Starter Jobs";
    row.appendChild(btn);
  }
}

// Capture phase event delegation so old button handlers cannot swallow the click.
document.addEventListener("click", event => {
  const target = event.target;
  if (!target || !target.closest) return;

  const clearBtn = target.closest("#clearStarterJobsBtnV3992, #purgeStarterJobsBtnV3991");
  if (clearBtn) {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    clearStarterJobsV3992(true);
    return;
  }

  const saveBtn = target.closest("#manualCloudJobsSaveBtnV3989");
  if (saveBtn) {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    saveCloudJobsV3992(true);
    return;
  }

  const loadBtn = target.closest("#manualCloudJobsLoadBtnV3989");
  if (loadBtn) {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    loadCloudJobsV3992(true);
    return;
  }
}, true);

window.saveCloudJobsV3989 = saveCloudJobsV3992;
window.loadCloudJobsV3989 = loadCloudJobsV3992;
window.saveCloudJobsV3990 = saveCloudJobsV3992;
window.loadCloudJobsV3990 = loadCloudJobsV3992;
window.saveCloudJobsV3991 = saveCloudJobsV3992;
window.loadCloudJobsV3991 = loadCloudJobsV3992;
window.saveCloudJobsV3992 = saveCloudJobsV3992;
window.loadCloudJobsV3992 = loadCloudJobsV3992;
window.clearStarterJobsV3992 = clearStarterJobsV3992;

window.addEventListener("load", () => {
  setTimeout(() => {
    purgeStarterJobsEverywhereV3992();
    bindActualStarterClearButtonV3992();
  }, 500);

  setTimeout(() => {
    purgeStarterJobsEverywhereV3992();
    bindActualStarterClearButtonV3992();
  }, 1500);
});

document.addEventListener("click", event => {
  const target = event.target;
  if (target?.closest?.("#tasksTab, #jobsTab, [data-tab='tasksTab'], [data-tab='jobsTab']")) {
    setTimeout(() => {
      purgeStarterJobsEverywhereV3992();
      bindActualStarterClearButtonV3992();
    }, 200);
  }
}, true);




// v3.9.9.3 Single Clear Starter Jobs button polish
function cleanDuplicateClearStarterButtonsV3993() {
  const oldBtn = document.getElementById("purgeStarterJobsBtnV3991");
  const newBtn = document.getElementById("clearStarterJobsBtnV3992");

  // Keep the newer button. Remove the older duplicate if both exist.
  if (oldBtn && newBtn) {
    oldBtn.remove();
  }

  const remainingButtons = Array.from(document.querySelectorAll("#clearStarterJobsBtnV3992, #purgeStarterJobsBtnV3991"));
  remainingButtons.slice(1).forEach(btn => btn.remove());

  const keep = document.getElementById("clearStarterJobsBtnV3992") || document.getElementById("purgeStarterJobsBtnV3991");
  if (keep) {
    keep.id = "clearStarterJobsBtnV3992";
    keep.textContent = "Clear Starter Jobs";
    keep.classList.add("single-clear-starter-btn-v3993");
  }
}

window.addEventListener("load", () => {
  setTimeout(cleanDuplicateClearStarterButtonsV3993, 300);
  setTimeout(cleanDuplicateClearStarterButtonsV3993, 1200);
  setTimeout(cleanDuplicateClearStarterButtonsV3993, 2400);
});

document.addEventListener("click", event => {
  const target = event.target;
  if (!target || !target.closest) return;

  if (
    target.closest("#tasksTab") ||
    target.closest("#jobsTab") ||
    target.closest('[data-tab="tasksTab"]') ||
    target.closest('[data-tab="jobsTab"]') ||
    target.closest(".nav-btn")
  ) {
    setTimeout(cleanDuplicateClearStarterButtonsV3993, 100);
    setTimeout(cleanDuplicateClearStarterButtonsV3993, 500);
  }
}, true);




// v3.9.9.4 Cloud Map Markers / Pin State Save
window.__mapCloudLoadedV3994 = false;
window.__mapCloudSaveTimerV3994 = null;

function mapCloudStatusV3994(message, isError = false) {
  const el = document.getElementById("mapCloudStatusV3994");
  if (el) {
    el.textContent = message;
    el.classList.toggle("map-cloud-error-v3994", !!isError);
    el.classList.toggle("map-cloud-ok-v3994", !isError);
  }

  try { if (typeof toast === "function") toast(message); } catch (error) {}
  console[isError ? "warn" : "log"](message);
}

function currentUserMapV3994() {
  try {
    if (typeof currentUser !== "undefined" && currentUser) return currentUser;
    if (typeof auth !== "undefined" && auth?.currentUser) return auth.currentUser;
  } catch (error) {}
  return null;
}

function dbMapV3994() {
  try {
    if (typeof db !== "undefined" && db) return db;
    if (typeof firestore !== "undefined" && firestore) return firestore;
  } catch (error) {}
  return null;
}

function normaliseCustomPinV3994(pin) {
  const idValue = String(pin?.id || pin?.pinId || ("pin_" + Date.now().toString(36) + "_" + Math.random().toString(36).slice(2, 7)));
  return {
    id: idValue,
    pinId: idValue,
    mapId: pin?.mapId || "world",
    name: pin?.name || "Custom field note",
    type: pin?.type || "Custom Note",
    note: pin?.note || pin?.description || "No note recorded.",
    x: Number.isFinite(Number(pin?.x)) ? Math.round(Number(pin.x)) : 0,
    y: Number.isFinite(Number(pin?.y)) ? Math.round(Number(pin.y)) : 0,
    updatedAtLocal: pin?.updatedAtLocal || new Date().toISOString()
  };
}

function readMapCloudStateV3994() {
  const customPins = Array.isArray(state?.customPins)
    ? state.customPins.map(normaliseCustomPinV3994)
    : [];

  return {
    customPins,
    hiddenPins: state?.hiddenPins || {},
    pinOverrides: state?.pinOverrides || {},
    allPinsHidden: !!state?.allPinsHidden,
    selectedMapId: state?.selectedMapId || "",
    activeMapSection: state?.activeMapSection || (typeof currentSectionId !== "undefined" ? currentSectionId : "world")
  };
}

function applyMapCloudStateV3994(payload = {}) {
  const customPins = Array.isArray(payload.customPins)
    ? payload.customPins.map(normaliseCustomPinV3994)
    : [];

  state.customPins = customPins;
  state.hiddenPins = payload.hiddenPins && typeof payload.hiddenPins === "object" ? payload.hiddenPins : {};
  state.pinOverrides = payload.pinOverrides && typeof payload.pinOverrides === "object" ? payload.pinOverrides : {};
  state.allPinsHidden = !!payload.allPinsHidden;

  if (payload.selectedMapId) state.selectedMapId = payload.selectedMapId;
  if (payload.activeMapSection) {
    state.activeMapSection = payload.activeMapSection;
    try { currentSectionId = payload.activeMapSection; } catch (error) {}
  }

  try { saveState(); } catch (error) {}
  try { rebuildLeafletMarkers(); } catch (error) {}
  try { renderPinManagerList(); } catch (error) {}
  try { renderMapInfo(state.selectedMapId); } catch (error) {}
  try { renderMapFilters(); } catch (error) {}
  try { updateToggleAllPinsButton(); } catch (error) {}
}

async function saveCloudMapMarkersV3994(showStatus = true) {
  const user = currentUserMapV3994();
  const database = dbMapV3994();

  if (!user) {
    mapCloudStatusV3994("Map cloud save failed: sign in first.", true);
    return false;
  }

  if (!database?.collection || !database?.batch) {
    mapCloudStatusV3994("Map cloud save failed: Firestore unavailable.", true);
    return false;
  }

  const snapshot = readMapCloudStateV3994();

  try {
    const root = database.collection("markers").doc(user.uid);
    const items = root.collection("items");

    const existing = await items.get();
    const batch = database.batch();

    existing.forEach(doc => batch.delete(items.doc(doc.id)));

    snapshot.customPins.forEach(pin => {
      batch.set(items.doc(pin.id), {
        ...pin,
        uid: user.uid,
        ownerId: user.uid,
        ownerEmail: user.email || "",
        updatedAtLocal: new Date().toISOString(),
        updatedAt: (typeof firebase !== "undefined" && firebase.firestore?.FieldValue?.serverTimestamp)
          ? firebase.firestore.FieldValue.serverTimestamp()
          : new Date().toISOString()
      }, { merge: true });
    });

    batch.set(root, {
      uid: user.uid,
      ownerId: user.uid,
      ownerEmail: user.email || "",
      hiddenPins: snapshot.hiddenPins,
      pinOverrides: snapshot.pinOverrides,
      allPinsHidden: snapshot.allPinsHidden,
      selectedMapId: snapshot.selectedMapId,
      activeMapSection: snapshot.activeMapSection,
      customPinCount: snapshot.customPins.length,
      updatedAtLocal: new Date().toISOString(),
      updatedAt: (typeof firebase !== "undefined" && firebase.firestore?.FieldValue?.serverTimestamp)
        ? firebase.firestore.FieldValue.serverTimestamp()
        : new Date().toISOString()
    }, { merge: true });

    await batch.commit();

    window.__mapCloudLoadedV3994 = true;
    mapCloudStatusV3994(`Map cloud saved: ${snapshot.customPins.length} custom marker${snapshot.customPins.length === 1 ? "" : "s"}.`);
    return true;
  } catch (error) {
    mapCloudStatusV3994("Map cloud save failed: " + (error.message || "check Firebase rules."), true);
    return false;
  }
}

async function loadCloudMapMarkersV3994(showStatus = true) {
  const user = currentUserMapV3994();
  const database = dbMapV3994();

  if (!user) {
    mapCloudStatusV3994("Map cloud: sign in first.", true);
    return false;
  }

  if (!database?.collection) {
    mapCloudStatusV3994("Map cloud: Firestore unavailable.", true);
    return false;
  }

  try {
    const root = database.collection("markers").doc(user.uid);
    const metaDoc = await root.get();
    const itemsSnap = await root.collection("items").get();

    const customPins = [];
    itemsSnap.forEach(doc => {
      customPins.push(normaliseCustomPinV3994({ id: doc.id, ...doc.data() }));
    });

    const meta = metaDoc.exists ? metaDoc.data() : {};

    applyMapCloudStateV3994({
      customPins,
      hiddenPins: meta.hiddenPins || {},
      pinOverrides: meta.pinOverrides || {},
      allPinsHidden: !!meta.allPinsHidden,
      selectedMapId: meta.selectedMapId || "",
      activeMapSection: meta.activeMapSection || "world"
    });

    window.__mapCloudLoadedV3994 = true;
    mapCloudStatusV3994(`Map cloud loaded: ${customPins.length} custom marker${customPins.length === 1 ? "" : "s"}.`);
    return true;
  } catch (error) {
    mapCloudStatusV3994("Map cloud load failed: " + (error.message || "check Firebase rules."), true);
    return false;
  }
}

function scheduleCloudMapSaveV3994() {
  if (!window.__mapCloudLoadedV3994) return;
  clearTimeout(window.__mapCloudSaveTimerV3994);
  window.__mapCloudSaveTimerV3994 = setTimeout(() => saveCloudMapMarkersV3994(false), 900);
}

function bindCloudMapButtonsV3994() {
  const saveBtn = document.getElementById("saveMapCloudBtnV3994");
  const loadBtn = document.getElementById("loadMapCloudBtnV3994");

  if (saveBtn && !saveBtn.dataset.v3994Bound) {
    saveBtn.dataset.v3994Bound = "true";
    saveBtn.addEventListener("click", event => {
      event.preventDefault();
      saveCloudMapMarkersV3994(true);
    });
  }

  if (loadBtn && !loadBtn.dataset.v3994Bound) {
    loadBtn.dataset.v3994Bound = "true";
    loadBtn.addEventListener("click", event => {
      event.preventDefault();
      loadCloudMapMarkersV3994(true);
    });
  }

  // Watch map controls that change pin state.
  [
    "saveNewPinBtn",
    "showAllPinsBtn",
    "hideAllPinsBtn",
    "resetPinsBtn",
    "toggleAllPinsBtn"
  ].forEach(idName => {
    const el = document.getElementById(idName);
    if (!el || el.dataset.v3994CloudWatch) return;
    el.dataset.v3994CloudWatch = "true";
    el.addEventListener("click", () => setTimeout(scheduleCloudMapSaveV3994, 350), true);
  });
}

// Wrap direct map mutators.
if (typeof createPinFromForm === "function" && !window.__createPinCloudPatchedV3994) {
  window.__createPinCloudPatchedV3994 = true;
  const originalCreatePinFromFormV3994 = createPinFromForm;
  createPinFromForm = function(...args) {
    const result = originalCreatePinFromFormV3994.apply(this, args);
    setTimeout(scheduleCloudMapSaveV3994, 350);
    return result;
  };
}

if (typeof createPresetPinFromForm382 === "function" && !window.__createPresetPinCloudPatchedV3994) {
  window.__createPresetPinCloudPatchedV3994 = true;
  const originalCreatePresetPinFromForm382V3994 = createPresetPinFromForm382;
  createPresetPinFromForm382 = function(...args) {
    const result = originalCreatePresetPinFromForm382V3994.apply(this, args);
    setTimeout(scheduleCloudMapSaveV3994, 350);
    return result;
  };
}

if (typeof deleteCustomPin === "function" && !window.__deleteCustomPinCloudPatchedV3994) {
  window.__deleteCustomPinCloudPatchedV3994 = true;
  const originalDeleteCustomPinV3994 = deleteCustomPin;
  deleteCustomPin = function(...args) {
    const result = originalDeleteCustomPinV3994.apply(this, args);
    setTimeout(scheduleCloudMapSaveV3994, 350);
    return result;
  };
}

if (typeof togglePinHidden === "function" && !window.__togglePinHiddenCloudPatchedV3994) {
  window.__togglePinHiddenCloudPatchedV3994 = true;
  const originalTogglePinHiddenV3994 = togglePinHidden;
  togglePinHidden = function(...args) {
    const result = originalTogglePinHiddenV3994.apply(this, args);
    setTimeout(scheduleCloudMapSaveV3994, 350);
    return result;
  };
}

if (typeof setAllPinsHidden === "function" && !window.__setAllPinsHiddenCloudPatchedV3994) {
  window.__setAllPinsHiddenCloudPatchedV3994 = true;
  const originalSetAllPinsHiddenV3994 = setAllPinsHidden;
  setAllPinsHidden = function(...args) {
    const result = originalSetAllPinsHiddenV3994.apply(this, args);
    setTimeout(scheduleCloudMapSaveV3994, 350);
    return result;
  };
}

if (typeof savePinOverride === "function" && !window.__savePinOverrideCloudPatchedV3994) {
  window.__savePinOverrideCloudPatchedV3994 = true;
  const originalSavePinOverrideV3994 = savePinOverride;
  savePinOverride = function(...args) {
    const result = originalSavePinOverrideV3994.apply(this, args);
    setTimeout(scheduleCloudMapSaveV3994, 350);
    return result;
  };
}

// Capture clicks on generated pin manager buttons too.
document.addEventListener("click", event => {
  const target = event.target;
  if (!target || !target.closest) return;

  if (
    target.closest("#mapTab") ||
    target.closest('[data-tab="mapTab"]') ||
    target.closest("[data-toggle-pin]") ||
    target.closest("[data-delete-pin]")
  ) {
    setTimeout(bindCloudMapButtonsV3994, 150);
    if (
      target.closest("[data-toggle-pin]") ||
      target.closest("[data-delete-pin]")
    ) {
      setTimeout(scheduleCloudMapSaveV3994, 500);
    }
  }
}, true);

window.addEventListener("load", () => {
  setTimeout(bindCloudMapButtonsV3994, 500);
  setTimeout(bindCloudMapButtonsV3994, 1500);

  try {
    if (typeof auth !== "undefined" && auth?.onAuthStateChanged && !window.__cloudMapAuthBoundV3994) {
      window.__cloudMapAuthBoundV3994 = true;
      auth.onAuthStateChanged(user => {
        if (user) setTimeout(() => loadCloudMapMarkersV3994(false), 1200);
      });
    }
  } catch (error) {}
});

window.saveCloudMapMarkersV3994 = saveCloudMapMarkersV3994;
window.loadCloudMapMarkersV3994 = loadCloudMapMarkersV3994;




// v3.9.9.5 Public Stalker Card polish
function textOfV3995(id, fallback = "Unknown") {
  const el = document.getElementById(id);
  return (el?.textContent || fallback).trim() || fallback;
}

function makeCardChipV3995(label, value) {
  const chip = document.createElement("div");
  chip.className = "card-intel-chip-v3995";
  chip.innerHTML = `<span>${label}</span><strong>${value}</strong>`;
  return chip;
}

function polishStalkerCardV3995(profile = {}, fallback = {}, lastMessage = null) {
  const modal = document.getElementById("stalkerCardModal");
  const panel = modal?.querySelector(".stalker-card-panel");
  if (!modal || !panel) return;

  modal.classList.add("public-card-polished-v3995");
  panel.classList.add("public-card-panel-polished-v3995");

  const callsign = textOfV3995("cardCallsign", profile.callsign || fallback.callsign || "Unknown Stalker");
  const faction = textOfV3995("cardFaction", profile.faction || fallback.faction || "Unknown");
  const rank = textOfV3995("cardRank", profile.rank || "Unknown");
  const status = textOfV3995("cardStatus", profile.status || "Unknown");
  const rep = textOfV3995("cardReputation", profile.reputation || "Neutral");

  panel.dataset.faction = faction.toLowerCase();
  panel.dataset.reputation = rep.toLowerCase();
  panel.dataset.status = status.toLowerCase();

  const label = panel.querySelector(".module-label");
  if (label) label.textContent = "PUBLIC STALKER DOSSIER";

  const identity = panel.querySelector(".stalker-card-identity");
  if (identity) identity.classList.add("stalker-card-identity-polished-v3995");

  const closeBtn = document.getElementById("closeStalkerCardBtn");
  if (closeBtn) {
    closeBtn.textContent = "Close";
    closeBtn.setAttribute("aria-label", "Close public stalker card");
    closeBtn.classList.add("stalker-card-close-polished-v3995");
  }

  let intelStrip = document.getElementById("cardIntelStripV3995");
  if (!intelStrip && identity) {
    intelStrip = document.createElement("div");
    intelStrip.id = "cardIntelStripV3995";
    intelStrip.className = "card-intel-strip-v3995";
    identity.insertAdjacentElement("afterend", intelStrip);
  }

  if (intelStrip) {
    intelStrip.innerHTML = "";
    intelStrip.appendChild(makeCardChipV3995("Rank", rank));
    intelStrip.appendChild(makeCardChipV3995("Status", status));
    intelStrip.appendChild(makeCardChipV3995("Rep", rep));
  }

  const avatar = document.getElementById("cardAvatar");
  if (avatar) {
    avatar.classList.add("stalker-card-avatar-polished-v3995");
    avatar.setAttribute("title", `${callsign} faction patch`);
  }

  const badgeBox = document.getElementById("cardBadges");
  if (badgeBox) {
    badgeBox.classList.add("stalker-badges-polished-v3995");
    const chips = Array.from(badgeBox.querySelectorAll("span"));
    chips.forEach((chip, index) => {
      chip.classList.add("badge-chip-polished-v3995");
      chip.dataset.badgeIndex = String(index + 1);
    });
  }

  const grid = panel.querySelector(".stalker-card-grid");
  if (grid) {
    grid.classList.add("stalker-card-grid-polished-v3995");
    grid.querySelectorAll("div").forEach(cell => {
      const labelEl = cell.querySelector("span");
      const valueEl = cell.querySelector("strong");
      if (!labelEl || !valueEl) return;

      cell.classList.add("card-data-cell-v3995");
      cell.dataset.cardField = labelEl.textContent.trim().toLowerCase().replace(/\s+/g, "-");
      valueEl.title = valueEl.textContent.trim();
    });
  }

  const bio = document.getElementById("cardBio");
  if (bio) {
    bio.classList.add("stalker-card-bio-polished-v3995");
    if (!bio.previousElementSibling || bio.previousElementSibling.id !== "cardBioLabelV3995") {
      const bioLabel = document.createElement("div");
      bioLabel.id = "cardBioLabelV3995";
      bioLabel.className = "card-section-label-v3995";
      bioLabel.textContent = "PDA Note";
      bio.insertAdjacentElement("beforebegin", bioLabel);
    }
  }

  const lastBox = panel.querySelector(".last-message-box");
  if (lastBox) {
    lastBox.classList.add("last-message-box-polished-v3995");
  }

  const lastMsg = document.getElementById("cardLastMessage");
  if (lastMsg) {
    lastMsg.classList.add("card-last-message-polished-v3995");
  }
}

if (typeof renderStalkerCard === "function" && !window.__renderStalkerCardPolishedV3995) {
  window.__renderStalkerCardPolishedV3995 = true;
  const originalRenderStalkerCardV3995 = renderStalkerCard;
  renderStalkerCard = function(profile = {}, fallback = {}, lastMessage = null) {
    const result = originalRenderStalkerCardV3995.apply(this, arguments);
    setTimeout(() => polishStalkerCardV3995(profile, fallback, lastMessage), 30);
    setTimeout(() => polishStalkerCardV3995(profile, fallback, lastMessage), 160);
    return result;
  };
}

window.addEventListener("load", () => {
  setTimeout(() => polishStalkerCardV3995(), 900);
});

document.addEventListener("click", event => {
  const target = event.target;
  if (!target || !target.closest) return;

  if (
    target.closest(".message-card") ||
    target.closest("[data-stalker-card-user]") ||
    target.closest("#stalkerCardModal")
  ) {
    setTimeout(() => polishStalkerCardV3995(), 120);
    setTimeout(() => polishStalkerCardV3995(), 360);
  }
}, true);




// v3.9.9.6 Comms moderation polish
function ensureModerationStateV3996() {
  if (!state.blockedSenders || typeof state.blockedSenders !== "object") state.blockedSenders = {};
  if (!state.reportedMessages || typeof state.reportedMessages !== "object") state.reportedMessages = {};
}

function moderationStatusV3996(message, isError = false) {
  const el = document.getElementById("moderationStatusV3996");
  if (el) {
    el.textContent = message;
    el.classList.toggle("moderation-error-v3996", !!isError);
    el.classList.toggle("moderation-ok-v3996", !isError);
  }

  try { if (typeof setAuthStatus === "function") setAuthStatus(message, isError); } catch (error) {}
  try { if (typeof toast === "function") toast(message); } catch (error) {}
}

function blockedCountV3996() {
  ensureModerationStateV3996();
  return Object.keys(state.blockedSenders || {}).length;
}

function updateModerationButtonsV3996() {
  ensureModerationStateV3996();

  const count = blockedCountV3996();
  const modernToggle = document.getElementById("toggleBlockedUsersBtnV3996");
  const oldToggle = document.getElementById("toggleBlockedUsersBtn");
  const clearBtn = document.getElementById("clearBlockedUsersBtnV3996");

  const label = count ? `Blocked Users (${count})` : "Blocked Users";
  if (modernToggle) modernToggle.textContent = label;
  if (oldToggle) oldToggle.textContent = label;
  if (clearBtn) clearBtn.disabled = count === 0;
}

function polishMessageModerationButtonsV3996() {
  ensureModerationStateV3996();

  document.querySelectorAll("[data-message-action='report']").forEach(btn => {
    const messageId = btn.dataset.messageId || "";
    btn.classList.add("report-btn-v3996");

    if (messageId && state.reportedMessages?.[messageId]) {
      btn.textContent = "Reported";
      btn.classList.add("already-reported-v3996");
      btn.setAttribute("aria-label", "This message has already been reported");
    } else {
      btn.textContent = "Report Msg";
      btn.setAttribute("aria-label", "Report this message");
    }
  });

  document.querySelectorAll("[data-message-action='block']").forEach(btn => {
    const senderId = btn.dataset.senderId || "";
    btn.classList.add("block-btn-v3996");

    if (senderId && state.blockedSenders?.[senderId]) {
      btn.textContent = "Blocked";
      btn.classList.add("already-blocked-v3996");
      btn.setAttribute("aria-label", "Sender is blocked");
    } else {
      btn.textContent = "Block User";
      btn.setAttribute("aria-label", "Block this user locally");
    }
  });

  document.querySelectorAll(".message-actions").forEach(actions => {
    actions.classList.add("message-actions-polished-v3996");
  });

  updateModerationButtonsV3996();
}

function renderBlockedUsersListV3996() {
  ensureModerationStateV3996();

  const list = document.getElementById("blockedUsersList");
  if (!list) return;

  const entries = Object.entries(state.blockedSenders || {});

  if (!entries.length) {
    list.innerHTML = `
      <div class="blocked-empty-v3996">
        <strong>No blocked users.</strong>
        <span>Block hides future messages from that sender on this device.</span>
      </div>
    `;
    updateModerationButtonsV3996();
    return;
  }

  list.innerHTML = "";

  entries.forEach(([senderId, info]) => {
    const callsign = info?.callsign || "Unknown Stalker";
    const date = info?.blockedAt ? new Date(info.blockedAt).toLocaleDateString() : "Unknown date";

    const row = document.createElement("div");
    row.className = "blocked-user-row blocked-user-row-polished-v3996";
    row.innerHTML = `
      <div class="blocked-user-info-v3996">
        <strong>${escapeHtml(callsign)}</strong>
        <span>Blocked ${escapeHtml(date)}</span>
      </div>
      <button class="tiny-btn unblock-btn-v3996" data-unblock-user-v3996="${escapeHtml(senderId)}">Unblock</button>
    `;
    list.appendChild(row);
  });

  list.querySelectorAll("[data-unblock-user-v3996]").forEach(btn => {
    btn.addEventListener("click", event => {
      event.preventDefault();
      event.stopPropagation();

      const senderId = btn.dataset.unblockUserV3996;
      if (!senderId) return;

      delete state.blockedSenders[senderId];
      saveState();
      renderBlockedUsersListV3996();
      try { renderMessages(); } catch (error) {}
      moderationStatusV3996("User unblocked.");
    });
  });

  updateModerationButtonsV3996();
}

async function reportMessageV3996(messageId, senderId, callsign, text) {
  ensureModerationStateV3996();

  if (!currentUser || !db) {
    moderationStatusV3996("Login before reporting messages.", true);
    return false;
  }

  if (!messageId) {
    moderationStatusV3996("Cannot report: missing message ID.", true);
    return false;
  }

  if (state.reportedMessages[messageId]) {
    moderationStatusV3996("You already reported this message.");
    return true;
  }

  const reason = prompt(
    `Report message from ${callsign || "Unknown Stalker"}?\n\nType a reason, for example:\nspam, harassment, abuse, scam, spoilers, impersonation`
  );

  if (!reason || !reason.trim()) return false;

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
      status: "open",
      clientVersion: "v3.9.9.6"
    });

    state.reportedMessages[messageId] = {
      callsign: callsign || "Unknown",
      reason: reason.trim().slice(0, 220),
      reportedAt: Date.now()
    };

    saveState();
    polishMessageModerationButtonsV3996();
    moderationStatusV3996("Message reported.");
    return true;
  } catch (error) {
    moderationStatusV3996("Report failed: " + (error.message || "check Firebase rules."), true);
    return false;
  }
}

function blockSenderV3996(senderId, callsign = "this stalker") {
  ensureModerationStateV3996();

  if (!senderId) {
    moderationStatusV3996("Cannot block: sender ID missing.", true);
    return false;
  }

  if (state.blockedSenders[senderId]) {
    moderationStatusV3996(`${callsign} is already blocked.`);
    return true;
  }

  if (!confirm(`Block messages from ${callsign}? This hides future messages from them on this device only.`)) return false;

  state.blockedSenders[senderId] = {
    callsign,
    blockedAt: Date.now()
  };

  saveState();
  renderBlockedUsersListV3996();
  try { renderMessages(); } catch (error) {}
  moderationStatusV3996(`Blocked ${callsign}.`);
  return true;
}

function clearBlockedUsersV3996() {
  ensureModerationStateV3996();

  const count = blockedCountV3996();
  if (!count) {
    moderationStatusV3996("No blocked users to clear.");
    return;
  }

  if (!confirm(`Clear all ${count} blocked user${count === 1 ? "" : "s"}?`)) return;

  state.blockedSenders = {};
  saveState();
  renderBlockedUsersListV3996();
  try { renderMessages(); } catch (error) {}
  moderationStatusV3996("All blocked users cleared.");
}

function toggleBlockedUsersPanelV3996() {
  const list = document.getElementById("blockedUsersList");
  if (!list) return;

  list.classList.toggle("hidden");
  renderBlockedUsersListV3996();

  const open = !list.classList.contains("hidden");
  moderationStatusV3996(open ? "Blocked users list opened." : "Blocked users list closed.");
}

// Override old moderation calls.
window.reportMessageV3996 = reportMessageV3996;
window.blockSenderV3996 = blockSenderV3996;

if (typeof reportMessage === "function" && !window.__reportMessagePolishedV3996) {
  window.__reportMessagePolishedV3996 = true;
  reportMessage = reportMessageV3996;
}

if (typeof toggleBlockSender === "function" && !window.__toggleBlockSenderPolishedV3996) {
  window.__toggleBlockSenderPolishedV3996 = true;
  toggleBlockSender = blockSenderV3996;
}

if (typeof renderBlockedUsersList === "function" && !window.__renderBlockedUsersListPolishedV3996) {
  window.__renderBlockedUsersListPolishedV3996 = true;
  renderBlockedUsersList = renderBlockedUsersListV3996;
}

if (typeof toggleBlockedUsersPanel === "function" && !window.__toggleBlockedUsersPanelPolishedV3996) {
  window.__toggleBlockedUsersPanelPolishedV3996 = true;
  toggleBlockedUsersPanel = toggleBlockedUsersPanelV3996;
}

if (typeof renderMessages === "function" && !window.__renderMessagesModerationPolishedV3996) {
  window.__renderMessagesModerationPolishedV3996 = true;
  const originalRenderMessagesV3996 = renderMessages;
  renderMessages = function(...args) {
    const result = originalRenderMessagesV3996.apply(this, args);
    setTimeout(polishMessageModerationButtonsV3996, 40);
    setTimeout(updateModerationButtonsV3996, 80);
    return result;
  };
}

// Capture action buttons so the old handler does not double-run report/block.
document.addEventListener("click", event => {
  const target = event.target;
  if (!target || !target.closest) return;

  const actionBtn = target.closest("[data-message-action='report'], [data-message-action='block']");
  if (actionBtn) {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();

    const action = actionBtn.dataset.messageAction;
    const messageId = actionBtn.dataset.messageId || "";
    const senderId = actionBtn.dataset.senderId || "";
    const callsign = actionBtn.dataset.callsign || "Unknown";
    const text = actionBtn.dataset.text || "";

    if (action === "report") reportMessageV3996(messageId, senderId, callsign, text);
    if (action === "block") blockSenderV3996(senderId, callsign);
    return;
  }

  if (target.closest("#toggleBlockedUsersBtnV3996")) {
    event.preventDefault();
    event.stopPropagation();
    toggleBlockedUsersPanelV3996();
    return;
  }

  if (target.closest("#clearBlockedUsersBtnV3996")) {
    event.preventDefault();
    event.stopPropagation();
    clearBlockedUsersV3996();
    return;
  }
}, true);

window.addEventListener("load", () => {
  ensureModerationStateV3996();
  setTimeout(polishMessageModerationButtonsV3996, 500);
  setTimeout(updateModerationButtonsV3996, 800);
  setTimeout(renderBlockedUsersListV3996, 1200);
});

document.addEventListener("click", event => {
  const target = event.target;
  if (target?.closest?.("#commsTab, [data-tab='commsTab'], .nav-btn, #messageList")) {
    setTimeout(polishMessageModerationButtonsV3996, 180);
    setTimeout(updateModerationButtonsV3996, 360);
  }
}, true);




// v3.9.9.7 Prevent Stalker Card opening after Block User
window.__stalkerCardSuppressedUntilV3997 = 0;

function suppressStalkerCardsV3997(ms = 2600) {
  window.__stalkerCardSuppressedUntilV3997 = Date.now() + ms;
}

function isStalkerCardSuppressedV3997() {
  return Date.now() < (window.__stalkerCardSuppressedUntilV3997 || 0);
}

function closeAnyStalkerCardV3997() {
  const modal = document.getElementById("stalkerCardModal");
  const backdrop = document.getElementById("stalkerCardBackdrop");

  if (modal) {
    modal.classList.add("hidden");
    modal.setAttribute("aria-hidden", "true");
  }

  if (backdrop) {
    backdrop.classList.add("hidden");
    backdrop.setAttribute("aria-hidden", "true");
  }

  document.body?.classList?.remove("stalker-card-open", "modal-open", "no-scroll");
  document.documentElement?.classList?.remove("stalker-card-open", "modal-open", "no-scroll");
}

// Wrap public card rendering so suppression beats any delayed row click.
if (typeof renderStalkerCard === "function" && !window.__renderStalkerCardSuppressedV3997) {
  window.__renderStalkerCardSuppressedV3997 = true;
  const originalRenderStalkerCardV3997 = renderStalkerCard;
  renderStalkerCard = function(...args) {
    if (isStalkerCardSuppressedV3997()) {
      closeAnyStalkerCardV3997();
      return null;
    }

    return originalRenderStalkerCardV3997.apply(this, args);
  };
}

// Wrap old card-click handler too, if this build has one.
if (typeof handleStalkerCardClick === "function" && !window.__handleStalkerCardClickSuppressedV3997) {
  window.__handleStalkerCardClickSuppressedV3997 = true;
  const originalHandleStalkerCardClickV3997 = handleStalkerCardClick;
  handleStalkerCardClick = function(...args) {
    if (isStalkerCardSuppressedV3997()) {
      closeAnyStalkerCardV3997();
      return null;
    }

    return originalHandleStalkerCardClickV3997.apply(this, args);
  };
}

// Wrap the polished block function.
if (typeof blockSenderV3996 === "function" && !window.__blockSenderSuppressCardV3997) {
  window.__blockSenderSuppressCardV3997 = true;
  const originalBlockSenderV3997 = blockSenderV3996;
  blockSenderV3996 = function(...args) {
    suppressStalkerCardsV3997(3200);
    const result = originalBlockSenderV3997.apply(this, args);
    suppressStalkerCardsV3997(3200);
    setTimeout(closeAnyStalkerCardV3997, 40);
    setTimeout(closeAnyStalkerCardV3997, 220);
    setTimeout(closeAnyStalkerCardV3997, 700);
    return result;
  };

  window.blockSenderV3996 = blockSenderV3996;
  window.blockSenderV3997 = blockSenderV3996;
}

// Capture block clicks before message/card row handlers see them.
["pointerdown", "touchstart", "mousedown", "click"].forEach(eventName => {
  document.addEventListener(eventName, event => {
    const target = event.target;
    if (!target || !target.closest) return;

    const blockBtn = target.closest(
      "[data-message-action='block'], .block-btn-v3996, [aria-label='Block this user locally']"
    );

    if (!blockBtn) return;

    suppressStalkerCardsV3997(3400);

    // For click specifically, allow the polished moderation handler to run,
    // but stop parent message-card handlers from also opening the dossier.
    if (eventName === "click") {
      setTimeout(closeAnyStalkerCardV3997, 40);
      setTimeout(closeAnyStalkerCardV3997, 180);
      setTimeout(closeAnyStalkerCardV3997, 600);
    }
  }, true);
});

// Final safety net: if a card appears during the suppression window, close it.
function watcherCloseSuppressedCardV3997() {
  if (!isStalkerCardSuppressedV3997()) return;
  closeAnyStalkerCardV3997();
}

window.addEventListener("load", () => {
  setInterval(watcherCloseSuppressedCardV3997, 150);
});

document.addEventListener("click", event => {
  if (isStalkerCardSuppressedV3997()) {
    setTimeout(closeAnyStalkerCardV3997, 30);
    setTimeout(closeAnyStalkerCardV3997, 200);
  }
}, true);




// v3.9.9.8 Offline / Cache Polish
const STALKERNET_BUILD_V3998 = "v3.9.9.8";
const STALKERNET_CACHE_PREFIX_V3998 = "stalkernet-cache-";

function cacheStatusV3998(message, isError = false) {
  const el = document.getElementById("cacheStatusV3998");
  if (el) {
    el.textContent = message;
    el.classList.toggle("cache-error-v3998", !!isError);
    el.classList.toggle("cache-ok-v3998", !isError);
  }

  try { if (typeof toast === "function") toast(message); } catch (error) {}
  console[isError ? "warn" : "log"](message);
}

async function clearOldStalkerNetCachesV3998() {
  if (!("caches" in window)) {
    cacheStatusV3998("Cache API not available in this browser.", true);
    return false;
  }

  try {
    const names = await caches.keys();
    let cleared = 0;

    await Promise.all(names.map(name => {
      const isStalkerNetCache =
        name.startsWith(STALKERNET_CACHE_PREFIX_V3998) ||
        name.toLowerCase().includes("stalkernet");

      const isCurrent = name === "stalkernet-cache-v3998-cache-polish";

      if (isStalkerNetCache && !isCurrent) {
        cleared++;
        return caches.delete(name);
      }

      return Promise.resolve(false);
    }));

    cacheStatusV3998(
      cleared
        ? `Cleared ${cleared} old StalkerNet cache${cleared === 1 ? "" : "s"}.`
        : "No old StalkerNet caches found."
    );

    return true;
  } catch (error) {
    cacheStatusV3998("Cache cleanup failed: " + (error.message || "unknown error."), true);
    return false;
  }
}

async function refreshStalkerNetAppV3998() {
  cacheStatusV3998("Refreshing app files...");

  try {
    if ("serviceWorker" in navigator) {
      const registrations = await navigator.serviceWorker.getRegistrations();
      await Promise.all(registrations.map(reg => {
        if (reg.scope && reg.scope.includes(location.origin)) {
          return reg.update().catch(() => null);
        }
        return Promise.resolve(null);
      }));
    }

    await clearOldStalkerNetCachesV3998();

    const url = new URL(window.location.href);
    url.searchParams.set("v", "435");
    url.searchParams.set("refresh", Date.now().toString(36));
    window.location.href = url.toString();

    return true;
  } catch (error) {
    cacheStatusV3998("Refresh failed: " + (error.message || "try manual reload."), true);
    return false;
  }
}

function bindCacheToolsV3998() {
  const refreshBtn = document.getElementById("refreshAppBtnV3998");
  const clearBtn = document.getElementById("clearOldCachesBtnV3998");

  if (refreshBtn && !refreshBtn.dataset.v3998Bound) {
    refreshBtn.dataset.v3998Bound = "true";
    refreshBtn.addEventListener("click", event => {
      event.preventDefault();
      refreshStalkerNetAppV3998();
    });
  }

  if (clearBtn && !clearBtn.dataset.v3998Bound) {
    clearBtn.dataset.v3998Bound = "true";
    clearBtn.addEventListener("click", async event => {
      event.preventDefault();
      await clearOldStalkerNetCachesV3998();
    });
  }

  const buildLabel = document.getElementById("buildLabelV3998");
  if (buildLabel) buildLabel.textContent = STALKERNET_BUILD_V3998;
}

async function claimFreshServiceWorkerV3998() {
  try {
    if (!("serviceWorker" in navigator)) return;

    const reg = await navigator.serviceWorker.ready;
    if (reg?.waiting) {
      reg.waiting.postMessage({ type: "SKIP_WAITING", build: STALKERNET_BUILD_V3998 });
    }

    if (navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage({ type: "STALKERNET_BUILD", build: STALKERNET_BUILD_V3998 });
    }
  } catch (error) {}
}

window.addEventListener("load", () => {
  setTimeout(bindCacheToolsV3998, 400);
  setTimeout(claimFreshServiceWorkerV3998, 900);
  setTimeout(() => cacheStatusV3998("Current build: v4.3.5. Settings ready."), 1200);
});

document.addEventListener("click", event => {
  const target = event.target;
  if (target?.closest?.("#cacheToolsPanelV3998")) {
    setTimeout(bindCacheToolsV3998, 100);
  }
}, true);

window.clearOldStalkerNetCachesV3998 = clearOldStalkerNetCachesV3998;
window.refreshStalkerNetAppV3998 = refreshStalkerNetAppV3998;




// v3.9.9.9 Cache panel layout fix
// Earlier cache panel could become a second layout column. Move it back into the PDA stack.
function placeCachePanelSafelyV3999() {
  const panel = document.getElementById("cacheToolsPanelV3998");
  if (!panel) return;

  panel.classList.add("cache-tools-panel-contained-v3999");

  const appShell =
    document.querySelector(".pda-screen") ||
    document.querySelector(".pda-shell") ||
    document.querySelector(".app-panel") ||
    document.querySelector("main");

  const tabNav =
    document.querySelector(".bottom-nav") ||
    document.querySelector(".tab-nav") ||
    document.querySelector("nav");

  // If the cache panel is currently a direct child of main and has become a second column,
  // move it near the bottom of the PDA content, before bottom nav if possible.
  if (appShell && panel.parentElement !== appShell) {
    if (tabNav && tabNav.parentElement === appShell) {
      appShell.insertBefore(panel, tabNav);
    } else {
      appShell.appendChild(panel);
    }
  }

  // If it is already inside main but after the main app wrapper, pin it to full width.
  panel.style.gridColumn = "1 / -1";
  panel.style.width = "100%";
  panel.style.maxWidth = "100%";
}

window.addEventListener("load", () => {
  setTimeout(placeCachePanelSafelyV3999, 50);
  setTimeout(placeCachePanelSafelyV3999, 350);
  setTimeout(placeCachePanelSafelyV3999, 1200);
});

document.addEventListener("click", event => {
  const target = event.target;
  if (!target || !target.closest) return;
  if (target.closest(".nav-btn, [data-tab], #cacheToolsPanelV3998")) {
    setTimeout(placeCachePanelSafelyV3999, 120);
  }
}, true);




// v4.3.5 Cache panel spacing fix
function tightenCachePanelSpacingV4000() {
  const panel = document.getElementById("cacheToolsPanelV3998");
  if (!panel) return;

  panel.classList.add("cache-tools-panel-tight-v4000");

  const activePanel = document.querySelector(".tab-panel.active, .tab-panel:not(.hidden)");
  const commsPanel = document.getElementById("commsTab");

  if (commsPanel && !commsPanel.classList.contains("hidden")) {
    commsPanel.classList.add("comms-tight-before-cache-v4000");
  }

  // Keep cache tools inside the PDA shell, above the bottom nav.
  const nav =
    document.querySelector(".bottom-nav") ||
    document.querySelector(".tab-nav") ||
    document.querySelector("nav");

  const shell =
    document.querySelector(".pda-screen") ||
    document.querySelector(".pda-shell") ||
    document.querySelector("main");

  if (shell && nav && nav.parentElement === shell && panel.parentElement === shell) {
    shell.insertBefore(panel, nav);
  }
}

window.addEventListener("load", () => {
  setTimeout(tightenCachePanelSpacingV4000, 80);
  setTimeout(tightenCachePanelSpacingV4000, 500);
  setTimeout(tightenCachePanelSpacingV4000, 1500);
});

document.addEventListener("click", event => {
  const target = event.target;
  if (target?.closest?.(".nav-btn, [data-tab], #cacheToolsPanelV3998, #commsTab")) {
    setTimeout(tightenCachePanelSpacingV4000, 120);
    setTimeout(tightenCachePanelSpacingV4000, 420);
  }
}, true);




// v4.3.5 Put Cache Maintenance inside Comms tab and keep it above bottom nav
function placeCachePanelInsideCommsV4001() {
  const panel = document.getElementById("cacheToolsPanelV3998");
  const comms = document.getElementById("messagesTab");
  const inputRow = document.querySelector("#messagesTab .input-row");

  if (!panel || !comms || !inputRow) return;

  panel.classList.add("cache-tools-panel-inside-comms-v4001");
  panel.style.gridColumn = "";
  panel.style.width = "";
  panel.style.maxWidth = "";
  panel.style.marginBottom = "";

  if (panel.parentElement !== comms || panel.previousElementSibling !== inputRow) {
    inputRow.insertAdjacentElement("afterend", panel);
  }

  const status = document.getElementById("cacheStatusV3998");
  if (status && /v3\.9\.9\.8/.test(status.textContent || "")) {
    status.textContent = "Current build: v4.3.5. Settings ready.";
  }
}

window.addEventListener("load", () => {
  setTimeout(placeCachePanelInsideCommsV4001, 20);
  setTimeout(placeCachePanelInsideCommsV4001, 300);
  setTimeout(placeCachePanelInsideCommsV4001, 1000);
  setTimeout(placeCachePanelInsideCommsV4001, 2200);
});

document.addEventListener("click", event => {
  const target = event.target;
  if (target?.closest?.(".nav-btn, [data-tab], #cacheToolsPanelV3998, #messagesTab")) {
    setTimeout(placeCachePanelInsideCommsV4001, 80);
    setTimeout(placeCachePanelInsideCommsV4001, 300);
  }
}, true);




// v4.3.5 App Install / PWA Polish
const STALKERNET_BUILD_V402 = "v4.3.5";
let deferredInstallPromptV402 = null;

function isStandaloneV402() {
  return (
    window.matchMedia?.("(display-mode: standalone)")?.matches ||
    window.navigator.standalone === true ||
    document.referrer.startsWith("android-app://")
  );
}

function installStatusV402(message, isError = false) {
  const el = document.getElementById("installStatusV402");
  if (el) {
    el.textContent = message;
    el.classList.toggle("install-error-v402", !!isError);
    el.classList.toggle("install-ok-v402", !isError);
  }

  try { if (typeof toast === "function") toast(message); } catch (error) {}
}

function updatePwaInstallPanelV402() {
  const panel = document.getElementById("installAppPanelV402");
  const btn = document.getElementById("installAppBtnV402");

  if (!panel || !btn) return;

  document.body.classList.toggle("stalkernet-standalone-v402", isStandaloneV402());

  if (isStandaloneV402()) {
    panel.classList.remove("hidden");
    btn.classList.add("hidden");
    installStatusV402("StalkerNet is running in installed app mode.");
    return;
  }

  if (deferredInstallPromptV402) {
    panel.classList.remove("hidden");
    btn.classList.remove("hidden");
    installStatusV402("Install StalkerNet for a cleaner full-screen PDA view.");
    return;
  }

  // Brave/Chrome may not expose beforeinstallprompt instantly.
  panel.classList.remove("hidden");
  btn.classList.add("hidden");
  installStatusV402("Install option appears in your browser menu if the button is unavailable.");
}

window.addEventListener("beforeinstallprompt", event => {
  event.preventDefault();
  deferredInstallPromptV402 = event;
  updatePwaInstallPanelV402();
});

window.addEventListener("appinstalled", () => {
  deferredInstallPromptV402 = null;
  updatePwaInstallPanelV402();
  installStatusV402("StalkerNet installed.");
});

async function installStalkerNetV402() {
  if (!deferredInstallPromptV402) {
    installStatusV402("Install prompt unavailable. Use Brave menu → Add to Home screen / Install app.", true);
    return false;
  }

  try {
    deferredInstallPromptV402.prompt();
    const choice = await deferredInstallPromptV402.userChoice;
    deferredInstallPromptV402 = null;

    if (choice?.outcome === "accepted") {
      installStatusV402("Install accepted.");
    } else {
      installStatusV402("Install dismissed.");
    }

    updatePwaInstallPanelV402();
    return choice?.outcome === "accepted";
  } catch (error) {
    installStatusV402("Install failed: " + (error.message || "use browser menu instead."), true);
    return false;
  }
}

function applyPwaUrlTabV402() {
  const params = new URLSearchParams(location.search);
  const tab = (params.get("tab") || "").toLowerCase();
  const map = {
    comms: "messagesTab",
    chat: "messagesTab",
    messages: "messagesTab",
    map: "mapTab",
    archive: "loreTab",
    arc: "loreTab",
    jobs: "tasksTab",
    job: "tasksTab",
    id: "idTab"
  };

  const targetId = map[tab];
  if (!targetId) return;

  const btn =
    document.querySelector(`[data-tab="${targetId}"]`) ||
    document.querySelector(`[data-target="${targetId}"]`) ||
    document.querySelector(`button[aria-controls="${targetId}"]`);

  if (btn) {
    setTimeout(() => btn.click(), 450);
    setTimeout(() => btn.click(), 1100);
  }
}

function bindPwaInstallV402() {
  const btn = document.getElementById("installAppBtnV402");
  if (btn && !btn.dataset.v402Bound) {
    btn.dataset.v402Bound = "true";
    btn.addEventListener("click", event => {
      event.preventDefault();
      installStalkerNetV402();
    });
  }

  updatePwaInstallPanelV402();

  const cacheStatus = document.getElementById("cacheStatusV3998");
  if (cacheStatus && /v4\.0\.1|v3\.9\.9\.8/.test(cacheStatus.textContent || "")) {
    cacheStatus.textContent = "Current build: v4.3.5. Settings ready.";
  }
}

window.addEventListener("load", () => {
  setTimeout(bindPwaInstallV402, 300);
  setTimeout(bindPwaInstallV402, 1200);
  setTimeout(applyPwaUrlTabV402, 650);
});

document.addEventListener("click", event => {
  const target = event.target;
  if (target?.closest?.("#installAppPanelV402, #cacheToolsPanelV3998, .nav-btn, [data-tab]")) {
    setTimeout(bindPwaInstallV402, 160);
  }
}, true);

window.installStalkerNetV402 = installStalkerNetV402;




// v4.3.5 Audio Cue Settings
const AUDIO_SETTINGS_KEY_V403 = "stalkernet_audio_settings_v403";
const AUDIO_DEFAULTS_V403 = {
  enabled: true,
  volume: 0.45
};

function loadAudioSettingsV403() {
  try {
    const saved = JSON.parse(localStorage.getItem(AUDIO_SETTINGS_KEY_V403) || "null");
    return {
      ...AUDIO_DEFAULTS_V403,
      ...(saved && typeof saved === "object" ? saved : {})
    };
  } catch (error) {
    return { ...AUDIO_DEFAULTS_V403 };
  }
}

function saveAudioSettingsV403(settings) {
  const clean = {
    enabled: !!settings.enabled,
    volume: Math.min(1, Math.max(0, Number(settings.volume)))
  };
  localStorage.setItem(AUDIO_SETTINGS_KEY_V403, JSON.stringify(clean));
  return clean;
}

window.audioSettingsV403 = loadAudioSettingsV403();

function audioStatusV403(message, isError = false) {
  const el = document.getElementById("audioStatusV403");
  if (el) {
    el.textContent = message;
    el.classList.toggle("audio-error-v403", !!isError);
    el.classList.toggle("audio-ok-v403", !isError);
  }

  try { if (typeof toast === "function") toast(message); } catch (error) {}
}

function updateAudioControlsV403() {
  const settings = window.audioSettingsV403 || loadAudioSettingsV403();
  const toggle = document.getElementById("toggleAudioBtnV403");
  const slider = document.getElementById("audioVolumeSliderV403");
  const value = document.getElementById("audioVolumeValueV403");

  if (toggle) {
    toggle.textContent = settings.enabled ? "Audio Cues: On" : "Audio Cues: Off";
    toggle.classList.toggle("audio-disabled-v403", !settings.enabled);
  }

  if (slider) slider.value = String(Math.round(settings.volume * 100));
  if (value) value.textContent = `${Math.round(settings.volume * 100)}%`;

  audioStatusV403(settings.enabled ? "Audio cues enabled for this device." : "Audio cues muted for this device.");
}

function setAudioEnabledV403(enabled) {
  window.audioSettingsV403 = saveAudioSettingsV403({
    ...(window.audioSettingsV403 || AUDIO_DEFAULTS_V403),
    enabled
  });
  updateAudioControlsV403();
}

function setAudioVolumeV403(volume) {
  window.audioSettingsV403 = saveAudioSettingsV403({
    ...(window.audioSettingsV403 || AUDIO_DEFAULTS_V403),
    volume
  });
  updateAudioControlsV403();
}

function patchAudioElementV403(audio) {
  if (!audio || audio.dataset.v403AudioPatched) return audio;
  audio.dataset.v403AudioPatched = "true";

  try {
    audio.volume = window.audioSettingsV403.volume;
    audio.muted = !window.audioSettingsV403.enabled;
  } catch (error) {}

  const originalPlay = audio.play?.bind(audio);
  if (typeof originalPlay === "function") {
    audio.play = function(...args) {
      const settings = window.audioSettingsV403 || loadAudioSettingsV403();

      try {
        this.volume = settings.volume;
        this.muted = !settings.enabled;
      } catch (error) {}

      if (!settings.enabled || settings.volume <= 0) {
        return Promise.resolve();
      }

      try {
        return originalPlay(...args);
      } catch (error) {
        return Promise.reject(error);
      }
    };
  }

  return audio;
}

function patchAllAudioElementsV403() {
  document.querySelectorAll("audio").forEach(patchAudioElementV403);

  // Patch common global audio objects if earlier builds use them.
  [
    "bootAudio",
    "clickAudio",
    "uiClickAudio",
    "pdaClickAudio",
    "stalkerNetBootAudio"
  ].forEach(name => {
    try {
      if (window[name]) patchAudioElementV403(window[name]);
    } catch (error) {}
  });
}

// Wrap common cue functions if present.
[
  "playClick",
  "playClickSound",
  "playUiClick",
  "playBootSound",
  "playBootCue",
  "playAudioCue",
  "playPdaSound"
].forEach(name => {
  try {
    if (typeof window[name] === "function" && !window[`__${name}AudioSettingsPatchedV403`]) {
      window[`__${name}AudioSettingsPatchedV403`] = true;
      const original = window[name];
      window[name] = function(...args) {
        const settings = window.audioSettingsV403 || loadAudioSettingsV403();
        if (!settings.enabled || settings.volume <= 0) return null;
        return original.apply(this, args);
      };
    }
  } catch (error) {}
});

function beepFallbackV403() {
  const settings = window.audioSettingsV403 || loadAudioSettingsV403();

  if (!settings.enabled || settings.volume <= 0) {
    audioStatusV403("Audio cues are muted.");
    return;
  }

  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) {
      audioStatusV403("Audio test unavailable in this browser.", true);
      return;
    }

    const ctx = new AudioContextClass();
    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();

    oscillator.type = "square";
    oscillator.frequency.value = 520;
    gain.gain.value = 0.035 * settings.volume;

    oscillator.connect(gain);
    gain.connect(ctx.destination);

    oscillator.start();
    setTimeout(() => {
      oscillator.stop();
      ctx.close?.();
    }, 95);

    audioStatusV403("Test cue played.");
  } catch (error) {
    audioStatusV403("Audio test failed: " + (error.message || "browser blocked playback."), true);
  }
}

function testAudioCueV403() {
  patchAllAudioElementsV403();

  const settings = window.audioSettingsV403 || loadAudioSettingsV403();

  if (!settings.enabled || settings.volume <= 0) {
    audioStatusV403("Audio cues are muted.");
    return;
  }

  const audio =
    document.querySelector("audio[data-click]") ||
    document.querySelector("audio#clickAudio") ||
    document.querySelector("audio#uiClickAudio") ||
    document.querySelector("audio");

  if (audio) {
    try {
      patchAudioElementV403(audio);
      audio.currentTime = 0;
      const result = audio.play();
      if (result?.catch) result.catch(() => beepFallbackV403());
      audioStatusV403("Test cue played.");
      return;
    } catch (error) {}
  }

  beepFallbackV403();
}

function bindAudioSettingsV403() {
  patchAllAudioElementsV403();

  const toggle = document.getElementById("toggleAudioBtnV403");
  const test = document.getElementById("testAudioBtnV403");
  const slider = document.getElementById("audioVolumeSliderV403");

  if (toggle && !toggle.dataset.v403Bound) {
    toggle.dataset.v403Bound = "true";
    toggle.addEventListener("click", event => {
      event.preventDefault();
      const current = window.audioSettingsV403 || loadAudioSettingsV403();
      setAudioEnabledV403(!current.enabled);
    });
  }

  if (test && !test.dataset.v403Bound) {
    test.dataset.v403Bound = "true";
    test.addEventListener("click", event => {
      event.preventDefault();
      testAudioCueV403();
    });
  }

  if (slider && !slider.dataset.v403Bound) {
    slider.dataset.v403Bound = "true";
    slider.addEventListener("input", event => {
      setAudioVolumeV403(Number(event.target.value) / 100);
    });
  }

  updateAudioControlsV403();
}

window.addEventListener("load", () => {
  setTimeout(bindAudioSettingsV403, 250);
  setTimeout(bindAudioSettingsV403, 1200);
});

document.addEventListener("click", event => {
  const target = event.target;
  if (target?.closest?.("#audioSettingsPanelV403, #cacheToolsPanelV3998, .nav-btn, [data-tab]")) {
    setTimeout(bindAudioSettingsV403, 120);
  }
}, true);

window.setAudioEnabledV403 = setAudioEnabledV403;
window.setAudioVolumeV403 = setAudioVolumeV403;
window.testAudioCueV403 = testAudioCueV403;




// v4.3.5 Force-visible Audio Cues panel
function ensureAudioPanelVisibleV404() {
  let panel = document.getElementById("audioSettingsPanelV403");
  const cachePanel = document.getElementById("cacheToolsPanelV3998");
  const installPanel = document.getElementById("installAppPanelV402");
  const cacheActions = cachePanel?.querySelector(".cache-actions-v3998");

  if (!cachePanel) return;

  if (!panel) {
    panel = document.createElement("div");
    panel.id = "audioSettingsPanelV403";
    panel.className = "audio-settings-panel-v403 audio-settings-panel-forced-v404";
    panel.innerHTML = `
      <div class="module-label">AUDIO CUES</div>
      <p id="audioStatusV403" class="message-text audio-status-v403">Audio cues are local to this device.</p>
      <div class="audio-actions-v403">
        <button id="toggleAudioBtnV403" class="small-btn">Audio Cues: On</button>
        <button id="testAudioBtnV403" class="small-btn">Test Cue</button>
      </div>
      <label class="audio-volume-row-v403" for="audioVolumeSliderV403">
        <span>Volume</span>
        <input id="audioVolumeSliderV403" type="range" min="0" max="100" value="45" />
        <strong id="audioVolumeValueV403">45%</strong>
      </label>
    `;
  }

  panel.classList.remove("hidden");
  panel.classList.add("audio-settings-panel-forced-v404");

  // Put it after App Install if installed mode is showing, otherwise before cache buttons.
  if (installPanel && installPanel.parentElement === cachePanel) {
    installPanel.insertAdjacentElement("afterend", panel);
  } else if (cacheActions && cacheActions.parentElement === cachePanel) {
    cacheActions.insertAdjacentElement("beforebegin", panel);
  } else {
    cachePanel.appendChild(panel);
  }

  const cacheStatus = document.getElementById("cacheStatusV3998");
  if (cacheStatus && /v4\.0\.3|v4\.0\.2|v4\.0\.1|v3\.9\.9\.8/.test(cacheStatus.textContent || "")) {
    cacheStatus.textContent = "Current build: v4.3.5. Settings ready.";
  }

  try {
    if (typeof bindAudioSettingsV403 === "function") bindAudioSettingsV403();
    else {
      const toggle = document.getElementById("toggleAudioBtnV403");
      const test = document.getElementById("testAudioBtnV403");
      const slider = document.getElementById("audioVolumeSliderV403");
      const value = document.getElementById("audioVolumeValueV403");

      const key = "stalkernet_audio_settings_v403";
      const load = () => {
        try { return { enabled: true, volume: 0.45, ...JSON.parse(localStorage.getItem(key) || "{}") }; }
        catch (error) { return { enabled: true, volume: 0.45 }; }
      };
      const save = settings => localStorage.setItem(key, JSON.stringify(settings));
      const update = () => {
        const s = load();
        if (toggle) toggle.textContent = s.enabled ? "Audio Cues: On" : "Audio Cues: Off";
        if (slider) slider.value = String(Math.round(Number(s.volume || 0.45) * 100));
        if (value) value.textContent = `${Math.round(Number(s.volume || 0.45) * 100)}%`;
      };

      if (toggle && !toggle.dataset.v404Bound) {
        toggle.dataset.v404Bound = "true";
        toggle.addEventListener("click", () => {
          const s = load();
          s.enabled = !s.enabled;
          save(s);
          update();
        });
      }

      if (slider && !slider.dataset.v404Bound) {
        slider.dataset.v404Bound = "true";
        slider.addEventListener("input", () => {
          const s = load();
          s.volume = Number(slider.value) / 100;
          save(s);
          update();
        });
      }

      if (test && !test.dataset.v404Bound) {
        test.dataset.v404Bound = "true";
        test.addEventListener("click", () => {
          const s = load();
          if (!s.enabled) return;
          try {
            const AC = window.AudioContext || window.webkitAudioContext;
            const ctx = new AC();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = "square";
            osc.frequency.value = 520;
            gain.gain.value = 0.035 * Number(s.volume || 0.45);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            setTimeout(() => {
              osc.stop();
              ctx.close?.();
            }, 90);
          } catch (error) {}
        });
      }

      update();
    }
  } catch (error) {}
}

window.addEventListener("load", () => {
  setTimeout(ensureAudioPanelVisibleV404, 50);
  setTimeout(ensureAudioPanelVisibleV404, 350);
  setTimeout(ensureAudioPanelVisibleV404, 1200);
  setTimeout(ensureAudioPanelVisibleV404, 2400);
});

document.addEventListener("click", event => {
  const target = event.target;
  if (target?.closest?.("#cacheToolsPanelV3998, #installAppPanelV402, .nav-btn, [data-tab]")) {
    setTimeout(ensureAudioPanelVisibleV404, 120);
    setTimeout(ensureAudioPanelVisibleV404, 450);
  }
}, true);




// v4.3.5 Settings Area
// Moves Audio Cues, App Install, and Cache Maintenance into a proper Settings tab.
const STALKERNET_BUILD_V405 = "v4.3.5";

function settingsStatusV405(message) {
  console.log(message);
  try { if (typeof toast === "function") toast(message); } catch (error) {}
}

function ensureSettingsTabV405() {
  let settingsTab = document.getElementById("settingsTab");

  if (!settingsTab) {
    settingsTab = document.createElement("section");
    settingsTab.id = "settingsTab";
    settingsTab.className = "tab-panel hidden settings-tab-v405";
    settingsTab.innerHTML = `
      <div class="section-top"><h2>Settings</h2></div>
      <article class="module-panel settings-hub-card-v405">
        <div class="module-label">PDA SETTINGS</div>
        <p class="message-text">Device tools and local preferences live here. Future settings should be added to this tab instead of crowding other screens.</p>
      </article>
      <div id="settingsHubV405" class="settings-hub-v405"></div>
    `;

    const main = document.querySelector("main") || document.querySelector(".pda-screen") || document.body;
    const nav = document.querySelector(".bottom-nav") || document.querySelector(".tab-nav") || document.querySelector("nav");
    if (nav && nav.parentElement === main) main.insertBefore(settingsTab, nav);
    else main.appendChild(settingsTab);
  }

  let hub = document.getElementById("settingsHubV405");
  if (!hub) {
    hub = document.createElement("div");
    hub.id = "settingsHubV405";
    hub.className = "settings-hub-v405";
    settingsTab.appendChild(hub);
  }

  settingsTab.classList.add("settings-tab-v405");
  return { settingsTab, hub };
}

function ensureSettingsNavV405() {
  const existing = document.querySelector('[data-tab="settingsTab"]');
  if (existing) {
    existing.classList.add("settings-nav-v405");
    if (!existing.querySelector("small")) {
      existing.innerHTML = "<span>SET</span><small>Settings</small>";
    }
    return existing;
  }

  const nav = document.querySelector(".bottom-nav") || document.querySelector(".tab-nav") || document.querySelector("nav");
  if (!nav) return null;

  const btn = document.createElement("button");
  btn.className = "nav-btn settings-nav-v405";
  btn.dataset.tab = "settingsTab";
  btn.innerHTML = "<span>SET</span><small>Settings</small>";
  nav.appendChild(btn);
  return btn;
}

function movePanelToSettingsV405(panel, title, order = 99) {
  if (!panel) return;

  const { hub } = ensureSettingsTabV405();

  panel.classList.add("settings-module-v405");
  panel.dataset.settingsOrderV405 = String(order);

  // Ensure each moved panel has a friendly module label if it lost one.
  const label = panel.querySelector(".module-label");
  if (label && title) label.textContent = title;

  if (panel.parentElement !== hub) {
    hub.appendChild(panel);
  }

  // Sort modules by order.
  Array.from(hub.children)
    .sort((a, b) => Number(a.dataset.settingsOrderV405 || 99) - Number(b.dataset.settingsOrderV405 || 99))
    .forEach(child => hub.appendChild(child));
}

function moveCurrentToolsIntoSettingsV405() {
  const { hub } = ensureSettingsTabV405();

  const audio = document.getElementById("audioSettingsPanelV403");
  const install = document.getElementById("installAppPanelV402");
  const cache = document.getElementById("cacheToolsPanelV3998");

  // If audio panel does not exist yet, ask the force-fix function to create it.
  try {
    if (!audio && typeof ensureAudioPanelVisibleV404 === "function") ensureAudioPanelVisibleV404();
  } catch (error) {}

  movePanelToSettingsV405(document.getElementById("audioSettingsPanelV403"), "AUDIO CUES", 10);
  movePanelToSettingsV405(document.getElementById("installAppPanelV402"), "APP INSTALL", 20);
  movePanelToSettingsV405(document.getElementById("cacheToolsPanelV3998"), "CACHE MAINTENANCE", 30);

  // Remove any old cache panel margin that was only for Comms.
  const cachePanel = document.getElementById("cacheToolsPanelV3998");
  if (cachePanel) {
    cachePanel.classList.remove(
      "cache-tools-panel-inside-comms-v4001",
      "cache-tools-panel-tight-v4000",
      "cache-tools-panel-contained-v3999"
    );
    cachePanel.classList.add("cache-tools-panel-settings-v405");
    cachePanel.style.gridColumn = "";
    cachePanel.style.width = "";
    cachePanel.style.maxWidth = "";
    cachePanel.style.marginBottom = "";
  }

  const status = document.getElementById("cacheStatusV3998");
  if (status && /v4\.0\.4|v4\.0\.3|v4\.0\.2|v4\.0\.1|v3\.9\.9\.8/.test(status.textContent || "")) {
    status.textContent = "Current build: v4.3.5. Settings ready.";
  }

  // Keep old binders alive after moving DOM.
  try { if (typeof bindAudioSettingsV403 === "function") bindAudioSettingsV403(); } catch (error) {}
  try { if (typeof bindPwaInstallV402 === "function") bindPwaInstallV402(); } catch (error) {}
  try { if (typeof bindCacheToolsV3998 === "function") bindCacheToolsV3998(); } catch (error) {}
}

function activateTabV405(tabId) {
  const panels = Array.from(document.querySelectorAll(".tab-panel"));
  const buttons = Array.from(document.querySelectorAll("[data-tab]"));

  panels.forEach(panel => {
    const active = panel.id === tabId;
    panel.classList.toggle("active", active);
    panel.classList.toggle("hidden", !active);
  });

  buttons.forEach(btn => {
    const active = btn.dataset.tab === tabId;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-selected", active ? "true" : "false");
  });

  if (tabId === "settingsTab") {
    setTimeout(moveCurrentToolsIntoSettingsV405, 40);
    setTimeout(moveCurrentToolsIntoSettingsV405, 300);
  }
}

// Capture settings nav clicks before older tab code ignores the new tab.
document.addEventListener("click", event => {
  const target = event.target;
  if (!target || !target.closest) return;

  const settingsBtn = target.closest('[data-tab="settingsTab"]');
  if (settingsBtn) {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    activateTabV405("settingsTab");
    return;
  }
}, true);

function setupSettingsAreaV405() {
  ensureSettingsTabV405();
  ensureSettingsNavV405();
  moveCurrentToolsIntoSettingsV405();

  // If opened with shortcut.
  const params = new URLSearchParams(location.search);
  const tab = (params.get("tab") || "").toLowerCase();
  if (tab === "settings" || tab === "set") {
    setTimeout(() => activateTabV405("settingsTab"), 300);
    setTimeout(() => activateTabV405("settingsTab"), 900);
  }
}

window.addEventListener("load", () => {
  setTimeout(setupSettingsAreaV405, 150);
  setTimeout(setupSettingsAreaV405, 700);
  setTimeout(setupSettingsAreaV405, 1600);
});

document.addEventListener("click", event => {
  const target = event.target;
  if (target?.closest?.(".nav-btn, [data-tab], #settingsTab, #settingsHubV405")) {
    setTimeout(setupSettingsAreaV405, 160);
  }
}, true);

window.setupSettingsAreaV405 = setupSettingsAreaV405;
window.activateTabV405 = activateTabV405;




// v4.3.5 Settings tab layout fix
function getPdaMainV406() {
  return (
    document.querySelector(".pda-screen") ||
    document.querySelector(".pda-shell") ||
    document.querySelector(".phone-frame main") ||
    document.querySelector("main") ||
    document.body
  );
}

function fixSettingsLayoutV406() {
  const settingsTab = document.getElementById("settingsTab");
  const nav = document.querySelector(".bottom-nav") || document.querySelector(".tab-nav") || document.querySelector("nav");
  const main = getPdaMainV406();

  if (!settingsTab || !main) return;

  settingsTab.classList.add("settings-tab-fixed-v406");

  // Move Settings into the same parent as the other tab panels, before nav if possible.
  const knownPanel =
    document.getElementById("messagesTab") ||
    document.getElementById("mapTab") ||
    document.getElementById("loreTab") ||
    document.getElementById("tasksTab") ||
    document.getElementById("idTab");

  const panelParent = knownPanel?.parentElement || main;

  if (settingsTab.parentElement !== panelParent) {
    if (nav && nav.parentElement === panelParent) panelParent.insertBefore(settingsTab, nav);
    else panelParent.appendChild(settingsTab);
  }

  // Ensure nav stays after panels, not beside them.
  if (nav && nav.parentElement === panelParent && nav.nextElementSibling) {
    panelParent.appendChild(nav);
  }

  // Ensure Settings nav button exists and is compact.
  let settingsBtn = document.querySelector('[data-tab="settingsTab"]');
  if (!settingsBtn && nav) {
    settingsBtn = document.createElement("button");
    settingsBtn.className = "nav-btn settings-nav-v405 settings-nav-fixed-v406";
    settingsBtn.dataset.tab = "settingsTab";
    settingsBtn.innerHTML = "<span>SET</span><small>Settings</small>";
    nav.appendChild(settingsBtn);
  }

  if (settingsBtn) {
    settingsBtn.classList.add("settings-nav-fixed-v406");
    settingsBtn.innerHTML = "<span>SET</span><small>Settings</small>";
  }

  // Make sure panel classes are sane.
  document.querySelectorAll(".tab-panel").forEach(panel => {
    panel.classList.add("tab-panel-fixed-v406");
  });

  // Move settings modules into settings hub if needed.
  try {
    if (typeof moveCurrentToolsIntoSettingsV405 === "function") moveCurrentToolsIntoSettingsV405();
  } catch (error) {}

  const status = document.getElementById("cacheStatusV3998");
  if (status && /v4\.0\.5|v4\.0\.4|v4\.0\.3|v4\.0\.2|v4\.0\.1/.test(status.textContent || "")) {
    status.textContent = "Current build: v4.3.5. Settings ready.";
  }
}

function activateTabFixedV406(tabId) {
  fixSettingsLayoutV406();

  const panels = Array.from(document.querySelectorAll(".tab-panel"));
  const buttons = Array.from(document.querySelectorAll("[data-tab]"));

  panels.forEach(panel => {
    const active = panel.id === tabId;
    panel.classList.toggle("active", active);
    panel.classList.toggle("hidden", !active);
    panel.style.display = active ? "" : "none";
  });

  buttons.forEach(btn => {
    const active = btn.dataset.tab === tabId;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-selected", active ? "true" : "false");
  });

  if (tabId === "settingsTab") {
    setTimeout(fixSettingsLayoutV406, 50);
    setTimeout(() => {
      try {
        if (typeof moveCurrentToolsIntoSettingsV405 === "function") moveCurrentToolsIntoSettingsV405();
      } catch (error) {}
    }, 120);
  }
}

// Capture all tab clicks so the layout cannot show two screens side-by-side.
document.addEventListener("click", event => {
  const target = event.target;
  if (!target || !target.closest) return;

  const tabButton = target.closest("[data-tab]");
  if (!tabButton) return;

  const tabId = tabButton.dataset.tab;
  if (!tabId) return;

  if (document.getElementById(tabId)) {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    activateTabFixedV406(tabId);
  }
}, true);

window.addEventListener("load", () => {
  setTimeout(fixSettingsLayoutV406, 50);
  setTimeout(fixSettingsLayoutV406, 300);
  setTimeout(fixSettingsLayoutV406, 900);
  setTimeout(fixSettingsLayoutV406, 1800);

  // If the app accidentally boots with two active panels, keep Comms unless a URL asks for Settings.
  setTimeout(() => {
    const params = new URLSearchParams(location.search);
    const requested = (params.get("tab") || "").toLowerCase();
    if (requested === "settings" || requested === "set") activateTabFixedV406("settingsTab");
    else if (!document.querySelector(".tab-panel.active")) activateTabFixedV406("messagesTab");
  }, 450);
});

document.addEventListener("click", event => {
  const target = event.target;
  if (target?.closest?.("#settingsTab, .nav-btn, [data-tab]")) {
    setTimeout(fixSettingsLayoutV406, 80);
    setTimeout(fixSettingsLayoutV406, 350);
  }
}, true);

window.fixSettingsLayoutV406 = fixSettingsLayoutV406;
window.activateTabFixedV406 = activateTabFixedV406;



// v4.3.5 Settings/Comms split: Audio only in Settings, Cache in both.
function commsTabV407(){ return document.getElementById("messagesTab") || document.getElementById("commsTab"); }
function settingsHubV407(){
  if (typeof ensureSettingsTabV405 === "function") { try { return ensureSettingsTabV405().hub; } catch(e){} }
  let tab=document.getElementById("settingsTab");
  if(!tab){
    tab=document.createElement("section");
    tab.id="settingsTab";
    tab.className="tab-panel hidden settings-tab-v405 settings-tab-fixed-v406";
    tab.innerHTML='<div class="section-top"><h2>Settings</h2></div><article class="module-panel settings-hub-card-v405"><div class="module-label">PDA SETTINGS</div><p class="message-text">Device tools and local preferences live here.</p></article><div id="settingsHubV405" class="settings-hub-v405"></div>';
    (document.querySelector("main")||document.body).appendChild(tab);
  }
  let hub=document.getElementById("settingsHubV405");
  if(!hub){ hub=document.createElement("div"); hub.id="settingsHubV405"; hub.className="settings-hub-v405"; tab.appendChild(hub); }
  return hub;
}
function makeCommsCachePanelV407(){
  const panel=document.createElement("section");
  panel.id="commsCacheToolsPanelV407";
  panel.className="comms-cache-tools-panel-v407 module-panel";
  panel.innerHTML='<div class="module-label">CACHE MAINTENANCE</div><p id="commsCacheStatusV407" class="message-text comms-cache-status-v407">Quick cache tools for this device.</p><div class="comms-cache-actions-v407"><button id="refreshAppBtnCommsV407" class="small-btn">Refresh App</button><button id="clearOldCachesBtnCommsV407" class="small-btn">Clear Old Caches</button></div>';
  return panel;
}
function commsCacheStatusV407(msg,err=false){
  const el=document.getElementById("commsCacheStatusV407");
  if(el){ el.textContent=msg; el.classList.toggle("comms-cache-error-v407",!!err); }
  try{ if(typeof toast==="function") toast(msg); }catch(e){}
}
async function clearCommsOldCachesV407(){
  try{
    if(typeof clearOldStalkerNetCachesV3998==="function"){ await clearOldStalkerNetCachesV3998(); commsCacheStatusV407("Old StalkerNet caches cleared."); return true; }
    if(!("caches" in window)){ commsCacheStatusV407("Cache API unavailable.",true); return false; }
    const names=await caches.keys(); let n=0;
    await Promise.all(names.map(name=>{
      const isSN=name.startsWith("stalkernet-cache-")||name.toLowerCase().includes("stalkernet");
      if(isSN && name!=="stalkernet-cache-v407-settings-cache-split"){ n++; return caches.delete(name); }
      return Promise.resolve(false);
    }));
    commsCacheStatusV407(n?`Cleared ${n} old cache${n===1?"":"s"}.`:"No old StalkerNet caches found.");
    return true;
  }catch(e){ commsCacheStatusV407("Cache cleanup failed: "+(e.message||"unknown error."),true); return false; }
}
async function refreshCommsAppV407(){
  try{
    await clearCommsOldCachesV407();
    const url=new URL(location.href);
    url.searchParams.set("v","407");
    url.searchParams.set("refresh",Date.now().toString(36));
    location.href=url.toString();
  }catch(e){ commsCacheStatusV407("Refresh failed: "+(e.message||"try browser reload."),true); }
}
function bindCommsCacheButtonsV407(){
  const r=document.getElementById("refreshAppBtnCommsV407"), c=document.getElementById("clearOldCachesBtnCommsV407");
  if(r&&!r.dataset.v407Bound){ r.dataset.v407Bound="true"; r.addEventListener("click",e=>{e.preventDefault(); refreshCommsAppV407();});}
  if(c&&!c.dataset.v407Bound){ c.dataset.v407Bound="true"; c.addEventListener("click",e=>{e.preventDefault(); clearCommsOldCachesV407();});}
}
function placeCommsCachePanelV407(){
  const comms=commsTabV407(); if(!comms) return;
  let panel=document.getElementById("commsCacheToolsPanelV407") || makeCommsCachePanelV407();
  panel.classList.remove("hidden");
  const input=comms.querySelector(".input-row");
  if(input && panel.parentElement!==comms) input.insertAdjacentElement("afterend",panel);
  else if(input && panel.previousElementSibling!==input) input.insertAdjacentElement("afterend",panel);
  else if(panel.parentElement!==comms) comms.appendChild(panel);
  bindCommsCacheButtonsV407();
}
function moveAudioToSettingsOnlyV407(){
  const hub=settingsHubV407();
  try{ if(!document.getElementById("audioSettingsPanelV403") && typeof ensureAudioPanelVisibleV404==="function") ensureAudioPanelVisibleV404(); }catch(e){}
  const audio=document.getElementById("audioSettingsPanelV403");
  if(audio){
    audio.classList.remove("hidden");
    audio.classList.add("settings-module-v405","audio-settings-only-v407");
    audio.dataset.settingsOrderV405="10";
    if(audio.parentElement!==hub) hub.appendChild(audio);
  }
  const comms=commsTabV407();
  if(comms){
    comms.querySelectorAll(".audio-settings-panel-v403").forEach(p=>{ if(p!==audio) p.remove(); });
  }
  try{ if(typeof bindAudioSettingsV403==="function") bindAudioSettingsV403(); }catch(e){}
}
function keepSettingsPanelsV407(){
  const hub=settingsHubV407();
  const install=document.getElementById("installAppPanelV402");
  const cache=document.getElementById("cacheToolsPanelV3998");
  if(install){ install.classList.add("settings-module-v405","install-panel-settings-v407"); install.dataset.settingsOrderV405="20"; if(install.parentElement!==hub) hub.appendChild(install); }
  if(cache){
    cache.classList.add("settings-module-v405","settings-cache-panel-v407");
    cache.classList.remove("cache-tools-panel-inside-comms-v4001","cache-tools-panel-tight-v4000","cache-tools-panel-contained-v3999");
    cache.dataset.settingsOrderV405="30";
    if(cache.parentElement!==hub) hub.appendChild(cache);
    const st=document.getElementById("cacheStatusV3998");
    if(st) st.textContent="Current build: v4.3.5. Settings ready.";
  }
  Array.from(hub.children).sort((a,b)=>Number(a.dataset.settingsOrderV405||99)-Number(b.dataset.settingsOrderV405||99)).forEach(x=>hub.appendChild(x));
  try{ if(typeof bindPwaInstallV402==="function") bindPwaInstallV402(); }catch(e){}
  try{ if(typeof bindCacheToolsV3998==="function") bindCacheToolsV3998(); }catch(e){}
}
function setupSettingsCacheSplitV407(){
  try{ if(typeof fixSettingsLayoutV406==="function") fixSettingsLayoutV406(); }catch(e){}
  placeCommsCachePanelV407();
  moveAudioToSettingsOnlyV407();
  keepSettingsPanelsV407();
}
window.addEventListener("load",()=>[80,400,1200,2400].forEach(t=>setTimeout(setupSettingsCacheSplitV407,t)));
document.addEventListener("click",e=>{
  const t=e.target;
  if(t?.closest?.(".nav-btn,[data-tab],#messagesTab,#commsTab,#settingsTab,#commsCacheToolsPanelV407")) setTimeout(setupSettingsCacheSplitV407,150);
},true);
window.setupSettingsCacheSplitV407=setupSettingsCacheSplitV407;



// v4.3.5 Strict Settings/Comms cleanup
// Comms keeps only the small quick cache panel.
// Settings keeps Audio Cues, App Install, and full Cache Maintenance.

function getCommsTabV408() {
  return document.getElementById("messagesTab") || document.getElementById("commsTab");
}

function getSettingsHubV408() {
  let settings = document.getElementById("settingsTab");
  if (!settings) {
    settings = document.createElement("section");
    settings.id = "settingsTab";
    settings.className = "tab-panel hidden settings-tab-v405 settings-tab-fixed-v406";
    settings.innerHTML = `
      <div class="section-top"><h2>Settings</h2></div>
      <article class="module-panel settings-hub-card-v405">
        <div class="module-label">PDA SETTINGS</div>
        <p class="message-text">Device tools and local preferences live here.</p>
      </article>
      <div id="settingsHubV405" class="settings-hub-v405"></div>
    `;
    const main = document.querySelector("main") || document.body;
    const nav = document.querySelector(".bottom-nav") || document.querySelector(".tab-nav") || document.querySelector("nav");
    if (nav && nav.parentElement === main) main.insertBefore(settings, nav);
    else main.appendChild(settings);
  }

  let hub = document.getElementById("settingsHubV405");
  if (!hub) {
    hub = document.createElement("div");
    hub.id = "settingsHubV405";
    hub.className = "settings-hub-v405";
    settings.appendChild(hub);
  }

  return hub;
}

function ensureCommsQuickCacheV408() {
  const comms = getCommsTabV408();
  if (!comms) return;

  let quick = document.getElementById("commsCacheToolsPanelV407");
  if (!quick) {
    quick = document.createElement("section");
    quick.id = "commsCacheToolsPanelV407";
    quick.className = "comms-cache-tools-panel-v407 module-panel";
    quick.innerHTML = `
      <div class="module-label">CACHE MAINTENANCE</div>
      <p id="commsCacheStatusV407" class="message-text comms-cache-status-v407">Quick cache tools for this device.</p>
      <div class="comms-cache-actions-v407">
        <button id="refreshAppBtnCommsV407" class="small-btn">Refresh App</button>
        <button id="clearOldCachesBtnCommsV407" class="small-btn">Clear Old Caches</button>
      </div>
    `;
  }

  quick.classList.remove("hidden");
  quick.classList.add("comms-cache-panel-visible-v408");

  const input = comms.querySelector(".input-row");
  if (input && quick.previousElementSibling !== input) {
    input.insertAdjacentElement("afterend", quick);
  } else if (!input && quick.parentElement !== comms) {
    comms.appendChild(quick);
  }

  const refresh = document.getElementById("refreshAppBtnCommsV407");
  const clear = document.getElementById("clearOldCachesBtnCommsV407");

  if (refresh && !refresh.dataset.v408Bound) {
    refresh.dataset.v408Bound = "true";
    refresh.addEventListener("click", event => {
      event.preventDefault();
      if (typeof refreshCommsAppV407 === "function") refreshCommsAppV407();
      else {
        const url = new URL(location.href);
        url.searchParams.set("v", "435");
        url.searchParams.set("refresh", Date.now().toString(36));
        location.href = url.toString();
      }
    });
  }

  if (clear && !clear.dataset.v408Bound) {
    clear.dataset.v408Bound = "true";
    clear.addEventListener("click", event => {
      event.preventDefault();
      if (typeof clearCommsOldCachesV407 === "function") clearCommsOldCachesV407();
      else if ("caches" in window) {
        caches.keys().then(keys => Promise.all(keys.map(key => {
          if ((key.startsWith("stalkernet-cache-") || key.toLowerCase().includes("stalkernet")) && key !== "stalkernet-cache-v408-settings-split-cleanup") {
            return caches.delete(key);
          }
          return false;
        })));
      }
    });
  }
}

function moveSettingsModulesV408() {
  const hub = getSettingsHubV408();
  const comms = getCommsTabV408();

  // Full cache panel belongs in Settings only.
  const fullCache = document.getElementById("cacheToolsPanelV3998");
  if (fullCache) {
    fullCache.classList.remove(
      "cache-tools-panel-inside-comms-v4001",
      "cache-tools-panel-tight-v4000",
      "cache-tools-panel-contained-v3999",
      "comms-cache-panel-visible-v407"
    );
    fullCache.classList.add("settings-module-v405", "settings-cache-panel-v408");
    fullCache.dataset.settingsOrderV405 = "30";

    if (fullCache.parentElement !== hub) hub.appendChild(fullCache);

    const status = document.getElementById("cacheStatusV3998");
    if (status) status.textContent = "Current build: v4.3.5. Settings ready.";
  }

  // Audio belongs in Settings only and should NOT be nested inside cache panel.
  let audio = document.getElementById("audioSettingsPanelV403");

  if (!audio) {
    try {
      if (typeof ensureAudioPanelVisibleV404 === "function") ensureAudioPanelVisibleV404();
    } catch (error) {}
    audio = document.getElementById("audioSettingsPanelV403");
  }

  if (audio) {
    audio.classList.remove("hidden");
    audio.classList.add("settings-module-v405", "audio-settings-only-v408");
    audio.dataset.settingsOrderV405 = "10";
    if (audio.parentElement !== hub) hub.appendChild(audio);
  }

  // App install belongs in Settings only.
  const install = document.getElementById("installAppPanelV402");
  if (install) {
    install.classList.add("settings-module-v405", "install-panel-settings-v408");
    install.dataset.settingsOrderV405 = "20";
    if (install.parentElement !== hub) hub.appendChild(install);
  }

  // Remove accidental duplicates inside Comms.
  if (comms) {
    Array.from(comms.querySelectorAll("#cacheToolsPanelV3998, #audioSettingsPanelV403, #installAppPanelV402, .audio-settings-panel-v403")).forEach(panel => {
      if (panel.id === "commsCacheToolsPanelV407") return;
      if (panel.id === "cacheToolsPanelV3998" || panel.id === "audioSettingsPanelV403" || panel.id === "installAppPanelV402" || panel.classList.contains("audio-settings-panel-v403")) {
        if (panel.id === "cacheToolsPanelV3998" && fullCache) return;
        if (panel.id === "audioSettingsPanelV403" && audio) return;
        if (panel.id === "installAppPanelV402" && install) return;
        panel.remove();
      }
    });
  }

  // Sort Settings modules.
  Array.from(hub.children)
    .sort((a, b) => Number(a.dataset.settingsOrderV405 || 99) - Number(b.dataset.settingsOrderV405 || 99))
    .forEach(child => hub.appendChild(child));

  try { if (typeof bindAudioSettingsV403 === "function") bindAudioSettingsV403(); } catch (error) {}
  try { if (typeof bindPwaInstallV402 === "function") bindPwaInstallV402(); } catch (error) {}
  try { if (typeof bindCacheToolsV3998 === "function") bindCacheToolsV3998(); } catch (error) {}
}

function strictSettingsCommsCleanupV408() {
  try { if (typeof fixSettingsLayoutV406 === "function") fixSettingsLayoutV406(); } catch (error) {}
  moveSettingsModulesV408();
  ensureCommsQuickCacheV408();

  // Force final visibility rules.
  const comms = getCommsTabV408();
  if (comms) {
    comms.querySelectorAll(".audio-settings-panel-v403").forEach(el => {
      if (!el.closest("#settingsTab")) el.remove();
    });
  }
}

window.addEventListener("load", () => {
  [50, 250, 750, 1500, 3000].forEach(t => setTimeout(strictSettingsCommsCleanupV408, t));
});

document.addEventListener("click", event => {
  const target = event.target;
  if (target?.closest?.(".nav-btn, [data-tab], #messagesTab, #commsTab, #settingsTab, #commsCacheToolsPanelV407, #cacheToolsPanelV3998")) {
    setTimeout(strictSettingsCommsCleanupV408, 80);
    setTimeout(strictSettingsCommsCleanupV408, 300);
  }
}, true);

window.strictSettingsCommsCleanupV408 = strictSettingsCommsCleanupV408;




// v4.3.5 Stop full Cache/Audio from reappearing in Comms
function getCommsTabV409() {
  return document.getElementById("messagesTab") || document.getElementById("commsTab");
}

function getSettingsHubV409() {
  let settings = document.getElementById("settingsTab");
  if (!settings) {
    settings = document.createElement("section");
    settings.id = "settingsTab";
    settings.className = "tab-panel hidden settings-tab-v405 settings-tab-fixed-v406";
    settings.innerHTML = `
      <div class="section-top"><h2>Settings</h2></div>
      <article class="module-panel settings-hub-card-v405">
        <div class="module-label">PDA SETTINGS</div>
        <p class="message-text">Device tools and local preferences live here.</p>
      </article>
      <div id="settingsHubV405" class="settings-hub-v405"></div>
    `;

    const main = document.querySelector("main") || document.body;
    const nav = document.querySelector(".bottom-nav") || document.querySelector(".tab-nav") || document.querySelector("nav");
    if (nav && nav.parentElement === main) main.insertBefore(settings, nav);
    else main.appendChild(settings);
  }

  let hub = document.getElementById("settingsHubV405");
  if (!hub) {
    hub = document.createElement("div");
    hub.id = "settingsHubV405";
    hub.className = "settings-hub-v405";
    settings.appendChild(hub);
  }

  return hub;
}

function ensureQuickCommsCacheV409() {
  const comms = getCommsTabV409();
  if (!comms) return;

  let quick = document.getElementById("commsCacheToolsPanelV407");
  if (!quick) {
    quick = document.createElement("section");
    quick.id = "commsCacheToolsPanelV407";
    quick.className = "comms-cache-tools-panel-v407 module-panel";
    quick.innerHTML = `
      <div class="module-label">CACHE MAINTENANCE</div>
      <p id="commsCacheStatusV407" class="message-text comms-cache-status-v407">Quick cache tools for this device.</p>
      <div class="comms-cache-actions-v407">
        <button id="refreshAppBtnCommsV407" class="small-btn">Refresh App</button>
        <button id="clearOldCachesBtnCommsV407" class="small-btn">Clear Old Caches</button>
      </div>
    `;
  }

  quick.classList.remove("hidden");
  quick.classList.add("comms-cache-panel-visible-v409");

  const input = comms.querySelector(".input-row");
  if (input && quick.previousElementSibling !== input) {
    input.insertAdjacentElement("afterend", quick);
  } else if (!input && quick.parentElement !== comms) {
    comms.appendChild(quick);
  }

  const refresh = document.getElementById("refreshAppBtnCommsV407");
  const clear = document.getElementById("clearOldCachesBtnCommsV407");

  if (refresh && !refresh.dataset.v409Bound) {
    refresh.dataset.v409Bound = "true";
    refresh.addEventListener("click", event => {
      event.preventDefault();
      if (typeof refreshCommsAppV407 === "function") refreshCommsAppV407();
      else {
        const url = new URL(location.href);
        url.searchParams.set("v", "435");
        url.searchParams.set("refresh", Date.now().toString(36));
        location.href = url.toString();
      }
    });
  }

  if (clear && !clear.dataset.v409Bound) {
    clear.dataset.v409Bound = "true";
    clear.addEventListener("click", event => {
      event.preventDefault();
      if (typeof clearCommsOldCachesV407 === "function") clearCommsOldCachesV407();
      else if ("caches" in window) {
        caches.keys().then(keys => Promise.all(keys.map(key => {
          const isStalkerNet = key.startsWith("stalkernet-cache-") || key.toLowerCase().includes("stalkernet");
          if (isStalkerNet && key !== "stalkernet-cache-v409-settings-reappear-fix") return caches.delete(key);
          return false;
        })));
      }
    });
  }
}

function exileFullSettingsPanelsFromCommsV409() {
  const hub = getSettingsHubV409();
  const comms = getCommsTabV409();

  const fullCache = document.getElementById("cacheToolsPanelV3998");
  const audio = document.getElementById("audioSettingsPanelV403");
  const install = document.getElementById("installAppPanelV402");

  if (audio) {
    audio.classList.remove("hidden");
    audio.classList.add("settings-module-v405", "audio-settings-only-v409");
    audio.dataset.settingsOrderV405 = "10";
    if (audio.parentElement !== hub) hub.appendChild(audio);
  }

  if (install) {
    install.classList.add("settings-module-v405", "install-panel-settings-v409");
    install.dataset.settingsOrderV405 = "20";
    if (install.parentElement !== hub) hub.appendChild(install);
  }

  if (fullCache) {
    fullCache.classList.remove(
      "cache-tools-panel-inside-comms-v4001",
      "cache-tools-panel-tight-v4000",
      "cache-tools-panel-contained-v3999",
      "comms-cache-panel-visible-v407",
      "comms-cache-panel-visible-v408",
      "comms-cache-panel-visible-v409"
    );
    fullCache.classList.add("settings-module-v405", "settings-cache-panel-v409");
    fullCache.dataset.settingsOrderV405 = "30";
    if (fullCache.parentElement !== hub) hub.appendChild(fullCache);

    const status = document.getElementById("cacheStatusV3998");
    if (status) status.textContent = "Current build: v4.3.5. Settings ready.";
  }

  // Remove cloned/duplicate audio panels if an old function created another inside Comms.
  if (comms) {
    comms.querySelectorAll(".audio-settings-panel-v403, #audioSettingsPanelV403").forEach(panel => {
      if (panel !== audio) panel.remove();
    });

    comms.querySelectorAll("#cacheToolsPanelV3998, #installAppPanelV402").forEach(panel => {
      // They should already have been moved by ID. Anything still here is a duplicate.
      if (panel !== fullCache && panel !== install) panel.remove();
    });
  }

  Array.from(hub.children)
    .sort((a, b) => Number(a.dataset.settingsOrderV405 || 99) - Number(b.dataset.settingsOrderV405 || 99))
    .forEach(child => hub.appendChild(child));

  try { if (typeof bindAudioSettingsV403 === "function") bindAudioSettingsV403(); } catch (error) {}
  try { if (typeof bindPwaInstallV402 === "function") bindPwaInstallV402(); } catch (error) {}
  try { if (typeof bindCacheToolsV3998 === "function") bindCacheToolsV3998(); } catch (error) {}
}

// Override older helpers that were dragging panels into Comms.
window.placeCachePanelInsideCommsV4001 = function() {
  ensureQuickCommsCacheV409();
  exileFullSettingsPanelsFromCommsV409();
};

window.tightenCachePanelSpacingV4000 = function() {
  ensureQuickCommsCacheV409();
  exileFullSettingsPanelsFromCommsV409();
};

window.placeCachePanelSafelyV3999 = function() {
  ensureQuickCommsCacheV409();
  exileFullSettingsPanelsFromCommsV409();
};

window.ensureAudioPanelVisibleV404 = function() {
  exileFullSettingsPanelsFromCommsV409();
};

window.moveAudioOnlyToSettingsV407 = function() {
  exileFullSettingsPanelsFromCommsV409();
};

window.moveSettingsModulesV408 = function() {
  exileFullSettingsPanelsFromCommsV409();
};

function finalSettingsCommsCleanupV409() {
  try { if (typeof fixSettingsLayoutV406 === "function") fixSettingsLayoutV406(); } catch (error) {}
  ensureQuickCommsCacheV409();
  exileFullSettingsPanelsFromCommsV409();
}

// Watch for old scripts re-inserting the full panels after Comms is tapped.
let settingsCommsObserverV409 = null;

function startSettingsCommsObserverV409() {
  if (settingsCommsObserverV409) return;

  settingsCommsObserverV409 = new MutationObserver(() => {
    clearTimeout(window.__settingsCommsObserverTimerV409);
    window.__settingsCommsObserverTimerV409 = setTimeout(finalSettingsCommsCleanupV409, 40);
  });

  const root = document.querySelector("main") || document.body;
  if (root) {
    settingsCommsObserverV409.observe(root, {
      childList: true,
      subtree: true
    });
  }
}

window.addEventListener("load", () => {
  startSettingsCommsObserverV409();
  [40, 150, 400, 900, 1800, 3200].forEach(t => setTimeout(finalSettingsCommsCleanupV409, t));
});

document.addEventListener("click", event => {
  const target = event.target;
  if (target?.closest?.(".nav-btn, [data-tab], #messagesTab, #commsTab, #settingsTab, #commsCacheToolsPanelV407, #cacheToolsPanelV3998")) {
    setTimeout(finalSettingsCommsCleanupV409, 20);
    setTimeout(finalSettingsCommsCleanupV409, 120);
    setTimeout(finalSettingsCommsCleanupV409, 450);
    setTimeout(finalSettingsCommsCleanupV409, 1000);
  }
}, true);

window.finalSettingsCommsCleanupV409 = finalSettingsCommsCleanupV409;




// v4.3.5 Restore Audio Controls inside Settings only
const AUDIO_SETTINGS_KEY_V410 = "stalkernet_audio_settings_v403";

function getSettingsHubV410() {
  let settings = document.getElementById("settingsTab");
  if (!settings) {
    settings = document.createElement("section");
    settings.id = "settingsTab";
    settings.className = "tab-panel hidden settings-tab-v405 settings-tab-fixed-v406";
    settings.innerHTML = `
      <div class="section-top"><h2>Settings</h2></div>
      <article class="module-panel settings-hub-card-v405">
        <div class="module-label">PDA SETTINGS</div>
        <p class="message-text">Device tools and local preferences live here.</p>
      </article>
      <div id="settingsHubV405" class="settings-hub-v405"></div>
    `;
    const main = document.querySelector("main") || document.body;
    const nav = document.querySelector(".bottom-nav") || document.querySelector(".tab-nav") || document.querySelector("nav");
    if (nav && nav.parentElement === main) main.insertBefore(settings, nav);
    else main.appendChild(settings);
  }

  let hub = document.getElementById("settingsHubV405");
  if (!hub) {
    hub = document.createElement("div");
    hub.id = "settingsHubV405";
    hub.className = "settings-hub-v405";
    settings.appendChild(hub);
  }

  return hub;
}

function loadAudioSettingsV410() {
  try {
    const saved = JSON.parse(localStorage.getItem(AUDIO_SETTINGS_KEY_V410) || "null");
    return {
      enabled: saved?.enabled !== false,
      volume: Number.isFinite(Number(saved?.volume)) ? Number(saved.volume) : 0.5
    };
  } catch (error) {
    return { enabled: true, volume: 0.5 };
  }
}

function saveAudioSettingsV410(settings) {
  const clean = {
    enabled: !!settings.enabled,
    volume: Math.min(1, Math.max(0, Number(settings.volume)))
  };
  localStorage.setItem(AUDIO_SETTINGS_KEY_V410, JSON.stringify(clean));
  window.audioSettingsV403 = clean;
  return clean;
}

function ensureAudioControlsInSettingsV410() {
  const hub = getSettingsHubV410();
  let audio = document.getElementById("audioSettingsPanelV403");

  if (!audio) {
    audio = document.createElement("div");
    audio.id = "audioSettingsPanelV403";
    audio.className = "audio-settings-panel-v403 audio-settings-only-v410 settings-module-v405";
    audio.innerHTML = `
      <div class="module-label">AUDIO CUES</div>
      <p id="audioStatusV403" class="message-text audio-status-v403">Audio cues are local to this device.</p>
      <div class="audio-actions-v403">
        <button id="toggleAudioBtnV403" class="small-btn">Audio Cues: On</button>
        <button id="testAudioBtnV403" class="small-btn">Test Cue</button>
      </div>
      <label class="audio-volume-row-v403" for="audioVolumeSliderV403">
        <span>Volume</span>
        <input id="audioVolumeSliderV403" type="range" min="0" max="100" value="50" />
        <strong id="audioVolumeValueV403">50%</strong>
      </label>
    `;
  }

  audio.classList.remove("hidden");
  audio.classList.add("audio-settings-only-v410", "settings-module-v405");
  audio.dataset.settingsOrderV405 = "10";

  if (audio.parentElement !== hub) {
    hub.appendChild(audio);
  }

  // Remove accidental Comms copies, but do not remove the real Settings panel.
  const comms = document.getElementById("messagesTab") || document.getElementById("commsTab");
  if (comms) {
    comms.querySelectorAll(".audio-settings-panel-v403, #audioSettingsPanelV403").forEach(panel => {
      if (panel !== audio) panel.remove();
    });
  }

  bindAudioControlsV410();
  sortSettingsModulesV410();
}

function sortSettingsModulesV410() {
  const hub = getSettingsHubV410();
  Array.from(hub.children)
    .sort((a, b) => Number(a.dataset.settingsOrderV405 || 99) - Number(b.dataset.settingsOrderV405 || 99))
    .forEach(child => hub.appendChild(child));
}

function audioStatusV410(message, isError = false) {
  const el = document.getElementById("audioStatusV403");
  if (el) {
    el.textContent = message;
    el.classList.toggle("audio-error-v403", !!isError);
    el.classList.toggle("audio-ok-v403", !isError);
  }

  try { if (typeof toast === "function") toast(message); } catch (error) {}
}

function updateAudioControlsV410() {
  const settings = loadAudioSettingsV410();
  const toggle = document.getElementById("toggleAudioBtnV403");
  const slider = document.getElementById("audioVolumeSliderV403");
  const value = document.getElementById("audioVolumeValueV403");

  if (toggle) {
    toggle.textContent = settings.enabled ? "Audio Cues: On" : "Audio Cues: Off";
    toggle.classList.toggle("audio-disabled-v403", !settings.enabled);
  }

  if (slider) slider.value = String(Math.round(settings.volume * 100));
  if (value) value.textContent = `${Math.round(settings.volume * 100)}%`;

  audioStatusV410(settings.enabled ? "Audio cues enabled for this device." : "Audio cues muted for this device.");
}

function patchAudioPlaybackV410() {
  const settings = loadAudioSettingsV410();

  document.querySelectorAll("audio").forEach(audio => {
    try {
      audio.volume = settings.volume;
      audio.muted = !settings.enabled || settings.volume <= 0;
    } catch (error) {}
  });
}

function testAudioCueV410() {
  const settings = loadAudioSettingsV410();
  if (!settings.enabled || settings.volume <= 0) {
    audioStatusV410("Audio cues are muted.");
    return;
  }

  try {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) {
      audioStatusV410("Audio test unavailable in this browser.", true);
      return;
    }

    const ctx = new AC();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "square";
    osc.frequency.value = 520;
    gain.gain.value = 0.035 * settings.volume;

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();

    setTimeout(() => {
      osc.stop();
      ctx.close?.();
    }, 95);

    audioStatusV410("Test cue played.");
  } catch (error) {
    audioStatusV410("Audio test failed: " + (error.message || "browser blocked playback."), true);
  }
}

function bindAudioControlsV410() {
  const toggle = document.getElementById("toggleAudioBtnV403");
  const test = document.getElementById("testAudioBtnV403");
  const slider = document.getElementById("audioVolumeSliderV403");

  if (toggle && !toggle.dataset.v410Bound) {
    toggle.dataset.v410Bound = "true";
    toggle.addEventListener("click", event => {
      event.preventDefault();
      const settings = loadAudioSettingsV410();
      saveAudioSettingsV410({ ...settings, enabled: !settings.enabled });
      patchAudioPlaybackV410();
      updateAudioControlsV410();
    });
  }

  if (test && !test.dataset.v410Bound) {
    test.dataset.v410Bound = "true";
    test.addEventListener("click", event => {
      event.preventDefault();
      testAudioCueV410();
    });
  }

  if (slider && !slider.dataset.v410Bound) {
    slider.dataset.v410Bound = "true";
    slider.addEventListener("input", event => {
      const settings = loadAudioSettingsV410();
      saveAudioSettingsV410({ ...settings, volume: Number(event.target.value) / 100 });
      patchAudioPlaybackV410();
      updateAudioControlsV410();
    });
  }

  updateAudioControlsV410();
  patchAudioPlaybackV410();
}

// Override the v4.3.5 muted helper with a safe version that creates Settings audio.
window.ensureAudioPanelVisibleV404 = function() {
  ensureAudioControlsInSettingsV410();
};

const oldFinalSettingsCommsCleanupV409 = window.finalSettingsCommsCleanupV409;
window.finalSettingsCommsCleanupV409 = function(...args) {
  if (typeof oldFinalSettingsCommsCleanupV409 === "function") {
    try { oldFinalSettingsCommsCleanupV409.apply(this, args); } catch (error) {}
  }
  ensureAudioControlsInSettingsV410();
};

window.addEventListener("load", () => {
  [80, 350, 900, 1800, 3200].forEach(t => setTimeout(ensureAudioControlsInSettingsV410, t));
});

document.addEventListener("click", event => {
  const target = event.target;
  if (target?.closest?.("#settingsTab, [data-tab='settingsTab'], .settings-nav-v405, .settings-nav-fixed-v406, .nav-btn")) {
    setTimeout(ensureAudioControlsInSettingsV410, 80);
    setTimeout(ensureAudioControlsInSettingsV410, 350);
  }
}, true);

window.ensureAudioControlsInSettingsV410 = ensureAudioControlsInSettingsV410;
window.testAudioCueV410 = testAudioCueV410;



// v4.3.5 Online / Last Seen Presence
const STALKERNET_BUILD_V411 = "v4.3.5";
window.__presenceHeartbeatV411 = null;
window.__lastPresenceWriteV411 = 0;

function presenceUserV411() {
  try {
    if (typeof currentUser !== "undefined" && currentUser) return currentUser;
    if (typeof auth !== "undefined" && auth?.currentUser) return auth.currentUser;
  } catch (error) {}
  return null;
}

function presenceDbV411() {
  try {
    if (typeof db !== "undefined" && db) return db;
    if (typeof firestore !== "undefined" && firestore) return firestore;
  } catch (error) {}
  return null;
}

function settingsHubV411() {
  let hub = document.getElementById("settingsHubV405");
  if (hub) return hub;

  let settings = document.getElementById("settingsTab");
  if (!settings) {
    settings = document.createElement("section");
    settings.id = "settingsTab";
    settings.className = "tab-panel hidden settings-tab-v405 settings-tab-fixed-v406";
    settings.innerHTML = `
      <div class="section-top"><h2>Settings</h2></div>
      <article class="module-panel settings-hub-card-v405">
        <div class="module-label">PDA SETTINGS</div>
        <p class="message-text">Device tools and local preferences live here.</p>
      </article>
      <div id="settingsHubV405" class="settings-hub-v405"></div>
    `;
    const main = document.querySelector("main") || document.body;
    const nav = document.querySelector(".bottom-nav") || document.querySelector(".tab-nav") || document.querySelector("nav");
    if (nav && nav.parentElement === main) main.insertBefore(settings, nav);
    else main.appendChild(settings);
  }

  hub = document.getElementById("settingsHubV405");
  if (!hub) {
    hub = document.createElement("div");
    hub.id = "settingsHubV405";
    hub.className = "settings-hub-v405";
    settings.appendChild(hub);
  }

  return hub;
}

function createPresencePanelV411() {
  let panel = document.getElementById("presencePanelV411");
  if (panel) return panel;

  panel = document.createElement("div");
  panel.id = "presencePanelV411";
  panel.className = "presence-panel-v411 settings-module-v405";
  panel.dataset.settingsOrderV405 = "15";
  panel.innerHTML = `
    <div class="module-label">ONLINE PRESENCE</div>
    <p id="presenceStatusV411" class="message-text presence-status-v411">Presence waiting for login.</p>
    <div class="presence-grid-v411">
      <div><span>State</span><strong id="presenceStateV411">Unknown</strong></div>
      <div><span>Last Seen</span><strong id="presenceLastSeenV411">Unknown</strong></div>
      <div><span>Build</span><strong>${STALKERNET_BUILD_V411}</strong></div>
    </div>
    <div class="presence-actions-v411">
      <button id="presenceRefreshBtnV411" class="small-btn">Refresh Presence</button>
      <button id="presenceOfflineBtnV411" class="small-btn">Set Offline</button>
    </div>
  `;

  return panel;
}

function installPresencePanelV411() {
  const hub = settingsHubV411();
  const panel = createPresencePanelV411();

  if (panel.parentElement !== hub) hub.appendChild(panel);

  Array.from(hub.children)
    .sort((a, b) => Number(a.dataset.settingsOrderV405 || 99) - Number(b.dataset.settingsOrderV405 || 99))
    .forEach(child => hub.appendChild(child));

  bindPresencePanelV411();
}

function presenceStatusV411(message, isError = false) {
  const el = document.getElementById("presenceStatusV411");
  if (el) {
    el.textContent = message;
    el.classList.toggle("presence-error-v411", !!isError);
    el.classList.toggle("presence-ok-v411", !isError);
  }
  try { if (typeof toast === "function") toast(message); } catch (error) {}
}

function formatPresenceTimeV411(value) {
  if (!value) return "Unknown";

  let date = null;

  try {
    if (typeof value.toDate === "function") date = value.toDate();
    else if (value.seconds) date = new Date(value.seconds * 1000);
    else if (typeof value === "number") date = new Date(value);
    else if (typeof value === "string") date = new Date(value);
  } catch (error) {}

  if (!date || Number.isNaN(date.getTime())) return "Unknown";

  const diff = Date.now() - date.getTime();
  if (diff < 30_000) return "Just now";
  if (diff < 90_000) return "About 1 min ago";
  if (diff < 60 * 60_000) return `${Math.round(diff / 60_000)} mins ago`;
  if (diff < 24 * 60 * 60_000) return `${Math.round(diff / 60 / 60_000)} hours ago`;
  return date.toLocaleDateString();
}

function updatePresenceUiV411(data = {}) {
  const stateEl = document.getElementById("presenceStateV411");
  const lastEl = document.getElementById("presenceLastSeenV411");

  const online = data.online === true;
  const lastSeen = data.lastSeen || data.lastSeenLocal || Date.now();

  if (stateEl) {
    stateEl.textContent = online ? "Online" : "Offline";
    stateEl.classList.toggle("presence-online-v411", online);
    stateEl.classList.toggle("presence-offline-v411", !online);
  }

  if (lastEl) lastEl.textContent = formatPresenceTimeV411(lastSeen);
}

async function writePresenceV411(online = true, showStatus = false) {
  const user = presenceUserV411();
  const database = presenceDbV411();

  installPresencePanelV411();

  if (!user) {
    if (showStatus) presenceStatusV411("Presence failed: sign in first.", true);
    updatePresenceUiV411({ online: false, lastSeenLocal: Date.now() });
    return false;
  }

  if (!database?.collection) {
    if (showStatus) presenceStatusV411("Presence failed: Firestore unavailable.", true);
    return false;
  }

  // Avoid writing too aggressively.
  if (online && Date.now() - window.__lastPresenceWriteV411 < 25_000 && !showStatus) return true;
  window.__lastPresenceWriteV411 = Date.now();

  try {
    const payload = {
      uid: user.uid,
      ownerId: user.uid,
      email: user.email || "",
      online: !!online,
      lastSeenLocal: Date.now(),
      activeBuild: STALKERNET_BUILD_V411,
      activeTab: document.querySelector(".nav-btn.active")?.dataset?.tab || "",
      userAgentShort: navigator.userAgent.slice(0, 120)
    };

    if (typeof firebase !== "undefined" && firebase.firestore?.FieldValue?.serverTimestamp) {
      payload.lastSeen = firebase.firestore.FieldValue.serverTimestamp();
      payload.presenceUpdatedAt = firebase.firestore.FieldValue.serverTimestamp();
    } else {
      payload.lastSeen = new Date().toISOString();
      payload.presenceUpdatedAt = new Date().toISOString();
    }

    await Promise.allSettled([
      database.collection("users").doc(user.uid).set(payload, { merge: true }),
      database.collection("profiles").doc(user.uid).set(payload, { merge: true })
    ]);

    updatePresenceUiV411({ ...payload, lastSeen: payload.lastSeenLocal });
    if (showStatus) presenceStatusV411(online ? "Presence synced: online." : "Presence synced: offline.");
    else presenceStatusV411(online ? "Presence online." : "Presence offline.");
    return true;
  } catch (error) {
    presenceStatusV411("Presence sync failed: " + (error.message || "check rules."), true);
    return false;
  }
}

async function readPresenceV411(showStatus = false) {
  const user = presenceUserV411();
  const database = presenceDbV411();

  installPresencePanelV411();

  if (!user || !database?.collection) {
    if (showStatus) presenceStatusV411("Presence unavailable until signed in.", true);
    return false;
  }

  try {
    const doc = await database.collection("users").doc(user.uid).get();
    const data = doc.exists ? doc.data() : {};
    updatePresenceUiV411(data);
    if (showStatus) presenceStatusV411("Presence refreshed.");
    return true;
  } catch (error) {
    presenceStatusV411("Presence refresh failed: " + (error.message || "check rules."), true);
    return false;
  }
}

function startPresenceHeartbeatV411() {
  clearInterval(window.__presenceHeartbeatV411);
  writePresenceV411(true, false);
  window.__presenceHeartbeatV411 = setInterval(() => writePresenceV411(true, false), 60_000);
}

function bindPresencePanelV411() {
  const refreshBtn = document.getElementById("presenceRefreshBtnV411");
  const offlineBtn = document.getElementById("presenceOfflineBtnV411");

  if (refreshBtn && !refreshBtn.dataset.v411Bound) {
    refreshBtn.dataset.v411Bound = "true";
    refreshBtn.addEventListener("click", event => {
      event.preventDefault();
      writePresenceV411(true, true);
      setTimeout(() => readPresenceV411(false), 650);
    });
  }

  if (offlineBtn && !offlineBtn.dataset.v411Bound) {
    offlineBtn.dataset.v411Bound = "true";
    offlineBtn.addEventListener("click", event => {
      event.preventDefault();
      writePresenceV411(false, true);
    });
  }
}

function addPresenceToStalkerCardV411(profile = {}) {
  const modal = document.getElementById("stalkerCardModal");
  const panel = modal?.querySelector(".stalker-card-panel");
  if (!panel) return;

  let strip = document.getElementById("cardPresenceStripV411");
  const anchor =
    document.getElementById("cardIntelStripV3995") ||
    panel.querySelector(".stalker-card-grid") ||
    panel.querySelector(".stalker-card-identity");

  if (!strip) {
    strip = document.createElement("div");
    strip.id = "cardPresenceStripV411";
    strip.className = "card-presence-strip-v411";
  }

  const online = profile.online === true;
  const lastSeen = profile.lastSeen || profile.lastSeenLocal || profile.presenceUpdatedAt;
  strip.innerHTML = `
    <div class="${online ? "presence-online-box-v411" : "presence-offline-box-v411"}">
      <span>${online ? "ONLINE" : "LAST SEEN"}</span>
      <strong>${online ? "Active now" : formatPresenceTimeV411(lastSeen)}</strong>
    </div>
  `;

  if (anchor && anchor.parentElement) {
    anchor.insertAdjacentElement("afterend", strip);
  } else {
    panel.appendChild(strip);
  }
}

if (typeof renderStalkerCard === "function" && !window.__presenceCardPatchedV411) {
  window.__presenceCardPatchedV411 = true;
  const originalRenderStalkerCardV411 = renderStalkerCard;
  renderStalkerCard = function(profile = {}, fallback = {}, lastMessage = null) {
    const result = originalRenderStalkerCardV411.apply(this, arguments);
    setTimeout(() => addPresenceToStalkerCardV411(profile || fallback || {}), 90);
    setTimeout(() => addPresenceToStalkerCardV411(profile || fallback || {}), 260);
    return result;
  };
}

window.addEventListener("beforeunload", () => {
  try { writePresenceV411(false, false); } catch (error) {}
});

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") writePresenceV411(true, false);
  else writePresenceV411(false, false);
});

window.addEventListener("load", () => {
  installPresencePanelV411();
  setTimeout(startPresenceHeartbeatV411, 1200);
  setTimeout(() => readPresenceV411(false), 2200);

  try {
    if (typeof auth !== "undefined" && auth?.onAuthStateChanged && !window.__presenceAuthBoundV411) {
      window.__presenceAuthBoundV411 = true;
      auth.onAuthStateChanged(user => {
        if (user) setTimeout(startPresenceHeartbeatV411, 800);
      });
    }
  } catch (error) {}
});

document.addEventListener("click", event => {
  const target = event.target;
  if (target?.closest?.("#settingsTab, [data-tab='settingsTab'], .nav-btn, [data-tab], .message-card")) {
    setTimeout(installPresencePanelV411, 120);
    setTimeout(() => writePresenceV411(true, false), 650);
  }
}, true);

window.writePresenceV411 = writePresenceV411;
window.readPresenceV411 = readPresenceV411;
window.installPresencePanelV411 = installPresencePanelV411;



// v4.3.5 Data Backup / Restore
const STALKERNET_BUILD_V412 = "v4.3.5";

function settingsHubV412() {
  let hub = document.getElementById("settingsHubV405");
  if (hub) return hub;

  let settings = document.getElementById("settingsTab");
  if (!settings) {
    settings = document.createElement("section");
    settings.id = "settingsTab";
    settings.className = "tab-panel hidden settings-tab-v405 settings-tab-fixed-v406";
    settings.innerHTML = `
      <div class="section-top"><h2>Settings</h2></div>
      <article class="module-panel settings-hub-card-v405">
        <div class="module-label">PDA SETTINGS</div>
        <p class="message-text">Device tools and local preferences live here.</p>
      </article>
      <div id="settingsHubV405" class="settings-hub-v405"></div>
    `;
    const main = document.querySelector("main") || document.body;
    const nav = document.querySelector(".bottom-nav") || document.querySelector(".tab-nav") || document.querySelector("nav");
    if (nav && nav.parentElement === main) main.insertBefore(settings, nav);
    else main.appendChild(settings);
  }

  hub = document.getElementById("settingsHubV405");
  if (!hub) {
    hub = document.createElement("div");
    hub.id = "settingsHubV405";
    hub.className = "settings-hub-v405";
    settings.appendChild(hub);
  }

  return hub;
}

function createBackupPanelV412() {
  let panel = document.getElementById("backupPanelV412");
  if (panel) return panel;

  panel = document.createElement("div");
  panel.id = "backupPanelV412";
  panel.className = "backup-panel-v412 settings-module-v405";
  panel.dataset.settingsOrderV405 = "40";
  panel.innerHTML = `
    <div class="module-label">DATA BACKUP</div>
    <p id="backupStatusV412" class="message-text backup-status-v412">Export local StalkerNet data before risky updates. Firebase cloud data is not deleted or changed.</p>
    <div class="backup-actions-v412">
      <button id="copyBackupBtnV412" class="small-btn">Copy Backup</button>
      <button id="downloadBackupBtnV412" class="small-btn">Download Backup</button>
    </div>
    <details class="backup-restore-box-v412">
      <summary>Restore from Backup</summary>
      <p class="message-text">Paste a StalkerNet backup JSON below, then press Restore. The app will reload afterward.</p>
      <textarea id="backupInputV412" placeholder="Paste backup JSON here..."></textarea>
      <button id="restoreBackupBtnV412" class="small-btn danger-lite-v412">Restore Local Backup</button>
    </details>
  `;

  return panel;
}

function backupStatusV412(message, isError = false) {
  const el = document.getElementById("backupStatusV412");
  if (el) {
    el.textContent = message;
    el.classList.toggle("backup-error-v412", !!isError);
    el.classList.toggle("backup-ok-v412", !isError);
  }
  try { if (typeof toast === "function") toast(message); } catch (error) {}
}

function collectLocalBackupV412() {
  const local = {};
  const session = {};

  try {
    Object.keys(localStorage).sort().forEach(key => {
      if (
        key.toLowerCase().includes("stalkernet") ||
        key.toLowerCase().includes("pda") ||
        key.toLowerCase().includes("audio")
      ) {
        local[key] = localStorage.getItem(key);
      }
    });
  } catch (error) {}

  try {
    Object.keys(sessionStorage).sort().forEach(key => {
      if (key.toLowerCase().includes("stalkernet") || key.toLowerCase().includes("pda")) {
        session[key] = sessionStorage.getItem(key);
      }
    });
  } catch (error) {}

  let appState = null;
  try {
    appState = JSON.parse(JSON.stringify(typeof state !== "undefined" ? state : null));
  } catch (error) {}

  return {
    app: "StalkerNet",
    backupVersion: "v4.3.5",
    createdAt: new Date().toISOString(),
    origin: location.origin,
    path: location.pathname,
    localStorage: local,
    sessionStorage: session,
    appState,
    note: "Local StalkerNet backup only. Does not contain Firebase Auth password or server-side Firestore data."
  };
}

function backupJsonV412() {
  return JSON.stringify(collectLocalBackupV412(), null, 2);
}

async function copyBackupV412() {
  const text = backupJsonV412();

  try {
    await navigator.clipboard.writeText(text);
    backupStatusV412("Backup copied to clipboard.");
    return true;
  } catch (error) {
    const input = document.getElementById("backupInputV412");
    if (input) {
      input.value = text;
      input.focus();
      input.select();
    }
    backupStatusV412("Clipboard blocked. Backup placed in restore box for manual copy.", true);
    return false;
  }
}

function downloadBackupV412() {
  try {
    const blob = new Blob([backupJsonV412()], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
    a.href = url;
    a.download = `stalkernet-backup-${stamp}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1500);
    backupStatusV412("Backup download started.");
    return true;
  } catch (error) {
    backupStatusV412("Download failed: " + (error.message || "copy backup instead."), true);
    return false;
  }
}

function validateBackupV412(payload) {
  if (!payload || typeof payload !== "object") throw new Error("Backup must be JSON object.");
  if (payload.app !== "StalkerNet") throw new Error("This does not look like a StalkerNet backup.");
  if (!payload.localStorage || typeof payload.localStorage !== "object") throw new Error("Backup has no localStorage section.");
  return true;
}

function restoreBackupV412() {
  const input = document.getElementById("backupInputV412");
  const raw = input?.value?.trim();

  if (!raw) {
    backupStatusV412("Paste a backup JSON first.", true);
    return false;
  }

  let payload = null;

  try {
    payload = JSON.parse(raw);
    validateBackupV412(payload);
  } catch (error) {
    backupStatusV412("Invalid backup: " + (error.message || "JSON parse failed."), true);
    return false;
  }

  if (!confirm("Restore this local StalkerNet backup? This replaces local app data on this device, then reloads the app.")) {
    return false;
  }

  try {
    const local = payload.localStorage || {};
    Object.keys(local).forEach(key => {
      if (
        key.toLowerCase().includes("stalkernet") ||
        key.toLowerCase().includes("pda") ||
        key.toLowerCase().includes("audio")
      ) {
        localStorage.setItem(key, local[key]);
      }
    });

    const session = payload.sessionStorage || {};
    Object.keys(session).forEach(key => {
      if (key.toLowerCase().includes("stalkernet") || key.toLowerCase().includes("pda")) {
        sessionStorage.setItem(key, session[key]);
      }
    });

    backupStatusV412("Backup restored. Reloading...");
    setTimeout(() => {
      const url = new URL(location.href);
      url.searchParams.set("v", "435");
      url.searchParams.set("restore", Date.now().toString(36));
      location.href = url.toString();
    }, 700);

    return true;
  } catch (error) {
    backupStatusV412("Restore failed: " + (error.message || "unknown error."), true);
    return false;
  }
}

function installBackupPanelV412() {
  const hub = settingsHubV412();
  const panel = createBackupPanelV412();

  if (panel.parentElement !== hub) hub.appendChild(panel);

  Array.from(hub.children)
    .sort((a, b) => Number(a.dataset.settingsOrderV405 || 99) - Number(b.dataset.settingsOrderV405 || 99))
    .forEach(child => hub.appendChild(child));

  bindBackupPanelV412();
}

function bindBackupPanelV412() {
  const copy = document.getElementById("copyBackupBtnV412");
  const download = document.getElementById("downloadBackupBtnV412");
  const restore = document.getElementById("restoreBackupBtnV412");

  if (copy && !copy.dataset.v412Bound) {
    copy.dataset.v412Bound = "true";
    copy.addEventListener("click", event => {
      event.preventDefault();
      copyBackupV412();
    });
  }

  if (download && !download.dataset.v412Bound) {
    download.dataset.v412Bound = "true";
    download.addEventListener("click", event => {
      event.preventDefault();
      downloadBackupV412();
    });
  }

  if (restore && !restore.dataset.v412Bound) {
    restore.dataset.v412Bound = "true";
    restore.addEventListener("click", event => {
      event.preventDefault();
      restoreBackupV412();
    });
  }
}

window.addEventListener("load", () => {
  [120, 700, 1600].forEach(t => setTimeout(installBackupPanelV412, t));
});

document.addEventListener("click", event => {
  const target = event.target;
  if (target?.closest?.("#settingsTab, [data-tab='settingsTab'], .settings-nav-v405, .settings-nav-fixed-v406, .nav-btn")) {
    setTimeout(installBackupPanelV412, 160);
    setTimeout(installBackupPanelV412, 450);
  }
}, true);

window.collectLocalBackupV412 = collectLocalBackupV412;
window.copyBackupV412 = copyBackupV412;
window.downloadBackupV412 = downloadBackupV412;
window.restoreBackupV412 = restoreBackupV412;



// v4.3.5 System Status / Diagnostics
const STALKERNET_BUILD_V413 = "v4.3.5";

function settingsHubV413() {
  let hub = document.getElementById("settingsHubV405");
  if (hub) return hub;

  let settings = document.getElementById("settingsTab");
  if (!settings) {
    settings = document.createElement("section");
    settings.id = "settingsTab";
    settings.className = "tab-panel hidden settings-tab-v405 settings-tab-fixed-v406";
    settings.innerHTML = `
      <div class="section-top"><h2>Settings</h2></div>
      <article class="module-panel settings-hub-card-v405">
        <div class="module-label">PDA SETTINGS</div>
        <p class="message-text">Device tools and local preferences live here.</p>
      </article>
      <div id="settingsHubV405" class="settings-hub-v405"></div>
    `;
    const main = document.querySelector("main") || document.body;
    const nav = document.querySelector(".bottom-nav") || document.querySelector(".tab-nav") || document.querySelector("nav");
    if (nav && nav.parentElement === main) main.insertBefore(settings, nav);
    else main.appendChild(settings);
  }

  hub = document.getElementById("settingsHubV405");
  if (!hub) {
    hub = document.createElement("div");
    hub.id = "settingsHubV405";
    hub.className = "settings-hub-v405";
    settings.appendChild(hub);
  }

  return hub;
}

function createSystemStatusPanelV413() {
  let panel = document.getElementById("systemStatusPanelV413");
  if (panel) return panel;

  panel = document.createElement("div");
  panel.id = "systemStatusPanelV413";
  panel.className = "system-status-panel-v413 settings-module-v405";
  panel.dataset.settingsOrderV405 = "50";
  panel.innerHTML = `
    <div class="module-label">SYSTEM STATUS</div>
    <p id="systemStatusMessageV413" class="message-text system-status-message-v413">Diagnostics ready.</p>
    <div class="system-status-grid-v413">
      <div><span>Build</span><strong id="sysBuildV413">v4.3.5</strong></div>
      <div><span>Login</span><strong id="sysLoginV413">Checking</strong></div>
      <div><span>Firebase</span><strong id="sysFirebaseV413">Checking</strong></div>
      <div><span>Service Worker</span><strong id="sysWorkerV413">Checking</strong></div>
      <div><span>Caches</span><strong id="sysCacheV413">Checking</strong></div>
      <div><span>Install Mode</span><strong id="sysInstallV413">Checking</strong></div>
      <div><span>Local Data</span><strong id="sysLocalV413">Checking</strong></div>
      <div><span>Screen</span><strong id="sysScreenV413">Checking</strong></div>
    </div>
    <div class="system-status-actions-v413">
      <button id="refreshSystemStatusBtnV413" class="small-btn">Refresh Status</button>
      <button id="copySystemStatusBtnV413" class="small-btn">Copy Status Report</button>
    </div>
  `;

  return panel;
}

function systemStatusMessageV413(message, isError = false) {
  const el = document.getElementById("systemStatusMessageV413");
  if (el) {
    el.textContent = message;
    el.classList.toggle("system-status-error-v413", !!isError);
    el.classList.toggle("system-status-ok-v413", !isError);
  }
  try { if (typeof toast === "function") toast(message); } catch (error) {}
}

function setStatusFieldV413(id, value, good = null) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = value;
  el.classList.toggle("status-good-v413", good === true);
  el.classList.toggle("status-warn-v413", good === false);
}

function currentUserV413() {
  try {
    if (typeof currentUser !== "undefined" && currentUser) return currentUser;
    if (typeof auth !== "undefined" && auth?.currentUser) return auth.currentUser;
  } catch (error) {}
  return null;
}

async function collectSystemStatusV413() {
  const user = currentUserV413();
  const cacheNames = "caches" in window ? await caches.keys().catch(() => []) : [];
  const stalkerCaches = cacheNames.filter(name => name.toLowerCase().includes("stalkernet"));
  const localKeys = [];

  try {
    Object.keys(localStorage).forEach(key => {
      if (
        key.toLowerCase().includes("stalkernet") ||
        key.toLowerCase().includes("pda") ||
        key.toLowerCase().includes("audio")
      ) localKeys.push(key);
    });
  } catch (error) {}

  const standalone = (
    window.matchMedia?.("(display-mode: standalone)")?.matches ||
    window.navigator.standalone === true ||
    document.referrer.startsWith("android-app://")
  );

  let serviceWorkerState = "Unavailable";
  try {
    if ("serviceWorker" in navigator) {
      const reg = await navigator.serviceWorker.getRegistration();
      if (reg?.active) serviceWorkerState = "Active";
      else if (reg?.installing) serviceWorkerState = "Installing";
      else if (reg?.waiting) serviceWorkerState = "Waiting";
      else serviceWorkerState = "Registered";
    }
  } catch (error) {
    serviceWorkerState = "Error";
  }

  return {
    build: STALKERNET_BUILD_V413,
    url: location.href,
    login: user ? "Signed in" : "Signed out",
    email: user?.email || "",
    uidPresent: !!user?.uid,
    firebase: (typeof firebase !== "undefined" && (typeof db !== "undefined" || typeof firestore !== "undefined")) ? "Available" : "Missing",
    serviceWorker: serviceWorkerState,
    cacheCount: stalkerCaches.length,
    caches: stalkerCaches,
    installMode: standalone ? "Installed" : "Browser",
    localDataKeys: localKeys.length,
    localDataKeyNames: localKeys.slice(0, 30),
    screen: `${window.innerWidth}x${window.innerHeight}`,
    userAgent: navigator.userAgent,
    online: navigator.onLine,
    timestamp: new Date().toISOString()
  };
}

async function refreshSystemStatusV413(showToast = false) {
  installSystemStatusPanelV413();

  const status = await collectSystemStatusV413();

  setStatusFieldV413("sysBuildV413", status.build, true);
  setStatusFieldV413("sysLoginV413", status.login, status.uidPresent);
  setStatusFieldV413("sysFirebaseV413", status.firebase, status.firebase === "Available");
  setStatusFieldV413("sysWorkerV413", status.serviceWorker, status.serviceWorker === "Active" || status.serviceWorker === "Registered");
  setStatusFieldV413("sysCacheV413", `${status.cacheCount} cache${status.cacheCount === 1 ? "" : "s"}`, true);
  setStatusFieldV413("sysInstallV413", status.installMode, status.installMode === "Installed");
  setStatusFieldV413("sysLocalV413", `${status.localDataKeys} key${status.localDataKeys === 1 ? "" : "s"}`, true);
  setStatusFieldV413("sysScreenV413", status.screen, true);

  if (showToast) systemStatusMessageV413("System status refreshed.");
  return status;
}

function statusReportTextV413(status) {
  return [
    "STALKERNET SYSTEM STATUS",
    `Build: ${status.build}`,
    `Timestamp: ${status.timestamp}`,
    `URL: ${status.url}`,
    `Login: ${status.login}${status.email ? " (" + status.email + ")" : ""}`,
    `UID present: ${status.uidPresent}`,
    `Firebase: ${status.firebase}`,
    `Service Worker: ${status.serviceWorker}`,
    `StalkerNet caches: ${status.cacheCount}`,
    `Install mode: ${status.installMode}`,
    `Local data keys: ${status.localDataKeys}`,
    `Screen: ${status.screen}`,
    `Online: ${status.online}`,
    `User agent: ${status.userAgent}`,
    `Cache names: ${status.caches.join(", ") || "None"}`,
    `Local keys: ${status.localDataKeyNames.join(", ") || "None"}`
  ].join("\n");
}

async function copySystemStatusV413() {
  const status = await refreshSystemStatusV413(false);
  const text = statusReportTextV413(status);

  try {
    await navigator.clipboard.writeText(text);
    systemStatusMessageV413("Status report copied.");
    return true;
  } catch (error) {
    systemStatusMessageV413("Clipboard blocked. Status report printed to console.", true);
    console.log(text);
    return false;
  }
}

function installSystemStatusPanelV413() {
  const hub = settingsHubV413();
  const panel = createSystemStatusPanelV413();

  if (panel.parentElement !== hub) hub.appendChild(panel);

  Array.from(hub.children)
    .sort((a, b) => Number(a.dataset.settingsOrderV405 || 99) - Number(b.dataset.settingsOrderV405 || 99))
    .forEach(child => hub.appendChild(child));

  bindSystemStatusPanelV413();

  const cacheStatus = document.getElementById("cacheStatusV3998");
  if (cacheStatus && /v4\.1\.2|v4\.1\.1|v4\.1\.0|v4\.0\./.test(cacheStatus.textContent || "")) {
    cacheStatus.textContent = "Current build: v4.3.5. Settings ready.";
  }
}

function bindSystemStatusPanelV413() {
  const refresh = document.getElementById("refreshSystemStatusBtnV413");
  const copy = document.getElementById("copySystemStatusBtnV413");

  if (refresh && !refresh.dataset.v413Bound) {
    refresh.dataset.v413Bound = "true";
    refresh.addEventListener("click", event => {
      event.preventDefault();
      refreshSystemStatusV413(true);
    });
  }

  if (copy && !copy.dataset.v413Bound) {
    copy.dataset.v413Bound = "true";
    copy.addEventListener("click", event => {
      event.preventDefault();
      copySystemStatusV413();
    });
  }
}

window.addEventListener("load", () => {
  [150, 700, 1600].forEach(t => setTimeout(() => {
    installSystemStatusPanelV413();
    refreshSystemStatusV413(false);
  }, t));
});

document.addEventListener("click", event => {
  const target = event.target;
  if (target?.closest?.("#settingsTab, [data-tab='settingsTab'], .settings-nav-v405, .settings-nav-fixed-v406, .nav-btn")) {
    setTimeout(() => {
      installSystemStatusPanelV413();
      refreshSystemStatusV413(false);
    }, 180);
  }
}, true);

window.collectSystemStatusV413 = collectSystemStatusV413;
window.refreshSystemStatusV413 = refreshSystemStatusV413;
window.copySystemStatusV413 = copySystemStatusV413;



// v4.3.5 Error Log / Bug Report
const STALKERNET_BUILD_V414 = "v4.3.5";
const ERROR_LOG_KEY_V414 = "stalkernet_error_log_v414";
const ERROR_LOG_LIMIT_V414 = 40;

function settingsHubV414() {
  let hub = document.getElementById("settingsHubV405");
  if (hub) return hub;

  let settings = document.getElementById("settingsTab");
  if (!settings) {
    settings = document.createElement("section");
    settings.id = "settingsTab";
    settings.className = "tab-panel hidden settings-tab-v405 settings-tab-fixed-v406";
    settings.innerHTML = `
      <div class="section-top"><h2>Settings</h2></div>
      <article class="module-panel settings-hub-card-v405">
        <div class="module-label">PDA SETTINGS</div>
        <p class="message-text">Device tools and local preferences live here.</p>
      </article>
      <div id="settingsHubV405" class="settings-hub-v405"></div>
    `;
    const main = document.querySelector("main") || document.body;
    const nav = document.querySelector(".bottom-nav") || document.querySelector(".tab-nav") || document.querySelector("nav");
    if (nav && nav.parentElement === main) main.insertBefore(settings, nav);
    else main.appendChild(settings);
  }

  hub = document.getElementById("settingsHubV405");
  if (!hub) {
    hub = document.createElement("div");
    hub.id = "settingsHubV405";
    hub.className = "settings-hub-v405";
    settings.appendChild(hub);
  }

  return hub;
}

function readErrorLogV414() {
  try {
    const saved = JSON.parse(localStorage.getItem(ERROR_LOG_KEY_V414) || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch (error) {
    return [];
  }
}

function writeErrorLogV414(entries) {
  try {
    localStorage.setItem(ERROR_LOG_KEY_V414, JSON.stringify(entries.slice(-ERROR_LOG_LIMIT_V414)));
  } catch (error) {}
}

function addErrorLogEntryV414(type, message, extra = {}) {
  const entry = {
    type,
    message: String(message || "Unknown issue").slice(0, 500),
    time: new Date().toISOString(),
    build: STALKERNET_BUILD_V414,
    url: location.href,
    ...extra
  };

  const entries = readErrorLogV414();
  entries.push(entry);
  writeErrorLogV414(entries);

  try { renderErrorLogV414(); } catch (error) {}

  return entry;
}

function createErrorLogPanelV414() {
  let panel = document.getElementById("errorLogPanelV414");
  if (panel) return panel;

  panel = document.createElement("div");
  panel.id = "errorLogPanelV414";
  panel.className = "error-log-panel-v414 settings-module-v405";
  panel.dataset.settingsOrderV405 = "55";
  panel.innerHTML = `
    <div class="module-label">ERROR LOG</div>
    <p id="errorLogStatusV414" class="message-text error-log-status-v414">No recent PDA faults detected.</p>
    <div class="error-log-actions-v414">
      <button id="refreshErrorLogBtnV414" class="small-btn">Refresh Log</button>
      <button id="copyErrorLogBtnV414" class="small-btn">Copy Bug Report</button>
      <button id="clearErrorLogBtnV414" class="small-btn danger-lite-v414">Clear Log</button>
    </div>
    <div id="errorLogListV414" class="error-log-list-v414"></div>
  `;

  return panel;
}

function installErrorLogPanelV414() {
  const hub = settingsHubV414();
  const panel = createErrorLogPanelV414();

  if (panel.parentElement !== hub) hub.appendChild(panel);

  Array.from(hub.children)
    .sort((a, b) => Number(a.dataset.settingsOrderV405 || 99) - Number(b.dataset.settingsOrderV405 || 99))
    .forEach(child => hub.appendChild(child));

  bindErrorLogPanelV414();
  renderErrorLogV414();

  const cacheStatus = document.getElementById("cacheStatusV3998");
  if (cacheStatus && /v4\.1\.3|v4\.1\.2|v4\.1\.1|v4\.1\.0|v4\.0\./.test(cacheStatus.textContent || "")) {
    cacheStatus.textContent = "Current build: v4.3.5. Settings ready.";
  }
}

function errorLogStatusV414(message, isError = false) {
  const el = document.getElementById("errorLogStatusV414");
  if (el) {
    el.textContent = message;
    el.classList.toggle("error-log-alert-v414", !!isError);
  }
  try { if (typeof toast === "function" && isError) toast(message); } catch (error) {}
}

function renderErrorLogV414() {
  const list = document.getElementById("errorLogListV414");
  const entries = readErrorLogV414();

  if (!list) return;

  if (!entries.length) {
    list.innerHTML = `
      <div class="error-log-empty-v414">
        <strong>No recorded faults.</strong>
        <span>The PDA is quiet. Suspiciously quiet.</span>
      </div>
    `;
    errorLogStatusV414("No recent PDA faults detected.");
    return;
  }

  errorLogStatusV414(`${entries.length} recent log entr${entries.length === 1 ? "y" : "ies"} recorded.`, true);

  list.innerHTML = "";

  entries.slice().reverse().slice(0, 10).forEach(entry => {
    const row = document.createElement("div");
    row.className = "error-log-row-v414";
    const date = new Date(entry.time);
    const time = Number.isNaN(date.getTime()) ? "Unknown time" : date.toLocaleString();

    row.innerHTML = `
      <div>
        <strong>${escapeHtml(entry.type || "log")}</strong>
        <span>${escapeHtml(time)}</span>
      </div>
      <p>${escapeHtml(entry.message || "Unknown issue")}</p>
    `;
    list.appendChild(row);
  });
}

function bugReportTextV414() {
  const entries = readErrorLogV414();

  let status = null;
  try {
    if (typeof collectSystemStatusV413 === "function") {
      // This may return a promise in newer builds, so keep a simple fallback here.
      status = "Use System Status panel for full diagnostics.";
    }
  } catch (error) {}

  return [
    "STALKERNET BUG REPORT",
    `Build: ${STALKERNET_BUILD_V414}`,
    `Time: ${new Date().toISOString()}`,
    `URL: ${location.href}`,
    `Screen: ${window.innerWidth}x${window.innerHeight}`,
    `Online: ${navigator.onLine}`,
    `User Agent: ${navigator.userAgent}`,
    "",
    "RECENT ERROR LOG:",
    entries.length ? JSON.stringify(entries, null, 2) : "No recorded faults.",
    "",
    status || ""
  ].join("\n");
}

async function copyErrorLogV414() {
  const text = bugReportTextV414();

  try {
    await navigator.clipboard.writeText(text);
    errorLogStatusV414("Bug report copied.");
    return true;
  } catch (error) {
    console.log(text);
    errorLogStatusV414("Clipboard blocked. Bug report printed to console.", true);
    return false;
  }
}

function clearErrorLogV414() {
  if (!confirm("Clear the local StalkerNet error log?")) return false;
  writeErrorLogV414([]);
  renderErrorLogV414();
  errorLogStatusV414("Error log cleared.");
  return true;
}

function bindErrorLogPanelV414() {
  const refresh = document.getElementById("refreshErrorLogBtnV414");
  const copy = document.getElementById("copyErrorLogBtnV414");
  const clear = document.getElementById("clearErrorLogBtnV414");

  if (refresh && !refresh.dataset.v414Bound) {
    refresh.dataset.v414Bound = "true";
    refresh.addEventListener("click", event => {
      event.preventDefault();
      renderErrorLogV414();
    });
  }

  if (copy && !copy.dataset.v414Bound) {
    copy.dataset.v414Bound = "true";
    copy.addEventListener("click", event => {
      event.preventDefault();
      copyErrorLogV414();
    });
  }

  if (clear && !clear.dataset.v414Bound) {
    clear.dataset.v414Bound = "true";
    clear.addEventListener("click", event => {
      event.preventDefault();
      clearErrorLogV414();
    });
  }
}

// Global fault capture.
if (!window.__stalkernetErrorCaptureV414) {
  window.__stalkernetErrorCaptureV414 = true;

  window.addEventListener("error", event => {
    addErrorLogEntryV414("error", event.message || "Script error", {
      source: event.filename || "",
      line: event.lineno || 0,
      column: event.colno || 0
    });
  });

  window.addEventListener("unhandledrejection", event => {
    const reason = event.reason;
    addErrorLogEntryV414("promise", reason?.message || String(reason || "Unhandled promise rejection"), {
      stack: reason?.stack ? String(reason.stack).slice(0, 800) : ""
    });
  });

  const originalConsoleError = console.error?.bind(console);
  const originalConsoleWarn = console.warn?.bind(console);

  console.error = function(...args) {
    addErrorLogEntryV414("console.error", args.map(arg => {
      try { return typeof arg === "string" ? arg : JSON.stringify(arg); }
      catch (error) { return String(arg); }
    }).join(" ").slice(0, 500));
    return originalConsoleError ? originalConsoleError(...args) : undefined;
  };

  console.warn = function(...args) {
    const text = args.map(arg => {
      try { return typeof arg === "string" ? arg : JSON.stringify(arg); }
      catch (error) { return String(arg); }
    }).join(" ");

    if (/stalkernet|firebase|firestore|cache|service|auth|map|marker|profile|job|presence/i.test(text)) {
      addErrorLogEntryV414("console.warn", text.slice(0, 500));
    }

    return originalConsoleWarn ? originalConsoleWarn(...args) : undefined;
  };
}

window.addEventListener("load", () => {
  [150, 700, 1600].forEach(t => setTimeout(installErrorLogPanelV414, t));
});

document.addEventListener("click", event => {
  const target = event.target;
  if (target?.closest?.("#settingsTab, [data-tab='settingsTab'], .settings-nav-v405, .settings-nav-fixed-v406, .nav-btn")) {
    setTimeout(installErrorLogPanelV414, 160);
    setTimeout(installErrorLogPanelV414, 450);
  }
}, true);

window.addErrorLogEntryV414 = addErrorLogEntryV414;
window.readErrorLogV414 = readErrorLogV414;
window.copyErrorLogV414 = copyErrorLogV414;



// v4.3.5 Error Log Noise Filter
const STALKERNET_BUILD_V415 = "v4.3.5";
const FIRESTORE_NOISE_STATS_KEY_V415 = "stalkernet_firestore_noise_stats_v415";

function firestoreNoiseRegexV415(message) {
  return /@firebase\/firestore.*WebChannelConnection RPC ['"](Listen|Write)['"] stream .*transport errored/i.test(String(message || ""));
}

function readFirestoreNoiseStatsV415() {
  try {
    return JSON.parse(localStorage.getItem(FIRESTORE_NOISE_STATS_KEY_V415) || '{"count":0,"lastMessage":"","lastTime":null}');
  } catch (error) {
    return { count: 0, lastMessage: "", lastTime: null };
  }
}

function writeFirestoreNoiseStatsV415(stats) {
  try {
    localStorage.setItem(FIRESTORE_NOISE_STATS_KEY_V415, JSON.stringify(stats));
  } catch (error) {}
}

function recordFirestoreNoiseV415(message) {
  const stats = readFirestoreNoiseStatsV415();
  stats.count = Number(stats.count || 0) + 1;
  stats.lastMessage = String(message || "").slice(0, 500);
  stats.lastTime = new Date().toISOString();
  writeFirestoreNoiseStatsV415(stats);
  updateFirestoreNoiseUiV415();
}

function cleanFirestoreNoiseFromLogV415() {
  try {
    if (typeof readErrorLogV414 !== "function" || typeof writeErrorLogV414 !== "function") return;

    const entries = readErrorLogV414();
    if (!Array.isArray(entries) || !entries.length) return;

    let removed = 0;
    const clean = entries.filter(entry => {
      const noisy = entry?.type === "console.warn" && firestoreNoiseRegexV415(entry.message);
      if (noisy) removed++;
      return !noisy;
    });

    if (removed) {
      const stats = readFirestoreNoiseStatsV415();
      stats.count = Number(stats.count || 0) + removed;
      stats.lastTime = new Date().toISOString();
      stats.lastMessage = `${removed} old Firebase transport warnings were cleaned from Error Log.`;
      writeFirestoreNoiseStatsV415(stats);
      writeErrorLogV414(clean);
    }
  } catch (error) {}
}

function addNoiseFilterPanelV415() {
  const errorPanel = document.getElementById("errorLogPanelV414");
  if (!errorPanel) return;

  let panel = document.getElementById("firestoreNoisePanelV415");
  if (panel) return;

  panel = document.createElement("div");
  panel.id = "firestoreNoisePanelV415";
  panel.className = "firestore-noise-panel-v415";
  panel.innerHTML = `
    <div>
      <strong>Firebase Radio Static Filter</strong>
      <span id="firestoreNoiseTextV415">No filtered transport warnings yet.</span>
    </div>
    <button id="resetFirestoreNoiseBtnV415" class="small-btn">Reset Count</button>
  `;

  const list = document.getElementById("errorLogListV414");
  if (list) errorPanel.insertBefore(panel, list);
  else errorPanel.appendChild(panel);

  const reset = document.getElementById("resetFirestoreNoiseBtnV415");
  if (reset && !reset.dataset.v415Bound) {
    reset.dataset.v415Bound = "true";
    reset.addEventListener("click", event => {
      event.preventDefault();
      writeFirestoreNoiseStatsV415({ count: 0, lastMessage: "", lastTime: null });
      updateFirestoreNoiseUiV415();
    });
  }

  updateFirestoreNoiseUiV415();
}

function updateFirestoreNoiseUiV415() {
  const text = document.getElementById("firestoreNoiseTextV415");
  if (!text) return;

  const stats = readFirestoreNoiseStatsV415();
  const count = Number(stats.count || 0);

  if (!count) {
    text.textContent = "No filtered transport warnings yet.";
    return;
  }

  let last = "recently";
  try {
    if (stats.lastTime) last = new Date(stats.lastTime).toLocaleTimeString();
  } catch (error) {}

  text.textContent = `${count} repeated Firestore transport warning${count === 1 ? "" : "s"} filtered. Last seen ${last}.`;
}

// Reassign the global error log function so the old console.warn wrapper calls the filtered version.
if (typeof addErrorLogEntryV414 === "function" && !window.__errorLogNoiseFilterInstalledV415) {
  window.__errorLogNoiseFilterInstalledV415 = true;
  window.__originalAddErrorLogEntryV414 = addErrorLogEntryV414;

  addErrorLogEntryV414 = function(type, message, extra = {}) {
    if (type === "console.warn" && firestoreNoiseRegexV415(message)) {
      recordFirestoreNoiseV415(message);
      return {
        type: "filtered.firestore.transport",
        message: String(message || "").slice(0, 500),
        time: new Date().toISOString(),
        build: STALKERNET_BUILD_V415,
        filtered: true
      };
    }

    return window.__originalAddErrorLogEntryV414(type, message, {
      ...extra,
      build: STALKERNET_BUILD_V415
    });
  };

  window.addErrorLogEntryV414 = addErrorLogEntryV414;
}

const oldRenderErrorLogV414_V415 = window.renderErrorLogV414 || (typeof renderErrorLogV414 === "function" ? renderErrorLogV414 : null);
if (oldRenderErrorLogV414_V415 && !window.__renderErrorLogPatchedV415) {
  window.__renderErrorLogPatchedV415 = true;
  renderErrorLogV414 = function(...args) {
    const result = oldRenderErrorLogV414_V415.apply(this, args);
    setTimeout(addNoiseFilterPanelV415, 40);
    setTimeout(updateFirestoreNoiseUiV415, 80);
    return result;
  };
  window.renderErrorLogV414 = renderErrorLogV414;
}

const oldBugReportTextV414_V415 = window.bugReportTextV414 || (typeof bugReportTextV414 === "function" ? bugReportTextV414 : null);
if (oldBugReportTextV414_V415 && !window.__bugReportPatchedV415) {
  window.__bugReportPatchedV415 = true;
  bugReportTextV414 = function(...args) {
    const base = oldBugReportTextV414_V415.apply(this, args);
    const stats = readFirestoreNoiseStatsV415();
    return [
      base,
      "",
      "FILTERED FIREBASE TRANSPORT WARNINGS:",
      `Count: ${Number(stats.count || 0)}`,
      `Last Time: ${stats.lastTime || "None"}`,
      `Last Message: ${stats.lastMessage || "None"}`
    ].join("\n");
  };
  window.bugReportTextV414 = bugReportTextV414;
}

function installFirestoreNoiseFilterV415() {
  cleanFirestoreNoiseFromLogV415();
  addNoiseFilterPanelV415();
  updateFirestoreNoiseUiV415();

  const cacheStatus = document.getElementById("cacheStatusV3998");
  if (cacheStatus && /v4\.1\.4|v4\.1\.3|v4\.1\.2|v4\.1\.1|v4\.1\.0|v4\.0\./.test(cacheStatus.textContent || "")) {
    cacheStatus.textContent = "Current build: v4.3.5. Settings ready.";
  }

  try { if (typeof renderErrorLogV414 === "function") renderErrorLogV414(); } catch (error) {}
}

window.addEventListener("load", () => {
  [80, 500, 1400, 2600].forEach(t => setTimeout(installFirestoreNoiseFilterV415, t));
});

document.addEventListener("click", event => {
  const target = event.target;
  if (target?.closest?.("#settingsTab, #errorLogPanelV414, [data-tab='settingsTab'], .nav-btn")) {
    setTimeout(installFirestoreNoiseFilterV415, 120);
    setTimeout(installFirestoreNoiseFilterV415, 450);
  }
}, true);

window.installFirestoreNoiseFilterV415 = installFirestoreNoiseFilterV415;
window.readFirestoreNoiseStatsV415 = readFirestoreNoiseStatsV415;



// v4.3.5 Settings Category Tabs
// Clean rebuild from v4.3.5. No drawer/details system.

const STALKERNET_BUILD_V422 = "v4.3.5";
const SETTINGS_TAB_STATE_KEY_V422 = "stalkernet_settings_category_tab_v422";

const SETTINGS_CATEGORIES_V422 = [
  {
    id: "preferences",
    label: "Preferences",
    title: "PDA Preferences",
    note: "Audio cues and online presence.",
    panelIds: ["audioSettingsPanelV403", "presencePanelV411"]
  },
  {
    id: "app",
    label: "App & Cache",
    title: "App & Cache",
    note: "Install mode and cache maintenance.",
    panelIds: ["installAppPanelV402", "cacheToolsPanelV3998"]
  },
  {
    id: "backup",
    label: "Backup",
    title: "Backup & Safety",
    note: "Local backup and restore tools.",
    panelIds: ["backupPanelV412"]
  },
  {
    id: "diagnostics",
    label: "Diagnostics",
    title: "Diagnostics",
    note: "System status and bug reports.",
    panelIds: ["systemStatusPanelV413", "errorLogPanelV414"]
  }
];

function getSettingsTabV422() {
  return document.getElementById("settingsTab");
}

function getSettingsHubV422() {
  let hub = document.getElementById("settingsHubV405");
  if (hub) return hub;

  let settings = getSettingsTabV422();
  if (!settings) {
    settings = document.createElement("section");
    settings.id = "settingsTab";
    settings.className = "tab-panel hidden settings-tab-v405 settings-tab-fixed-v406";
    settings.innerHTML = `
      <div class="section-top"><h2>Settings</h2></div>
      <article class="module-panel settings-hub-card-v405">
        <div class="module-label">PDA SETTINGS</div>
        <p class="message-text">Device tools and local preferences live here.</p>
      </article>
      <div id="settingsHubV405" class="settings-hub-v405"></div>
    `;

    const main = document.querySelector("main") || document.body;
    const nav = document.querySelector(".bottom-nav") || document.querySelector(".tab-nav") || document.querySelector("nav");
    if (nav && nav.parentElement === main) main.insertBefore(settings, nav);
    else main.appendChild(settings);
  }

  hub = document.getElementById("settingsHubV405");
  if (!hub) {
    hub = document.createElement("div");
    hub.id = "settingsHubV405";
    hub.className = "settings-hub-v405";
    settings.appendChild(hub);
  }

  return hub;
}

function readActiveSettingsCategoryV422() {
  try {
    const saved = localStorage.getItem(SETTINGS_TAB_STATE_KEY_V422);
    if (SETTINGS_CATEGORIES_V422.some(cat => cat.id === saved)) return saved;
  } catch (error) {}
  return "preferences";
}

function writeActiveSettingsCategoryV422(categoryId) {
  try { localStorage.setItem(SETTINGS_TAB_STATE_KEY_V422, categoryId); } catch (error) {}
}

function ensureSettingsCategoryTabsShellV422() {
  const hub = getSettingsHubV422();

  // Remove failed drawer shell if a user still has cached older DOM from tests.
  hub.querySelectorAll(".settings-category-v416, #settingsCategoriesIntroV416").forEach(el => el.remove());

  let shell = document.getElementById("settingsCategoryTabsShellV422");
  if (!shell) {
    shell = document.createElement("section");
    shell.id = "settingsCategoryTabsShellV422";
    shell.className = "settings-category-tabs-shell-v422";
    shell.innerHTML = `
      <article class="module-panel settings-tabs-intro-v422">
        <div class="module-label">SETTINGS CATEGORIES</div>
        <p class="message-text">Choose a category below. Only one settings group is shown at a time.</p>
      </article>
      <div id="settingsCategoryButtonsV422" class="settings-category-buttons-v422"></div>
      <div id="settingsCategoryPanelsV422" class="settings-category-panels-v422"></div>
    `;
    hub.insertBefore(shell, hub.firstChild);
  }

  const buttons = document.getElementById("settingsCategoryButtonsV422");
  const panels = document.getElementById("settingsCategoryPanelsV422");

  SETTINGS_CATEGORIES_V422.forEach(category => {
    if (!document.getElementById(`settingsCategoryBtnV422_${category.id}`)) {
      const btn = document.createElement("button");
      btn.id = `settingsCategoryBtnV422_${category.id}`;
      btn.className = "settings-category-btn-v422 small-btn";
      btn.dataset.settingsCategoryV422 = category.id;
      btn.textContent = category.label;
      buttons.appendChild(btn);

      btn.addEventListener("click", event => {
        event.preventDefault();
        activateSettingsCategoryV422(category.id);
      });
    }

    if (!document.getElementById(`settingsCategoryPaneV422_${category.id}`)) {
      const pane = document.createElement("section");
      pane.id = `settingsCategoryPaneV422_${category.id}`;
      pane.className = "settings-category-pane-v422";
      pane.dataset.settingsCategoryPaneV422 = category.id;
      pane.innerHTML = `
        <div class="settings-category-pane-head-v422">
          <strong>${category.title}</strong>
          <span>${category.note}</span>
        </div>
        <div id="settingsCategoryBodyV422_${category.id}" class="settings-category-body-v422"></div>
      `;
      panels.appendChild(pane);
    }
  });

  return { hub, shell, buttons, panels };
}

function primeSettingsPanelsV422() {
  // Let the known panel creators run once, then we move panels into category panes.
  try { if (typeof ensureAudioControlsInSettingsV410 === "function") ensureAudioControlsInSettingsV410(); } catch (error) {}
  try { if (typeof installPresencePanelV411 === "function") installPresencePanelV411(); } catch (error) {}
  try { if (typeof bindPwaInstallV402 === "function") bindPwaInstallV402(); } catch (error) {}
  try { if (typeof bindCacheToolsV3998 === "function") bindCacheToolsV3998(); } catch (error) {}
  try { if (typeof installBackupPanelV412 === "function") installBackupPanelV412(); } catch (error) {}
  try { if (typeof installSystemStatusPanelV413 === "function") installSystemStatusPanelV413(); } catch (error) {}
  try { if (typeof installErrorLogPanelV414 === "function") installErrorLogPanelV414(); } catch (error) {}
  try { if (typeof installFirestoreNoiseFilterV415 === "function") installFirestoreNoiseFilterV415(); } catch (error) {}
}

function moveSettingsPanelsIntoTabsV422() {
  ensureSettingsCategoryTabsShellV422();
  primeSettingsPanelsV422();

  SETTINGS_CATEGORIES_V422.forEach(category => {
    const body = document.getElementById(`settingsCategoryBodyV422_${category.id}`);
    if (!body) return;

    category.panelIds.forEach(panelId => {
      const panel = document.getElementById(panelId);
      if (!panel) return;

      panel.classList.add("settings-panel-in-tabs-v422");
      panel.dataset.settingsCategoryTabV422 = category.id;

      if (panel.parentElement !== body) {
        body.appendChild(panel);
      }
    });
  });

  // Anything known that old helpers dump into the root hub should be hidden there.
  hideRootSettingsPanelDuplicatesV422();
  bindMovedSettingsPanelsV422();
  patchBuildLabelsV422();
  activateSettingsCategoryV422(readActiveSettingsCategoryV422(), false);
}

function hideRootSettingsPanelDuplicatesV422() {
  const hub = getSettingsHubV422();
  const knownIds = SETTINGS_CATEGORIES_V422.flatMap(cat => cat.panelIds);
  knownIds.forEach(id => {
    const panel = document.getElementById(id);
    if (panel && panel.parentElement === hub) {
      panel.style.display = "none";
    }
  });
}

function bindMovedSettingsPanelsV422() {
  try { if (typeof bindAudioControlsV410 === "function") bindAudioControlsV410(); } catch (error) {}
  try { if (typeof bindPresencePanelV411 === "function") bindPresencePanelV411(); } catch (error) {}
  try { if (typeof bindPwaInstallV402 === "function") bindPwaInstallV402(); } catch (error) {}
  try { if (typeof bindCacheToolsV3998 === "function") bindCacheToolsV3998(); } catch (error) {}
  try { if (typeof bindBackupPanelV412 === "function") bindBackupPanelV412(); } catch (error) {}
  try { if (typeof bindSystemStatusPanelV413 === "function") bindSystemStatusPanelV413(); } catch (error) {}
  try { if (typeof bindErrorLogPanelV414 === "function") bindErrorLogPanelV414(); } catch (error) {}
}

function activateSettingsCategoryV422(categoryId, save = true) {
  if (!SETTINGS_CATEGORIES_V422.some(cat => cat.id === categoryId)) categoryId = "preferences";

  document.querySelectorAll(".settings-category-btn-v422").forEach(btn => {
    const active = btn.dataset.settingsCategoryV422 === categoryId;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-selected", active ? "true" : "false");
  });

  document.querySelectorAll(".settings-category-pane-v422").forEach(pane => {
    const active = pane.dataset.settingsCategoryPaneV422 === categoryId;
    pane.classList.toggle("active", active);
    pane.classList.toggle("hidden", !active);
    pane.style.display = active ? "block" : "none";
  });

  if (save) writeActiveSettingsCategoryV422(categoryId);
}

function patchBuildLabelsV422() {
  const cacheStatus = document.getElementById("cacheStatusV3998");
  if (cacheStatus) cacheStatus.textContent = "Current build: v4.3.5. Settings ready.";

  const sysBuild = document.getElementById("sysBuildV413");
  if (sysBuild) sysBuild.textContent = STALKERNET_BUILD_V422;

  const presenceBuild = document.querySelector("#presencePanelV411 .presence-grid-v411 div:nth-child(3) strong");
  if (presenceBuild && /^v4\./.test(presenceBuild.textContent || "")) presenceBuild.textContent = STALKERNET_BUILD_V422;
}

let settingsTabsObserverV422 = null;

function startSettingsTabsObserverV422() {
  const hub = getSettingsHubV422();
  if (settingsTabsObserverV422) settingsTabsObserverV422.disconnect();

  settingsTabsObserverV422 = new MutationObserver(mutations => {
    const knownIds = new Set(SETTINGS_CATEGORIES_V422.flatMap(cat => cat.panelIds));
    const relevant = mutations.some(mutation => {
      return Array.from(mutation.addedNodes || []).some(node => {
        return node instanceof HTMLElement && knownIds.has(node.id);
      });
    });

    if (!relevant) return;

    clearTimeout(window.__settingsTabsMoveTimerV422);
    window.__settingsTabsMoveTimerV422 = setTimeout(moveSettingsPanelsIntoTabsV422, 120);
  });

  hub && settingsTabsObserverV422.observe(hub, { childList: true, subtree: false });
}

function setupSettingsCategoryTabsV422() {
  ensureSettingsCategoryTabsShellV422();
  moveSettingsPanelsIntoTabsV422();
  startSettingsTabsObserverV422();
}

// Neutralise drawer-related globals if the browser has old scripts cached somehow.
window.setupSettingsCategoriesV416 = setupSettingsCategoryTabsV422;
window.moveSettingsPanelsIntoCategoriesV416 = moveSettingsPanelsIntoTabsV422;
window.setupSettingsCategoriesStableV417 = setupSettingsCategoryTabsV422;
window.moveSettingsPanelsIntoCategoriesStableV417 = moveSettingsPanelsIntoTabsV422;
window.setupCategoryPolishV419 = setupSettingsCategoryTabsV422;
window.stableSettingsDrawerSetupV420 = function() {};
window.safeDrawerSetupV421 = function() {};

try {
  setupSettingsCategoriesV416 = setupSettingsCategoryTabsV422;
  moveSettingsPanelsIntoCategoriesV416 = moveSettingsPanelsIntoTabsV422;
  setupSettingsCategoriesStableV417 = setupSettingsCategoryTabsV422;
  moveSettingsPanelsIntoCategoriesStableV417 = moveSettingsPanelsIntoTabsV422;
  setupCategoryPolishV419 = setupSettingsCategoryTabsV422;
  stableSettingsDrawerSetupV420 = function() {};
  safeDrawerSetupV421 = function() {};
} catch (error) {}

window.addEventListener("load", () => {
  [80, 300, 900, 1800, 3200].forEach(delay => setTimeout(setupSettingsCategoryTabsV422, delay));
});

document.addEventListener("click", event => {
  const target = event.target;
  if (target?.closest?.("#settingsTab, [data-tab='settingsTab'], .settings-nav-v405, .settings-nav-fixed-v406, .nav-btn, .settings-category-btn-v422")) {
    setTimeout(setupSettingsCategoryTabsV422, 80);
  }
}, true);

window.setupSettingsCategoryTabsV422 = setupSettingsCategoryTabsV422;
window.activateSettingsCategoryV422 = activateSettingsCategoryV422;



// v4.3.5 Settings Tabs Content Fix
// Stable self-contained content panels for Settings category tabs.
// This avoids relying on older panels being moved around correctly.

const STALKERNET_BUILD_V423 = "v4.3.5";
const SETTINGS_TAB_STATE_KEY_V423 = "stalkernet_settings_category_tab_v422";
const AUDIO_KEY_V423 = "stalkernet_audio_settings_v403";
const ERROR_LOG_KEY_V423 = "stalkernet_error_log_v414";

const SETTINGS_TABS_V423 = [
  { id: "preferences", label: "Preferences", title: "PDA Preferences", note: "Audio cues and online presence." },
  { id: "app", label: "App & Cache", title: "App & Cache", note: "Install mode and cache maintenance." },
  { id: "backup", label: "Backup", title: "Backup & Safety", note: "Local backup and restore tools." },
  { id: "diagnostics", label: "Diagnostics", title: "Diagnostics", note: "System status and bug reports." }
];

function getSettingsHubV423() {
  let settings = document.getElementById("settingsTab");
  if (!settings) return null;

  let hub = document.getElementById("settingsHubV405");
  if (!hub) {
    hub = document.createElement("div");
    hub.id = "settingsHubV405";
    hub.className = "settings-hub-v405";
    settings.appendChild(hub);
  }
  return hub;
}

function activeSettingsTabV423() {
  try {
    const saved = localStorage.getItem(SETTINGS_TAB_STATE_KEY_V423);
    if (SETTINGS_TABS_V423.some(tab => tab.id === saved)) return saved;
  } catch (error) {}
  return "preferences";
}

function saveActiveSettingsTabV423(id) {
  try { localStorage.setItem(SETTINGS_TAB_STATE_KEY_V423, id); } catch (error) {}
}

function ensureSettingsTabsShellV423() {
  const hub = getSettingsHubV423();
  if (!hub) return null;

  // Remove old failed drawer UI if present.
  hub.querySelectorAll(".settings-category-v416, #settingsCategoriesIntroV416").forEach(el => el.remove());

  let shell = document.getElementById("settingsCategoryTabsShellV422");
  if (!shell) {
    shell = document.createElement("section");
    shell.id = "settingsCategoryTabsShellV422";
    shell.className = "settings-category-tabs-shell-v422 settings-tabs-fixed-v423";
    shell.innerHTML = `
      <article class="module-panel settings-tabs-intro-v422">
        <div class="module-label">SETTINGS CATEGORIES</div>
        <p class="message-text">Choose a category below. Only one settings group is shown at a time.</p>
      </article>
      <div id="settingsCategoryButtonsV422" class="settings-category-buttons-v422"></div>
      <div id="settingsCategoryPanelsV422" class="settings-category-panels-v422"></div>
    `;
    hub.insertBefore(shell, hub.firstChild);
  } else {
    shell.classList.add("settings-tabs-fixed-v423");
  }

  const buttons = document.getElementById("settingsCategoryButtonsV422");
  const panels = document.getElementById("settingsCategoryPanelsV422");
  if (!buttons || !panels) return null;

  SETTINGS_TABS_V423.forEach(tab => {
    let btn = document.getElementById(`settingsCategoryBtnV422_${tab.id}`);
    if (!btn) {
      btn = document.createElement("button");
      btn.id = `settingsCategoryBtnV422_${tab.id}`;
      btn.className = "settings-category-btn-v422 small-btn";
      btn.dataset.settingsCategoryV422 = tab.id;
      btn.textContent = tab.label;
      buttons.appendChild(btn);
    }

    let pane = document.getElementById(`settingsCategoryPaneV422_${tab.id}`);
    if (!pane) {
      pane = document.createElement("section");
      pane.id = `settingsCategoryPaneV422_${tab.id}`;
      pane.className = "settings-category-pane-v422";
      pane.dataset.settingsCategoryPaneV422 = tab.id;
      pane.innerHTML = `
        <div class="settings-category-pane-head-v422">
          <strong>${tab.title}</strong>
          <span>${tab.note}</span>
        </div>
        <div id="settingsCategoryBodyV422_${tab.id}" class="settings-category-body-v422"></div>
      `;
      panels.appendChild(pane);
    }

    btn.onclick = event => {
      event.preventDefault();
      event.stopPropagation();
      activateSettingsTabV423(tab.id);
    };
  });

  return shell;
}

function getCategoryBodyV423(id) {
  return document.getElementById(`settingsCategoryBodyV422_${id}`);
}

function clearOldAutoMovedContentV423() {
  // Hide old/moved settings modules so only the stable v4.3.5 panels show in tabs.
  const oldIds = [
    "audioSettingsPanelV403",
    "presencePanelV411",
    "installAppPanelV402",
    "cacheToolsPanelV3998",
    "backupPanelV412",
    "systemStatusPanelV413",
    "errorLogPanelV414"
  ];
  oldIds.forEach(id => {
    document.querySelectorAll(`#${id}`).forEach(el => {
      if (!el.id.endsWith("V423")) {
        el.classList.add("legacy-settings-hidden-v423");
      }
    });
  });
}

function audioSettingsV423() {
  try {
    const saved = JSON.parse(localStorage.getItem(AUDIO_KEY_V423) || "null");
    return {
      enabled: saved?.enabled !== false,
      volume: Number.isFinite(Number(saved?.volume)) ? Number(saved.volume) : 0.5
    };
  } catch (error) {
    return { enabled: true, volume: 0.5 };
  }
}

function saveAudioSettingsV423(settings) {
  const clean = {
    enabled: !!settings.enabled,
    volume: Math.max(0, Math.min(1, Number(settings.volume)))
  };
  localStorage.setItem(AUDIO_KEY_V423, JSON.stringify(clean));
  window.audioSettingsV403 = clean;
  return clean;
}

function installPreferencesContentV423() {
  const body = getCategoryBodyV423("preferences");
  if (!body) return;

  let audio = document.getElementById("settingsAudioPanelV423");
  if (!audio) {
    audio = document.createElement("div");
    audio.id = "settingsAudioPanelV423";
    audio.className = "settings-lite-panel-v423";
    audio.innerHTML = `
      <div class="module-label">AUDIO CUES</div>
      <p id="settingsAudioStatusV423" class="message-text">Audio cues are local to this device.</p>
      <div class="settings-two-buttons-v423">
        <button id="settingsAudioToggleV423" class="small-btn">Audio Cues: On</button>
        <button id="settingsAudioTestV423" class="small-btn">Test Cue</button>
      </div>
      <label class="settings-range-v423">
        <span>Volume</span>
        <input id="settingsAudioVolumeV423" type="range" min="0" max="100" value="50" />
        <strong id="settingsAudioVolumeTextV423">50%</strong>
      </label>
    `;
  }

  let presence = document.getElementById("settingsPresencePanelV423");
  if (!presence) {
    presence = document.createElement("div");
    presence.id = "settingsPresencePanelV423";
    presence.className = "settings-lite-panel-v423";
    presence.innerHTML = `
      <div class="module-label">ONLINE PRESENCE</div>
      <p id="settingsPresenceStatusV423" class="message-text">Presence sync shows whether this PDA is active.</p>
      <div class="settings-status-grid-v423">
        <div><span>State</span><strong id="settingsPresenceStateV423">Checking</strong></div>
        <div><span>Build</span><strong>${STALKERNET_BUILD_V423}</strong></div>
      </div>
      <div class="settings-two-buttons-v423">
        <button id="settingsPresenceOnlineV423" class="small-btn">Sync Online</button>
        <button id="settingsPresenceOfflineV423" class="small-btn">Set Offline</button>
      </div>
    `;
  }

  if (audio.parentElement !== body) body.appendChild(audio);
  if (presence.parentElement !== body) body.appendChild(presence);

  bindAudioV423();
  bindPresenceV423();
}

function updateAudioUiV423() {
  const settings = audioSettingsV423();
  const toggle = document.getElementById("settingsAudioToggleV423");
  const slider = document.getElementById("settingsAudioVolumeV423");
  const value = document.getElementById("settingsAudioVolumeTextV423");
  const status = document.getElementById("settingsAudioStatusV423");

  if (toggle) toggle.textContent = settings.enabled ? "Audio Cues: On" : "Audio Cues: Off";
  if (slider) slider.value = String(Math.round(settings.volume * 100));
  if (value) value.textContent = `${Math.round(settings.volume * 100)}%`;
  if (status) status.textContent = settings.enabled ? "Audio cues enabled for this device." : "Audio cues muted for this device.";

  document.querySelectorAll("audio").forEach(audio => {
    try {
      audio.volume = settings.volume;
      audio.muted = !settings.enabled || settings.volume <= 0;
    } catch (error) {}
  });
}

function bindAudioV423() {
  const toggle = document.getElementById("settingsAudioToggleV423");
  const test = document.getElementById("settingsAudioTestV423");
  const slider = document.getElementById("settingsAudioVolumeV423");

  if (toggle && !toggle.dataset.v423Bound) {
    toggle.dataset.v423Bound = "true";
    toggle.addEventListener("click", event => {
      event.preventDefault();
      const current = audioSettingsV423();
      saveAudioSettingsV423({ ...current, enabled: !current.enabled });
      updateAudioUiV423();
    });
  }

  if (test && !test.dataset.v423Bound) {
    test.dataset.v423Bound = "true";
    test.addEventListener("click", event => {
      event.preventDefault();
      testAudioV423();
    });
  }

  if (slider && !slider.dataset.v423Bound) {
    slider.dataset.v423Bound = "true";
    slider.addEventListener("input", event => {
      const current = audioSettingsV423();
      saveAudioSettingsV423({ ...current, volume: Number(event.target.value) / 100 });
      updateAudioUiV423();
    });
  }

  updateAudioUiV423();
}

function testAudioV423() {
  const settings = audioSettingsV423();
  const status = document.getElementById("settingsAudioStatusV423");

  if (!settings.enabled || settings.volume <= 0) {
    if (status) status.textContent = "Audio cues are muted.";
    return;
  }

  try {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) {
      if (status) status.textContent = "Audio test unavailable in this browser.";
      return;
    }
    const ctx = new AC();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "square";
    osc.frequency.value = 520;
    gain.gain.value = 0.035 * settings.volume;
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    setTimeout(() => {
      try { osc.stop(); } catch (error) {}
      try { ctx.close?.(); } catch (error) {}
    }, 95);
    if (status) status.textContent = "Test cue played.";
  } catch (error) {
    if (status) status.textContent = "Audio test failed.";
  }
}

function authUserV423() {
  try {
    if (typeof currentUser !== "undefined" && currentUser) return currentUser;
    if (typeof auth !== "undefined" && auth?.currentUser) return auth.currentUser;
  } catch (error) {}
  return null;
}

function databaseV423() {
  try {
    if (typeof db !== "undefined" && db) return db;
    if (typeof firestore !== "undefined" && firestore) return firestore;
  } catch (error) {}
  return null;
}

async function writePresenceV423(online) {
  const status = document.getElementById("settingsPresenceStatusV423");
  const state = document.getElementById("settingsPresenceStateV423");
  const user = authUserV423();
  const database = databaseV423();

  if (!user || !database?.collection) {
    if (status) status.textContent = "Presence unavailable until signed in.";
    if (state) state.textContent = "Signed out";
    return;
  }

  try {
    const payload = {
      uid: user.uid,
      ownerId: user.uid,
      online: !!online,
      activeBuild: STALKERNET_BUILD_V423,
      lastSeenLocal: Date.now(),
      lastSeen: (typeof firebase !== "undefined" && firebase.firestore?.FieldValue?.serverTimestamp)
        ? firebase.firestore.FieldValue.serverTimestamp()
        : new Date().toISOString()
    };

    await Promise.allSettled([
      database.collection("users").doc(user.uid).set(payload, { merge: true }),
      database.collection("profiles").doc(user.uid).set(payload, { merge: true })
    ]);

    if (status) status.textContent = online ? "Presence synced: online." : "Presence synced: offline.";
    if (state) state.textContent = online ? "Online" : "Offline";
  } catch (error) {
    if (status) status.textContent = "Presence sync failed.";
  }
}

function bindPresenceV423() {
  const online = document.getElementById("settingsPresenceOnlineV423");
  const offline = document.getElementById("settingsPresenceOfflineV423");
  const state = document.getElementById("settingsPresenceStateV423");
  const user = authUserV423();

  if (state) state.textContent = user ? "Ready" : "Signed out";

  if (online && !online.dataset.v423Bound) {
    online.dataset.v423Bound = "true";
    online.addEventListener("click", event => {
      event.preventDefault();
      writePresenceV423(true);
    });
  }

  if (offline && !offline.dataset.v423Bound) {
    offline.dataset.v423Bound = "true";
    offline.addEventListener("click", event => {
      event.preventDefault();
      writePresenceV423(false);
    });
  }
}

function installAppCacheContentV423() {
  const body = getCategoryBodyV423("app");
  if (!body) return;

  let install = document.getElementById("settingsInstallPanelV423");
  if (!install) {
    install = document.createElement("div");
    install.id = "settingsInstallPanelV423";
    install.className = "settings-lite-panel-v423";
    install.innerHTML = `
      <div class="module-label">APP INSTALL</div>
      <p id="settingsInstallStatusV423" class="message-text">Checking install mode...</p>
    `;
  }

  let cache = document.getElementById("settingsCachePanelV423");
  if (!cache) {
    cache = document.createElement("div");
    cache.id = "settingsCachePanelV423";
    cache.className = "settings-lite-panel-v423";
    cache.innerHTML = `
      <div class="module-label">CACHE MAINTENANCE</div>
      <p id="settingsCacheStatusV423" class="message-text">Current build: v4.3.5. Settings ready.</p>
      <div class="settings-two-buttons-v423">
        <button id="settingsRefreshAppV423" class="small-btn">Refresh App</button>
        <button id="settingsClearCachesV423" class="small-btn">Clear Old Caches</button>
      </div>
    `;
  }

  if (install.parentElement !== body) body.appendChild(install);
  if (cache.parentElement !== body) body.appendChild(cache);

  updateInstallStatusV423();
  bindCacheV423();
}

function updateInstallStatusV423() {
  const el = document.getElementById("settingsInstallStatusV423");
  if (!el) return;
  const installed =
    window.matchMedia?.("(display-mode: standalone)")?.matches ||
    window.navigator.standalone === true ||
    document.referrer.startsWith("android-app://");
  el.textContent = installed ? "StalkerNet is running in installed app mode." : "StalkerNet is running in browser mode.";
}

async function clearCachesV423() {
  const status = document.getElementById("settingsCacheStatusV423");
  try {
    if (!("caches" in window)) {
      if (status) status.textContent = "Cache API unavailable in this browser.";
      return;
    }
    const names = await caches.keys();
    let cleared = 0;
    await Promise.all(names.map(name => {
      const isStalkerNet = name.startsWith("stalkernet-cache-") || name.toLowerCase().includes("stalkernet");
      const current = name === "stalkernet-cache-v423-settings-tabs-content-fix";
      if (isStalkerNet && !current) {
        cleared++;
        return caches.delete(name);
      }
      return false;
    }));
    if (status) status.textContent = cleared ? `Cleared ${cleared} old cache${cleared === 1 ? "" : "s"}.` : "No old StalkerNet caches found.";
  } catch (error) {
    if (status) status.textContent = "Cache cleanup failed.";
  }
}

function bindCacheV423() {
  const refresh = document.getElementById("settingsRefreshAppV423");
  const clear = document.getElementById("settingsClearCachesV423");

  if (refresh && !refresh.dataset.v423Bound) {
    refresh.dataset.v423Bound = "true";
    refresh.addEventListener("click", event => {
      event.preventDefault();
      const url = new URL(location.href);
      url.searchParams.set("v", "435");
      url.searchParams.set("refresh", Date.now().toString(36));
      location.href = url.toString();
    });
  }

  if (clear && !clear.dataset.v423Bound) {
    clear.dataset.v423Bound = "true";
    clear.addEventListener("click", event => {
      event.preventDefault();
      clearCachesV423();
    });
  }
}

function installBackupContentV423() {
  const body = getCategoryBodyV423("backup");
  if (!body) return;

  let backup = document.getElementById("settingsBackupPanelV423");
  if (!backup) {
    backup = document.createElement("div");
    backup.id = "settingsBackupPanelV423";
    backup.className = "settings-lite-panel-v423";
    backup.innerHTML = `
      <div class="module-label">DATA BACKUP</div>
      <p id="settingsBackupStatusV423" class="message-text">Export local StalkerNet data before risky updates.</p>
      <div class="settings-two-buttons-v423">
        <button id="settingsCopyBackupV423" class="small-btn">Copy Backup</button>
        <button id="settingsDownloadBackupV423" class="small-btn">Download Backup</button>
      </div>
      <textarea id="settingsBackupInputV423" class="settings-textarea-v423" placeholder="Paste backup JSON here to restore..."></textarea>
      <button id="settingsRestoreBackupV423" class="small-btn danger-lite-v423">Restore Local Backup</button>
    `;
  }

  if (backup.parentElement !== body) body.appendChild(backup);
  bindBackupV423();
}

function collectBackupV423() {
  const local = {};
  Object.keys(localStorage || {}).forEach(key => {
    if (/stalkernet|pda|audio/i.test(key)) local[key] = localStorage.getItem(key);
  });
  return {
    app: "StalkerNet",
    backupVersion: STALKERNET_BUILD_V423,
    createdAt: new Date().toISOString(),
    localStorage: local,
    note: "Local backup only. Firebase cloud data is not changed."
  };
}

function bindBackupV423() {
  const copy = document.getElementById("settingsCopyBackupV423");
  const download = document.getElementById("settingsDownloadBackupV423");
  const restore = document.getElementById("settingsRestoreBackupV423");
  const status = document.getElementById("settingsBackupStatusV423");

  if (copy && !copy.dataset.v423Bound) {
    copy.dataset.v423Bound = "true";
    copy.addEventListener("click", async event => {
      event.preventDefault();
      const text = JSON.stringify(collectBackupV423(), null, 2);
      try {
        await navigator.clipboard.writeText(text);
        if (status) status.textContent = "Backup copied.";
      } catch (error) {
        const box = document.getElementById("settingsBackupInputV423");
        if (box) box.value = text;
        if (status) status.textContent = "Clipboard blocked. Backup placed in text box.";
      }
    });
  }

  if (download && !download.dataset.v423Bound) {
    download.dataset.v423Bound = "true";
    download.addEventListener("click", event => {
      event.preventDefault();
      const blob = new Blob([JSON.stringify(collectBackupV423(), null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `stalkernet-backup-${Date.now()}.json`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1200);
      if (status) status.textContent = "Backup download started.";
    });
  }

  if (restore && !restore.dataset.v423Bound) {
    restore.dataset.v423Bound = "true";
    restore.addEventListener("click", event => {
      event.preventDefault();
      const box = document.getElementById("settingsBackupInputV423");
      try {
        const data = JSON.parse(box?.value || "");
        if (data.app !== "StalkerNet") throw new Error("Not a StalkerNet backup.");
        if (!confirm("Restore local StalkerNet backup and reload?")) return;
        Object.entries(data.localStorage || {}).forEach(([key, value]) => {
          if (/stalkernet|pda|audio/i.test(key)) localStorage.setItem(key, value);
        });
        location.href = location.pathname + "?v=423&restore=" + Date.now().toString(36);
      } catch (error) {
        if (status) status.textContent = "Invalid backup JSON.";
      }
    });
  }
}

function installDiagnosticsContentV423() {
  const body = getCategoryBodyV423("diagnostics");
  if (!body) return;

  let status = document.getElementById("settingsDiagnosticsPanelV423");
  if (!status) {
    status = document.createElement("div");
    status.id = "settingsDiagnosticsPanelV423";
    status.className = "settings-lite-panel-v423";
    status.innerHTML = `
      <div class="module-label">SYSTEM STATUS</div>
      <div class="settings-status-grid-v423">
        <div><span>Build</span><strong>v4.3.5</strong></div>
        <div><span>Login</span><strong id="settingsDiagLoginV423">Checking</strong></div>
        <div><span>Firebase</span><strong id="settingsDiagFirebaseV423">Checking</strong></div>
        <div><span>Screen</span><strong>${window.innerWidth}x${window.innerHeight}</strong></div>
      </div>
      <button id="settingsCopyStatusV423" class="small-btn">Copy Status Report</button>
    `;
  }

  let errors = document.getElementById("settingsErrorPanelV423");
  if (!errors) {
    errors = document.createElement("div");
    errors.id = "settingsErrorPanelV423";
    errors.className = "settings-lite-panel-v423";
    errors.innerHTML = `
      <div class="module-label">ERROR LOG</div>
      <p id="settingsErrorStatusV423" class="message-text">Recent errors and filtered warnings.</p>
      <div class="settings-two-buttons-v423">
        <button id="settingsCopyBugV423" class="small-btn">Copy Bug Report</button>
        <button id="settingsClearBugV423" class="small-btn danger-lite-v423">Clear Log</button>
      </div>
    `;
  }

  if (status.parentElement !== body) body.appendChild(status);
  if (errors.parentElement !== body) body.appendChild(errors);
  bindDiagnosticsV423();
  updateDiagnosticsV423();
}

function readErrorEntriesV423() {
  try {
    const saved = JSON.parse(localStorage.getItem(ERROR_LOG_KEY_V423) || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch (error) {
    return [];
  }
}

function updateDiagnosticsV423() {
  const login = document.getElementById("settingsDiagLoginV423");
  const firebaseEl = document.getElementById("settingsDiagFirebaseV423");
  const errorStatus = document.getElementById("settingsErrorStatusV423");
  const user = authUserV423();
  if (login) login.textContent = user ? "Signed in" : "Signed out";
  if (firebaseEl) firebaseEl.textContent = databaseV423()?.collection ? "Available" : "Unavailable";
  if (errorStatus) {
    const count = readErrorEntriesV423().length;
    errorStatus.textContent = count ? `${count} recent log entr${count === 1 ? "y" : "ies"}.` : "No recent PDA faults detected.";
  }
}

function statusReportV423() {
  return [
    "STALKERNET STATUS REPORT",
    `Build: ${STALKERNET_BUILD_V423}`,
    `URL: ${location.href}`,
    `Screen: ${window.innerWidth}x${window.innerHeight}`,
    `Online: ${navigator.onLine}`,
    `Login: ${authUserV423() ? "Signed in" : "Signed out"}`,
    `Firebase: ${databaseV423()?.collection ? "Available" : "Unavailable"}`,
    `User Agent: ${navigator.userAgent}`
  ].join("\n");
}

function bindDiagnosticsV423() {
  const copyStatus = document.getElementById("settingsCopyStatusV423");
  const copyBug = document.getElementById("settingsCopyBugV423");
  const clearBug = document.getElementById("settingsClearBugV423");

  if (copyStatus && !copyStatus.dataset.v423Bound) {
    copyStatus.dataset.v423Bound = "true";
    copyStatus.addEventListener("click", async event => {
      event.preventDefault();
      try { await navigator.clipboard.writeText(statusReportV423()); } catch (error) { console.log(statusReportV423()); }
    });
  }

  if (copyBug && !copyBug.dataset.v423Bound) {
    copyBug.dataset.v423Bound = "true";
    copyBug.addEventListener("click", async event => {
      event.preventDefault();
      const report = [
        statusReportV423(),
        "",
        "ERROR LOG:",
        JSON.stringify(readErrorEntriesV423(), null, 2)
      ].join("\n");
      try { await navigator.clipboard.writeText(report); } catch (error) { console.log(report); }
    });
  }

  if (clearBug && !clearBug.dataset.v423Bound) {
    clearBug.dataset.v423Bound = "true";
    clearBug.addEventListener("click", event => {
      event.preventDefault();
      if (!confirm("Clear local error log?")) return;
      localStorage.setItem(ERROR_LOG_KEY_V423, "[]");
      updateDiagnosticsV423();
    });
  }
}

function activateSettingsTabV423(id) {
  if (!SETTINGS_TABS_V423.some(tab => tab.id === id)) id = "preferences";

  document.querySelectorAll(".settings-category-btn-v422").forEach(btn => {
    const active = btn.dataset.settingsCategoryV422 === id;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-selected", active ? "true" : "false");
  });

  document.querySelectorAll(".settings-category-pane-v422").forEach(pane => {
    const active = pane.dataset.settingsCategoryPaneV422 === id;
    pane.classList.toggle("active", active);
    pane.classList.toggle("hidden", !active);
    pane.style.display = active ? "block" : "none";
  });

  saveActiveSettingsTabV423(id);
}

function installStableSettingsContentV423() {
  const shell = ensureSettingsTabsShellV423();
  if (!shell) return;

  clearOldAutoMovedContentV423();

  installPreferencesContentV423();
  installAppCacheContentV423();
  installBackupContentV423();
  installDiagnosticsContentV423();

  activateSettingsTabV423(activeSettingsTabV423());
}

// Override v4.3.5 setup functions to use the robust v4.3.5 content.
window.activateSettingsCategoryV422 = activateSettingsTabV423;
window.setupSettingsCategoryTabsV422 = installStableSettingsContentV423;
window.moveSettingsPanelsIntoTabsV422 = installStableSettingsContentV423;
try {
  activateSettingsCategoryV422 = activateSettingsTabV423;
  setupSettingsCategoryTabsV422 = installStableSettingsContentV423;
  moveSettingsPanelsIntoTabsV422 = installStableSettingsContentV423;
} catch (error) {}

window.addEventListener("load", () => {
  [80, 300, 900, 1800, 3200].forEach(delay => setTimeout(installStableSettingsContentV423, delay));
});

document.addEventListener("click", event => {
  const target = event.target;
  const button = target?.closest?.(".settings-category-btn-v422");
  if (button) {
    event.preventDefault();
    event.stopPropagation();
    activateSettingsTabV423(button.dataset.settingsCategoryV422 || "preferences");
    return;
  }

  if (target?.closest?.("#settingsTab, [data-tab='settingsTab'], .settings-nav-v405, .settings-nav-fixed-v406, .nav-btn")) {
    setTimeout(installStableSettingsContentV423, 80);
  }
}, true);

window.installStableSettingsContentV423 = installStableSettingsContentV423;
window.activateSettingsTabV423 = activateSettingsTabV423;



// v4.3.5 Display Preferences
const STALKERNET_BUILD_V424 = "v4.3.5";
const DISPLAY_PREFS_KEY_V424 = "stalkernet_display_preferences_v424";

function readDisplayPrefsV424() {
  try {
    const saved = JSON.parse(localStorage.getItem(DISPLAY_PREFS_KEY_V424) || "null");
    return {
      compact: saved?.compact === true,
      largeText: saved?.largeText === true,
      scanlines: saved?.scanlines !== false,
      reducedMotion: saved?.reducedMotion === true
    };
  } catch (error) {
    return { compact: false, largeText: false, scanlines: true, reducedMotion: false };
  }
}

function saveDisplayPrefsV424(prefs) {
  const clean = {
    compact: !!prefs.compact,
    largeText: !!prefs.largeText,
    scanlines: prefs.scanlines !== false,
    reducedMotion: !!prefs.reducedMotion
  };
  localStorage.setItem(DISPLAY_PREFS_KEY_V424, JSON.stringify(clean));
  return clean;
}

function applyDisplayPrefsV424() {
  const prefs = readDisplayPrefsV424();

  document.body.classList.toggle("display-compact-v424", prefs.compact);
  document.body.classList.toggle("display-large-text-v424", prefs.largeText);
  document.body.classList.toggle("display-no-scanlines-v424", !prefs.scanlines);
  document.body.classList.toggle("display-reduced-motion-v424", prefs.reducedMotion);

  const compactBtn = document.getElementById("displayCompactBtnV424");
  const textBtn = document.getElementById("displayTextBtnV424");
  const scanBtn = document.getElementById("displayScanlinesBtnV424");
  const motionBtn = document.getElementById("displayMotionBtnV424");
  const status = document.getElementById("displayPrefsStatusV424");

  if (compactBtn) compactBtn.textContent = prefs.compact ? "Compact: On" : "Compact: Off";
  if (textBtn) textBtn.textContent = prefs.largeText ? "Large Text: On" : "Large Text: Off";
  if (scanBtn) scanBtn.textContent = prefs.scanlines ? "Scanlines: On" : "Scanlines: Off";
  if (motionBtn) motionBtn.textContent = prefs.reducedMotion ? "Reduced Motion: On" : "Reduced Motion: Off";

  [compactBtn, textBtn, scanBtn, motionBtn].forEach(btn => {
    if (!btn) return;
    const on = /: On$/.test(btn.textContent || "");
    btn.classList.toggle("setting-on-v424", on);
  });

  if (status) {
    const parts = [];
    if (prefs.compact) parts.push("compact");
    if (prefs.largeText) parts.push("large text");
    if (!prefs.scanlines) parts.push("scanlines off");
    if (prefs.reducedMotion) parts.push("reduced motion");
    status.textContent = parts.length ? `Display preferences active: ${parts.join(", ")}.` : "Default display settings active.";
  }
}

function createDisplayPrefsPanelV424() {
  let panel = document.getElementById("settingsDisplayPanelV424");
  if (panel) return panel;

  panel = document.createElement("div");
  panel.id = "settingsDisplayPanelV424";
  panel.className = "settings-lite-panel-v423 settings-display-panel-v424";
  panel.innerHTML = `
    <div class="module-label">DISPLAY PREFERENCES</div>
    <p id="displayPrefsStatusV424" class="message-text">Default display settings active.</p>
    <div class="display-prefs-grid-v424">
      <button id="displayCompactBtnV424" class="small-btn">Compact: Off</button>
      <button id="displayTextBtnV424" class="small-btn">Large Text: Off</button>
      <button id="displayScanlinesBtnV424" class="small-btn">Scanlines: On</button>
      <button id="displayMotionBtnV424" class="small-btn">Reduced Motion: Off</button>
    </div>
    <button id="displayResetBtnV424" class="small-btn display-reset-v424">Reset Display Preferences</button>
  `;

  return panel;
}

function installDisplayPrefsPanelV424() {
  if (typeof installStableSettingsContentV423 === "function") {
    try { installStableSettingsContentV423(); } catch (error) {}
  }

  const body =
    document.getElementById("settingsCategoryBodyV422_preferences") ||
    document.getElementById("settingsCategoryBodyV422_preferences".replace("preferences", "preferences"));

  if (!body) return;

  const panel = createDisplayPrefsPanelV424();

  const presence = document.getElementById("settingsPresencePanelV423");
  if (presence && presence.parentElement === body) {
    body.insertBefore(panel, presence);
  } else if (panel.parentElement !== body) {
    body.appendChild(panel);
  }

  bindDisplayPrefsV424();
  applyDisplayPrefsV424();
}

function bindDisplayPrefsV424() {
  const compactBtn = document.getElementById("displayCompactBtnV424");
  const textBtn = document.getElementById("displayTextBtnV424");
  const scanBtn = document.getElementById("displayScanlinesBtnV424");
  const motionBtn = document.getElementById("displayMotionBtnV424");
  const resetBtn = document.getElementById("displayResetBtnV424");

  if (compactBtn && !compactBtn.dataset.v424Bound) {
    compactBtn.dataset.v424Bound = "true";
    compactBtn.addEventListener("click", event => {
      event.preventDefault();
      const prefs = readDisplayPrefsV424();
      saveDisplayPrefsV424({ ...prefs, compact: !prefs.compact });
      applyDisplayPrefsV424();
    });
  }

  if (textBtn && !textBtn.dataset.v424Bound) {
    textBtn.dataset.v424Bound = "true";
    textBtn.addEventListener("click", event => {
      event.preventDefault();
      const prefs = readDisplayPrefsV424();
      saveDisplayPrefsV424({ ...prefs, largeText: !prefs.largeText });
      applyDisplayPrefsV424();
    });
  }

  if (scanBtn && !scanBtn.dataset.v424Bound) {
    scanBtn.dataset.v424Bound = "true";
    scanBtn.addEventListener("click", event => {
      event.preventDefault();
      const prefs = readDisplayPrefsV424();
      saveDisplayPrefsV424({ ...prefs, scanlines: !prefs.scanlines });
      applyDisplayPrefsV424();
    });
  }

  if (motionBtn && !motionBtn.dataset.v424Bound) {
    motionBtn.dataset.v424Bound = "true";
    motionBtn.addEventListener("click", event => {
      event.preventDefault();
      const prefs = readDisplayPrefsV424();
      saveDisplayPrefsV424({ ...prefs, reducedMotion: !prefs.reducedMotion });
      applyDisplayPrefsV424();
    });
  }

  if (resetBtn && !resetBtn.dataset.v424Bound) {
    resetBtn.dataset.v424Bound = "true";
    resetBtn.addEventListener("click", event => {
      event.preventDefault();
      saveDisplayPrefsV424({ compact: false, largeText: false, scanlines: true, reducedMotion: false });
      applyDisplayPrefsV424();
    });
  }
}

function patchBuildLabelsV424() {
  const cacheStatus = document.getElementById("settingsCacheStatusV423") || document.getElementById("cacheStatusV3998");
  if (cacheStatus) cacheStatus.textContent = "Current build: v4.3.5. Settings ready.";

  document.querySelectorAll("#settingsDiagnosticsPanelV423 strong, #sysBuildV413").forEach(el => {
    if (/^v4\./.test(el.textContent || "")) el.textContent = STALKERNET_BUILD_V424;
  });

  const presenceBuild = document.querySelector("#settingsPresencePanelV423 .settings-status-grid-v423 div:nth-child(2) strong");
  if (presenceBuild && /^v4\./.test(presenceBuild.textContent || "")) presenceBuild.textContent = STALKERNET_BUILD_V424;
}

const oldInstallStableSettingsContentV423_V424 = window.installStableSettingsContentV423;
if (typeof oldInstallStableSettingsContentV423_V424 === "function" && !window.__displayPrefsPatchedV424) {
  window.__displayPrefsPatchedV424 = true;
  window.installStableSettingsContentV423 = function(...args) {
    const result = oldInstallStableSettingsContentV423_V424.apply(this, args);
    setTimeout(installDisplayPrefsPanelV424, 60);
    setTimeout(patchBuildLabelsV424, 80);
    return result;
  };
  try { installStableSettingsContentV423 = window.installStableSettingsContentV423; } catch (error) {}
}

window.addEventListener("load", () => {
  applyDisplayPrefsV424();
  [100, 400, 1000, 2200].forEach(delay => {
    setTimeout(() => {
      installDisplayPrefsPanelV424();
      patchBuildLabelsV424();
      applyDisplayPrefsV424();
    }, delay);
  });
});

document.addEventListener("click", event => {
  const target = event.target;
  if (target?.closest?.("#settingsTab, [data-tab='settingsTab'], .settings-category-btn-v422, .nav-btn")) {
    setTimeout(() => {
      installDisplayPrefsPanelV424();
      patchBuildLabelsV424();
      applyDisplayPrefsV424();
    }, 120);
  }
}, true);

window.readDisplayPrefsV424 = readDisplayPrefsV424;
window.applyDisplayPrefsV424 = applyDisplayPrefsV424;
window.installDisplayPrefsPanelV424 = installDisplayPrefsPanelV424;



// v4.3.5 Comms Draft Lite SAFE
// Small patch only. Does not touch Settings category tabs.

const STALKERNET_BUILD_V426 = "v4.3.5";
const COMMS_DRAFT_KEY_V426 = "stalkernet_comms_draft_lite_v426";

function getCommsInputV426() {
  return document.getElementById("messageInput");
}

function getCommsSendBtnV426() {
  return document.getElementById("sendBtn");
}

function ensureCommsDraftLitePanelV426() {
  const input = getCommsInputV426();
  if (!input) return null;

  let panel = document.getElementById("commsDraftLitePanelV426");
  if (!panel) {
    panel = document.createElement("div");
    panel.id = "commsDraftLitePanelV426";
    panel.className = "comms-draft-lite-panel-v426";
    panel.innerHTML = `
      <span id="commsDraftLiteStatusV426">Draft autosave ready.</span>
      <button id="clearCommsDraftLiteBtnV426" class="small-btn">Clear Draft</button>
    `;
  }

  const inputRow = input.closest(".input-row") || input.parentElement;
  if (inputRow && panel.previousElementSibling !== inputRow) {
    inputRow.insertAdjacentElement("afterend", panel);
  }

  bindCommsDraftLiteV426();
  updateCommsDraftLiteStatusV426();
  return panel;
}

function updateCommsDraftLiteStatusV426() {
  const input = getCommsInputV426();
  const status = document.getElementById("commsDraftLiteStatusV426");
  if (!input || !status) return;

  const text = input.value || "";
  const saved = localStorage.getItem(COMMS_DRAFT_KEY_V426) || "";

  if (!text.trim()) {
    status.textContent = "No draft currently saved.";
  } else if (text === saved) {
    status.textContent = `Draft saved locally (${text.length} char${text.length === 1 ? "" : "s"}).`;
  } else {
    status.textContent = `Draft ready (${text.length} char${text.length === 1 ? "" : "s"}).`;
  }
}

function saveCommsDraftLiteV426() {
  const input = getCommsInputV426();
  if (!input) return;

  const text = input.value || "";
  try {
    if (text.trim()) localStorage.setItem(COMMS_DRAFT_KEY_V426, text);
    else localStorage.removeItem(COMMS_DRAFT_KEY_V426);
  } catch (error) {}

  updateCommsDraftLiteStatusV426();
}

function restoreCommsDraftLiteV426() {
  const input = getCommsInputV426();
  if (!input) return;

  const saved = localStorage.getItem(COMMS_DRAFT_KEY_V426) || "";
  if (saved && !input.value) {
    input.value = saved;
    input.dispatchEvent(new Event("input", { bubbles: true }));
  }

  updateCommsDraftLiteStatusV426();
}

function clearCommsDraftLiteV426() {
  const input = getCommsInputV426();

  try { localStorage.removeItem(COMMS_DRAFT_KEY_V426); } catch (error) {}

  if (input) {
    input.value = "";
    input.dispatchEvent(new Event("input", { bubbles: true }));
    input.focus?.();
  }

  updateCommsDraftLiteStatusV426();
}

function bindCommsDraftLiteV426() {
  const input = getCommsInputV426();
  const send = getCommsSendBtnV426();
  const clear = document.getElementById("clearCommsDraftLiteBtnV426");

  if (input && !input.dataset.v426DraftBound) {
    input.dataset.v426DraftBound = "true";

    input.addEventListener("input", () => {
      clearTimeout(window.__commsDraftLiteTimerV426);
      updateCommsDraftLiteStatusV426();
      window.__commsDraftLiteTimerV426 = setTimeout(saveCommsDraftLiteV426, 450);
    });

    input.addEventListener("blur", saveCommsDraftLiteV426);
  }

  if (send && !send.dataset.v426DraftBound) {
    send.dataset.v426DraftBound = "true";

    send.addEventListener("click", () => {
      // Original send handler should clear the input if send succeeds.
      setTimeout(() => {
        const next = getCommsInputV426();
        if (!next || !next.value.trim()) {
          try { localStorage.removeItem(COMMS_DRAFT_KEY_V426); } catch (error) {}
          updateCommsDraftLiteStatusV426();
        } else {
          saveCommsDraftLiteV426();
        }
      }, 600);
    }, true);
  }

  if (clear && !clear.dataset.v426DraftBound) {
    clear.dataset.v426DraftBound = "true";
    clear.addEventListener("click", event => {
      event.preventDefault();
      clearCommsDraftLiteV426();
    });
  }
}

function patchBuildLabelsV426() {
  const cacheStatus = document.getElementById("settingsCacheStatusV423") || document.getElementById("cacheStatusV3998");
  if (cacheStatus) cacheStatus.textContent = "Current build: v4.3.5. Settings ready.";

  document.querySelectorAll("#settingsDiagnosticsPanelV423 strong, #sysBuildV413").forEach(el => {
    if (/^v4\./.test(el.textContent || "")) el.textContent = STALKERNET_BUILD_V426;
  });

  const presenceBuild = document.querySelector("#settingsPresencePanelV423 .settings-status-grid-v423 div:nth-child(2) strong");
  if (presenceBuild && /^v4\./.test(presenceBuild.textContent || "")) presenceBuild.textContent = STALKERNET_BUILD_V426;
}

function setupCommsDraftLiteV426() {
  ensureCommsDraftLitePanelV426();
  restoreCommsDraftLiteV426();
  patchBuildLabelsV426();
}

window.addEventListener("load", () => {
  [120, 500, 1200, 2400].forEach(delay => setTimeout(setupCommsDraftLiteV426, delay));
});

window.addEventListener("beforeunload", () => {
  try { saveCommsDraftLiteV426(); } catch (error) {}
});

document.addEventListener("click", event => {
  const target = event.target;
  if (target?.closest?.("#messagesTab, #commsTab, [data-tab='messagesTab'], [data-tab='commsTab'], .nav-btn")) {
    setTimeout(setupCommsDraftLiteV426, 140);
  }
}, true);

window.setupCommsDraftLiteV426 = setupCommsDraftLiteV426;
window.clearCommsDraftLiteV426 = clearCommsDraftLiteV426;



// v4.3.5 Build Display Sync
// One central build label, synced across visible panels and reports.
const STALKERNET_BUILD_V427 = "v4.3.5";
window.STALKERNET_CURRENT_BUILD = STALKERNET_BUILD_V427;

function stalkerNetBuildV427() {
  return window.STALKERNET_CURRENT_BUILD || STALKERNET_BUILD_V427;
}

function replaceBuildTextV427(root) {
  if (!root) return;

  const build = stalkerNetBuildV427();
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const text = node.nodeValue || "";
      if (/v4\.\d+\.\d+/.test(text) || /Current build: v4\.\d+\.\d+/.test(text)) {
        return NodeFilter.FILTER_ACCEPT;
      }
      return NodeFilter.FILTER_REJECT;
    }
  });

  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  nodes.forEach(node => {
    node.nodeValue = node.nodeValue
      .replace(/Current build: v4\.\d+\.\d+\. Settings ready\./g, `Current build: ${build}. Settings ready.`)
      .replace(/\bv4\.\d+\.\d+\b/g, build);
  });
}

function syncKnownBuildFieldsV427() {
  const build = stalkerNetBuildV427();

  const exactFields = [
    "sysBuildV413",
    "settingsCacheStatusV423",
    "cacheStatusV3998"
  ];

  exactFields.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;

    if (id.toLowerCase().includes("cache") || /Current build:/i.test(el.textContent || "")) {
      el.textContent = `Current build: ${build}. Settings ready.`;
    } else {
      el.textContent = build;
    }
  });

  // Presence panel build field from v4.3.5/v4.3.5 settings tabs.
  document.querySelectorAll(
    "#settingsPresencePanelV423 .settings-status-grid-v423 strong, " +
    "#presencePanelV411 .presence-grid-v411 strong, " +
    "#settingsDiagnosticsPanelV423 strong, " +
    "#systemStatusPanelV413 strong"
  ).forEach(el => {
    if (/^v4\.\d+\.\d+$/.test((el.textContent || "").trim())) {
      el.textContent = build;
    }
  });

  replaceBuildTextV427(document.getElementById("settingsTab"));
  replaceBuildTextV427(document.getElementById("messagesTab") || document.getElementById("commsTab"));
}

function patchBuildReportFunctionsV427() {
  const build = stalkerNetBuildV427();

  if (typeof window.statusReportV423 === "function" && !window.__statusReportBuildPatchedV427) {
    window.__statusReportBuildPatchedV427 = true;
    const original = window.statusReportV423;
    window.statusReportV423 = function(...args) {
      return String(original.apply(this, args)).replace(/\bv4\.\d+\.\d+\b/g, build);
    };
    try { statusReportV423 = window.statusReportV423; } catch (error) {}
  }

  if (typeof window.collectLocalBackupV412 === "function" && !window.__backupBuildPatchedV427) {
    window.__backupBuildPatchedV427 = true;
    const original = window.collectLocalBackupV412;
    window.collectLocalBackupV412 = function(...args) {
      const data = original.apply(this, args);
      if (data && typeof data === "object") data.backupVersion = build;
      return data;
    };
    try { collectLocalBackupV412 = window.collectLocalBackupV412; } catch (error) {}
  }

  if (typeof window.collectSystemStatusV413 === "function" && !window.__systemStatusBuildPatchedV427) {
    window.__systemStatusBuildPatchedV427 = true;
    const original = window.collectSystemStatusV413;
    window.collectSystemStatusV413 = async function(...args) {
      const data = await original.apply(this, args);
      if (data && typeof data === "object") data.build = build;
      return data;
    };
    try { collectSystemStatusV413 = window.collectSystemStatusV413; } catch (error) {}
  }
}

function syncBuildDisplayV427() {
  patchBuildReportFunctionsV427();
  syncKnownBuildFieldsV427();
}

// Patch older build-label functions so future refreshes keep the latest label.
[
  "patchBuildLabelsV424",
  "patchBuildLabelsV425",
  "patchBuildLabelsV426",
  "patchBuildLabelsV423",
  "patchBuildLabelsV422"
].forEach(fnName => {
  const original = window[fnName];
  if (typeof original === "function" && !original.__buildSyncPatchedV427) {
    const patched = function(...args) {
      const result = original.apply(this, args);
      setTimeout(syncBuildDisplayV427, 20);
      return result;
    };
    patched.__buildSyncPatchedV427 = true;
    window[fnName] = patched;
    try { eval(`${fnName} = window[fnName]`); } catch (error) {}
  }
});

window.addEventListener("load", () => {
  [80, 250, 700, 1500, 3000].forEach(delay => setTimeout(syncBuildDisplayV427, delay));
});

document.addEventListener("click", event => {
  const target = event.target;
  if (target?.closest?.("#settingsTab, .settings-category-btn-v422, .nav-btn, [data-tab], #messagesTab, #commsTab")) {
    setTimeout(syncBuildDisplayV427, 80);
    setTimeout(syncBuildDisplayV427, 300);
  }
}, true);

window.syncBuildDisplayV427 = syncBuildDisplayV427;



// v4.3.5 Build Display HARD LOCK
// Stops older helpers from flipping visible build labels back and forth.

const STALKERNET_BUILD_V428 = "v4.3.5";
window.STALKERNET_CURRENT_BUILD = STALKERNET_BUILD_V428;

function currentBuildV428() {
  return window.STALKERNET_CURRENT_BUILD || STALKERNET_BUILD_V428;
}

function syncTextNodeBuildsV428(root = document) {
  const build = currentBuildV428();
  if (!root) return;

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const text = node.nodeValue || "";
      return /v4\.\d+\.\d+|Current build: v4\.\d+\.\d+/.test(text)
        ? NodeFilter.FILTER_ACCEPT
        : NodeFilter.FILTER_REJECT;
    }
  });

  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  nodes.forEach(node => {
    const next = node.nodeValue
      .replace(/Current build: v4\.\d+\.\d+\. Settings ready\./g, `Current build: ${build}. Settings ready.`)
      .replace(/\bv4\.\d+\.\d+\b/g, build);

    if (node.nodeValue !== next) node.nodeValue = next;
  });
}

function syncBuildFieldsV428() {
  const build = currentBuildV428();

  // Direct known cache/status fields.
  [
    "settingsCacheStatusV423",
    "cacheStatusV3998"
  ].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = `Current build: ${build}. Settings ready.`;
  });

  // Direct known build fields.
  [
    "sysBuildV413"
  ].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = build;
  });

  // Any standalone build-looking strong/text fields inside Settings.
  document.querySelectorAll(
    "#settingsTab strong, #settingsTab span, #settingsTab p, " +
    "#systemStatusPanelV413 strong, #settingsDiagnosticsPanelV423 strong, " +
    "#presencePanelV411 strong, #settingsPresencePanelV423 strong"
  ).forEach(el => {
    const text = (el.textContent || "").trim();

    if (/^v4\.\d+\.\d+$/.test(text)) {
      el.textContent = build;
      return;
    }

    if (/Current build: v4\.\d+\.\d+/.test(text)) {
      el.textContent = text.replace(/Current build: v4\.\d+\.\d+\. Settings ready\./, `Current build: ${build}. Settings ready.`);
    }
  });

  syncTextNodeBuildsV428(document.getElementById("settingsTab") || document);
}

function hardLockBuildLabelHelpersV428() {
  const labelFns = [
    "patchBuildLabelsV422",
    "patchBuildLabelsV423",
    "patchBuildLabelsV424",
    "patchBuildLabelsV425",
    "patchBuildLabelsV426",
    "patchBuildLabelsV427",
    "syncBuildDisplayV427"
  ];

  labelFns.forEach(fnName => {
    window[fnName] = function() {
      setTimeout(syncBuildFieldsV428, 0);
      setTimeout(syncBuildFieldsV428, 40);
      return true;
    };

    try {
      // Rebind same-named global function variables where they exist.
      eval(`${fnName} = window[fnName]`);
    } catch (error) {}
  });
}

function patchReportsV428() {
  const build = currentBuildV428();

  if (typeof window.statusReportV423 === "function" && !window.statusReportV423.__hardLockedV428) {
    const original = window.statusReportV423;
    const patched = function(...args) {
      return String(original.apply(this, args)).replace(/\bv4\.\d+\.\d+\b/g, build);
    };
    patched.__hardLockedV428 = true;
    window.statusReportV423 = patched;
    try { statusReportV423 = patched; } catch (error) {}
  }

  if (typeof window.collectSystemStatusV413 === "function" && !window.collectSystemStatusV413.__hardLockedV428) {
    const original = window.collectSystemStatusV413;
    const patched = async function(...args) {
      const data = await original.apply(this, args);
      if (data && typeof data === "object") data.build = build;
      return data;
    };
    patched.__hardLockedV428 = true;
    window.collectSystemStatusV413 = patched;
    try { collectSystemStatusV413 = patched; } catch (error) {}
  }
}

let buildObserverV428 = null;

function startBuildObserverV428() {
  if (buildObserverV428) return;

  const root = document.getElementById("settingsTab") || document.body;
  if (!root) return;

  buildObserverV428 = new MutationObserver(() => {
    clearTimeout(window.__buildSyncTimerV428);
    window.__buildSyncTimerV428 = setTimeout(syncBuildFieldsV428, 20);
  });

  buildObserverV428.observe(root, {
    subtree: true,
    childList: true,
    characterData: true
  });
}

function setupBuildHardLockV428() {
  hardLockBuildLabelHelpersV428();
  patchReportsV428();
  syncBuildFieldsV428();
  startBuildObserverV428();
}

window.addEventListener("load", () => {
  [20, 80, 180, 400, 900, 1800, 3200, 5200].forEach(delay => {
    setTimeout(setupBuildHardLockV428, delay);
  });
});

document.addEventListener("click", event => {
  const target = event.target;
  if (target?.closest?.("#settingsTab, .settings-category-btn-v422, .nav-btn, [data-tab], #messagesTab, #commsTab")) {
    setTimeout(setupBuildHardLockV428, 30);
    setTimeout(syncBuildFieldsV428, 160);
    setTimeout(syncBuildFieldsV428, 500);
  }
}, true);

window.syncBuildFieldsV428 = syncBuildFieldsV428;
window.setupBuildHardLockV428 = setupBuildHardLockV428;



// v4.3.5 Comms Search / Filter Polish
const STALKERNET_BUILD_V430 = "v4.3.5";
window.STALKERNET_CURRENT_BUILD = STALKERNET_BUILD_V430;

const COMMS_SEARCH_STATE_KEY_V430 = "stalkernet_comms_search_state_v430";

function commsRootV430() {
  return document.getElementById("messagesTab") || document.getElementById("commsTab");
}

function readCommsSearchStateV430() {
  try {
    const saved = JSON.parse(localStorage.getItem(COMMS_SEARCH_STATE_KEY_V430) || "null");
    return {
      query: typeof saved?.query === "string" ? saved.query : "",
      mode: ["all", "callsign", "faction", "message"].includes(saved?.mode) ? saved.mode : "all"
    };
  } catch (error) {
    return { query: "", mode: "all" };
  }
}

function saveCommsSearchStateV430(state) {
  const clean = {
    query: String(state.query || ""),
    mode: ["all", "callsign", "faction", "message"].includes(state.mode) ? state.mode : "all"
  };
  try { localStorage.setItem(COMMS_SEARCH_STATE_KEY_V430, JSON.stringify(clean)); } catch (error) {}
  return clean;
}

function ensureCommsSearchPanelV430() {
  const root = commsRootV430();
  if (!root) return null;

  let panel = document.getElementById("commsSearchPanelV430");
  if (!panel) {
    panel = document.createElement("section");
    panel.id = "commsSearchPanelV430";
    panel.className = "comms-search-panel-v430 module-panel";
    panel.innerHTML = `
      <div class="module-label">COMMS SEARCH</div>
      <div class="comms-search-row-v430">
        <input id="commsSearchInputV430" type="search" placeholder="Search callsign, faction, or message..." autocomplete="off" />
        <button id="clearCommsSearchBtnV430" class="small-btn">Clear</button>
      </div>
      <div class="comms-search-modes-v430">
        <button class="small-btn comms-search-mode-v430" data-search-mode-v430="all">All</button>
        <button class="small-btn comms-search-mode-v430" data-search-mode-v430="callsign">Callsign</button>
        <button class="small-btn comms-search-mode-v430" data-search-mode-v430="faction">Faction</button>
        <button class="small-btn comms-search-mode-v430" data-search-mode-v430="message">Message</button>
      </div>
      <p id="commsSearchStatusV430" class="message-text comms-search-status-v430">Search ready.</p>
    `;
  }

  const filters =
    root.querySelector(".comms-filters") ||
    root.querySelector(".filter-row") ||
    root.querySelector(".channel-tabs") ||
    root.querySelector(".section-top");

  if (filters && panel.parentElement !== root) {
    filters.insertAdjacentElement("afterend", panel);
  } else if (!panel.parentElement) {
    // Prefer before messages list if possible.
    const list =
      root.querySelector("#messagesList") ||
      root.querySelector("#messageList") ||
      root.querySelector(".messages-list") ||
      root.querySelector(".comms-list") ||
      root.querySelector(".message-list");
    if (list) root.insertBefore(panel, list);
    else root.insertBefore(panel, root.firstElementChild?.nextElementSibling || root.firstElementChild);
  }

  bindCommsSearchPanelV430();
  applyCommsSearchStateToUiV430();
  return panel;
}

function messageCardsV430() {
  const root = commsRootV430();
  if (!root) return [];

  const selectors = [
    ".message-card",
    ".comms-message",
    ".chat-message",
    "[data-message-id]",
    ".feed-card"
  ];

  const cards = new Set();
  selectors.forEach(selector => {
    root.querySelectorAll(selector).forEach(el => {
      if (el.id === "commsSearchPanelV430" || el.closest("#commsSearchPanelV430")) return;
      if (el.closest(".input-row") || el.closest("#commsDraftLitePanelV426") || el.closest("#commsCacheToolsPanelV407")) return;
      cards.add(el);
    });
  });

  // Fallback: detect message-looking module panels that include Delete or sender headers.
  if (!cards.size) {
    root.querySelectorAll(".module-panel, article, .card").forEach(el => {
      const text = (el.innerText || "").trim();
      if (!text || text.length < 12) return;
      if (/write a public message|cache maintenance|comms search/i.test(text)) return;
      if (/delete|public chat|mercenary|loner|duty|freedom|bandit|clear sky|monolith/i.test(text)) cards.add(el);
    });
  }

  return Array.from(cards);
}

function cardTextForModeV430(card, mode) {
  const text = (card.innerText || card.textContent || "").toLowerCase();

  if (mode === "all") return text;

  if (mode === "callsign") {
    const headings = Array.from(card.querySelectorAll("h1,h2,h3,h4,strong,.callsign,.sender,.message-author,.message-name"))
      .map(el => el.textContent || "")
      .join(" ");
    return (headings || text.split("\n").slice(0, 2).join(" ")).toLowerCase();
  }

  if (mode === "faction") {
    const factionish = Array.from(card.querySelectorAll(".faction,.message-meta,.meta,small"))
      .map(el => el.textContent || "")
      .join(" ");
    const known = text.match(/(loner|mercenary|duty|freedom|bandit|clear sky|monolith|military|ecologist|renegade|sin|isg)/gi);
    return ((factionish || "") + " " + (known || []).join(" ")).toLowerCase();
  }

  if (mode === "message") {
    const paragraphs = Array.from(card.querySelectorAll("p,.message-body,.body,.text"))
      .map(el => el.textContent || "")
      .join(" ");
    return (paragraphs || text).toLowerCase();
  }

  return text;
}

function applyCommsSearchV430() {
  const state = readCommsSearchStateV430();
  const query = state.query.trim().toLowerCase();
  const cards = messageCardsV430();
  let shown = 0;

  cards.forEach(card => {
    const haystack = cardTextForModeV430(card, state.mode);
    const match = !query || haystack.includes(query);

    card.classList.toggle("comms-search-hidden-v430", !match);
    card.style.display = match ? "" : "none";

    if (match) shown++;
  });

  const status = document.getElementById("commsSearchStatusV430");
  if (status) {
    if (!query) {
      status.textContent = cards.length ? `Showing ${cards.length} recent message${cards.length === 1 ? "" : "s"}.` : "No messages detected yet.";
    } else {
      status.textContent = `Showing ${shown} of ${cards.length} message${cards.length === 1 ? "" : "s"} for “${state.query.trim()}”.`;
    }
  }

  updateCommsSearchModeButtonsV430();
}

function updateCommsSearchModeButtonsV430() {
  const state = readCommsSearchStateV430();

  document.querySelectorAll(".comms-search-mode-v430").forEach(btn => {
    const active = btn.dataset.searchModeV430 === state.mode;
    btn.classList.toggle("active", active);
    btn.classList.toggle("setting-on-v424", active);
    btn.setAttribute("aria-pressed", active ? "true" : "false");
  });
}

function applyCommsSearchStateToUiV430() {
  const state = readCommsSearchStateV430();
  const input = document.getElementById("commsSearchInputV430");

  if (input && input.value !== state.query) input.value = state.query;

  updateCommsSearchModeButtonsV430();
  applyCommsSearchV430();
}

function clearCommsSearchV430() {
  const state = readCommsSearchStateV430();
  saveCommsSearchStateV430({ ...state, query: "" });

  const input = document.getElementById("commsSearchInputV430");
  if (input) input.value = "";

  applyCommsSearchV430();
}

function bindCommsSearchPanelV430() {
  const input = document.getElementById("commsSearchInputV430");
  const clear = document.getElementById("clearCommsSearchBtnV430");

  if (input && !input.dataset.v430Bound) {
    input.dataset.v430Bound = "true";
    input.addEventListener("input", () => {
      const state = readCommsSearchStateV430();
      saveCommsSearchStateV430({ ...state, query: input.value || "" });
      applyCommsSearchV430();
    });
  }

  if (clear && !clear.dataset.v430Bound) {
    clear.dataset.v430Bound = "true";
    clear.addEventListener("click", event => {
      event.preventDefault();
      clearCommsSearchV430();
    });
  }

  document.querySelectorAll(".comms-search-mode-v430").forEach(btn => {
    if (btn.dataset.v430Bound) return;
    btn.dataset.v430Bound = "true";

    btn.addEventListener("click", event => {
      event.preventDefault();
      const state = readCommsSearchStateV430();
      saveCommsSearchStateV430({ ...state, mode: btn.dataset.searchModeV430 || "all" });
      applyCommsSearchV430();
    });
  });
}

function patchBuildLabelsV430() {
  window.STALKERNET_CURRENT_BUILD = STALKERNET_BUILD_V430;

  if (typeof syncBuildFieldsV428 === "function") {
    try { syncBuildFieldsV428(); } catch (error) {}
  }

  const cacheStatus = document.getElementById("settingsCacheStatusV423") || document.getElementById("cacheStatusV3998");
  if (cacheStatus) cacheStatus.textContent = "Current build: v4.3.5. Settings ready.";

  document.querySelectorAll("#settingsTab strong, #settingsTab span, #settingsTab p, #messagesTab strong, #commsTab strong").forEach(el => {
    const text = el.textContent || "";
    if (/^v4\.\d+\.\d+$/.test(text.trim())) el.textContent = STALKERNET_BUILD_V430;
    else if (/Current build: v4\.\d+\.\d+/.test(text)) {
      el.textContent = text.replace(/Current build: v4\.\d+\.\d+\. Settings ready\./, `Current build: ${STALKERNET_BUILD_V430}. Settings ready.`);
    }
  });
}

let commsSearchObserverV430 = null;

function startCommsSearchObserverV430() {
  const root = commsRootV430();
  if (!root || commsSearchObserverV430) return;

  commsSearchObserverV430 = new MutationObserver(() => {
    clearTimeout(window.__commsSearchTimerV430);
    window.__commsSearchTimerV430 = setTimeout(() => {
      ensureCommsSearchPanelV430();
      applyCommsSearchV430();
    }, 120);
  });

  commsSearchObserverV430.observe(root, { childList: true, subtree: true });
}

function setupCommsSearchV430() {
  ensureCommsSearchPanelV430();
  applyCommsSearchV430();
  startCommsSearchObserverV430();
  patchBuildLabelsV430();
}

window.addEventListener("load", () => {
  [120, 500, 1200, 2400].forEach(delay => setTimeout(setupCommsSearchV430, delay));
});

document.addEventListener("click", event => {
  const target = event.target;
  if (target?.closest?.("#messagesTab, #commsTab, [data-tab='messagesTab'], [data-tab='commsTab'], .nav-btn, #commsSearchPanelV430")) {
    setTimeout(setupCommsSearchV430, 120);
    setTimeout(applyCommsSearchV430, 400);
  }
}, true);

window.setupCommsSearchV430 = setupCommsSearchV430;
window.applyCommsSearchV430 = applyCommsSearchV430;



// v4.3.5 Jobs Board Filter / Sort
const STALKERNET_BUILD_V431 = "v4.3.5";
window.STALKERNET_CURRENT_BUILD = STALKERNET_BUILD_V431;

const JOBS_FILTER_STATE_KEY_V431 = "stalkernet_jobs_filter_state_v431";

const JOB_TYPES_V431 = [
  "any",
  "mutant hunt",
  "artifact recovery",
  "delivery",
  "escort",
  "scout area",
  "clear area",
  "stash reminder",
  "personal note"
];

const JOB_STATUSES_V431 = [
  "any",
  "open",
  "active",
  "accepted",
  "in progress",
  "completed",
  "failed",
  "cancelled"
];

const JOB_RISKS_V431 = [
  "any",
  "low",
  "medium",
  "high",
  "extreme",
  "suicide"
];

function jobsRootV431() {
  return document.getElementById("jobsTab") ||
    document.getElementById("contractsTab") ||
    document.getElementById("jobBoardTab") ||
    document.getElementById("jobsBoardTab");
}

function readJobsFilterStateV431() {
  try {
    const saved = JSON.parse(localStorage.getItem(JOBS_FILTER_STATE_KEY_V431) || "null");
    return {
      query: typeof saved?.query === "string" ? saved.query : "",
      type: JOB_TYPES_V431.includes(saved?.type) ? saved.type : "any",
      status: JOB_STATUSES_V431.includes(saved?.status) ? saved.status : "any",
      risk: JOB_RISKS_V431.includes(saved?.risk) ? saved.risk : "any",
      sort: ["newest", "title", "risk", "status"].includes(saved?.sort) ? saved.sort : "newest"
    };
  } catch (error) {
    return { query: "", type: "any", status: "any", risk: "any", sort: "newest" };
  }
}

function saveJobsFilterStateV431(state) {
  const clean = {
    query: String(state.query || ""),
    type: JOB_TYPES_V431.includes(state.type) ? state.type : "any",
    status: JOB_STATUSES_V431.includes(state.status) ? state.status : "any",
    risk: JOB_RISKS_V431.includes(state.risk) ? state.risk : "any",
    sort: ["newest", "title", "risk", "status"].includes(state.sort) ? state.sort : "newest"
  };
  try { localStorage.setItem(JOBS_FILTER_STATE_KEY_V431, JSON.stringify(clean)); } catch (error) {}
  return clean;
}

function optionHtmlV431(options, labels = {}) {
  return options.map(value => {
    const label = labels[value] || value.replace(/\b\w/g, c => c.toUpperCase());
    return `<option value="${value}">${label}</option>`;
  }).join("");
}

function ensureJobsFilterPanelV431() {
  const root = jobsRootV431();
  if (!root) return null;

  let panel = document.getElementById("jobsFilterPanelV431");
  if (!panel) {
    panel = document.createElement("section");
    panel.id = "jobsFilterPanelV431";
    panel.className = "jobs-filter-panel-v431 module-panel";
    panel.innerHTML = `
      <div class="module-label">JOBS FILTER</div>
      <div class="jobs-filter-search-row-v431">
        <input id="jobsFilterSearchV431" type="search" placeholder="Search jobs, location, reward, objective..." autocomplete="off" />
        <button id="jobsFilterClearV431" class="small-btn">Clear</button>
      </div>
      <div class="jobs-filter-grid-v431">
        <label>
          <span>Type</span>
          <select id="jobsFilterTypeV431">
            ${optionHtmlV431(JOB_TYPES_V431, {"any":"Any Type"})}
          </select>
        </label>
        <label>
          <span>Status</span>
          <select id="jobsFilterStatusV431">
            ${optionHtmlV431(JOB_STATUSES_V431, {"any":"Any Status"})}
          </select>
        </label>
        <label>
          <span>Risk</span>
          <select id="jobsFilterRiskV431">
            ${optionHtmlV431(JOB_RISKS_V431, {"any":"Any Risk"})}
          </select>
        </label>
        <label>
          <span>Sort</span>
          <select id="jobsSortV431">
            <option value="newest">Newest / Current</option>
            <option value="title">Title A-Z</option>
            <option value="risk">Risk Level</option>
            <option value="status">Status</option>
          </select>
        </label>
      </div>
      <p id="jobsFilterStatusTextV431" class="message-text jobs-filter-status-v431">Jobs filter ready.</p>
    `;
  }

  const heading =
    root.querySelector(".jobs-board-header") ||
    root.querySelector(".section-top") ||
    root.querySelector("h1,h2,h3") ||
    root.firstElementChild;

  if (!panel.parentElement) {
    if (heading && heading.parentElement === root) heading.insertAdjacentElement("afterend", panel);
    else root.insertBefore(panel, root.firstElementChild?.nextElementSibling || root.firstElementChild);
  }

  bindJobsFilterPanelV431();
  applyJobsFilterStateToUiV431();
  return panel;
}

function jobCardsV431() {
  const root = jobsRootV431();
  if (!root) return [];

  const selectors = [
    ".job-card",
    ".job-item",
    ".contract-card",
    ".contract-item",
    "[data-job-id]",
    "[data-contract-id]",
    ".jobs-card",
    ".mission-card"
  ];

  const cards = new Set();
  selectors.forEach(selector => {
    root.querySelectorAll(selector).forEach(el => {
      if (el.id === "jobsFilterPanelV431" || el.closest("#jobsFilterPanelV431")) return;
      cards.add(el);
    });
  });

  // Fallback: detect job-ish panels by content without grabbing the filter panel.
  if (!cards.size) {
    root.querySelectorAll("article, .module-panel, .card, .panel").forEach(el => {
      if (el.id === "jobsFilterPanelV431" || el.closest("#jobsFilterPanelV431")) return;
      const text = (el.innerText || "").trim();
      if (!text || text.length < 18) return;
      if (/jobs filter|job template|create job|new job|clear starter jobs|cloud/i.test(text)) return;
      if (/risk|reward|status|objective|contract|location|mutant|artifact|delivery|escort|stash/i.test(text)) cards.add(el);
    });
  }

  return Array.from(cards);
}

function normalizedJobTextV431(card) {
  return (card.innerText || card.textContent || "").toLowerCase().replace(/\s+/g, " ").trim();
}

function jobTitleV431(card) {
  const heading = card.querySelector("h1,h2,h3,h4,strong,.job-title,.contract-title,.title");
  const text = (heading?.textContent || card.innerText || "").trim();
  return text.split("\n")[0].toLowerCase();
}

function includesJobValueV431(card, value) {
  if (!value || value === "any") return true;
  const text = normalizedJobTextV431(card);
  return text.includes(value);
}

function jobRiskRankV431(card) {
  const text = normalizedJobTextV431(card);
  if (/suicide/.test(text)) return 5;
  if (/extreme/.test(text)) return 4;
  if (/high/.test(text)) return 3;
  if (/medium|moderate/.test(text)) return 2;
  if (/low/.test(text)) return 1;
  return 0;
}

function jobStatusRankV431(card) {
  const text = normalizedJobTextV431(card);
  if (/open/.test(text)) return 1;
  if (/accepted|active|in progress/.test(text)) return 2;
  if (/completed/.test(text)) return 3;
  if (/failed|cancelled/.test(text)) return 4;
  return 0;
}

function applyJobsFilterV431() {
  const root = jobsRootV431();
  if (!root) return;

  const state = readJobsFilterStateV431();
  const query = state.query.trim().toLowerCase();
  const cards = jobCardsV431();

  let shown = 0;

  cards.forEach(card => {
    const text = normalizedJobTextV431(card);
    const matchQuery = !query || text.includes(query);
    const matchType = includesJobValueV431(card, state.type);
    const matchStatus = includesJobValueV431(card, state.status);
    const matchRisk = includesJobValueV431(card, state.risk);

    const match = matchQuery && matchType && matchStatus && matchRisk;

    card.classList.toggle("jobs-filter-hidden-v431", !match);
    card.style.display = match ? "" : "none";

    if (match) shown++;
  });

  sortJobCardsV431(cards, state.sort);

  const status = document.getElementById("jobsFilterStatusTextV431");
  if (status) {
    if (!cards.length) status.textContent = "No job cards detected yet.";
    else if (!query && state.type === "any" && state.status === "any" && state.risk === "any") {
      status.textContent = `Showing ${shown} job${shown === 1 ? "" : "s"}.`;
    } else {
      status.textContent = `Showing ${shown} of ${cards.length} job${cards.length === 1 ? "" : "s"}.`;
    }
  }
}

function sortJobCardsV431(cards, sortMode) {
  if (!cards.length || sortMode === "newest") return;

  const root = jobsRootV431();
  if (!root) return;

  // Only sort if all cards share one parent. Otherwise, sorting risks moving layout sections.
  const parents = Array.from(new Set(cards.map(card => card.parentElement).filter(Boolean)));
  if (parents.length !== 1) return;

  const parent = parents[0];
  const sorted = cards.slice().sort((a, b) => {
    if (sortMode === "title") return jobTitleV431(a).localeCompare(jobTitleV431(b));
    if (sortMode === "risk") return jobRiskRankV431(b) - jobRiskRankV431(a) || jobTitleV431(a).localeCompare(jobTitleV431(b));
    if (sortMode === "status") return jobStatusRankV431(a) - jobStatusRankV431(b) || jobTitleV431(a).localeCompare(jobTitleV431(b));
    return 0;
  });

  sorted.forEach(card => parent.appendChild(card));
}

function applyJobsFilterStateToUiV431() {
  const state = readJobsFilterStateV431();

  const search = document.getElementById("jobsFilterSearchV431");
  const type = document.getElementById("jobsFilterTypeV431");
  const status = document.getElementById("jobsFilterStatusV431");
  const risk = document.getElementById("jobsFilterRiskV431");
  const sort = document.getElementById("jobsSortV431");

  if (search && search.value !== state.query) search.value = state.query;
  if (type) type.value = state.type;
  if (status) status.value = state.status;
  if (risk) risk.value = state.risk;
  if (sort) sort.value = state.sort;

  applyJobsFilterV431();
}

function bindJobsFilterPanelV431() {
  const search = document.getElementById("jobsFilterSearchV431");
  const clear = document.getElementById("jobsFilterClearV431");
  const type = document.getElementById("jobsFilterTypeV431");
  const status = document.getElementById("jobsFilterStatusV431");
  const risk = document.getElementById("jobsFilterRiskV431");
  const sort = document.getElementById("jobsSortV431");

  if (search && !search.dataset.v431Bound) {
    search.dataset.v431Bound = "true";
    search.addEventListener("input", () => {
      const state = readJobsFilterStateV431();
      saveJobsFilterStateV431({ ...state, query: search.value || "" });
      applyJobsFilterV431();
    });
  }

  [
    [type, "type"],
    [status, "status"],
    [risk, "risk"],
    [sort, "sort"]
  ].forEach(([el, key]) => {
    if (!el || el.dataset.v431Bound) return;
    el.dataset.v431Bound = "true";
    el.addEventListener("change", () => {
      const state = readJobsFilterStateV431();
      saveJobsFilterStateV431({ ...state, [key]: el.value });
      applyJobsFilterV431();
    });
  });

  if (clear && !clear.dataset.v431Bound) {
    clear.dataset.v431Bound = "true";
    clear.addEventListener("click", event => {
      event.preventDefault();
      saveJobsFilterStateV431({ query: "", type: "any", status: "any", risk: "any", sort: "newest" });
      applyJobsFilterStateToUiV431();
    });
  }
}

function patchBuildLabelsV431() {
  window.STALKERNET_CURRENT_BUILD = STALKERNET_BUILD_V431;

  if (typeof syncBuildFieldsV428 === "function") {
    try { syncBuildFieldsV428(); } catch (error) {}
  }

  const cacheStatus = document.getElementById("settingsCacheStatusV423") || document.getElementById("cacheStatusV3998");
  if (cacheStatus) cacheStatus.textContent = "Current build: v4.3.5. Settings ready.";

  document.querySelectorAll("#settingsTab strong, #settingsTab span, #settingsTab p, #jobsTab strong, #jobsTab span, #jobsTab p").forEach(el => {
    const text = el.textContent || "";
    if (/^v4\.\d+\.\d+$/.test(text.trim())) el.textContent = STALKERNET_BUILD_V431;
    else if (/Current build: v4\.\d+\.\d+/.test(text)) {
      el.textContent = text.replace(/Current build: v4\.\d+\.\d+\. Settings ready\./, `Current build: ${STALKERNET_BUILD_V431}. Settings ready.`);
    }
  });
}

let jobsFilterObserverV431 = null;

function startJobsFilterObserverV431() {
  const root = jobsRootV431();
  if (!root || jobsFilterObserverV431) return;

  jobsFilterObserverV431 = new MutationObserver(() => {
    clearTimeout(window.__jobsFilterTimerV431);
    window.__jobsFilterTimerV431 = setTimeout(() => {
      ensureJobsFilterPanelV431();
      applyJobsFilterV431();
    }, 140);
  });

  jobsFilterObserverV431.observe(root, { childList: true, subtree: true });
}

function setupJobsFilterV431() {
  ensureJobsFilterPanelV431();
  applyJobsFilterV431();
  startJobsFilterObserverV431();
  patchBuildLabelsV431();
}

window.addEventListener("load", () => {
  [120, 500, 1200, 2400].forEach(delay => setTimeout(setupJobsFilterV431, delay));
});

document.addEventListener("click", event => {
  const target = event.target;
  if (target?.closest?.("#jobsTab, #contractsTab, [data-tab='jobsTab'], [data-tab='contractsTab'], .nav-btn, #jobsFilterPanelV431")) {
    setTimeout(setupJobsFilterV431, 120);
    setTimeout(applyJobsFilterV431, 450);
  }
}, true);

window.setupJobsFilterV431 = setupJobsFilterV431;
window.applyJobsFilterV431 = applyJobsFilterV431;



// v4.3.5 Map Marker Filter / Visibility Polish
const STALKERNET_BUILD_V432 = "v4.3.5";
window.STALKERNET_CURRENT_BUILD = STALKERNET_BUILD_V432;

const MAP_FILTER_STATE_KEY_V432 = "stalkernet_map_marker_filter_state_v432";

const MAP_MARKER_TYPES_V432 = [
  "any",
  "location",
  "stash",
  "danger",
  "safe",
  "job",
  "note",
  "custom",
  "default"
];

function mapRootV432() {
  return document.getElementById("mapTab") ||
    document.getElementById("zoneMapTab") ||
    document.getElementById("worldMapTab");
}

function readMapFilterStateV432() {
  try {
    const saved = JSON.parse(localStorage.getItem(MAP_FILTER_STATE_KEY_V432) || "null");
    return {
      query: typeof saved?.query === "string" ? saved.query : "",
      type: MAP_MARKER_TYPES_V432.includes(saved?.type) ? saved.type : "any",
      showDefault: saved?.showDefault !== false,
      showCustom: saved?.showCustom !== false
    };
  } catch (error) {
    return { query: "", type: "any", showDefault: true, showCustom: true };
  }
}

function saveMapFilterStateV432(state) {
  const clean = {
    query: String(state.query || ""),
    type: MAP_MARKER_TYPES_V432.includes(state.type) ? state.type : "any",
    showDefault: state.showDefault !== false,
    showCustom: state.showCustom !== false
  };
  try { localStorage.setItem(MAP_FILTER_STATE_KEY_V432, JSON.stringify(clean)); } catch (error) {}
  return clean;
}

function optionHtmlMapV432(options, labels = {}) {
  return options.map(value => {
    const label = labels[value] || value.replace(/\b\w/g, c => c.toUpperCase());
    return `<option value="${value}">${label}</option>`;
  }).join("");
}

function ensureMapFilterPanelV432() {
  const root = mapRootV432();
  if (!root) return null;

  let panel = document.getElementById("mapMarkerFilterPanelV432");
  if (!panel) {
    panel = document.createElement("section");
    panel.id = "mapMarkerFilterPanelV432";
    panel.className = "map-marker-filter-panel-v432 module-panel";
    panel.innerHTML = `
      <div class="module-label">MAP MARKER FILTER</div>
      <div class="map-filter-search-row-v432">
        <input id="mapMarkerSearchV432" type="search" placeholder="Search marker name, note, or location..." autocomplete="off" />
        <button id="mapMarkerClearFilterV432" class="small-btn">Clear</button>
      </div>
      <div class="map-filter-controls-v432">
        <label>
          <span>Type</span>
          <select id="mapMarkerTypeFilterV432">
            ${optionHtmlMapV432(MAP_MARKER_TYPES_V432, {"any":"Any Type"})}
          </select>
        </label>
        <button id="mapToggleDefaultMarkersV432" class="small-btn">Default: On</button>
        <button id="mapToggleCustomMarkersV432" class="small-btn">Custom: On</button>
        <button id="mapResetMarkerFilterV432" class="small-btn">Reset</button>
      </div>
      <p id="mapMarkerFilterStatusV432" class="message-text map-filter-status-v432">Marker filter ready.</p>
    `;
  }

  if (!panel.parentElement) {
    const anchor =
      root.querySelector(".map-toolbar") ||
      root.querySelector(".map-controls") ||
      root.querySelector(".section-top") ||
      root.querySelector("h1,h2,h3") ||
      root.firstElementChild;

    if (anchor && anchor.parentElement === root) anchor.insertAdjacentElement("afterend", panel);
    else root.insertBefore(panel, root.firstElementChild?.nextElementSibling || root.firstElementChild);
  }

  bindMapFilterPanelV432();
  applyMapFilterStateToUiV432();
  return panel;
}

function markerCandidatesV432() {
  const root = mapRootV432();
  if (!root) return [];

  const selectors = [
    ".map-pin",
    ".map-marker",
    ".marker",
    ".world-pin",
    ".zone-pin",
    ".location-pin",
    ".custom-marker",
    ".default-marker",
    "[data-marker-id]",
    "[data-pin-id]",
    "[data-location-pin]",
    "[data-marker-type]",
    "[data-pin-type]"
  ];

  const markers = new Set();

  selectors.forEach(selector => {
    root.querySelectorAll(selector).forEach(el => {
      if (el.closest("#mapMarkerFilterPanelV432")) return;
      if (el.closest(".map-controls") || el.closest(".map-toolbar")) return;
      if (el.tagName === "INPUT" || el.tagName === "SELECT" || el.tagName === "TEXTAREA") return;
      markers.add(el);
    });
  });

  // Fallback for button pins that are absolutely positioned on map layers.
  root.querySelectorAll("button, .pin, [role='button']").forEach(el => {
    if (el.closest("#mapMarkerFilterPanelV432")) return;
    if (el.closest(".map-controls") || el.closest(".map-toolbar")) return;
    const style = window.getComputedStyle(el);
    const text = (el.innerText || el.title || el.getAttribute("aria-label") || "").trim();
    const isPositioned = style.position === "absolute" || style.position === "fixed";
    const looksPinny = /pin|marker|stash|danger|safe|camp|job|note|cordon|swamp|meadow|darkscape/i.test(text + " " + el.className);
    if (isPositioned && looksPinny) markers.add(el);
  });

  return Array.from(markers);
}

function markerTextV432(marker) {
  const parts = [
    marker.innerText,
    marker.textContent,
    marker.title,
    marker.getAttribute("aria-label"),
    marker.dataset?.markerId,
    marker.dataset?.pinId,
    marker.dataset?.name,
    marker.dataset?.label,
    marker.dataset?.note,
    marker.dataset?.type,
    marker.dataset?.markerType,
    marker.dataset?.pinType,
    marker.className
  ];

  return parts.filter(Boolean).join(" ").toLowerCase().replace(/\s+/g, " ").trim();
}

function markerTypeV432(marker) {
  const raw = [
    marker.dataset?.type,
    marker.dataset?.markerType,
    marker.dataset?.pinType,
    marker.dataset?.category,
    marker.className,
    marker.innerText,
    marker.title,
    marker.getAttribute("aria-label")
  ].filter(Boolean).join(" ").toLowerCase();

  if (/custom|user|created/.test(raw)) return "custom";
  if (/default|locked|world|location/.test(raw)) return "default";
  if (/stash/.test(raw)) return "stash";
  if (/danger|hostile|threat|red/.test(raw)) return "danger";
  if (/safe|camp|base|green/.test(raw)) return "safe";
  if (/job|contract|mission/.test(raw)) return "job";
  if (/note/.test(raw)) return "note";
  if (/cordon|swamp|meadow|darkscape|garbage|rostok|yantar|jupiter|zaton|pripyat|lab|location/.test(raw)) return "location";

  return "location";
}

function markerIsDefaultV432(marker) {
  const text = markerTextV432(marker);
  const type = markerTypeV432(marker);
  if (type === "custom") return false;
  if (/custom|user|created|note/.test(text)) return false;
  if (/default|locked|world|location/.test(text)) return true;
  return !marker.dataset?.markerId || /default|world|zone|location/.test(type + " " + text);
}

function markerIsCustomV432(marker) {
  return !markerIsDefaultV432(marker);
}

function applyMapMarkerFilterV432() {
  const state = readMapFilterStateV432();
  const query = state.query.trim().toLowerCase();
  const markers = markerCandidatesV432();
  let shown = 0;

  markers.forEach(marker => {
    const text = markerTextV432(marker);
    const type = markerTypeV432(marker);
    const isDefault = markerIsDefaultV432(marker);
    const isCustom = !isDefault;

    const matchQuery = !query || text.includes(query);
    const matchType =
      state.type === "any" ||
      state.type === type ||
      (state.type === "default" && isDefault) ||
      (state.type === "custom" && isCustom);

    const matchVisibility =
      (isDefault && state.showDefault) ||
      (isCustom && state.showCustom);

    const match = matchQuery && matchType && matchVisibility;

    marker.classList.toggle("map-marker-filter-hidden-v432", !match);
    marker.style.display = match ? "" : "none";

    if (match) shown++;
  });

  const status = document.getElementById("mapMarkerFilterStatusV432");
  if (status) {
    if (!markers.length) {
      status.textContent = "No map markers detected on this map yet.";
    } else if (!query && state.type === "any" && state.showDefault && state.showCustom) {
      status.textContent = `Showing ${shown} marker${shown === 1 ? "" : "s"}.`;
    } else {
      status.textContent = `Showing ${shown} of ${markers.length} marker${markers.length === 1 ? "" : "s"}.`;
    }
  }

  updateMapFilterButtonsV432();
}

function applyMapFilterStateToUiV432() {
  const state = readMapFilterStateV432();
  const search = document.getElementById("mapMarkerSearchV432");
  const type = document.getElementById("mapMarkerTypeFilterV432");

  if (search && search.value !== state.query) search.value = state.query;
  if (type) type.value = state.type;

  updateMapFilterButtonsV432();
  applyMapMarkerFilterV432();
}

function updateMapFilterButtonsV432() {
  const state = readMapFilterStateV432();

  const defaultBtn = document.getElementById("mapToggleDefaultMarkersV432");
  const customBtn = document.getElementById("mapToggleCustomMarkersV432");

  if (defaultBtn) {
    defaultBtn.textContent = state.showDefault ? "Default: On" : "Default: Off";
    defaultBtn.classList.toggle("setting-on-v424", state.showDefault);
  }

  if (customBtn) {
    customBtn.textContent = state.showCustom ? "Custom: On" : "Custom: Off";
    customBtn.classList.toggle("setting-on-v424", state.showCustom);
  }
}

function bindMapFilterPanelV432() {
  const search = document.getElementById("mapMarkerSearchV432");
  const clear = document.getElementById("mapMarkerClearFilterV432");
  const type = document.getElementById("mapMarkerTypeFilterV432");
  const defaultBtn = document.getElementById("mapToggleDefaultMarkersV432");
  const customBtn = document.getElementById("mapToggleCustomMarkersV432");
  const reset = document.getElementById("mapResetMarkerFilterV432");

  if (search && !search.dataset.v432Bound) {
    search.dataset.v432Bound = "true";
    search.addEventListener("input", () => {
      const state = readMapFilterStateV432();
      saveMapFilterStateV432({ ...state, query: search.value || "" });
      applyMapMarkerFilterV432();
    });
  }

  if (type && !type.dataset.v432Bound) {
    type.dataset.v432Bound = "true";
    type.addEventListener("change", () => {
      const state = readMapFilterStateV432();
      saveMapFilterStateV432({ ...state, type: type.value });
      applyMapMarkerFilterV432();
    });
  }

  if (clear && !clear.dataset.v432Bound) {
    clear.dataset.v432Bound = "true";
    clear.addEventListener("click", event => {
      event.preventDefault();
      const state = readMapFilterStateV432();
      saveMapFilterStateV432({ ...state, query: "" });
      applyMapFilterStateToUiV432();
    });
  }

  if (defaultBtn && !defaultBtn.dataset.v432Bound) {
    defaultBtn.dataset.v432Bound = "true";
    defaultBtn.addEventListener("click", event => {
      event.preventDefault();
      const state = readMapFilterStateV432();
      saveMapFilterStateV432({ ...state, showDefault: !state.showDefault });
      applyMapFilterStateToUiV432();
    });
  }

  if (customBtn && !customBtn.dataset.v432Bound) {
    customBtn.dataset.v432Bound = "true";
    customBtn.addEventListener("click", event => {
      event.preventDefault();
      const state = readMapFilterStateV432();
      saveMapFilterStateV432({ ...state, showCustom: !state.showCustom });
      applyMapFilterStateToUiV432();
    });
  }

  if (reset && !reset.dataset.v432Bound) {
    reset.dataset.v432Bound = "true";
    reset.addEventListener("click", event => {
      event.preventDefault();
      saveMapFilterStateV432({ query: "", type: "any", showDefault: true, showCustom: true });
      applyMapFilterStateToUiV432();
    });
  }
}

function patchBuildLabelsV432() {
  window.STALKERNET_CURRENT_BUILD = STALKERNET_BUILD_V432;

  if (typeof syncBuildFieldsV428 === "function") {
    try { syncBuildFieldsV428(); } catch (error) {}
  }

  const cacheStatus = document.getElementById("settingsCacheStatusV423") || document.getElementById("cacheStatusV3998");
  if (cacheStatus) cacheStatus.textContent = "Current build: v4.3.5. Settings ready.";

  document.querySelectorAll("#settingsTab strong, #settingsTab span, #settingsTab p, #mapTab strong, #mapTab span, #mapTab p").forEach(el => {
    const text = el.textContent || "";
    if (/^v4\.\d+\.\d+$/.test(text.trim())) el.textContent = STALKERNET_BUILD_V432;
    else if (/Current build: v4\.\d+\.\d+/.test(text)) {
      el.textContent = text.replace(/Current build: v4\.\d+\.\d+\. Settings ready\./, `Current build: ${STALKERNET_BUILD_V432}. Settings ready.`);
    }
  });
}

let mapFilterObserverV432 = null;

function startMapFilterObserverV432() {
  const root = mapRootV432();
  if (!root || mapFilterObserverV432) return;

  mapFilterObserverV432 = new MutationObserver(() => {
    clearTimeout(window.__mapFilterTimerV432);
    window.__mapFilterTimerV432 = setTimeout(() => {
      ensureMapFilterPanelV432();
      applyMapMarkerFilterV432();
    }, 160);
  });

  mapFilterObserverV432.observe(root, { childList: true, subtree: true });
}

function setupMapMarkerFilterV432() {
  ensureMapFilterPanelV432();
  applyMapMarkerFilterV432();
  startMapFilterObserverV432();
  patchBuildLabelsV432();
}

window.addEventListener("load", () => {
  [160, 600, 1400, 2800].forEach(delay => setTimeout(setupMapMarkerFilterV432, delay));
});

document.addEventListener("click", event => {
  const target = event.target;
  if (target?.closest?.("#mapTab, [data-tab='mapTab'], .nav-btn, #mapMarkerFilterPanelV432, .map-controls, .map-toolbar")) {
    setTimeout(setupMapMarkerFilterV432, 140);
    setTimeout(applyMapMarkerFilterV432, 500);
  }
}, true);

window.setupMapMarkerFilterV432 = setupMapMarkerFilterV432;
window.applyMapMarkerFilterV432 = applyMapMarkerFilterV432;



// v4.3.5 Map Marker Click / Description Fix
const STALKERNET_BUILD_V433 = "v4.3.5";
window.STALKERNET_CURRENT_BUILD = STALKERNET_BUILD_V433;

function activeMapNameV433(point) {
  try {
    const section = MAP_SECTIONS.find(section => section.id === point?.mapId) || getActiveSection?.();
    return section?.name || point?.mapId || "Unknown map";
  } catch (error) {
    return point?.mapId || "Unknown map";
  }
}

function safePointNoteV433(point) {
  const note = point?.note || point?.description || point?.details || "";
  return String(note).trim() || "No field description recorded for this marker yet.";
}

function renderMapInfo(selectedId = state.selectedMapId) {
  const all = getAllMapPoints();
  const point = all.find(item => item.id === selectedId) || all.find(item => pointInSection(item, getActiveSection?.() || {})) || all[0];
  if (!point) return;

  state.selectedMapId = point.id;
  saveState();

  const card = document.getElementById("mapInfo");
  if (!card) return;

  const isDefaultPin = Array.isArray(defaultMapPoints) && defaultMapPoints.some(pin => pin.id === point.id);
  const markerKind = isDefaultPin ? "Default marker" : "Custom marker";
  const sectionName = activeMapNameV433(point);
  const x = Number.isFinite(Number(point.x)) ? Math.round(Number(point.x)) : "--";
  const y = Number.isFinite(Number(point.y)) ? Math.round(Number(point.y)) : "--";

  card.innerHTML = `
    <div class="module-label">LOCATION DATA</div>
    <div class="map-info-head-v433">
      <div>
        <h3>${escapeHtml(point.name || "Unknown Marker")}</h3>
        <p class="muted">${escapeHtml(point.type || "Unknown Type")}</p>
      </div>
      <span class="map-info-badge-v433">${escapeHtml(markerKind)}</span>
    </div>
    <p class="map-info-note-v433">${escapeHtml(safePointNoteV433(point))}</p>
    <div class="map-info-grid-v433">
      <div><span>Map</span><strong>${escapeHtml(sectionName)}</strong></div>
      <div><span>Coords</span><strong>x:${x} y:${y}</strong></div>
    </div>
  `;
}

function popupHtmlV433(point, canDrag) {
  const note = safePointNoteV433(point);
  const x = Number.isFinite(Number(point.x)) ? Math.round(Number(point.x)) : "--";
  const y = Number.isFinite(Number(point.y)) ? Math.round(Number(point.y)) : "--";

  return `
    <div class="map-popup-v433">
      <div class="map-popup-title">${escapeHtml(point.name || "Unknown Marker")}</div>
      <div class="map-popup-type">${escapeHtml(point.type || "Unknown Type")}</div>
      <div class="map-popup-note-v433">${escapeHtml(note)}</div>
      <div class="map-popup-type">x:${x} y:${y} // ${canDrag ? "Custom pin can be dragged." : "Default pin locked."}</div>
    </div>
  `;
}

function setSelectedMarkerClassV433(pointId) {
  try {
    leafletMarkers.forEach(marker => {
      const icon = marker.getElement?.();
      if (!icon) return;
      const selected = marker.__stalkerPointIdV433 === pointId;
      icon.classList.toggle("selected-map-marker-v433", selected);
      icon.querySelectorAll(".poi-icon").forEach(inner => inner.classList.toggle("selected-map-marker-inner-v433", selected));
    });
  } catch (error) {}
}

function preserveMapViewDuringV433(callback) {
  const scrollX = window.scrollX;
  const scrollY = window.scrollY;
  const mapCenter = leafletMap?.getCenter?.();
  const mapZoom = leafletMap?.getZoom?.();

  const result = callback?.();

  // Leaflet popups can auto-pan. Put the view back immediately and again after layout settles.
  const restore = () => {
    try {
      if (leafletMap && mapCenter && Number.isFinite(mapZoom)) {
        leafletMap.setView(mapCenter, mapZoom, { animate: false });
      }
    } catch (error) {}

    try {
      window.scrollTo(scrollX, scrollY);
    } catch (error) {}
  };

  restore();
  setTimeout(restore, 40);
  setTimeout(restore, 160);

  return result;
}

function buildMarker(point) {
  const cleanType = point.type || "Location";
  const cleanName = point.name || "Marker";
  const cleanNote = safePointNoteV433(point);

  const iconHtml = `
    <div
      class="poi-icon ${mapTypeClass(cleanType)} map-marker-icon-v433"
      data-marker-id="${escapeHtml(point.id)}"
      data-marker-type="${escapeHtml(cleanType)}"
      data-marker-name="${escapeHtml(cleanName)}"
      title="${escapeHtml(cleanName)}"
      aria-label="${escapeHtml(cleanName + " // " + cleanType + " // " + cleanNote)}"
    ></div>
  `;

  const icon = L.divIcon({
    html: iconHtml,
    className: "stalkernet-leaflet-marker-v433",
    iconSize: [18, 18],
    iconAnchor: [9, 9],
    popupAnchor: [0, -10]
  });

  const isDefaultPin = defaultMapPoints.some(pin => pin.id === point.id);
  const canDrag = !isDefaultPin;

  const marker = L.marker([point.y, point.x], {
    icon,
    draggable: canDrag,
    bubblingMouseEvents: false,
    keyboard: false,
    riseOnHover: true,
    autoPan: false
  });

  marker.__stalkerPointIdV433 = point.id;

  marker.bindPopup(popupHtmlV433(point, canDrag), {
    autoPan: false,
    keepInView: false,
    closeButton: true,
    autoClose: true,
    closeOnClick: true,
    maxWidth: 260
  });

  marker.on("click", event => {
    if (event?.originalEvent) {
      L.DomEvent.stopPropagation(event.originalEvent);
      L.DomEvent.preventDefault(event.originalEvent);
    }

    preserveMapViewDuringV433(() => {
      state.selectedMapId = point.id;
      saveState();
      renderMapInfo(point.id);
      setSelectedMarkerClassV433(point.id);
      marker.openPopup();
    });
  });

  marker.on("popupopen", () => {
    preserveMapViewDuringV433(() => {
      renderMapInfo(point.id);
      setSelectedMarkerClassV433(point.id);
    });
  });

  if (canDrag) {
    marker.on("dragstart", () => {
      try { marker.closePopup(); } catch (error) {}
    });

    marker.on("dragend", event => {
      const newPos = event.target.getLatLng();
      savePinOverride(point.id, newPos);
      renderMapInfo(point.id);
      renderPinManagerList();
      setSelectedMarkerClassV433(point.id);

      // Rebuild so marker popup/coordinate text uses the new saved point.
      rebuildLeafletMarkers();
      setTimeout(() => {
        try {
          const updated = leafletMarkers.find(item => item.__stalkerPointIdV433 === point.id);
          if (updated) {
            setSelectedMarkerClassV433(point.id);
            updated.openPopup();
          }
        } catch (error) {}
      }, 80);
    });
  }

  return marker;
}

function patchMapBuildLabelsV433() {
  window.STALKERNET_CURRENT_BUILD = STALKERNET_BUILD_V433;

  if (typeof syncBuildFieldsV428 === "function") {
    try { syncBuildFieldsV428(); } catch (error) {}
  }

  const cacheStatus = document.getElementById("settingsCacheStatusV423") || document.getElementById("cacheStatusV3998");
  if (cacheStatus) cacheStatus.textContent = "Current build: v4.3.5. Settings ready.";

  document.querySelectorAll("#settingsTab strong, #settingsTab span, #settingsTab p, #mapTab strong, #mapTab span, #mapTab p").forEach(el => {
    const text = el.textContent || "";
    if (/^v4\.\d+\.\d+$/.test(text.trim())) el.textContent = STALKERNET_BUILD_V433;
    else if (/Current build: v4\.\d+\.\d+/.test(text)) {
      el.textContent = text.replace(/Current build: v4\.\d+\.\d+\. Settings ready\./, `Current build: ${STALKERNET_BUILD_V433}. Settings ready.`);
    }
  });
}

function setupMapMarkerClickFixV433() {
  patchMapBuildLabelsV433();

  // Rebuild existing markers so they use no-autopan marker click behaviour.
  if (leafletMap && leafletMarkers?.length && !window.__rebuiltMapMarkersV433) {
    window.__rebuiltMapMarkersV433 = true;
    try { rebuildLeafletMarkers(); } catch (error) {}
  }

  if (state?.selectedMapId) {
    setTimeout(() => setSelectedMarkerClassV433(state.selectedMapId), 120);
  }
}

window.addEventListener("load", () => {
  [180, 700, 1600, 3200].forEach(delay => setTimeout(setupMapMarkerClickFixV433, delay));
});

document.addEventListener("click", event => {
  const target = event.target;

  if (target?.closest?.("#mapTab, [data-tab='mapTab'], .nav-btn, .leaflet-marker-icon, .map-marker-icon-v433")) {
    setTimeout(setupMapMarkerClickFixV433, 120);
    setTimeout(() => {
      if (typeof applyMapMarkerFilterV432 === "function") {
        try { applyMapMarkerFilterV432(); } catch (error) {}
      }
    }, 220);
  }
}, true);

window.setupMapMarkerClickFixV433 = setupMapMarkerClickFixV433;
window.setSelectedMarkerClassV433 = setSelectedMarkerClassV433;



// v4.3.5 Archive Search / Category Polish
const STALKERNET_BUILD_V434 = "v4.3.5";
window.STALKERNET_CURRENT_BUILD = STALKERNET_BUILD_V434;

const ARCHIVE_FILTER_STATE_KEY_V434 = "stalkernet_archive_filter_state_v434";
const ARCHIVE_CATEGORIES_V434 = ["all","factions","mutants","anomalies","artifacts","locations","labs","survival"];

function archiveRootV434() {
  return document.getElementById("archiveTab") || document.getElementById("arcTab") || document.getElementById("recordsTab");
}

function readArchiveFilterStateV434() {
  try {
    const saved = JSON.parse(localStorage.getItem(ARCHIVE_FILTER_STATE_KEY_V434) || "null");
    return {
      query: typeof saved?.query === "string" ? saved.query : "",
      category: ARCHIVE_CATEGORIES_V434.includes(saved?.category) ? saved.category : "all"
    };
  } catch (error) {
    return { query: "", category: "all" };
  }
}

function saveArchiveFilterStateV434(state) {
  const clean = {
    query: String(state.query || ""),
    category: ARCHIVE_CATEGORIES_V434.includes(state.category) ? state.category : "all"
  };
  try { localStorage.setItem(ARCHIVE_FILTER_STATE_KEY_V434, JSON.stringify(clean)); } catch (error) {}
  return clean;
}

function categoryButtonLabelV434(category) {
  return ({
    all: "All",
    factions: "Factions",
    mutants: "Mutants",
    anomalies: "Anomalies",
    artifacts: "Artifacts",
    locations: "Locations",
    labs: "Labs",
    survival: "Survival"
  })[category] || category;
}

function ensureArchiveFilterPanelV434() {
  const root = archiveRootV434();
  if (!root) return null;

  let panel = document.getElementById("archiveFilterPanelV434");
  if (!panel) {
    panel = document.createElement("section");
    panel.id = "archiveFilterPanelV434";
    panel.className = "archive-filter-panel-v434 module-panel";
    panel.innerHTML = `
      <div class="module-label">ARCHIVE SEARCH</div>
      <div class="archive-filter-search-row-v434">
        <input id="archiveSearchInputV434" type="search" placeholder="Search records, factions, mutants, locations..." autocomplete="off" />
        <button id="archiveClearSearchV434" class="small-btn">Clear</button>
      </div>
      <div id="archiveCategoryButtonsV434" class="archive-category-buttons-v434">
        ${ARCHIVE_CATEGORIES_V434.map(category => `<button class="small-btn archive-category-btn-v434" data-archive-category-v434="${category}">${categoryButtonLabelV434(category)}</button>`).join("")}
      </div>
      <p id="archiveFilterStatusV434" class="message-text archive-filter-status-v434">Archive search ready.</p>
    `;
  }

  if (!panel.parentElement) {
    const anchor =
      root.querySelector(".archive-guide") ||
      root.querySelector(".archive-toolbar") ||
      root.querySelector(".archive-search") ||
      root.querySelector(".section-top") ||
      root.querySelector("h1,h2,h3") ||
      root.firstElementChild;

    if (anchor && anchor.parentElement === root) anchor.insertAdjacentElement("afterend", panel);
    else root.insertBefore(panel, root.firstElementChild?.nextElementSibling || root.firstElementChild);
  }

  bindArchiveFilterPanelV434();
  applyArchiveFilterStateToUiV434();
  return panel;
}

function archiveRecordCandidatesV434() {
  const root = archiveRootV434();
  if (!root) return [];

  const selectors = [
    ".archive-card",
    ".archive-record",
    ".archive-entry",
    ".record-card",
    ".codex-card",
    ".faction-card",
    ".mutant-card",
    ".anomaly-card",
    ".artifact-card",
    ".location-card",
    ".lab-card",
    "[data-archive-id]",
    "[data-record-id]",
    "[data-archive-category]",
    "[data-category]"
  ];

  const cards = new Set();

  selectors.forEach(selector => {
    root.querySelectorAll(selector).forEach(el => {
      if (el.closest("#archiveFilterPanelV434")) return;
      if (el.id === "archiveFilterPanelV434") return;
      cards.add(el);
    });
  });

  if (!cards.size) {
    root.querySelectorAll("article, .module-panel, .card, .panel, details").forEach(el => {
      if (el.closest("#archiveFilterPanelV434")) return;
      const text = (el.innerText || "").trim();
      if (!text || text.length < 24) return;
      if (/archive search|archive guide|search archive|source note|open records/i.test(text)) return;
      if (/faction|mutant|anomaly|artifact|location|laboratory|survival|lab|zone|threat|behaviour|weakness|notes/i.test(text)) {
        cards.add(el);
      }
    });
  }

  return Array.from(cards);
}

function archiveTextV434(card) {
  return [
    card.innerText,
    card.textContent,
    card.dataset?.archiveCategory,
    card.dataset?.category,
    card.dataset?.type,
    card.className
  ].filter(Boolean).join(" ").toLowerCase().replace(/\s+/g, " ").trim();
}

function archiveCategoryV434(card) {
  const raw = archiveTextV434(card);

  if (/faction|loner|mercenary|duty|freedom|bandit|clear sky|monolith|military|ecologist|renegade|sin|isg/.test(raw)) return "factions";
  if (/mutant|boar|flesh|dog|pseudodog|bloodsucker|controller|snork|chimera|burer|pseudogiant|rat/.test(raw)) return "mutants";
  if (/anomaly|burner|whirligig|springboard|electro|fruit punch|gravi|vortex|chemical/.test(raw)) return "anomalies";
  if (/artifact|artefact|moonlight|jellyfish|stone blood|flash|crystal|night star|battery/.test(raw)) return "artifacts";
  if (/lab|x-16|x-18|x-19|x-8|underground|sarcophagus|war lab|control center/.test(raw)) return "labs";
  if (/survival|medicine|medkit|bandage|radiation|bleed|food|water|sleep|repair|note|tip/.test(raw)) return "survival";
  if (/location|cordon|swamp|meadow|darkscape|garbage|rostok|yantar|jupiter|zaton|pripyat|red forest|army warehouses|dead city|limansk|outskirts/.test(raw)) return "locations";

  return "locations";
}

function applyArchiveFilterV434() {
  const state = readArchiveFilterStateV434();
  const query = state.query.trim().toLowerCase();
  const records = archiveRecordCandidatesV434();
  let shown = 0;

  records.forEach(card => {
    const text = archiveTextV434(card);
    const category = archiveCategoryV434(card);

    const matchQuery = !query || text.includes(query);
    const matchCategory = state.category === "all" || category === state.category;
    const match = matchQuery && matchCategory;

    card.classList.toggle("archive-filter-hidden-v434", !match);
    card.style.display = match ? "" : "none";

    if (match) shown++;
  });

  const status = document.getElementById("archiveFilterStatusV434");
  if (status) {
    if (!records.length) {
      status.textContent = "No archive records detected yet.";
    } else if (!query && state.category === "all") {
      status.textContent = `Showing ${shown} archive record${shown === 1 ? "" : "s"}.`;
    } else {
      status.textContent = `Showing ${shown} of ${records.length} archive record${records.length === 1 ? "" : "s"}.`;
    }
  }

  updateArchiveCategoryButtonsV434();
}

function updateArchiveCategoryButtonsV434() {
  const state = readArchiveFilterStateV434();

  document.querySelectorAll(".archive-category-btn-v434").forEach(btn => {
    const active = btn.dataset.archiveCategoryV434 === state.category;
    btn.classList.toggle("active", active);
    btn.classList.toggle("setting-on-v424", active);
    btn.setAttribute("aria-pressed", active ? "true" : "false");
  });
}

function applyArchiveFilterStateToUiV434() {
  const state = readArchiveFilterStateV434();
  const input = document.getElementById("archiveSearchInputV434");

  if (input && input.value !== state.query) input.value = state.query;

  updateArchiveCategoryButtonsV434();
  applyArchiveFilterV434();
}

function clearArchiveFilterV434() {
  const state = readArchiveFilterStateV434();
  saveArchiveFilterStateV434({ ...state, query: "" });

  const input = document.getElementById("archiveSearchInputV434");
  if (input) input.value = "";

  applyArchiveFilterV434();
}

function bindArchiveFilterPanelV434() {
  const input = document.getElementById("archiveSearchInputV434");
  const clear = document.getElementById("archiveClearSearchV434");

  if (input && !input.dataset.v434Bound) {
    input.dataset.v434Bound = "true";
    input.addEventListener("input", () => {
      const state = readArchiveFilterStateV434();
      saveArchiveFilterStateV434({ ...state, query: input.value || "" });
      applyArchiveFilterV434();
    });
  }

  if (clear && !clear.dataset.v434Bound) {
    clear.dataset.v434Bound = "true";
    clear.addEventListener("click", event => {
      event.preventDefault();
      clearArchiveFilterV434();
    });
  }

  document.querySelectorAll(".archive-category-btn-v434").forEach(btn => {
    if (btn.dataset.v434Bound) return;
    btn.dataset.v434Bound = "true";

    btn.addEventListener("click", event => {
      event.preventDefault();
      const state = readArchiveFilterStateV434();
      saveArchiveFilterStateV434({ ...state, category: btn.dataset.archiveCategoryV434 || "all" });
      applyArchiveFilterV434();
    });
  });
}

function patchBuildLabelsV434() {
  window.STALKERNET_CURRENT_BUILD = STALKERNET_BUILD_V434;

  if (typeof syncBuildFieldsV428 === "function") {
    try { syncBuildFieldsV428(); } catch (error) {}
  }

  const cacheStatus = document.getElementById("settingsCacheStatusV423") || document.getElementById("cacheStatusV3998");
  if (cacheStatus) cacheStatus.textContent = "Current build: v4.3.5. Settings ready.";

  document.querySelectorAll("#settingsTab strong, #settingsTab span, #settingsTab p, #archiveTab strong, #archiveTab span, #archiveTab p").forEach(el => {
    const text = el.textContent || "";
    if (/^v4\.\d+\.\d+$/.test(text.trim())) el.textContent = STALKERNET_BUILD_V434;
    else if (/Current build: v4\.\d+\.\d+/.test(text)) {
      el.textContent = text.replace(/Current build: v4\.\d+\.\d+\. Settings ready\./, `Current build: ${STALKERNET_BUILD_V434}. Settings ready.`);
    }
  });
}

let archiveFilterObserverV434 = null;

function startArchiveFilterObserverV434() {
  const root = archiveRootV434();
  if (!root || archiveFilterObserverV434) return;

  archiveFilterObserverV434 = new MutationObserver(() => {
    clearTimeout(window.__archiveFilterTimerV434);
    window.__archiveFilterTimerV434 = setTimeout(() => {
      ensureArchiveFilterPanelV434();
      applyArchiveFilterV434();
    }, 160);
  });

  archiveFilterObserverV434.observe(root, { childList: true, subtree: true });
}

function setupArchiveFilterV434() {
  ensureArchiveFilterPanelV434();
  applyArchiveFilterV434();
  startArchiveFilterObserverV434();
  patchBuildLabelsV434();
}

window.addEventListener("load", () => {
  [160, 600, 1400, 2800].forEach(delay => setTimeout(setupArchiveFilterV434, delay));
});

document.addEventListener("click", event => {
  const target = event.target;
  if (target?.closest?.("#archiveTab, #arcTab, [data-tab='archiveTab'], [data-tab='arcTab'], .nav-btn, #archiveFilterPanelV434")) {
    setTimeout(setupArchiveFilterV434, 140);
    setTimeout(applyArchiveFilterV434, 500);
  }
}, true);

window.setupArchiveFilterV434 = setupArchiveFilterV434;
window.applyArchiveFilterV434 = applyArchiveFilterV434;



// v4.3.5 Public Stalker ID / Dossier Tools
const STALKERNET_BUILD_V435 = "v4.3.5";
window.STALKERNET_CURRENT_BUILD = STALKERNET_BUILD_V435;

function idRootV435() {
  return document.getElementById("profileTab");
}

function fieldValueV435(id, fallback = "") {
  const el = document.getElementById(id);
  if (!el) return fallback;
  const value = ("value" in el ? el.value : el.textContent) || "";
  return String(value).trim() || fallback;
}

function profileDataV435() {
  const callsign =
    fieldValueV435("callsignInput") ||
    fieldValueV435("idPreviewName") ||
    fieldValueV435("headerCallsign", "Unknown Stalker");

  const faction =
    fieldValueV435("factionSelect") ||
    fieldValueV435("headerFaction", "Unknown");

  const rank = fieldValueV435("profileRank", "Unknown");
  const status = fieldValueV435("onlineStatusSelect", "Unknown");
  const reputation = fieldValueV435("profileReputation", "Neutral");
  const badges = fieldValueV435("profileBadges", "None");
  const homeArea =
    fieldValueV435("profileHomeArea") ||
    fieldValueV435("headerLocation", "Unknown");
  const weapon = fieldValueV435("profileWeapon", "Unknown");
  const bio =
    fieldValueV435("profileBio") ||
    fieldValueV435("idPreviewBio", "No PDA note recorded.");

  return {
    callsign,
    faction,
    rank,
    status,
    reputation,
    badges,
    homeArea,
    weapon,
    bio,
    build: STALKERNET_BUILD_V435,
    exportedAt: new Date().toISOString()
  };
}

function completionScoreV435(data = profileDataV435()) {
  const checks = [
    ["Callsign", data.callsign && !/unknown|marked rookie/i.test(data.callsign)],
    ["Faction", data.faction && !/unknown/i.test(data.faction)],
    ["Rank", data.rank && !/unknown/i.test(data.rank)],
    ["Status", data.status && !/unknown/i.test(data.status)],
    ["Reputation", data.reputation && !/unknown/i.test(data.reputation)],
    ["Badge", data.badges && !/^none$/i.test(data.badges)],
    ["Home Area", data.homeArea && !/unknown/i.test(data.homeArea)],
    ["Weapon", data.weapon && !/unknown/i.test(data.weapon)],
    ["Bio", data.bio && !/no pda note|unknown/i.test(data.bio) && data.bio.length > 8]
  ];

  const completed = checks.filter(([, ok]) => ok).length;
  const percent = Math.round((completed / checks.length) * 100);
  const missing = checks.filter(([, ok]) => !ok).map(([label]) => label);

  return { completed, total: checks.length, percent, missing };
}

function dossierTextV435(data = profileDataV435()) {
  return [
    "STALKERNET PUBLIC DOSSIER",
    `Callsign: ${data.callsign}`,
    `Faction: ${data.faction}`,
    `Rank: ${data.rank}`,
    `Status: ${data.status}`,
    `Reputation: ${data.reputation}`,
    `Badge: ${data.badges}`,
    `Home Area: ${data.homeArea}`,
    `Preferred Weapon: ${data.weapon}`,
    "",
    "PDA Note:",
    data.bio || "No PDA note recorded.",
    "",
    `Exported from StalkerNet ${STALKERNET_BUILD_V435}`
  ].join("\n");
}

function ensureDossierToolsPanelV435() {
  const root = idRootV435();
  if (!root) return null;

  let panel = document.getElementById("dossierToolsPanelV435");
  if (!panel) {
    panel = document.createElement("article");
    panel.id = "dossierToolsPanelV435";
    panel.className = "dossier-tools-panel-v435 module-panel";
    panel.innerHTML = `
      <div class="module-label">DOSSIER TOOLS</div>
      <p id="dossierToolsStatusV435" class="message-text">Dossier tools ready.</p>
      <div class="dossier-meter-v435" aria-label="Profile completeness">
        <div id="dossierMeterFillV435"></div>
      </div>
      <p id="dossierMissingV435" class="muted dossier-missing-v435"></p>
      <div class="dossier-actions-v435">
        <button id="copyDossierTextBtnV435" class="small-btn">Copy Dossier</button>
        <button id="copyDossierJsonBtnV435" class="small-btn">Copy JSON</button>
        <button id="refreshDossierPreviewBtnV435" class="small-btn">Refresh Preview</button>
      </div>
    `;
  }

  if (!panel.parentElement) {
    const preview = document.querySelector("#profileTab .id-card-preview");
    if (preview) preview.insertAdjacentElement("afterend", panel);
    else root.insertBefore(panel, root.firstElementChild?.nextElementSibling || root.firstElementChild);
  }

  bindDossierToolsV435();
  updateDossierToolsV435();
  return panel;
}

async function copyTextV435(text, statusMessage) {
  const status = document.getElementById("dossierToolsStatusV435");

  try {
    await navigator.clipboard.writeText(text);
    if (status) status.textContent = statusMessage;
  } catch (error) {
    if (status) status.textContent = "Clipboard blocked. Text printed to console.";
    try { console.log(text); } catch (e) {}
  }
}

function refreshIdPreviewV435() {
  const data = profileDataV435();

  const name = document.getElementById("idPreviewName");
  const meta = document.getElementById("idPreviewMeta");
  const rep = document.getElementById("idPreviewRep");
  const bio = document.getElementById("idPreviewBio");
  const headerCallsign = document.getElementById("headerCallsign");
  const headerFaction = document.getElementById("headerFaction");
  const headerLocation = document.getElementById("headerLocation");

  if (name) name.textContent = data.callsign || "Unknown Stalker";
  if (meta) meta.textContent = `${data.faction || "Faction unknown"} // ${data.rank || "Rank unknown"}`;
  if (rep) rep.textContent = data.reputation || "Neutral";
  if (bio) bio.textContent = data.bio || "No PDA note recorded.";
  if (headerCallsign) headerCallsign.textContent = (data.callsign || "Marked Rookie").toUpperCase();
  if (headerFaction) headerFaction.textContent = (data.faction || "Loner").toUpperCase();
  if (headerLocation) headerLocation.textContent = (data.homeArea || "Cordon").toUpperCase();

  updateDossierToolsV435();
}

function updateDossierToolsV435() {
  const data = profileDataV435();
  const score = completionScoreV435(data);

  const status = document.getElementById("dossierToolsStatusV435");
  const fill = document.getElementById("dossierMeterFillV435");
  const missing = document.getElementById("dossierMissingV435");

  if (status) {
    status.textContent = `Profile completeness: ${score.percent}% (${score.completed}/${score.total}).`;
  }

  if (fill) {
    fill.style.width = `${score.percent}%`;
    fill.textContent = `${score.percent}%`;
  }

  if (missing) {
    if (!score.missing.length) {
      missing.textContent = "All public dossier fields look ready.";
    } else {
      missing.textContent = `Missing or weak: ${score.missing.join(", ")}.`;
    }
  }
}

function bindDossierToolsV435() {
  const copyText = document.getElementById("copyDossierTextBtnV435");
  const copyJson = document.getElementById("copyDossierJsonBtnV435");
  const refresh = document.getElementById("refreshDossierPreviewBtnV435");

  if (copyText && !copyText.dataset.v435Bound) {
    copyText.dataset.v435Bound = "true";
    copyText.addEventListener("click", event => {
      event.preventDefault();
      copyTextV435(dossierTextV435(), "Public dossier copied.");
    });
  }

  if (copyJson && !copyJson.dataset.v435Bound) {
    copyJson.dataset.v435Bound = "true";
    copyJson.addEventListener("click", event => {
      event.preventDefault();
      copyTextV435(JSON.stringify(profileDataV435(), null, 2), "Profile JSON copied.");
    });
  }

  if (refresh && !refresh.dataset.v435Bound) {
    refresh.dataset.v435Bound = "true";
    refresh.addEventListener("click", event => {
      event.preventDefault();
      refreshIdPreviewV435();
      const status = document.getElementById("dossierToolsStatusV435");
      if (status) status.textContent = "ID preview refreshed.";
      setTimeout(updateDossierToolsV435, 650);
    });
  }

  [
    "callsignInput",
    "factionSelect",
    "profileRank",
    "onlineStatusSelect",
    "profileReputation",
    "profileBadges",
    "profileHomeArea",
    "profileWeapon",
    "profileBio"
  ].forEach(id => {
    const el = document.getElementById(id);
    if (!el || el.dataset.v435DossierBound) return;
    el.dataset.v435DossierBound = "true";
    el.addEventListener("input", updateDossierToolsV435);
    el.addEventListener("change", updateDossierToolsV435);
  });
}

function patchBuildLabelsV435() {
  window.STALKERNET_CURRENT_BUILD = STALKERNET_BUILD_V435;

  if (typeof syncBuildFieldsV428 === "function") {
    try { syncBuildFieldsV428(); } catch (error) {}
  }

  const cacheStatus = document.getElementById("settingsCacheStatusV423") || document.getElementById("cacheStatusV3998");
  if (cacheStatus) cacheStatus.textContent = "Current build: v4.3.5. Settings ready.";

  document.querySelectorAll("#settingsTab strong, #settingsTab span, #settingsTab p, #profileTab strong, #profileTab span, #profileTab p").forEach(el => {
    const text = el.textContent || "";
    if (/^v4\.\d+\.\d+$/.test(text.trim())) el.textContent = STALKERNET_BUILD_V435;
    else if (/Current build: v4\.\d+\.\d+/.test(text)) {
      el.textContent = text.replace(/Current build: v4\.\d+\.\d+\. Settings ready\./, `Current build: ${STALKERNET_BUILD_V435}. Settings ready.`);
    }
  });
}

function setupDossierToolsV435() {
  ensureDossierToolsPanelV435();
  updateDossierToolsV435();
  patchBuildLabelsV435();
}

window.addEventListener("load", () => {
  [160, 600, 1400, 2800].forEach(delay => setTimeout(setupDossierToolsV435, delay));
});

document.addEventListener("click", event => {
  const target = event.target;
  if (target?.closest?.("#profileTab, [data-tab='profileTab'], .nav-btn, #dossierToolsPanelV435")) {
    setTimeout(setupDossierToolsV435, 140);
    setTimeout(updateDossierToolsV435, 500);
  }
}, true);

window.setupDossierToolsV435 = setupDossierToolsV435;
window.updateDossierToolsV435 = updateDossierToolsV435;
