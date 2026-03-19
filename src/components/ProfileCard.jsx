import SocialIcons from './SocialIcons.jsx'

function ProfileCard() {
  return (
    <div>
      <div id="image02" className="image-component instance-2">
        <span className="frame"><img src="/assets/images/Profile/profile.jpeg" alt="" onContextMenu={(e) => e.preventDefault()} onDragStart={(e) => e.preventDefault()} /></span>
      </div>
      <h1 id="text02" className="text-component instance-2" style={{ marginTop: '12px', fontSize: '24px' }}>Rohit Nain</h1>
      <h3 id="text03" className="text-component instance-3 text-nowrap">Software Engineer — Backend + AI</h3>
      <p id="text10" className="text-component instance-10 text-nowrap">Contact: <a href="mailto:rohitnainindian@gmail.com">rohitnainindian@gmail.com</a></p>
      <p id="text08" className="text-component instance-8 text-center">Bengaluru, India</p>
      <SocialIcons id="icons01" instance="1" />
    </div>
  )
}

export default ProfileCard
