import { CreatePostLay, ViewStoryLay, PostCard } from '@/components';

export default function HomeTab() {
  return (
    <section>
      <CreatePostLay />
      <ViewStoryLay />
      <PostCard name='Nihal' image='sso' />
    </section>
  );
}
