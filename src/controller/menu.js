const adminMenus = [
  {
    path: 'config',
    label: '装机配置',
    icon: 'ClusterOutlined',
    element: 'PageLayout',
    componentPath: '../components/SaaSLayout',
    modulePath: './modules/config.tsx',
    children: [
      {
        path: 'deploy',
        label: '装机部署配置',
        icon: '',
        element: 'ConfigDeploy',
        componentPath: '../pages/config/deploy'
      },
      {
        path: 'module',
        label: '算法模块配置',
        icon: '',
        element: 'ConfigModule',
        componentPath: '../pages/config/module'
      }
    ]
  },
  {
    path: 'setting',
    label: '系统设置',
    icon: 'SettingOutlined',
    element: 'PageLayout',
    componentPath: '../components/SaaSLayout',
    modulePath: './modules/setting.tsx',
    children: [
      {
        path: 'users',
        label: '用户管理',
        icon: '',
        element: 'SettingUsers',
        componentPath: '../pages/setting/users'
      },
      {
        path: 'auth',
        label: '角色权限',
        icon: '',
        element: 'SettingAuth',
        componentPath: '../pages/setting/auth'
      },
      {
        path: 'transmission',
        label: '数据传输',
        icon: '',
        element: 'SettingTransmission',
        componentPath: '../pages/setting/transmission'
      },
      {
        path: 'template',
        label: '报告模板配置',
        icon: '',
        element: 'SettingTemplate',
        componentPath: '../pages/setting/template'
      }
    ]
  },
  {
    path: 'data',
    label: '数据管理',
    icon: 'SwapOutlined',
    element: 'PageLayout',
    componentPath: '../components/SaaSLayout',
    modulePath: './modules/data.tsx',
    children: [
      {
        path: 'receive',
        label: '接受队列',
        icon: '',
        element: 'DataReceive',
        componentPath: '../pages/data/receive'
      },
      {
        path: 'upload',
        label: '数据本地上传',
        icon: '',
        element: 'DataUpload',
        componentPath: '../pages/data/upload'
      },
      {
        path: 'pull',
        label: '数据外部拉取',
        icon: '',
        element: 'DataPull',
        componentPath: '../pages/data/pull'
      },
      {
        path: 'computed',
        label: '计算队列',
        icon: '',
        element: 'DataComputed',
        componentPath: '../pages/data/computed'
      },
      {
        path: 'push',
        label: '推送队列',
        icon: '',
        element: 'DataPush',
        componentPath: '../pages/data/push'
      },
      {
        path: 'manage',
        label: '数据操作管理',
        icon: '',
        element: 'DataManage',
        componentPath: '../pages/data/manage'
      }
    ]
  },
  {
    path: 'ai',
    label: 'AI权限',
    icon: 'TeamOutlined',
    element: 'PageAI',
    componentPath: '../pages/ai',
    modulePath: './modules/ai.tsx'
  },
  {
    path: 'algorithm',
    label: '算法模块管理',
    icon: 'UnorderedListOutlined',
    element: 'PageLayout',
    componentPath: '../components/SaaSLayout',
    modulePath: './modules/algorithm.tsx',
    children: [
      {
        path: 'patients',
        label: '病例列表',
        icon: '',
        element: 'AlgorithmPatients',
        componentPath: '../pages/algorithm/patients'
      }
    ]
  }
]
// 普通用户
const normalMenus = [
  {
    path: 'setting',
    label: '系统设置',
    icon: 'SettingOutlined',
    element: 'PageLayout',
    componentPath: '../components/SaaSLayout',
    modulePath: './modules/setting.tsx',
    children: [
      {
        path: 'auth',
        label: '角色权限',
        icon: '',
        element: 'SettingAuth',
        componentPath: '../pages/setting/auth'
      },
      {
        path: 'transmission',
        label: '数据传输',
        icon: '',
        element: 'SettingTransmission',
        componentPath: '../pages/setting/transmission'
      },
      {
        path: 'template',
        label: '报告模板配置',
        icon: '',
        element: 'SettingTemplate',
        componentPath: '../pages/setting/template'
      }
    ]
  },
  {
    path: 'data',
    label: '数据管理',
    icon: 'SwapOutlined',
    element: 'PageLayout',
    componentPath: '../components/SaaSLayout',
    modulePath: './modules/data.tsx',
    children: [
      {
        path: 'computed',
        label: '计算队列',
        icon: '',
        element: 'DataComputed',
        componentPath: '../pages/data/computed'
      },
      {
        path: 'push',
        label: '推送队列',
        icon: '',
        element: 'DataPush',
        componentPath: '../pages/data/push'
      },
      {
        path: 'manage',
        label: '数据操作管理',
        icon: '',
        element: 'DataManage',
        componentPath: '../pages/data/manage'
      }
    ]
  },
  {
    path: 'ai',
    label: 'AI权限',
    icon: 'TeamOutlined',
    element: 'PageAI',
    componentPath: '../pages/ai',
    modulePath: './modules/ai.tsx'
  },
  {
    path: 'algorithm',
    label: '算法模块管理',
    icon: 'UnorderedListOutlined',
    element: 'PageLayout',
    componentPath: '../components/SaaSLayout',
    modulePath: './modules/algorithm.tsx',
    children: [
      {
        path: 'patients',
        label: '病例列表',
        icon: '',
        element: 'AlgorithmPatients',
        componentPath: '../pages/algorithm/patients'
      }
    ]
  }
]
// 平台权限
const list = [
  {
    platform: 'ct',
    children: [
      {
        path: 'config',
        label: '装机配置',
        icon: 'ClusterOutlined',
        element: 'PageLayout',
        componentPath: '../components/SaaSLayout',
        modulePath: './modules/config.tsx',
        children: [
          {
            path: 'deploy',
            label: '装机部署配置',
            icon: '',
            element: 'ConfigDeploy',
            componentPath: '../pages/config/deploy'
          },
          {
            path: 'module',
            label: '算法模块配置',
            icon: '',
            element: 'ConfigModule',
            componentPath: '../pages/config/module'
          }
        ]
      }
    ]
  },
  {
    platform: 'xray',
    children: []
  }
]

const res = {
  token: 'xxx',
  platforms: ['ct', 'xray']
}

const responseMenuConfig = async (ctx, next) => {
  const { type } = ctx.request.query
  console.log('query & params ==>', type)
  ctx.body = {
    code: 200,
    msg: 'successful',
    data: type === 'ct' ? adminMenus: normalMenus
  }
}
const userLogin = async (ctx, next) => {
  const { username, password } = ctx.request.query
  console.log('username: password ===>', username, password);
  ctx.body = {
    code: 200,
    msg: 'login successful',
    data: {
      username: 'jessie',
      avatar: '',
      token: '1234567890',
      role: '1',
      platforms: ['ct', 'xray']
    }
  }
}
const userLogout = async (ctx, next) => {
  ctx.body = {
    code: 200,
    msg: 'log out successful'
  }
}
export { responseMenuConfig, userLogin, userLogout }
