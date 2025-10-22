interface NavigationSidebarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function NavigationSidebar({ currentPage, onNavigate }: NavigationSidebarProps) {
  const menuItems = ['Home', 'Addon', 'Map', 'McUi'];

  return (
    <div 
      className="relative w-64 py-12"
      style={{
        transform: 'skewX(-3deg)',
        transformOrigin: 'top left'
      }}
    >
      {/* Skewed background */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        style={{
          boxShadow: '0 0 50px rgba(0, 0, 0, 0.5)'
        }}
      />
      
      {/* Menu items */}
      <div 
        className="relative flex flex-col gap-4 px-8"
        style={{
          transform: 'skewX(3deg)'
        }}
      >
        {menuItems.map((item) => (
          <button
            key={item}
            onClick={() => onNavigate(item)}
            className="relative group"
            style={{
              transform: 'skewX(-5deg)'
            }}
          >
            <div 
              className={`
                px-6 py-4 transition-all duration-300
                ${currentPage === item 
                  ? 'bg-white/20 shadow-lg shadow-white/10' 
                  : 'bg-white/5 hover:bg-white/10'
                }
              `}
              style={{
                clipPath: 'polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)'
              }}
            >
              <span 
                className={`
                  block text-center transition-colors duration-300
                  ${currentPage === item 
                    ? 'text-white' 
                    : 'text-white/70 group-hover:text-white'
                  }
                `}
                style={{
                  transform: 'skewX(5deg)',
                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
                }}
              >
                {item}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
