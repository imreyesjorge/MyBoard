import { useRef } from "react";
import Image from "next/image";

const Nav = ({ searched, setSearched, modalState, setModalState }) => {
  const input = useRef();

  const handleModal = () => {
    setModalState(!modalState);
  };

  const handleChange = (event) => {
    setSearched(event.target.value);
  };

  const inputSelectEvent = () => {
    input.current.classList.add("border-white");
  };

  const inputLeaveEvent = () => {
    input.current.classList.remove("border-white");
  };

  return (
    <nav className="w-full p-8 flex justify-between items-center">
      <div className="flex justify-center items-center">
        <Image src="/svgs/logo.svg" width={40} height={40} />
        <h3 className="text-lg ml-4">Workspace</h3>
      </div>
      <div className="flex justify-center items-center">
        <div
          className="flex mr-6 p-2 px-3 items-center justify-center bg-backalt rounded-lg border border-transparent transition"
          ref={input}
        >
          <input
            type="text"
            placeholder="Search by Title or Tag"
            value={searched}
            onChange={handleChange}
            className="font-semibold bg-transparent outline-none"
            onFocus={inputSelectEvent}
            onBlur={inputLeaveEvent}
          />
          <Image src="/svgs/Search.svg" width={25} height={25} />
        </div>
        <div className="flex items-center justify-center cursor-pointer">
          <Image
            src="/svgs/Edit Square.svg"
            width={40}
            height={40}
            onClick={handleModal}
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
