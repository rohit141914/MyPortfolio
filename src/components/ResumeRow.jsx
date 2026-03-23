function ResumeRow({ employment, experience }) {
  return (
    <div className="resume-row">
      <div className="resume-row-col-1">
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
      <div className="resume-row-col-2">
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
