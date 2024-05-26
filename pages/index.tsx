export default function HomeComponent() {
  return (
    <div className="flex justify-center items-center flex flex-col gap-4">
      <h1>Profile Page!</h1>
      <div className="flex flex-col gap-2">
        <a href="/profiles/1">Profile 1</a>
        <a href="/profiles/2">Profile 2</a>
        <a href="/profiles/3">Profile 3</a>
        <a href="/profiles/4">Profile 4</a>
      </div>
    </div>
  );
}
