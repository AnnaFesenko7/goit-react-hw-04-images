import s from './ImageGalleryItem.module.css';
// import React, { Component } from 'react';

export default function ImageGalleryItem({ galleryItem, onGalleryItemClick }) {
  const { id, webformatURL, tags, largeImageURL } = galleryItem;

  return (
    <li key={id} className={s.ImageGalleryItem}>
      <img
        className={s.ImageGalleryItemImage}
        src={webformatURL}
        alt={tags}
        onClick={() => {
          onGalleryItemClick(largeImageURL, tags);
        }}
      />
    </li>
  );
}
