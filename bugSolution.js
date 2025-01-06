```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const intervalId = setInterval(() => {
      if (isMounted) {
        setCount(prevCount => prevCount + 1);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
      setIsMounted(false);
      console.log('Component unmounting');
    };
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
    </div>
  );
}
```