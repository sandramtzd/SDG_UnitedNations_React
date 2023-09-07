const Goal = ({goal}) => {



    const targetsDescription = goal.targets.filter(target => {
        return target.description
    }).map (target => {
        return <li key={target.code}>{target.code} {target.description}</li>
    })

    const code = parseInt(goal.code);

    return (
        <div className="container">
            <img src={require(`../../public/assets/${code}.png`)} />
            <h2>{goal.title}</h2>
            <p>{goal.description}</p>
            <ul>
                {targetsDescription}
            </ul>
            <button>Show</button>
            
        
        </div>
    )
};

export default Goal;