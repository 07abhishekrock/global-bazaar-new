import styles from '../styles/form.module.scss'
import * as yup from 'yup';
import { useFormik } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faCartPlus, faMoneyBillWave, faPhoneAlt, faTruckLoading } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';


const Signup = (props)=>{
    const form = useFormik({
        initialValues:{
            'email' : '',
            'password' : '',
            'confirmPassword' : '',
            'name' : '',
            'std_code':'',
            'phoneNumber':''
        },
        validationSchema : yup.object({
            email : yup.string().required().email(),
            password : yup.string().required().min(8),
            confirmPassword : yup.string().required('You need to reenter your password').oneOf([yup.ref('password')] , 'passwords do not match'),
            name:yup.string().required(),
            std_code : yup.string(),
            phoneNumber:yup.string().required().max(15)
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
                <p>
                    Join Today , and start shopping right away.
                    <ul>
                        <li><FontAwesomeIcon icon={faCartPlus}/>More than 20000 products</li>
                        <li><FontAwesomeIcon icon={faBoxOpen}/>400+ Categories</li>
                        <li><FontAwesomeIcon icon={faMoneyBillWave}/>Heavy Discounts on all items.</li>
                        <li><FontAwesomeIcon icon={faPhoneAlt}/>Supreme Customer Service</li>
                        <li><FontAwesomeIcon icon={faTruckLoading}/>On Time Delivery</li>
                    </ul>
                </p>
                <span>Already A Member ? <Link href="/login">Login Here</Link></span>
            </div>
            <form className={styles['form-window-form']} onSubmit={form.handleSubmit}>
                <h2>Create A New Account</h2>
                <div className={styles['input-group']}>
                    <input type="text" error={form.errors.name ? "1" : "0"} name="name" {...form.getFieldProps('name')}/> 
                    <label>Your Name</label>
                    <i>{form.errors.name}</i>
                </div>
                <div className={styles['multiple-inputs-group']}>
                    <div className={styles['input-group']}>
                        <select {...form.getFieldProps('std_code')}>
                            <option>+91</option>
                            <option>+92</option>
                            <option>+1</option>
                            <option>+11</option>
                        </select>
                    </div>
                    <div className={styles['input-group']}>
                        <input type="text" error={form.errors.phoneNumber ? "1" : "0"} name="phoneNumber" {...form.getFieldProps('phoneNumber')}/>
                        <label>Phone Number</label>
                        <i>{form.errors.phoneNumber}</i>
                    </div>
                </div>
                <div className={styles['input-group']}>
                    <input type="text" error={form.errors.email ? "1" : "0"} name="email" {...form.getFieldProps('email')}/>
                    <label>Your Email</label>
                    <i>{form.errors.email}</i>
                </div>
                <div className={styles['input-group']}>
                    <input type="password" error={form.errors.password ? "1" : "0"} name="password" {...form.getFieldProps('password')}/>
                    <label>Password</label>
                    <i>{form.errors.password}</i>
                </div>
                <div className={styles['input-group']}>
                    <input type="password" error={form.errors.confirmPassword ? "1" : "0"} name="confirmPassword" {...form.getFieldProps('confirmPassword')}/>
                    <label>Confirm Password</label>
                    <i>{form.errors.confirmPassword}</i>
                </div>

                <button type="submit">SignUp Now</button>
                <span>Already A Member ? <Link href="/login">Login Here</Link></span>
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

export default Signup;