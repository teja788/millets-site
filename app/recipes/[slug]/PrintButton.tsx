'use client';

import { Printer } from 'lucide-react';

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="inline-flex items-center justify-center gap-2 w-full px-5 py-2.5 rounded-lg border-2 border-earth-500 text-earth-500 hover:bg-earth-500 hover:text-white transition font-medium cursor-pointer"
    >
      <Printer className="w-4 h-4" />
      Print Recipe
    </button>
  );
}
