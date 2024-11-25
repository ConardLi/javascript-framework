export const zhTranslations = {
    sections: {
        "reactivity": {
            title: "响应式编程 (Reactivity)",
            description: "学习如何在框架中处理响应式数据，实现数据驱动的界面更新",
            snippets: {
                "declare-state": {
                    title: "声明状态 (Declare State)",
                    description: "学习如何在组件中声明响应式状态变量，这些变量的变化会自动触发视图更新。"
                },
                "update-state": {
                    title: "更新状态 (Update State)",
                    description: "了解如何修改响应式状态，包括直接赋值、对象更新和数组操作等不同场景。"
                },
                "computed-state": {
                    title: "计算状态 (Computed State)",
                    description: "学习如何创建依赖于其他状态的计算属性，它们会随依赖的改变自动更新。"
                }
            }
        },
        "templating": {
            title: "模板系统 (Templating)",
            description: "掌握框架的模板语法，学习如何构建动态的用户界面",
            snippets: {
                "minimal-template": {
                    title: "基础模板 (Minimal Template)",
                    description: "了解框架最基本的模板语法，包括文本插值、表达式和基础指令的使用。"
                },
                "styling": {
                    title: "样式处理 (Styling)",
                    description: "学习在组件中添加和管理样式，包括内联样式、类名绑定和动态样式。"
                },
                "loop": {
                    title: "循环渲染 (Loop)",
                    description: "掌握如何渲染列表数据，包括数组遍历、对象遍历和key的使用技巧。"
                },
                "event-click": {
                    title: "点击事件 (Event Click)",
                    description: "学习如何处理用户交互事件，包括事件绑定、事件处理函数和事件修饰符。"
                },
                "dom-ref": {
                    title: "DOM 引用 (DOM Ref)",
                    description: "了解如何直接操作DOM元素，获取元素引用并进行DOM操作。"
                },
                "conditional": {
                    title: "条件渲染 (Conditional)",
                    description: "学习如何根据条件显示或隐藏内容，使用条件渲染指令控制界面。"
                }
            }
        },
        "lifecycle": {
            title: "生命周期 (Lifecycle)",
            description: "理解组件的生命周期，掌握在不同阶段执行代码的方法",
            snippets: {
                "on-mount": {
                    title: "挂载钩子 (On Mount)",
                    description: "学习如何在组件挂载到DOM后执行代码，适用于初始化、数据获取等场景。"
                },
                "on-unmount": {
                    title: "卸载钩子 (On Unmount)",
                    description: "了解如何在组件卸载前进行清理工作，如取消订阅、清除定时器等。"
                }
            }
        },
        "component-composition": {
            title: "组件组合 (Component Composition)",
            description: "学习组件间的通信和组合方式，构建可复用的组件系统",
            snippets: {
                "props": {
                    title: "属性传递 (Props)",
                    description: "学习如何通过属性向子组件传递数据，实现组件间的数据流动。"
                },
                "emit-to-parent": {
                    title: "向父组件通信 (Emit to Parent)",
                    description: "了解如何从子组件向父组件发送事件和数据，实现自下而上的通信。"
                },
                "slot": {
                    title: "插槽 (Slot)",
                    description: "掌握如何使用插槽机制，让父组件向子组件注入内容，提高组件的灵活性。"
                },
                "slot-fallback": {
                    title: "插槽默认值 (Slot Fallback)",
                    description: "学习如何为插槽设置默认内容，在没有提供内容时显示默认值。"
                },
                "context": {
                    title: "上下文 (Context)",
                    description: "了解如何使用上下文机制，在组件树中共享数据，避免属性层层传递。"
                }
            }
        },
        "form-input": {
            title: "表单输入 (Form Input)",
            description: "学习处理各种表单输入，实现数据双向绑定",
            snippets: {
                "input-text": {
                    title: "文本输入 (Input Text)",
                    description: "学习如何处理文本输入框，实现数据绑定和输入验证。"
                },
                "checkbox": {
                    title: "复选框 (Checkbox)",
                    description: "了解如何处理复选框输入，包括单个复选框和复选框组。"
                },
                "radio": {
                    title: "单选框 (Radio)",
                    description: "掌握单选框的使用，处理互斥选择的场景。"
                },
                "select": {
                    title: "下拉选择 (Select)",
                    description: "学习如何实现下拉选择框，处理单选和多选的场景。"
                }
            }
        },
        "webapp-features": {
            title: "Web应用功能 (Webapp Features)",
            description: "掌握构建完整Web应用所需的核心功能",
            snippets: {
                "render-app": {
                    title: "应用渲染 (Render App)",
                    description: "学习如何将应用挂载到DOM中，理解应用的启动过程。"
                },
                "fetch-data": {
                    title: "数据获取 (Fetch Data)",
                    description: "了解如何从服务器获取数据，处理异步请求和加载状态。"
                }
            }
        }
    }
}; 