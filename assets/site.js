// Keep multiple demos from playing over one another. No analytics or external scripts.
document.querySelectorAll('video').forEach((video) => {
  video.addEventListener('play', () => {
    document.querySelectorAll('video').forEach((other) => {
      if (other !== video) other.pause();
    });
  });
});

// Gallery links remain usable without JavaScript; enhance them with a modal viewer.
const imageViewer = document.querySelector('#image-viewer');
if (imageViewer && typeof imageViewer.showModal === 'function') {
  const viewerImage = imageViewer.querySelector('.viewer-image');
  const viewerCaption = imageViewer.querySelector('.viewer-caption');
  let sourceLink;
  document.querySelectorAll('a[data-lightbox]').forEach((link) => {
    link.addEventListener('click', (event) => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      sourceLink = link;
      viewerImage.src = link.href;
      viewerImage.alt = link.querySelector('img')?.alt || 'Project image';
      viewerCaption.textContent = link.closest('figure')?.querySelector('figcaption')?.textContent || '';
      imageViewer.showModal();
    });
  });
  imageViewer.querySelector('.viewer-close').addEventListener('click', () => imageViewer.close());
  imageViewer.addEventListener('click', (event) => { if (event.target === imageViewer) imageViewer.close(); });
  imageViewer.addEventListener('close', () => sourceLink?.focus());
}
