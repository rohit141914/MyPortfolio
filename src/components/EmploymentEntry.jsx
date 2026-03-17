function EmploymentEntry({ dateRange, studioName, position, location, website }) {
  return (
    <span className="p">
      <code>{dateRange}</code><br /><u>{studioName}</u><br /><strong>{position}</strong><br />{location}<br />Website: <a href={website} target="_blank" rel="noreferrer">{website}</a>
    </span>
  )
}

export default EmploymentEntry
