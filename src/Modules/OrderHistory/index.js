import { Card ,Table ,Tag} from 'antd'
import ordersHistory from '../../assets/data/orders-history.json'
const orderHistory = () => {

        const tablecolumns = [
            {
                title:"Order ID",
                dataIndex:"orderID",
                key:"orderID"
            },
            {
                title:"Delivery Address",
                dataIndex:'deliveryAddress',
                key:'deliveryaddress',
            },
            {
                title:"price",
                dataIndex:'price',
                key:'price',
                render: (price) => `${price} ETB`
            },
            {
             title:'Status',
             dataIndex: 'status',
             key:"status",
             render: (status) => <Tag color = {status ==='Delivered' ? 'green' : 'red'}>{status}</Tag>
    
            },
            
        ];
        return (
            <Card title={'History Orders'} style={{margin:20}}>
     <Table
     dataSource={ordersHistory}
     columns={tablecolumns}
     rowkey='orderId'

     
     />
            </Card>
         )

}
export default orderHistory;