```javascript
// pages/index.js

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      {/* This component will cause the error in Next.js 15 */}      <MyComponent />
    </div>
  );
}

// components/MyComponent.js

function MyComponent() {
  const [count, setCount] = React.useState(0);
  // This will throw an error in Next.js 15, 
  // because React.useState is not allowed to be used within the component. 
  // This is only allowed in functional components.
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <div>Count: {count}</div>;
}
```