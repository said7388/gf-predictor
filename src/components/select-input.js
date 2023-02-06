
const SelectInput = ({
  options,
  name,
  handleOnChange
}) => {
  return (
    <select defaultValue="" name={name} onChange={handleOnChange} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 ">
      <option value="" disabled>Select {name}</option>
      {
        options?.length > 0 && options.map(option => (
          <option key={option.id} value={option.name}>
            {option.name}
          </option>
        ))
      }
    </select>
  );
};

export default SelectInput;
