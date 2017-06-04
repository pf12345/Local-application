<template>
    <div style="height: 100%;">
        <div class="card-list">

            <div class="card m-panel card9" v-for="item in list">
                <div class="card-wrap">
                    <div class="card-main"><!---->
                        <header class="weibo-top m-box m-avatar-box"><a class="m-img-box"><img
                                :src="item.mblog.user.profile_image_url">
                            <!----></a>
                            <div class="m-box-col m-box-dir m-box-center">
                                <div class="m-text-box"><a><h3 class="m-text-cut">{{item.mblog.user.screen_name}}
                                    <!----></h3></a> <h4 class="m-text-cut"><span class="time">{{item.mblog.created_at}}</span> <span
                                        class="from"> 来自 {{item.mblog.source}}</span></h4></div>
                            </div> <!----></header>
                        <article class="weibo-main">
                            <div class="weibo-og">
                                <div class="weibo-text" v-html="item.mblog.text">
                                </div>
                                <div>
                                    <div class="weibo-media media-b">
                                        <ul class="m-auto-list">
                                            <li class="m-auto-box" v-for="img in item.mblog.pics">
                                                <div class="m-img-box m-imghold-square"><img
                                                        :src="img.url">
                                                </div>
                                            </li>
                                        </ul> <!----></div>
                                </div>
                            </div> <!----></article>
                        <footer class="m-ctrl-box m-box-center-a">
                            <div class="m-diy-btn m-box-col m-box-center m-box-center-a"><i
                                    class="m-font m-font-forward"></i> <h4>{{item.mblog.reposts_count || '转发'}}</h4></div>
                            <span class="m-line-gradient"></span>
                            <div class="m-diy-btn m-box-col m-box-center m-box-center-a"><i
                                    class="m-font m-font-comment"></i> <h4>{{item.mblog.comments_count || '评论'}}</h4></div>
                            <span class="m-line-gradient"></span>
                            <div class="m-diy-btn m-box-col m-box-center m-box-center-a"><i
                                    class="m-icon m-icon-like"></i> <h4>{{item.mblog.attitudes_count || '赞'}}</h4></div>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'list',
        data () {
            return {
                list: []
            }
        },
        created () {
            this.$root.queryGet('/getList', (res) => {
                this.list = res.data;
            })
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
