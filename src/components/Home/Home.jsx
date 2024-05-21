const Home = (props) => {
    return (
        <div>
            {props.dishes.map((element) => {
                return (
                    <div key={element.id}>
                        <h3>Name: {element.name}</h3>
                        <p>Description: {element.description}</p>
                        <p>Price: {element.price}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default Home;