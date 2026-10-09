"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export function ServicesGrid() {
  const { t } = useLanguage();

  const solutionImages = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDrry4wT6gpE_0wExr3NDSL3jA7t3lRIU-SdhcQXq_NQur3YXEUyXSz-8ANvoYaB25IJHAFTHp29t-Tiy_FM5BifMdKe98z-eZdJ2dZNShjYbP2IC_6APkJhSIlUHhx03w0QgsjHUnKKWrYUMQb-jmm54yUjlKJozyxW2Upa0ZuLw4XTsX-7Lm5lSNjzZ5lt9dtZn5gypCn08WZKtQK4v7d9oWZP1wsweS95vQFD062K3ndORzHPqnc",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCQ25rfK9mNb9bD-Nm70bFmThKa7iaDdi3ks68gB2bVEYSKuyTmOvmKukdd0L7CpOb6khDj2DZl031M8DMW5ZjuKB1JfsrsFQD4JFjCtec0tKVDsgYbUugvpDpAQ-3u_8iNK_7Cm-LBLRZTRe9xkXmAsg7K1rYzWpHwr1tlUifFiZjO-DurWiJSdkyB52NDwJCyo5GdjlnDJ5iJL1bMUuad5geeY7_p58OdLpNbb_OW71cqNDSowgN5",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAblU7o1i1g7m4NvixuZXhPdYrd1OBHllOHNdaipSJfGxICg54rmgvCdOqE6XHHISPcS3Br_VM60Aomy-8LrCP9DIwoGGQbxxE6_VFxQgB23oHulhJiDrVwHrc40ota5xvFg2xmopJ2Tulu-MuR2l_7SIxoDVyFRcjj_F5C9Nr6A23P-CY1J9bNtiCypobnThpEzqHCEgheptOhtv0H-8dgrbawlbcHS6ymCriqIVna56zwA2KpoC2B",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAZOEPZYQjlZ8aPK1mXI8sxp3YmAWU4kn8DAUnvJCt1BU14kkFD7Tkuqdq0FbA48XP1IOX2NxWByGPFDTYMs67G8FERBls9sTRpznsN2s9wXB_ayPcc7deve9zD_Ctrwy8CFUNduBybegsprnEZzQD8k6QqiWTpyTxI1f3ox-C5S78LTd86aQlecYYzM5fIfWeIY1n5xP-VVsFNMvQSqKKHUNNK3VpkToEHYsTn8uCNbkWXr0C0gHID",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBL-2G-38SWCCbWhDztWMnCCHDQyYWAZdE52Ta6vSpMm14kHdRFeSq8JA-XEjfdqxDohq6jeKLh21kKBiHcGWHePpExwsJXGPolUKWOVBt0f1Lpv75p6viPjw74HdFE1zlWy8Cyuvue6E0Gsp6GqGYb3MCPVzrV7V9o-fzKd3rS5CCMSZsKFb7c-PXrEBy_VgKhmVT-0_sThAQFyjDpvqu2Hya197Bqk_YOrUQKaAHkE54nktXUw-8D",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuARWmcD10stxmJLG0mIUPblmBQhVRHuGbw4_RpwPWta9mQMO1SQ2f6cn6QFEV6jEGB1GEA2eMiIt89txW7-YLB6msYCQQ-z5LLNCWmeg1Sjziwtc2gB9naWn9ku5tVxf-HxssXwvSQc5fYD0TVpZUqqWHY-MSRrtacVKvbh5HEZQPrhy43Lp1qV45o5zJPgWrMr4Tv5cXr350ebsDRdhq380ScmNavRcMOvelVpI9xiWOJi7i1n4_8o",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAe7QJ02-KZR6_kES1qxTuiUXexyrwt9TyGSPYH8XFw9uw_WP3GL06GjCrJPqISOKcYaGFZGe8t5Yl0bOFMjOI0vi4trSsaNg0fK8w8bNgrarjBQQALJDNLFqsrufDyzWiOJaAA2KmPfC8e8XLGFTxfcQjPN5AM-h17WaV1HH_-TlhX5XQze1xe1VMD-XOKM8bqWdXfE4stGLt9gUupa-LXQbqXtGa0SWFHRNU4I2kihU8q5odoNFrw",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBgfmbzreksIK-0cXstMdNumNVgcrNxs1lovZp4TSQYD9lcIV3aLnx3Qtw6xamOWWQ46viGyavjzS-4DXDDVDnqRQFXVckwqfVt5qZ0YvkzZgKQxqzPopPmfvHAQsIFj0IVEabBFiv1CtweORarE9JUBrniYEdYIr8UHXwY4YhjS3vkvZ6otTmHUMiuiWR0Z0SFRBxQ8z2HnF195eFuBnleyOljO-L54eaGvWxgSoXYTHSfydeZkKjF"
  ];

  return (
    <section className="py-16 md:py-section-gap bg-surface-container-low px-4 md:px-margin-desktop text-center">
      <div className="max-w-container-max mx-auto">
        <div className="mb-16 space-y-4">
          <h2 className="text-2xl md:text-4xl font-bold text-primary">
            {t.servicesPage.solutions.title}
          </h2>
          <div className="w-24 h-1 bg-tertiary-fixed-dim mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {t.servicesPage.solutions.items.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-[20px] border border-outline-variant/30 overflow-hidden hover:-translate-y-1 transition-transform duration-300 text-start flex flex-col shadow-sm"
            >
              <div className="h-48 overflow-hidden relative">
                <Image
                  src={solutionImages[index]}
                  alt={item.bgAlt}
                  fill
                  sizes="(max-w-768px) 100vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-lg font-bold text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-secondary leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
