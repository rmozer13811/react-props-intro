function SelectInput(props) {
  return (
    <div className="form-group">
      <label>{props.label}</label>
      <select className="form-control">
        {props.items.map((item) => {
          return <option>{item}</option>;
        })}
      </select>
    </div>
  );
}

export default SelectInput;
