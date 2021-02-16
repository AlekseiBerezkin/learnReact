import MyPosts from './MyPosts/MyPosts'
import sProfile from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

  return (<div>
    <ProfileInfo />
    <MyPosts posts={props.posts}/>
  </div>);

}
export default Profile;