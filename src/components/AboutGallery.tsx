"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export function AboutGallery() {
  const { t } = useLanguage();

  const galleryImages = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBQUhqbGfY8xTHzxeCV1sgjUijd154V0x_6OI81p4TNVpEkXxm90YHXotbFEdmeCEgNUcgHKCTHX3pdsqj5I8CfyG-8TuVtJ6FkpEitrnX316085n_o_D0taasqzY_obUXPlXxeeVqTuWq5GJzyiiVK-Qp-5qTxWSpv79xqamkY3l6Q-jS48ah-KD2S2pJYj_UB1MpuUEbBjGzifXoauf4stq7xGWy78ifzC1T9GVNmKlfL2TfxVA9A",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBY_aGcuWrknOJUfwpuUqvdYNqZYzKBWiNDdcNzX5exrtyEUbxvkjH6Bz-J-bsYyDaRvcjM6gos4Ajipu7kX6QDpxpLCIKQDH9UyffRREL4ooJu_47SGR7VwchHjvAW5GCyOybU6TqAtodvU7yWtBjKASgNrdF_Kexg7RS2qTHLl9VXCELoym3VT4r0f67p0i8sz-FpZfg3yeFIeVfKYfyKpmQDszQMLc_WiZfCQkZ1gUdAQ3rNBsC2",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDPbbLeAxM4R4V8oMbFaQxqJZ3yaa3PWbVrbjTf3-qzNZKYYRE6Zx3e_YTcHQ8KXDi-hXjkV2MILmjD5HrrHWGLmytg4ZANZi0Uy-CFR2YBebqoWp2bozlxY140NvL9bjsvbqBUZ5TYb6jIcRp42vh-FzA7MmCfUIvK1D9wj0pE8mHhTBJ7OV15mY8Jirm0Rgvjb7fFVBKl8MUxPc2EVSuU3oY2VVbbG9sSwhjHBx3PeMGC6h2Q2_rZ",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC77s3t2FZugyV8vDQQ0kf3BPNWz9GyuAn3dHWMfok2TbirQ7QTfkLohRd02JRdAyLyB1qyi0n1_U-BoKVLGBX5rtGbxla_fhX8eEAjqtWCVutWl95vpyLThR6pENmf9dRxs_x0Ij0r4bXa2ohv7GwbW8Alx0HFyWUX2sDOWNSaS2-YUrOvSUna7Iz46ak6yg05zHl_TDuRul1Rz_DObk46le0naNfi149DS9kAFEuehZ_bpUQLsGhQ",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBClpfyJPSUW2iosPr-PhppfZLgBNVsZo3_83RfyHbCTQWZCWG5_BZREuJvPO4Rzjf0XObjT705LhOoAMsldx7cz7SYGVRokFChMNXXoEezMl2eOoyW9Pdwzak2yEpHoET1Ak6yNsZFysZEOqUTRUwrsbDM463lYDcqcGBIjHuhi76UykqqHLw0oJwp0Yqkev3fyZIRZ3MH5inxZBUFf0Cpfpq8gjds6y1dWUSxkrK2DW0V-dvlyiPv"
  ];

  // Double the images array to support infinite loop styling
  const loopImages = [...galleryImages, ...galleryImages];
  const loopAlts = [...t.about.gallery.bgAlts, ...t.about.gallery.bgAlts];

  return (
    <section className="py-12 overflow-hidden bg-surface">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll-infinite {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .scrolling-wrapper {
          display: flex;
          gap: 16px;
          animation: scroll-infinite 45s linear infinite;
        }
        [dir="rtl"] .scrolling-wrapper {
          animation: scroll-infinite 45s linear infinite reverse;
        }
      `}} />
      <div className="scrolling-wrapper">
        {loopImages.map((src, index) => (
          <div
            key={index}
            className="min-w-[300px] h-[200px] rounded-xl overflow-hidden shadow-sm relative flex-shrink-0"
          >
            <Image
              src={src}
              alt={loopAlts[index]}
              fill
              sizes="300px"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
