<template>
    <div>
        <h1></h1>

        <li :key="index"
            @click="preview(index)"
            v-for="(nbase64, index) in imageslist">
            <img style="max-width: 100%;"  :src=nbase64  alt="">
        </li>
    </div>
</template>
<script>
    export default {
        name: "login111",
        data() {
            return {
                msg: this.$route.query.data,
                readpicForm: {
                    username: "admin",
                    password: "123456"
                },
                loading: false,
                pwdType: "password",
                imageslist: [
                    "http://www.tigerdrs.com/Image/Index/zhkf.png"]
            };
        },
        methods: {
            timerdoread(){
                setTimeout(() => {
                    this.readpicList();
                    this.timerdoread();//娃娃消失

                }, 4000);

            },
            preview(index) {
                this.$imagePreview({
                    images: this.imageslist,
                    index: index,
                })
            },
            readpicList() {
                this.$store
                    .dispatch("readpic", this.readpicForm)
                    .then(response => {
                        this.loading = false;

                        let code = response.data.code;
                        if (code == 200) {
                            let varpicList = response.data.data;
                            // eslint-disable-next-line no-unused-vars
                            let thisimagelist=[];
                            for (var i=0;i<varpicList.length;i++)
                            {
                                thisimagelist.push(varpicList[i].base64)
                            }

                           // debugger;
                            this.imageslist=thisimagelist;
                            //debugger;
                        } else {

                        }
                    })
                    .catch(() => {
                        this.loading = false;
                    });

            }
        },
        created() {
            this.timerdoread();
            this.$imagePreview({
                images: this.images,
                index: 0,
                defaultOpt:
                    {
                        fullscreenEl: true,
                        shareEl:
                            false,
                        arrowEl:
                            true,
                        preloaderEl:
                            true,
                        loop:
                            false,
                        bgOpacity:
                            0.85,
                        showHideOpacity:
                            true,
                        errorMsg:
                            '<div class="pswp__error-msg">图片加载失败</div>',
                    }
            })
        }
//   data() { //这种方式也可以
//     return {
//       msg: null
//     };
//   },
        // created() {
        //   this.msg = this.$route.query.data;
        // }
    }
</script>
