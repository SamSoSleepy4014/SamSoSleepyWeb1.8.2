import { DownloadCard } from './DownloadCard';

const mcUis = [
  {
    title: "Modern UI Pack",
    info: "A sleek and modern interface redesign for better user experience",
    linkImages: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop",
    linkDownload: "#"
  },
  {
    title: "Minimalist UI",
    info: "Clean and minimal interface that focuses on gameplay",
    linkImages: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop",
    linkDownload: "#"
  },
  {
    title: "Fantasy Theme UI",
    info: "Medieval fantasy themed interface with custom textures",
    linkImages: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=800&auto=format&fit=crop",
    linkDownload: "#"
  }
];

export function McUiPage() {
  return (
    <div className="container mx-auto">
      <h2 className="text-white mb-8 text-center">UI Modifications</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mcUis.map((ui, index) => (
          <DownloadCard
            key={index}
            title={ui.title}
            info={ui.info}
            linkImages={ui.linkImages}
            linkDownload={ui.linkDownload}
          />
        ))}
      </div>
    </div>
  );
}
