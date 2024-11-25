export const enExplanations = {
    react: {
        "declare-state": {
            explanation: `Declare state in React using useState Hook.

useState is one of React's most fundamental Hooks that returns an array containing:
1. Current state value
2. State update function

Basic syntax: const [state, setState] = useState(initialValue)

Features:
• Can store any type of value (numbers, strings, objects, arrays)
• State updates trigger component re-rendering
• Multiple useState can be used to manage different states`,
            code: {
                "Name.jsx": {
                    explanation: "This example shows how to use useState to manage a simple name state"
                }
            }
        }
        // ... 其他英文说明
    }
}; 