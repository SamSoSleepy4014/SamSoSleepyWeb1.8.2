import { DownloadCard } from './DownloadCard';

const addons = [
  {
    title: "Addon1",
    info: "Addon info",
    linkImages: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNwHa-lZdpd3EqKSOf7wrvhuW-yzyNr72B3w&s",
    linkDownload: "https://www.mediafire.com/file/sv555z84zupxwq7/AFK_Farms_Add-On_%2528addon%2529_%2528MDF%2529.mcaddon/file"
  },
  {
    title: "Enhanced Tools Pack",
    info: "A collection of enhanced tools with special abilities and durability",
    linkImages: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop",
    linkDownload: "#"
  },
  {
    title: "Magic Spells Addon",
    info: "Add magical spells and abilities to your gameplay experience",
    linkImages: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&auto=format&fit=crop",
    linkDownload: "#"
  }
];

export function AddonPage() {
  return (
    <div className="container mx-auto">
      <h2 className="text-white mb-8 text-center">Addons Collection</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {addons.map((addon, index) => (
          <DownloadCard
            key={index}
            title={addon.title}
            info={addon.info}
            linkImages={addon.linkImages}
            linkDownload={addon.linkDownload}
          />
        ))}
      </div>
    </div>
  );
}
