function Statistics({ items }) {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">
        {items.map(item => (
          <li key={item.id} className="stat-item">
            <span className="label">{item.label} </span>
            <span className="percentage">{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
export default Statistics;
