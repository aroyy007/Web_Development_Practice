function Button() {
    const handleClick = () => {
        console.log("Button clicked!");
    };

    const handleClick2 = (name) => {
        console.log("Button clicked! Name is: ", name);
    };

    return (
        <button className="button" onClick={() => handleClick2("Peter")}>
            Click me!
        </button>
    );
}

export default Button;
