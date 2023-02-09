import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import React from "react";
import IndexScreen from "./src/screen/IndexScreen";
import { BlogProvider } from "./src/screen/context/blogContext";


const navigator = createStackNavigator({
    Index: IndexScreen,
},
    {
        initialRouteName: 'Index',
        defaultNavigationOptions: 'Blogs'
    }
    
); 

const App = createAppContainer(navigator);

export default () => {

    return <BlogProvider>
                <App/>
            </BlogProvider>
}