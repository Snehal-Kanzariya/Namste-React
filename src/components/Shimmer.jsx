const Shimmer = () => {
  return (
    <>
      {/* <h1 className="shimmer-card"></h1> */}
      <div className="restaurant-list">
        {Array(10)
        .fill("")
        .map((e, index) => (
          <div key={index} className="shimmer-card"></div>
        ))}
      </div>
    </>
  );
};

export default Shimmer;
