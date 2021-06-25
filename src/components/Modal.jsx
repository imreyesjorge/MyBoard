import { useRef } from "react";

const Modal = ({ modalState, setModalState, setFetchedNotes, fetchedNotes }) => {
  const titleElement = useRef();
  const bodyElement = useRef();

  const handleModal = () => {
    setModalState(!modalState);
  };

  const handleNoteCreation = () => {
    // Close the Modal on Click
    handleModal();

    // Create the Note Object
    const newNote = {
      title: titleElement.current.value,
      body: bodyElement.current.value,
      tag: "general",
    };

    // Check if there's any note
    localStorage.getItem("data") == null
      ? localStorage.setItem("data", JSON.stringify({ notes: [] }))
      : null;

    // Get the notes object
    let data = JSON.parse(localStorage.getItem("data"));

    // Add the new Note
    data.notes.push(newNote);

    // Save the new note to localStorage
    localStorage.setItem("data", JSON.stringify(data));

    // Update the current app state
    let response = fetchedNotes;
    response ? response.notes.push(newNote) : response = { notes: [newNote]}
    setFetchedNotes(response)
  };

  const handleKeyDown = (event) => {
    console.log(event);
  };

  return (
    <div className="w-full h-full flex justify-center items-center absolute">
      <div className="w-2/3 p-4 bg-background border border-backalt rounded-xl shadow-xl">
        <form>
          <input
            type="text"
            className="text-2xl font-bold text-white focus:text-primary w-full mb-6 p-2 bg-transparent border-b border-backalt focus:border-primary outline-none transition"
            placeholder="A brief title"
            ref={titleElement}
          />
          <textarea
            cols="30"
            rows="8"
            className="w-full p-4 rounded bg-backsoft resize-none outline-none"
            ref={bodyElement}
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
              onClick={handleNoteCreation}
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
