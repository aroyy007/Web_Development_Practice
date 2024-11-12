import PropTypes from "prop-types";

function List(props) {
    const itemList = props.items;

    //itemList.sort((a, b) => a.name.localeCompare(b.name));  // Sort by name ascending alphabetically
    //itemList.sort((a, b) => b.name.localeCompare(a.name));  // Sort by name descending alphabetically

    itemList.sort((a, b) => a.calories - b.calories); // Sort by calories ascending numerically
    //itemList.sort((a, b) => b.calories - a.calories);  // Sort by calories descending numerically

    const lowCalFruits = itemList.filter((item) => item.calories < 100);
    const highCalFruits = itemList.filter((item) => item.calories >= 100);

    return (
        <>
            <h3 className="list-category">{props.category}</h3>
            <p className="list-details">All Details : </p>
            <ol className="list-items">
                {itemList.map((item, index) => (
                    <li key={index}>
                        {item.name} - <b>{item.calories}</b> calories
                    </li>
                ))}
            </ol>
            <p className="list-details">low Calorie Products : </p>
            <ol className="list-items">
                {lowCalFruits.map((item, index) => (
                    <li key={index}>
                        {item.name} - <b>{item.calories}</b> calories
                    </li>
                ))}
            </ol>
            <p className="list-details">High Calorie Products : </p>
            <ol className="list-items">
                {highCalFruits.map((item, index) => (
                    <li key={index}>
                        {item.name} - <b>{item.calories}</b> calories
                    </li>
                ))}
            </ol>
        </>
    );
}

List.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({ name: PropTypes.string, calories: PropTypes.number })
    ),
    category: PropTypes.string,
};

List.defaultProps = {
    items: [],
    category: "Unknown",
};

export default List;
