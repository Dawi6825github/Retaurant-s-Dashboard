import { Card, Descriptions, Divider, List, Button } from 'antd'
import dishes from '../../assets/data/dishes.json'
import { useParams } from 'react-router-dom'


const DetailedOrder = function () {
    const { id } = useParams();
    return (
        <Card title={`Order ${id}`} style={{ margin: 20 }}>

            <Descriptions bordered column={{ lg: 1, md: 1, sm: 1 }}>
                <Descriptions.Item label="Customer">Dawit Tesfaye</Descriptions.Item>
                <Descriptions.Item label="Customer Address">MWU Student door</Descriptions.Item>
            </Descriptions>
            <Divider />

            <List
                dataSource={dishes}
                renderItem={(dishItem) => (
                    <List.Item>
                        <div style={{ fontweight: 'bold' }}>{dishItem.name} X{dishItem.quantity}</div>
                        <div>{dishItem.price} ETB</div>
                    </List.Item>
                )}
            />
            <Divider />
            <div>
                <h2 style={styles.totalSumContainer}>Total:</h2>
                <h2 style={styles.totalPrice}>42.96</h2>
            </div>
            <Divider />
            <div style={styles.buttonsContainer}>
                <Button  block type ='danger' size="large" style={styles.button}  >
                    Decline Order
                </Button>
                <Button Block type='primary' size="large"  style={styles.button}>
                    Accept Order
                </Button>
                <Button block type='primary' size="large"  >
                  Food Is Done
                </Button>
            </div>
        </Card>

    )
}

export default DetailedOrder;
const styles = {
    totalSumContainer: {
        flexDirection: 'row',
        display: 'flex'

    },
    totalPrice: {
        marginLeft: 'auto',
        fontweight: 'bold',
    },
    buttonsContainer: {
        display: 'flex', paddingbottom: 30
    },
    button: {
        marginRight: 20,
        marginLeft: 20,
    }
};

