function ExperienceEntry({ title, bullets }) {
  return (
    <>
      <span className="p"><u>{title}</u></span>
      {bullets.map((bullet, i) => (
        <span key={i} className="p">- {bullet}</span>
      ))}
    </>
  )
}

export default ExperienceEntry
