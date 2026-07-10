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
      { src: "https://cdnb.artstation.com/p/assets/images/images/083/864/569/large/surendra-rajawat-fieldgrass-sc010-sh100-a-v07.jpg?1736965014", caption: "Main BG — Field grass" },
      { src: "https://cdnb.artstation.com/p/assets/images/images/083/864/579/large/surendra-rajawat-fieldgrass-sc010-sh100-b-v07.jpg?1736964901", caption: "Transition — Field grass" },
      { src: "https://cdnb.artstation.com/p/assets/images/images/083/864/553/large/surendra-rajawat-citypath-art-productionfile.jpg?1736964869", caption: "City path" },
      { src: "https://cdna.artstation.com/p/assets/images/images/083/864/584/large/surendra-rajawat-fieldgrassflies-art-main-v006.jpg?1736964909", caption: "Field grass, flies" },
      { src: "https://cdna.artstation.com/p/assets/images/images/083/864/560/large/surendra-rajawat-citystatue-bgpaint-productionfile.jpg?1736964878", caption: "City statue" },
      { src: "https://cdnb.artstation.com/p/assets/images/images/083/864/595/large/surendra-rajawat-forestwide-art-production.jpg?1736964918", caption: "Forest, wide" },
      { src: "https://cdna.artstation.com/p/assets/images/images/083/864/562/large/surendra-rajawat-fieldbattlereverse-bgpaint-productionfile.jpg?1736964884", caption: "Field battle, reverse angle" }
    ]
  },
  {
    title: "Ghost of Yotie — Fan Art",
    category: "studio",
    meta: "Fan Art — GOY Artbook, Sony PlayStation Germany",
    images: [
      { src: "https://cdnb.artstation.com/p/assets/images/images/100/549/065/large/surendra-rajawat-asset.jpg?1783283790", caption: "Ride" },
      { src: "https://cdna.artstation.com/p/assets/images/images/100/549/068/4k/surendra-rajawat-asset.jpg?1783283799", caption: "Duel" },
      { src: "https://cdnb.artstation.com/p/assets/images/images/100/549/071/large/surendra-rajawat-asset.jpg?1783283812", caption: "Rest" },
      { src: "https://cdnb.artstation.com/p/assets/images/images/100/549/073/4k/surendra-rajawat-asset.jpg?1783283818", caption: "Onsen" },
      { src: "https://cdna.artstation.com/p/assets/images/images/100/549/080/4k/surendra-rajawat-asset.jpg?1783283834", caption: "book" },
      { src: "https://cdna.artstation.com/p/assets/images/images/100/549/076/4k/surendra-rajawat-asset.jpg?1783283825", caption: "book" }
    ]
  },
  {
    title: "Palia: Cinematic Trailer",
    category: "studio",
    meta: "Environment — Axis Studios / Singularity 6",
    images: [
      { src: "https://cdnb.artstation.com/p/assets/images/images/065/882/009/4k/surendra-rajawat-palia-forestruins-02.jpg?1691483323", caption: "Forest Ruin" },
      { src: "https://cdnb.artstation.com/p/assets/images/images/065/882/001/4k/surendra-rajawat-palia-forestruin.jpg?1691483310", caption: "Town" },
      { src: "https://cdnb.artstation.com/p/assets/images/images/065/881/991/4k/surendra-rajawat-palia-bridge.jpg?1691483300", caption: "Bridge" },
      { src: "https://cdnb.artstation.com/p/assets/images/images/065/882/045/4k/surendra-rajawat-roadtotown.jpg?1691483373", caption: "Road to town" },
      { src: "https://cdna.artstation.com/p/assets/images/images/065/882/034/4k/surendra-rajawat-palia-rox-to-town-paintover-practice.jpg?1691483360", caption: "Gate" },
      { src: "https://cdnb.artstation.com/p/assets/images/images/065/882/025/4k/surendra-rajawat-palia-forestruinssunset.jpg?1691483346", caption: "Forest Ruin sunset" },
      { src: "https://cdnb.artstation.com/p/assets/images/images/065/881/989/4k/surendra-rajawat-forestcreek.jpg?1691483293", caption: "Day version painted by Yannic Kawan" },
      { src: "https://cdnb.artstation.com/p/assets/images/images/065/882/051/4k/surendra-rajawat-town-monument.jpg?1691483389", caption: "Town Monument" },
      { src: "https://cdna.artstation.com/p/assets/images/images/065/882/016/4k/surendra-rajawat-palia-forestruins-ketch.jpg?1691483335", caption: "Sketch" },
      { src: "https://cdnb.artstation.com/p/assets/images/images/065/882/029/original/surendra-rajawat-palia-rox-to-town-paintover-practice.gif?1691483355", caption: "Process Preview" },
      { src: "https://cdna.artstation.com/p/assets/images/images/065/882/056/original/surendra-rajawat-town-monument-process-preview.gif?1691483398", caption: "Process Preview" }
    ]
  },
  {
    title: "Syncron x Ohtani",
    category: "studio",
    meta: "Environment — Mana Animation",
    images: [
      { src: "https://cdna.artstation.com/p/assets/images/images/100/547/832/4k/surendra-rajawat-mvu-sh020-stadiumext-cleansingisle-cl-v004-sr.jpg?1783279237", caption: "Stadium seats" },
      { src: "https://cdnb.artstation.com/p/assets/images/images/100/547/839/4k/surendra-rajawat-ovo-sh070-stadiumext-hitter-cl-v05-sr.jpg?1783279251", caption: "Hitter" },
      { src: "https://cdnb.artstation.com/p/assets/images/images/100/547/843/4k/surendra-rajawat-ovo-sh100-stadiumext-pitcher-3-4-cl-v02-sr.jpg?1783279259", caption: "Pitcher" },
      { src: "https://cdnb.artstation.com/p/assets/images/images/100/547/829/4k/surendra-rajawat-mana-syncron-mxn-sh010-kitchenint-cl-v05-sr.jpg?1783279230", caption: "Kitchen" },
      { src: "https://cdnb.artstation.com/p/assets/images/images/100/548/061/4k/surendra-rajawat-oab-sh030-stadiumext-2nd-3rd-base-cl-v004-sr.jpg?1783280019", caption: "Stadium" },
      { src: "https://cdnb.artstation.com/p/assets/images/images/100/547/835/4k/surendra-rajawat-mvu-sh030-stadiumext-b-cl-v04-sr.jpg?1783279244", caption: "Stadium Exterior" }
    ]
  },
  {
    title: "Background art- The bazaar official launch tailer",
    category: "studio",
    meta: "Environment — Mana Studio / Background work completed for The Bazaar Launch Trailer under the art direction of Jorik Feskens Background layout supplied by the client",
    images: [
      { src: "https://cdnb.artstation.com/p/assets/images/images/090/172/303/4k/surendra-rajawat-bz-paint-ending.jpg?1753128596", caption: "Harbour" },
      { src: "https://cdna.artstation.com/p/assets/images/images/090/172/316/4k/surendra-rajawat-bg-alley4.jpg?1753128629", caption: "Alley" },
      { src: "https://cdna.artstation.com/p/assets/images/images/090/172/312/4k/surendra-rajawat-bz-ending2-cropped.jpg?1753128616", caption: "City Entrance" },
      { src: "https://cdnb.artstation.com/p/assets/images/images/090/172/297/4k/surendra-rajawat-bazaar-colorscript-low.jpg?1753128584", caption: "Colour Script" }
    ]
  },
  {
    title: "A Day in a Hay Day- Trailer",
    category: "studio",
    meta: "Environment — Sun Creature Studio / Background work for the game trailer. Background layout supplied by the client",
    images: [
      { src: "https://cdna.artstation.com/p/assets/images/images/087/920/788/4k/surendra-rajawat-hdy-101-0010-060-bgpaint-v04.jpg?1747046056", caption: "Windmill" },
      { src: "https://cdna.artstation.com/p/assets/images/images/087/920/796/4k/surendra-rajawat-hdy-101-0010-040-bgpaint-v02.jpg?1747046085", caption: "House front" },
      { src: "https://cdnb.artstation.com/p/assets/images/images/087/920/791/4k/surendra-rajawat-hdy-101-0010-080-bgpaint-v01.jpg?1747046069", caption: "soil" },
      { src: "https://cdnb.artstation.com/p/assets/images/images/087/920/789/4k/surendra-rajawat-hdy-101-0010-070-bgpaint-v01.jpg?1747046062", caption: "Fence" },
      { src: "https://cdnb.artstation.com/p/assets/images/images/087/920/793/4k/surendra-rajawat-hdy-101-0010-020-bgpaint-v05.jpg?1747046079", caption: "House door Opened" },
      { src: "https://cdna.artstation.com/p/assets/images/images/087/920/792/4k/surendra-rajawat-hayday-bg-pnt-101-0010-050-v04.jpg?1747046074", caption: "Ground" }
    ]
  },
  {
    title: "Marvel Midnight Suns: Salem Sisters",
    category: "studio",
    meta: "Background Paint — Sun Creature / 2K Games",
    images: [
      { src: "https://cdna.artstation.com/p/assets/images/images/064/041/560/4k/surendra-rajawat-untitled-artwork-2.jpg?1686944855", caption: "Salem Sisters" },
      { src: "https://cdna.artstation.com/p/assets/images/images/064/041/554/4k/surendra-rajawat-mms-back-ext-abandoned-city-streets-night-concept-bgpaint.jpg?1686944844", caption: "City Street" },
      { src: "https://cdnb.artstation.com/p/assets/images/images/064/041/515/4k/surendra-rajawat-102-0040-020-bgpaint-v001.jpg?1686944763", caption: "door" },
      { src: "https://cdnb.artstation.com/p/assets/images/images/064/041/523/4k/surendra-rajawat-mms-060-020-bgpaint-v001-copy.jpg?1686944780" },
      { src: "https://cdna.artstation.com/p/assets/images/images/064/041/532/4k/surendra-rajawat-mms-102-0030-020-bgpaint-v01-copy.jpg?1686944800" },
      { src: "https://cdna.artstation.com/p/assets/images/images/064/041/534/4k/surendra-rajawat-mms-102-0040-100-bgpaint-v001-sr.jpg?1686944809" },
      { src: "https://cdnb.artstation.com/p/assets/images/images/064/041/527/4k/surendra-rajawat-mms-102-0010-020-bgpaint-v003.jpg?1686944790" },
      { src: "https://cdnb.artstation.com/p/assets/images/images/064/041/529/4k/surendra-rajawat-mms-102-0010-030-bglayout-v003.jpg?1686944795" },
      { src: "https://cdna.artstation.com/p/assets/images/images/064/041/536/4k/surendra-rajawat-mms-102-0080-020-bgpaint-v002-sr.jpg?1686944815" },
      { src: "https://cdnb.artstation.com/p/assets/images/images/064/041/539/4k/surendra-rajawat-mms-102-0080-050-bgpaint-v001.jpg?1686944821" },
      { src: "https://cdnb.artstation.com/p/assets/images/images/064/041/533/4k/surendra-rajawat-mms-102-0040-090-bgpaint-v001.jpg?1686944805" },
      { src: "https://cdnb.artstation.com/p/assets/images/images/064/041/511/4k/surendra-rajawat-102-0030-040bglayout-w001.jpg?1686944751" },
      { src: "https://cdna.artstation.com/p/assets/images/images/064/041/514/4k/surendra-rajawat-102-0030-090-v04.jpg?1686944757" },
      { src: "https://cdnb.artstation.com/p/assets/images/images/064/041/547/4k/surendra-rajawat-mms-102-0090-090-bgpaint-v002.jpg?1686944831" },
      { src: "https://cdnb.artstation.com/p/assets/images/images/064/041/541/4k/surendra-rajawat-mms-102-0090-080-bgpaint-v002.jpg?1686944827" },
      { src: "https://cdna.artstation.com/p/assets/images/images/064/041/518/4k/surendra-rajawat-102-0090-130-bgpaint-v001-copy.jpg?1686944770" },
      { src: "https://cdnb.artstation.com/p/assets/images/images/064/041/557/4k/surendra-rajawat-mms-back-int-102-0030-100-bgpaint-v001-copy.jpg?1686944849" },
      { src: "https://cdna.artstation.com/p/assets/images/images/064/041/524/large/surendra-rajawat-mms-090-110-bgpaint-v001-copy.jpg?1686944785" },
      { src: "https://cdna.artstation.com/p/assets/images/images/064/042/262/original/surendra-rajawat-process-preview.gif?1686946228", caption: "Process Preview" }
    ]
},
{
  title: "Return to Valoran City — Star Guardian",
  category: "studio",
  meta: "Background Art — Sun Creature Studio / League of Legends",
  images: [
    { src: "https://cdnb.artstation.com/p/assets/images/images/058/929/829/4k/surendra-rajawat-asset.jpg?1675265346", caption: "Return to Valoran City" },
    { src: "https://cdna.artstation.com/p/assets/images/images/058/929/858/4k/surendra-rajawat-asset.jpg?1675265379", caption: "Piano" }
  ]
},
{
  title: "Trainline: I Came By Train (Craig David)",
  category: "studio",
  meta: "Design — Golden Wolf / Trainline",
  images: [
    { src: "https://cdnb.artstation.com/p/assets/images/images/058/915/641/large/surendra-rajawat-asset.jpg?1675241816", caption: "I Came By Train" },
    { src: "https://cdnb.artstation.com/p/assets/images/images/058/915/647/4k/surendra-rajawat-asset.jpg?1675241827", caption: "Better Days" },
    { src: "https://cdnb.artstation.com/p/assets/images/images/058/915/659/4k/surendra-rajawat-asset.jpg?1675241844", caption: "I Came By Train" },
    { src: "https://cdnb.artstation.com/p/assets/images/images/058/915/651/4k/surendra-rajawat-asset.jpg?1675241837", caption: "I Came By Train" },
    { src: "https://cdna.artstation.com/p/assets/images/images/058/915/666/4k/surendra-rajawat-asset.jpg?1675241858", caption: "I Came By Train" },
    { src: "https://cdna.artstation.com/p/assets/images/images/058/915/666/4k/surendra-rajawat-asset.jpg?1675241858", caption: "I Came By Train" },
    { src: "https://cdna.artstation.com/p/assets/images/images/058/829/062/large/surendra-rajawat-tl-cbt-01-0190-v01.jpg?1675077581", caption: "I Came By Train" },
    { src: "https://cdna.artstation.com/p/assets/images/images/058/830/768/large/surendra-rajawat-tl-cbt-02-0070.jpg?1675080501", caption: "I Came By Train" },
    { src: "https://cdnb.artstation.com/p/assets/images/images/058/829/055/large/surendra-rajawat-tl-cbt-01-0040-1.jpg?1675077573", caption: "I Came By Train" },
    { src: "https://cdna.artstation.com/p/assets/images/images/058/830/768/large/surendra-rajawat-tl-cbt-02-0070.jpg?1675080501", caption: "I Came By Train" }
  ]
},
{
  title: "League of Legends: Phoenixmancers Backgrounds",
  category: "studio",
  meta: "Background Painting — WIZZ @ Quad Group / Riot Games",
  video: "https://www.youtube-nocookie.com/embed/ES5ah68iyxA?rel=0",
  images: [
    { src: "https://cdnb.artstation.com/p/assets/images/images/042/761/197/4k/surendra-rajawat-sh038-paint.jpg?1635361970", caption: "Phoenixmancers" },
    { src: "https://cdna.artstation.com/p/assets/images/images/042/761/714/4k/surendra-rajawat-sh053-paint-15-07-v01.jpg?1635362653", caption: "Phoenixmancers" },
    { src: "https://cdnb.artstation.com/p/assets/images/images/042/761/723/4k/surendra-rajawat-sh041-paint-300721.jpg?1635362667", caption: "Phoenixmancers" },
    { src: "https://cdnb.artstation.com/p/assets/images/images/042/761/229/4k/surendra-rajawat-sh039-paint-270721.jpg?1635362035", caption: "Phoenixmancers" },
    { src: "https://cdna.artstation.com/p/assets/images/images/042/761/706/4k/surendra-rajawat-sh059-paint-020821.jpg?1635362643", caption: "Phoenixmancers" },
    { src: "https://cdnb.artstation.com/p/assets/images/images/042/761/163/4k/surendra-rajawat-sh011-paint-160721.jpg?1635361903", caption: "Phoenixmancers" },
    { src: "https://cdna.artstation.com/p/assets/images/images/042/761/776/original/surendra-rajawat-process-gif.gif?1635362761", caption: "Process" }
  ]
},
   {
    title: "Background art- FACEBOOK - Good Ideas Deserve to be Found",
    category: "studio",
    meta: "Environment — Riff Raff Films / Some background that I did for Facebook commercial video directed by David Wilson",
    video: "https://player.vimeo.com/video/519042929?h=33147b0dfd&dnt=1",
    images: [
      { src: "https://cdna.artstation.com/p/assets/images/images/036/768/786/4k/surendra-rajawat-japanese-market-22-12.jpg?1618560089", caption: "Japanese Market" },
      { src: "https://cdnb.artstation.com/p/assets/images/images/036/769/001/4k/surendra-rajawat-japanese-market-shot02.jpg?1618560073", caption: "Market Side shot panoramic" },
      { src: "https://cdna.artstation.com/p/assets/images/images/036/769/294/large/surendra-rajawat-japanese-market-cropped.jpg?1618561003", caption: "manhole" }
    ]
  },
     {
    title: "Background art- “Start Counting” Chobani Probiotic",
    category: "studio",
    meta: "Environment — The Line Animation Studio / Director by Bjørn-Erik Aschim / Art Direction by Pedro Antoine / concept art by: Chiara Benedetti",
    video: "https://www.youtube-nocookie.com/embed/xWMJU-WFTxQ?rel=0",
    images: [
      { src: "https://cdnb.artstation.com/p/assets/images/images/042/792/721/large/surendra-rajawat-d6fe13f2-dde4-40a8-9e48-4596668edc75.jpg?1635441198", caption: "Kitchen Modern " },
      { src: "https://cdnb.artstation.com/p/assets/images/images/042/792/717/large/surendra-rajawat-adbb92cb-b9d7-487c-8407-8dc7a4f5f63c.jpg?1635439971", caption: "Kitchen old" }
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
  video: "https://player.vimeo.com/video/394921700?h=cfb9e93a27&dnt=1",
  images: [
    { src: "https://cdnb.artstation.com/p/assets/images/images/024/718/955/4k/surendra-rajawat-w-london-shot1.jpg?1583316288", caption: "London" },
    { src: "https://cdna.artstation.com/p/assets/images/images/024/718/162/4k/surendra-rajawat-wagamama-london-pitch.jpg?1583313830", caption: "London" },
    { src: "https://cdna.artstation.com/p/assets/images/images/024/718/960/4k/surendra-rajawat-wagamama-scene-16.jpg?1583316293", caption: "Restaurant" },
    { src: "https://cdna.artstation.com/p/assets/images/images/024/718/958/4k/surendra-rajawat-wagamama-scene-14.jpg?1583316290", caption: "Bus Stop" },
    { src: "https://cdnb.artstation.com/p/assets/images/images/024/718/165/4k/surendra-rajawat-wagamama-rest-pitch.jpg?1583313833", caption: "Restaurant Int" },
    { src: "https://cdna.artstation.com/p/assets/images/images/024/719/298/4k/surendra-rajawat-wagamama-sc17.jpg?1583317316", caption: "Restaurant Int" },
    { src: "https://cdna.artstation.com/p/assets/images/images/024/719/294/4k/surendra-rajawat-wagamama-sc25.jpg?1583317312", caption: "Bowl" },
    { src: "https://cdna.artstation.com/p/assets/images/images/024/719/304/4k/surendra-rajawat-wagamama-sc21.jpg?1583317323", caption: "Kitchen" },
    { src: "https://cdnb.artstation.com/p/assets/images/images/024/719/293/4k/surendra-rajawat-wagamama-sc-08.jpg?1583317312", caption: "Kitchen" },
    { src: "https://cdnb.artstation.com/p/assets/images/images/024/719/299/4k/surendra-rajawat-wagamama-sc38.jpg?1583317317", caption: "Restaurant Int" },
    { src: "https://cdna.artstation.com/p/assets/images/images/024/719/296/4k/surendra-rajawat-wagamama-sc27.jpg?1583317314", caption: "Restaurant Int" }
  ]
},
  {
    title: "Ghibli Background Study",
    category: "personal",
    meta: "Background painting — Procreate app",
    images: [
      { src: "https://cdnb.artstation.com/p/assets/images/images/033/706/649/4k/surendra-rajawat-spirited-away.jpg?1610371925", caption: "Spirited Away" },
      { src: "https://cdna.artstation.com/p/assets/images/images/033/565/968/4k/surendra-rajawat-ghibli-bg01.jpg?1609961266", caption: "My Neighbour totoro" },
      { src: "https://cdna.artstation.com/p/assets/images/images/037/152/718/4k/surendra-rajawat-wmwt-2.jpg?1619627479", caption: "When Marnie was there" },
      { src: "https://cdnb.artstation.com/p/assets/images/images/033/706/753/4k/surendra-rajawat-from-up-on-poppy-hills-01.jpg?1610372097", caption: "From up on Poppy Hills" },
      { src: "https://cdna.artstation.com/p/assets/images/images/033/706/760/4k/surendra-rajawat-from-up-on-poppy-hills-02.jpg?1610372112", caption: "From up on Poppy Hills" },
      { src: "https://cdnb.artstation.com/p/assets/images/images/033/706/701/4k/surendra-rajawat-fanart-princess-mononoke-web.jpg?1610371980", caption: "Princess Mononoke" },
      { src: "https://cdna.artstation.com/p/assets/images/images/033/706/760/4k/surendra-rajawat-from-up-on-poppy-hills-02.jpg?1610372112", caption: "From up on Poppy Hills" },
      { src: "https://cdnb.artstation.com/p/assets/images/images/033/706/721/4k/surendra-rajawat-ghibli-sketch.jpg?1610372002", caption: "Arreitty" },
      { src: "https://cdnb.artstation.com/p/assets/images/images/033/565/955/large/surendra-rajawat-porco-rosso-01.jpg?1609960787", caption: "Porco Rosso" },
      { src: "https://cdna.artstation.com/p/assets/images/images/033/565/964/large/surendra-rajawat-porco-rosso-02.jpg?1609960807", caption: "Porco Rosso" },
      { src: "https://cdna.artstation.com/p/assets/images/images/033/565/932/4k/surendra-rajawat-whisper-of-the-heart-web.jpg?1609960743", caption: "Whisper of the Heart" },
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