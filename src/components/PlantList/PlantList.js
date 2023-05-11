import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';


function PlantList() {
    const dispatch = useDispatch();

    const reduxState = useSelector(store => store);
    const plants = useSelector(store => store.plantList);
    console.log(plants);


    useEffect(() => {
        console.log('component did mount');
        // dispatch an action to request the plantList from the API
       getPlants()
    }, []); 

    const getPlants = () => {
        dispatch({
            type: 'SAGA/GET_PLANTS'
        })
    }

    return (
        <div>
            <h3>This is the plant list</h3>
            {
                plants.map(plant => {
                    return (
                        
                            <p key={plant.id}>{plant.name}</p> 
                        
                    )
                })
            }
            <pre>{JSON.stringify(reduxState)}</pre>
        </div>
    );
}

export default PlantList;
