---
permalink: /assets/js/photoswipe-setup.js
---
import PhotoSwipeLightbox from "{{ site.third_party_libraries.photoswipe-lightbox.url.js }}";
import PhotoSwipe from "{{ site.third_party_libraries.photoswipe.url.js }}";
const photoswipe = new PhotoSwipeLightbox({
  gallery: ".pswp-gallery",
  children: "a",
  initialZoomLevel: (zoomLevelObject) => zoomLevelObject.fit * 0.75,
  secondaryZoomLevel: (zoomLevelObject) => zoomLevelObject.fit,
  paddingFn: (viewportSize) => {
    const horizontal = Math.round(viewportSize.x * 0.125);
    const vertical = Math.round(viewportSize.y * 0.125);

    return {
      top: vertical,
      bottom: vertical,
      left: horizontal,
      right: horizontal,
    };
  },
  pswpModule: PhotoSwipe,
});

photoswipe.on("uiRegister", () => {
  photoswipe.pswp.ui.registerElement({
    name: "custom-caption",
    order: 9,
    isButton: false,
    appendTo: "root",
    html: "",
    onInit: (el, pswp) => {
      const updateCaption = () => {
        const link = pswp.currSlide.data.element;
        const caption = link?.dataset?.caption || "";
        el.textContent = caption;
        el.hidden = caption.length === 0;
      };

      el.hidden = true;
      pswp.on("afterInit", updateCaption);
      pswp.on("change", updateCaption);
    },
  });
});

photoswipe.init();
