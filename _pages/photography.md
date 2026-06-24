---
layout: page
title: photography
permalink: /photography/
description: shot on iPhone 
nav: false
images:
  photoswipe: true
---

<style>
  .gallery-intro {
    margin-bottom: 1.5rem;
  }

  .photo-gallery {
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    grid-auto-flow: dense;
    grid-auto-rows: 7.5rem;
    gap: 0.65rem;
  }

  .photo-gallery a {
    display: block;
    overflow: hidden;
    background: var(--global-code-bg-color);
  }

  .photo-tile--portrait {
    grid-column: span 2;
    grid-row: span 3;
  }

  .photo-tile--landscape {
    grid-column: span 3;
    grid-row: span 3;
  }

  .photo-tile--hero-landscape {
    grid-column: span 6;
    grid-row: span 3;
  }

  .photo-tile--portrait-wide {
    grid-column: span 3;
    grid-row: span 3;
  }

  .photo-gallery figure {
    height: 100%;
    margin: 0;
  }

  .photo-gallery img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition:
      filter 160ms ease,
      transform 160ms ease;
  }

  .photo-gallery a:hover img {
    filter: brightness(0.92);
    transform: scale(1.015);
  }

  .photo-gallery figcaption {
    color: var(--global-text-color-light);
    font-size: 0.85rem;
    line-height: 1.35;
    padding: 0.5rem 0.6rem 0.6rem;
  }

  .pswp__custom-caption {
    position: absolute;
    bottom: 1rem;
    left: 50%;
    max-width: min(760px, calc(100% - 2rem));
    padding: 0.55rem 0.75rem;
    transform: translateX(-50%);
    color: #fff;
    background: rgba(0, 0, 0, 0.72);
    font-size: 0.95rem;
    line-height: 1.45;
    text-align: center;
  }

  @media (max-width: 768px) {
    .photo-gallery {
      grid-template-columns: repeat(4, minmax(0, 1fr));
      grid-auto-rows: 6.5rem;
    }

    .photo-tile--portrait {
      grid-column: span 2;
      grid-row: span 3;
    }

    .photo-tile--landscape {
      grid-column: span 4;
      grid-row: span 3;
    }

    .photo-tile--hero-landscape {
      grid-column: span 4;
      grid-row: span 2;
    }

    .photo-tile--portrait-wide {
      grid-column: span 2;
      grid-row: span 3;
    }
  }

  @media (max-width: 520px) {
    .photo-gallery {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      grid-auto-rows: 7rem;
    }

    .photo-tile--portrait,
    .photo-tile--landscape,
    .photo-tile--hero-landscape,
    .photo-tile--portrait-wide {
      grid-column: span 2;
      grid-row: span 2;
    }
  }
</style>

<div class="photo-gallery pswp-gallery" id="photo-gallery">
  {% for photo in site.data.photography %}
    {% assign photo_tile = photo.tile | default: 'portrait' %}
    {% if photo.width > photo.height %}
      {% assign photo_tile = photo.tile | default: 'landscape' %}
    {% endif %}
    <a
      class="photo-tile photo-tile--{{ photo_tile }}"
      href="{{ photo.src | relative_url }}"
      data-pswp-width="{{ photo.width }}"
      data-pswp-height="{{ photo.height }}"
      {% if photo.description %}
        data-caption="{{ photo.description | escape }}"
      {% endif %}
      target="_blank"
    >
      <figure>
        <img src="{{ photo.src | relative_url }}" alt="{{ photo.description | default: 'gallery photo' }}" loading="lazy">
        {% if photo.caption %}
          <figcaption>{{ photo.caption }}</figcaption>
        {% endif %}
      </figure>
    </a>
  {% endfor %}
</div>
