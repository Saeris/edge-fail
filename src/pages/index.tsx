import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const call = async () => {
      await fetch(`/api/edge`);
    };
    void call();
  }, []);
  return (
    <>
      <h1>Edge Runtime Failure Example</h1>
    </>
  );
};

export default Home;
