export interface GermanMilletNames {
  german: string;
  english: string;
  scientificName: string;
  bavarian?: string;
  swissGerman?: string;
  austrian?: string;
}

export const germanMilletNames: Record<string, GermanMilletNames> = {
  'pearl-millet': {
    german: 'Perlhirse / Rohrkolbenhirse',
    english: 'Pearl Millet',
    scientificName: 'Pennisetum glaucum',
    bavarian: 'Hirsch',
    swissGerman: 'Hirschi',
  },
  'finger-millet': {
    german: 'Fingerhirse / Ragihirse',
    english: 'Finger Millet (Ragi)',
    scientificName: 'Eleusine coracana',
  },
  sorghum: {
    german: 'Sorghum / Mohrenhirse / Durra',
    english: 'Sorghum (Jowar)',
    scientificName: 'Sorghum bicolor',
    austrian: 'Sorghumhirse',
  },
  'foxtail-millet': {
    german: 'Kolbenhirse / Borstenhirse',
    english: 'Foxtail Millet',
    scientificName: 'Setaria italica',
    bavarian: 'Fennich',
  },
  'little-millet': {
    german: 'Kleine Hirse',
    english: 'Little Millet',
    scientificName: 'Panicum sumatrense',
  },
  'kodo-millet': {
    german: 'Kodohirse',
    english: 'Kodo Millet',
    scientificName: 'Paspalum scrobiculatum',
  },
  'barnyard-millet': {
    german: 'Japanische Hirse / Hühnerhirse',
    english: 'Barnyard Millet',
    scientificName: 'Echinochloa esculenta',
    swissGerman: 'Hüenerhirse',
  },
  'proso-millet': {
    german: 'Rispenhirse / Echte Hirse',
    english: 'Proso Millet',
    scientificName: 'Panicum miliaceum',
    bavarian: 'Brein',
    austrian: 'Brein',
    swissGerman: 'Hirschi',
  },
  'browntop-millet': {
    german: 'Brauntophirse',
    english: 'Browntop Millet',
    scientificName: 'Brachiaria ramosa',
  },
};
