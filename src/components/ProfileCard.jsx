import SocialIcons from './SocialIcons.jsx'

function ProfileCard() {
  return (
    <div>
      <div id="image02" className="image-component instance-2">
        <span className="frame"><img src="/assets/images/image02.jpg" alt="" onContextMenu={(e) => e.preventDefault()} onDragStart={(e) => e.preventDefault()} /></span>
      </div>
      <h1 id="text02" className="text-component instance-2">Rohit Nain</h1>
      <h3 id="text03" className="text-component instance-3">Software Engineer — Backend + AI</h3>
      <p id="text08" className="text-component instance-8">Bengaluru, India</p>
      <p id="text10" className="text-component instance-10">Contact: <a href="mailto:rohitnainindian@gmail.com">rohitnainindian@gmail.com</a></p>
      <SocialIcons id="icons01" instance="1" />
    </div>
  )
}

export default ProfileCard
