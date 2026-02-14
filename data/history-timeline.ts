import type { TimelineEvent } from '@/lib/types';

export const timelineEvents: TimelineEvent[] = [
  {
    year: '~8700 BCE',
    title: 'Earliest Millet Cultivation',
    description:
      'Archaeological excavations at the Cishan site in northern China reveal the earliest evidence of foxtail millet (Setaria italica) and broomcorn/proso millet (Panicum miliaceum) cultivation, making millets among the first domesticated cereal crops in human history.',
    region: 'China',
    source: 'cishan-archaeology',
  },
  {
    year: '~5000 BCE',
    title: 'Finger Millet Domestication',
    description:
      'Finger millet (Eleusine coracana) is domesticated in the Ethiopian highlands of East Africa. The wild progenitor Eleusine africana is selectively cultivated by early farming communities, beginning a crop that would become a staple across Africa and South Asia.',
    region: 'East Africa',
    source: 'fuller-2006',
  },
  {
    year: '~4500 BCE',
    title: 'Pearl Millet Origins',
    description:
      'Pearl millet (Pennisetum glaucum) begins cultivation in the Sahel region of West Africa, in areas that are now Mali and Niger. Adapted to extreme heat and drought, it becomes a lifeline crop for semi-arid tropical agriculture.',
    region: 'West Africa',
    source: 'fao-millets-1995',
  },
  {
    year: '~3300 BCE',
    title: 'Millets in the Indus Valley',
    description:
      'Archaeological evidence confirms millet cultivation at multiple Indus Valley Civilization sites including Harappa. Both foxtail and browntop millet grains are recovered, indicating millets were part of the diverse agricultural base of one of the world\'s earliest urban civilizations.',
    region: 'Indian Subcontinent',
    source: 'weber-1998',
  },
  {
    year: '~2500 BCE',
    title: 'Sorghum Domestication',
    description:
      'Sorghum bicolor is domesticated in northeastern Africa, in the Sudan-Ethiopia region. It eventually spreads across Africa, Asia, and the Mediterranean to become the fifth most important cereal crop globally.',
    region: 'East Africa',
    source: 'fuller-2006',
  },
  {
    year: '~2000 BCE',
    title: 'Pearl Millet Reaches India',
    description:
      'Evidence of bajra (pearl millet) cultivation is found at Surkotada and Rojdi in Gujarat, indicating that pearl millet had migrated from Africa to the Indian subcontinent via ancient trade and migration routes across the Arabian Sea or overland through the Near East.',
    region: 'India',
    source: 'weber-1998',
  },
  {
    year: '~1800 BCE',
    title: 'Ragi in South India',
    description:
      'Archaeological excavations at Hallur in Karnataka yield the earliest evidence of finger millet (ragi) cultivation in India. This marks the beginning of ragi\'s deep association with South Indian agriculture and cuisine that continues to the present day.',
    region: 'South India',
    source: 'hallur-archaeology',
  },
  {
    year: '~1500 BCE',
    title: 'Vedic References',
    description:
      'Millets are referenced in the Yajurveda as \'Anu\' (minor grains), listed alongside rice (Vrihi) and barley (Yava). This textual evidence confirms that millets were an established part of the Vedic agricultural and dietary system in ancient India.',
    region: 'India',
    source: 'charaka-samhita',
  },
  {
    year: '~600 BCE',
    title: 'Classical Ayurvedic Texts',
    description:
      'The Charaka Samhita, one of the foundational texts of Ayurveda, classifies millets under Trina Dhanya (grass grains) in the Sutra Sthana. Detailed descriptions of their properties (rasa, guna, virya, vipaka) and therapeutic applications are documented for the first time.',
    region: 'India',
    source: 'charaka-samhita',
  },
  {
    year: '~300 BCE',
    title: 'Sangam Literature References',
    description:
      'Tamil Sangam literature extensively mentions Thinai (foxtail millet), Varagu (kodo millet), and Samai (little millet) as staple crops of the ancient Tamil country. The five landscape-based divisions (Tinai) of Sangam poetry are named after agricultural crops, with Thinai (millet) representing the hill regions.',
    region: 'South India',
    source: 'sangam-literature',
  },
  {
    year: '~100 CE',
    title: 'Roman Knowledge',
    description:
      'Pliny the Elder mentions millets in his encyclopedic work Natural History (Naturalis Historia), describing them as important grains of the ancient world. He notes their cultivation across the Roman Empire and their use as both human food and animal feed.',
    region: 'Roman Empire',
    source: 'pliny-natural-history',
  },
  {
    year: '~600 CE',
    title: 'Medieval Indian Agriculture',
    description:
      'Millets form the backbone of agriculture on the Deccan Plateau during the Chalukya and Rashtrakuta dynasties. Jowar (sorghum), bajra (pearl millet), and ragi (finger millet) sustain large populations in the semi-arid regions of central and southern India.',
    region: 'India',
  },
  {
    year: '~1500 CE',
    title: 'Bhavaprakasha Nighantu',
    description:
      'Bhavamishra compiles the Bhavaprakasha Nighantu, a comprehensive Ayurvedic pharmacopoeia that provides detailed properties of various millets in the Dhanya Varga (grain chapter). This text becomes a key reference for understanding the Ayurvedic perspective on millets and their therapeutic uses.',
    region: 'India',
    source: 'bhavaprakasha',
  },
  {
    year: '1960',
    title: 'Green Revolution Begins',
    description:
      'India\'s Green Revolution, led by Dr. M.S. Swaminathan and supported by Norman Borlaug\'s high-yield varieties, focuses on wheat and rice to address food scarcity. While it succeeds in averting famine, millet cultivation begins a steep decline as government subsidies, procurement policies, and public distribution systems favor rice and wheat.',
    region: 'India',
  },
  {
    year: '1985',
    title: 'ICRISAT Research',
    description:
      'The International Crops Research Institute for the Semi-Arid Tropics (ICRISAT), based in Hyderabad, India, intensifies research on sorghum, pearl millet, and finger millet. Their work on improved varieties, drought tolerance, and nutritional quality helps preserve millet farming in semi-arid regions worldwide.',
    region: 'Global',
    source: 'icrisat-millets',
  },
  {
    year: '2018',
    title: 'Nutri-Cereals Declaration',
    description:
      'The Government of India officially reclassifies millets as \'Nutri-Cereals\' through a gazette notification by the Ministry of Agriculture, recognizing their superior nutritional profile. India declares 2018 as the National Year of Millets, launching awareness campaigns and promoting millet inclusion in mid-day meal schemes and the Public Distribution System.',
    region: 'India',
    source: 'india-nutri-cereals',
  },
  {
    year: '2021',
    title: 'UN Resolution',
    description:
      'India proposes a resolution to the United Nations General Assembly to declare 2023 as the International Year of Millets. The resolution is adopted with the support of 72 countries, recognizing millets\' contribution to food security, nutrition, climate resilience, and sustainable agriculture.',
    region: 'Global',
    source: 'un-iym-2023',
  },
  {
    year: '2023',
    title: 'International Year of Millets',
    description:
      'The United Nations celebrates the International Year of Millets (IYM 2023). India leads global campaigns promoting millet consumption, research, and trade. Events are held across 100+ countries, millet-based menus appear at UN cafeterias, and awareness of millets as climate-smart, nutritious grains reaches an unprecedented global audience.',
    region: 'Global',
    source: 'un-iym-2023',
  },
];
