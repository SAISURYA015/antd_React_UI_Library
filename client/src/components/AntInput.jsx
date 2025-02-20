import { Input } from 'antd'
import React from 'react'
import {UserOutlined} from '@ant-design/icons'

const AntInput = () => {
  return (
    <div>
     <Input.Search
     placeholder='name'
     maxLength={30}
     prefix={<UserOutlined />}
     allowClear
    >
     
     </Input.Search>
    </div>
  )
}

export default AntInput
