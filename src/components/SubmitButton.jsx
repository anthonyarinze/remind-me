function SubmitButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      type="submit"
      className="mt-4 rounded-md border-[2.2px] border-main p-3"
    >
      Add Reminder
    </button>
  );
}

export default SubmitButton;
