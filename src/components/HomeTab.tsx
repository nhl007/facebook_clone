import CreatePostLay from './CreatePost';
import PostCard from './PostCard';
import ViewStoryLay from './ViewStory';

export default function HomeTab() {
  return (
    <section>
      <CreatePostLay />
      <ViewStoryLay />
      <PostCard name='Nihal' image='sso' />
    </section>
  );
}
