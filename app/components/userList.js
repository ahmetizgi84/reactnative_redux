import React, { useState, useEffect } from 'react'
import { DataTable } from 'react-native-paper';
import { useDispatch } from 'react-redux'
import { setCharacterLength } from '../redux/actions/actions'


const UserList = () => {
    const dispatch = useDispatch();
    const [characters, setCharacters] = useState([])

    const getUserList = async () => {
        await fetch('https://rickandmortyapi.com/api/character/1,2,3,4,5').then(res => res.json()).then(jsonRes => {
            setCharacters(jsonRes)
            dispatch(setCharacterLength(jsonRes.length))
        })
    }

    useEffect(() => {
        getUserList();
    }, [])

    return (
        <DataTable>
            <DataTable.Header>
                <DataTable.Title>Gender</DataTable.Title>
                <DataTable.Title numeric>Name</DataTable.Title>
                <DataTable.Title numeric>Species</DataTable.Title>
            </DataTable.Header>

            {
                characters?.map(character => (
                    <DataTable.Row key={character.id}>
                        <DataTable.Cell>{character.gender}</DataTable.Cell>
                        <DataTable.Cell numeric>{character.name}</DataTable.Cell>
                        <DataTable.Cell numeric>{character.species}</DataTable.Cell>
                    </DataTable.Row>
                ))
            }
        </DataTable>
    )
}

export default UserList
