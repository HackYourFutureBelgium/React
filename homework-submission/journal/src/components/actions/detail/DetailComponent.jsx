import React from 'react'
import { Typography } from 'antd';

const DetailComponent = (data) => {
  const { Title, Paragraph } = Typography;
  data = data.data[0]
  
  return (
    <Typography>
      <Title>
        {data.title}
      </Title>
      <Paragraph>
        {data.content}
      </Paragraph>
    </Typography>
  )
}

export default DetailComponent
