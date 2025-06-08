import { basic, initTopbar, initSidebar } from './modules/layouts';

import {
  loadImg,
  initToc,
  imgPopup,
  initLocaleDatetime,
  initClipboard,
  loadMermaid
} from './modules/components';

loadImg();
initToc();
imgPopup();
initTopbar();
initSidebar();
// initLocaleDatetime();  // dark-light mode-toggle is getting disabled for it (?)
initClipboard();
loadMermaid();
basic();
