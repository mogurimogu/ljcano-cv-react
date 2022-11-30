import "./Button.css";

function Button(props: {
  children: any ;
  className?: string;
  link?: string;
}) {
  const openLink = () => {
    window.open(props.link, "_blank");
  };

  return (
    <button
      className={`button p-2 rounded-lg text-black font-medium my-1 flex items-center justify-center ${props.className}`}
      onClick={openLink}
    >
      {props.children}
    </button>
  );
}

export default Button;
