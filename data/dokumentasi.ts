export interface DocumentationPhoto {
  src: string;
  alt: string;
}

export interface DocumentationDay {
  label: string; // contoh: "Day 1"
  date: string; // contoh: "26 Oktober 2026"
  photos: DocumentationPhoto[];
}

// Pembagian foto per hari mengikuti penamaan dari user (day 1, day 2, day 3)
export const DOKUMENTASI: DocumentationDay[] = [
  {
    label: "Day 1",
    date: "26 Oktober 2026",
    photos: [
      {
        src: "/images/dokumentasi/day-1/day-1-01.jpeg",
        alt: "Dokumentasi AZZURA X ANEXPO2026 — Day 1, aktivitas di booth AZZURA",
      },
      {
        src: "/images/dokumentasi/day-1/day-1-02.jpeg",
        alt: "Tim AZZURA X ANEXPO2026 berpose di booth",
      },
    ],
  },
  {
    label: "Day 2",
    date: "27 Oktober 2026",
    photos: [
      {
        src: "/images/dokumentasi/day-2/day-2-01.jpeg",
        alt: "Pengunjung menerima produk AZZURA di booth ANEXPO",
      },
      {
        src: "/images/dokumentasi/day-2/day-2-02.jpeg",
        alt: "Booth AZZURA Discover the Difference di ANEXPO2026",
      },
      {
        src: "/images/dokumentasi/day-2/day-2-03.jpeg",
        alt: "Wawancara di booth AZZURA dengan kulkas Lip Velvet",
      },
      {
        src: "/images/dokumentasi/day-2/day-2-04.jpeg",
        alt: "Momen pembagian hadiah di panggung ANEXPO2026 dengan maskot",
      },
      {
        src: "/images/dokumentasi/day-2/day-2-05.jpeg",
        alt: "Pengunjung berseri-seri di area booth AZZURA",
      },
      {
        src: "/images/dokumentasi/day-2/day-2-06.jpeg",
        alt: "Tim AZZURA di depan booth AZZURA Discover the Difference",
      },
      {
        src: "/images/dokumentasi/day-2/day-2-07.jpeg",
        alt: "Live performance di panggung ANEXPO dengan banner AZZURA Eyebrow",
      },
    ],
  },
  {
    label: "Day 3",
    date: "28 Oktober 2026",
    photos: [
      {
        src: "/images/dokumentasi/day-3/day-3-01.jpeg",
        alt: "Dokumentasi AZZURA X ANEXPO2026 — Day 3, kegiatan di booth",
      },
      {
        src: "/images/dokumentasi/day-3/day-3-02.jpeg",
        alt: "Dokumentasi AZZURA X ANEXPO2026 — Day 3, kegiatan di booth",
      },
      {
        src: "/images/dokumentasi/day-3/day-3-03.jpeg",
        alt: "Dokumentasi AZZURA X ANEXPO2026 — Day 3, kegiatan di booth",
      },
      {
        src: "/images/dokumentasi/day-3/day-3-04.jpeg",
        alt: "Dokumentasi AZZURA X ANEXPO2026 — Day 3, tim di booth AZZURA",
      },
    ],
  },
];
