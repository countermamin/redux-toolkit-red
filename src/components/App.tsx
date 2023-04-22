import { useState } from 'react';
import { useGetRecipesQuery } from '../store/api/api';
import CreateRecipe from './create-recipe/CreateRecipe';
import Header from './header/Header';
import RecipeItem from './recipe-item/RecipeItem';
import User from './user/User';

function App() {
    const [searchTerm, setSearchTerm] = useState('');
    const [queryTerm, setQueryTerm] = useState('');

    const { isLoading, data } = useGetRecipesQuery(queryTerm);

    const handleSearch = () => {
        setQueryTerm(searchTerm);
    };

    return (
        <section>
            <Header />
            <CreateRecipe />
            <div
                style={{
                    padding: 10,
                }}
            >
                <p>If you are wanna find</p>
                <input
                    type='search'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder='Enter searcj term'
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            {/* <User /> */}
            <div>
                {isLoading ? (
                    <div>Loading...</div>
                ) : data ? (
                    data.map((recipe) => (
                        <RecipeItem key={recipe.id} recipe={recipe} />
                    ))
                ) : (
                    <div>Not Found</div>
                )}
            </div>
        </section>
    );
}

export default App;
