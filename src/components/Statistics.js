// import Statistics from './Statistics.js'

function Statistics({ items }) {
    console.log(items)
    return (
        <section className="statistics">
            {/* <h2 className="title">Upload stats</h2> */}

            <ul className="stat-list">
                {items.map(item => (
                    <li key={item.id} className="item">
                        <Statistics
       
                            label={item.label}
                            percentage={item.percentage} />
      
                        
                    </li>
                ))}
                


                {/* <li class="item">
      <span class="label">.mp3</span>
      <span class="percentage">14%</span>
    </li>
    <li class="item">
      <span class="label">.pdf</span>
      <span class="percentage">41%</span>
    </li>
    <li class="item">
      <span class="label">.mp4</span>
      <span class="percentage">12%</span>
    </li> */}
            </ul>
        </section>
    )
}
export default Statistics;