import profile from "../../assets/images/profile.png";

const Header = () => {
  return (
    <header className="flex justify-between py-5 items-center border-b-2 md:flex max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
      <img src={profile} alt="" />
    </header>
  );
};

export default Header;
