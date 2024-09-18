import { useState } from "react";
import './Goals.css';

const Goals = () => {
    const [goalData, setGoalData] = useState({
        bodyWeight: '',
        muscleGain: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setGoalData({ ...goalData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Goals set:', goalData);
        setGoalData({ bodyWeight: '', muscleGain: '' });
    };

    return (
        <div className="goals-container">
            <h1>Set Your Fitness Goals</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Target Body Weight (kg):
                        <input
                            type="number"
                            name="bodyWeight"
                            value={goalData.bodyWeight}
                            onChange={handleChange}
                            placeholder="Enter your target weight"
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Target Muscle Gain (kg):
                        <input
                            type="number"
                            name="muscleGain"
                            value={goalData.muscleGain}
                            onChange={handleChange}
                            placeholder="Enter your target muscle gain"
                            required
                        />
                    </label>
                </div>
                <button type="submit">Set Goals</button>
            </form>
            <div className="goal-summary">
                <h2>Your Goals</h2>
                <p>Target Body Weight: {goalData.bodyWeight} kg</p>
                <p>Target Muscle Gain: {goalData.muscleGain} kg</p>
            </div>
        </div>
    );
};

export default Goals;