<template>
    <div class="fixed-center">
        <q-card 
            class="card" flat>
            <q-card-section horizontal>
                <q-img
                    src="../assets/front_1.png"
                    class='letter-img'
                >
                    <div 
                        class="front-message absolute-center"
                        :class="(cardType || 'v-1') + '-front'"
                    >
                        <div>{{ frontMsg || 'To Recipient'}}</div>
                    </div>
                </q-img>

                <q-card-actions vertical class="no-pad-full-width justify-around q-px-md">
                    <q-btn flat class="btn"><q-icon name="navigate_next" /></q-btn>
                </q-card-actions>
            </q-card-section>
        </q-card>
    </div>
</template>

<script>

export default {
    name: 'Preview',
    props: {
        cardType: String,
        frontMsg: String,
        backMsg: String,
        mainMsg: String
    }
}
</script>

<style scoped>

.card {
    width: 43.5rem;
}
.letter-img{
    height: 50rem;
    width: 37.5rem;
}
.front-message {
    background: none;
}
.btn {
    width: 100%;
    height: 60%;
}
.no-pad-full-width {
    padding: 0;
    width: 6rem;
}

/* v-1 Card Type */
.v-1-front {
    font-family: 'Dream Avenue';
    top: 85%;
    color: #000;
    font-size: 2rem;
}
</style>