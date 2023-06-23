export const crudOptions = (vm) => {
  return {
    pageOptions: {
      compact: true
    },
    options: {
      tableType: 'vxe-table',
      rowKey: true, // 必须设置，true or false
      rowId: 'id',
      height: '100%', // 表格高度100%, 使用toolbar必须设置
      highlightCurrentRow: false

    },
    rowHandle: {
      view: {
        thin: true,
        text: '详情',
        disabled () {
          return !vm.hasPermissions('Retrieve')
        }
      },
      width: 160,
      edit: {
        thin: true,
        text: '',
        show: false,
        disabled () {
          return !vm.hasPermissions('Update')
        }
      },
      remove: {
        thin: true,
        text: '删除',
        disabled () {
          return !vm.hasPermissions('Delete')
        }
      }
    },
    viewOptions: {
      componentType: 'form'
    },
    formOptions: {
      disabled: true,
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
          show: false,
          component: {
            placeholder: '请输入关键词'
          }
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
        title: '请求模块',
        key: 'request_modular',
        search: {
          disabled: false
        },
        width: 140,
        type: 'input',
        form: {
          disabled: true,
          component: {
            placeholder: '请输入请求模块'
          }
        }
      },
      {
        title: '请求地址',
        key: 'request_path',
        search: {
          disabled: false
        },
        width: 220,
        type: 'input',
        form: {
          disabled: true,
          component: {
            placeholder: '请输入请求地址'
          }
        }
      },
      {
        title: '请求参数',
        key: 'request_body',
        search: {
          disabled: true
        },
        disabled: true,
        width: 180,
        type: 'input',
        form: {
          disabled: true,
          component: {
            placeholder: '请输入关键词'
          }
        }
      },
      {
        title: '请求方法',
        key: 'request_method',
        width: 80,
        type: 'input',
        search: {
          disabled: false
        },
        form: {
          disabled: true,
          component: {
            placeholder: '请输入请求方法'
          }
        },
        component: { props: { color: 'auto' } } // 自动染色
      },
      {
        title: '操作说明',
        key: 'request_msg',
        disabled: true,
        form: {
          component: {
            span: 12
          }
        }
      },
      {
        title: 'IP地址',
        key: 'request_ip',
        search: {
          disabled: false
        },
        width: 100,
        type: 'input',
        form: {
          disabled: true,
          component: {
            placeholder: '请输入IP地址'
          }
        },
        component: { props: { color: 'auto' } } // 自动染色
      },
      {
        title: '请求浏览器',
        key: 'request_browser',
        width: 180,
        type: 'input',
        form: {
          disabled: true
        },
        component: { props: { color: 'auto' } } // 自动染色
      },
      {
        title: '响应码',
        key: 'response_code',
        search: {
          disabled: true
        },
        width: 80,
        type: 'input',
        form: {
          disabled: true
        },
        component: { props: { color: 'auto' } } // 自动染色
      },
      {
        title: '操作系统',
        key: 'request_os',
        disabled: true,
        search: {
          disabled: true
        },
        type: 'input',
        form: {
          disabled: true
        },
        component: { props: { color: 'auto' } } // 自动染色
      },
      {
        title: '返回信息',
        key: 'json_result',
        search: {
          disabled: true
        },
        type: 'input',
        form: {
          disabled: true
        },
        component: { props: { color: 'auto' } } // 自动染色
      }, {
        title: '操作人',
        width: 100,
        key: 'creator_name',
        form: {
          disabled: true
        }
      },
      {
        title: '更新时间',
        key: 'update_datetime',
        width: 160,
        show: false,
        type: 'datetime',
        form: {
          disabled: true
        }
      },
      {
        title: '创建时间',
        key: 'create_datetime',
        width: 160,
        type: 'datetime',
        form: {
          disabled: true
        }
      }
    ]
  }
}
