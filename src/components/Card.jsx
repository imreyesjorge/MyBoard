const Card = ({ title, body, tag }) => {
  return (
    <div className="m-8 py-6 px-8 bg-backalt rounded-lg shadow">
      <h4 className="text-2xl font-bold">{title}</h4>
      <p className="text-gray-300 my-2 justify">{body}</p>
      <small className="text-primary font-semibold py-1 px-2 rounded bg-primaryLow">
        {tag}
      </small>
    </div>
  );
};

export default Card;
