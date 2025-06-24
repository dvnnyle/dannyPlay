import React from 'react';

export default function NewsPage() {
  return (
    <>
      <div className="rectangle">
        <h1 className="pagetitle">test side</h1>
      </div>
      <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', paddingTop: 40 }}>
        <h2>Nyheter</h2>
        {/* Embedded Instagram feed below */}
        <div style={{ width: '100%', maxWidth: 400, margin: '12px auto' }}>
          {/* Instagram official embed widget for profile, short enough to hide scroll */}
          <iframe
            title="Instagram Feed"
            src="https://www.instagram.com/playworld.kristiansand/embed"
            width="100%"
            height="460"
            style={{ border: 0, borderRadius: 12, overflow: 'hidden' }}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        {/* Embedded TikTok profile below (note: TikTok does not officially support profile embedding, may not work in all browsers) */}
        <div style={{ width: '100%', maxWidth: 400, margin: '12px auto' }}>
          <iframe
            title="TikTok Profile"
            src="https://www.tiktok.com/@playworld_kristiansand"
            width="100%"
            height="600"
            style={{ border: 0, borderRadius: 12, overflow: 'hidden' }}
            allow="autoplay; encrypted-media"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
}
