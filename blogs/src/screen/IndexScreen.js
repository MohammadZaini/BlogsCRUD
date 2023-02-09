import React, { useContext } from "react";
import {View, Text, StyleSheet, FlatList, Button, TouchableOpacity} from 'react-native';
import { Context } from "./context/blogContext";
import { Ionicons } from '@expo/vector-icons';

const IndexScreen = () => {
    const {state, addBlogPost, deleteBlogPost} = useContext(Context);

    return (
        <View>
        <Button title='Add Blog Post' onPress={addBlogPost} />

        
        <FlatList
            data={state}
            keyExtractor={(blog) => blog.title}
            renderItem={({item}) => {
            return (
            <View  style={styles.row} >

                <Text>{item.title}</Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)} >
                    <Ionicons style={styles.deleteIcon} name="trash-outline" size={24} color="black" />
                </TouchableOpacity>
            </View>
            )
            }}
        />

    </View>
    );
};

const styles = StyleSheet.create({
    row: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    deleteIcon: {
        justifyContent: 'flex-end'
    }

});

export default IndexScreen;