function Tool({ name, logo, link }) {
  return (
    <button className="tool-card" aria-label= "Open link" onClick={() => window.open(link)}>
      <img className="icon" alt={name} src={logo}></img>
      <p>{name}</p>
    </button>
  );
}

export default Tool;
