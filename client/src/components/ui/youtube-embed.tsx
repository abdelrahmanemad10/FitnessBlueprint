import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
}

export function YouTubeEmbed({ videoId, title }: YouTubeEmbedProps) {
  const [loading, setLoading] = useState(true);

  return (
    <div className="w-full overflow-hidden rounded-t-lg">
      <AspectRatio ratio={16 / 9}>
        {loading && (
          <Skeleton className="absolute inset-0 z-0 bg-muted rounded-none" />
        )}
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 z-10"
          onLoad={() => setLoading(false)}
        ></iframe>
      </AspectRatio>
    </div>
  );
}
