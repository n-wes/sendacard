<template>
    <div class="fixed-center">
        <q-card 
            id='front'
            class="card"
            flat
        >
            <q-card-section horizontal>
                <q-card-actions 
                    vertical 
                    class="no-pad-full-width justify-around q-px-md"
                    v-if="showPage > 1"
                >
                    <q-btn 
                        flat 
                        class="btn"
                        @click="showPage--"
                    >
                        <q-icon name="navigate_before" />
                    </q-btn>
                </q-card-actions>
                <q-img
                    src="../assets/front_1.png"
                    class='page-dimensions'
                    v-if="showPage == 1"
                >
                    <div 
                        class="front-message fixed-center"
                        :class="(cardType || 'v-1') + '-front'"
                    >
                        <div>{{ frontMsg || 'To Recipient'}}</div>
                    </div>
                </q-img>
                <div
                    class="page-dimensions"
                    :class="(cardType || 'v-1') + '-main'"
                    v-if="showPage == 2"
                >
                    <p>
                        {{ mainMsg || 'Lorem Ipsum' }}
                    </p>
                </div>
                <div
                    class="page-dimensions"
                    :class="(cardType || 'v-1') + '-back'"
                    v-if="showPage == 3"
                >
                        {{ backMsg || 'Lorem Ipsum' }}
                </div>
 
                <q-card-actions 
                    vertical 
                    class="no-pad-full-width justify-around q-px-md"
                    v-if="showPage < 3"
                >
                    <q-btn
                        flat
                        class="btn"
                        @click="showPage++"
                    >
                        <q-icon name="navigate_next" />
                    </q-btn>
                </q-card-actions>
            </q-card-section>
        </q-card>
    </div>
</template>

<script>
import { ref } from 'vue' 

export default {
    name: 'Preview',
    props: {
        cardType: String,
        frontMsg: String,
        backMsg: String,
        mainMsg: String
    },
    setup() {
        const showPage = ref(1)

        return { showPage }
    }
}
</script>

<style scoped>

.card {
    width: 49.5rem;
}
.page-dimensions {
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
.v-1-main {
    font-family: 'Caveat', cursive;
    color: #000;
    font-size: 2rem;
    background: #ECE6DB;
    padding: 1rem;
    text-align: left;
}

.v-1-back {
    font-family: 'Caveat', cursive;
    color: #000;
    font-size: 4rem;
    background: #ECE6DB;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>