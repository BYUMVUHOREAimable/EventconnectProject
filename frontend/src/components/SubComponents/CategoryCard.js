import React from 'react';
import image from '../../assets/background.jpg';

export default function CategoryCard() {
     return (
          <div className="bg-gradient-to-b from-purple-900 to-green-600 sm:w-[10em] md:w-[12em]  w-[10em] aspect-square rounded-3xl relative shadow-md">
               <svg
                    className="absolute top-0 right-0 filter drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
                    viewBox="0 0 169 160"
               >
                    <g filter="url(.shadow-2xl) ">
                         <path
                              d="M6.04476 34.7545L36.0657 1.64165C37.0135 0.596247 38.3588 0 39.7699 0H148.663C165.747 0.891026 168.311 15.5498 167.972 21.5283V66.5385C167.972 67.7994 167.496 69.0137 166.639 69.9383L106.305 135.002C104.311 137.152 100.904 137.132 98.9342 134.96L74.1365 107.608C72.4088 105.703 72.4088 102.797 74.1365 100.892L82.2751 91.9148C84.0028 90.0092 84.0028 87.1037 82.2751 85.1981L59.5516 60.1341C57.5671 57.9453 54.1276 57.9453 52.1431 60.1341L41.2583 72.14C39.2738 74.3289 35.8342 74.3289 33.8498 72.14L6.04476 41.4713C4.31709 39.5657 4.31709 36.6602 6.04476 34.7545Z"
                              fill="url(#pattern0)"
                              shape-rendering="auto"
                         />
                    </g>
                    <defs>
                         <filter
                              id="filter0_d_253_1337"
                              x="0"
                              y="0"
                              width="100%"
                              height="100%"
                              filterUnits="userSpaceOnUse"
                              color-interpolation-filters="sRGB"
                         >
                              <feFlood flood-opacity="0" result="BackgroundImageFix" />
                              <feColorMatrix
                                   in="SourceAlpha"
                                   type="matrix"
                                   values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha"
                              />
                              <feOffset dy="4" />
                              <feGaussianBlur stdDeviation="2" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix
                                   type="matrix"
                                   values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                              />
                              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_253_1337" />
                              <feBlend
                                   mode="normal"
                                   in="SourceGraphic"
                                   in2="effect1_dropShadow_253_1337"
                                   result="shape"
                              />
                         </filter>
                         <pattern
                              id="pattern0"
                              patternContentUnits="objectBoundingBox"
                              width="1"
                              height="1"
                         >
                              <use
                                   xlinkHref="#image0_253_1337"
                                   transform="matrix(0.00117003 0 0 0.00138889 -0.131818 0)"
                              />
                         </pattern>
                         <image
                              id="image0_253_1337"
                              width="1080"
                              height="720"
                              xlinkHref={image}
                         />
                    </defs>
               </svg>
          </div>
     );
}
