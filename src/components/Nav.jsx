import Image from "next/image";

const Nav = () => {
  return (
    <nav className="w-full p-8 flex justify-between items-center">
      <div className="flex justify-center items-center">
        <Image src="/svgs/logo.svg" width={40} height={40} />
        <h3 className="text-lg ml-4">WorkspaceName</h3>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex mr-6 p-3 px-4 items-center justify-center bg-backalt rounded-lg">
          <input type="text" className="font-semibold bg-transparent" />
          <Image src="/svgs/Search.svg" width={25} height={25} />
        </div>
        <div className="flex items-center justify-center cursor-pointer">
          <Image src="/svgs/Edit Square.svg" width={48} height={48} />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
