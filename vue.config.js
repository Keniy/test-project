module.exports = {
    lintOnSave: false,
    chainWebpack: config => {
        config.resolve.symlinks(false)
        config.entry('main').add('babel-polyfill')
    }
}