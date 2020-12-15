<template>
    <v-container>

        <div class="overline"> 2020.12.15 </div>
        <div class="headline"> Design system </div>
        <br>

        <p>We use UI framework Vuetify</p>

        <ul>
            <li>
                <a href="https://vuetifyjs.com/en/components/text-fields/">
                    Take a look at UI components
                </a>
            </li>
            <li>
                We can customize anything
            </li>
            <li>
                Some examples from my previous project

                <v-row>
                    <v-col cols="3">
                        <figure>
                            <a href="https://raw.githubusercontent.com/zlsheepcity/emergn-walrus/master/public/log/zl002-example1.png">
                            <img src="@/assets/log/zl002-example1.png">
                            </a>
                        </figure>
                    </v-col>
                    <v-col cols="3">
                        <figure>
                            <a href="https://raw.githubusercontent.com/zlsheepcity/emergn-walrus/master/public/log/zl002-example2.png">
                            <img src="@/assets/log/zl002-example2.png">
                            </a>
                        </figure>
                    </v-col>
                    <v-col cols="3">
                        <figure>
                            <a href="https://raw.githubusercontent.com/zlsheepcity/emergn-walrus/master/public/log/zl002-example3.png">
                            <img src="@/assets/log/zl002-example3.png">
                            </a>
                        </figure>
                    </v-col>
                </v-row>

            </li>
        </ul>

    </v-container>
</template>

<style scoped>
    figure img {
        max-width: 100%;
    }
</style>
