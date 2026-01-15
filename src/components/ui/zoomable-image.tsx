"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ZoomableImageProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  zoomScale?: number;
  className?: string;
}

export function ZoomableImage({
  src,
  alt = "",
  width = 2400,
  height = 1292,
  zoomScale = 2.5,
  className,
}: ZoomableImageProps) {
  const [transformOrigin, setTransformOrigin] = useState("50% 50%");
  const [isZoomed, setIsZoomed] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !isMounted) return;

    if (!hasMoved) setHasMoved(true);

    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setTransformOrigin(`${x}% ${y}%`);
  };

  const shouldZoom = isZoomed && isMounted && hasMoved;

  return (
    <div
      ref={containerRef}
      className={cn(
        "cursor-zoom-in overflow-hidden",
        className
      )}
      onMouseEnter={() => setIsZoomed(true)}
      onMouseLeave={() => {
        setIsZoomed(false);
        setHasMoved(false);
      }}
      onMouseMove={handleMouseMove}
    >
      <div
        className="h-full w-full will-change-transform"
        style={{
          transformOrigin,
          transition: "transform 0.2s ease-out",
          transform: shouldZoom ? `scale(${zoomScale})` : "scale(1)",
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
