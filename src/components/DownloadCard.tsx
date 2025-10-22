import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Download } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface DownloadCardProps {
  title: string;
  info: string;
  linkImages: string;
  linkDownload: string;
}

export function DownloadCard({ title, info, linkImages, linkDownload }: DownloadCardProps) {
  return (
    <Card className="bg-black/40 backdrop-blur-md border-white/10 overflow-hidden hover:border-white/30 transition-all duration-300 hover:shadow-xl hover:shadow-white/5">
      <div className="aspect-video w-full overflow-hidden bg-black/20">
        <ImageWithFallback
          src={linkImages}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <CardHeader>
        <CardTitle className="text-white">{title}</CardTitle>
        <CardDescription className="text-white/70">{info}</CardDescription>
      </CardHeader>
      
      <CardFooter>
        <Button 
          asChild
          className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20"
        >
          <a 
            href={linkDownload}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
