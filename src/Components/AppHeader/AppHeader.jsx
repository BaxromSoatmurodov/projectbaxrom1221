import "./AppHeader.css";
const AppHeader = ({ countLikes, countPosts }) => {
  return (
    <div className="AppHeader d-flex">
      <h1>Soatmurodov Baxrom</h1>
      <h2>
        {countPosts}posts,{countLikes} likes
      </h2>
    </div>
  );
};
export default AppHeader;
