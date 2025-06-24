import React, { useEffect, useRef, useState } from 'react';

export default function SocialEmbeds() {
  const tiktokRef = useRef(null);
  const [igLoaded, setIgLoaded] = useState(false);
  const [ttLoaded, setTtLoaded] = useState(false);

  useEffect(() => {
    // Remove any previous TikTok embed.js scripts to avoid duplicates
    const prev = document.querySelector('script[src="https://www.tiktok.com/embed.js"]');
    if (prev) prev.remove();
    // Add TikTok embed.js script
    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    if (tiktokRef.current) {
      tiktokRef.current.parentNode.appendChild(script);
    } else {
      document.body.appendChild(script);
    }
    // TikTok embed does not have a reliable onLoad, so fade in after a short delay
    let timeout = setTimeout(() => setTtLoaded(true), 1200);
    return () => {
      script.remove();
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div style={{ width: 'calc(100% - 24px)', maxWidth: 400, margin: '-12px auto 12px auto', borderRadius: 20, overflow: 'hidden' }}>
      <iframe
        title="Instagram Feed"
        src="https://www.instagram.com/playworld.kristiansand/embed"
        width="100%"
        height="454"
        style={{ border: 0, borderRadius: 20, overflow: 'hidden', marginBottom: -12, opacity: igLoaded ? 1 : 0, transition: 'opacity 0.6s' }}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
        loading="lazy"
        onLoad={() => setIgLoaded(true)}
      ></iframe>
      <div style={{ position: 'relative', height: 454, marginBottom: -12 }}>
        <blockquote
          ref={tiktokRef}
          className="tiktok-embed"
          cite="https://www.tiktok.com/@playworld_kristiansand"
          data-unique-id="playworld_kristiansand"
          data-embed-type="creator"
          style={{ border: 0, borderRadius: 20, overflow: 'hidden', width: '100%', height: '100%', background: '#f6f6f6', opacity: ttLoaded ? 1 : 0, transition: 'opacity 0.7s' }}
        >
          <section>
            <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@playworld_kristiansand?refer=creator_embed">@playworld_kristiansand</a>
          </section>
        </blockquote>
      </div>
    </div>
  );
}
