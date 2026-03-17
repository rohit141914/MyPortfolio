const ICONS = [
  { key: 'linkedin',   label: 'LinkedIn' },
  { key: 'artstation', label: 'ArtStation' },
  { key: 'cara',       label: 'Cara' },
  { key: 'instagram',  label: 'Instagram' },
]

function SocialIcons({ id, instance }) {
  return (
    <ul id={id} className={`icons-component instance-${instance}`}>
      {ICONS.map((icon, i) => {
        const n = i + 1
        const titleId = `${id}-icon-${n}-title`
        return (
          <li key={icon.key}>
            <a className={`n0${n}`} href="#" role="button">
              <svg aria-labelledby={titleId}>
                <title id={titleId}>{icon.label}</title>
                <use href={`/assets/icons.svg#${icon.key}`}></use>
              </svg>
              <span className="label">{icon.label}</span>
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default SocialIcons
