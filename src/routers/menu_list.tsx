import { CommentOutlined, GithubOutlined, PictureOutlined, ShopOutlined } from '@ant-design/icons'

const menuList = [
  {
    path: '/',
    name: '对话',
    icon: <CommentOutlined />,
    message: '与智能AI进行对话交流',
    modes: ['mix','proxy','business']
  },
  {
    path: '/draw',
    name: '绘画',
    icon: <PictureOutlined />,
    message: '利用智能AI绘画出图片',
    modes: ['mix','proxy','business']
  },
  {
    path: '/shop',
    name: '商城',
    icon: <ShopOutlined />,
    message: '账户余额和充值套餐记录',
    modes: ['mix','business']
  },
{
    path: 'http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=Iq1w_nKYwTFPWuB-zuVT-nrbdoPDB7Ll&authKey=zmSTAteoPmTPImnzDDnshlOQdOC%2BPRFgO5zedhjA%2Bkp5tSdcnNJtsPJ6y9uOV75l&noverify=0&group_code=345982124',
    name: 'QQ交流群',
    icon: <GithubOutlined />,
    message: '',
    modes: ['mix','proxy','business']
  }
]
export default menuList
