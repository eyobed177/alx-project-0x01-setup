import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const PostsPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow p-6">
        <h1 className="text-3xl font-bold mb-4">Posts Page</h1>
        {/* You can map post cards here later */}
      </main>
      <Footer />
    </div>
  );
};

export default PostsPage;
