export const codeExplanations = {
    react: {
        "declare-state": {
            explanation: `在 React 中声明状态使用 useState Hook。

useState 是 React 最基础的 Hook 之一，它返回一个数组，包含:
1. 当前状态值
2. 更新状态的函数

基本语法为: const [state, setState] = useState(initialValue)

useState 的特点:
• 可以保存任何类型的值(数字、字符串、对象、数组等)
• 状态更新会触发组件重新渲染
• 多个 useState 可以同时使用来管理不同的状态`,
            code: {
                "Name.jsx": {
                    explanation: "这个示例展示了如何使用 useState 来管理一个简单的 name 状态"
                }
            }
        },
        "update-state": {
            explanation: `在 React 中更新状态有两种主要方式:

1. 直接设置新值:
   • setState(newValue)
   • 用于简单的状态更新

2. 基于之前的状态更新:
   • setState(prevState => newValue)
   • 用于依赖当前状态的更新

注意事项:
• 状态更新是异步的
• 多个状态更新可能会被批处理
• 不要直接修改状态，要使用 setState 函数
• 如果新状态依赖于之前的状态，建议使用函数式更新`,
            code: {
                "Name.jsx": {
                    explanation: "展示了如何在组件中更新状态值"
                }
            }
        },
        "computed-state": {
            explanation: `React 中的计算状态:

1. 使用 useMemo:
   • 缓存计算结果
   • 依赖项变化时重新计算
   • 优化性能

2. 计算逻辑:
   • 可以使用现有状态派生新状态
   • 支持复杂的计算逻辑
   • 自动跟踪依赖关系

最佳实践:
• 避免在每次渲染时重复计算
• 合理设置依赖项数组
• 只在需要性能优化时使用
• 保持计算逻辑简单清晰`,
            code: {
                "DoubleCount.jsx": {
                    explanation: "展示了如何使用 useMemo 创建计算状态"
                }
            }
        },
        "minimal-template": {
            explanation: `React 组件的最小模板结构:

1. 组件定义:
   • 使用函数组件
   • 返回 JSX
   • 单一根元素

2. JSX 特点:
   • 类似 HTML 的语法
   • 支持 JavaScript 表达式
   • 属性使用驼峰命名

注意事项:
• 组件名必须大写字母开头
• JSX 必须有闭合标签
• className 代替 class
• 可以使用 Fragment 避免多余的 div`,
            code: {
                "HelloWorld.jsx": {
                    explanation: "展示了一个最简单的 React 组件结构"
                }
            }
        },
        "styling": {
            explanation: `React 中的样式处理方式:

1. 内联样式:
   • style 属性接收对象
   • 属性使用驼峰命名
   • 值通常是字符串

2. 外部样式:
   • 导入 CSS 文件
   • 使用 CSS Modules
   • CSS-in-JS 解决方案

最佳实践:
• 优先使用外部样式表
• 合理使用 CSS Modules
• 动态样式使用内联
• 考虑使用 styled-components 等方案`,
            code: {
                "Styling.jsx": {
                    explanation: "展示了 React 中几种常用的样式处理方式"
                }
            }
        }
    },
    vue3: {
        "declare-state": {
            explanation: `在 Vue 3 中声明响应式状态有两种主要方式:

1. 使用 ref():
   • 适用于基本类型数据
   • 需要通过 .value 访问和修改
   • 在模板中会自动解包，不需要写 .value

2. 使用 reactive():
   • 适用于对象类型数据
   • 直接访问和修改属性
   • 提供深层响应性

技术要点:
• ref 是 Vue 3 组合式 API 中最常用的响应式 API
• 支持任意类型的值
• 可以在 setup 函数或 <script setup> 中使用
• 配合 TypeScript 使用时有完整的类型推导`,
            code: {
                "Name.vue": {
                    explanation: "这个组件展示了如何使用 ref 来声明一个响应式的 name 状态，并在模板中使用"
                }
            }
        }
    }
    // 可以继续添加其他框架...
}; 