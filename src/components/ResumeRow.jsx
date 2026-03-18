function ResumeRow({ employment, experience }) {
  return (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <div style={{ flex: 1, fontSize: '16px' }}>
        {employment && (
          <span className="p">
            <code>{employment.dateRange}</code>
            <br />
            <u>{employment.studioName}</u>
            <br />
            {employment.location}
            <br />
            {employment.website && <>Website: <a href={employment.website} target="_blank" rel="noreferrer">{employment.website}</a></>}
          </span>
        )}
      </div>
      <div style={{ flex: 2, fontSize: '16px' }}>
        {experience?.isFreelance ? (
          <span className="p"><code>{experience.dateRange}</code><br />{experience.label}</span>
        ) : experience && (
          <>
            <span className="p"><u>{experience.title}</u></span>
            {experience.bullets.map((bullet, i) => (
              <span key={i} className="p">- {bullet}</span>
            ))}
          </>
        )}
      </div>
    </div>
  )
}

export default ResumeRow
