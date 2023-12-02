import {Form, Card,input,Button, Input} from 'antd'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
const Settings = () => {
    return(
<Card title="Restaurant Details" styles={{ margin:20 }}>
 <Form layout='vertical' wrapperCol={{ span:8}}>
    <Form.Item label="Restaurant Name" required>
        <Input placeholder="Enter restaurant name here"/>
    </Form.Item>
    <Form.Item label="Restaurant Address" required>
        
    </Form.Item>
    <Form.Item>
        <Button type="primary">Submit</Button>
    </Form.Item>
 </Form>
</Card>
    )

}

export default Settings;