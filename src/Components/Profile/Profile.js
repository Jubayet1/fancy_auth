import React, { useContext } from "react";
import { BlogContext } from "../../App";

const Profile = () => {
  const [blogs, setBlogs] = useContext(BlogContext);
  console.log(blogs);
  return (
    <div>
      <div className="card w-96 mx-auto my-32 bg-base-100 shadow-xl border border-red-300">
        <figure className="px-10 pt-10">
          <img
            src="https://api.lorem.space/image/shoes?w=400&h=225"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{blogs.user.auth.email}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
