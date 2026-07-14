export const Input = ({ value, onChange, placeholder }: any) => (
  <input
    className="border p-2 rounded"
    type="number"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  />
);