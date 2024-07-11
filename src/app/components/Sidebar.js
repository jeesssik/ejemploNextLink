// components/Sidebar.js
import Link from 'next/link';
import styles from '../styles/Sidebar.module.css';


const Sidebar = () => {
return (
<div className={styles.sidebar}>
    <h2>Navigation</h2>
    <ul>
    <li><Link href="/">Home</Link></li>
    <li><Link href="./about">About</Link></li>
    <li><Link href="/services">Services</Link></li>
    <li><Link href="/contact">Contact</Link></li>
    <li><Link href="/gallery">Gallery</Link></li>
    </ul>
</div>
);
};

export default Sidebar;
