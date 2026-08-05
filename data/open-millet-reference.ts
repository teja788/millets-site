export interface OpenNameLabel {
  language: string;
  value: string;
}

export interface OpenMilletRecord {
  slug: string;
  commonName: string;
  group: 'millet' | 'sorghum';
  acceptedScientificName: string;
  familiarSynonyms: string[];
  selectedRecordedNames: OpenNameLabel[];
  gbifTaxonKey: number;
  sourceUrl: string;
}

export const openMilletReference = {
  title: 'Simply Millets Open Names Reference',
  version: '2026-08-06',
  accessedOn: '2026-08-06',
  license: {
    name: 'Creative Commons Attribution 4.0 International',
    shortName: 'CC BY 4.0',
    url: 'https://creativecommons.org/licenses/by/4.0/',
  },
  source: {
    publisher: 'Global Biodiversity Information Facility (GBIF)',
    dataset: 'GBIF Backbone Taxonomy',
    datasetUrl: 'https://www.gbif.org/dataset/d7dddbf4-2cf0-4f39-9b2a-bb099caae36c',
    license: 'CC BY 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
  },
  scope: [
    'Accepted scientific names and botanical authors',
    'Selected scientific synonyms used by this website or commonly encountered in millet literature',
    'Selected vernacular names explicitly present in the linked source record',
  ],
  exclusions: [
    'Nutrition and health claims',
    'Cooking ratios, cooking times, soaking times, and substitutions',
    'Machine-translated or inferred vernacular names',
    'Claims of expert or manual review',
  ],
  records: [
    {
      slug: 'pearl-millet',
      commonName: 'Pearl millet',
      group: 'millet',
      acceptedScientificName: 'Cenchrus americanus (L.) Morrone',
      familiarSynonyms: ['Pennisetum glaucum (L.) R.Br.'],
      selectedRecordedNames: [
        { language: 'English', value: 'Pearl millet' },
        { language: 'German', value: 'Perlhirse' },
        { language: 'French', value: 'mil' },
        { language: 'Spanish', value: 'mijo perla' },
        { language: 'Arabic', value: 'dukhn' },
      ],
      gbifTaxonKey: 5828197,
      sourceUrl: 'https://www.gbif.org/species/5828197',
    },
    {
      slug: 'finger-millet',
      commonName: 'Finger millet',
      group: 'millet',
      acceptedScientificName: 'Eleusine coracana (L.) Gaertn.',
      familiarSynonyms: ['Cynosurus coracanus L.'],
      selectedRecordedNames: [
        { language: 'English', value: 'Finger millet' },
        { language: 'German', value: 'Fingerhirse' },
        { language: 'French', value: 'coracan' },
        { language: 'Spanish', value: 'mijo africano' },
        { language: 'Hindi', value: 'ragi' },
        { language: 'Telugu', value: 'రాగి' },
      ],
      gbifTaxonKey: 2705957,
      sourceUrl: 'https://www.gbif.org/species/2705957',
    },
    {
      slug: 'foxtail-millet',
      commonName: 'Foxtail millet',
      group: 'millet',
      acceptedScientificName: 'Setaria italica (L.) P.Beauv.',
      familiarSynonyms: ['Panicum italicum L.'],
      selectedRecordedNames: [
        { language: 'English', value: 'Foxtail millet' },
        { language: 'German', value: 'Kolbenhirse' },
        { language: 'French', value: "millet d’Italie" },
        { language: 'Spanish', value: 'mijo de Italia' },
      ],
      gbifTaxonKey: 5289698,
      sourceUrl: 'https://www.gbif.org/species/5289698',
    },
    {
      slug: 'little-millet',
      commonName: 'Little millet',
      group: 'millet',
      acceptedScientificName: 'Panicum sumatrense Roth',
      familiarSynonyms: ['Panicum miliare var. hirtum Hook.f.'],
      selectedRecordedNames: [
        { language: 'English', value: 'Little millet' },
        { language: 'German', value: 'Kutkihirse' },
        { language: 'Arabic', value: 'دخن سومطري' },
      ],
      gbifTaxonKey: 2705079,
      sourceUrl: 'https://www.gbif.org/species/2705079',
    },
    {
      slug: 'kodo-millet',
      commonName: 'Kodo millet',
      group: 'millet',
      acceptedScientificName: 'Paspalum scrobiculatum L.',
      familiarSynonyms: ['Paspalum commersonii Lam.'],
      selectedRecordedNames: [
        { language: 'English', value: 'Kodo millet' },
        { language: 'German', value: 'Kodohirse' },
        { language: 'Spanish', value: 'mijo koda' },
        { language: 'Hindi', value: 'kodo' },
      ],
      gbifTaxonKey: 2705610,
      sourceUrl: 'https://www.gbif.org/species/2705610',
    },
    {
      slug: 'barnyard-millet',
      commonName: 'Barnyard millet',
      group: 'millet',
      acceptedScientificName: 'Echinochloa frumentacea Link',
      familiarSynonyms: ['Echinochloa colona subsp. frumentacea (Link) Ridl.'],
      selectedRecordedNames: [
        { language: 'English', value: 'Indian barnyard millet' },
        { language: 'German', value: 'Getreide-Hühnerhirse' },
        { language: 'French', value: 'millet japonais' },
      ],
      gbifTaxonKey: 2702822,
      sourceUrl: 'https://www.gbif.org/species/2702822',
    },
    {
      slug: 'proso-millet',
      commonName: 'Proso millet',
      group: 'millet',
      acceptedScientificName: 'Panicum miliaceum L.',
      familiarSynonyms: ['Milium esculentum Moench'],
      selectedRecordedNames: [
        { language: 'English', value: 'Proso millet' },
        { language: 'German', value: 'Rispenhirse' },
        { language: 'French', value: 'millet commun' },
        { language: 'Spanish', value: 'mijo común' },
      ],
      gbifTaxonKey: 2705090,
      sourceUrl: 'https://www.gbif.org/species/2705090',
    },
    {
      slug: 'browntop-millet',
      commonName: 'Browntop millet',
      group: 'millet',
      acceptedScientificName: 'Urochloa ramosa (L.) T.Q.Nguyen',
      familiarSynonyms: ['Brachiaria ramosa (L.) Stapf'],
      selectedRecordedNames: [{ language: 'English', value: 'Browntop millet' }],
      gbifTaxonKey: 2705875,
      sourceUrl: 'https://www.gbif.org/species/2705875',
    },
    {
      slug: 'sorghum',
      commonName: 'Sorghum',
      group: 'sorghum',
      acceptedScientificName: 'Sorghum bicolor (L.) Moench',
      familiarSynonyms: ['Andropogon sorghum (L.) Brot.'],
      selectedRecordedNames: [
        { language: 'English', value: 'Sorghum' },
        { language: 'German', value: 'Echte Sorghumhirse' },
        { language: 'French', value: 'sorgho commun' },
        { language: 'Spanish', value: 'sorgo africano' },
      ],
      gbifTaxonKey: 2705181,
      sourceUrl: 'https://www.gbif.org/species/2705181',
    },
  ] satisfies OpenMilletRecord[],
};
