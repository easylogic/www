<template>
    <div class='gradient-list'>
        <div v-for="item in gradients" class='gradient-item'>
            <div class='gradient-view' :style="item.css" :title="item.title"></div>
            <div class='gradient-colors'>
                <div class='gradient-color' v-for="color in (item.colors || [])" :style="`background-color: ${color};`"></div>
            </div>
        </div>
    </div>
</template>

<script>

import gradients from '../gradients'

export default {
    data () {
        return { gradients }
    }
}
</script>

