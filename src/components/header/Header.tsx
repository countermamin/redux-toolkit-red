import styles from './Header.module.css';
import { BsFillBookmarkHeartFill } from 'react-icons/bs';
import { useFavorites } from '../../hooks/useFavorites';
import { useActions } from '../../hooks/useActions';
import RecipeItem from '../recipe-item/RecipeItem';
import { useState } from 'react';

const Header = () => {
    const { favorites } = useFavorites();

    const [isActive, setIsActive] = useState(false);

    const toggleActive = () => {
        setIsActive((current) => !current);
    };

    return (
        <header className={styles.header}>
            <BsFillBookmarkHeartFill fontSize={20} onClick={toggleActive} />
            <span>{favorites.length}</span>
            <div
                className={
                    !isActive ? styles.headerCart : styles.headerCartActive
                }
            >
                {favorites.length > 0 ? (
                    favorites.map((el) => (
                        <RecipeItem key={el.id} recipe={{ ...el }} />
                    ))
                ) : (
                    <p>No products</p>
                )}
            </div>
        </header>
    );
};

export default Header;
