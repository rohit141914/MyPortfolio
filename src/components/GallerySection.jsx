import { asset } from '../utils/asset.js'

function GallerySection({
  scrollAnchor,
  galleryId, galleryInstance,
  images,
  buttonId, buttonInstance,
  dividerId, dividerInstance,
}) {
  return (
    <>
      {scrollAnchor && (
        <p id={scrollAnchor.id} data-scroll-id={scrollAnchor.scrollId} data-scroll-behavior="default" data-scroll-offset="0" data-scroll-speed="3" className={`text-component instance-${scrollAnchor.instance}`}><br /></p>
      )}
      <div id={galleryId} className={`gallery-component instance-${galleryInstance}`}>
        <div className="inner">
          <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '12px',justifyContent: 'space-between' }}>
            {images.map((img) => (
              <li key={img.n}>
                <a href={asset(img.href)} className={`thumbnail n${img.n}`} onContextMenu={(e) => e.preventDefault()} onDragStart={(e) => e.preventDefault()} onAuxClick={(e) => e.preventDefault()}>
                  <span className="frame"><img src={asset(img.src)} alt={img.alt} data-caption={img.caption} onContextMenu={(e) => e.preventDefault()} onDragStart={(e) => e.preventDefault()} onAuxClick={(e) => e.preventDefault()} /></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p id="text09" className="text-component instance-9"><br /></p>
      <ul id={buttonId} className={`buttons-component instance-${buttonInstance}`}>
        <li>
          <a href="#menu" className="n01" role="button">
            <svg aria-labelledby={`${buttonId}-icon-1-title`}><title id={`${buttonId}-icon-1-title`}>Chevron Up</title><use href={asset('/assets/icons.svg#arrow-up-alt')}></use></svg>
            <span className="label">Back to Portfolio Menu</span>
          </a>
        </li>
      </ul>
      <hr id={dividerId} className={`divider-component instance-${dividerInstance}`} />
    </>
  )
}

export default GallerySection
