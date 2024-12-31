interface button {
  
label : string,
onClick : () => void,
disabled ?: boolean
}

const Buttons = ( { label, onClick, disabled = false } : button) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded ${
        disabled ? "bg-gray-400 " : "bg-blue-500 hover:bg-blue-700"
      } text-white`}
    >
      {label}
    </button>
  );
};

export default Buttons;
