import React from 'react';
import styles from './RecipeItem.module.css';
import { useActions } from '../../hooks/useActions';
import { useFavorites } from '../../hooks/useFavorites';
import { IRecipe } from '../../types/recipe.types';

interface IRecipeItem {
    recipe: IRecipe;
}

const RecipeItem = ({ recipe }: IRecipeItem) => {
    const { favorites } = useFavorites();
    const { toggleToFavorites } = useActions();

    const isExists = favorites.some((r) => r.id === recipe.id);

    return (
        <div className={styles.item}>
            <img src={recipe.image} alt={recipe.name} width={50} height={50} />
            <h3>{recipe.name}</h3>
            <button onClick={() => toggleToFavorites(recipe)}>
                {isExists ? 'Remove from favorites' : 'Add to favorites'}
            </button>
        </div>
    );
};

export default React.memo(RecipeItem);
