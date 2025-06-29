import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Home.module.css';
import Card from '../../components/shared/Card/Card';
import Button from '../../components/shared/Button/Button';

export const Home = () => {
const signinLinkStyle ={
    color: '402969',
    fontWeight: "bold",
    textDecoration: 'none',
    marginLeft: '10px',
}
const navigate = useNavigate();

function startRegister(){
  navigate('/register');
  console.log('button clicked..');
}

  return (
    <div className={styles.cardWrapper}>
      <Card title ="Welcome to SocialMic!!" icon = "logo">
    
        <p className={styles.text}>
          Your go-to platform for gaining knowledge, sharing ideas, and connecting
          with like-minded people. Whether you're here to learn, grow, or build
          meaningful connections. Social Mic lets you grow together!
        </p>
        <div>
          <Button onClick = {startRegister} text = "Get your username" />
        </div>
        <div className ={styles.signinWrapper}>
          <span className ={styles.hasInvite}>
            Have an invite text?
            </span>
          <Link style = {signinLinkStyle} to="/login">   Sign in</Link>
        </div>
      </Card>
    </div>
  );
};

export default Home;
