
const Label = ({ className, ...rest }) => {
  return (
    <label
      className=
      "block text-body-dark font-semibold text-sm leading-none mb-3"
      {...rest}
    />
  );
};

export default Label;
