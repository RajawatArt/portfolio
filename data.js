/**
 * PORTFOLIO DATA - Easy to Edit
 * 
 * To add a new project:
 * 1. Copy the template below
 * 2. Fill in: title, category, meta, and images
 * 3. Save and refresh your browser
 * 
 * Categories: "studio", "personal", "album"
 * 
 * Template:
 * {
 *   title: "Project Name",
 *   category: "studio",
 *   meta: "Role — Studio / Client",
 *   video: "https://youtube.com/watch?v=...", // optional — single video
 *   videos: ["https://youtube.com/watch?v=...", "https://vimeo.com/..."], // optional — multiple videos (use instead of "video")
 *   images: [
 *     { src: "image-url", caption: "Image description" },
 *   ]
 * } 
 */

const ASSET_BASE = "https://pub-55a74feacf2244e2a0a923ce15f2237d.r2.dev";

// ==================== HELPER FACTORY ====================
const createHelper = (basePath) => (f, c) => ({ 
  src: `${ASSET_BASE}/${basePath}/${f}`, 
  caption: c 
});

const thumb = (folder, f) => `${ASSET_BASE}/images/${folder}/${f}`;

// ==================== STUDIO WORK ====================
const absolution = createHelper("images/studio/absolution");
const adultswim = createHelper("images/studio/adultswim");
const airbnb = createHelper("images/studio/airbnb");
const apex_endorsement = createHelper("images/studio/apex_endorsement");
const bazaar = createHelper("images/studio/bazaar");
const booyah = createHelper("images/studio/booyah");
const brawl = createHelper("images/studio/brawl");
const chobani = createHelper("images/studio/Chobani");
const freefire = createHelper("images/studio/freefire");
const trainline = createHelper("images/studio/goldenwolf");
const hayday = createHelper("images/studio/hayday");
const kizaziMoto = createHelper("images/studio/kizazi");
const midnight = createHelper("images/studio/midnight");
const mtg = createHelper("images/studio/mtg");
const palia = createHelper("images/studio/Palia");
const facebook = createHelper("images/studio/RiffRaff");
const riot_domination = createHelper("images/studio/riot_domination");
const riot_northstar = createHelper("images/studio/riot_northstar");
const syncron = createHelper("images/studio/syncron");
const valorant_vibes = createHelper("images/studio/valorant_vibes");
const wagamama = createHelper("images/studio/wagamama");
const phoenix = createHelper("images/studio/wizz");
const procreate = createHelper("images/studio/procreate");
const owlient = createHelper("images/studio/Elite_Squad");

// ==================== PERSONAL WORK ====================
const ghibli = createHelper("images/personal/ghibli");
const goy = createHelper("images/personal/ghost_of_yotie");
const tsushima = createHelper("images/personal/Ghost_of_Tsushima");
const beautifulday = createHelper("images/personal/Beautiful_day");
const sekiro = createHelper("images/personal/Sekiro");
const photostudy = createHelper("images/personal/Photo_Study");
const cyberpunk = createHelper("images/personal/Cyberpunk");
const sketch = createHelper("images/personal/Sketch");
const stilllife = createHelper("images/personal/Still_life");
const northernlights = createHelper("images/personal/Northern_Lights");


// ==================== ALBUM ART ====================
const lofigirl = createHelper("images/album/lofiGirl");
const raimu = createHelper("images/album/Raimu");


// ==================== HOG ART ====================
const ncis = createHelper("images/studio/Hidden_Objects_Games/NCIS");
const csi = createHelper("images/studio/Hidden_Objects_Games/CSI");
const playdom = createHelper("images/studio/Hidden_Objects_Games");


// ==================== DMP ART ====================
const dmp = createHelper("images/personal/DMP");

// ====================PROJECTS ====================




const projects = [
  {
    title: "Bloomburrow | Magic: The Gathering",
    category: "studio",
    meta: "Background Painting — Brazen Animation Studio",
    thumbnail: thumb("studio/mtg", "mtg_thumb.jpg"),
    images: [
      mtg("fieldGrass_A.jpg", "Main BG — Field grass"), mtg("fieldGrass_B.jpg", "Transition — Field grass"),
      mtg("cityPath.jpg", "City path"), mtg("fieldGrassFlies.jpg", "Field grass, flies"),
      mtg("cityStatue.jpg", "City statue"), mtg("forestWide.jpg", "Forest, wide"),
      mtg("fieldBattleReverse.jpg", "Field battle, reverse angle")
    ]
  },
    {
    title: "Palia: Cinematic Trailer",
    category: "studio",
    meta: "Environment — Axis Studios / Singularity 6",
    thumbnail: thumb("studio/Palia", "Palia_thumb.jpg"),
    video: "https://youtu.be/lYI7HGeCF_s",
    images: [
      palia("Palia_ForestRuins_02.jpg", "Forest Ruin"),
      palia("Palia_ForestRuin.jpg", "Town"),
      palia("Palia_Bridge.jpg", "Bridge"),
      palia("RoadToTown.jpg", "Road to Town"),
      palia("Palia_Road_To_Town_Paintover_practice.jpg", "Gate"),
      palia("Palia_ForestRuins03.jpg", "Day version painted by Yannic Kawan"),
      palia("Town_Monument.jpg", "Town Monument"),
      palia("Palia_ForestRuin_sketch.jpg", "Sketch"),
      palia("Palia_Road_To_Town_Paintover_practice.gif", "Process Preview"),
      palia("Town_Monument_Process_preview.gif", "Process Preview")
    ]
  },

  {
    title: "Background art- The bazaar official launch tailer",
    category: "studio",
    meta: "Environment — Mana Studio / Background work completed for The Bazaar Launch Trailer under the art direction of Jorik Feskens Background layout supplied by the client",
    thumbnail: thumb("studio/bazaar", "BZ_thumb.jpg"),
    video: "https://vimeo.com/954096994",
    images: [
      bazaar("01.jpg", "Harbour"), bazaar("BG_Alley.jpg", "Alley"),
      bazaar("02.jpg", "City Entrance"),  bazaar("Mak_lab.jpg", "Mak Lab"),  bazaar("Bazaar_colorScript.jpg", "Colour Script")
    ]
  },
  
  
  {
    title: "Return to Valoran City — Star Guardian",
    category: "studio",
    meta: "Background Art — Sun Creature Studio / League of Legends",
    thumbnail: thumb("studio/valorant_vibes", "vibes_thumb.jpg"),
    video: "https://youtu.be/nEFcbKF4WfY",
    images: [
      valorant_vibes("vibes_classroom.jpg", "Return to Valoran City"),  valorant_vibes("vibes_piano.jpg", "Piano")
    ]
  },

  {
    title: "Trainline: I Came By Train (Craig David)",
    category: "studio",
    meta: "Design — Golden Wolf / Trainline",
    thumbnail: thumb("studio/goldenwolf", "trainline_thumb.jpg"),
    video: "https://vimeo.com/763817515",
    images: [
      trainline("trainline01.jpg", "I Came By Train"),  trainline("trainline02.jpg", "Better Days"),
      trainline("trainline03.jpg", "Better Days"), trainline("trainline04.jpg", "Better Days"),
      trainline("trainline05.jpg", "Better Days"), trainline("trainline06.jpg", "Better Days"),
      trainline("trainline07.jpg", "Better Days"),  trainline("trainline08.jpg", "Better Days"),
      trainline("trainline09.jpg", "Better Days"),  trainline("trainline10.jpg", "Better Days")
    ]
  },

  {
    title: "Kizazi Moto: Mukudzei",
    category: "studio",
    meta: "Background Painting — Digital Dimension / Saturday Animation Studio - A few years ago, I had an amazing experience collaborating with the talented team at Digital Dimension, under Sunny Shah’s art direction, on *Kizazi Moto: Mukudzei EP06*. I contributed to concept designs for the pavilion, Sky Road, rooftop interiors and exteriors, and created digital matte paintings for the sky backgrounds throughout the film www.saturdayanimation.com/kizazimoto",
    thumbnail: thumb("studio/kizazi", "KM_Thumb01.jpg"),
    video: "https://www.youtube.com/embed/WpypOiIB2jc?si=_8sjHHoYODDy9V6V",
    images: [
      kizaziMoto("Muku_Pavilion_concept.jpg", "Eagle pavilion concept"),
      kizaziMoto("Muku_Eagle_Pavilion_aerial.jpg", "pavilion aerial view"),
      kizaziMoto("Muku_Eagle_Tower.jpg", "Eagle Tower"),
      kizaziMoto("Muku_city_pattern.jpg", "City"),
      kizaziMoto("Muku_Rooftop_int.jpg", "Rooftop Indoor"),
      kizaziMoto("Muku_Rooftop_aerial.jpg", "Rooftop aerial"),
      kizaziMoto("Muku_eagle_Pavilion_ideas.jpg", "Eagle Pavilion city early sketches"),
      kizaziMoto("Muku_eagle_Pavilion_info.jpg", "Eagle Pavilion sketches"),
      kizaziMoto("Muku_Rooftop_int_concepts.jpg", "Rooftop indoor early sketches"),
      kizaziMoto("Muku_Eagle_Tower_ideas.jpg", "Eagle Tower early sketches"),
      kizaziMoto("Muku_skyroad.jpg", "Sky Road"),
      kizaziMoto("Muku_skyroad_ideas.jpg", "sky Road early sketches"),
      kizaziMoto("Muku_ShonaBuildings.jpg", "Shona Building concepts"),
      kizaziMoto("Muku_DMP_village.jpg", "Eagle Tower early sketches"),
      kizaziMoto("Muku_DMP_village_west.jpg", "village West"),
      kizaziMoto("Muku_DMP_village_east.jpg", "Village east"),
      kizaziMoto("Muku_DMP_village_center01.jpg", "Village Center"),
      kizaziMoto("Muku_DMP_village_center02.jpg", "Village center"),
      kizaziMoto("Muku_sky_01_web.jpg", "Sky DMP"),
      kizaziMoto("Muku_SkyDMP03.jpg", "Sky DMP"),
      kizaziMoto("Muku_SkyDMP02.jpg", "Sky DMP"),
      kizaziMoto("Muku_SkyDMP04.jpg", "Sky DMP"),
      kizaziMoto("Muku_SkyDMP05.jpg", "Sky DMP"),
      kizaziMoto("Muku_SkyDMP01.jpg", "Sky DMP")
    ]
  },
  
  {
    title: "League of Legends: Phoenixmancers",
    category: "studio",
    meta: "Background Painting — WIZZ @ Quad Group / Riot Games",
    thumbnail: thumb("studio/wizz", "Phoenixmancers_thumb.jpg"),
    video: "https://www.youtube-nocookie.com/embed/ES5ah68iyxA?rel=0",
    images: [
      phoenix("Phoenixmancers_BG01.jpg", "Phoenixmancers"), phoenix("Phoenixmancers_BG02.jpg", "Phoenixmancers"),
      phoenix("Phoenixmancers_BG03.jpg", "Phoenixmancers"), phoenix("Phoenixmancers_BG04.jpg", "Phoenixmancers"),
      phoenix("Phoenixmancers_BG05.jpg", "Phoenixmancers"), phoenix("Phoenixmancers_BG06.jpg", "Phoenixmancers"),
      phoenix("Phoenixmancers_Process_gif.gif", "Process")
    ]
  },
  

  {
    title: "A Day in a Hay Day- Trailer",
    category: "studio",
    meta: "Environment — Sun Creature Studio / Background work for the game trailer. Background layout supplied by the client",
    thumbnail: thumb("studio/hayday", "hyd_thumb.jpg"),
    video: "https://youtu.be/otQ6kAZJXcY",
    images: [
      hayday("hdy01.jpg", "Windmill"), hayday("hdy04.jpg", "House front"),
      hayday("hdy02.jpg", "Fence"),  hayday("hdy03.jpg", "Soil"),
      hayday("hdy04.jpg", "House door Opened"), hayday("hdy06.jpg", "Ground"),
      hayday("hdy_101_0010_060_bgPaint_v04.mp4", "Background paint process")
    ]
  },
  
     {
    title: "League of Legends: Sentinels of Light|Absolution",
    category: "studio",
    meta: "Background Painting — Axis Studio / Riot Games",
    thumbnail: thumb("studio/absolution", "lol_abs_thumb.jpg"),
    video: "https://www.youtube.com/embed/a8h1BTe45AU?si=W6CcTTbVECZN2wyU",
    images: [
      absolution("lol_BGPaint02_pillar.jpg", ""),
      absolution("lol_BGPaint01_pillar.jpg", ""),
      absolution("lol_BGPaint04_steps.jpg", ""),
      absolution("lol_BGPaint05_throne.jpg", ""),
      absolution("LOL_Absolution_compilation.mp4", "Backgrounds in Final trailer compilation"),
      absolution("LOL_Absolution_cut01.mp4", "background"),
      absolution("LOL_Absolution_cut02.mov", "background02"),
      absolution("LOL_Absolution_cut03.mov", "background03"),
      absolution("LOL_Absolution_cut04.mov", "background04"),
      absolution("SoL2_02_030_anim.gif", "Process")
    ]
  },
  {
    title: "Background art- FACEBOOK - Good Ideas Deserve to be Found",
    category: "studio",
    meta: "Environment — Riff Raff Films / Some background that I did for Facebook commercial video directed by David Wilson",
    thumbnail: thumb("studio/RiffRaff", "Japanese_Market_thumb.jpg"),
    video: "https://player.vimeo.com/video/519042929?h=33147b0dfd&dnt=1",
    images: [
      facebook("Japanese_Market_street.jpg", "Japanese Market"),
      facebook("Japanese_Market_side.png", "Market Side shot panoramic"),
      facebook("facebook_cut.mp4", "preview"),
      facebook("Japanese_Market_manhole.png", "manhole")
    ]
  },

  {
    title: "Background art-'Start Counting' Chobani Probiotic",
    category: "studio",
    meta: "Environment — The Line Animation Studio / Director by Bjørn-Erik Aschim / Art Direction by Pedro Antoine / concept art by: Chiara Benedetti",
    thumbnail: thumb("studio/Chobani", "chobani_kitchen_02.jpg"),
    video: "https://www.youtube-nocookie.com/embed/xWMJU-WFTxQ?rel=0",
    images: [
      chobani("chobani_kitchen_02.jpg", "Kitchen Modern"),
      chobani("chobani_kitchen_01.jpg", "Kitchen old")
    ]
  },
    {
    title: "Ghibli Background Study",
    category: "personal",
    meta: "Background painting — Procreate app",
    layout: "tiles",
    thumbnail: thumb("personal/ghibli", "ghilbi_spritedAway.jpg"),
    images: [
      ghibli("ghilbi_spritedAway.jpg", "Spirited Away"),
      ghibli("ghibli_MyNeighbourTotoro01.jpg", "My Neighbour totoro"),
      ghibli("ghibli_wmwt.jpg", "When Marnie was there"),
      ghibli("ghibli_wmwt02.jpg", "When Marnie was there- Close Up"),
      ghibli("ghibli_fromUpOnPoppyHill01.jpg", "From up on Poppy Hills"),
      ghibli("ghibli_fromUpOnPoppyHill02.jpg", "From up on Poppy Hills"),
      ghibli("ghibli_mononokeHime.jpg", "Princess Mononoke"),
      ghibli("ghibli_Arrietty.jpg", "Arreitty"),
      ghibli("ghibli_porco_rosso01.jpg", "Porco Rosso"),
      ghibli("ghibli_porco_rosso02.jpg", "Porco Rosso"),
      ghibli("ghibli_whisper-of-the-heart.jpg", "Whisper of the Heart")
      
    ]
  },
{
    title: "Trees",
    category: "personal",
    meta: " done in Procreate app",
    images: [
      sketch("sketch01_tree.JPG",)
      ]
    },
  {
    title: "Moss",
    category: "personal",
    meta: " done in Procreate app",
    images: [
       sketch("sketch03_moss.JPG",), sketch("sketch04_rocks.JPG",)
      ]
    },
    {
    title: "Ghost of Yotie — Fan Art",
    category: "personal",
    meta: "Fan Art — GOY Artbook, Sony PlayStation Germany",
    thumbnail: thumb("personal/ghost_of_yotie", "goy_ride.jpg"),
    images: [
      goy("goy_ride.jpg", "Ride"),  goy("goy_duel.jpg", "Duel"), goy("goy_mountain.jpg", "Rest"),
      goy("goy_onsen.jpg", "Onsen"), goy("goy_bookpage.jpg", "book"), goy("goy_book.jpg", "book")
    ]
  },
  {
    title: "The Unknown",
    category: "personal",
    images: [
      sketch("The_Unkown.jpg", "The Unknown")
    ]
  },

    {
    title: "Wagamama 'Bowl to Soul'",
    category: "studio",
    meta: "Background concepts — Some Restaurant and kitchen shots done forthe wagamama 'Bowl to Soul' film by Passion Animation Studio Animation Studios /Agency-Mullenlowe/ Director- Mads Broni",
    thumbnail: thumb("studio/wagamama", "wagamama_thumb.jpg"),
    video: "https://player.vimeo.com/video/394921700?h=cfb9e93a27&dnt=1",
    images: [
      wagamama("W_london_shot1.jpg", "London"),
      wagamama("Wagamama_london_pitch.jpg", "London"),
      wagamama("Wagamama_rest_pitch.jpg", "Restaurant Int"),
      wagamama("Wagamama_SC25.jpg", "Bowl"),
      wagamama("Wagamama_SC17.jpg", "Restaurant Int"),
      wagamama("Wagamama_Scene_16.jpg", "Restaurant"),
      wagamama("Wagamama_Scene_14.jpg", "Bus Stop"),
      wagamama("wagamama_Sc21.jpg", "Kitchen"),
      wagamama("Wagamama_Sc_08.jpg", "Kitchen"),
      wagamama("Wagamama_Sc27.jpg", "Restaurant Int"),
      wagamama("Wagamama_SC38.jpg", "Restaurant Int"),
      wagamama("Wagamama_SC19.jpg", "Restaurant Int"),
      wagamama("Wagamama_SC18.jpg", "Restaurant Int")
    ]
  },
  
    {
    title: "The Unknown",
    category: "personal",
    images: [
      sketch("meeting_place01.jpg",), sketch("meeting_place02.jpg",)
    ]
  },
  
  {
    title: "Raimu: Album Art",
    category: "album",
    meta: "Album art for lofi music albums by Raimu",
     thumbnail: thumb("album/Raimu", "Raimuforest.jpg"),
    images: [
      raimu("Raimuforest.jpg", "Forest" ), raimu("Raimu_torii.jpg", "Raimu Torii" ),
    ]
  },
  
    {
    title: "Syncron x Ohtani",
    category: "studio",
    meta: "Environment — Mana Animation",
    thumbnail: thumb("studio/syncron", "MVU_StadiumExt_CleansingIsle.jpg"),
    videos: [
      "https://youtu.be/Zu_1_Sd8aCk", "https://youtu.be/jk4wEnN98ko",
      "https://youtu.be/iXe6N4cvsCY", "https://youtu.be/vjT4sz6THdU"
    ],
    images: [
      syncron("MVU_StadiumExt_CleansingIsle.jpg", "Stadium seats"), syncron("OvO_StadiumExt_Hitter.jpg", "Hitter"),
      syncron("OvO_StadiumInt_HitPitcher.jpg", "Stadium Exterior"), syncron("OAB_StadiumExt_2nd_3rd_Base.jpg", "Stadium Exterior"),
      syncron("OvO_StadiumExt_Pitcher_3_4.jpg", "Pitcher"), syncron("MANA_SYNCRON_Kitchen.jpg", "Kitchen"),
      syncron("MVU_StadiumExt_B.jpg", "Stadium")
    ]
  },
  {
    title: "Backyard",
    category: "personal",
    meta: " Backyard shot practice from /'My Neighbour Totoro' / done in Procreate app",
    images: [
      ghibli("ghibli_mnt_backyard01.jpg","Day time",),ghibli("ghibli_mnt_backyard02.jpg","Night time"),
      ghibli("ghibli_mnt_backyard03.jpg","Raining"),ghibli("ghibli_mnt_backyard_anim.gif","preview")
      ]
    },  
  {
    title: "Beautiful Day",
    category: "personal",
    meta: "Background painting — Procreate app",
    images: [
      beautifulday("beautiful_day.jpg", "Beautiful Day" ),
      beautifulday("beautiful_day_ref.jpg", "Reference" ),
    ]
  },
  
  {
    title: "Forest",
    category: "personal",
    meta: "Sketches — Procreate app",
    images: [
      sketch("sketch40_forest.jpg",),sketch("sketch05_forest.JPG",),
      sketch("sketch39_forest.jpg",),sketch("sketch41_forest.jpg",)
    ]
  },
   {
    title: "Morning Light",
    category: "studio",
    meta: "Background painting — Procreate app",
    thumbnail: thumb("studio/procreate","IMG_3500.JPG" ),
    images: [
      procreate("IMG_3500.JPG", "Beautiful Day" ),
    ]
  },
   {
    title: "Flowers",
    category: "personal",
    meta: "Macro photos Studies/'Flowers'/ — Procreate app",
    thumbnail: thumb("personal/Sketch","sketch43_flowers.jpg" ),
    images: [
      sketch("sketch43_flowers.jpg",), sketch("sketch09_flowers.JPG",),
      sketch("sketch11_flowers.JPG",), sketch("sketch12_flowers.JPG",)
    ]
  },  
{
    title: "Platform",
    category: "personal",
    images: [
      sketch("platform.JPG",), sketch("platform_train_anim.mp4","Done in After Effects"),sketch("platform_train01.jpg",),
      sketch("platform_train02.JPG",)
    ]
  },

    {
    title: "Marvel Midnight Suns: Salem Sisters",
    category: "studio",
    meta: "Background Paint — Sun Creature / 2K Games",
    thumbnail: thumb("studio/midnight", "midnight_thumb.jpg"),
    images: [
      midnight("salem_sisters.jpg", "Salem Sisters"), midnight("mms_01.jpg", "City Street"),  midnight("mms_02.jpg", "door"),
      midnight("mms_03.jpg"), midnight("mms_04.jpg"), midnight("mms_05.jpg"), midnight("mms_06.jpg"),
      midnight("mms_07.jpg"), midnight("mms_08.jpg"), midnight("mms_09.jpg"),
      midnight("mms_10.jpg"), midnight("mms_11.jpg"), midnight("mms_12.jpg"),
      midnight("mms_13.jpg"), midnight("mms_14.jpg"), midnight("mms_15.jpg"),
      midnight("mms_16.jpg"), midnight("mms_17.jpg"), midnight("mms_18.jpg"),
      midnight("Process_preview.gif", "Process Preview")
    ]
  },
    {
    title: "Apex Legends- Stories from the Outlands – The Endorsement",
    category: "studio",
    meta: "Environment — Passion Animation/ Had a pleasure working on the new cinematic trailer made by Passion Pictures- UK under the direction of Mads Broni",
    thumbnail: thumb("studio/apex_endorsement", "apex_endorsement_thumb.jpg"),
    videos: "https://www.youtube.com/embed/M9Pmf9AB4Mo?si=9EwgFhvZJoPl-S1u",
    images: [
      apex_endorsement("apex_endorsement01.jpg"),
      apex_endorsement("apex_endorsement02.jpg"),
      apex_endorsement("apex_Preview02.mp4"),
      apex_endorsement("apex_endorsement03.jpg"),
      apex_endorsement("apex_endorsement04.jpg"),
      apex_endorsement("apex_endorsement05.jpg"),
      apex_endorsement("apex_endorsement12.jpg"),
      apex_endorsement("apex_Preview01.mp4"),
      apex_endorsement("apex_endorsement06.jpg"),
      apex_endorsement("apex_Preview06.mp4"),
      apex_endorsement("apex_endorsement07.jpg"),
      apex_endorsement("apex_endorsement08.jpg"),
      apex_endorsement("apex_endorsement09.jpg"),
      apex_endorsement("apex_endorsement10.jpg"),
      apex_endorsement("apex_endorsement11.jpg")
    ]
  },
  
    {
    title: "Apex Legends- Stories from the Outlands – NorthStar",
    category: "studio",
    meta: "Environment — Digital Domain/ Excited to share some backgrounds that I did for the another cinematic: Apex Legends “Northstar”. I was mostly assigned to do some aerial shots and some interior bar shots paintover on 3D rendered passes provided by the client. ",
    thumbnail: thumb("studio/riot_northstar", "Art_thumb1.jpg"),
    videos: "https://www.youtube.com/embed/FTk9VD2nPuw?si=5up6Nh211Z0m-KLg",
    images: [
      riot_northstar("northstar_sky01.png"),
      riot_northstar("replay03.mp4"),
      riot_northstar("northstar_sky02.png"),
      riot_northstar("replay01.mp4"),
      riot_northstar("replay05.mp4"),
      riot_northstar("VL0020_paint_final.png"),
      riot_northstar("northstar_sky03.png"),
      riot_northstar("northstar_sky04.png"),
      riot_northstar("replay04.mp4"),
      riot_northstar("northstar_bg01.png"),
      riot_northstar("northstar_bg02.png"),
      riot_northstar("northstar_bg03.png")
    ]
  },

  {
    title: "Kenji's Sushi Shop Showdown - Brawl Stars",
    category: "studio",
    meta: "Environment — DoublePlus Studio/ ",
    thumbnail: thumb("studio/brawl", "brawl_thumb.jpg"),
    videos: "https://www.youtube.com/embed/Q8D95ErQbjk?si=ki7l54OfUJTek6HP",
    images: [
      brawl("Samurai_Dayl.jpg", "Restaurant Day"), brawl("Samurai_night.jpg", "Restaurant night"),
      brawl("Samurai_backdoor.jpg", "Backdoor"), brawl("Samurai_closet.jpg", "closet")
    ]
  },

  {
    title: "FreeFire : Lucha Libre AAA",
    category: "studio",
    meta: "Background Painting — Passion Pictures / Garena Free Fire",
     thumbnail: thumb("studio/freefire", "freefire_luca_thumb.jpg"),
    video: "https://www.youtube.com/embed/uLUlNmNeKNM?si=R4cwhbwRqXupCp5t",
    images: [
      freefire("freefire_luca_bg_sky.jpg", "sky"),
      freefire("freefire_luca_stage01.jpg", ""),
      freefire("freefire_luca_stage02.jpg", ""),
      freefire("freefire_luca_cloud02.jpg", ""),
      freefire("freefire_video01.mp4", ""),
      freefire("freefire_video02.mp4", ""),
      freefire("freefire_video03.mp4", ""),
      freefire("freefire_video04.mp4", ""),
      freefire("freefire_luca_stage01_anim.gif", "crowd added in 3ds max")
    ]
  },

  {
    title: "FreeFire : Booyah Day",
    category: "studio",
    meta: "Background Painting — Passion Pictures / Garena Free Fire",
    thumbnail: thumb("studio/booyah", "booyah_thumb.jpg"),
    video: "https://www.youtube-nocookie.com/embed/WeENy0XYR4E?rel=0",
    images: [
      booyah("BO_bgPaint.jpg", "Booyah Day"),
      booyah("BO_Process.gif", "Booyah Day"),
      booyah("360DMP_BlueSky_pano02.jpg", "Booyah Day"),
      booyah("PF_SmokeWave.jpg", "Booyah Day"),
      booyah("PL_01.jpg", "Booyah Day"),
      booyah("PL_02.jpg", "Booyah Day"),
      booyah("PL_03.jpg", "Booyah Day"),
      booyah("PL_03.jpg", "Booyah Day"),
      booyah("Smoke_preview1.jpg", "Booyah Day"),
      booyah("Smoke_preview2.jpg", "Booyah Day"),
      booyah("Smoke_preview3.jpg", "Booyah Day")
    ]
  },

  {
    title: "Riot Domination",
    category: "studio",
    meta: "Background Painting — 2D Studio/ Some background artworks for the RIOT Domination trailer done by the Client 2P Studios",
    thumbnail:thumb("studio/riot_domination", "dom_lol_thumb.jpg"),
    video: "https://vimeo.com/865705304/f615f0a7b7?fl=pl&fe=sh",
    images: [
      riot_domination("dom_lol_bg01.jpg"), riot_domination("dom_lol_bg02.jpg"),
      riot_domination("dom_lol_bg03.jpg"), riot_domination("dom_finalview.mp4", "video cut preview")
    ]
  },
    {
    title: "Tom Clancy's Elite Squad: Location concepts",
    category: "studio",
    meta: "Environment Concepts for TC: Elite Squad mobile game ",
    thumbnail: thumb("studio/Elite_Squad", "EliteSquad_thumb.jpg"),
    images: [
      owlient("EliteSquad_division_madison_square_concept.jpg", "The Division: Madison Sqaure concept"), 
      owlient("EliteSquad_division_manhattan_bridge.jpg", "The Division: Manhattan Bridge concept"),
      owlient("EliteSquad_ghostrecon_barvechos_nidia_flores_mansion.jpg", "Ghost Recon: Barvechos Nidia Flores Mansion concept"),
      owlient("EliteSquad_ghostrecon_bolivian_village.jpg", "Ghost Recon: Bolivian Village concept"),
      owlient("EliteSquad_ghostrecon_jungle_druglab.jpg", "Ghost Recon: Bolivian Village concept"),
      owlient("EliteSquad_rainbowsixsiege_market.jpg", "Ghost Recon: Bolivian Village concept"),
      owlient("EliteSquad_rainbowsixsiege_navy_pier.jpg", "Rainbow Six Siege: Navy Pier concept"),
      owlient("EliteSquad_rainbowsixsiege_operation_redcrow.jpg", "Rainbow Six Siege:Operation Redcrow concept"),
      owlient("EliteSquad_splintercell_airport.jpg", "Splintercell: Airport concept"),
      owlient("EliteSquad_splintercell_prison_ext.jpg", "Splintercell: Prison Ext concept"),
      owlient("EliteSquad_splintercell_prison_rooftop.jpg", "Splintercell: Prison Rooftop concept")
    ]
  },
  {
    title: "Lofi Girl- Album Art",
    category: "album",
    
    meta: "Album Art — replace with your own tile set",
    thumbnail:thumb("album/lofiGirl", "FindingBeauty_islandinTheSky.jpg"),
    images: [
      lofigirl("FindingBeauty_islandinTheSky.jpg", "Finding Beauty"),
      lofigirl("Moving_On_Tibeauthetraveler.jpg", "Moving On by TibeautheTraveler"),
      lofigirl("Samsara_Eleven_AlbumArt.jpg", "samsara album by Eleven"),
      lofigirl("DaniSogen_TheMagicUnfolds.jpg", "DaniSogen - The Magic Unfolds"),
      lofigirl("Finding_Light.jpg", "Kainbeats - Finding Light"),
      lofigirl("MindeliqxNeeleHarder_NewHorizon.jpg", "Mindeliq x Neele Harder - New Horizon"),
      lofigirl("Yasumu_Unravel.jpg", "Yasumu - Unravel"),
      lofigirl("Tenno_MindTemple.jpg", "Tenno - Mind Temple"),
      lofigirl("BcalmxBanks_Feelings.jpg", "Bcalm x Banks - Feelings"),
      lofigirl("Goson_Dreamfield_albumArt.jpg", "Goson x Dreamfield - Dreams of Angels"),
      lofigirl("Amess_Dream.JPG", "Amess - A place above heaven"),
      lofigirl("LoafyBuilding_Butterflies.jpg", "Loafy Building - Butterflies"),
      lofigirl("tatami_construct_mommyhilfiger.jpg", "Tatami Construct- Mommy Hilfiger"),
      lofigirl("Mondo_loops_Amidst_The_Seven_Seas.jpg", "Mondo Loops-Amidst The Seven Seas"),
      lofigirl("Krynoze_Himalaya.jpg", "Krynoze- Himalaya"),
      lofigirl("LoafyBuilding_HighFlying.JPG", "Loafy Building - High Flying"),
      lofigirl("Sun_Swells.jpg", "Sun Swells"),
      lofigirl("NoSpirit_BetweenWorlds.jpg", "No Spirit - Between Worlds"),
      lofigirl("NaturesBeauty.jpg", "Nature's Beauty"),
      lofigirl("Gpds_traveller.jpg", "Traveller"),
      lofigirl("Journals_AER.jpg", "AER- Journals"),
      lofigirl("Leaving_this_Place.jpg", "Leaving This Place"),
      lofigirl("Kainbeats_Atlantis.jpg", "Kainbeats - Atlantis"),
      lofigirl("outlander_massa.JPG", "l'Outlander - Massa"),
      lofigirl("tenderSpring.JPG", "tender spring - Springtime, with friends"),
      lofigirl("Celestial_ Alignment_Heading_Home.jpg", "Amess - Celestial Alignment-Heading Home"),
      lofigirl("SNUGxNuve_nightfall.JPG", "S N U G x Nuve- Nightfall"),
      lofigirl("Gpds_traveller.jpg", "Traveller v01"),
      lofigirl("Gpds_traveller_v02.jpg", "Traveller v02"),
      lofigirl("Henry_LoafyBuilding_0834.jpg", "Traveller"),
      lofigirl("Jazz_the_chilled.jpg", " Jazz Chilled"),
      lofigirl("Julian_Throne.jpg", "Throne"),
      lofigirl("Kabes_Dosi_wishes_and_Dreams.jpg", "WIshes and Dreams"),
      lofigirl("Krynoze_medieval.jpg", "Medieval"),
      lofigirl("LennyLoops_nitewalk_darkAmbient.jpg", "Night walk"),
      lofigirl("Living_Room_Asian.jpg", "Torii"),
      lofigirl("Luca_Verdant_Fragments.jpg", "Fragments"),
      lofigirl("Moving_On_Tibeauthetraveler.jpg", "Moving On"),
      lofigirl("NoSpirit_Sprintime.jpg", "Spring Time"),
      lofigirl("A_castle_in_the_Sky_Simon.jpg", "A Castle in the Sky"),
      lofigirl("Amess_Dream.JPG", "Dream"),
      lofigirl("Asian_aftenoon_Nara.jpg", "Nara"),
      lofigirl("Asian_johnlee_korea.jpg", "Korea"),
      lofigirl("Asian_livingroom_Magic_of_the_mountains.jpg", "magic of the Mountains"),
      lofigirl("Asian_seathmusic_battlefield_16_9.jpg", "Battefield"),
      lofigirl("Charlee_underwater.jpg", "Underwater"),
      lofigirl("D0d_untold_stories_Medieval_.jpg", "Untold Stories"),
      lofigirl("DarkAmbient_sG.jpg", "Dark Ambient"),
      lofigirl("Dark_ambient_luvpug.jpg", "Dark ambient Luvpug"),
      lofigirl("Dimensions32_TheLegendOfOrpheus.jpg", "The Legend of the Orpheus"),
      lofigirl("Downtown_Binary_Album.jpg", "Downtown binary"),
      lofigirl("Downtown_Binary_rain.jpg", "Rain"),
      lofigirl("Downtown_binary_norway_albumArt.jpg", "Norway"),
      lofigirl("Dreams_in_the_mist_krynoze.jpg", "Dream in the Mist"),
      lofigirl("Drwamwalker_oscillations.jpg", "Oscillation"),
      lofigirl("Elijah_Casiio_Additions.jpg", "Additions"),
      lofigirl("FredpaciMusic_MedievalLoFi.jpg", "FredPacimusic"),
      lofigirl("Seeyouthere_nitewalk.jpg", "See you there- Nitewalk"),
      lofigirl("Sheathmusic_Realms_Unveiled_in_Reverie.jpg", "Realms Unveiled in Reverie"),
      lofigirl("Sleep_afternoon_SailboatAndConstellations.jpg", "Sailboat and Constellations"),
      lofigirl("Sleepermane_Habitual.jpg", "Habitual- Sleepermane"),
      lofigirl("SolarBody_YOTD.jpg", "SolarBody- YOTD"),
      lofigirl("Starfield_lofiGirl.jpg", "Starfield"),
      lofigirl("Synthwave_D0D_Odyssey.jpg", "Odyssey"),
      lofigirl("Synthwave_Fusion_of_worlds.jpg", "Synthwave- Fusion of the worlds"),
      lofigirl("Synthwave_Temporal_Odyssey.jpg", "Synthwave- Temporal Odyssey"),
      lofigirl("Tenno_SleepWalker.jpg", "Tenno- Sleepwalker"),
      lofigirl("TheSearchforPlanet_16_9.jpg", "The search for the Planet"),
      lofigirl("Traces_of_us_sleepSteezy.jpg", "SleepSteezy- Traces of Us"),
      lofigirl("WishesAndDreams_Dreamland.jpg", "Wishes and Dreams- Dreamland"),
      lofigirl("Wistful_grove_hotpotstoes.jpg", "Hotpotstoes- Wishful grove"),
      lofigirl("Gpds_travellepg", "Traveller")
        
    ]
  },
  
   {
    title: "Sekiro FanArt",
    category: "personal",
    meta: " Sekiro Fan art on Procreate app/ The game is absoolutyl amazing and full of wonderful scneneries",
    images: [
      sekiro("sekiro03.JPG",), sekiro("sekiro02.JPG",  ), sekiro("sekiro09.JPG", ),
      sekiro("sekiro10_adaptation.jpg",), sekiro("sekiro04.JPG", ), sekiro("sekiro01.JPG", ), sekiro("sekiro05.JPG", ),
      sekiro("sekiro06.JPG", ), sekiro("sekiro07.JPG", )
    ]
  },  
  
   {
    title: "Photo Study",
    category: "personal",
    meta: " Photo Study on Procreate app/ Some based on the pictures I took during travel",
    layout: "tiles",
    images: [
      photostudy("after_dark.JPG",), photostudy("rainy_day.JPG",  ), photostudy("rainy_day02.JPG", ),
      photostudy("miyajima_hiroshima.JPG", ), photostudy("Winter_rising.jpg", ), photostudy("hongkong_shop.JPG", ),
      photostudy("normalpeople.JPG", ), photostudy("kyoto_train.JPG", ), photostudy("udaipur_palace.JPG", ),
      photostudy("hongkong.JPG", ), photostudy("tokyo_dome.JPG", ), photostudy("taxi.JPG", ),
      photostudy("tokyo_palace.JPG", ), photostudy("rohtang_pass.JPG", ), photostudy("nubra_valley_leh.JPG", ),
      photostudy("himeji_castle.JPG", ), photostudy("hokora.JPG", ), photostudy("kyoto_02.JPG", ),
      photostudy("kyoto_03.JPG", ), photostudy("kyoto_04.JPG", ), photostudy("kyoto_teashop.JPG", ),
      photostudy("kyoto_train.JPG", ), photostudy("leh_monastery.JPG", ), photostudy("snow_monkey_path.JPG", ),
      photostudy("oahara_03.JPG", ), photostudy("oahara_01.JPG", ), photostudy("oahara_04.JPG", ),
      photostudy("takeda_castle.JPG", ), photostudy("goa_sunset.JPG", ), photostudy("Cityscape.JPG", ),
      photostudy("dharamkot_trek.jpg", ), photostudy("musandam_oman.JPG", ), 
      photostudy("Itsukushima_Shrine.jpg", )
    ]
  }, 
   {
    title: "Cyberpunk",
    category: "personal",
    meta: "Cyberpunk art on Procreate app/",
    images: [
      cyberpunk("Cyberpunk2077_01.jpg",), cyberpunk("Cyberpunk2077_02.jpg",  ), cyberpunk("Cyberpunk2077_03.jpg", ),
      cyberpunk("NightCity.JPG", ), cyberpunk("District21.JPG", ), cyberpunk("CityLights.JPG", ),
      cyberpunk("meeting.jpg", ), cyberpunk("RainyDay.JPG", ), cyberpunk("Swagatam.jpg", )
    ]
  }, 
    {
    title: "Sketches",
    category: "personal",
    meta: "Sketches on Procreate app/",
    layout: "tiles",
    images: [
      sketch("sketch02_tree.JPG", ), sketch("sketch05_forest.JPG", ), sketch("sketch16_torii.JPG",),
      sketch("sketch07_bridge.JPG",), sketch("sketch08_clouds.JPG", ), sketch("sketch09_flowers.JPG",),
      sketch("sketch10_flowers.JPG",), sketch("sketch11_flowers.JPG", ), sketch("sketch12_flowers.JPG",),
      sketch("sketch13_doors.JPG",), sketch("sketch15_kerala.JPG", ), sketch("sketch17_kerala.JPG",),
      sketch("sketch18_village.JPG",), sketch("sketch19_beach.JPG", ), sketch("sketch20_beach.JPG",),
      sketch("sketch21_beach.JPG",), sketch("sketch22_himeji.jpg", ), sketch("sketch14_windmill.JPG",),
      sketch("sketch23_waterfall.JPG",), sketch("sketch24_torii.JPG", ), sketch("sketch25_tree.JPG",),
      sketch("sketch26_lake.JPG",), sketch("sketch27_sunset.JPG", ), sketch("sketch28_sunset.JPG",),
      sketch("sketch29_waterfall.JPG",), sketch("sketch30_tree.JPG", ), sketch("sketch31_forest.JPG",),
      sketch("sketch32_mountain.JPG",), sketch("sketch35_lights.JPG", ), sketch("sketch33_fuji.JPG",),
      sketch("sketch34_hut.JPG",), sketch("sketch36_dream.JPG", ), sketch("sketch37_underwater.JPG",),
      sketch("sketch38_dream.JPG",)
    ]
  }, 
  
    {
    title: "Northern Lights",
    category: "personal",
    meta: "Northern Lights on Procreate app/",
    images: [
      northernlights("Northern_Lights.JPG",), northernlights("Winter_Night_HR.jpg",  ), northernlights("Dancing_Night_web.jpg", ),
      northernlights("Northern_lights_web.jpg", )
    ]
  }, 
  
    {
    title: "Ghost of Tsushima",
    category: "personal",
    meta: "Some FanArt sketches of the incredible game/",
    images: [
      tsushima("got_01.JPG",), tsushima("got_02.JPG",  ), tsushima("got_03.JPG", ),
      tsushima("got_04.JPG", ), tsushima("got_05.JPG", ), tsushima("got_06.jpg", ),
      tsushima("got_10.JPG", ), tsushima("got_7.JPG", ), tsushima("got_08.JPG", )
    ]
  }, 
  
  {
    title: "Goa Sketches ",
    category: "personal",
    meta: "Some Sketches of Goa during the trip on Procreate app",
    images: [
      sketch("Goa/Goa_farmland.jpg",), sketch("Goa/Goa02.jpg",  ), sketch("Goa/Goa01.jpg", ),
      sketch("Goa/Goa03.jpg", ), sketch("Goa/Goa05.jpg", ), sketch("Goa/Goa06.jpg", )
    ]
  }, 
  {
    title: "Still Life",
    category: "personal",
    meta: "Still life Study on Procreate app/",
    images: [
      stilllife("Grapes.JPG",), stilllife("Untitled_still_life.JPG",  ), stilllife("Still_life_sketch.JPG", ),
      stilllife("Still_life_02.JPG", ), stilllife("Still_life_01.JPG", ), stilllife("Flower.JPG", )
    ]
  }, 
  
//==================DMP==========================
 {
    title: "Sunrise- Fort",
    category: "dmp",
    meta: "Peronal DMP practice",
    images: [
      dmp("dmp_fort_sunrise.jpg",)
    ]
  }, 
{
    title: "Passage",
    category: "dmp",
    meta: "Peronal DMP practice from the 'Vietnam stock images bundle' of Ninh Binh location",
    images: [
      dmp("dmp_passage_ninhBinh01.jpg",), dmp("dmp_passage_ninhBinh02.jpg",)
    ]
  }, 
{
    title: "Discover- Oman",
    category: "dmp",
    meta: "Peronal DMP practice from the 'Oman Stock image bundle'",
    images: [
      dmp("dmp_discover_oman.jpg",)
    ]
  }, 
 {
    title: "Passage- Skull Island",
    category: "dmp",
    meta: "Peronal DMP practice from the 'Vietnam stock images bundle' of Skull Island location",
    images: [
      dmp("dmp_passage_viet_skull_island.jpg",)
    ]
  },
   {
    title: "Abandoned- Ma Wan",
    category: "dmp",
    meta: "Peronal DMP practice from the 'Hong Kong- Ma wan stock images bundle'",
    images: [
      dmp("dmp_abandoned_hk.jpg",)
    ]
  },
  //==================DMP==========================
  {
    title: "NCIS: Hidden Crimes",
    category: "hog",
    meta: "Hidden Objects background and assets for NCIS: Hiiden Crimes",
    thumbnail: thumb("studio/Hidden_Objects_Games/NCIS", "NCIS_AbbysLab.jpg"),
    images: [
      ncis("NCIS_AbbysLab.jpg","Abby's Lab"), ncis("NCIS_AirShow.jpg","airshow"),
      ncis("NCIS_BaggageClaim.jpg","baggage Claim"), ncis("NCIS_DroneLab.jpg","Drone Lab"),
      ncis("NCIS_GunShop.jpg","Gun Shop"), ncis("NCIS_HotelRoom.jpg","Hotel Room"),
      ncis("NCIS_Loft.jpg","Loft"), ncis("NCIS_Lounge.jpg","Lounge"),
      ncis("NCIS_Mine.jpg","Mines"), ncis("NCIS_parentsHouse.jpg","Parents House"),
      ncis("NCIS_PizzaShop.jpg","Pizza Shop"), ncis("NCIS_postoffice.jpg","Post Office"),
      ncis("NCIS_SafeHouse.jpg","Safe House"), ncis("NCIS_Studio_apt.jpg","Studio Apartment"),
      ncis("NCIS_map_assets01.jpg","Map Assets"), ncis("NCIS_map_assets02.jpg","Map Assets"),
      
      ncis("NCIS_map_assets03.jpg","Map Assets")   
    ]
  },
   {
    title: "CSI: Hidden Crimes",
    category: "hog",
    meta: "Hidden Objects background and assets for CSI: Hiiden Crimes",
     thumbnail: thumb("studio/Hidden_Objects_Games/CSI", "CSI_backalley.jpg"),
    images: [
      csi("CSI_backalley.jpg","Abby's Lab"), csi("CSI_halloween.jpg","airshow"),
      csi("CSI_banqouet_hall.jpg","baggage Claim"), csi("CSI_living_room.jpg","Drone Lab"),
      csi("CSI_Clea_gateway.jpg","Gun Shop"), csi("CSI_pateintroom.jpg","Hotel Room"),
      csi("CSI_neongraveyard.jpg","Loft"), csi("CSI_PoolTable_master.jpg","Lounge"),
      csi("CSI_restuarant.jpg","Mines"), csi("CSI_swimmin_pool.jpg","Parents House"),
      csi("CSI_underground_unit.jpg","Pizza Shop"), csi("CSI_warehouse.jpg","Post Office"),
      csi("NCIS_map_assets03.jpg","Map Assets")   
    ]
  },
   {
    title: "Playdom: Hidden Objects Games",
    category: "hog",
    meta: "Hidden Objects background and assets for multiple hidden Objects game by Playdom",
     thumbnail: thumb("studio/Hidden_Objects_Games", "Aftermath.jpg"),
    images: [
      playdom("Aftermath.jpg","Abby's Lab"), playdom("Baoan_Temple.jpg","airshow"),
      playdom("Airship_Door.jpg","baggage Claim"), playdom("Bo_Kaap.jpg","Drone Lab"),
      playdom("Airship_Fight.jpg","Gun Shop"), playdom("Canvas_Tent_Interior.jpg","Hotel Room"),
      playdom("Aquarium.jpg","Loft"), playdom("GreenSchool.jpg","Lounge"),
      playdom("ControlRoom.jpg","Mines"), playdom("HiddenRoom_Tokyo.jpg","Parents House"),
      playdom("DayoftheDead.jpg","Pizza Shop"), playdom("IceHotel.jpg","Post Office"),
      playdom("Kremlin_Interior.jpg","Pizza Shop"), playdom("Malta_Alleyway.jpg","Post Office"),
      playdom("Mexican_Market.jpg","Pizza Shop"), playdom("Opera_House.jpg","Post Office"),
      playdom("Panda_Exhibit.jpg","Pizza Shop"), playdom("Shanhai_pass.jpg","Post Office"),
      playdom("Skier.jpg","Pizza Shop"), playdom("The_Trolls_Tongue.jpg","Post Office"),
      playdom("GreekBakery.jpg","Map Assets")   
    ]
  },
  
];

/* ==================== CINEMATICS ==================== */
const cinematics = [
  {
    id: "booyah",
    title: "\"Free Fire: Booyah Day\"",
    desc: "Cinematic work created with Passion Pictures.",
    credit: "Director: Jon Saunders · Client: Passion Animation Studios",
    role: "Background Painting",
    studio: "Passion Pictures",
    client: "Passion Animation Studios",
    director: "Jon Saunders",
    embed: "https://www.youtube-nocookie.com/embed/WeENy0XYR4E?rel=0"
  },
  {
    id: "absolution",
    title: "Absolution | Sentinels of Light 2021 — League of Legends",
    desc: "Background paintovers on a 3D base for the LoL Absolution cinematic.",
    credit: "Produced by: Axis Studio · Client: Riot Games",
    role: "Background Paintover",
    studio: "Axis Studio",
    client: "Riot Games",
    director: "—",
    embed: "https://www.youtube-nocookie.com/embed/a8h1BTe45AU?rel=0"
  },
  {
    id: "phoenixmancers",
    title: "League of Legends: Phoenixmancers",
    desc: "Background paintings for the Phoenixmancers cinematic.",
    credit: "Art Director: Nicolas Dehghani · Studio: WIZZ @ Quad Group · Client: Tencent, Riot Games",
    role: "Background Painting",
    studio: "WIZZ @ Quad Group",
    client: "Tencent, Riot Games",
    director: "Nicolas Dehghani",
    embed: "https://www.youtube-nocookie.com/embed/ES5ah68iyxA?rel=0"
  },
  {
    title: "Apex Legends | Stories from the Outlands — \"Northstar\"",
    desc: "Sky panoramic shots for the Northstar short.",
    credit: "By Digital Domain",
    embed: "https://www.youtube-nocookie.com/embed/FTk9VD2nPuw?rel=0"
  },
  {
    id: "wagamama",
    title: "Wagamama 'Bowl to Soul' — London",
    desc: "Visual development and background creation for the campaign.",
    credit: "Production: Passion Animation Studios · Agency: Mullenlowe · Director: Mads Broni",
    role: "Background Painting",
    studio: "Passion Animation Studios",
    client: "wagamama · MullenLowe",
    director: "Mads Broni",
    embed: "https://player.vimeo.com/video/394921700?h=cfb9e93a27&dnt=1"
  },
  {
    title: "Apex Legends | Stories from the Outlands — \"The Endorsement\"",
    desc: "Background paintovers on a 3D base, alongside fellow artists.",
    credit: "By Passion Pictures, UK · Director: Mads Broni",
    embed: "https://www.youtube-nocookie.com/embed/M9Pmf9AB4Mo?rel=0"
  },
  {
    title: "\"Start Counting\" — Chobani Probiotic",
    desc: "Background work for the campaign spot.",
    credit: "By The Line Animation · Director: Bjørn-Erik Aschim · Art Direction: Pedro Antoine",
    embed: "https://www.youtube-nocookie.com/embed/xWMJU-WFTxQ?rel=0"
  },
  {
    title: "\"Facebook — Good Ideas Deserve to be Found\"",
    desc: "Backgrounds for the Japanese market edit.",
    credit: "Directed by David Wilson · Produced by Riff Raff Films",
    embed: "https://player.vimeo.com/video/519042929?h=33147b0dfd&dnt=1"
  }
];

/* ==================== VIDEOGRAPHY (travel clips) ==================== */
const travelVideos = [
  "GSN91Uu9orQ","avfpV1E0WIM","xMIp1xX6DiI","kZpeSjCiBpU","iUrp4VC-w-Q","K2vIVg9Qhf4",
  "DJD5mZk4ktM","mH-6ry7mhoY","NRivCqDn97A","CumQUbHhPY8","C9dXGXevDYM","5bMPyacMRMk",
  "PZmf7Q76wMU","jLSGt_Pa3q4"
];
