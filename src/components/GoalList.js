import Goal from "./Goal";
const GoalList = ({goals}) => {

    //const limitedGoals = goals.splice(0, 4);


    const mappedGoals = goals.map(goal => {
        return <Goal goal = {goal} key={goal.code}/>
    })

    return (

        <div className="grid-container">

            {mappedGoals}
        
        </div>
    )
};

export default GoalList;