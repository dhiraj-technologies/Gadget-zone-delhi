import React, { useState } from 'react';
import { Camera } from 'lucide-react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showBadge?: boolean;
  className?: string;
  allowChange?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  showBadge = false,
  className = '',
}) => {
  const defaultLogoSrc = '/assets/Screenshot_20260903_000848_Instagram.jpg';
  const fallbackLogoSrc = '/assets/gadgetzone-logo.jpg';
  const [logoSrc, setLogoSrc] = useState<string>(defaultLogoSrc);
  const [imgError, setImgError] = useState(false);

  const handleImageError = () => {
    if (logoSrc !== fallbackLogoSrc) {
      setLogoSrc(fallbackLogoSrc);
    } else {
      setImgError(true);
    }
  };

  const sizeClasses = {
    sm: 'w-9 h-9 min-w-[36px]',
    md: 'w-11 h-11 min-w-[44px]',
    lg: 'w-16 h-16 min-w-[64px]',
    xl: 'w-24 h-24 min-w-[96px]',
  };

  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${className}`}>
      <div className={`relative ${sizeClasses[size]} rounded-full overflow-hidden border border-slate-700/80 bg-slate-900 shadow-sm`}>
        {!imgError ? (
          <img
            src={logoSrc}
            alt="Gadget Zone Delhi • DSLR Camera Hub"
            className="w-full h-full object-cover object-center"
            onError={handleImageError}
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-full h-full bg-slate-800 flex items-center justify-center text-slate-300">
            <Camera className="w-1/2 h-1/2" />
          </div>
        )}
      </div>

      {showBadge && (
        <span
          className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-amber-500 rounded-full ring-2 ring-[#0b0f17]"
          title="Verified Store Delhi"
        />
      )}
    </div>
  );
};
