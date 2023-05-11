import useLocalStorage from '../../hooks/useLocalStorage';
import styles from './SignupForm.module.css';

// console.log(undefined || 1);
// console.log(undefined ?? 1);
// console.log(null || 1);
// console.log(null ?? 1);

// console.log(0 || 1);
// console.log(0 ?? 1);
// console.log(false || 1);
// console.log(false ?? 1);

// const useLocalStorage = (key, defaultValue) => {
//   const [state, setState] = useState(() => {
//     return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
//   });

//   useEffect(() => {
//     window.localStorage.setItem(key, JSON.stringify(state));
//   }, [key, state]);
//   return [state, setState];
// };
//вызывается 1 раз при инициализации(после игнорируется) необходимо передать ананимную функцию
export default function SignupForm() {
  const [email, setEmail] = useLocalStorage('email', '');
  const [password, setPassword] = useLocalStorage('password', '');
  // const [email, setEmail] = useState(
  //   () => JSON.parse(window.localStorage.getItem('email')) ?? ''
  // );
  // const [password, setPassword] = useState(() => {
  //   return JSON.parse(window.localStorage.getItem('password')) ?? '';
  // });

  const handleChage = e => {
    const { name, value } = e.target;
    console.log(name);
    switch (e.target.name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  // useEffect(() => {
  //   console.log('email useEffect');
  //   window.localStorage.setItem('email', JSON.stringify(email));
  // }, [email]);

  // useEffect(() => {
  //   console.log('password useEffect');
  //   window.localStorage.setItem('password', JSON.stringify(password));
  // }, [password]);

  return (
    <form className={styles.form} autoComplete="off">
      <label className={styles.label}>
        <span>Почта</span>
        <input type="email" name="email" onChange={handleChage} value={email} />
      </label>
      <label className={styles.label}>
        <span>Пароль</span>
        <input
          type="password"
          name="password"
          onChange={handleChage}
          value={password}
        />
      </label>

      <button type="submit">Зарегистрироваться</button>
    </form>
  );
}
