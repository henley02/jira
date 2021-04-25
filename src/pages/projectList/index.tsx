import {useEffect, useState} from 'react';

import SearchList from "./components/SearchList";
import SearchPanel from "./components/SearchPanel";
import {useDebounce, cleanObject} from "../../utils";
import {useHttp} from "../../utils/http";

const ProjectList = () => {
    const [param, setParam] = useState({name: '', personId: ''})
    const [users, setUsers] = useState([])
    const [lists, setLists] = useState([])

    const debounceParam = useDebounce(param, 500);
    const httpFetch = useHttp();

    useEffect(() => {
        httpFetch('users').then(setUsers)
    }, [])

    useEffect(() => {
        httpFetch('projects', {data: cleanObject(debounceParam)}).then(setLists)
    }, [debounceParam]);

    return <>
        <h1>项目列表</h1>
        <SearchPanel users={users} param={param} setParam={setParam}/>
        <SearchList list={lists} users={users}/>
    </>
}


export default ProjectList
