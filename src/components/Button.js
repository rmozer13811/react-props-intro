function Button(props) {
  console.log(props);

  function isRounded() {
    if (props.rounded) {
      return "";
    } else {
      return "rounded-0";
    }
  }

  return (
    <a
      href={props.location}
      className={`btn d-block btn-${props.outline ? "outline-" : ""}${
        props.color
      } ${isRounded()}`}
    >
      {props.children}
    </a>
  );
}

export default Button;
