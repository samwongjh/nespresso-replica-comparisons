import { useState } from 'react';
import { Coffee } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackTitle,
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`w-full h-full bg-gradient-to-br from-[#282523] to-[#1B1918] flex flex-col items-center justify-center p-4 text-center text-[#FAF9F6] ${className}`}
      >
        <Coffee className="w-6 h-6 text-[#C9A97E] mb-2" aria-hidden="true" />
        <span className="font-serif text-sm font-medium">{fallbackTitle || alt}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
