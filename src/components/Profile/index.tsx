import { Space, Button, Typography } from 'antd'
import styled from '@emotion/styled'

const { Text } = Typography

const Logo = styled.img`
  height: 48px;
`

type ProfileProps = { profile: any }

const Profile = ({ profile }: ProfileProps) => {
  if (!profile.companyName) return null

  return (
    <Space direction="vertical">
      <Space>
        <Logo src={profile?.image} />
        <Button type="link" href={profile?.website} target="_blank">
          {profile?.companyName}
        </Button>
      </Space>
      <Text>{profile?.description}</Text>
      <Text>
        Sector: <b>{profile?.sector}</b>
      </Text>
      <Text>
        Industry: <b>{profile?.industry}</b>
      </Text>
      <Text>
        Price: <b>${profile?.price}</b>
      </Text>
    </Space>
  )
}

export default Profile
