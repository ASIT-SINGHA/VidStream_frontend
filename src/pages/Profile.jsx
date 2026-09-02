import { Link } from 'react-router';
import {
  AccountDetailsUpdate,
  Btn,
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
        <div>
          <Link to="/change-password">
            <Btn
              BtnName="Change Password"
              className="p-2 border-2 border-blue-400 bg-blue-300 font-bold rounded-2xl"
            />
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default Profile;
