import useFetch from "../hooks/useFetch";
function Posts() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div>
      {data.slice(0, 10).map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
}
export default Posts;
