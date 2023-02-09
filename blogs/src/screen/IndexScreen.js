import React, { useContext } from "react";
import {View, Text, StyleSheet, FlatList, Button} from 'react-native';
import BlogContext from "./context/blogContext";

const IndexScreen = () => {
    const {data, addBlogPost} = useContext(BlogContext);

    return (
        <View>
        <Button title='Add Blog Post' onPress={addBlogPost} />
        <FlatList
            data={data}
            keyExtractor={(blog) => blog.title}
            renderItem={({item}) => {
            return <Text>{item.title}</Text>
            }}
        />

    </View>
    );
};

const styles = StyleSheet.create({});

export default IndexScreen;