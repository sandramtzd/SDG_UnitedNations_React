import { useEffect, useState } from "react";
import GoalList from "../components/GoalList";


const GoalContainer = () => {

    const [goals, setGoals] = useState(null);
    const loadData = async() => {
        const response = await fetch ("https://unstats.un.org/SDGAPI/v1/sdg/Goal/List?includechildren=true");
        const jsonData = await response.json();
        setGoals(jsonData);
    }

    

    useEffect(() => {
        loadData();
    }, []);

    return (

        <>
            
            { goals ? <GoalList goals={goals}/> : <p>loading ...</p>}
        
        </>
    )

}
export default GoalContainer;
