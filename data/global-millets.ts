import type { GlobalMilletRegion } from '@/lib/types';

export const globalMilletRegions: GlobalMilletRegion[] = [
  // ─── 1. ETHIOPIA & HORN OF AFRICA ─────────────────────────────────
  {
    slug: 'ethiopia-horn-of-africa',
    region: 'Ethiopia & the Horn of Africa',
    continent: 'Africa',
    tagline: 'Birthplace of teff — the world\'s smallest and most resilient grain',
    description:
      'The Horn of Africa is the evolutionary cradle of teff (Eragrostis tef), a grain so tiny that roughly 3,000 seeds weigh just one gram. For over three millennia, Ethiopian highland farmers have cultivated teff across altitudes ranging from 1,700 to 2,400 metres, producing the spongy, tangy flatbread injera that anchors every Ethiopian meal. Finger millet (dagusa) thrives in the region\'s semi-arid lowlands and remains a critical food-security crop for pastoralist communities in Eritrea, Somalia, and Sudan. Ethiopia\'s 2006 biodiversity pact restricted teff seed exports to protect its genetic heritage — a ban only partially lifted in 2015 to allow limited commercial cultivation abroad. Today, the Horn of Africa produces over 90% of the world\'s teff, and injera remains a cultural cornerstone symbolising community, as diners eat from a shared platter.',
    countries: ['Ethiopia', 'Eritrea', 'Somalia', 'Sudan'],
    primaryMillets: ['Teff (Eragrostis tef)', 'Finger Millet (Eleusine coracana)'],
    iconicFoods: [
      {
        name: 'Injera',
        country: 'Ethiopia',
        millet: 'Teff',
        description:
          'A large, spongy, sourdough-risen flatbread with a distinctive tangy flavour produced by wild-yeast fermentation over 2-3 days. It serves as both plate and utensil — diners tear pieces to scoop up stews (wot). Pure teff injera is prized, though blends with wheat or sorghum are common in rural areas.',
      },
      {
        name: 'Tella',
        country: 'Ethiopia',
        millet: 'Teff / Finger Millet',
        description:
          'A traditional home-brewed beer made from fermented teff or finger millet, flavoured with gesho (Rhamnus prinoides) leaves and stems. Tella is central to social gatherings and religious festivals, with brewing knowledge passed down through generations of Ethiopian women.',
      },
      {
        name: 'Genfo',
        country: 'Ethiopia',
        millet: 'Teff / Finger Millet',
        description:
          'A thick, dough-like porridge traditionally served to new mothers for its high iron and calcium content. The porridge is moulded into a volcano shape with a well of spiced butter (niter kibbeh) and berbere in the centre.',
      },
      {
        name: 'Beso',
        country: 'Ethiopia',
        millet: 'Teff',
        description:
          'Roasted teff flour mixed with spiced butter, a high-energy travel food historically carried by Ethiopian warriors and long-distance traders. It remains a popular portable snack in highland regions.',
      },
      {
        name: 'Asida',
        country: 'Sudan',
        millet: 'Finger Millet',
        description:
          'A smooth, dense porridge made from finger millet flour, cooked to a stiff consistency and served with stews or milk. It is a staple across Sudanese households, particularly in the western Darfur and Kordofan regions.',
      },
    ],
    historicalHighlights: [
      {
        title: 'Earliest teff cultivation',
        period: 'c. 1000-800 BCE',
        description:
          'Archaeological evidence from the Aksumite region suggests teff domestication began between 4,000 and 3,000 years ago in the Ethiopian highlands. Teff seeds have been identified at pre-Aksumite sites, making it one of the oldest cultivated grains unique to a single region.',
      },
      {
        title: 'Aksumite Empire grain trade',
        period: 'c. 100-940 CE',
        description:
          'The Aksumite Empire, one of the great civilisations of the ancient world, relied heavily on teff and finger millet agriculture. Surplus grain production supported trade networks stretching to Rome, Persia, and India through the Red Sea port of Adulis.',
      },
      {
        title: 'Ethiopian biodiversity pact',
        period: '2006',
        description:
          'Facing concerns that foreign companies would patent teff varieties, the Ethiopian government enacted a ban on exporting teff seeds and grain for cultivation. This was one of the first sovereign biodiversity protections for a staple food crop.',
      },
      {
        title: 'Partial lifting of the teff export ban',
        period: '2015',
        description:
          'Ethiopia began allowing limited teff exports after a Dutch company\'s controversial 2005 patent (later revoked in 2019) on teff-based products highlighted the tensions between biodiversity protection and global food commerce.',
      },
    ],
    culturalSignificance:
      'In Ethiopian culture, injera is far more than sustenance — the act of "gursha" (feeding another person by hand from the shared injera platter) is a profound gesture of love, respect, and friendship. Teff farming follows ancient seasonal rhythms tied to the kiremt rains, and the harvest festival of Enkutatash (Ethiopian New Year) celebrates agricultural abundance. Finger millet beer (tella) is integral to religious celebrations in the Ethiopian Orthodox calendar, particularly during the multi-day feasts of Timkat (Epiphany) and Meskel (Finding of the True Cross). The proverb "kolo yalew, belo yalew" — "who has grain, has a voice" — captures the deep link between millet cultivation and social standing.',
    modernStatus:
      'Ethiopia produces approximately 5 million tonnes of teff annually, making it the country\'s most important cereal crop by area under cultivation (about 3 million hectares). Teff has gained global superfood status since the 2010s, prized for its complete amino acid profile, high iron content, and naturally gluten-free status. However, this international demand has created domestic price pressures — teff prices have roughly tripled since 2005, making pure teff injera increasingly unaffordable for low-income Ethiopians. The Ethiopian Institute of Agricultural Research (EIAR) continues to develop high-yield teff varieties, while finger millet remains vital for food security in Eritrea\'s Gash-Barka region and Sudan\'s rain-fed farming zones.',
    keyFact:
      'Teff contains 2-3 times more iron than wheat or rice and has a complete amino acid profile, yet Ethiopia\'s single-origin biodiversity means just one country produces over 90% of the global supply.',
    imageFile: '/images/sections/global-ethiopia-horn-of-africa.webp',
  },

  // ─── 2. WEST AFRICA ───────────────────────────────────────────────
  {
    slug: 'west-africa',
    region: 'West Africa',
    continent: 'Africa',
    tagline: 'Where fonio is the "seed of the universe" and pearl millet feeds the Sahel',
    description:
      'West Africa is one of the world\'s great millet civilisations, where pearl millet (Pennisetum glaucum) and fonio (Digitaria exilis) have sustained communities for millennia across the Sahel\'s semi-arid expanses. Pearl millet — domesticated in what is now Mali and Niger around 4,500 years ago — remains the single most important cereal for over 90 million people in the region, thriving in poor sandy soils with as little as 200 mm of annual rainfall. Fonio, sometimes called the "lazy farmer\'s crop" because it matures in just 6-8 weeks on nearly barren soil, holds a far deeper cultural position: the Dogon people of Mali regard it as the primordial seed from which the universe was created. From the fermented pearl millet drinks of Nigeria\'s Hausa communities to the thiéré couscous of Senegalese kitchens, millets are woven into every layer of West African food culture.',
    countries: ['Nigeria', 'Niger', 'Mali', 'Burkina Faso', 'Senegal', 'Guinea'],
    primaryMillets: ['Pearl Millet (Pennisetum glaucum)', 'Fonio (Digitaria exilis)', 'Finger Millet (Eleusine coracana)'],
    iconicFoods: [
      {
        name: 'Fura da Nono',
        country: 'Nigeria',
        millet: 'Pearl Millet',
        description:
          'Spiced pearl millet dumplings (fura) crumbled into fermented cow\'s milk (nono). A beloved street food across northern Nigeria and Niger, it is especially popular among Hausa and Fulani communities. The millet is pounded with ginger, cloves, and pepper before being shaped into balls and briefly boiled.',
      },
      {
        name: 'Tuwo Shinkafa / Tuwo Masara',
        country: 'Nigeria',
        millet: 'Pearl Millet',
        description:
          'A thick, swallowable millet pudding served as the starchy base alongside rich soups like miyan kuka (baobab leaf soup) or miyan taushe (pumpkin soup). Tuwo is the Hausa equivalent of fufu, and pearl millet tuwo is considered the most traditional and nutritious version.',
      },
      {
        name: 'Ogi / Kunu',
        country: 'Nigeria',
        millet: 'Pearl Millet / Fonio',
        description:
          'Ogi is a fermented millet porridge, while kunu is its thinner, spiced drink form flavoured with ginger, cloves, and sweet potato. Both are breakfast staples and weaning foods across Nigeria. Kunu zaki (sweet kunu) is a popular Ramadan iftar drink in the Muslim north.',
      },
      {
        name: 'Thiéré (Millet Couscous)',
        country: 'Senegal',
        millet: 'Fonio / Pearl Millet',
        description:
          'Hand-rolled millet couscous steamed and served with lakh (sweetened fermented milk) or savoury peanut and vegetable stews. Thiéré is the traditional Senegalese grain dish predating the now-dominant rice-based thiéboudienne, and remains central to Wolof and Serer ceremonial meals.',
      },
      {
        name: 'Fonio Jollof',
        country: 'Mali / Guinea',
        millet: 'Fonio',
        description:
          'A West African adaptation using fonio in place of rice for the iconic jollof preparation. Fonio\'s delicate, nutty flavour absorbs the tomato-onion-pepper base beautifully. Chef Pierre Thiam has championed fonio jollof internationally, helping revive interest in this ancient grain.',
      },
    ],
    historicalHighlights: [
      {
        title: 'Pearl millet domestication in the Sahel',
        period: 'c. 2500 BCE',
        description:
          'Archaeological sites in the Tilemsi Valley of present-day Mali and the Tichitt tradition of Mauritania provide evidence of pearl millet domestication dating to roughly 4,500 years ago, making the Sahel one of the world\'s independent centres of crop origin.',
      },
      {
        title: 'Dogon cosmology and fonio',
        period: 'Pre-colonial era',
        description:
          'In Dogon mythology, documented extensively by ethnographers Marcel Griaule and Germaine Dieterlen in the 1940s-50s, fonio (po tolo) is the "seed of the universe" — the smallest grain representing the fundamental atom of creation. The Dogon word "po" refers both to fonio and to the Digitaria star (Sirius B), reflecting a cosmological link between agriculture and astronomy.',
      },
      {
        title: 'Transatlantic disruption',
        period: '16th-19th century CE',
        description:
          'The transatlantic slave trade devastated West African millet-farming communities. Ironically, pearl millet and fonio knowledge travelled with enslaved Africans to the Americas, influencing grain cultivation in the Caribbean and American South, though these crops never became dominant there.',
      },
      {
        title: 'Fonio revival movement',
        period: '2000s-present',
        description:
          'Beginning with advocacy by Senegalese-American chef Pierre Thiam and supported by organisations like the CIRAD and ICRISAT, a concerted effort to revive fonio as a commercial crop has brought it to global markets. Fonio is now exported to Europe and North America as a gluten-free superfood.',
      },
    ],
    culturalSignificance:
      'In West Africa, millets are inseparable from identity and ritual. Among the Dogon of Mali, fonio is considered too sacred to be traded commercially in traditional markets — it is the grain of ceremonies, divination, and offerings to the ancestors. Pearl millet harvest festivals, such as the Bianou festival in Agadez, Niger, blend Islamic and pre-Islamic traditions with communal feasting on millet dishes. In Hausa culture, the ability to prepare perfect fura (millet dumplings) is a mark of a skilled cook, and the drink fura da nono is offered to guests as a gesture of hospitality. Among the Serer people of Senegal, millet cultivation follows a sacred calendar, and the pangool (ancestral spirits) are invoked to bless the fields. The proverb "yaa foni, yaa foni" (Bambara: "fonio, fonio — it feeds where nothing else will") captures the grain\'s role as a last-resort saviour in drought years.',
    modernStatus:
      'West Africa produces approximately 15 million tonnes of pearl millet annually, with Nigeria, Niger, and Mali as the top three producers. Despite this volume, the region faces a "millet paradox": urbanisation and changing food preferences are shifting consumption toward imported rice and wheat, even as millet remains nutritionally superior and ecologically adapted to the Sahel\'s increasingly erratic rainfall. Fonio production has seen a remarkable renaissance — global fonio exports have grown roughly tenfold since 2010, driven by demand from health-conscious consumers in Europe and North America. Organisations like the African Orphan Crops Consortium are sequencing fonio\'s genome to develop improved varieties, while ICRISAT\'s biofortified pearl millet varieties are addressing micronutrient deficiencies across the region.',
    keyFact:
      'Fonio matures in as little as 6-8 weeks and can grow in sandy, nutrient-poor soils with minimal water — making it one of the fastest and most climate-resilient cereal crops on Earth.',
    imageFile: '/images/sections/global-west-africa.webp',
  },

  // ─── 3. CHINA ─────────────────────────────────────────────────────
  {
    slug: 'china',
    region: 'China',
    continent: 'Asia',
    tagline: 'Where millet agriculture began over 10,000 years ago',
    description:
      'China is the birthplace of millet agriculture. The Cishan archaeological site in Hebei province has yielded evidence of foxtail millet (Setaria italica, known as su or 谷子) cultivation dating back approximately 10,300 years, making it the world\'s oldest confirmed millet farming. Proso millet (Panicum miliaceum, known as shu or 黍) was domesticated concurrently in the loess plateau region of northern China. Together, these two millets formed the foundation of Chinese civilisation — sustaining the Yellow River cultures that would eventually give rise to the Shang and Zhou dynasties. The mythological figure Hou Ji (Lord Millet), the legendary ancestor of the Zhou dynasty, reflects the grain\'s central role in Chinese identity. For thousands of years, "she ji" (altars of soil and grain) symbolised the state itself: to lose one\'s millet fields was to lose one\'s nation.',
    countries: ['China'],
    primaryMillets: ['Foxtail Millet (Setaria italica / 谷子)', 'Proso Millet (Panicum miliaceum / 黍)'],
    iconicFoods: [
      {
        name: 'Xiaomi Zhou (小米粥)',
        country: 'China',
        millet: 'Foxtail Millet',
        description:
          'A silky golden porridge that has been the quintessential breakfast and convalescence food in northern China for millennia. Slow-simmered until the starches create a creamy consistency, it is believed in Traditional Chinese Medicine to tonify the spleen and stomach qi. Postpartum women traditionally consume xiaomi zhou with brown sugar and eggs for recovery.',
      },
      {
        name: 'Lajia Noodles',
        country: 'China',
        millet: 'Foxtail Millet',
        description:
          'In 2005, archaeologists at the Lajia site in Qinghai province discovered a 4,000-year-old bowl of noodles made from foxtail and broomcorn millet — the world\'s oldest known noodles. Sealed under an overturned clay bowl by an ancient earthquake and flood, they provided definitive evidence that noodle-making originated in China, not the Mediterranean.',
      },
      {
        name: 'Millet Mantou (黄馍馍)',
        country: 'China',
        millet: 'Foxtail Millet / Proso Millet',
        description:
          'Steamed buns made from millet flour, golden-yellow in colour, traditionally eaten across Shaanxi, Shanxi, and Inner Mongolia. These dense, slightly sweet buns were the everyday bread of northern China before wheat flour became dominant. They gained renewed fame through the 2012 documentary "A Bite of China."',
      },
      {
        name: 'Millet Wine (黄酒)',
        country: 'China',
        millet: 'Proso Millet',
        description:
          'A traditional fermented alcoholic beverage from Shanxi and Shaanxi provinces, brewed from proso millet using qu (a fermentation starter containing moulds, yeasts, and bacteria). Millet wine predates rice wine and was the primary alcoholic drink of early Chinese civilisation, mentioned in Shang dynasty oracle bone inscriptions.',
      },
      {
        name: 'You Mian (莜面)',
        country: 'China',
        millet: 'Foxtail Millet (variant)',
        description:
          'Rolled millet dough shapes (resembling small tubes or fish) from Shanxi and Inner Mongolia, steamed and served with vinegar-garlic dipping sauce or lamb broth. You mian represents the sophisticated noodle and dumpling techniques that northern Chinese cooks developed specifically for millet flour.',
      },
    ],
    historicalHighlights: [
      {
        title: 'Cishan: world\'s oldest millet agriculture',
        period: 'c. 8300 BCE',
        description:
          'Phytolith analysis at the Cishan site in Hebei province, published in the Proceedings of the National Academy of Sciences (2009), confirmed foxtail millet cultivation dating to approximately 10,300 years ago. Storage pits at the site contained an estimated 50 tonnes of millet, indicating large-scale, organised farming — the earliest anywhere in the world.',
      },
      {
        title: 'Hou Ji (Lord Millet) mythology',
        period: 'c. 1046-771 BCE (Western Zhou)',
        description:
          'The Shijing (Book of Songs), China\'s oldest poetry collection, recounts the legend of Hou Ji, the mythological ancestor of the Zhou dynasty who taught humanity to cultivate millet. His story — from miraculous birth to the invention of agriculture — reflects how deeply millet farming was embedded in Chinese origin myths.',
      },
      {
        title: '4,000-year-old noodles discovered at Lajia',
        period: 'c. 2000 BCE (discovered 2005)',
        description:
          'A sealed earthenware bowl at the Lajia archaeological site in Qinghai preserved the world\'s oldest known noodles, made from foxtail and broomcorn millet flour. Published in Nature (2005), this discovery resolved the debate over whether noodles originated in China, the Middle East, or Italy.',
      },
      {
        title: 'She Ji altars — millet as state symbol',
        period: 'Zhou to Qing Dynasty (1046 BCE-1912 CE)',
        description:
          'For nearly 3,000 years, every Chinese dynasty maintained She Ji altars (altars of soil and grain) in the capital, where millet represented the agrarian foundation of the state. The phrase "she ji" became a metonym for "nation" itself — to protect the she ji was to protect the country.',
      },
    ],
    culturalSignificance:
      'Millet is woven into the very fabric of Chinese civilisation. The character for "grain" or "cereal" (谷) originally referred specifically to millet, and ancient Chinese texts consistently place millet first among the "five grains" (wu gu: millet, rice, wheat, sorghum, and beans). In Traditional Chinese Medicine, foxtail millet is classified as sweet and salty in flavour, cool in nature, and beneficial for the kidney and stomach meridians. The Comperta Materia Medica (Bencao Gangmu) by Li Shizhen (1596) devotes extensive sections to millet\'s medicinal properties. In folk culture, xiaomi zhou is the first food given to the sick and the last food shared before parting — a symbol of care and connection. The phrase "xiao mi jia bu liao da jiang" (millet alone cannot make a general) is a common proverb about the importance of combining resources.',
    modernStatus:
      'China remains the world\'s largest producer of foxtail millet, harvesting approximately 1.5-2 million tonnes annually, primarily in Heilongjiang, Inner Mongolia, Hebei, and Shanxi provinces. However, millet\'s share of Chinese grain production has fallen from over 50% in the early 20th century to less than 3% today, as rice and wheat have become dominant. The Chinese government\'s "coarse grain revival" (粗粮复兴) initiative, launched in the 2010s, promotes millet consumption for its health benefits — particularly for managing diabetes and cardiovascular disease. Premium Shanxi foxtail millet now commands high prices as a health food, and brands like "Qinzhou Yellow Millet" have received Geographic Indication protection. Research institutions including the Chinese Academy of Agricultural Sciences continue to develop high-yield, disease-resistant millet varieties.',
    keyFact:
      'The Cishan site in Hebei province contained an estimated 50 tonnes of stored millet in underground pits — evidence of organised, large-scale agriculture dating back 10,300 years, the oldest confirmed in the world.',
    imageFile: '/images/sections/global-china.webp',
  },

  // ─── 4. JAPAN & KOREA ─────────────────────────────────────────────
  {
    slug: 'japan-korea',
    region: 'Japan & Korea',
    continent: 'Asia',
    tagline: 'Ancient grains of longevity — from zakkokumai to japgokbap',
    description:
      'Before rice became the dominant grain of East Asia, millets sustained the peoples of Japan and Korea for thousands of years. Japan\'s Jomon period (14,000-300 BCE) saw the cultivation of foxtail millet (awa/粟), proso millet (kibi/黍), and barnyard millet (hie/稗), grains collectively known as zakkoku (miscellaneous grains). In mountainous and northern regions where rice paddies were impractical, millets remained staples well into the 20th century. Korea developed a parallel millet tradition: japgokbap (mixed five-grain rice) reflects the Korean philosophy that dietary diversity is the foundation of health. On Jeju Island, millet cultivation persisted longer than almost anywhere else in East Asia, and the island\'s unique millet varieties are now being revived as cultural heritage crops.',
    countries: ['Japan', 'South Korea'],
    primaryMillets: ['Foxtail Millet (Setaria italica / awa)', 'Proso Millet (Panicum miliaceum / kibi)', 'Barnyard Millet (Echinochloa esculenta / hie)'],
    iconicFoods: [
      {
        name: 'Zakkokumai (雑穀米)',
        country: 'Japan',
        millet: 'Mixed Millets',
        description:
          'A blend of white rice with multiple ancient grains including awa (foxtail millet), kibi (proso millet), hie (barnyard millet), and amaranth. Zakkokumai has experienced a major revival in Japan since the early 2000s as part of the "healthy Japanese diet" movement, with pre-mixed packets available in every supermarket.',
      },
      {
        name: 'Kibi Dango (黍団子)',
        country: 'Japan',
        millet: 'Proso Millet (Kibi)',
        description:
          'Sweet dumplings made from proso millet flour, famously associated with the folk hero Momotaro (Peach Boy), who used them to recruit animal companions on his quest to defeat oni (demons). Kibi dango from Okayama prefecture, where the Momotaro legend is centred, are a beloved regional speciality and popular omiyage (souvenir gift).',
      },
      {
        name: 'Awa Okoshi (粟おこし)',
        country: 'Japan',
        millet: 'Foxtail Millet (Awa)',
        description:
          'Puffed foxtail millet crisps bound with sugar syrup, a traditional confection from Osaka dating to the Edo period. The name "okoshi" means "to rise up" and the sweets are considered good-luck gifts associated with prosperity and success.',
      },
      {
        name: 'Japgokbap (잡곡밥)',
        country: 'South Korea',
        millet: 'Mixed Millets',
        description:
          'Five-grain rice combining white rice with foxtail millet, proso millet, sorghum, black beans, and barley. Japgokbap is traditionally eaten on Daeboreum (the first full moon of the lunar new year) to ensure good health throughout the year. It is also a cornerstone of Korean Buddhist temple cuisine (sachal eumsik).',
      },
      {
        name: 'Jeju Omegitteok (오메기떡)',
        country: 'South Korea',
        millet: 'Foxtail Millet',
        description:
          'Chewy millet rice cakes unique to Jeju Island, made from glutinous millet flour, coated in red bean powder. Omegitteok is a traditional Jeju ceremonial food served at ancestral rites (jesa) and wedding celebrations. Jeju\'s volcanic soil and wind-swept terrain made millet cultivation more practical than wet-rice farming.',
      },
    ],
    historicalHighlights: [
      {
        title: 'Jomon period millet cultivation',
        period: 'c. 3500-1000 BCE',
        description:
          'Archaeological evidence from middle-to-late Jomon sites across Honshu shows that foxtail and barnyard millet were among Japan\'s earliest cultivated crops, predating rice paddy agriculture by over a millennium. These grains allowed Jomon communities to transition from pure foraging to semi-agricultural lifestyles.',
      },
      {
        title: 'Momotaro and kibi dango legend',
        period: 'Muromachi-Edo period (15th-19th century)',
        description:
          'The tale of Momotaro — the peach-born boy who defeated demons with the help of a dog, monkey, and pheasant recruited through gifts of kibi dango — became one of Japan\'s most beloved folktales. The story is linked to the ancient province of Kibi (modern Okayama), named for its proso millet production, and reflects the grain\'s historical importance.',
      },
      {
        title: 'Korean Daeboreum millet tradition',
        period: 'Goryeo-Joseon Dynasty (918-1897 CE)',
        description:
          'The custom of eating japgokbap (five-grain rice) on Daeboreum (the 15th day of the first lunar month) was codified during the Goryeo and Joseon dynasties as part of Korea\'s seasonal dietary philosophy. Sharing five-grain rice with neighbours symbolised community prosperity and mutual support.',
      },
      {
        title: 'Jeju Island millet heritage',
        period: 'Pre-modern to present',
        description:
          'Jeju Island\'s volcanic soil and typhoon-prone climate made it unsuitable for wet-rice cultivation, and millet remained the primary grain well into the 20th century. The island\'s unique millet varieties and associated food traditions — including omegitteok and millet makgeolli — are now protected as Jeju Intangible Cultural Heritage.',
      },
    ],
    culturalSignificance:
      'In Japan, millets carry a bittersweet cultural memory: they are simultaneously revered as the grains that sustained the nation for millennia and associated with rural poverty and wartime scarcity (during WWII, millet replaced rice in many households). The modern zakkokumai movement deliberately reclaims this heritage, reframing ancient grains as health foods rather than poverty foods. In Korea, the concept of "yak sik dong won" (food and medicine share the same origin) underpins the tradition of eating mixed grains — Koreans believe that consuming multiple grain types creates balance in the body. Buddhist temple cuisine (sachal eumsik), which avoids meat and emphasises whole grains, has kept millet dishes alive in Korean food culture. The Jeju haenyeo (women divers) traditionally ate millet porridge before their cold-water dives, believing it provided sustained energy and warmth.',
    modernStatus:
      'Japan\'s zakkokumai market has grown significantly since the early 2000s, driven by health trends and the government\'s "Shokuiku" (food education) programme that promotes traditional dietary patterns. Japanese millet production, however, remains small (around 5,000-8,000 tonnes annually), with most consumption relying on imports from China and India. In South Korea, the government\'s "Korean Traditional Food Globalisation" initiative includes millet dishes, and japgokbap is served in school lunch programmes as part of nutritional education. Jeju Island has established millet heritage farms and festivals, and omegitteok has gained popularity on the mainland as a speciality food. Both countries are also researching millet\'s potential for managing lifestyle diseases — Japanese studies have shown that mixed-grain rice consumption correlates with lower rates of type 2 diabetes.',
    keyFact:
      'The 4,000-year-old kibi dango tradition links proso millet to one of Japan\'s most famous folk heroes, Momotaro — and Okayama prefecture still produces the dumplings as its signature regional delicacy.',
    imageFile: '/images/sections/global-japan-korea.webp',
  },

  // ─── 5. TURKEY & CENTRAL ASIA ─────────────────────────────────────
  {
    slug: 'turkey-central-asia',
    region: 'Turkey & Central Asia',
    continent: 'Asia/Europe',
    tagline: 'From the world\'s oldest fermented millet drink to Silk Road grain trade',
    description:
      'The vast steppe and crossroads region spanning Turkey and Central Asia holds a singular place in millet history: it is the homeland of boza, a thick, fermented millet drink with origins stretching back roughly 9,000 years to the earliest Anatolian farming communities. Millet cultivation in Central Asia is nearly as ancient — the Jeitun culture of southern Turkmenistan grew proso millet as early as 6000 BCE, and the grain spread along the proto-Silk Road trade routes that connected China to the Mediterranean. For nomadic Turkic and Mongol peoples, millet was the ideal grain: fast-growing, drought-resistant, and easily transported across the steppes. From the legendary boza shops of Ottoman Istanbul to the millet-based kumiss alternatives of the Kazakh steppe, this region\'s millet traditions bridge Asia and Europe.',
    countries: ['Turkey', 'Uzbekistan', 'Turkmenistan', 'Kazakhstan'],
    primaryMillets: ['Proso Millet (Panicum miliaceum)', 'Foxtail Millet (Setaria italica)'],
    iconicFoods: [
      {
        name: 'Boza',
        country: 'Turkey',
        millet: 'Proso Millet',
        description:
          'A thick, slightly viscous, mildly alcoholic fermented millet drink with a sweet-sour tang, traditionally consumed in winter. Boza is made by boiling millet flour, allowing it to ferment with wild lactobacillus cultures, and sweetening with sugar. It is served with roasted chickpeas (leblebi) and a dusting of cinnamon. The drink\'s origins may reach back 8,000-9,000 years in Anatolia.',
      },
      {
        name: 'Vefa Bozacısı Boza',
        country: 'Turkey',
        millet: 'Proso Millet',
        description:
          'Istanbul\'s most famous boza, served at the Vefa Bozacısı shop in the Vefa neighbourhood since 1876. The shop, with its Ottoman-era interior and the glass from which Mustafa Kemal Ataturk reportedly drank boza, is a living monument to millet food heritage. Their recipe has remained unchanged for nearly 150 years.',
      },
      {
        name: 'Tarı Botka (Millet Porridge)',
        country: 'Kazakhstan',
        millet: 'Proso Millet',
        description:
          'A traditional Kazakh millet porridge cooked with milk and butter, historically consumed by nomadic herders as a warming, energy-dense food during harsh steppe winters. Tarı botka is often enriched with kurt (dried fermented milk balls) for added protein and tang.',
      },
      {
        name: 'Sumalak',
        country: 'Uzbekistan',
        millet: 'Proso Millet / Wheat',
        description:
          'A sweet paste made from sprouted millet or wheat, slowly cooked for 24 hours by groups of women singing traditional songs during Nowruz (Persian New Year) celebrations. While wheat has largely replaced millet in modern sumalak, the original Central Asian version used proso millet sprouts, and some communities in rural Uzbekistan maintain this practice.',
      },
      {
        name: 'Köme',
        country: 'Turkmenistan',
        millet: 'Proso Millet',
        description:
          'A traditional millet-based flatbread baked in a tamdyr (clay oven), historically the daily bread of Turkmen farming communities. Köme is often made during the autumn harvest celebrations and eaten with shurpa (meat broth) or served alongside camel milk.',
      },
    ],
    historicalHighlights: [
      {
        title: 'Jeitun culture: early Central Asian millet farming',
        period: 'c. 6000 BCE',
        description:
          'The Jeitun (Djeitun) culture of southern Turkmenistan, one of Central Asia\'s earliest Neolithic farming communities, cultivated proso millet alongside wheat and barley. The Jeitun site near Ashgabat provides some of the oldest evidence of millet agriculture outside China and the Sahel.',
      },
      {
        title: 'Boza: among the world\'s oldest fermented drinks',
        period: 'c. 7000-6000 BCE (estimated)',
        description:
          'Archaeological and ethno-botanical evidence suggests that millet fermentation in Anatolia dates back to the earliest farming communities, making boza one of the oldest continuously produced fermented beverages. Ancient Mesopotamian texts reference millet-based fermented drinks that may be ancestors of modern boza.',
      },
      {
        title: 'Silk Road millet trade',
        period: 'c. 2000 BCE - 1500 CE',
        description:
          'Proso millet was one of the first crops to travel the proto-Silk Road, moving westward from China through Central Asia to Europe. Archaeobotanical studies have traced millet\'s spread through Bronze Age sites across Kazakhstan, Uzbekistan, and Turkmenistan, demonstrating that grain trade preceded the formal Silk Road by millennia.',
      },
      {
        title: 'Ottoman boza culture',
        period: '14th-20th century CE',
        description:
          'Boza became deeply embedded in Ottoman urban culture, with dedicated boza sellers (bozacı) calling through the streets on winter evenings. The Ottoman court maintained imperial boza kitchens, and the drink was served to janissary soldiers as a source of energy. Sultan Selim II attempted to ban boza in 1580 due to its (very low) alcohol content, but the ban proved unenforceable.',
      },
    ],
    culturalSignificance:
      'Boza is far more than a drink in Turkish culture — it is a sensory marker of winter, community, and Ottoman nostalgia. The cry of "Bozaaaa!" from street vendors on cold Istanbul evenings is one of the city\'s most evocative sounds, immortalised in the poetry of Orhan Veli and the novels of Ahmet Hamdi Tanpinar. In Central Asia, millet holds a different but equally deep significance: for the Turkic nomadic peoples, proso millet was the "grain of the steppe," the one crop that could be sown in spring and harvested before the autumn migration. The Kazakh proverb "tarı bitse, mal semirer" (when millet grows, livestock fattens) reflects the symbiotic relationship between millet cultivation and pastoral herding. In Turkmenistan, the Jeitun harvest tradition connects modern farming communities to their 8,000-year-old Neolithic ancestors through continuity of place and practice.',
    modernStatus:
      'Turkey\'s boza tradition has experienced a cultural renaissance in the 21st century. While Vefa Bozacısı remains the most famous purveyor, artisanal boza producers have emerged across Istanbul, Ankara, and Izmir, and the drink has been featured in international food media. Turkey produces relatively little millet domestically (around 15,000 tonnes annually), importing much of its boza millet from Russia and Kazakhstan. In Central Asia, Kazakhstan is the region\'s largest millet producer (approximately 30,000-50,000 tonnes annually), with proso millet grown primarily in the northern steppe regions. Uzbekistan\'s government has included millet in its agricultural diversification programme as a climate-resilient crop for the Aral Sea region, where water scarcity has devastated cotton and rice farming. The Silk Road heritage aspect of millet is increasingly used to promote regional food tourism.',
    keyFact:
      'Boza, the fermented millet drink still sold on Istanbul\'s winter streets, has been produced continuously in Anatolia for an estimated 8,000-9,000 years, making it one of the oldest known fermented beverages in the world.',
    imageFile: '/images/sections/global-turkey-central-asia.webp',
  },

  // ─── 6. EUROPE ────────────────────────────────────────────────────
  {
    slug: 'europe',
    region: 'Europe',
    continent: 'Europe',
    tagline: 'The forgotten grain of medieval Europe — before maize, before potatoes',
    description:
      'Before the Columbian Exchange transformed European agriculture with maize and potatoes from the Americas, millet was one of the continent\'s most important cereals. Proso millet (Panicum miliaceum) arrived in Europe via the Silk Road corridors around 2000-1500 BCE and quickly became a staple across the Danube Basin, the Italian peninsula, and the Eastern European plains. Roman authors including Pliny the Elder documented millet\'s widespread cultivation and its role in feeding both citizens and soldiers. In medieval Italy, millet polenta (polenta di miglio) was the everyday food of peasants and urban workers centuries before maize polenta replaced it after the 16th century. Across Eastern Europe, millet porridge and kasha traditions persisted far longer, and in some regions — particularly Russia, Ukraine, and Romania — proso millet never fully disappeared from the kitchen.',
    countries: ['Italy', 'Russia', 'Ukraine', 'Hungary', 'Romania', 'Germany'],
    primaryMillets: ['Proso Millet (Panicum miliaceum)', 'Foxtail Millet (Setaria italica)'],
    iconicFoods: [
      {
        name: 'Polenta di Miglio (Millet Polenta)',
        country: 'Italy',
        millet: 'Proso Millet',
        description:
          'The original Italian polenta, made from millet flour long before maize arrived from the Americas in the 16th century. Millet polenta was the daily sustenance of northern Italian peasants, particularly in the Veneto, Lombardy, and Friuli regions. It was typically served soft with stews or cooled and sliced for grilling. Some artisanal Italian producers have revived millet polenta as a heritage food.',
      },
      {
        name: 'Pshyonnaya Kasha (Пшённая каша)',
        country: 'Russia',
        millet: 'Proso Millet',
        description:
          'Russian millet porridge, cooked with milk or water and served with butter, honey, or pumpkin. Pshyonnaya kasha has been a staple of Russian peasant cuisine for centuries and remains popular as a breakfast and side dish. It is one of the "canonical" Russian kashi (porridges) alongside buckwheat and oat.',
      },
      {
        name: 'Hirse Auflauf (Millet Bake)',
        country: 'Germany / Austria',
        millet: 'Proso Millet',
        description:
          'A baked millet casserole combined with eggs, milk, and fruit (often apples or cherries), traditional in southern German and Austrian alpine cuisine. Hirse Auflauf has seen a revival in the German organic and whole-foods movement, where millet is promoted as a locally grown, gluten-free alternative to imported quinoa.',
      },
      {
        name: 'Mămăligă cu Mei',
        country: 'Romania',
        millet: 'Proso Millet',
        description:
          'A Romanian millet porridge related to the better-known maize mămăligă. Before corn arrived in Wallachia and Moldavia in the 17th century, millet mămăligă was the peasant staple of the Danubian principalities. Some traditional cooks in rural Transylvania still prepare millet mămăligă for holiday meals.',
      },
      {
        name: 'Köleskása',
        country: 'Hungary',
        millet: 'Proso Millet',
        description:
          'Hungarian millet porridge (köles = millet), served sweet with cinnamon and sugar or savoury with sour cream and bacon. Köleskása was a common food of the Hungarian plains (puszta) and appears in medieval Hungarian cookbooks. The dish is experiencing a revival as part of Hungary\'s "Hungarikum" heritage food programme.',
      },
    ],
    historicalHighlights: [
      {
        title: 'Bronze Age arrival of millet in Europe',
        period: 'c. 2000-1500 BCE',
        description:
          'Proso millet arrived in Europe through the steppe corridors connecting Central Asia to the Danube Basin during the Bronze Age. Archaeobotanical evidence from sites in Hungary, Romania, and northern Italy shows millet cultivation was widespread by 1500 BCE, making it one of the earliest cultivated crops in temperate Europe alongside emmer wheat and barley.',
      },
      {
        title: 'Pliny the Elder on millet cultivation',
        period: '77 CE',
        description:
          'In his Naturalis Historia (Book XVIII), Pliny the Elder described millet as a crop "of remarkable productiveness" grown widely across the Roman Empire. He noted that Campanian millet made an excellent white porridge (puls) and that the grain could be stored for remarkably long periods without spoiling — a critical advantage for military provisioning.',
      },
      {
        title: 'Medieval millet polenta in Italy',
        period: '5th-16th century CE',
        description:
          'Throughout the medieval period, millet polenta (pulmentum) was the daily food of northern Italian peasants and urban labourers. Venetian records from the 14th century document large-scale millet imports from the terraferma (mainland) to feed the city\'s population. Millet polenta only began its decline after maize arrived from the Americas in the late 1500s.',
      },
      {
        title: 'Columbian Exchange displacement',
        period: '16th-18th century CE',
        description:
          'The arrival of maize and potatoes from the Americas gradually displaced millet across most of Western Europe. Maize offered higher yields in the same growing conditions, and potato proved even more productive. By the 18th century, millet had largely vanished from Western European agriculture, though it persisted in Eastern Europe and Russia.',
      },
    ],
    culturalSignificance:
      'Millet\'s European story is one of deep significance followed by near-total forgetting. In ancient Rome, millet porridge (puls) was the food of the common people — the "bread and butter" before leavened bread became widespread. Roman soldiers carried millet as field rations, and the grain was associated with rustic virtue and self-sufficiency. In medieval Venice, the city maintained strategic millet reserves in the same way modern nations stockpile wheat, recognising the grain\'s extraordinary shelf life (properly stored proso millet can remain viable for over a decade). The Russian kasha tradition carries moral weight: the proverb "shchi da kasha — pishcha nasha" (cabbage soup and kasha — that\'s our food) expresses national identity through humble grain porridge. In Hungary, the folk saying "aki kölest vet, az aranyat arat" (who sows millet, reaps gold) reflects the crop\'s historical value on the Hungarian plains.',
    modernStatus:
      'Europe\'s relationship with millet is undergoing a cautious revival. Russia and Ukraine remain the continent\'s largest producers, with Russia harvesting approximately 300,000-500,000 tonnes of proso millet annually. Within the EU, millet is primarily grown in Hungary, Romania, and France as bird feed and increasingly for the gluten-free food market. Germany\'s organic food sector has embraced millet as a sustainable, locally-adapted alternative to imported superfoods — Alnatura, DM, and other German organic brands prominently feature millet products. Italy\'s slow food movement has included millet polenta in its "Ark of Taste" project documenting endangered heritage foods. The EU\'s Farm to Fork strategy and growing interest in drought-resistant crops for climate adaptation have placed millet on agricultural research agendas, with the European Commission funding millet breeding programmes for the first time.',
    keyFact:
      'Before maize arrived from the Americas in the 16th century, millet polenta — not corn polenta — was the everyday food of northern Italian peasants for over a thousand years.',
    imageFile: '/images/sections/global-europe.webp',
  },

  // ─── 7. SOUTHERN AFRICA ───────────────────────────────────────────
  {
    slug: 'southern-africa',
    region: 'Southern Africa',
    continent: 'Africa',
    tagline: 'The brewing heartland — where sorghum and pearl millet become communal celebration',
    description:
      'Southern Africa\'s millet traditions are defined by two intertwined themes: sustenance and fermentation. Sorghum and pearl millet have been cultivated across the region for over 2,000 years, arriving with Bantu-speaking communities migrating southward from Central and East Africa. While these grains serve as daily staples in the form of thick porridges (sadza, ugali, bogobe), it is their transformation into traditional beers and fermented drinks that holds the deepest cultural resonance. Umqombothi in South Africa, chibuku in Zimbabwe, and oshikundu in Namibia are not merely beverages — they are social institutions, spiritual offerings, and markers of community identity. Brewing is traditionally women\'s work, and the knowledge of fermentation is passed from mother to daughter as a form of cultural inheritance.',
    countries: ['South Africa', 'Zimbabwe', 'Botswana', 'Namibia', 'Lesotho', 'Mozambique'],
    primaryMillets: ['Sorghum (Sorghum bicolor)', 'Pearl Millet (Pennisetum glaucum)', 'Finger Millet (Eleusine coracana)'],
    iconicFoods: [
      {
        name: 'Umqombothi',
        country: 'South Africa',
        millet: 'Sorghum',
        description:
          'A traditional Xhosa and Zulu beer brewed from sorghum malt, maize meal, and water, fermented for several days to produce a thick, pinkish-tan, slightly sour beverage with low alcohol content (typically 2-4%). Umqombothi is central to ancestral rituals (amadlozi ceremonies), community celebrations, and the traditional Xhosa umgidi (coming-of-age ceremony). It must be consumed fresh, as it continues fermenting.',
      },
      {
        name: 'Chibuku (Shake Shake)',
        country: 'Zimbabwe',
        millet: 'Sorghum / Pearl Millet',
        description:
          'Zimbabwe\'s iconic opaque sorghum beer, commercially produced since 1962 but rooted in centuries-old home-brewing traditions. Nicknamed "Shake Shake" because the carton must be shaken before drinking to redistribute the sediment, Chibuku is the most consumed alcoholic beverage in rural Zimbabwe. Traditional chibuku uses a mixture of sorghum and pearl millet.',
      },
      {
        name: 'Sadza / Isitshwala',
        country: 'Zimbabwe',
        millet: 'Sorghum / Pearl Millet',
        description:
          'A thick, stiff porridge that is Zimbabwe\'s national staple food, traditionally made from sorghum or pearl millet flour (though maize meal has become more common). Sadza is rolled into balls with the right hand and used to scoop relishes (stews). Sorghum sadza, darker and more flavourful than maize sadza, is preferred in traditional households and for ceremonial occasions.',
      },
      {
        name: 'Bogobe (Ting)',
        country: 'Botswana',
        millet: 'Sorghum',
        description:
          'A traditional Tswana fermented sorghum porridge that comes in two main forms: bogobe jwa lerotse (sorghum porridge with melon) and ting (a sour, fermented version). Ting is made by fermenting sorghum flour for 1-3 days before cooking, producing a tangy porridge that is Botswana\'s national dish. It is typically served with seswaa (pounded beef).',
      },
      {
        name: 'Oshikundu',
        country: 'Namibia',
        millet: 'Pearl Millet (Mahangu)',
        description:
          'A non-alcoholic or very mildly fermented pearl millet drink traditional to the Owambo people of northern Namibia. Made from pounded mahangu (pearl millet) mixed with water and allowed to ferment briefly, oshikundu is a daily refreshment consumed by people of all ages. It is nutritionally rich and serves as both food and drink in the semi-arid Owambo homeland.',
      },
    ],
    historicalHighlights: [
      {
        title: 'Bantu migration and millet spread',
        period: 'c. 300 BCE - 500 CE',
        description:
          'Sorghum and pearl millet arrived in southern Africa with Bantu-speaking peoples migrating from Central and East Africa. Archaeological evidence from sites like Broederstroom (South Africa) and Great Zimbabwe shows established millet agriculture by the early centuries CE, forming the agricultural foundation of Iron Age southern African civilisations.',
      },
      {
        title: 'Great Zimbabwe\'s grain economy',
        period: 'c. 1100-1450 CE',
        description:
          'The Kingdom of Zimbabwe, centred on the monumental stone city of Great Zimbabwe, relied heavily on sorghum and millet agriculture to support a population of 10,000-20,000 people. Grain storage facilities within the Great Enclosure and satellite farming communities supplied the capital. Sorghum beer played a central role in the kingdom\'s political ceremonies and trade relationships.',
      },
      {
        title: 'Colonial disruption of millet farming',
        period: '19th-20th century CE',
        description:
          'European colonisation systematically undermined traditional millet agriculture across southern Africa. Land dispossession pushed African farmers onto marginal lands, while colonial grain policies promoted maize as the "modern" staple. In South Africa, the 1913 Natives Land Act confined Black farmers to 7% of arable land, devastating sorghum and millet production that had sustained communities for centuries.',
      },
      {
        title: 'Post-independence millet revival efforts',
        period: '1980s-present',
        description:
          'Since independence, several southern African nations have worked to revive traditional millet and sorghum farming. Namibia\'s "Mahangu Improvement Programme" has developed drought-resistant pearl millet varieties for the arid north. Zimbabwe\'s small-grain promotion programme encourages farmers to return to sorghum and millet as climate-smart alternatives to water-intensive maize.',
      },
    ],
    culturalSignificance:
      'In southern Africa, sorghum beer is not merely an alcoholic beverage — it is a medium of spiritual communication. Among the Zulu, Xhosa, and Ndebele peoples, umqombothi is brewed specifically for ancestral ceremonies (ukuphahla), where it is poured on the ground as a libation and consumed communally to honour the amadlozi (ancestors). The brewing process itself is ritualised: only designated women brew ceremonial beer, and specific songs are sung during each stage of fermentation. Among the Tswana of Botswana, sorghum porridge (bogobe) is the first food offered to guests — refusing it is considered deeply insulting. In Namibia, the Owambo saying "Omahangu ngee ndjala" (pearl millet is life) encapsulates the grain\'s centrality to survival in one of Africa\'s driest inhabited regions. The communal sharing of millet beer from a single vessel (ukhamba in Zulu) reinforces social bonds and hierarchies — elders drink first, then men, then younger people.',
    modernStatus:
      'Southern Africa faces a critical tension between millet heritage and maize dependency. Maize — introduced by European colonisers and promoted as a "modern" crop — now dominates regional agriculture despite being poorly suited to the region\'s increasingly variable rainfall. Climate change is forcing a reconsideration: Namibia produces approximately 40,000-60,000 tonnes of pearl millet (mahangu) annually, and it remains the primary staple in the north. Zimbabwe\'s small-grain programme aims to increase sorghum and millet production to 15% of cereal output. In South Africa, commercial sorghum beer (including brands like Carling Black Label\'s traditional range) generates over R2 billion in annual sales, and craft sorghum breweries have emerged in Johannesburg and Cape Town. Botswana\'s national food strategy explicitly promotes ting (fermented sorghum porridge) as a nutritional priority. The Southern African Development Community (SADC) has identified millet and sorghum as key crops for regional food security under climate change scenarios.',
    keyFact:
      'Umqombothi, the traditional sorghum beer of the Zulu and Xhosa peoples, is brewed specifically for ancestral communication ceremonies — making it one of the few foods worldwide that serves primarily as a spiritual medium.',
    imageFile: '/images/sections/global-southern-africa.webp',
  },
];

// ─── HELPER ─────────────────────────────────────────────────────────

export function getGlobalMilletRegionBySlug(
  slug: string,
): GlobalMilletRegion | undefined {
  return globalMilletRegions.find((r) => r.slug === slug);
}
