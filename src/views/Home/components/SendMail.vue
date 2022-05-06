<template>
    <section class="email">
        <form @submit.prevent="sendMail">
            <input type="text" v-model="massage" >
            <button>Send</button>
        </form>
    </section>
</template>

<script>
export default {

    data() {
        return {
            token: '5359007058:AAEAwrAtik0Tzh4UrM01DwXqyJjlvJ6krVA',
            chatId: '1419395968',
            massage: '',
           
        }
    },
    methods : {
     async   sendMail () {
            const sms = this.massage.toString()
            await fetch (`https://api.telegram.org/bot${this.token}/sendMessage?chat_id=${this.chatId}&parse_mode=html&text=${sms}`)
            this.massage = ''
        }
    }
}
</script>

 <style lang="scss">
    .email{
            height: 100vh;
            background: black;
            display: flex;
            align-items: center;
            justify-content: center;

        form{
            background: #fff;
            padding: 20px;
            display: flex;
            justify-content: center;
            gap: 15px;

            button{
                padding: 15px 30px;
                cursor: pointer;
                color:#fff;
                text-transform: uppercase;
                background: #000;
                letter-spacing: 3px;
            }

            input{
                padding: 10px;
                width: 500px;
                font-size: 18px;

            }
        }   
    }
</style>

