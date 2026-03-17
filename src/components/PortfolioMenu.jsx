import { textLinks, folderLinks } from '../data/portfolioMenuData.js'

function PortfolioMenu() {
  return (
    <div id="container05" className="container-component instance-5 default">
      <div className="wrapper">
        <div className="inner">
          <ul id="buttons04" className="buttons-component instance-4">
            {textLinks.map((link, i) => (
              <li key={link.href}>
                <a href={link.href} className={`n0${i + 1}`} role="button">{link.label}</a>
              </li>
            ))}
          </ul>
          <ul id="buttons07" className="buttons-component instance-7">
            {folderLinks.map((link, i) => {
              const n = i + 1
              const titleId = `buttons07-icon-${n}-title`
              return (
                <li key={link.href}>
                  <a href={link.href} className={`n0${n}`} role="button">
                    <svg aria-labelledby={titleId}>
                      <title id={titleId}>Folder (Alt)</title>
                      <use href="/assets/icons.svg#folder-alt"></use>
                    </svg>
                    <span className="label">{link.label}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PortfolioMenu
