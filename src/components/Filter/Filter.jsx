export const Filter = ({ onUpdateFilter }) => {
  return (
    <label>
      Find contacts by name
      <input type="text" onChange={evt => onUpdateFilter(evt)} />
    </label>
  );
};
