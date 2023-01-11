import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h2>Hello Namste React</h2>;

const Title = () => {
    return <h2>Title component</h2>
}

const Header = () => {
  return (
    <>
      <div>
        <h1>Hello this a header component</h1>
        <div>{heading}</div>
        {Title()}
        <Title />
        <Title></Title>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
