# sarvajeet-chai-aur-react
### Popular hooks that are used in current

 


| **Hook**               | **Purpose**                                       | **Example**                                    |
|-----------------------|---------------------------------------------------|------------------------------------------------|
| `useState`            | Manages component state                          | `const [count, setCount] = useState(0);`       |
| `useEffect`           | Handles side effects                              | `useEffect(() => { fetchData(); }, [count]);`  |
| `useContext`          | Accesses global state                             | `const user = useContext(UserContext);`        |
| `useRef`              | Accesses DOM directly / Persist values            | `const inputRef = useRef(null);`               |
| `useReducer`          | Manages complex state logic                       | `const [state, dispatch] = useReducer(...);`   |
| `useMemo`             | Memoizes values                                   | `const result = useMemo(() => compute(), []);` |
| `useCallback`         | Memoizes functions                                | `const handleClick = useCallback(() => {...}, []);` |
| `useLayoutEffect`     | Runs synchronously after render                   | `useLayoutEffect(() => {...});`                |
| `useImperativeHandle` | Customizes `ref` for child components             | `useImperativeHandle(ref, () => ({...}));`     |
| `useNavigate`         | Navigates programmatically (React Router)         | `navigate('/home');`                           |
| `useLocation`         | Accesses current URL (React Router)               | `const location = useLocation();`              |
| `useParams`           | Retrieves URL parameters (React Router)           | `const { id } = useParams();`                  |
| `useForm`             | Manages form state (React Hook Form)              | `const { register } = useForm();`              |
| `useSearchParams`     | Manages query parameters (React Router)           | `setSearchParams({ q: 'react' });`             |
| `useFetcher`          | Fetches data (React Router/React Query)           | `fetcher.load('/api/data');`                   |
| `useTransition`       | Manages transitions without blocking UI           | `const [isPending, startTransition] = useTransition();` |
| `useDeferredValue`    | Delays updating non-critical state                | `const deferred = useDeferredValue(value);`    |
| `useId`               | Generates unique IDs                              | `const id = useId();`                          |
