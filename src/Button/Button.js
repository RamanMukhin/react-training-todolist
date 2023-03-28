import { memo } from 'react';
import '../App.css';

const Button = ({ title, className, onClick }) => {
    console.log('Render Button');
    return (
        <button className={className} onClick={onClick}>{title}</button>
    );
};

export default memo(Button);
