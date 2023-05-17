import {Button} from 'antd';
import {GithubOutlined, TwitterOutlined} from '@ant-design/icons';

const MyFooter = () => {
    return (
        <>
            <Button
                type="link"
                href="https://twitter.com/ZhuiMeng_eth"
                target="_blank"
                icon={<TwitterOutlined/>}
                size={"middle"}
            />
            <Button
                type="link"
                href="https://github.com/wxtsky/MyWalletScan"
                target="_blank"
                icon={<GithubOutlined/>}
                size={"middle"}
            />
        </>
    )
}
export default MyFooter
