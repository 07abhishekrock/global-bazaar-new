import styles from '../styles/form.module.scss'
import * as yup from 'yup';
import { useFormik } from 'formik';
import Link from 'next/link';


const Login = (props)=>{
    const form = useFormik({
        initialValues:{
            'email' : '',
            'password' : '',
            'stayLoggedIn' : false
        },
        validationSchema : yup.object({
            email : yup.string().required().email(),
            password : yup.string().required().min(8),
            stayLoggedIn : yup.bool()
        }),
        validateOnBlur:false,
        validateOnChange:false,
        onSubmit : (values)=>{
            console.log(values)
        }
    })
    return (
        <>
        <div className={styles["logo"].concat(' ' , 'logo-with-image')}></div>
        <div className={styles['form-window-wrapper']}>
            <div className={styles['form-window-info']}>
                <h1>Global <i>Bazaar</i></h1>
                <p>Become a member to enjoy exclusive benefits and many privileges.</p>
                <span>Not A Member ? <Link href="/signup">Sign Up</Link></span>
            </div>
            <form className={styles['form-window-form']} onSubmit={form.handleSubmit}>
                <h2>Welcome Back</h2>
                <div className={styles['input-group']}>
                    <input type="text" error={form.errors.email ? "1" : "0"} name="email" {...form.getFieldProps('email')}/> 
                    <label>Email</label>
                    <i>{form.errors.email}</i>
                </div>
                <div className={styles['input-group']}>
                    <input type="password" error={form.errors.password ? "1" : "0"} name="password" {...form.getFieldProps('password')}/>
                    <label>Password</label>
                    <i>{form.errors.password}</i>
                </div>
                <div className={styles['input-group']}>
                    <input type="checkbox" {...form.getFieldProps('stayLoggedIn')}/>
                    <label>Stay Logged In</label>
                </div>
                <button type="submit">Login Now</button>
                <span>Not A Member ? <Link href="/signup">Sign Up</Link></span>
            </form>
        </div>
        </>
    );
}

export async function getStaticProps(){
    return (
        {
            props : {
                isLoginOrSignupPage : true
            }
        }
    )
}

export default Login;