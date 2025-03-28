const base = {
    get() {
        return {
            url : "http://localhost:8080/hangbanjinchugangguanlixitong/",
            name: "hangbanjinchugangguanlixitong",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/hangbanjinchugangguanlixitong/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "航班进出港管理系统"
        } 
    }
}
export default base
