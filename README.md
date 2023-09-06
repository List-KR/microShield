## microShield

[![jsDelivr Stats](https://data.jsdelivr.com/v1/package/gh/List-KR/microShield/badge)](https://www.jsdelivr.com/package/gh/List-KR/microShield)

microShield blocks Ad-Shield advertisement and anti-adblock script.

<details>
<summary>Other Language - 다른 언어</summary>

한국어: https://github.com/List-KR/microShield/blob/main/README.ko.md

</details>

### Quick Start
Just click the following URL to detect this userscript.

https://cdn.jsdelivr.net/gh/List-KR/microShield@main/microShield.user.js

### How to install
- [Violentmonkey](https://addons.mozilla.org/en-US/firefox/addon/violentmonkey/) (Recommended if you cannot access AdGuard Premium) - Browser extension
    1. Open `Dashboard`.
    2. Click `New` button.
    3. Click `Install from URL` button.
    4. Input the following URL:
    ```
    https://cdn.jsdelivr.net/gh/List-KR/microShield@main/microShield.user.js
    ```
    5. Click `OK` button.
    6. Confirm metadata of the userscript and click `Confirm installation`.
    7. Return to a tab opening the website protected by Ad-Shield and reload the tab by pressing F5 or Ctrl + R or clicking the reload button.

- [Tampermonkey](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/) - Browser extension
    1. Open settings of Tampermonkey.
    2. Go to `Utilities` tab.
    3. Input the following URL into `Install from URL`:
        ```
        https://cdn.jsdelivr.net/gh/List-KR/microShield@main/microShield.user.js
        ```
    4. Click `Install` button.
    5. Confirm metadata of the userscript and click `Install`.
    6. Return to a tab opening the website protected by Ad-Shield and reload the tab by pressing F5 or Ctrl + R or clicking the reload button.

    <details>
    <summary>Compatibility Table</summary>

    Browser Extension | License | Status
    ----------------- | ------ | -------
    [Tampermonkey](https://www.tampermonkey.net/) | Proprietary (Donationware) | ✔
    [Greasemonkey](https://www.greasespot.net/) | MIT | ✘
    [Violentmonkey](https://violentmonkey.github.io/) | MIT | ✔

    </details>
    
- AdGuard for Windows
    1. Click `Settings`.
    2. Click `Extensions`.
    3. Click `Add extension`.
    4. Input the following URL:
        ```
        https://cdn.jsdelivr.net/gh/List-KR/microShield@main/microShield.user.js
        ```
    5. Click `Install`.
    6. Confirm metadata of the userscript and click `Install`.
    7. Return to a tab opening the website protected by Ad-Shield and reload the tab by pressing F5 or Ctrl + R or clicking the reload button.


- AdGuard for Android
    1. Go to Settings -> Extension.
    2. Touch `New extension`.
    3. Input the following URL:
        ```
        https://cdn.jsdelivr.net/gh/List-KR/microShield@main/microShield.user.js
        ```
    4. Touch `Next`.
    5. Confirm metadata of the userscript and touch `Add`.
    6. Return to a tab opening the website protected by Ad-Shield and reload the tab by touching the reload button.


 - AdGuard for iOS

    Userscript is not supported currently on AdGuard for iOS.
    However, It will be supported in the future.[^1]
    
    Of course, you can use an alternative temporally.[^2][^3]


[^1]: https://github.com/AdguardTeam/AdguardForiOS/issues/1542
[^2]: https://github.com/quoid/userscripts
[^3]: https://apps.apple.com/us/app/userscripts/id1463298887


### What is Ad-Shield?
Please read `/ad-shield.md`.

### Why List-KR created microShield?
Unlike license of List-KR Script, microShield is licensed under MIT license that allows other software to use this userscript without using the same license.

So, the adblock community can resist against Ad-Shield widely.

### Original Source Code
microShield userscript was brought from source code of the following projects:
 - https://github.com/seia-soto/userscript-composer
 - https://github.com/seia-soto/userscripts