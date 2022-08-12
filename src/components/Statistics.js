import PropTypes from 'prop-types';
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

Statistics.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      persontage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
