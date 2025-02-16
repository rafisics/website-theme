/**
 * Set up image popup
 *
 * Dependencies: https://github.com/biati-digital/glightbox
 */

const lightImages = '.popup:not(.dark)';
const darkImages = '.popup:not(.light)';
let selector = lightImages;

function updateImages(current, reverse) {
  if (selector === lightImages) {
    selector = darkImages;
  } else {
    selector = lightImages;
  }

  if (reverse === null) {
    reverse = GLightbox({ selector: `${selector}` });
  }

  [current, reverse] = [reverse, current];
}

export function imgPopup() {
  if (document.querySelector('.popup') === null) {
    return;
  }

  // Exclude images in the About page from popup and prevent clicks
  if (window.location.pathname.includes('/about')) {
    document.querySelectorAll('.popup').forEach(img => {
      img.classList.remove('popup');

      // Prevent clicks from opening the image URL
      img.addEventListener('click', (event) => {
        event.preventDefault();
      });

      // Set cursor behavior to default (no pointer or image path preview)
      img.style.pointerEvents = 'none';
      img.style.cursor = 'default';
    });
  }

  const hasDualImages = !(
    document.querySelector('.popup.light') === null &&
    document.querySelector('.popup.dark') === null
  );

  if (Theme.visualState === Theme.DARK) {
    selector = darkImages;
  }

  let current = GLightbox({ selector: `${selector}` });

  if (hasDualImages && Theme.switchable) {
    let reverse = null;

    window.addEventListener('message', (event) => {
      if (event.source === window && event.data && event.data.id === Theme.ID) {
        updateImages(current, reverse);
      }
    });
  }
}
