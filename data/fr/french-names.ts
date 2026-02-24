export interface FrenchMilletNames {
  french: string;
  english: string;
  scientificName: string;
  wolof?: string;
  bambara?: string;
  hausa?: string;
  fulfude?: string;
}

export const frenchMilletNames: Record<string, FrenchMilletNames> = {
  'pearl-millet': {
    french: 'Mil à chandelle / Petit mil',
    english: 'Pearl Millet',
    scientificName: 'Pennisetum glaucum',
    wolof: 'Souna',
    bambara: 'Nyô / Sanyo',
    hausa: 'Gero',
    fulfude: 'Maayri',
  },
  'finger-millet': {
    french: 'Éleusine / Mil rouge',
    english: 'Finger Millet (Ragi)',
    scientificName: 'Eleusine coracana',
    wolof: 'Findi',
    bambara: 'Finini',
    hausa: 'Tamba',
    fulfude: 'Fondé',
  },
  sorghum: {
    french: 'Sorgho / Gros mil',
    english: 'Sorghum (Jowar)',
    scientificName: 'Sorghum bicolor',
    wolof: 'Bassi',
    bambara: 'Gabu / Nyô-ba',
    hausa: 'Dawa',
    fulfude: 'Gauri',
  },
  'foxtail-millet': {
    french: 'Millet des oiseaux / Millet d\'Italie',
    english: 'Foxtail Millet',
    scientificName: 'Setaria italica',
  },
  'little-millet': {
    french: 'Petit millet',
    english: 'Little Millet',
    scientificName: 'Panicum sumatrense',
  },
  'kodo-millet': {
    french: 'Millet kodo',
    english: 'Kodo Millet',
    scientificName: 'Paspalum scrobiculatum',
  },
  'barnyard-millet': {
    french: 'Millet japonais / Échinochloa',
    english: 'Barnyard Millet',
    scientificName: 'Echinochloa esculenta',
  },
  'proso-millet': {
    french: 'Millet commun / Millet blanc',
    english: 'Proso Millet',
    scientificName: 'Panicum miliaceum',
  },
  'browntop-millet': {
    french: 'Millet brun',
    english: 'Browntop Millet',
    scientificName: 'Brachiaria ramosa',
  },
};
