import * as React from 'react';

export const App = () => {
    const [name, setName] = React.useState("");
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        setName("SSR");
    }, []);

    const handleCountUp = () => {
        setCount(prev => prev + 1);
    }

    return (
        <div>
            <h1>Hello {name}!</h1>
            <main>
                <p>
                    Count: {count}
                </p>
                <button onClick={handleCountUp}>
                    Count Up
                </button>
            </main>
        </div>
    )
}
