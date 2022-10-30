const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            taskText: '',
            tasksList: [],
            testNewOb: { text: '', done: false, count: 0, isRemove: false, },
            isActive: false,
            counter: 0,
            change: false,
        }
    },

    methods: {
        addTask() {
            if (this.taskText.length > 4) {
                this.testNewOb.text = this.taskText
                this.testNewOb.count = ++this.counter
                this.tasksList.push({ ...this.testNewOb });
                this.taskText = '';
            }
            else if (!this.isActive) {
                this.isActive = true;
                setTimeout(() => {
                    this.reset();
                }, 3000);
            }

            return;
        },

        reset() {
            this.isActive = false;
        },


        checked(element) {
            if (this.tasksList[element].done === false) {
                this.tasksList[element].done = true;
            } else {
                this.tasksList[element].done = false;
            }
        },

        remove(element) {
            if (this.tasksList[element].isRemove === false) {
                this.tasksList[element].isRemove = true;
            }
            setTimeout(() => {
                this.tasksList.splice(element, 1);
            }, 600)
        }
    },


    mounted() {
        setTimeout(() => {
            this.change = true;
            document.querySelector('button').innerHTML = '<i class="fa-solid fa-plus"></i>';
        }, 2000)

    }

})

app.mount('#app');