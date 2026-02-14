'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Breadcrumb from '@/components/layout/Breadcrumb';
import Badge from '@/components/ui/Badge';
import { Card, CardBody } from '@/components/ui/Card';
import { globalMilletRegions } from '@/data/global-millets';

const continentBadgeVariant: Record<string, 'green' | 'orange' | 'blue' | 'red' | 'default'> = {
  Africa: 'orange',
  Asia: 'green',
  'Asia/Europe': 'blue',
  Europe: 'red',
};

export default function GlobalMilletsPage() {
  useEffect(() => {
    document.title = 'Millets Around the World | Millets Info';
  }, []);

  return (
    <main>
      <Breadcrumb />

      <div className="content-wrapper section-padding">
        {/* Page Header */}
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-earth-100 mb-4">
          Millets Around the World
        </h1>
        <p className="text-lg text-earth-300 max-w-3xl mb-10 leading-relaxed">
          Millets are not just an Indian story. From the injera tables of
          Ethiopia to the boza shops of Istanbul, from the ancient granaries of
          China to the porridge pots of medieval Europe, millets have sustained
          civilizations across every inhabited continent. Explore how different
          cultures have cultivated, cooked, and celebrated these remarkable
          grains throughout history.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {globalMilletRegions.map((region) => (
            <Link
              key={region.slug}
              href={`/global-millets/${region.slug}`}
            >
              <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                <Card variant="outlined" className="h-full hover:border-earth-500 transition-colors">
                  <CardBody>
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <h2 className="font-heading text-xl font-bold text-earth-100">
                        {region.region}
                      </h2>
                      <Badge
                        variant={continentBadgeVariant[region.continent] || 'default'}
                        size="sm"
                      >
                        {region.continent}
                      </Badge>
                    </div>

                    <p className="text-sm text-earth-300 leading-relaxed mb-4">
                      {region.tagline}
                    </p>

                    <p className="text-xs text-earth-400 mb-3">
                      <span className="font-medium text-earth-300">Countries:</span>{' '}
                      {region.countries.join(', ')}
                    </p>

                    {/* Key Fact Highlight */}
                    <div className="bg-earth-800 rounded-lg p-3 mb-3">
                      <p className="text-xs text-earth-400 uppercase tracking-wider font-semibold mb-1">
                        Key Fact
                      </p>
                      <p className="text-xs text-earth-300 leading-relaxed line-clamp-3">
                        {region.keyFact}
                      </p>
                    </div>

                    <div className="flex items-center justify-end">
                      <span className="text-xs text-earth-400 font-medium">
                        Explore &rarr;
                      </span>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <div className="content-wrapper pb-8">
        <div className="border-t border-earth-700 pt-6 mt-10">
          <p className="text-xs text-earth-400 leading-relaxed max-w-3xl">
            <strong>Disclaimer:</strong> This content is created with the assistance of AI and is intended for educational purposes only. While we strive for accuracy, information may contain errors or be incomplete. Always do your own research and consult qualified professionals (nutritionists, doctors, agricultural experts) before making decisions based on this content. This website does not provide medical, nutritional, or agricultural advice.
          </p>
        </div>
      </div>
    </main>
  );
}
