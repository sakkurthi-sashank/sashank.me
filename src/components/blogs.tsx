import { PageTitle } from "./page-title";

export function BlogsSection() {
  return (
    <div
      className="mx-auto flex min-h-screen w-full max-w-4xl flex-col items-center justify-center space-y-5 px-4"
      id="blogs"
    >
      <div className="z-10 flex h-full flex-col items-center justify-center space-y-6 text-center">
        <PageTitle title="Blogs" />

        <div className="flex h-full items-center justify-center pt-32">
          <h2 className="text-2xl text-gray-700">Comming Soon ...</h2>
        </div>
      </div>
    </div>
  );
}
