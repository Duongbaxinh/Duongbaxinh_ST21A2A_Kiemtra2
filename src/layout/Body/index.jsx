import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { HeartIcon, PaperAirplaneIcon, TrashIcon, CalendarIcon, PencilSquareIcon, MagnifyingGlassCircleIcon, ArrowUpOnSquareIcon } from 'react-native-heroicons/outline';

import axios, { CanceledError } from 'axios';
import { TouchableOpacity } from 'react-native';
import { images } from '../../assets/image';

function Body(props) {

    const [listNode, setListNode] = useState(
        [
            {
                id: 1,
                content: "node_01",
                title: "todo_01",
            },
            {
                id: 2,
                content: "node_02",
                title: "todo_03",
            },
            {
                id: 3,
                content: "node_03",
                title: "todo_03",
            },
            {
                id: 4,
                content: "node_04",
                title: "todo_04",
            },
        ])
    const [valueList, setValueList] = useState({
        title: '',
        content: ''
    })
    const [valueUpdate, setValueUpdate] = useState('')
    const [isUpdate, setIsUpdate] = useState({
        id: null,
        update: false
    })
    const [reloadPage, setReloadPage] = useState(false)
    const handleAddNode = () => {
        console.log('run at here', valueList);
        const newNode = { id: listNode.length + 1, content: valueList.content, title: valueList.title, };
        setListNode(prevListNode => [...prevListNode, newNode]);
    };
    const handleDeleteNode = (id) => {
        const updatedListNode = listNode.filter(node => node.id !== id);
        setListNode(updatedListNode);
    }
    const handleUpdateNode = (id) => {

        const updatedListNode = listNode.map(node => {
            if (node.id === id) {
                const updateNode = { ...node, content: valueUpdate }
                return { ...node, updateNode };
            }
            return node;
        });

        console.log('kdjfd', updatedListNode)
        // Cập nhật trạng thái của mảng node bằng mảng mới đã được cập nhật
        setListNode(() => [...updatedListNode]);
        setIsUpdate({ ...isUpdate, id: null, update: false })

    }
    return (
        <View style={styles.container}>
            <Text>{listNode.length}</Text>
            <Text style={styles.header}>Node</Text>
            <View style={styles.inputComment}>
                <TextInput placeholder="Nhap title" onChange={(e) => { setValueList({ ...valueList, title: e.target.value }) }}
                    style={{ flex: 1, backgroundColor: 'yellow', padding: 10 }} />
                <TextInput placeholder="Nhap content" onChange={(e) => { setValueList({ ...valueList, content: e.target.value }) }}
                    style={{ flex: 1, backgroundColor: 'yellow', padding: 10 }} />
                <TouchableOpacity onPress={() => handleAddNode()} >
                    <Text style={{ fontSize: '30px', fontWeight: 'bold', textAlign: 'center', padding: '20px', backgroundColor: 'green' }}>Add</Text>
                </TouchableOpacity> :
            </View>
            <Text style={{ textAlign: 'center', fontSize: '20px', fontWeight: 'bold', padding: '20px' }}>List Node</Text>
            <ScrollView style={{ width: '100%', height: 200, display: 'flex', gap: '20px' }}>

                {listNode.map((item) => (
                    <View style={styles.listItem}>
                        <View>
                            <Text style={{ fontSize: '20px', fontWeight: 'bold', textAlign: 'center' }}> {item.title}</Text>
                            {(isUpdate.update && isUpdate.id === item.id) ? <TextInput onChange={() => setValueUpdate(e.target.value)} /> : <Text>{item.content}</Text>}
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                            {!isUpdate.update ?
                                <TouchableOpacity onPress={() => setIsUpdate({ ...isUpdate, id: item.id, update: true })}>
                                    <PencilSquareIcon onPress={() => setIsUpdate({ ...isUpdate, id: item.id, update: true })} />
                                </TouchableOpacity>

                                :
                                <TouchableOpacity onPress={() => handleUpdateNode(item.id)}>
                                    <ArrowUpOnSquareIcon />
                                </TouchableOpacity>

                            }

                            <TouchableOpacity onPress={() => handleDeleteNode(item.id)}>
                                <TrashIcon />
                            </TouchableOpacity>
                        </View>

                    </View>
                ))}

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: '100%',
        border: '1px solid red',
    },
    header: {
        fontSize: '50px',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    boxlist: {
        width: '100%',
        height: 'auto',
        padding: '35px',
        display: 'flex',
        gap: '15px'
    },
    listItem: {
        width: '100%',
        paddingHorizontal: 15,
        paddingVertical: 20,
        backgroundColor: '#00FFFF',
        display: 'flex',
        justifyContent: 'space-between',
        gap: '15px',
        borderRadius: '10px',
        marginTop: 10
    },
    commentItem: {
        display: 'flex',
        width: '100%',
        backgroundColor: '#F6F6F6',
        padding: 10,
        gap: 15,
        marginTop: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    }
})
export default Body;