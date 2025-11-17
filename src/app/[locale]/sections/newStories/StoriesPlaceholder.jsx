const StoriesPlaceholder = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Success Stories
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          This is a placeholder section. Your success stories components will go here.
        </p>
        <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-dashed border-gray-300">
          <p className="text-gray-500 text-lg">
            Add your story components in:{" "}
            <code className="bg-gray-100 px-2 py-1 rounded text-sm">
              src/app/[locale]/sections/newStories/
            </code>
          </p>
        </div>
      </div>
    </section>
  );
};

export default StoriesPlaceholder;
