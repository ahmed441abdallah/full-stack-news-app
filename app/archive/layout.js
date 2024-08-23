import React from "react";

const layout = ({ archive, latest }) => {
  return (
    <div className=" px-2 sm:px-28 ">
      <h1 className=" text-3xl font-bold m-2"> News Archive</h1>
      <section>{archive}</section>
      <hr></hr>
      <section>{latest}</section>
    </div>
  );
};

export default layout;
