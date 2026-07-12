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
 *   video: "https://youtube.com/watch?v=...", // optional
 *   images: [
 *     { src: "image-url", caption: "Image description" },
 *   ]
 * }
 */

const projects = [
  {
    title: "Bloomburrow | Magic: The Gathering",
    category: "studio",
    meta: "Background Painting — Brazen Animation Studio",
    thumbnail: "images/thumbnails/mtg_thumb.jpg",
    images: [
      { src: "images/projects/studio/mtg/fieldGrass_A.jpg", caption: "Main BG — Field grass" },
      { src: "images/projects/studio/mtg/fieldGrass_B.jpg", caption: "Transition — Field grass" },
      { src: "images/projects/studio/mtg/cityPath.jpg", caption: "City path" },
      { src: "images/projects/studio/mtg/fieldGrassFlies.jpg", caption: "Field grass, flies" },
      { src: "images/projects/studio/mtg/cityStatue.jpg", caption: "City statue" },
      { src: "images/projects/studio/mtg/forestWide.jpg", caption: "Forest, wide" },
      { src: "images/projects/studio/mtg/fieldBattleReverse.jpg", caption: "Field battle, reverse angle" }
    ]
  },
  {
    title: "Ghost of Yotie — Fan Art",
    category: "personal",
    meta: "Fan Art — GOY Artbook, Sony PlayStation Germany",
    thumbnail: "",
    images: [
      { src: "images/projects/personal/ghost_of_yotie/goy_ride.jpg", caption: "Ride" },
      { src: "images/projects/personal/ghost_of_yotie/goy_duel.jpg", caption: "Duel" },
      { src: "images/projects/personal/ghost_of_yotie/goy_mountain.jpg", caption: "Rest" },
      { src: "images/projects/personal/ghost_of_yotie/goy_onsen.jpg", caption: "Onsen" },
      { src: "images/projects/personal/ghost_of_yotie/goy_bookpage.jpg", caption: "book" },
      { src: "images/projects/personal/ghost_of_yotie/goy_book.jpg", caption: "book" }
    ]
  },
  {
    title: "Palia: Cinematic Trailer",
    category: "studio",
    meta: "Environment — Axis Studios / Singularity 6",
    thumbnail: "images/projects/studio/Palia/Palia_thumb.jpg",
    video: "https://youtu.be/lYI7HGeCF_s",
    images: [
      { src: "images/projects/studio/Palia/Palia_ForestRuins_02.jpg", caption: "Forest Ruin" },
      { src: "images/projects/studio/Palia/Palia_ForestRuin.jpg", caption: "Town" },
      { src: "images/projects/studio/Palia/Palia_Bridge.jpg", caption: "Bridge" },
      { src: "images/projects/studio/Palia/RoadToTown.jpg", caption: "Road to town" },
      { src: "images/projects/studio/Palia/PALIA_Road_To_Town_Paintover_practice.jpg", caption: "Gate" },
      { src: "images/projects/studio/Palia/Palia_ForestRuins03.jpg", caption: "Forest Ruin sunset" },
      { src: "images/projects/studio/Palia/ForestCreek.jpg", caption: "Day version painted by Yannic Kawan" },
      { src: "images/projects/studio/Palia/Town_Monument.jpg", caption: "Town Monument" },
      { src: "images/projects/studio/Palia/Palia_ForestRuin_sketch.jpg", caption: "Sketch" },
      { src: "images/projects/studio/Palia/Palia_Road_To_Town_Paintover_practice.gif", caption: "Process Preview" },
      { src: "images/projects/studio/Palia/Town_Monument_Process_preview.gif", caption: "Process Preview" }
    ]
  },
  {
    title: "Syncron x Ohtani",
    category: "studio",
    meta: "Environment — Mana Animation",
    thumbnail: "",
    video: "https://youtu.be/Zu_1_Sd8aCk",
    video: "https://youtu.be/jk4wEnN98ko",
    video: "https://youtu.be/iXe6N4cvsCY",
    video: "https://youtu.be/iXe6N4cvsCY",
    video: "https://youtu.be/vjT4sz6THdU",
    images: [
      { src: "images/projects/studio/syncron/MVU_StadiumExt_CleansingIsle.jpg", caption: "Stadium seats" },
      { src: "images/projects/studio/syncron/OvO_StadiumExt_Hitter.jpg", caption: "Hitter" },
      { src: "images/projects/studio/syncron/OvO_StadiumInt_HitPitcher.jpg", caption: "Stadium Exterior" },
      { src: "images/projects/studio/syncron/OAB_StadiumExt_2nd_3rd_Base.jpg", caption: "Stadium Exterior" },
      { src: "images/projects/studio/syncron/OvO_StadiumExt_Pitcher_3_4.jpg", caption: "Pitcher" },
      { src: "images/projects/studio/syncron/MANA_SYNCRON_Kitchen.jpg", caption: "Kitchen" },
      { src: "images/projects/studio/syncron/MVU_StadiumExt_B.jpg", caption: "Stadium" }
    ]
  },
  {
    title: "Background art- The bazaar official launch tailer",
    category: "studio",
    meta: "Environment — Mana Studio / Background work completed for The Bazaar Launch Trailer under the art direction of Jorik Feskens Background layout supplied by the client",
    thumbnail: "images/projects/studio/bazaar/BZ_thumb.jpg",
    video: "https://vimeo.com/954096994",
    images: [
      { src: "images/projects/studio/bazaar/01.jpg", caption: "Harbour" },
      { src: "images/projects/studio/bazaar/BG_Alley.jpg", caption: "Alley" },
      { src: "images/projects/studio/bazaar/02.jpg", caption: "City Entrance" },
      { src: "images/projects/studio/bazaar/Mak_lab.jpg", caption: "Mak Lab" },
      { src: "images/projects/studio/bazaar/Bazaar_colorScript.jpg", caption: "Colour Script" }
    ]
  },
  {
    title: "A Day in a Hay Day- Trailer",
    category: "studio",
    meta: "Environment — Sun Creature Studio / Background work for the game trailer. Background layout supplied by the client",
    thumbnail: "images/projects/studio/hayday/hyd_thumb.jpg",
    video: "https://youtu.be/otQ6kAZJXcY",
    images: [
      { src: "images/projects/studio/hayday/hdy01.jpg", caption: "Windmill" },
      { src: "images/projects/studio/hayday/hdy04.jpg", caption: "House front" },
      { src: "images/projects/studio/hayday/hdy02.jpg", caption: "Fence" },
      { src: "images/projects/studio/hayday/hdy03.jpg", caption: "Soil" },
      { src: "images/projects/studio/hayday/hdy04.jpg", caption: "House door Opened" },
      { src: "images/projects/studio/hayday/hdy06.jpg", caption: "Ground" }
    ]
  },
  {
    title: "Marvel Midnight Suns: Salem Sisters",
    category: "studio",
    meta: "Background Paint — Sun Creature / 2K Games",
    thumbnail: "images/projects/studio/midnight/midnight_thumb.jpg",
    images: [
      { src: "images/projects/studio/midnight/salem_sisters.jpg", caption: "Salem Sisters" },
      { src: "images/projects/studio/midnight/mms_01.jpg", caption: "City Street" },
      { src: "images/projects/studio/midnight/mms_02.jpg", caption: "door" },
      { src: "images/projects/studio/midnight/mms_03.jpg" },
      { src: "images/projects/studio/midnight/mms_04.jpg" },
      { src: "images/projects/studio/midnight/mms_05.jpg" },
      { src: "images/projects/studio/midnight/mms_06.jpg" },
      { src: "images/projects/studio/midnight/mms_07.jpg" },
      { src: "images/projects/studio/midnight/mms_08.jpg" },
      { src: "images/projects/studio/midnight/mms_09.jpg" },
      { src: "images/projects/studio/midnight/mms_10.jpg" },
      { src: "images/projects/studio/midnight/mms_11.jpg" },
      { src: "images/projects/studio/midnight/mms_12.jpg" },
      { src: "images/projects/studio/midnight/mms_13.jpg" },
      { src: "images/projects/studio/midnight/mms_14.jpg" },
      { src: "images/projects/studio/midnight/mms_15.jpg" },
      { src: "images/projects/studio/midnight/mms_16.jpg" },
      { src: "images/projects/studio/midnight/mms_17.jpg" },
      { src: "images/projects/studio/midnight/mms_18.jpg" },
      { src: "images/projects/studio/midnight/Process_preview.gif", caption: "Process Preview" }
    ]
},
{
  title: "Return to Valoran City — Star Guardian",
  category: "studio",
  meta: "Background Art — Sun Creature Studio / League of Legends",
  thumbnail: "images/projects/studio/valorant_vibes/vibes_thumb.jpg",
  video: "https://youtu.be/nEFcbKF4WfY",
  images: [
    { src: "images/projects/studio/valorant_vibes/vibes_classroom.jpg", caption: "Return to Valoran City" },
    { src: "images/projects/studio/valorant_vibes/vibes_piano.jpg", caption: "Piano" }
  ]
},
{
  title: "Trainline: I Came By Train (Craig David)",
  category: "studio",
  meta: "Design — Golden Wolf / Trainline",
  thumbnail: "images/projects/studio/goldenwolf/trainline_thumb.jpg",
  video: "https://vimeo.com/763817515",
  images: [
    { src: "images/projects/studio/goldenwolf/trainline01.jpg", caption: "I Came By Train" },
    { src: "images/projects/studio/goldenwolf/trainline02.jpg", caption: "Better Days" },
    { src: "images/projects/studio/goldenwolf/trainline03.jpg", caption: "Better Days" },
    { src: "images/projects/studio/goldenwolf/trainline04.jpg", caption: "Better Days" },
    { src: "images/projects/studio/goldenwolf/trainline05.jpg", caption: "Better Days" },
    { src: "images/projects/studio/goldenwolf/trainline06.jpg", caption: "Better Days" },
    { src: "images/projects/studio/goldenwolf/trainline07.jpg", caption: "Better Days" },
    { src: "images/projects/studio/goldenwolf/trainline08.jpg", caption: "Better Days" },
    { src: "images/projects/studio/goldenwolf/trainline09.jpg", caption: "Better Days" },
    { src: "images/projects/studio/goldenwolf/trainline10.jpg", caption: "Better Days" }
    
  ]
},
{
  title: "League of Legends: Phoenixmancers Backgrounds",
  category: "studio",
  meta: "Background Painting — WIZZ @ Quad Group / Riot Games",
  thumbnail: "images/projects/studio/wizz/Phoenixmancers_thumb.jpg",
  video: "https://www.youtube-nocookie.com/embed/ES5ah68iyxA?rel=0",
  images: [
    { src: "images/projects/studio/wizz/Phoenixmancers_BG01.jpg", caption: "Phoenixmancers" },
    { src: "images/projects/studio/wizz/Phoenixmancers_BG02.jpg", caption: "Phoenixmancers" },
    { src: "images/projects/studio/wizz/Phoenixmancers_BG03.jpg", caption: "Phoenixmancers" },
    { src: "images/projects/studio/wizz/Phoenixmancers_BG04.jpg", caption: "Phoenixmancers" },
    { src: "images/projects/studio/wizz/Phoenixmancers_BG05.jpg", caption: "Phoenixmancers" },
    { src: "images/projects/studio/wizz/Phoenixmancers_BG06.jpg", caption: "Phoenixmancers" },
    { src: "images/projects/studio/wizz/Phoenixmancers_Process_gif.gif", caption: "Process" }
  ]
},
  {
   title: "Background art- FACEBOOK - Good Ideas Deserve to be Found",
  category: "studio",
  meta: "Environment — Riff Raff Films / Some background that I did for Facebook commercial video directed by David Wilson",
  video: "https://player.vimeo.com/video/519042929?h=33147b0dfd&dnt=1",
  images: [
    { src: "images/projects/studio/RiffRaff/Japanese_Market_street.jpg", caption: "Japanese Market" },
    { src: "images/projects/studio/RiffRaff/Japanese_Market_side.png", caption: "Market Side shot panoramic" },
    { src: "images/projects/studio/RiffRaff/facebook_cut.mp4", caption: "preview" },
    { src: "images/projects/studio/RiffRaff/Japanese_Market_manhole.png", caption: "manhole" }
  ]
 },
    {
    title: "Background art- “Start Counting” Chobani Probiotic",
    category: "studio",
    meta: "Environment — The Line Animation Studio / Director by Bjørn-Erik Aschim / Art Direction by Pedro Antoine / concept art by: Chiara Benedetti",
    video: "https://www.youtube-nocookie.com/embed/xWMJU-WFTxQ?rel=0",
    images: [
      { src: "images/projects/studio/Chobani/chobani_kitchen_02.jpg", caption: "Kitchen Modern " },
      { src: "images/projects/studio/Chobani/chobani_kitchen_01.jpg", caption: "Kitchen old" }
    ]
  },
{
  title: 'Free Fire "Lucha Libre AAA"',
  category: "studio",
  meta: "Background Painting — Passion Pictures / Garena Free Fire",
  images: [
    { src: "https://cdna.artstation.com/p/assets/images/images/043/925/134/4k/surendra-rajawat-bo-006-paint-210923.jpg?1638632803", caption: "Lucha Libre AAA" },
    { src: "https://cdnb.artstation.com/p/assets/images/images/043/926/003/original/surendra-rajawat-bo-process.gif?1638635010", caption: "Lucha Libre AAA" },
    { src: "https://cdna.artstation.com/p/assets/panos/panos/043/925/426/medium/97f3f4b33a8b0c81.jpg?1638633394", caption: "Lucha Libre AAA" },
    { src: "https://cdna.artstation.com/p/assets/panos/panos/043/925/280/medium/9f353c5d31850a7e.jpg?1638633072", caption: "Lucha Libre AAA" },
    { src: "https://cdnb.artstation.com/p/assets/images/images/043/925/145/4k/surendra-rajawat-pl-008-211006-v1.jpg?1638632826", caption: "Lucha Libre AAA" },
    { src: "https://cdnb.artstation.com/p/assets/images/images/043/925/141/large/surendra-rajawat-pl-005-211006-v1.jpg?1638632814", caption: "Lucha Libre AAA" },
    { src: "https://cdna.artstation.com/p/assets/images/images/043/925/150/4k/surendra-rajawat-smoke-preview1.jpg?1638632836", caption: "Lucha Libre AAA" },
    { src: "https://cdnb.artstation.com/p/assets/images/images/043/925/163/4k/surendra-rajawat-smoke-preview3.jpg?1638632854", caption: "Lucha Libre AAA" },
    { src: "https://cdnb.artstation.com/p/assets/images/images/043/925/155/4k/surendra-rajawat-smoke-preview2.jpg?1638632846", caption: "Lucha Libre AAA" }
  ]
},
{
  title: 'Free Fire "Booyah Day"',
  category: "studio",
  meta: "Background Painting — Passion Pictures / Garena Free Fire",
  video: "https://www.youtube-nocookie.com/embed/WeENy0XYR4E?rel=0",
  images: [
    { src: "https://cdnb.artstation.com/p/assets/images/images/048/518/643/4k/surendra-rajawat-sky-bg-clean-220215-small.jpg?1650272419", caption: "Booyah Day" },
    { src: "https://cdna.artstation.com/p/assets/images/images/048/521/754/4k/surendra-rajawat-qc-001.jpg?1650280124", caption: "Booyah Day" },
    { src: "https://cdnb.artstation.com/p/assets/images/images/048/521/791/4k/surendra-rajawat-in-008-web.jpg?1650280217", caption: "Booyah Day" },
    { src: "https://cdna.artstation.com/p/assets/images/images/048/521/782/4k/surendra-rajawat-ch-007.jpg?1650280194", caption: "Booyah Day" },
    { src: "https://cdna.artstation.com/p/assets/images/images/048/518/646/original/surendra-rajawat-ch-007-crowdsimulation.gif?1650272430", caption: "Crowd anim using 3ds max populate tool" }
  ]
},
{
  title: "wagamama 'Bowl to Soul'",
  category: "studio",
  meta: "Background Painting — Passion Animation Studios / Mullenlowe",
  thumbnail: "images/projects/studio/wagamama/wagamama_thumb.jpg",
  video: "https://player.vimeo.com/video/394921700?h=cfb9e93a27&dnt=1",
  images: [
    { src: "images/projects/studio/wagamama/W_london_shot1.jpg", caption: "London" },
    { src: "images/projects/studio/wagamama/Wagamama_london_pitch.jpg", caption: "London" },
    { src: "images/projects/studio/wagamama/Wagamama_rest_pitch.jpg", caption: "Restaurant Int" },
    { src: "images/projects/studio/wagamama/Wagamama_SC25.jpg", caption: "Bowl" },
    { src: "images/projects/studio/wagamama/Wagamama_SC17.jpg", caption: "Restaurant Int" },
    { src: "images/projects/studio/wagamama/Wagamama_Scene_16.jpg", caption: "Restaurant" },
    { src: "images/projects/studio/wagamama/Wagamama_Scene_14.jpg", caption: "Bus Stop" },
    { src: "images/projects/studio/wagamama/wagamama_Sc21.jpg", caption: "Kitchen" },
    { src: "images/projects/studio/wagamama/Wagamama_Sc_08.jpg", caption: "Kitchen" },
    { src: "images/projects/studio/wagamama/Wagamama_Sc27.jpg", caption: "Restaurant Int" },
    { src: "images/projects/studio/wagamama/Wagamama_SC38.jpg", caption: "Restaurant Int" },
    { src: "images/projects/studio/wagamama/Wagamama_SC19.jpg", caption: "Restaurant Int" },
    { src: "images/projects/studio/wagamama/Wagamama_SC18.jpg", caption: "Restaurant Int" } 
  ]
},
  {
    title: "Ghibli Background Study",
    category: "personal",
    meta: "Background painting — Procreate app",
    images: [
      { src: "images/projects/personal/ghibli/ghilbi_spritedAway.jpg", caption: "Spirited Away" },
      { src: "images/projects/personal/ghibli/ghibli_MyNeighbourTotoro01.jpg", caption: "My Neighbour totoro" },
      { src: "images/projects/personal/ghibli/ghibli_wmwt.jpg", caption: "When Marnie was there" },
      { src: "images/projects/personal/ghibli/ghibli_wmwt02.jpg", caption: "When Marnie was there- Close Up" },
      { src: "images/projects/personal/ghibli/ghibli_fromUpOnPoppyHill01.jpg", caption: "From up on Poppy Hills" },
      { src: "images/projects/personal/ghibli/ghibli_fromUpOnPoppyHill02.jpg", caption: "From up on Poppy Hills" },
      { src: "images/projects/personal/ghibli/ghibli_mononokeHime.jpg", caption: "Princess Mononoke" },
      { src: "images/projects/personal/ghibli/ghibli_Arrietty.jpg", caption: "Arreitty" },
      { src: "images/projects/personal/ghibli/ghibli_porco_rosso01.jpg", caption: "Porco Rosso" },
      { src: "images/projects/personal/ghibli/ghibli_porco_rosso02.jpg", caption: "Porco Rosso" },
      { src: "images/projects/personal/ghibli/ghibli_whisper-of-the-heart.jpg", caption: "Whisper of the Heart" },
      { src: "https://cdn.artstation.com/p/video_sources/000/338/876/when-marnie-was-there-15sec.mp4", caption: "When Marnie was there" }
    ]
  },
   {
    title: "Beautiful Day",
    category: "personal",
    meta: "Background painting — Procreate app",
    images: [
      { src: "https://cdna.artstation.com/p/assets/images/images/036/640/248/large/surendra-rajawat-beautiful-day-web.jpg?1618231920", caption: "Beautiful Day" },
      { src: "https://cdnb.artstation.com/p/assets/images/images/036/640/395/large/surendra-rajawat-beautful-day-ref.jpg?1618232200", caption: "Reference" }
    ]
  },
  {
    title: "Lofi Girl- Album Art",
    category: "album",
    meta: "Album Art —, replace with your own tile set",
    images: [
      { src: "https://cdna.artstation.com/p/assets/images/images/059/146/376/4k/surendra-rajawat-asset.jpg?1675747101", caption: "Dosi x Wishes & dreams album art" },
      { src: "https://cdnb.artstation.com/p/assets/images/images/059/130/495/4k/surendra-rajawat-asset.jpg?1675710800", caption: "Moving On” by TibeautheTraveler" },
      { src: "https://cdna.artstation.com/p/assets/images/images/059/130/098/4k/surendra-rajawat-asset.jpg?1675710309", caption: " “samsara” album by Eleven" },
      { src: "https://cdnb.artstation.com/p/assets/images/images/055/421/875/4k/surendra-rajawat-20220212-065937081-ios.jpg?1666897801", caption: "DaniSogen - The Magic Unfolds " },
      { src: "https://cdna.artstation.com/p/assets/images/images/037/023/838/4k/surendra-rajawat-forest.jpg?1619270461", caption: "Raimu - Sons of the Dew" },
      { src: "https://cdnb.artstation.com/p/assets/images/images/058/616/273/4k/surendra-rajawat-finding-light.jpg?1674578918", caption: "Kainbeats - Finding Light" },
      { src: "https://cdnb.artstation.com/p/assets/images/images/058/615/791/4k/surendra-rajawat-untitled-artwork-15-1.jpg?1674578144", caption: "Mindeliq x Neele Harder - New Horizons" },
      { src: "https://cdna.artstation.com/p/assets/images/images/058/615/776/4k/surendra-rajawat-untitled-artwork-8.jpg?1674578133", caption: "Yasumu - Unravel" },
      { src: "https://cdnb.artstation.com/p/assets/images/images/058/615/339/4k/surendra-rajawat-20220812-093058912-ios.jpg?1674577439", caption: "Tenno - Mind Temple" },
      { src: "https://cdna.artstation.com/p/assets/images/images/058/615/052/4k/surendra-rajawat-untitled-artwork-14-2.jpg?1674576941", caption: "Bcalm x Banks - Feelings" },
      { src: "https://cdna.artstation.com/p/assets/images/images/037/807/416/4k/surendra-rajawat-island-in-the-sky-16-9.jpg?1621367803", caption: "Finding Beauty: Island In the Sky" },
      { src: "https://cdnb.artstation.com/p/assets/images/images/055/422/053/4k/surendra-rajawat-untitled-artwork-7.jpg?1666897257", caption: "Goson x Dreamfield - Dreams of Angels" },
      { src: "https://cdnb.artstation.com/p/assets/images/images/040/554/047/4k/surendra-rajawat-dream.jpg?1629209288", caption: "Amess - A place above heaven" },
      { src: "https://cdnb.artstation.com/p/assets/images/images/058/614/685/4k/surendra-rajawat-untitled-artwork-1-3.jpg?1674576510", caption: "Loafy Building - Butterflies" },
      { src: "https://cdnb.artstation.com/p/assets/images/images/048/798/257/4k/surendra-rajawat-tatami-construct-mommyhilfiger.jpg?1650973416", caption: "Tatami Contruct- mommy Hilfiger" },
      { src: "https://cdnb.artstation.com/p/assets/images/images/048/798/373/4k/surendra-rajawat-mondo-loops-amidst-the-seven-seas.jpg?1650973664", caption: "Mondo_loops_Amidst_The_Seven_Seas" },
      { src: "https://cdnb.artstation.com/p/assets/images/images/042/976/649/4k/surendra-rajawat-himalaya-web.jpg?1635953327", caption: "Krynoze- Himalaya" },
      { src: "https://cdnb.artstation.com/p/assets/images/images/037/807/405/4k/surendra-rajawat-high-flying.jpg?1621367775", caption: "Loafy Building - High Flying" },
      { src: "https://cdna.artstation.com/p/assets/images/images/042/976/906/4k/surendra-rajawat-sun-swells-web.jpg?1635953630", caption: "Sun Swells" },
      { src: "https://cdnb.artstation.com/p/assets/images/images/058/615/347/4k/surendra-rajawat-20220731-072049131-ios.jpg?1674577448", caption: "No Spirit - Between Worlds" },
      { src: "https://cdnb.artstation.com/p/assets/images/images/048/841/269/4k/surendra-rajawat-untitled-artwork-6.jpg?1651065788", caption: "Nature's Beauty" },
      { src: "https://cdna.artstation.com/p/assets/images/images/055/421/806/4k/surendra-rajawat-20220215-093757626-ios.jpg?1666896673", caption: "LightSaber Bar" },
      { src: "https://cdnb.artstation.com/p/assets/images/images/042/977/157/4k/surendra-rajawat-journals-aer-web.jpg?1635954017", caption: "AER- Journals" },
      { src: "https://cdnb.artstation.com/p/assets/images/images/048/841/277/4k/surendra-rajawat-untitled-artwork-13.jpg?1651065803", caption: "Leaving This Place" },
      { src: "https://cdnb.artstation.com/p/assets/images/images/048/799/397/4k/surendra-rajawat-untitled-artwork-3-1.jpg?1650975323", caption: "Kainbeats - Atlantis" },
      { src: "https://cdnb.artstation.com/p/assets/images/images/040/554/057/4k/surendra-rajawat-safar-16-9.jpg?1629209250", caption: "l'Outlander - Massa" },
      { src: "https://cdnb.artstation.com/p/assets/images/images/040/554/051/4k/surendra-rajawat-tohf8492.jpg?1629209243", caption: "tender spring - Springtime, with friends" },
      { src: "", caption: "", placeholder: true }
      
    ]
  }
];

/* ==================== CINEMATICS ==================== */
const cinematics = [
  {
    id:"booyah",
    title: '"Free Fire: Booyah Day"',
    desc: "Cinematic work created with Passion Pictures.",
    credit: "Director: Jon Saunders · Client: Passion Animation Studios",
    role: "Background Painting",
    studio: "Passion Pictures",
    client: "Passion Animation Studios",
    director: "Jon Saunders",
    embed: "https://www.youtube-nocookie.com/embed/WeENy0XYR4E?rel=0"
  },
  {
    id:"absolution",
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
    id:"phoenixmancers",
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
    title: 'Apex Legends | Stories from the Outlands — "Northstar"',
    desc: "Sky panoramic shots for the Northstar short.",
    credit: "By Digital Domain",
    embed: "https://www.youtube-nocookie.com/embed/FTk9VD2nPuw?rel=0"
  },
  {
    id:"wagamama",
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
    title: 'Apex Legends | Stories from the Outlands — "The Endorsement"',
    desc: "Background paintovers on a 3D base, alongside fellow artists.",
    credit: "By Passion Pictures, UK · Director: Mads Broni",
    embed: "https://www.youtube-nocookie.com/embed/M9Pmf9AB4Mo?rel=0"
  },
  {
    title: '"Start Counting" — Chobani Probiotic',
    desc: "Background work for the campaign spot.",
    credit: "By The Line Animation · Director: Bjørn-Erik Aschim · Art Direction: Pedro Antoine",
    embed: "https://www.youtube-nocookie.com/embed/xWMJU-WFTxQ?rel=0"
  },
  {
    title: '"Facebook — Good Ideas Deserve to be Found"',
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