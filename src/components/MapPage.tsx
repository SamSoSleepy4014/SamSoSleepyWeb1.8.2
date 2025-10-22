import { DownloadCard } from './DownloadCard';

const maps = [
  {
    title: "Adventure Island",
    info: "Explore a massive island filled with secrets and challenges",
    linkImages: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&auto=format&fit=crop",
    linkDownload: "#"
  },
  {
    title: "Sky Castle",
    info: "A magnificent castle floating in the sky with parkour challenges",
    linkImages: "https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?w=800&auto=format&fit=crop",
    linkDownload: "#"
  },
  {
    title: "Underwater City",
    info: "Discover the ruins of an ancient underwater civilization",
    linkImages: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&auto=format&fit=crop",
    linkDownload: "#"
  }
];

export function MapPage() {
  return (
    <div className="container mx-auto">
      <h2 className="text-white mb-8 text-center">Maps Collection</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {maps.map((map, index) => (
          <DownloadCard
            key={index}
            title={map.title}
            info={map.info}
            linkImages={map.linkImages}
            linkDownload={map.linkDownload}
          />
        ))}
      </div>
    </div>
  );
}
