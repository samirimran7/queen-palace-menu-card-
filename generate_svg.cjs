const fs = require('fs');

function getLogoSvg({ transparent = false } = {}) {
  const bgMarkup = transparent ? '' : `
    <!-- Website Royal Emerald Green Vignette Background -->
    <rect width="800" height="800" fill="url(#bgRadialEmerald)"/>
    <rect width="800" height="800" fill="url(#vignetteShade)" opacity="0.65"/>
    <!-- Subtle Golden Ambient Radiance behind crest -->
    <circle cx="400" cy="370" r="260" fill="url(#ambientGoldHalo)" opacity="0.32"/>
  `;

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="100%" height="100%">
  <defs>
    <!-- Google Fonts for typography -->
    <style type="text/css">
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;0,900;1,700&amp;family=Pinyon+Script&amp;family=Alex+Brush&amp;display=swap');
      .brand-name {
        font-family: 'Playfair Display', 'Bodoni MT', 'Didot', 'Cinzel', Georgia, serif;
        font-weight: 800;
        font-size: 68px;
        fill: #fdfaf3;
        letter-spacing: 1.5px;
      }
      .brand-sub {
        font-family: 'Pinyon Script', 'Alex Brush', 'Brush Script MT', 'Great Vibes', cursive;
        font-size: 44px;
        font-style: italic;
        fill: url(#goldScriptGrad);
        letter-spacing: 1px;
      }
    </style>

    <!-- Emerald Vignette Gradients (Matching website colors) -->
    <radialGradient id="bgRadialEmerald" cx="50%" cy="45%" r="65%" fx="50%" fy="40%">
      <stop offset="0%" stop-color="#145c3d"/>
      <stop offset="35%" stop-color="#0e432c"/>
      <stop offset="68%" stop-color="#072719"/>
      <stop offset="100%" stop-color="#02120a"/>
    </radialGradient>

    <radialGradient id="vignetteShade" cx="50%" cy="50%" r="70%">
      <stop offset="40%" stop-color="#000000" stop-opacity="0"/>
      <stop offset="85%" stop-color="#000000" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0.92"/>
    </radialGradient>

    <radialGradient id="ambientGoldHalo" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ffd56b" stop-opacity="0.6"/>
      <stop offset="40%" stop-color="#e2b03c" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#0e432c" stop-opacity="0"/>
    </radialGradient>

    <!-- Rich Polished Gold Gradients -->
    <!-- Primary 3D Gold Gradient for Medallion & Crown -->
    <linearGradient id="goldPrimaryGrad" x1="15%" y1="0%" x2="85%" y2="100%">
      <stop offset="0%" stop-color="#fff8db"/>
      <stop offset="20%" stop-color="#f5d67b"/>
      <stop offset="45%" stop-color="#e5b33d"/>
      <stop offset="75%" stop-color="#b67f1b"/>
      <stop offset="100%" stop-color="#734706"/>
    </linearGradient>

    <!-- Secondary Reflective Gold -->
    <linearGradient id="goldReflectiveGrad" x1="0%" y1="50%" x2="100%" y2="50%">
      <stop offset="0%" stop-color="#d69b27"/>
      <stop offset="25%" stop-color="#fae39b"/>
      <stop offset="50%" stop-color="#fff9e6"/>
      <stop offset="75%" stop-color="#e8b948"/>
      <stop offset="100%" stop-color="#9a650d"/>
    </linearGradient>

    <!-- Bevel Ring Gradient -->
    <linearGradient id="goldRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fae39b"/>
      <stop offset="30%" stop-color="#d99f2b"/>
      <stop offset="55%" stop-color="#fff4cd"/>
      <stop offset="80%" stop-color="#b8801d"/>
      <stop offset="100%" stop-color="#643b02"/>
    </linearGradient>

    <!-- Cursive Script Gold Gradient -->
    <linearGradient id="goldScriptGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#eed182"/>
      <stop offset="50%" stop-color="#fbeec6"/>
      <stop offset="100%" stop-color="#dfaa32"/>
    </linearGradient>

    <!-- Monogram Q 3D Bevel Gradient -->
    <linearGradient id="qLetterGrad" x1="20%" y1="5%" x2="80%" y2="95%">
      <stop offset="0%" stop-color="#fffbe8"/>
      <stop offset="18%" stop-color="#fae39d"/>
      <stop offset="45%" stop-color="#e5b43f"/>
      <stop offset="70%" stop-color="#c18b1f"/>
      <stop offset="90%" stop-color="#8a5609"/>
      <stop offset="100%" stop-color="#553001"/>
    </linearGradient>

    <!-- Crown Shading Gradient -->
    <linearGradient id="crownForkGrad" x1="30%" y1="0%" x2="70%" y2="100%">
      <stop offset="0%" stop-color="#fffdf0"/>
      <stop offset="20%" stop-color="#f7dd8f"/>
      <stop offset="50%" stop-color="#dfa933"/>
      <stop offset="80%" stop-color="#a46d14"/>
      <stop offset="100%" stop-color="#673d03"/>
    </linearGradient>

    <!-- Pearl Spheres Radial Gradient -->
    <radialGradient id="pearlGold" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="35%" stop-color="#fae4a2"/>
      <stop offset="70%" stop-color="#d99f2a"/>
      <stop offset="100%" stop-color="#6e4204"/>
    </radialGradient>

    <!-- Filters for Luxury Depth and Bevel -->
    <filter id="luxuryDropShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="4" stdDeviation="5" flood-color="#000000" flood-opacity="0.55"/>
    </filter>
    <filter id="softTextShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="3" stdDeviation="4" flood-color="#000000" flood-opacity="0.6"/>
    </filter>
    <filter id="goldGleam" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="1" stdDeviation="2" flood-color="#000000" flood-opacity="0.4"/>
    </filter>
  </defs>

  ${bgMarkup}

  <!-- MAIN EMBLEM GROUP (Centered at X = 400) -->
  <g id="emblem-group" filter="url(#luxuryDropShadow)">

    <!-- ==========================================
         1. CROWN WITH CENTER FORK (Royal Dining)
         ========================================== -->
    <g id="crown">
      <!-- Crown Base Curved Arch Band (resting atop medallion) -->
      <path d="M 348 268 C 364 261, 400 257, 452 268 C 454 274, 450 277, 451 280 C 400 269, 364 273, 348 280 Z"
            fill="url(#goldRingGrad)"/>
      <path d="M 349 270 C 375 264, 425 264, 451 270"
            stroke="#fff6d1" stroke-width="1.2" fill="none" opacity="0.75"/>

      <!-- Crown Body (Solid 3D gold silhouette with peaks & scalloped arches) -->
      <path d="M 348 274
               C 342 258, 334 238, 336 216
               C 344 236, 356 250, 368 244
               C 370 236, 372 224, 374 214
               C 382 232, 388 244, 394 246
               L 394 228
               C 392 228, 390 226, 390 220
               L 390 196
               L 393 196
               L 393 216
               L 395 216
               L 395 196
               L 398 196
               L 398 216
               L 402 216
               L 402 196
               L 405 196
               L 405 216
               L 407 216
               L 407 196
               L 410 196
               L 410 220
               C 410 226, 408 228, 406 228
               L 406 246
               C 412 244, 418 232, 426 214
               C 428 224, 430 236, 432 244
               C 444 250, 456 236, 464 216
               C 466 238, 458 258, 452 274
               C 426 266, 374 266, 348 274 Z"
            fill="url(#crownForkGrad)"
            stroke="url(#goldPrimaryGrad)"
            stroke-width="1.5"
            stroke-linejoin="round"/>

      <!-- Fork Spine & Shading Highlights -->
      <!-- Center Fork 4 Tines detail enhancement -->
      <!-- Fork Neck bevel -->
      <path d="M 395 228 L 400 262 L 405 228 Z" fill="#ffeaa3" opacity="0.45"/>
      <line x1="400" y1="197" x2="400" y2="260" stroke="#fffce8" stroke-width="0.8" opacity="0.6"/>

      <!-- Crown Flanking Pearls/Spheres (4 pearls on peaks) -->
      <!-- Outer Left Pearl -->
      <circle cx="336" cy="214" r="8" fill="url(#pearlGold)"/>
      <circle cx="334" cy="212" r="2.5" fill="#ffffff" opacity="0.85"/>

      <!-- Inner Left Pearl -->
      <circle cx="374" cy="212" r="7" fill="url(#pearlGold)"/>
      <circle cx="372" cy="210" r="2.2" fill="#ffffff" opacity="0.85"/>

      <!-- Inner Right Pearl -->
      <circle cx="426" cy="212" r="7" fill="url(#pearlGold)"/>
      <circle cx="424" cy="210" r="2.2" fill="#ffffff" opacity="0.85"/>

      <!-- Outer Right Pearl -->
      <circle cx="464" cy="214" r="8" fill="url(#pearlGold)"/>
      <circle cx="462" cy="212" r="2.5" fill="#ffffff" opacity="0.85"/>

      <!-- Crown Base Jewel Accents -->
      <circle cx="375" cy="272" r="2.2" fill="#fff9db"/>
      <circle cx="400" cy="269" r="2.8" fill="#ffffff"/>
      <circle cx="425" cy="272" r="2.2" fill="#fff9db"/>
    </g>


    <!-- ==========================================
         2. CIRCULAR MEDALLION WITH DUAL RINGS
         ========================================== -->
    <g id="medallion">
      <!-- Medallion Inner Fill (Matches website dark emerald) -->
      <circle cx="400" cy="375" r="106" fill="#0c3724" stroke="none"/>
      <!-- Soft interior radial sheen -->
      <radialGradient id="medallionInnerSheen" cx="45%" cy="40%" r="55%">
        <stop offset="0%" stop-color="#196342" stop-opacity="0.8"/>
        <stop offset="60%" stop-color="#0b3221" stop-opacity="0.5"/>
        <stop offset="100%" stop-color="#04180f" stop-opacity="0.9"/>
      </radialGradient>
      <circle cx="400" cy="375" r="105" fill="url(#medallionInnerSheen)"/>

      <!-- Outer Heavy Gold Ring -->
      <circle cx="400" cy="375" r="105"
              fill="none"
              stroke="url(#goldRingGrad)"
              stroke-width="5.5"
              filter="url(#goldGleam)"/>

      <!-- Inner Concentric Fine Gold Ring -->
      <circle cx="400" cy="375" r="95"
              fill="none"
              stroke="url(#goldPrimaryGrad)"
              stroke-width="2.2"
              opacity="0.95"/>

      <!-- Ring Highlights (simulating light reflections on metallic gold) -->
      <circle cx="400" cy="375" r="107.5"
              fill="none"
              stroke="#ffffff"
              stroke-width="0.8"
              opacity="0.3"
              stroke-dasharray="60 180 80 180"/>
    </g>


    <!-- ==========================================
         3. MONOGRAM 'Q' (Majestic Serif Lettermark)
         ========================================== -->
    <g id="lettermark-q" filter="url(#goldGleam)">
      <!-- The Classical High-Contrast Roman 'Q' Vector -->
      <!-- Outer Oval & Inner Counter with Sweeping Swash Tail -->
      <path d="
        M 400 292
        C 438 292, 466 322, 466 373
        C 466 405, 452 434, 431 447
        C 436 450, 444 452, 455 450
        C 468 447, 477 438, 484 430
        C 488 426, 492 429, 490 434
        C 481 449, 466 462, 447 464
        C 432 466, 421 460, 413 454
        C 409 455, 404 456, 400 456
        C 362 456, 334 425, 334 374
        C 334 322, 362 292, 400 292 Z
        M 400 307
        C 377 307, 359 332, 359 374
        C 359 416, 377 441, 400 441
        C 410 441, 420 436, 428 427
        C 421 423, 415 417, 412 411
        C 408 403, 410 397, 415 397
        C 420 397, 426 402, 431 409
        C 438 400, 442 387, 442 374
        C 442 332, 423 307, 400 307 Z
      "
      fill="url(#qLetterGrad)"
      stroke="#553001"
      stroke-width="1.2"
      fill-rule="evenodd"/>

      <!-- Sweeping Swash Tail 3D Overlay & Polished Spine -->
      <path d="
        M 412 415
        C 419 428, 432 443, 449 448
        C 466 453, 483 446, 496 430
        C 493 439, 482 452, 467 458
        C 448 465, 430 458, 418 444
        C 410 435, 407 425, 412 415 Z
      "
      fill="url(#goldReflectiveGrad)"
      opacity="0.95"/>

      <!-- Q Letter Top-Left Light Gleam -->
      <path d="M 390 295 C 370 302, 357 325, 352 355"
            stroke="#ffffff" stroke-width="2.2" stroke-linecap="round" fill="none" opacity="0.55"/>
      <!-- Q Swash Tip Accent -->
      <circle cx="488" cy="433" r="2" fill="#ffffff" opacity="0.8"/>
    </g>


    <!-- ==========================================
         4. ORNAMENTAL SCROLLWORK / FILIGREE FLOURISHES
         ========================================== -->
    <g id="filigree" filter="url(#goldGleam)">
      <!-- LEFT FLOURISH (Flowing out to X ~ 205) -->
      <!-- Upper Main S-Scroll -->
      <path d="M 358 450
               C 340 458, 316 468, 290 464
               C 260 460, 238 446, 218 456
               C 208 461, 204 470, 212 473
               C 222 476, 236 466, 252 467
               C 278 469, 302 485, 334 479
               C 352 475, 368 466, 380 456
               Z"
            fill="url(#goldPrimaryGrad)"/>

      <!-- Left Decorative Spiral Curl / Finial -->
      <path d="M 218 456
               C 210 448, 212 436, 222 432
               C 232 428, 244 436, 240 445
               C 238 450, 230 452, 226 448
               C 223 444, 226 440, 230 441"
            fill="none"
            stroke="url(#goldRingGrad)"
            stroke-width="3.2"
            stroke-linecap="round"/>

      <!-- Left Filigree Leaf & Tendril Accents -->
      <path d="M 292 464 C 286 450, 268 444, 254 446 C 268 454, 276 460, 282 468 Z"
            fill="url(#goldReflectiveGrad)"/>
      <path d="M 326 478 C 316 490, 298 496, 284 492 C 298 488, 310 482, 320 474 Z"
            fill="url(#goldPrimaryGrad)"/>
      <path d="M 352 464 C 342 478, 328 488, 310 492"
            fill="none" stroke="url(#goldRingGrad)" stroke-width="2" stroke-linecap="round"/>


      <!-- RIGHT FLOURISH (Mirror reflection flowing out to X ~ 595) -->
      <!-- Upper Main S-Scroll -->
      <path d="M 442 450
               C 460 458, 484 468, 510 464
               C 540 460, 562 446, 582 456
               C 592 461, 596 470, 588 473
               C 578 476, 564 466, 548 467
               C 522 469, 498 485, 466 479
               C 448 475, 432 466, 420 456
               Z"
            fill="url(#goldPrimaryGrad)"/>

      <!-- Right Decorative Spiral Curl / Finial -->
      <path d="M 582 456
               C 590 448, 588 436, 578 432
               C 568 428, 556 436, 560 445
               C 562 450, 570 452, 574 448
               C 577 444, 574 440, 570 441"
            fill="none"
            stroke="url(#goldRingGrad)"
            stroke-width="3.2"
            stroke-linecap="round"/>

      <!-- Right Filigree Leaf & Tendril Accents -->
      <path d="M 508 464 C 514 450, 532 444, 546 446 C 532 454, 524 460, 518 468 Z"
            fill="url(#goldReflectiveGrad)"/>
      <path d="M 474 478 C 484 490, 502 496, 516 492 C 502 488, 490 482, 480 474 Z"
            fill="url(#goldPrimaryGrad)"/>
      <path d="M 448 464 C 458 478, 472 488, 490 492"
            fill="none" stroke="url(#goldRingGrad)" stroke-width="2" stroke-linecap="round"/>

      <!-- Central Under-Medallion Knot Anchor -->
      <ellipse cx="400" cy="460" rx="14" ry="7" fill="url(#goldPrimaryGrad)"/>
      <circle cx="400" cy="460" r="3.5" fill="#ffffff" opacity="0.85"/>
    </g>

  </g> <!-- end emblem-group -->


  <!-- ==========================================
       5. TYPOGRAPHY: "Queen Palace"
       ========================================== -->
  <g id="brand-typography" filter="url(#softTextShadow)">
    <text x="400" y="555" text-anchor="middle" class="brand-name">Queen Palace</text>

    <!-- Refined letter-bevel effect -->
    <text x="400" y="554" text-anchor="middle" class="brand-name" fill="#ffffff" opacity="0.4" mask="none">Queen Palace</text>
  </g>


  <!-- ==========================================
       6. SUBTITLE: "— Restaurant —"
       ========================================== -->
  <g id="brand-subtitle" filter="url(#softTextShadow)">
    <!-- Flanking Decorative Hairline Rules -->
    <!-- Left Divider Line -->
    <line x1="240" y1="592" x2="365" y2="592"
          stroke="url(#goldReflectiveGrad)"
          stroke-width="1.6"
          stroke-linecap="round"/>
    <circle cx="366" cy="592" r="2.2" fill="#fae4a2"/>

    <!-- Cursive Calligraphy 'Restaurant' -->
    <text x="400" y="605" text-anchor="middle" class="brand-sub">Restaurant</text>

    <!-- Right Divider Line -->
    <circle cx="434" cy="592" r="2.2" fill="#fae4a2"/>
    <line x1="435" y1="592" x2="560" y2="592"
          stroke="url(#goldReflectiveGrad)"
          stroke-width="1.6"
          stroke-linecap="round"/>
  </g>

</svg>
`;
}

// Generate the badge version with the website's rich royal emerald green background
fs.writeFileSync('public/assets/queen-palace-logo.svg', getLogoSvg({ transparent: false }));
// Generate the transparent version for versatile web/menu/print use
fs.writeFileSync('public/assets/queen-palace-logo-transparent.svg', getLogoSvg({ transparent: true }));

console.log("Successfully created queen-palace-logo.svg and queen-palace-logo-transparent.svg!");
