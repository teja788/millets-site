import Image from 'next/image';

interface PageBannerProps {
  src: string;
  alt: string;
}

export default function PageBanner({ src, alt }: PageBannerProps) {
  return (
    <div className="content-wrapper pt-4">
      <div className="relative h-40 md:h-56 overflow-hidden rounded-2xl">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 1280px) 100vw, 1200px"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-earth-950/15 via-transparent to-earth-950/10" />
      </div>
    </div>
  );
}
