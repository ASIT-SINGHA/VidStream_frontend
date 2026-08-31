import { Container,UpdateAvatar,UpdateCoverImage  } from "../components/ComponentExports.js"


function Profile() {

  return (
 <Container>
  <div>
    <UpdateCoverImage/>
  </div>
  <div className=" flex ">
    <div>
      <UpdateAvatar/>
    </div>
  </div>
  
 </Container>
  )
}

export default Profile;
