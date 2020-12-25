module.exports = {
    mode: "production", // "production" | "development" | "none"
    // Chosen mode tells webpack to use its built-in optimizations accordingly.
    entry: "./src/index.js", // string | object | array
    // 默认为 ./src
    // 这里应用程序开始执行
    // webpack 开始打包
    output: {
        // webpack 如何输出结果的相关选项
        // path: path.resolve(__dirname, "dist"), // string (default)
        // 所有输出文件的目标路径
        // 必须是绝对路径（使用 Node.js 的 path 模块）
        filename: '[name].[contenthash].js'
        // filename: "index.js", // string (default)
        // entry chunk 的文件名模板
        // publicPath: "/assets/", // string
        // // 输出解析文件的目录，url 相对于 HTML 页面
        // library: { // 这里有一种旧的语法形式可以使用（点击显示）
        //     type: "umd", // 通用模块定义
        //     // the type of the exported library
        //     name: "MyLibrary", // string | string[]
        //     // the name of the exported library

        //     /* Advanced output.library configuration (click to show) */
        },
    };