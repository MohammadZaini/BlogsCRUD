import createDataContext from "./createDataContext";

    const blogReducer = (state, action) => {
        switch (action.type) {
            case 'add_blogPost':
                return [...state,   
                        { id: Math.floor((Math.random() * 99999 )) , 
                        title: `Custom Blog Post #${state.length + 1}`}];
            case 'delete_blogpost':
                return state.filter((blogPost) => blogPost.id !== action.payload)
            default:
                return state;
        };
    };

    const addBlogPost = dispatch => () => dispatch({ type: 'add_blogPost' });
    const deleteBlogPost = dispatch => (id) => dispatch({ type: 'delete_blogpost', payload: id });

export const { Context, Provider } = createDataContext(
    blogReducer, {addBlogPost, deleteBlogPost}, []);