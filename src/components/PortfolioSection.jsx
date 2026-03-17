function PortfolioSection({
  containerId, containerInstance,
  imageId, imageInstance, imageSrc,
  textId, textInstance, title, description,
  galleryId, galleryInstance, galleryClass,
  images,
  buttonId, buttonInstance,
  scrollAnchor,
}) {
  return (
    <>
      {scrollAnchor && (
        <p id={scrollAnchor.id} data-scroll-id={scrollAnchor.scrollId} data-scroll-behavior="default" data-scroll-offset="0" data-scroll-speed="3" className={`text-component instance-${scrollAnchor.instance}`}><br /></p>
      )}
      <div id={containerId} className={`container-component instance-${containerInstance} columns`}>
        <div className="wrapper">
          <div className="inner">
            <div>
              <div id={imageId} className={`image-component instance-${imageInstance}`}>
                <span className="frame"><img src={imageSrc} alt="" onContextMenu={(e) => e.preventDefault()} onDragStart={(e) => e.preventDefault()} /></span>
              </div>
              <p id={textId} className={`text-component instance-${textInstance}`}>
                <span className="p"><strong>{title}</strong></span>
                <span className="p">{description}</span>
              </p>
            </div>
            <div>
              <div id={galleryId} className={`gallery-component instance-${galleryInstance} ${galleryClass}`}>
                <div className="inner">
                  <ul>
                    {images.map((img) => (
                      <li key={img.n}>
                        <a href={img.href} className={`thumbnail n${img.n}`} onContextMenu={(e) => e.preventDefault()} onDragStart={(e) => e.preventDefault()} onAuxClick={(e) => e.preventDefault()}>
                          <span className="frame"><img src={img.src} alt={img.alt} data-caption={img.caption} onContextMenu={(e) => e.preventDefault()} onDragStart={(e) => e.preventDefault()} onAuxClick={(e) => e.preventDefault()} /></span>
                        </a>
                        <div className="caption"><p>{img.caption}</p></div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul id={buttonId} className={`buttons-component instance-${buttonInstance}`}>
        <li>
          <a href="#menu" className="n01" role="button">
            <svg aria-labelledby={`${buttonId}-icon-1-title`}><title id={`${buttonId}-icon-1-title`}>Chevron Up</title><use href="/assets/icons.svg#arrow-up-alt"></use></svg>
            <span className="label">Back to Portfolio Menu</span>
          </a>
        </li>
      </ul>
    </>
  )
}

export default PortfolioSection
