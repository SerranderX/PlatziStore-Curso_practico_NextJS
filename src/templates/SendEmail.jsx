import React from 'react';
import styles from '@styles/SendEmail.module.scss';
import logo from '@logos/logo_yard_sale.svg';
import email from '@icons/email.svg';

const SendEmail = () => {
	return (
		<div className={styles.SendEmail}>
			<div className={`${styles['form-container']}`}>
				<img src={logo} alt="logo" className={styles.logo} />
				<h1 className={styles.title}>Email has been sent!</h1>
				<p className={styles.subtitle}>Please check your inbox for instructions on how to reset the password</p>
				<div className={`${styles['email-image']}`}>
					<img src={email} alt="email" />
				</div>
				<button className={`${styles['login-button']} ${styles['primary-button']}`}>Login</button>
				<p className={styles.resend}>
					<span>Didn't receive the email?</span>
					<a href="/">Resend</a>
				</p>
			</div>
		</div>
	);
}

export default SendEmail;
