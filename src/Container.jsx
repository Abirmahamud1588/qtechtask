// eslint-disable-next-line react/prop-types
const Container = ({ children }) => {
  return (
    <div className="w-full h-full max-w-[1200px]  mx-auto flex justify-between items-center px-[20px]">
      {children}
    </div>
  );
};

export default Container;
