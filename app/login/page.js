"use client"
import React, { useState } from 'react';
import styles from './page.module.css';
import LoginLayout from '@/components/loginModal/loginLayout';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from 'react-icons/hi';
import { signIn } from 'next-auth/react';

const Page = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [show, setShow] = useState({ password: false, conPassword: false });

//   // Google Handler function
//   async function handleGoogleSignin() {
//     signIn('google', { callbackUrl: 'http://localhost:3000/login' });
//   }

//   // Github Login
//   async function handleGithubSignin() {
//     signIn('github', { callbackUrl: 'http://localhost:3000/login' });
//   }

  const toggleForms = () => {
    setShowLoginForm(!showLoginForm);
    setShowRegisterForm(!showRegisterForm);
  };

  return (
    <LoginLayout>
      <Head>
        <title>{showLoginForm ? 'Login' : 'Register'}</title>
      </Head>

      <section className="w-4/5 mt-2 mx-10 my-auto flex flex-col gap-2">
       
        {/* Conditional rendering based on showLoginForm */}
        {showLoginForm && (
            <>
                <div className="title">
                    <h1 className="text-green-800 text-3xl font-bold py-4">Login</h1>
                    <p className="w-3/4 mx-auto text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, veniam..
                    </p>
                </div>

                <form className="flex flex-col gap-2">
                    <div className={styles.input_group}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className={styles.input_text}
                    />
                    <span className="icon flex items-center px-4">
                        <HiAtSymbol size={25} />
                    </span>

                    <span className="text-red-200"></span>
                    </div>

                    <div className={styles.input_group}>
                    <input
                        type={`${show ? 'text' : 'password'}`}
                        name="password"
                        placeholder="Password"
                        className={styles.input_text}
                    />
                    <span className="icon flex items-center px-4" onClick={() => setShow(!show)}>
                        <HiFingerPrint size={25} />
                    </span>
                    </div>

                    {/* login buttons */}
                    <div className="input-button">
                    <button type="submit" className={styles.button}>
                        Login
                    </button>
                    </div>
                </form>
            </>
        )}

        {/* Conditional rendering based on showRegisterForm */}
        {showRegisterForm && (
          <div className={`register-form ${showRegisterForm ? 'slide-in' : ''}`}>
            <div className="title">
                <h1 className="text-green-800 text-3xl font-bold py-4">Signup as Client</h1>
                <p className="w-3/4 mx-auto text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, veniam..
                </p>
            </div>

            <form className="flex flex-col gap-2">
              {/* Registration form fields */}
              <div className={styles.input_group}>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  className={styles.input_text}
                />
                <span className="icon flex items-center px-4">
                  <HiOutlineUser size={25} />
                </span>
              </div>

              <div className={styles.input_group}>
            <input
            type="email" 
            name="email"
            placeholder="Email"
            className={styles.input_text}
            />
            <span className="icon flex items-center px-4">
              <HiAtSymbol size={25} />
            </span>
          </div>

          <div className={styles.input_group}>
            <input
            type={`${show.password ? "text" : "password"}`} 
            name="password"
            placeholder="Password"
            className={styles.input_text}
            />
            <span className="icon flex items-center px-4" onClick={()=> setShow({...show, password: !show.password})}>
              <HiFingerPrint size={25} />
            </span>
          </div>

          <div className={styles.input_group}>
            <input
            type={`${show.conPassword ? "text" : "password"}`} 
            name="conPassword"
            placeholder="Confirm Password"
            className={styles.input_text}
            />
            <span className="icon flex items-center px-4" onClick={()=> setShow({...show, conPassword: !show.conPassword})}>
              <HiFingerPrint size={25} />
            </span>
          </div>

              {/* Signup button inside the form */}
              <div className="input-button">
                <button type="submit" className={styles.button}>
                  Signup
                </button>
              </div>
            </form>

            {/* Close button */}
            <button onClick={toggleForms} className="close-button">
              Login
            </button>
          </div>
        )}

        {/* Bottom */}
        <p className="text-center text-gray-400">
          {showLoginForm ? "Don't have an account yet?" : 'Already have an account?'}
          <button onClick={toggleForms} className="text-blue-700">
            {showLoginForm ? 'Sign Up' : 'Login'}
          </button>
        </p>
      </section>
    </LoginLayout>
  );
};

export default Page;
