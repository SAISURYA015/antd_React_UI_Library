import React, { useState } from 'react'
import { Button } from 'antd'
import { PoweroffOutlined } from '@ant-design/icons'


function AntButton() {
  const [loading, setLoading] = useState(false);

  const onButtonClick = (e) => {
    console.log('Button Clicked')
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }
  return (
    <div>
      <Button 
      type='primary'
      block
      loading={loading}
      icon={<PoweroffOutlined />}
      onClick={onButtonClick}
      >My First Button</Button>
    </div>
  )
}

export default AntButton
