import {
  AccountDetailsUpdate,
  Container,
  UpdateAvatar,
  UpdateCoverImage,
} from '../components/ComponentExports.js';

function Profile() {
  return (
    <Container>
      <div>
        <UpdateCoverImage />
        <UpdateAvatar />
      </div>
      <div>
        <AccountDetailsUpdate />
      </div>
    </Container>
  );
}

export default Profile;
