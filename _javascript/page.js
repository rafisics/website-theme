import { basic, initTopbar, initSidebar } from './modules/layouts';

import {
  loadImg,
  imgPopup,
  initLocaleDatetime,
  initClipboard,
  initToc,
  loadMermaid
} from './modules/components';

loadImg();
initToc();
imgPopup();
initSidebar();
// initLocaleDatetime();  // dark-light mode-toggle is getting disabled for it (?)
initClipboard();
initTopbar();
loadMermaid();
basic();
