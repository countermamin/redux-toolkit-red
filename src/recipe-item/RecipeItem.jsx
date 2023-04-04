import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './RecipeItem.module.css';
import { actions } from '../store/favorites/favorite.slice';

const RecipeItem = ({ recipe }) => {
    const { favorites } = useSelector((state) => state);
    const dispatch = useDispatch();

    const isExists = favorites.some((r) => r.id === recipe.id);

    return (
        <div className={styles.item}>
            <h3>{recipe.name}</h3>
            <button onClick={() => dispatch(actions.toggleToFavites(recipe))}>
                {isExists ? 'Remove from favorites' : 'Add to favorites'}
            </button>
        </div>
    );
};

export default React.memo(RecipeItem);
