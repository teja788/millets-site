import type { BuyingGuideItem } from '@/lib/types';

export const buyingGuideItems: BuyingGuideItem[] = [
  // =============================================
  // 1. FINGER MILLET (RAGI)
  // =============================================
  {
    millet: 'finger-millet',
    milletName: 'Finger Millet (Ragi)',
    formsAvailable: [
      'Whole grain',
      'Flour (atta)',
      'Flakes',
      'Vermicelli (semiya)',
      'Malt powder (sprouted ragi flour)',
      'Dosa batter (ready-made)',
      'Ragi mudde mix',
    ],
    whatToLookFor: [
      'Choose dark reddish-brown grains that are uniform in size and free of stones, husk fragments, or discoloration.',
      'For ragi flour, check the manufacturing and expiry dates — fresh flour should have a mild earthy aroma without any rancid or musty smell.',
      'Prefer sprouted ragi flour (ragi malt) for porridge as it is easier to digest and has enhanced nutrient bioavailability.',
      'Look for organic or naturally grown labels, especially for baby food preparations where pesticide residue is a concern.',
      'Avoid flour that has visible clumps or signs of moisture, which indicates poor storage or aging.',
    ],
    storageInstructions:
      'Store whole ragi grains in a clean, dry, airtight container in a cool, dark place away from direct sunlight. Whole grains keep well at room temperature. Ragi flour should be stored in an airtight container in the refrigerator to prevent the natural oils from going rancid. In humid climates, add a couple of dried neem leaves or bay leaves to the container to deter insects.',
    shelfLife:
      'Whole grains: 12-18 months at room temperature. Flour: 2-3 months at room temperature, up to 6 months refrigerated. Malt powder: 3-4 months in a cool, dry place. Flakes and vermicelli: 6-8 months in sealed packaging.',
    priceRange: 'Budget',
    onlineAvailability:
      'Widely available on Amazon, BigBasket, Flipkart, and specialty organic stores like Organic Tattva, 24 Mantra, and Pristine. Also readily available in local kirana shops and supermarkets across South India. North Indian availability has increased significantly since 2023 (International Year of Millets).',
  },

  // =============================================
  // 2. PEARL MILLET (BAJRA)
  // =============================================
  {
    millet: 'pearl-millet',
    milletName: 'Pearl Millet (Bajra)',
    formsAvailable: [
      'Whole grain',
      'Flour (atta)',
      'Flakes',
      'Puffed bajra',
    ],
    whatToLookFor: [
      'Select grains that are round, uniform in size, and have a greyish-yellow color. Avoid grains that appear shriveled or have a greenish tinge, which indicates immaturity.',
      'For bajra flour, freshness is critical — the flour has a high oil content and turns bitter quickly. Buy in small quantities and check for a clean, slightly sweet aroma.',
      'During winter months (November to February), freshly harvested bajra is available in markets across Rajasthan, Gujarat, and Maharashtra — this is the best time to buy.',
      'Check for FSSAI certification on packaged products to ensure the grain has been tested for ergot contamination, a rare but potential issue with pearl millet.',
    ],
    storageInstructions:
      'Store whole bajra grains in an airtight steel or glass container in a cool, dry place. Bajra flour must be refrigerated immediately after grinding or opening, as the high fat content causes rapid rancidity at room temperature. In traditional Rajasthani households, bajra is stored in earthen pots (matkas) which help regulate moisture naturally.',
    shelfLife:
      'Whole grains: 10-12 months at room temperature. Flour: 1-2 months at room temperature, up to 4 months refrigerated. Flakes: 4-6 months in sealed packaging. For best results, buy whole grain and get it freshly ground at a local chakki (flour mill) as needed.',
    priceRange: 'Budget',
    onlineAvailability:
      'Easily available on Amazon, BigBasket, and local markets especially in North and West India (Rajasthan, Gujarat, Haryana, Maharashtra). Seasonal availability is best during winter. Brands like 24 Mantra, Organic Tattva, and local farm-to-fork brands offer quality bajra. Less common in South Indian retail but available online.',
  },

  // =============================================
  // 3. SORGHUM (JOWAR)
  // =============================================
  {
    millet: 'sorghum',
    milletName: 'Sorghum (Jowar)',
    formsAvailable: [
      'Whole grain',
      'Flour (atta)',
      'Popped sorghum (jowar lahi)',
      'Jowar flakes',
      'Jowar pasta',
    ],
    whatToLookFor: [
      'Choose round, white or cream-colored grains that are plump and free from broken pieces. The grain should feel hard and dry, not soft or damp.',
      'Jowar flour should be bright white to cream in color with a clean, neutral smell. Yellowish or grey flour indicates aging or poor quality grain.',
      'For rotis and bhakri, look for stone-ground (chakki) flour which retains more fiber and nutrients compared to commercially milled flour.',
      'Popped jowar (lahi) should be white and fully puffed. Avoid batches with too many un-popped kernels, which indicates old or low-quality grain.',
      'Check for the presence of red or brown specks in the flour, which may indicate the use of mixed grain varieties.',
    ],
    storageInstructions:
      'Store whole jowar in an airtight container at room temperature in a dry, well-ventilated area. The grain is relatively stable and resistant to common storage pests. Jowar flour should be stored in an airtight container, preferably in the refrigerator. In dry climates, room temperature storage is acceptable for flour if consumed within a month.',
    shelfLife:
      'Whole grains: 12-18 months at room temperature. Flour: 2-3 months at room temperature, up to 6 months refrigerated. Popped jowar: 2-3 months in airtight packaging. Flakes and pasta: 6-10 months in sealed packaging.',
    priceRange: 'Budget',
    onlineAvailability:
      'One of the most widely available millets across India. Found in every kirana shop, supermarket, and online platform. Major brands include Aashirvaad, 24 Mantra, Organic Tattva, and Pristine. Also available in bulk from agricultural mandis at wholesale prices. Jowar pasta and specialty products are available on health food platforms like Slurrp Farm and NutriBowl.',
  },

  // =============================================
  // 4. FOXTAIL MILLET (KANGNI / THINAI)
  // =============================================
  {
    millet: 'foxtail-millet',
    milletName: 'Foxtail Millet (Kangni/Thinai)',
    formsAvailable: [
      'Whole grain (unpolished)',
      'Polished rice (thinai arisi)',
      'Semolina (rava/broken)',
      'Flakes',
      'Foxtail millet vermicelli',
    ],
    whatToLookFor: [
      'Foxtail millet is available in both unpolished (brown/tan with husk traces) and polished (bright yellow) forms. Unpolished retains more fiber and nutrients but takes longer to cook.',
      'The grains should be small, round, and uniformly yellow-golden in color. Avoid batches with excessive broken grains or dark spots.',
      'For South Indian rice-style preparations, buy the polished (thinai arisi) form. For upma and porridge, the semolina or broken form works best.',
      'Check the packaging date — foxtail millet has moderate oil content and should ideally be consumed within 6 months of processing.',
    ],
    storageInstructions:
      'Store in a clean, airtight glass or steel container in a cool, dry place away from sunlight. Unpolished foxtail millet benefits from refrigeration in humid climates to prevent the bran layer from turning rancid. Polished foxtail millet is more shelf-stable and can be stored at room temperature. Add a small piece of dried turmeric to the container as a natural preservative.',
    shelfLife:
      'Whole grain (unpolished): 8-10 months at room temperature, up to 12 months refrigerated. Polished rice form: 10-12 months at room temperature. Semolina and flakes: 4-6 months in sealed packaging.',
    priceRange: 'Moderate',
    onlineAvailability:
      'Readily available on Amazon, BigBasket, and specialty millet stores. Widely sold in Tamil Nadu, Andhra Pradesh, and Karnataka under local names (thinai, korra). Brands like Millet Amma, Organic Tattva, and Pristine offer good quality. Also available in bulk on platforms like Jiomart and DMart Ready. Availability in North India has improved significantly.',
  },

  // =============================================
  // 5. LITTLE MILLET (SAMAI / KUTKI)
  // =============================================
  {
    millet: 'little-millet',
    milletName: 'Little Millet (Samai/Kutki)',
    formsAvailable: [
      'Whole grain (unpolished)',
      'Polished rice (samai arisi)',
      'Little millet rava',
    ],
    whatToLookFor: [
      'Little millet grains are tiny and white to light grey in color when polished. Look for uniform, clean grains without dust, husk, or stone particles.',
      'Unpolished little millet has a light brown color and slightly rough texture. It is more nutritious but requires soaking before cooking.',
      'The grain should feel completely dry and should not stick together when pressed between fingers — stickiness indicates moisture and potential spoilage.',
      'Buy from brands that specify "sortex cleaned" on the packaging, which ensures machine-sorting for stones and impurities common in small-grain millets.',
    ],
    storageInstructions:
      'Store in an airtight container in a cool, dry place. Little millet is relatively pest-resistant due to its small size and hard outer layer. However, in humid climates, refrigeration is recommended to prevent moisture absorption and mold. Transfer from plastic packaging to glass or steel containers immediately after purchase for longer shelf life.',
    shelfLife:
      'Whole grain (unpolished): 10-12 months at room temperature. Polished rice form: 8-10 months. Little millet rava: 4-6 months in sealed packaging. Once cooked, consume within 24 hours as it tends to harden on refrigeration.',
    priceRange: 'Moderate',
    onlineAvailability:
      'Available on Amazon, BigBasket, Flipkart, and millet specialty stores. Most commonly sold in Tamil Nadu (samai), Andhra Pradesh (samalu), and Karnataka (saame). Brands like Millet Amma, Native Food Store, and 24 Mantra offer quality options. Less commonly found in North Indian retail, so online ordering may be necessary for those regions.',
  },

  // =============================================
  // 6. KODO MILLET (VARAGU / KODRA)
  // =============================================
  {
    millet: 'kodo-millet',
    milletName: 'Kodo Millet (Varagu/Kodra)',
    formsAvailable: [
      'Whole grain (unpolished)',
      'Polished rice (varagu arisi)',
      'Kodo millet rava',
    ],
    whatToLookFor: [
      'Polished kodo millet should be light grey to white in color, while unpolished grains are darker brown. Check for uniform grain size and cleanliness.',
      'Kodo millet is sometimes confused with similar-looking grains — buy from trusted brands or stores that specialize in millets to ensure authenticity.',
      'The grains should be completely dry and should pour freely from the hand without clumping. Any clumping or damp feeling indicates improper drying.',
      'Ensure the packaging mentions FSSAI compliance, as historically there have been occasional issues with cyclopiazonic acid contamination in improperly stored kodo millet — reputable brands test for this.',
      'For biryani and pulao preparations, choose the polished (varagu arisi) form for best texture and appearance.',
    ],
    storageInstructions:
      'Store in a clean, airtight glass or steel container in a cool, dry, well-ventilated area. Kodo millet should be kept away from moisture at all times, as damp conditions can promote fungal growth. In humid regions, store in the refrigerator. Sun-dry the grain for a few hours before storing if you purchase from open markets or bulk bins.',
    shelfLife:
      'Whole grain (unpolished): 8-10 months in dry conditions. Polished rice form: 8-12 months. Kodo millet rava: 3-5 months in sealed packaging. Always inspect stored kodo millet for any off-smell or discoloration before use.',
    priceRange: 'Moderate',
    onlineAvailability:
      'Available on Amazon, BigBasket, and specialty organic stores. Well-stocked in Tamil Nadu (varagu), Madhya Pradesh, and Maharashtra (kodra). Brands like Pristine, 24 Mantra, and local organic cooperatives offer reliable quality. For bulk purchases, check with FPOs (Farmer Producer Organizations) in Madhya Pradesh and Chhattisgarh. Online availability is moderate, with more options on South Indian platforms.',
  },

  // =============================================
  // 7. BARNYARD MILLET (SANWA / JHANGORA)
  // =============================================
  {
    millet: 'barnyard-millet',
    milletName: 'Barnyard Millet (Sanwa/Jhangora)',
    formsAvailable: [
      'Whole grain',
      'Flour',
      'Flakes',
      'Barnyard millet rava',
    ],
    whatToLookFor: [
      'Barnyard millet grains are small and white with a distinctive round shape. Look for clean, uniform grains that are free from black specks, stones, or husk remnants.',
      'This millet is extremely popular as a fasting (vrat/upvas) food — during Navratri and other fasting seasons, demand spikes and prices may increase. Buy in advance if possible.',
      'For the best nutritional value, choose unpolished whole grains. The polished version cooks faster but loses some fiber content.',
      'Check for freshness — barnyard millet has a shorter shelf life than other millets due to its delicate grain structure and should smell clean and neutral.',
    ],
    storageInstructions:
      'Store in an airtight container in a cool, dry place. Barnyard millet is best stored in glass or food-grade steel containers rather than plastic, as plastic can trap moisture. In hot and humid climates, refrigerate the grain, especially during monsoon months. If buying in bulk, divide into smaller portions and store separately to minimize air exposure each time you open the container.',
    shelfLife:
      'Whole grains: 6-8 months at room temperature, up to 10 months refrigerated. Flour: 1-2 months at room temperature, up to 3 months refrigerated. Flakes: 3-4 months in sealed packaging. Shorter shelf life compared to other millets, so buy in smaller quantities.',
    priceRange: 'Moderate',
    onlineAvailability:
      'Available on Amazon, BigBasket, and Flipkart. Popular in Uttarakhand (jhangora), Maharashtra (sanwa), and Tamil Nadu (kuthiraivali). Demand and availability peak during fasting seasons (Navratri, Shravan). Brands like Native Food Store, Organic Tattva, and Millet Amma offer year-round supply. Check local organic markets for freshly processed stock.',
  },

  // =============================================
  // 8. PROSO MILLET (CHENA / BARRI)
  // =============================================
  {
    millet: 'proso-millet',
    milletName: 'Proso Millet (Chena/Barri)',
    formsAvailable: [
      'Whole grain (unpolished)',
      'Polished grain',
      'Proso millet rice',
    ],
    whatToLookFor: [
      'Proso millet grains are round and pale yellow to cream in color. Select grains that are clean, dry, and free from discoloration or dark spots.',
      'This is one of the less commonly available millets in mainstream retail — you may need to source it from specialty millet stores or online platforms rather than regular supermarkets.',
      'Ensure the grain is properly dehusked as proso millet has a relatively hard outer hull that is inedible. Well-processed grain should be smooth and uniform.',
      'Proso millet is often sold under regional names — look for "pani varagu" (Tamil Nadu), "chena" (Hindi), "barri" (Rajasthan), or "varigalu" (Telugu) depending on your region.',
    ],
    storageInstructions:
      'Store in an airtight container in a cool, dry place away from direct sunlight and heat sources. Proso millet stores reasonably well due to its hard grain structure. In humid environments, refrigeration is recommended. If purchasing from bulk bins, sun-dry the grain for 2-3 hours before storing to eliminate any residual moisture.',
    shelfLife:
      'Whole grain (unpolished): 8-12 months at room temperature in dry conditions. Polished grain: 6-10 months. As with all millets, flour form should be consumed within 2-3 months.',
    priceRange: 'Moderate to Premium',
    onlineAvailability:
      'Less commonly stocked in mainstream supermarkets. Available on Amazon, specialized millet platforms (Millet Amma, Native Food Store), and some organic stores on BigBasket. Best sourced from millet-focused cooperatives in Tamil Nadu, Andhra Pradesh, and Rajasthan. Availability has improved post-2023 but remains limited compared to ragi, jowar, and bajra.',
  },

  // =============================================
  // 9. BROWNTOP MILLET (KORLE)
  // =============================================
  {
    millet: 'browntop-millet',
    milletName: 'Browntop Millet (Korle)',
    formsAvailable: [
      'Whole grain (unpolished)',
      'Polished rice',
    ],
    whatToLookFor: [
      'Browntop millet is the rarest and most premium millet variety in the Indian market. The grains are very small, round, and light brown to cream in color when polished.',
      'Due to limited production (primarily in Karnataka and parts of Andhra Pradesh), verify the source and authenticity of the product. Buy from known millet brands or directly from farmer cooperatives.',
      'The grain should be clean and free from impurities. Given its premium price, ensure the packaging is sealed and the product is within its best-before date.',
      'Browntop millet is sometimes marketed as the "wonder millet" with exaggerated health claims — while it is nutritious, be skeptical of products making therapeutic claims on the packaging.',
    ],
    storageInstructions:
      'Store in a tightly sealed glass or steel container in a cool, dry place. Due to its premium price, take extra care with storage to prevent any spoilage. In humid climates, refrigerate the grain. As browntop millet is typically purchased in smaller quantities, use it within a few months of purchase for the best taste and nutritional value.',
    shelfLife:
      'Whole grain (unpolished): 8-10 months at room temperature. Polished rice form: 6-8 months. Buy in small quantities (500g to 1kg) due to premium pricing and limited shelf life compared to more robust millets like sorghum and ragi.',
    priceRange: 'Premium',
    onlineAvailability:
      'Limited retail availability — rarely found in mainstream supermarkets or local kirana shops. Best sourced from specialty online stores like Millet Amma, Native Food Store, and select listings on Amazon. Some Karnataka-based organic cooperatives and farmer-direct platforms offer authentic browntop millet. Prices are typically 2-3 times higher than common millets like jowar or bajra. Availability may be seasonal and stock can sell out quickly.',
  },
];

export function getBuyingGuideByMillet(slug: string): BuyingGuideItem | undefined {
  return buyingGuideItems.find((b) => b.millet === slug);
}
