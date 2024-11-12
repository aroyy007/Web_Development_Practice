import React, { useState } from "react";

function MyComponent() {
    const [car, setCar] = useState({
        year: 2010,
        make: "Toyota",
        model: "Corolla",
    });

    function handleYearChange(event) {
        setCar((c) => ({
            ...c,
            year: event.target.value,
        }));
    }

    function handleMakeChange(event) { 
        setCar((c) => ({
            ...c,
            make: event.target.value,
        }));
    }

    function handleModelChange(event) { 
        setCar((c) => ({
            ...c,
            model: event.target.value,
        }));
    }

    const [foods, setFoods] = useState(["Apple", "Banana", "Cherry", "Orange", "Pineapple"]);

    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value="";

        setFoods(f=>[...f,newFood]);
    }

    function handleRemoveFood(index){
        setFoods(f=>f.filter((_,i)=>i!==index));
    }

    return (
        <div>
            <p>
                Your Favorite Car is {car.year} {car.make} {car.model}
            </p>

            <input type="number" value={car.year} onChange={handleYearChange}/>
            <br />
            <input type="text" value={car.make} onChange={handleMakeChange}/>
            <br />
            <input type="text" value={car.model} onChange={handleModelChange}/>
            <br />

            <h2>List Of Foods</h2>
            <ul>
                {foods.map((food,index)=>(
                    <li key={index} onClick={()=>handleRemoveFood(index)}>
                        {food}
                    </li>
                ))}
            </ul>

            <input type="text" id="foodInput" placeholder="Enter Food Name "/>
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    );
}

export default MyComponent;
