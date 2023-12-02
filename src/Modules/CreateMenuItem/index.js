import { Form, Input, Button,Card,InputNumber} from 'antd'



const CreateMenuItem = () => {
  const {TextArea} = Input;
    return(
<Card title="New Menu Item" style={{ margin:20}}>
<Form layout='vertical' wrapperCol={{ span: 8}}>
<Form.Item label="Dish Name" required>
  <Input placeholder="please enter dish name"/>
</Form.Item>  
<Form.Item label="Dish Description" >
  <TextArea rows={5} placeholder="please enter dish description"/>
</Form.Item> 
<Form.Item label="Price ETB" required >
  <InputNumber />
</Form.Item> 
<Form.Item  >
  <Button type="primary">Submit</Button>
</Form.Item> 
</Form>
</Card>
    )
};
export default CreateMenuItem;