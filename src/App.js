const Pet = ({
    name,
    animal,
    breed
}) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, name),
        React.createElement("h2", {}, animal),
        React.createElement("h2", {}, breed),
    ]);
};



const App = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(Pet, {
            name: "Emma",
            animal: "cat",
            breed: "Maine Coon",
        }),
        React.createElement(Pet, {
            name: "Selina",
            animal: "cat",
            breed: "Maine Coon",
        }),
        React.createElement(Pet, {
            name: "Spirit",
            animal: "dog",
            breed: "Siberian Husky",
        }),
    ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));