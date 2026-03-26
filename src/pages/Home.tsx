import { useState } from "react";

type Lang = "zh" | "en";

const copy = {
  zh: {
    langButton: "EN",
    heroTitle: "香港遗迹与复兴",
    heroSubtitle: "在飞速发展的城市中，见证消亡，并在当下重新连接。",
    archiveTitle: "已抹去的记忆",
    archiveTitleEn: "The Lost Archives",
    archiveHint: "悬停查看消失原因",
    gachaTitle: "把握当下：抽取你的文化盲盒",
    gachaButton: "点击抽签",
    
    gachaRolling: "抽签进行中",
    gachaReady: "下一个目的地",
    mapButton: "查看地图",
    rationaleSectionTitle: "策展理念",
    rationaleLeftTitle: "为什么需要数字档案？",
    rationaleLeftText:
      "城市现代化和气候变化对物质文化遗产构成了威胁。通过建立数字视觉档案，我们不仅是在悼念物理空间的消亡，也是在探讨‘数字孪生 (Digital Twins)’赋予文化记忆的韧性。",
    rationaleRightTitle: "数字与现实的边界",
    rationaleRightText:
      "数字技术可以留存视觉，但无法复刻香港街头真实的声音、气味与温度。本网站希望通过‘线上查阅过去，线下实地抽签’的双重体验，弥补数字媒介的局限性。",
    footerLead: "本项目响应联合国 SDG 11: 可持续城市和社区 | 视觉文化期末项目",
  },
  en: {
    langButton: "中文",
    heroTitle: "Relics & Resurgence",
    heroSubtitle: "Witness the fading past, and reconnect with the present in a rapidly evolving city.",
    archiveTitle: "The Lost Archives",
    archiveTitleEn: "Relics of a Vanished City",
    archiveHint: "Hover to reveal why they disappeared",
    gachaTitle: "Seize the Present: Draw Your Heritage Blind Box",
    gachaButton: "Click to Draw",
    gachaRolling: "Drawing in progress",
    gachaReady: "Your next cultural stop",
    mapButton: "View Map",
    rationaleSectionTitle: "Curatorial Rationale",
    rationaleLeftTitle: "Why Digital Archives?",
    rationaleLeftText:
      "Urban modernization and climate change threaten material cultural heritage. By building digital visual archives, we not only mourn the loss of physical spaces but also explore the resilience that 'Digital Twins' bring to cultural memory.",
    rationaleRightTitle: "Boundaries of Digital & Reality",
    rationaleRightText:
      "Digital technology preserves visuals but cannot replicate the authentic sounds, smells, and temperatures of Hong Kong's streets. This site aims to bridge this gap through a dual experience: reviewing the past online and physically exploring the present via the gacha system.",
    footerLead: "In response to UN SDG 11: Sustainable Cities and Communities | Visual Culture Final Project",
  },
} as const;

const lostArchives = [
  {
    zhName: "九龙寨城",
    enName: "Kowloon Walled City",
    zhReason: "1993年拆除，城市重建",
    enReason: "Demolished in 1993, Urban Redevelopment",
    image: "/images/lost-archives/kowloon-walled-city.jpg",
  },
  {
    zhName: "皇后码头",
    enName: "Queen's Pier",
    zhReason: "2007年拆除，填海工程",
    enReason: "Demolished in 2007, Land Reclamation",
    image: "/images/lost-archives/queens-pier.jpg",
  },
  {
    zhName: "启德机场",
    enName: "Kai Tak Airport",
    zhReason: "1998年停用，城市规划",
    enReason: "Closed in 1998, Urban Planning",
    image: "/images/lost-archives/kai-tak-airport.jpg",
  },
  {
    zhName: "囍帖街",
    enName: "Lee Tung Street",
    zhReason: "2007年拆除，市区重建",
    enReason: "Demolished in 2007, Urban Renewal",
    image: "/images/lost-archives/lee-tung-street.jpg",
  },
];

const heritageGachaSpots = [
  {
    nameZh: "大馆",
    nameEn: "Tai Kwun",
    reasonZh: "体验建筑保育与当代艺术的完美缝合。",
    reasonEn: "Experience the perfect blend of heritage conservation and contemporary art.",
    image: "/images/gacha/tai-kwun.jpg",
  },
  {
    nameZh: "湾仔蓝屋",
    nameEn: "Blue House",
    reasonZh: "岭南色彩展现着唐楼独有的社区韧性。",
    reasonEn: "Lingnan colors revealing the unique community resilience of Tong Lau.",
    image: "/images/gacha/blue-house.jpg",
  },
  {
    nameZh: "雷生春",
    nameEn: "Lui Seng Chun",
    reasonZh: "在轰鸣马路边散发着中药清香的战前唐楼。",
    reasonEn: "A pre-war Tong Lau exuding herbal aroma by the roaring streets.",
    image: "/images/gacha/lui-seng-chun.jpg",
  },
  {
    nameZh: "M+ 视觉文化博物馆",
    nameEn: "M+ Museum",
    reasonZh: "亚洲首个全球性当代视觉文化博物馆。",
    reasonEn: "Asia’s first global museum of contemporary visual culture.",
    image: "/images/gacha/m-plus-museum.jpg",
  },
  {
    nameZh: "天星小轮",
    nameEn: "Star Ferry",
    reasonZh: "穿梭维港的百年绿色铁皮船，流动的视觉遗产。",
    reasonEn: "Century-old green vessels crossing Victoria Harbour, a floating visual heritage.",
    image: "/images/gacha/star-ferry.jpg",
  },
  {
    nameZh: "大澳渔村",
    nameEn: "Tai O Fishing Village",
    reasonZh: "水上棚屋与咸香海风，保存着渔港生活记忆。",
    reasonEn: "Stilt houses and salty sea breeze preserve memories of a historic fishing harbor.",
    image: "/images/gacha/tai-o.jpg",
  },
  {
    nameZh: "文武庙",
    nameEn: "Man Mo Temple",
    reasonZh: "香火缭绕的静谧空间，凝住上环旧城的文化肌理。",
    reasonEn: "A calm incense-filled sanctuary capturing the cultural texture of old Sheung Wan.",
    image: "/images/gacha/man-mo-temple.jpg",
  },
  {
    nameZh: "PMQ 元创方",
    nameEn: "PMQ",
    reasonZh: "由历史建筑转化为创意聚落，见证设计活化。",
    reasonEn: "A historic complex transformed into a creative hub that showcases adaptive reuse.",
    image: "/images/gacha/pmq.jpg",
  },
  {
    nameZh: "香港艺术馆",
    nameEn: "Hong Kong Museum of Art",
    reasonZh: "在维港边重读传统与现代艺术的城市叙事。",
    reasonEn: "Revisit the city’s dialogue between tradition and modern art by the harbour.",
    image: "/images/gacha/hk-museum-of-art.jpg",
  },
  {
    nameZh: "油麻地戏院",
    nameEn: "Yau Ma Tei Theatre",
    reasonZh: "昔日戏院重启粤剧舞台，延续本土表演脉络。",
    reasonEn: "A revived historic theatre keeps Cantonese opera alive in the urban core.",
    image: "/images/gacha/yau-ma-tei-theatre.jpg",
  },
  {
    nameZh: "前深水埗美荷楼",
    nameEn: "Mei Ho House",
    reasonZh: "公共屋邨记忆馆让战后民生历史触手可及。",
    reasonEn: "A public housing heritage museum makes post-war grassroots history tangible.",
    image: "/images/gacha/mei-ho-house.jpg",
  },
  {
    nameZh: "南丰纱厂",
    nameEn: "The Mills",
    reasonZh: "纺织工业遗迹化身创新与文化共创空间。",
    reasonEn: "A former textile mill reimagined as a platform for culture and innovation.",
    image: "/images/gacha/the-mills.jpg",
  },
  {
    nameZh: "中环街市",
    nameEn: "Central Market",
    reasonZh: "城市动脉中的现代主义地标，以新用途再次开放。",
    reasonEn: "A modernist landmark in the city’s core reopened with renewed public life.",
    image: "/images/gacha/central-market.jpg",
  },
  {
    nameZh: "西九文化区",
    nameEn: "West Kowloon Cultural District",
    reasonZh: "海旁文化地景汇聚剧场、展览与公共艺术。",
    reasonEn: "A waterfront cultural landscape uniting theatres, exhibitions, and public art.",
    image: "/images/gacha/west-kowloon-cultural-district.jpg",
  },
  {
    nameZh: "香港故宫文化博物馆",
    nameEn: "Hong Kong Palace Museum",
    reasonZh: "古典珍藏与当代策展语言在此相遇。",
    reasonEn: "Imperial collections meet contemporary curatorial storytelling here.",
    image: "/images/gacha/hk-palace-museum.jpg",
  },
  {
    nameZh: "香港电影资料馆",
    nameEn: "Hong Kong Film Archive",
    reasonZh: "胶片与影像档案保存着城市银幕记忆。",
    reasonEn: "Film reels and visual archives preserve the city’s cinematic memory.",
    image: "/images/gacha/hk-film-archive.jpg",
  },
  {
    nameZh: "茶具文物馆",
    nameEn: "Flagstaff House Museum of Tea Ware",
    reasonZh: "在殖民时期建筑中细味茶文化的工艺与礼法。",
    reasonEn: "Savor tea culture, craftsmanship, and ritual in a colonial-era building.",
    image: "/images/gacha/museum-of-tea-ware.jpg",
  },
  {
    nameZh: "志莲净苑",
    nameEn: "Chi Lin Nunnery",
    reasonZh: "唐代木构风格与都市高楼并置，形成静与动的对照。",
    reasonEn: "Tang-style timber architecture contrasts beautifully with the surrounding skyline.",
    image: "/images/gacha/chi-lin-nunnery.jpg",
  },
  {
    nameZh: "南莲园池",
    nameEn: "Nan Lian Garden",
    reasonZh: "园林尺度里的慢节奏，为城市视觉带来呼吸感。",
    reasonEn: "Its garden-scale tranquility offers visual breathing space in fast-paced Hong Kong.",
    image: "/images/gacha/nan-lian-garden.jpg",
  },
  {
    nameZh: "前北九龙裁判法院",
    nameEn: "Savannah College of Art and Design (Former North Kowloon Magistracy)",
    reasonZh: "法庭建筑转化为创意教育空间，重写旧建筑命运。",
    reasonEn: "A former courthouse repurposed into a creative learning space with new life.",
    image: "/images/gacha/north-kowloon-magistracy.jpg",
  },
];

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const [isDrawing, setIsDrawing] = useState(false);
  const [rollingIndex, setRollingIndex] = useState(0);
  const [drawnSpot, setDrawnSpot] = useState<(typeof heritageGachaSpots)[number] | null>(null);
  const content = copy[lang];
  const currentYear = new Date().getFullYear();
  const rollingSpot = heritageGachaSpots[rollingIndex];

  const handleDraw = () => {
    if (isDrawing) {
      return;
    }

    setIsDrawing(true);
    setDrawnSpot(null);

    const total = heritageGachaSpots.length;
    const finalIndex = Math.floor(Math.random() * total);
    let nextIndex = rollingIndex;

    const intervalId = window.setInterval(() => {
      nextIndex = (nextIndex + 1) % total;
      setRollingIndex(nextIndex);
    }, 75);

    window.setTimeout(() => {
      window.clearInterval(intervalId);
      setRollingIndex(finalIndex);
      setDrawnSpot(heritageGachaSpots[finalIndex]);
      setIsDrawing(false);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-8 md:px-10 md:pt-10">
        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => setLang((prev) => (prev === "zh" ? "en" : "zh"))}
            className="rounded-full border border-zinc-700 px-4 py-1.5 text-sm tracking-wide text-zinc-300 transition hover:border-zinc-400 hover:text-white"
          >
            {content.langButton}
          </button>
        </div>

        <section className="border-b border-zinc-800 pb-16 pt-12 md:pb-24 md:pt-20">
          <p className="mb-6 text-xs uppercase tracking-[0.35em] text-zinc-500">HONG KONG DIGITAL MUSEUM</p>
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-50 md:text-7xl">
            {content.heroTitle}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-zinc-300 md:text-xl">
            {content.heroSubtitle}
          </p>
        </section>

        <section className="pt-12 md:pt-16">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-medium tracking-tight text-zinc-100 md:text-3xl">{content.archiveTitle}</h2>
              <p className="mt-2 text-sm tracking-wide text-zinc-500">{content.archiveTitleEn}</p>
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-600">{content.archiveHint}</p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {lostArchives.map((item) => (
              <article
                key={item.enName}
                className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/60"
              >
                <div className="relative aspect-[4/3] bg-zinc-800">
                  <img src={item.image} alt={lang === "zh" ? item.zhName : item.enName} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent" />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="text-lg font-medium text-zinc-100">{lang === "zh" ? item.zhName : item.enName}</h3>
                  <p className="text-sm text-zinc-400">{lang === "zh" ? item.enName : item.zhName}</p>
                </div>

                <div className="absolute inset-0 flex items-center justify-center bg-black/80 px-6 text-center opacity-0 transition duration-300 group-hover:opacity-100">
                  <p className="text-sm leading-relaxed text-zinc-200 md:text-base">
                    {lang === "zh" ? item.zhReason : item.enReason}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="pt-14 md:pt-20">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-3xl text-2xl font-medium tracking-tight text-zinc-100 md:text-3xl">{content.gachaTitle}</h2>
            <button
              type="button"
              disabled={isDrawing}
              onClick={handleDraw}
              className="rounded-full border border-zinc-600 px-5 py-2 text-sm tracking-wide text-zinc-200 transition hover:border-zinc-300 hover:text-white disabled:cursor-not-allowed disabled:border-zinc-800 disabled:text-zinc-600"
            >
              {content.gachaButton}
            </button>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
              {isDrawing ? content.gachaRolling : content.gachaReady}
            </p>
            <div className="mt-4 min-h-20 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950/80 px-4 py-5">
              <p className={`text-2xl font-semibold tracking-tight text-zinc-100 transition-all duration-150 ${isDrawing ? "blur-[0.4px]" : ""}`}>
                {lang === "zh" ? rollingSpot.nameZh : rollingSpot.nameEn}
              </p>
              <p className="mt-2 text-sm text-zinc-400">{lang === "zh" ? rollingSpot.nameEn : rollingSpot.nameZh}</p>
            </div>

            {drawnSpot && (
              <article className="mt-6 overflow-hidden rounded-xl border border-zinc-700 bg-zinc-900">
                <div className="relative h-48 w-full bg-zinc-800 md:h-56">
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-50"
                    style={{ backgroundImage: `url(${drawnSpot.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/45 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                    <h3 className="text-xl font-semibold text-zinc-100">{lang === "zh" ? drawnSpot.nameZh : drawnSpot.nameEn}</h3>
                    <p className="mt-1 text-sm text-zinc-300">{lang === "zh" ? drawnSpot.nameEn : drawnSpot.nameZh}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-5 p-5 md:flex-row md:items-center md:justify-between md:p-6">
                  <p className="max-w-3xl text-sm leading-relaxed text-zinc-300 md:text-base">
                    {lang === "zh" ? drawnSpot.reasonZh : drawnSpot.reasonEn}
                  </p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      lang === "zh" ? drawnSpot.nameZh : drawnSpot.nameEn,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-zinc-500 px-4 py-2 text-sm tracking-wide text-zinc-200 transition hover:border-zinc-300 hover:text-white"
                  >
                    {content.mapButton}
                  </a>
                </div>
              </article>
            )}
          </div>
        </section>

        <section className="pt-14 md:pt-20">
          <div className="mb-8">
            <h2 className="text-2xl font-medium tracking-tight text-zinc-100 md:text-3xl">{content.rationaleSectionTitle}</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 md:p-8">
              <h3 className="text-xl font-semibold tracking-tight text-zinc-100">{content.rationaleLeftTitle}</h3>
              <p className="mt-4 text-sm leading-relaxed text-zinc-300 md:text-base">{content.rationaleLeftText}</p>
            </article>
            <article className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 md:p-8">
              <h3 className="text-xl font-semibold tracking-tight text-zinc-100">{content.rationaleRightTitle}</h3>
              <p className="mt-4 text-sm leading-relaxed text-zinc-300 md:text-base">{content.rationaleRightText}</p>
            </article>
          </div>
        </section>

        <footer className="border-t border-zinc-800 pb-8 pt-14 md:pt-16">
          <p className="text-center text-xs tracking-wide text-zinc-500 md:text-sm">
            {content.footerLead} © {currentYear}
          </p>
        </footer>
      </div>
    </main>
  );
}
