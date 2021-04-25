import {ChangeEvent, FC} from 'react';
import {Form, Input, Select} from "antd";

export interface IUser {
    id: string
    name: string
    email: string
    title: string
    organization: string
    token: string
}

interface ISearchPanelProps {
    users: IUser[],
    param: {
        name: string
        personId: string
    }
    setParam: (param: ISearchPanelProps['param']) => void
}

const SearchPanel: FC<ISearchPanelProps> = (props) => {
    const {users, param, setParam} = props
    return (
        <Form layout='inline'>
            <Form.Item>
                <Input
                    placeholder="项目名"
                    type='text'
                    value={param.name}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => setParam({...param, name: event.target.value})}
                />
            </Form.Item>
            <Form.Item>
                <Select
                    value={param.personId}
                    onChange={(value) => {
                        setParam({
                            ...param, personId: value
                        })
                    }}
                >
                    <Select.Option value={''}>负责人</Select.Option>
                    {
                        users.map(user => (
                            <Select.Option value={user.id} key={user.id}>{user.name}</Select.Option>
                        ))
                    }
                </Select>
            </Form.Item>
        </Form>
    )

}
export default SearchPanel
