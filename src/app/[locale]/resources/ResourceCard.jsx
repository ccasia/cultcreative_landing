"use client";

import { useRouter } from "@/i18n/routing";

const ResourceCard = ({ article }) => {
  const router = useRouter();

  const handleClick = () => {
    if (article.path) {
      router.push(article.path);
    }
  };

  return (
    <div
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
      onClick={handleClick}
    >
      <div className="p-4">
        <div className="aspect-video bg-gray-200 relative overflow-hidden rounded-2xl">
          <img 
            src={article.imagev2 || article.image} 
            alt={article.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='16' fill='%236b7280' text-anchor='middle' dy='.3em'%3EImage placeholder%3C/text%3E%3C/svg%3E";
            }}
          />
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <span 
            className="text-sm"
            style={{
              fontFamily: 'Aileron',
              fontWeight: 700,
              color: '#231F20'
            }}
          >
            Written by
          </span>
          <span className="text-black">|</span>
          <span 
            className="text-sm"
            style={{
              fontFamily: 'Aileron',
              fontWeight: 400,
              color: '#000'
            }}
          >
            {article.author}
          </span>
        </div>
        <h3 
          className="font-bold leading-tight line-clamp-3"
          style={{
            fontFamily: 'Aileron',
            fontWeight: 700,
            fontSize: '32px',
            lineHeight: '32px',
            letterSpacing: '-6%',
            color: '#231F20'
          }}
        >
          {article.title}
        </h3>
      </div>
    </div>
  );
};

export default ResourceCard;
