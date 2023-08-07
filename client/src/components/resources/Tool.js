function Tool({ name, logo, link }) {
  return (
    <button className="tool-card" onClick={() => window.open(link)}>
      <img className="icon" alt={name} src={logo}></img>
      <p>{name}</p>
    </button>
  );
}

export default Tool;
