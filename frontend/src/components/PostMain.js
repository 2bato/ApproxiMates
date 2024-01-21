import React from "react";
import Comments from "./Comments";

const pinIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="14"
    width="12"
    viewBox="0 0 384 512"
  >
    <path d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" />
  </svg>
);

function PostMain(post, onEditPost) {
  

  return (
    <div className="border-2 rounded-3xl m-5 border-black">
      <div>
        <div className="text-left ml-3 mt-2">
          <h1 className="text-red-600 font-bold">{post.type}</h1>
          <div className="inline-flex items-center  font-bold">
            {pinIcon}
            <h2 className="text-xs ml-2 font-bold">{post.locationType}</h2>
          </div>
          <div className="text-m font-bold mt-2">
            <p>{post.title}</p>
          </div>
        </div>
        <div className="mt-2 justify-center m-3 font-light">
          <p>{post.body}</p>
        </div>

        <div className="justify-center mb-3">
          <img
            src={`
            https://maps.googleapis.com/maps/api/staticmap?key=AIzaSyAXpRKeA6lCOiYOwwnJbx7j9GUvBig8MLw&center=${post.location}&markers=color:black%7C${post.location}&zoom=17&format=png&maptype=roadmap&style=element:geometry%7Ccolor:0xf5f5f5&style=element:labels.icon%7Cvisibility:off&style=element:labels.text.fill%7Ccolor:0x616161&style=element:labels.text.stroke%7Ccolor:0xf5f5f5&style=feature:administrative.land_parcel%7Celement:labels.text.fill%7Ccolor:0xbdbdbd&style=feature:poi%7Celement:geometry%7Ccolor:0xeeeeee&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:poi.park%7Celement:geometry%7Ccolor:0xe5e5e5&style=feature:poi.park%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&style=feature:road%7Celement:geometry%7Ccolor:0xffffff&style=feature:road.arterial%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:road.highway%7Celement:geometry%7Ccolor:0xdadada&style=feature:road.highway%7Celement:labels.text.fill%7Ccolor:0x616161&style=feature:road.local%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&style=feature:transit.line%7Celement:geometry%7Ccolor:0xe5e5e5&style=feature:transit.station%7Celement:geometry%7Ccolor:0xeeeeee&style=feature:water%7Celement:geometry%7Ccolor:0xc9c9c9&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&size=480x360`}
            alt="Static Map"
          ></img>
        </div>
      </div>

      <div className="flex row items-center gap-2 ml-3 mb-3">
        <button className="flex row items-center gap-2 ml-3"><svg
          xmlns="http://www.w3.org/2000/svg"
          height="14"
          width="14"
          viewBox="0 0 512 512"
        >
          <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
        </svg>
        <div>{post.likes} likes</div>
        </button>
        <Comments comments={post.comments} onEditPost={onEditPost} id={post.id}/>
      </div>
    </div>
  );
}

export default PostMain;
