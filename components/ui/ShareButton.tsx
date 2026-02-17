'use client';

interface ShareButtonProps {
  title: string;
  slug: string;
}

export default function ShareButton({ title, slug }: ShareButtonProps) {
  const handleShare = () => {
    const url = `${window.location.origin}/recipes/${slug}`;
    const text = `Check out this ${title} recipe on Simply Millets!\n${url}`;

    if (typeof navigator !== 'undefined' && navigator.share) {
      navigator.share({ title, text, url }).catch(() => {
        // User cancelled or share failed — fall back to WhatsApp
        openWhatsApp(text);
      });
    } else {
      openWhatsApp(text);
    }
  };

  const openWhatsApp = (text: string) => {
    window.open(
      `https://wa.me/?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <button
      onClick={handleShare}
      className="inline-flex items-center justify-center gap-2 w-full px-5 py-2.5 rounded-lg border-2 border-forest-600 text-forest-400 hover:bg-forest-600 hover:text-white transition font-medium cursor-pointer"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
        <polyline points="16 6 12 2 8 6" />
        <line x1="12" y1="2" x2="12" y2="15" />
      </svg>
      Share Recipe
    </button>
  );
}
