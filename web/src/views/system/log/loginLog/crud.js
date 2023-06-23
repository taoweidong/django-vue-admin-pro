import { request } from '@/api/service'

export const crudOptions = (vm) => {
  return {
    pageOptions: {
      compact: true
    },
    options: {
      height: '100%'
    },
    viewOptions: {
      componentType: 'row'
    },
    formOptions: {
      defaultSpan: 24 // 默认的表单 span
    },
    columns: [
      {
        title: '关键词',
        key: 'search',
        show: false,
        disabled: true,
        search: {
          disabled: false
        },
        form: {
          disabled: true
        }
      },
      {
        title: 'ID',
        key: 'id',
        width: 90,
        disabled: true,
        form: {
          disabled: true
        }
      },
      {
        title: '账号',
        key: 'username',
        sortable: true,
        search: {
          disabled: false
        },
        width: 180,
        type: 'input',
        form: {
          rules: [ // 表单校验规则
            { required: true, message: '必填项' }
          ],
          component: {
            span: 12
          },
          itemProps: {
            class: { yxtInput: true }
          }
        }
      },
      {
        title: '名称',
        key: 'name',
        sortable: true,
        search: {
          disabled: false
        },
        width: 180,
        type: 'input',
        form: {
          rules: [ // 表单校验规则
            { required: true, message: '必填项' }
          ],
          component: {
            span: 12
          },
          itemProps: {
            class: { yxtInput: true }
          }
        }
      },
      {
        title: '性别',
        key: 'gender',
        sortable: true,
        width: 180,
        type: 'radio',
        dict: {
          data: [{ label: '男', value: 1 }, { label: '女', value: 0 }]
        },
        form: {
          value: 0,
          component: {
            span: 12
          }
        },
        component: { props: { color: 'auto' } } // 自动染色
      },
      {
        title: '邮箱',
        key: 'email',
        sortable: true,
        form: {
          component: {
            span: 12
          },
          rules: [
            { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
          ]
        }
      },
      {
        title: '状态',
        key: 'is_active',
        sortable: true,
        search: {
          disabled: false
        },
        width: 90,
        type: 'radio',
        dict: {
          data: [{ label: '启用', value: true }, { label: '禁用', value: false }]
        },
        form: {
          value: true,
          component: {
            span: 12
          }
        },
        component: { props: { color: 'auto' } } // 自动染色
      },
      {
        title: '部门',
        key: 'dept',
        sortable: true,
        width: 180,
        type: 'tree-selector',
        form: {
          rules: [ // 表单校验规则
            { required: true, message: '必填项' }
          ],
          component: {
            span: 12,
            props: { multiple: false, clearable: true }
          },
          itemProps: {
            class: { yxtInput: true }
          }
        },
        dict: {
          url: '/api/system/dept/',
          isTree: true,
          value: 'id', // 数据字典中value字段的属性名
          label: 'name', // 数据字典中label字段的属性名
          getData: (url, dict) => { // 配置此参数会覆盖全局的getRemoteDictFunc
            return request({ url: url }).then(ret => {
              return ret.data.data
            })
          }
        },
        component: { props: { color: 'auto' } } // 自动染色
      },
      {
        title: '角色',
        key: 'role',
        sortable: true,
        search: {
          disabled: true

        }, // 查询的时候触发一个空方法
        type: 'checkbox',
        dict: {
          url: '/api/system/role/',
          value: 'id', // 数据字典中value字段的属性名
          label: 'name', // 数据字典中label字段的属性名
          getData: (url, dict) => { // 配置此参数会覆盖全局的getRemoteDictFunc
            return request({ url: url }).then(ret => {
              return ret.data.data
            })
          }
        },
        form: {
          rules: [ // 表单校验规则
            { required: true, message: '必填项' }
          ],
          component: {
            span: 12,
            props: {
              dict: {
                cache: false // 表单的dict可以禁用缓存
              }
            }
          },
          itemProps: {
            class: { yxtInput: true }
          }
        },
        component: { props: { color: 'auto' } } // 自动染色
      }
    ]
  }
}
