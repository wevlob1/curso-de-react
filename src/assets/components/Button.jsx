const Button = (props) => {
  return (
    <button
      {...props}
      className="p-2 flex justify-center items-center bg-slate-400 mx-1 rounded-md text-white"
    >
      {props.children}
    </button>
  );
};

export default Button;
