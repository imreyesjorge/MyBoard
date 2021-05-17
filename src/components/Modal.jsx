const Modal = ({ modalState, setModalState }) => {
  const handleModal = () => {
    setModalState(!modalState);
  };

  return (
    <div className="w-full h-full flex justify-center items-center absolute">
      <div className="w-2/3 p-4 bg-background border border-backalt rounded-xl shadow-xl">
        <form>
          <input
            type="text"
            className="text-2xl font-bold text-white focus:text-primary w-full mb-6 p-2 bg-transparent border-b border-backalt focus:border-primary outline-none transition"
            placeholder="A brief title"
          />
          <textarea
            cols="30"
            rows="8"
            className="w-full p-4 rounded bg-backsoft resize-none outline-none"
          />
          <div className="w-full mt-4 flex justify-end">
            <button
              type="reset"
              className="text-red-400 mr-4"
              onClick={handleModal}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="font-bold p-2 bg-green-500 rounded-lg"
              onClick={handleModal}
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
