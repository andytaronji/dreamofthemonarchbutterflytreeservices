'use client';

const LocalBusinessSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Dream of the Monarch Butterfly Tree Services",
    "image": "https://res.cloudinary.com/di4phdven/image/upload/f_jpg,q_auto/v1745939117/IMG_1263_xgijg2.jpg",
    "url": "https://dreamofthemonarchbutterfly.com",
    "telephone": "678-898-1156",
    "email": "hernandezanallely2@gmail.com",
    "description": "Professional arborist services in Roswell, Johns Creek, Alpharetta, Marietta, Sandy Springs, Smyrna, Atlanta & Cumming. Expert tree pruning, removal, stump grinding & emergency services.",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "GA",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 33.7676338,
      "longitude": -84.5606888
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Roswell",
        "sameAs": "https://en.wikipedia.org/wiki/Roswell,_Georgia"
      },
      {
        "@type": "City",
        "name": "Johns Creek",
        "sameAs": "https://en.wikipedia.org/wiki/Johns_Creek,_Georgia"
      },
      {
        "@type": "City",
        "name": "Alpharetta",
        "sameAs": "https://en.wikipedia.org/wiki/Alpharetta,_Georgia"
      },
      {
        "@type": "City",
        "name": "Marietta",
        "sameAs": "https://en.wikipedia.org/wiki/Marietta,_Georgia"
      },
      {
        "@type": "City",
        "name": "Sandy Springs",
        "sameAs": "https://en.wikipedia.org/wiki/Sandy_Springs,_Georgia"
      },
      {
        "@type": "City",
        "name": "Smyrna",
        "sameAs": "https://en.wikipedia.org/wiki/Smyrna,_Georgia"
      },
      {
        "@type": "City",
        "name": "Atlanta",
        "sameAs": "https://en.wikipedia.org/wiki/Atlanta"
      },
      {
        "@type": "City",
        "name": "Cumming",
        "sameAs": "https://en.wikipedia.org/wiki/Cumming,_Georgia"
      }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "16:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/people/Dream-Of-The-Monarch-Butterfly-Tree-Service/61552768919122/",
      "https://www.instagram.com/dreamofthemonarchbutterfly/",
      "https://www.google.com/maps/place/Dream+Of+The+Monarch+Butterfly+Tree+Services+LLC/@34.0449836,-84.3401891,12z/data=!4m6!3m5!1s0x21487aa2ba3562f1:0x15845caf9885f313!8m2!3d34.0449836!4d-84.3401891!16s%2Fg%2F11l5r4c95q?sa=X&ved=2ahUKEwi42JrQ1-eCAxVTSjABHTiBBtYQ_BJ6BAhGEAA&hl=en&entry=tts"
    ],
    "priceRange": "$$",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Tree Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Tree Pruning & Trimming",
            "description": "Expert pruning to improve tree health, appearance, and safety while promoting proper growth patterns."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Tree Removal",
            "description": "Safe and efficient removal of dead, diseased, or unwanted trees with minimal impact to surrounding areas."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Stump Grinding & Removal",
            "description": "Complete elimination of tree stumps to reclaim your yard space and prevent pest infestations."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Emergency Tree Services",
            "description": "24/7 emergency response for fallen trees, dangerous limbs, and storm damage."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Tree Health Consultation",
            "description": "Expert assessment of tree health and recommendations for care and maintenance."
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default LocalBusinessSchema;
