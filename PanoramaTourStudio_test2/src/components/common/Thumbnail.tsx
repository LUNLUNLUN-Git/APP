import React, { useState, useEffect } from 'react';
import { useStore } from '../../store/useStore';

interface ThumbnailProps {
  blobId: string | undefined;
  className?: string;
}

export function Thumbnail({ blobId, className }: ThumbnailProps) {
  const [url, setUrl] = useState('');
  const { loadBlobUrl } = useStore();

  useEffect(() => {
    let active = true;
    setUrl(''); // Clear previous URL immediately when blobId changes to avoid showing stale data
    if (blobId) {
      loadBlobUrl(blobId).then(objectUrl => {
        if (active && objectUrl) setUrl(objectUrl);
      });
    } else {
      setUrl('');
    }
    return () => {
      active = false;
    };
  }, [blobId, loadBlobUrl]);

  if (!blobId) return null;
  if (!url) return <div className="w-full h-full bg-[#1a1816] animate-pulse" />;
  
  return <img src={url} alt="" className={className || "w-full h-full object-cover"} />;
}
