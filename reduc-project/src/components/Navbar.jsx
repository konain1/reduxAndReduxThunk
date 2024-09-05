import React from 'react';
import { useSelector } from 'react-redux';
function Navbar() {


  const cartItems = useSelector(state=>state.cartStore.cart)
  console.log(cartItems)
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}><a href="" style={styles.link}>Home</a></li>
        <li style={styles.navItem}><a href="#" style={styles.link}>Service</a></li>
        <li style={styles.navItem}><a href="#" style={styles.link}>About</a></li>
        <li style={styles.navItem}><a href="/cart.jsx" style={styles.link}>Cart :{cartItems.length} </a></li>
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    backgroundColor: '#333',
    padding: '10px',
  },
  navList: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'space-around',
  },
  navItem: {
    padding: '10px',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '18px',
    fontWeight: 'bold',
  },
};

export default Navbar;
